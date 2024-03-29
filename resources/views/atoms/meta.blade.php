<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="author" content="Comiee">
<meta name="csrf-token" content="{{ csrf_token() }}"> {{-- axios apiで使用 --}}

{{-- インデックスされるURLの重複を防ぐcanonical設定 --}}
@php
  $parsedUrl = parse_url(url()->current());
  $decodedPath = isset($parsedUrl['path']) ? implode('/', array_map('rawurldecode', explode('/', $parsedUrl['path']))) : '';
  $properUrl = $parsedUrl['scheme'] . '://' . $parsedUrl['host'] . $decodedPath;
@endphp
<link rel="canonical" href="{{ strtok($properUrl, '?#') }}"> {{-- ?や#以降のパラメータを削除 --}}

@hasSection('title')
  <title>@yield('title') | {{ config('app.name') }}</title>
  <meta property="og:title" content="@yield('title') | {{ config('app.name') }}">
  <meta name="twitter:title" content="@yield('title') | {{ config('app.name') }}">
@else
  <title>{{ config('app.name') }} | {{ __('ニッチなマンガが集まるプラットフォーム') }}</title>
  <meta property="og:title" content="{{ config('app.name') }} | {{ __('ニッチなマンガが集まるプラットフォーム') }}">
  <meta name="twitter:title" content="{{ config('app.name') }} | {{ __('ニッチなマンガが集まるプラットフォーム') }}">
@endif

@hasSection('description')
  @yield('description')
@else
  <meta name="description" itemprop="description"
    content="{{ __('Comiee（コミー）は誰もがマンガを投稿でき、創作を楽しめる場所です。気になるクリエイターをフォローして応援したり、自分で投稿して収入を得ることもできます。') }}">
  <meta property="og:description"
    content="{{ __('Comiee（コミー）は誰もがマンガを投稿でき、創作を楽しめる場所です。気になるクリエイターをフォローして応援したり、自分で投稿して収入を得ることもできます。') }}">
  <meta name="twitter:description"
    content="{{ __('Comiee（コミー）は誰もがマンガを投稿でき、創作を楽しめる場所です。気になるクリエイターをフォローして応援したり、自分で投稿して収入を得ることもできます。') }}">
@endif

@hasSection('image')
  @yield('image')
@else
  <meta property="og:image" content="{{ url('/') }}/img/ogp.png">
  <meta property="og:image:secure_url" content="{{ url('/') }}/img/ogp.png">
  <meta name="twitter:image" content="{{ url('/') }}/img/ogp.png">
@endif

<meta property="og:url" content="{{ url('/') }}">
<meta property="og:site_name" content="{{ config('app.name') }}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">


{{-- Google Fonts --}}
{{-- <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet"> --}}
