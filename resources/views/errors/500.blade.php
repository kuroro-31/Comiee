@extends('app')

@section('title', __('Server Error'))

@section('content')
  @include('atoms._simple_nav')

  <div class="max-w-md m-8 md:mx-auto bg-white dark:bg-dark-1 rounded border border-eee dark:border-none">
    <h2 class="card-title mb-6">
      500 | Server Error
    </h2>

    <p class="px-6">{{ __('サーバーに何か異常が発生し操作を行うことができませんでした。') }}</p>
    <p class="px-6">{{ __('お手数おかけしますが、時間を置いていただくか運営にご連絡をお願いします。') }}</p>

    <div class="w-full flex justify-between pb-4 px-6 mt-6">
      <a href="/" class="inline-block btn-border">{{ __('トップページへ') }}</a>
    </div>
  </div>
@endsection
