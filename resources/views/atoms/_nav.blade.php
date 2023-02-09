@php
  $search = __('作品名、作者で調べる');
@endphp
<div class="bg-white dark:bg-dark w-full flex-none">
  <div class="max-w-8xl mx-auto">
    <div class="py-4 lg:px-8 lg:border-0 mx-4 lg:mx-0">
      <div class="relative flex items-center">

        {{-- ロゴ --}}
        @include('atoms.nav.logo')

        <div class="hidden md:flex items-center ml-16 mr-auto">
          @include('search.atoms._tabs', ['tab' => $tab])
        </div>

        <div class="flex items-center md:ml-auto">

          {{-- 検索 --}}
          <search-form :lang='@json(app()->getLocale())' :search='@json($search)'
            class="md:mr-8 hidden lg:block"></search-form>

          <div class="hidden lg:flex items-center">
            <nav class="text-sm">
              <div class="flex items-center">
                @guest
                  <div class="flex items-center">
                    @include('auth._login')
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
