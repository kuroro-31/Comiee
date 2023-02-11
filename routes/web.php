<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/connect', 'App\Http\Controllers\Stripe\ConnectController')->name('stripe.connect');
Route::post('stripe/webhook', 'App\Http\Controllers\Stripe\PaymentWebhookController')->name('stripe.payment.webhook');

Route::post('change/lang', 'App\Http\Controllers\Others\SetLocaleController')->name('change.lang');
/*
|--------------------------------------------------------------------------
| 認証
|--------------------------------------------------------------------------
|
 */
Auth::routes(['verify' => true]);

Route::get('/', function (Request $request) {
    if (app()->getLocale() == null) {
        $langs = explode(',', $request->server('HTTP_ACCEPT_LANGUAGE'));
        $path = $request->getPathInfo();
        $langs_val = array();

        foreach ($langs as $lang) {
            $langs_val[] = substr($lang, 0, 2);
        }

        switch ($langs_val[0]) {
            case 'ja':
                return redirect('/ja' . $path);
            case 'en':
                return redirect('/en' . $path);
            case 'tw':
                return redirect('/tw' . $path);
            case 'cn':
                return redirect('/cn' . $path);
            case 'es':
                return redirect('/es' . $path);
            case 'fr':
                return redirect('/fr' . $path);
            case 'it':
                return redirect('/it' . $path);
            case 'id':
                return redirect('/id' . $path);
            case 'th':
                return redirect('/th' . $path);
            case 'ko':
                return redirect('/ko' . $path);
            case 'de':
                return redirect('/de' . $path);
            default:
                return redirect('/en' . $path);
        }
    } else {
        return redirect(app()->getLocale());
    }
});

