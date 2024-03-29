<?php

namespace App\Http\Controllers\Books;

use App\Http\Controllers\Controller;
use App\Http\Requests\BookRequest;
use App\Models\Book;
use App\Models\Tag;
use Illuminate\Support\Facades\Storage;

class UpdateController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('signed')->only('verify');
    }

    /*
    |--------------------------------------------------------------------------
    | 作品の更新
    |--------------------------------------------------------------------------
     */
    public function __invoke(BookRequest $request)
    {
        $book = Book::find($request->book_id);

        // ポリシー
        $this->authorize('update', $book);

        $request->validate([
            'title' => 'required|string|max:50|unique:books,title,' . $book->id . ',id',
            'genre_id' => ['required', 'integer'],
            'lang' => ['required', 'string'],
            'story' => ['nullable', 'string', 'max:400'],
            'thumbnail' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif,webp', 'max:30720'],
        ]);

        $book->user_id = $request->user()->id;
        $book->title = $request->title;
        $book->genre_id = $request->genre_id;
        $book->lang = $request->lang;
        $book->story = $request->story;

        // 完結
        if ($request->is_complete === null) {
            $book->is_complete = false;
        } else {
            $book->is_complete = true;
        }

        // 非公開設定
        if ($request->is_hidden === null) {
            $book->is_hidden = false;
        } else {
            $book->is_hidden = true;
        }

        // カラー作品設定
        if ($request->is_color === null) {
            $book->is_color = false;
        } else {
            $book->is_color = true;
        }

        // 休載設定
        if ($request->is_suspend === null) {
            $book->is_suspend = false;
        } else {
            $book->is_suspend = true;
        }

        // 画面タイプ
        if ($request->input('screen_type') !== null) {
            $book->screen_type = $request->input('screen_type');
        }

        // 全エピソード有料化設定
        if ($request->input('is_all_charge') !== null) {
            $book->is_all_charge = $request->input('is_all_charge');

            $episodes = $book->episodes()->get();
            if ($book->is_all_charge === 'true') {
                foreach ($episodes as $episode) {
                    $episode->is_free = false;
                    $episode->save();
                }
            } elseif ($book->is_all_charge === 'false') {
                foreach ($episodes as $episode) {
                    $episode->is_free = true;
                    $episode->save();
                }
            }
        }

        // サムネイル
        if ($request->has('thumbnail')) {
            $file = $request->file('thumbnail');
            $img = \Image::make($file)->resize(
                1000,
                null,
                function ($constraint) {
                    $constraint->aspectRatio();
                    $constraint->upsize();
                }
            )->limitColors(null)->encode('webp', 0.01); // 多分最大は0.1

            $filePath = 'app/' . env('APP_ENV') . '/b/' . $book->title . '/thumbnail.webp';
            Storage::disk('r2')->put($filePath, $img);
            $book->thumbnail = env('CLOUDFLARE_R2_URL') . '/' . $filePath;

            // s3
            // $book->thumbnail = Storage::disk('r2')->url($filePath);
        }
        // タグ
        $book->tags()->detach();
        $request->tags->each(function ($tagName) use ($book) {
            $tag = Tag::firstOrCreate(['name' => $tagName]);
            $book->tags()->attach($tag);
        });

        // 保存
        $book->save();

        // リロード
        return back()->withSuccess(__('作品の更新が完了しました。'));
    }
}
