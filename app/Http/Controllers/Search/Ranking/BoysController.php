<?php

namespace App\Http\Controllers\Search\Ranking;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Book;

class BoysController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | ランキング　：　少年
    |--------------------------------------------------------------------------
    |
    */
    public function __invoke(Request $request)
    {
        // 検索結果を１度に返すクエリを宣言
        $genre_id = 1;
        $pickup = ['genre_id' => $genre_id];
        $query = Book::where($pickup)->latest();

        $sort = $request->input('sort');
        $feature = $request->input('feature');
        // $books = $likes->where('likes_count', '>', 0);

        if ($sort != null) {
            if ($sort === '閲覧回数') {
                $query->orderBy('views', 'desc')->get();
            }
            if ($sort === 'お気に入り数') {
                $query->withCount('likes')->orderBy('likes_count', 'desc')->get();
            }
        } else {
            $sort = 'お気に入り数';
            $query->withCount('likes')->orderBy('likes_count', 'desc')->get();
        }

        if ($feature != null) {
            if ($feature === '完結作品のみ') {
                $query->where('is_complete', 1)->latest();
            }
        } else {
            $feature = '全ての作品';
        }

        $books = $query->paginate(15);
        return view('search.ranking.boys', [
            'books' => $books,
            'sort' => $sort,
            'genre_id' => $genre_id,
            'feature' => $feature
        ]);
    }
}