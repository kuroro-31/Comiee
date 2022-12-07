@extends('app')

@php
    $a = __('エピソード');
    $b = __('作品情報');
    $c = __('コメント');
    $d = __('件');
@endphp

@section('title', $book->title)

@isset($book->thumbnail)
    @section('image')
        <meta property="og:image" content="{{ $book->thumbnail }}">
        <meta property="og:image:secure_url" content="{{ $book->thumbnail }}">
        <meta name="twitter:image" content="{{ $book->thumbnail }}">
    @endsection
@endisset

@isset($book->story)
    @section('description')
        <meta name="description" itemprop="description" content="{{ $book->story }}">
        <meta property="og:description" content="{{ $book->story }}">
        <meta name="twitter:description" content="{{ $book->story }}">
    @endsection
@endisset

@section('content')
    @include('atoms._nav', ['tab' => 0])

    <div class="w-full h-full bg-white dark:bg-dark">
        <div class="max-w-7xl mx-auto md:py-8 flex flex-col md:flex-row justify-between">
            {{-- 左サイドバー --}}
            @include('books.atoms.leftSidebar', ['sns_title' => $book->title])

            <div class="w-full flex flex-col md:flex-row py-8">
                {{-- メインコンテンツ --}}
                <div class="px-6 lg:w-2/3">
                    <book-tab :is-comment="false" :one='@json($a)' :two='@json($b)'
                        :three='@json($c)' :four='@json($d)'>
                        @include('books.episode.tab.1')
                        @include('books.episode.tab.2')
                        @include('books.episode.tab.3')
                    </book-tab>
                </div>

                {{-- 右サイドバー --}}
                <div class="lg:pl-4 lg:w-1/3"></div>
            </div>
        </div>
    </div>

    @include('atoms._footer')
@endsection
