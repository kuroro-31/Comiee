<?php

namespace App\Http\Controllers\Stripe;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Episode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PaymentCreateController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('signed')->only('verify');
    }

    /*
    |--------------------------------------------------------------------------
    | Stripe 静的ページのテスト
    |--------------------------------------------------------------------------
     */
    public function __invoke(Request $request)
    {
        /*
        |--------------------------------------------------------------------------
        | データのセット | 作品
        |--------------------------------------------------------------------------
         */
        $book = Book::find($request->book_id);
        $episode = Episode::find($request->episode_id);

        /*
        |--------------------------------------------------------------------------
        | データのセット | 作品
        |--------------------------------------------------------------------------
         */
        if ($request->payment) {
            if ($book->user->stripe_user_id) {
                $stripe = new \Stripe\StripeClient(config('app.stripe_secret'));

                /*
                |--------------------------------------------------------------------------
                | 商品を作成
                |--------------------------------------------------------------------------
                 */
                $product = $stripe->products->create([
                    'name' => $book->title . ' - ' . $episode->number . '話',
                    "metadata" => [
                        "user_id" => Auth::id(),
                        "book_id" => $book->id,
                        "episode_number" => $episode->number,
                    ],
                ], ['stripe_account' => $book->user->stripe_user_id],
                );

                /*
                |--------------------------------------------------------------------------
                | 価格設定
                |--------------------------------------------------------------------------
                 */
                $price = $stripe->prices->create([
                    'product' => $product->id, // 作成した製品と紐づける
                    'unit_amount' => $request->price, // 単価
                    'currency' => 'jpy', // 一旦円で統一
                    'tax_behavior' => 'inclusive',
                ], ['stripe_account' => $book->user->stripe_user_id]);

                /*
                |--------------------------------------------------------------------------
                | 返す
                |--------------------------------------------------------------------------
                 */
                return view('books.episode.payment', [
                    'book' => $book,
                    'episode' => $episode,
                    'price' => $price,
                    'instant_price' => $request->price, // 金額は購入者によって可変
                ]);
            }
        }

        // エラー
        abort(404);
    }
}
