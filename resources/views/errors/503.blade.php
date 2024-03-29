@extends('app')
@section('title', __('Service Unavailable'))

@section('content')
  @include('atoms._simple_nav')

  <div class="card">
    <h2 class="card-title mb-6">
      503 | Service Unavailable
    </h2>

    <p class="px-6">{{ __('サービスは現在利用することができない状態です。') }}</p>
    <p class="px-6">{{ __('お手数おかけしますが、時間を置いていただくか運営にご連絡をお願いします。') }}</p>

    <div class="w-full flex justify-between pb-4 px-6 mt-6">
      <a href="/" class="inline-block btn-border">{{ __('トップページへ') }}</a>
    </div>
  </div>
@endsection
