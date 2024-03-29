<?php

namespace App\Http\Controllers\Books\Episode\Comment;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use Illuminate\Http\Request;

// use Illuminate\Support\Facades\Mail;
// use App\Mail\books\episodes\comments\LikedCommentMail;

class LikeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('signed')->only('verify');
    }

    /*
    |--------------------------------------------------------------------------
    | コメントにいいね
    |--------------------------------------------------------------------------
     */
    public function __invoke(Request $request)
    {
        $comment = Comment::find($request->comment);

        // クリエイター以外のユーザー
        if ($comment->user->id !== $request->user()->id) {
            $comment->likes()->detach($request->user()->id);
            $comment->likes()->attach($request->user()->id);
        }

        return [
            'id' => $comment->id,
            'countLikes' => $comment->count_likes,
        ];
    }
}
