<?php

namespace App\Http\Controllers\Search;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | トップページ
    |--------------------------------------------------------------------------
     */
    public function __invoke()
    {
        return view('index');
    }
}
