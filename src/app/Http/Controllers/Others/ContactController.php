<?php

namespace App\Http\Controllers\Others;

use App\Http\Controllers\Controller;

class ContactController extends Controller
{
    /**
     * お問い合わせ
     */
    public function __invoke()
    {
        return view('others.contact');
    }
}