Route::prefix('{lang}')->where(['lang' => 'ja|en|tw|cn|es|fr|it|id|th|ko|de'])->group(function () {

    /*
    |--------------------------------------------------------------------------
    | 検索
    |--------------------------------------------------------------------------
    |
     */
    // トップページ
    Route::get('/', 'App\Http\Controllers\Search\IndexController')->name('search.index');
    // ランキング
    Route::get('/ranking', 'App\Http\Controllers\Search\Ranking\IndexController')->name('ranking');
    Route::any('/ranking/search', 'App\Http\Controllers\Search\Ranking\IndexController')->name('ranking.search');
    Route::get('/ranking/boys', 'App\Http\Controllers\Search\Ranking\BoysController')->name('ranking.boys');
    Route::any('/ranking/boys/search', 'App\Http\Controllers\Search\Ranking\BoysController')->name('ranking.boys.search');
    Route::get('/ranking/youth', 'App\Http\Controllers\Search\Ranking\YouthController')->name('ranking.youth');
    Route::any('/ranking/youth/search', 'App\Http\Controllers\Search\Ranking\YouthController')->name('ranking.youth.search');
    Route::get('/ranking/girls', 'App\Http\Controllers\Search\Ranking\GirlsController')->name('ranking.girls');
    Route::any('/ranking/girls/search', 'App\Http\Controllers\Search\Ranking\GirlsController')->name('ranking.girls.search');
    Route::get('/ranking/woman', 'App\Http\Controllers\Search\Ranking\WomanController')->name('ranking.woman');
    Route::any('/ranking/woman/search', 'App\Http\Controllers\Search\Ranking\WomanController')->name('ranking.woman.search');

    // 今日の新作
    Route::get('/todays_new', 'App\Http\Controllers\Search\TodaysNew\IndexController')->name('todays_new');
    Route::any('/todays_new/search', 'App\Http\Controllers\Search\TodaysNew\IndexController')->name('todays_new.search');
    Route::get('/todays_new/boys', 'App\Http\Controllers\Search\TodaysNew\BoysController')->name('todays_new.boys');
    Route::any('/todays_new/boys/search', 'App\Http\Controllers\Search\TodaysNew\BoysController')->name('todays_new.boys.search');
    Route::get('/todays_new/youth', 'App\Http\Controllers\Search\TodaysNew\YouthController')->name('todays_new.youth');
    Route::any('/todays_new/youth/search', 'App\Http\Controllers\Search\TodaysNew\YouthController')->name('todays_new.youth.search');
    Route::get('/todays_new/girls', 'App\Http\Controllers\Search\TodaysNew\GirlsController')->name('todays_new.girls');
    Route::any('/todays_new/girls/search', 'App\Http\Controllers\Search\TodaysNew\GirlsController')->name('todays_new.girls.search');
    Route::get('/todays_new/woman', 'App\Http\Controllers\Search\TodaysNew\WomanController')->name('todays_new.woman');
    Route::any('/todays_new/woman/search', 'App\Http\Controllers\Search\TodaysNew\WomanController')->name('todays_new.woman.search');

    // タグ検索
    Route::get('/tags/{name}', 'App\Http\Controllers\Search\TagController')->name('search.tag_name');
    // 完結作品
    Route::get('/complete', 'App\Http\Controllers\Search\CompleteController')->name('search.complete');
    Route::middleware(['verified', 'auth'])->group(function () {
        // お気に入り
        Route::get('/like', 'App\Http\Controllers\Search\Like\IndexController')->name('search.like');
        Route::post('/like/search', 'App\Http\Controllers\Search\Like\IndexController')->name('like.search');
        Route::get('/shelf/like', 'App\Http\Controllers\User\ShelfController')->name('user.shelf.like');
        Route::get('/shelf/purchase_history', 'App\Http\Controllers\User\ShelfController')->name('user.shelf.purchase');
        Route::get('/shelf/view_history', 'App\Http\Controllers\User\ShelfController')->name('user.shelf.view');
        // 購入
        Route::get('/payment', 'App\Http\Controllers\Stripe\PaymentCreateController')->name('stripe.payment.loading');
        Route::post('/payment/create/product', 'App\Http\Controllers\Stripe\PaymentCreateController')->name('stripe.payment.create');
    });

    /*
    |--------------------------------------------------------------------------
    | その他
    |--------------------------------------------------------------------------
    |
     */
    Route::get('/company', 'App\Http\Controllers\Others\CompanyController')->name('others.company');
    // ご利用ガイド
    Route::get('/user_guide', 'App\Http\Controllers\Others\UserGuideController')->name('others.user_guide');
    // 利用規約
    Route::get('/terms_of_service', 'App\Http\Controllers\Others\TermsOfServiceController')->name('others.terms');
    // プライバシーポリシー
    Route::get('/privacy_policy', 'App\Http\Controllers\Others\PrivacyPolicyController')->name('others.privacy');
    // 特許商取引
    Route::get('/sct', 'App\Http\Controllers\Others\SctController')->name('others.sct');
    // お問い合せ
    Route::post('/contact', 'App\Http\Controllers\Others\ContactController')->middleware('throttle:2, 1')->name('others.contact');
    // 通報
    Route::post('/report', 'App\Http\Controllers\Others\ReportController')->middleware('throttle:2, 1')->name('others.report');
    // よくあるご質問
    Route::get('/faq', 'App\Http\Controllers\Others\FaqController')->name('others.faq');

    /*
    |--------------------------------------------------------------------------
    | 作品
    |--------------------------------------------------------------------------
    |
     */
    Route::prefix('books')->name('book.')->group(function () {
        Route::post('/', 'App\Http\Controllers\Books\StoreController')
            ->middleware('throttle:2, 1')
            ->name('store');
        Route::delete('/{book_id}', 'App\Http\Controllers\Books\DestroyController')->name('destroy');
        Route::patch('/{book_id}', 'App\Http\Controllers\Books\UpdateController')->name('update');
        // Route::get('/{book}/edit', 'App\Http\Controllers\Books\EditController')->name('edit');
        Route::put('/{book}/like', 'App\Http\Controllers\Books\LikeController')->name('like');
        Route::delete('/{book}/like', 'App\Http\Controllers\Books\UnlikeController')->name('unlike');

        // エピソード
        Route::post('/{book_id}/episode', 'App\Http\Controllers\Books\Episode\StoreController')
            ->middleware('throttle:3, 1')
            ->name('episode.store');
        Route::patch('/{book_id}/{episode_id}', 'App\Http\Controllers\Books\Episode\UpdateController')->name('episode.update');
        // コメント
        Route::post('/{book_id}/{episode_number}', 'App\Http\Controllers\Books\Episode\Comment\StoreController')
            ->middleware('throttle:3, 1')
            ->name('episode.comment.store');
        Route::delete('/{book_id}/{episode_id}/{comment_id}', 'App\Http\Controllers\Books\Episode\Comment\DestroyController')->name('episode.comment.destroy');
        Route::put('/{book_id}/{episode_id}/{comment}/like', 'App\Http\Controllers\Books\Episode\Comment\LikeController')->name('episode.comment.like');
        Route::delete('/{book_id}/{episode_id}/{comment}/like', 'App\Http\Controllers\Books\Episode\Comment\UnlikeController')->name('episode.comment.unlike');

        Route::get('/{book_id}/{episode_number}', 'App\Http\Controllers\Books\Episode\ShowController')->name('episode.show');
        Route::get('/{book_id}', 'App\Http\Controllers\Books\ShowController')->name('show');
    });

    /*
    |--------------------------------------------------------------------------
    | ユーザー
    |--------------------------------------------------------------------------
    |
     */
    Route::patch('/{username}', 'App\Http\Controllers\User\UpdateController')->name('users.update');
    Route::put('/{username}/follow', 'App\Http\Controllers\User\FollowController')->name('users.follow');
    Route::delete('/{username}/follow', 'App\Http\Controllers\User\UnfollowController')->name('users.unfollow');
    Route::get('/{username}/settings', 'App\Http\Controllers\User\Setting\IndexController')->name('users.settings');
    Route::patch('/{username}/settings', 'App\Http\Controllers\User\Setting\UpdateController')->name('users.settings.update');
    Route::get('/{username}', 'App\Http\Controllers\User\ShowController')->name('users.show');
    Route::get('/{username}/followings', 'App\Http\Controllers\User\FollowingsController')->name('users.followings');
    Route::get('/{username}/followers', 'App\Http\Controllers\User\FollowersController')->name('users.followers');
    Route::delete('/{username}/delete', 'App\Http\Controllers\User\DestroyController')->name('users.delete');
});
