@extends('app')

@section('title', __('ログイン'))

@section('content')
  <div class="w-full h-screen flex justify-center items-center">
    <div
      class="sendFormBox w-full max-w-[450px] mx-4 md:mx-auto bg-white dark:bg-dark rounded border dark:lg:border-2 border-b-l-c dark:border-dark dark:lg:border-dark-1  overflow-hidden">
      <div id="overlay" class="fixed inset-0 bg-white z-[999] dark:bg-dark opacity-50 hidden"></div>
      <div class="progress" style="display: none;">
        <div class="color"></div>
      </div>

      <div class="flex justify-center mt-12 px-10">
        <a href="{{ url('/') }}" class="flex-none md:overflow-hidden md:w-auto">
          <span class="sr-only">Comiee - Manga Social Networking Service</span>
          <h1 class="text-2xl font-bold dark:text-white">
            <svg class="h-[30px]" viewBox="0 0 382 301" fill="none">
              <title>Comiee Logo</title>
              <mask id="mask0_793_3558" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                width="382" height="301">
                <path
                  d="M59.8942 16.2733C75.5188 59.2409 79.4249 103.945 79.4249 129.551C20.0515 92.0524 1.30205 127.815 0 150.384C13.0205 219.393 79.4249 173.821 79.4249 173.821C75.5188 238.924 68.5745 254.548 59.8942 281.891C82.8102 293.349 141.489 298.818 167.964 300.12C133.59 249.079 165.36 231.111 190.099 228.507C249.993 237.621 229.16 291.005 210.932 300.12C244.264 304.286 299.471 289.703 322.908 281.891C309.367 260.017 303.811 200.296 303.377 173.821C360.667 208.976 380.632 172.519 381.5 150.384C377.333 91.0109 328.55 110.021 304.679 126.947C299.471 92.5734 314.662 38.8421 322.908 16.2733C291.659 -0.392913 236.973 -1.08734 213.536 0.648725C252.597 43.6163 213.536 72.7171 190.099 70.9593C138.017 67.0532 152.34 14.9712 169.266 0.648725C119.788 1.95077 75.9528 10.1971 59.8942 16.2733Z"
                  fill="#D7CCBE" />
              </mask>
              <g mask="url(#mask0_793_3558)">
                <mask id="mask1_793_3558" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="-6" y="-6"
                  width="392" height="392">
                  <rect x="-5.20898" y="-5.20801" width="390.614" height="390.614" fill="white" />
                </mask>
                <g mask="url(#mask1_793_3558)">
                  <path d="M391.202 129.975L24.1683 448.588L-72.7496 274.809L391.202 129.975Z" fill="#EC3B73" />
                  <path d="M209.628 284.892L321.261 384.499H97.9953L209.628 284.892Z" fill="#C13573" />
                  <path d="M207.268 286.113L423.261 246.457L373.096 430.08L207.268 286.113Z" fill="#ED4A8F" />
                  <path d="M206.238 287.428L398.76 117.627L458.428 239.499L206.238 287.428Z" fill="#AC3C91" />
                  <path d="M163.794 97.488L398.147 129.447L-11.8472 255.895L163.794 97.488Z" fill="#4E2B90" />
                  <path d="M-13.3171 70.5029L162.939 98.4183L-4.02813 248.714L-13.3171 70.5029Z" fill="#5FB6D5" />
                  <path d="M353.193 -51.9997L493.04 145.981L162.744 97.9422L353.193 -51.9997Z" fill="#933391" />
                  <path d="M160.889 100.117L62.8004 -46.9752L300.425 -9.11419L160.889 100.117Z" fill="#208FC2" />
                  <path d="M162.16 100.659L-69.6623 63.7246L32.1969 -94.8282L162.16 100.659Z" fill="#F04791" />
                </g>
              </g>
            </svg>
          </h1>
        </a>
      </div>

      <h2 class="text-2xl flex justify-center mt-4 px-10 dark:text-f5">
        {{ __('ログイン') }}
      </h2>
      <p class="flex justify-center text-base mt-2">{{ __('お客様のメールアドレスを使用') }}</p>
      <form id="sendForm" method="POST" action="{{ route('login') }}" class="px-6 lg:px-10 dark:bg-dark pt-6">
        @csrf

        {{-- エラー文 --}}
        @include('atoms._error_card_list')
        @include('atoms.success')


        {{-- メアド --}}
        <div class="relative mb-4">
          <input id="email" type="text" name="email"
            class="input-field w-full p-4 border-transparent rounded bg-white dark:bg-dark-1 focus:border-[3px] focus:border-primary transition-all"
            required />
          <label for="email"
            class="label absolute top-[5px] left-[10px] text-gray-500 transition-all duration-200 dark:text-f5">{{ __('メールアドレス') }}</label>
          <div
            class="border-wrapper absolute top-0 left-0 w-full h-full border border-b-l-c dark:border-none rounded pointer-events-none">
          </div>
        </div>

        {{-- パスワード --}}
        <div class="relative mb-6">
          <input id="password" type="password" name="password"
            class="input-field w-full p-4 border-transparent rounded bg-white dark:bg-dark-1 focus:border-[3px] focus:border-primary transition-all"
            required />
          <label for="password"
            class="label absolute top-[5px] left-[10px] text-gray-500 transition-all duration-200 dark:text-f5">{{ __('パスワード') }}</label>
          <div
            class="border-wrapper absolute top-0 left-0 w-full h-full border border-b-l-c dark:border-none rounded pointer-events-none">
          </div>
        </div>

        <input type="hidden" name="remember" value="on">
        <div class="w-full flex justify-between items-center pb-6 mb-6 border-b border-b-l-c dark:border-dark-1">
          <a href="{{ route('password.request') }}"
            class="cursor-pointer text-primary dark:text-gray dark:hover:text-ddd">{{ __('パスワードを忘れた場合') }}</a>
          <span class="relative">
            <button type="submit" class="btn-primary py-1.5 px-6 lg:px-8 ml-auto">
              {{ __('次へ') }}
            </button>
          </span>
        </div>
      </form>
      <div class="w-full mb-8 lg:mb-12 flex justify-center">
        <a href="/register" class="cursor-pointer dark:hover:text-ddd">{{ __('または新規登録') }}</a>
      </div>
    </div>
  </div>
@endsection
