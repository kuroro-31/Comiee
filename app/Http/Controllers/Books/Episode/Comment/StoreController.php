<?php

namespace App\Http\Controllers\Books\Episode\Comment;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StoreController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('signed')->only('verify');
    }

    /*
    |--------------------------------------------------------------------------
    | コメントの保存
    |--------------------------------------------------------------------------
     */
    public function __invoke(Comment $comment, Request $request)
    {
        $comment->user_id = Auth::id();
        $comment->book_id = $request->book_id;
        $comment->episode_id = $request->episode_id;
        $comment->episode_number = $request->episode_number;
        $comment->comment = $request->comment;

        // コメントへのリプライなら
        if ($request->parent_id) {
            $comment->parent_id = $request->parent_id;
        };

        $comment->save();

        // 二重送信防止
        $request->session()->regenerateToken();

        return back();
    }
}
