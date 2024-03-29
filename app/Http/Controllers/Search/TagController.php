<?php

namespace App\Http\Controllers\Search;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use Illuminate\Support\Carbon;

class TagController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | タグ検索結果 一覧
    |--------------------------------------------------------------------------
     */
    public function __invoke(string $name)
    {
        $tag = \Cache::remember("tag.{$name}", Carbon::now()->endOfDay()->addSecond(), function () use ($name) {
            return Tag::where('name', $name)->latest()->first();
        });

        return view('search.tag_name', ['tag' => $tag]);
    }
}
