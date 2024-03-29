<div class="bg-white dark:bg-dark w-full flex-none border-b border-comiee">
  <div class="max-w-8xl mx-auto">
    <div class="py-4 lg:px-8 lg:border-0 mx-4 lg:mx-0">
      <div class="relative flex items-center">

        @include('atoms.nav.logo')

        <div class="hidden md:flex items-center ml-16 mr-auto">
          @include('search.atoms._tabs', ['tab' => $tab])
        </div>

        <div class="flex items-center md:ml-auto">

          {{-- 検索 --}}
          <search-form class="md:mr-8 hidden lg:block"></search-form>

          <div class="hidden lg:flex items-center">
            <nav class="text-sm">
              <div class="flex items-center">
                @guest
                  <div class="flex items-center">
                    <a href="{{ route('login') }}" class="btn-primary">ログイン</a>
                    <a href="{{ route('register') }}" class="ml-4 hover:text-primary dark:hover:text-f5">新規登録</a>
                  </div>
                @endguest

                @include('atoms.nav.create_book')
              </div>
            </nav>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

@include('atoms._spnav', ['tab' => $tab])
