@csrf

@if ($update)
  {{-- 公開設定 --}}
  <h3 class="tracking-widest mb-4 text-[15px]">
    {{ __('公開設定') }}
    <span class="text-xs">
      @if ($book->is_hidden)
        （{{ __('現在非公開中') }}）
      @else
        （{{ __('現在公開中') }}）
      @endif
    </span>
  </h3>
  <div class="checkbox mb-12">
    <label class="light-checkbox">
      <input type="checkbox" name="is_hidden" {{ !$book->is_hidden ?? old('is_hidden') ? '' : 'checked' }}
        class="light-checkbox-Input">
      <span class="light-checkbox-DummyInput">
        <svg width="10" height="8" class="stroke-white" viewBox="0 0 10 8" fill="none">
          <title>hidden work</title>
          <path d="M0.75 3.99998L3.58 6.82998L9.25 1.16998" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </span>
      <span class="light-checkbox-LabelText">{{ __('作品を非公開にする') }}</span>
    </label>
  </div>

  {{-- 全エピソードを有料化する --}}
  <h3 class="tracking-widest mb-4 text-[15px]">{{ __('全エピソードを有料化する') }}</h3>
  <div class="filters mb-12">
    @if (!$book->user->stripe_user_id)
      <p class="mb-4">{{ __('有料販売を行うには、以下の設定を行なってください。') }}</p>
    @endif
    @if (!$book->user->stripe_user_id)
      <a href="/{{ Auth::user()->username }}/settings#earnings" class="btn-border inline-block mt-4">
        {{ __('収益の受け取り準備を完了する') }}
      </a>
    @endif

    @if ($book->user->stripe_user_id)
      {{-- 有料化 --}}
      <input class="visually-hidden" type="radio" name="is_all_charge" value="true"
        @if (!$update) id="is_all_charge_true"
        @else id="is_all_charge_true_update" @endif
        @isset($book->is_all_charge)
            @if ($book->is_all_charge === 'true') checked @endif
        @endisset />
      <label @if (!$update) for="is_all_charge_true" @else for="is_all_charge_true_update" @endif>
        {{ __('有料') }}
      </label>
      {{-- 無料 --}}
      <input class="visually-hidden" type="radio" name="is_all_charge" value="false"
        @if (!$update) id="is_all_charge_false" @else id="is_all_charge_false_update" @endif
        @isset($book->is_all_charge)
            @if ($book->is_all_charge === 'false') checked @endif
        @endisset />
      <label
        @if (!$update) for="is_all_charge_false"
        @else for="is_all_charge_false_update" @endif
        class="ml-4">
        {{ __('無料') }}
      </label>
      {{-- 未設定 --}}
      <input class="visually-hidden" type="radio" name="is_all_charge" value="none"
        @if (!$update) id="is_all_charge_none" @else id="is_all_charge_none_update" @endif
        @isset($book->is_all_charge)
            @if ($book->is_all_charge === 'none') checked @endif
        @endisset />
      <label
        @if (!$update) for="is_all_charge_none"
        @else for="is_all_charge_none_update" @endif
        class="ml-4">
        {{ __('未設定') }}
      </label>
    @endif
  </div>
@endif

{{-- タイトル --}}
<h3 class="tracking-widest mb-4 text-[15px]">{{ __('タイトル') }}</h3>
<div class="mb-12">
  <input type="text" name="title" class="card-input" placeholder="{{ __('30字以内で入力してください') }}" required
    value="{{ $book->title ?? old('title') }}" maxlength="30">
</div>

{{-- サムネイル --}}
<div class="relative flex items-center mt-8 mb-4">
  <h3 class="tracking-widest text-[15px]">{{ __('サムネイル') }}</h3>
  <div class="tooltip cursor-pointer ml-1">
    <svg class="stroke-primary w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
      <title>thumbnail</title>
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
    </svg>
    <div
      class="tooltip-item p-4 hover:flex flex-col flex-wrap whitespace-pre-line w-[300px] lg:w-[552px] top-[-310px] lg:top-[20px] left-[-70px] lg:left-[-90px] bg-white dark:bg-dark text-t-color dark:text-gray shadow-lg">
      <p class="mb-2 py-1 text-[14px]">
        {{ __('投稿できる画像形式はpng,jpg(jpeg),gif, webpです。') }}
      </p>
      <p class="py-1 text-[14px]">
        {{ __('横幅500px, 縦幅500pxの画像サイズが最も綺麗に表示されます。') }}
      </p>
    </div>
  </div>
</div>
<input type="file" name="thumbnail" class="mt-2 mb-12 dark:text-gray"
  @if (!$update) required @endif>

{{-- ジャンル --}}
<h3 class="tracking-widest mb-4 text-[15px]">{{ __('ジャンル') }}</h3>
<div class="mb-12">
  <select name="genre_id" class="flex flex-col items-center">
    <option type="text" value="1"
      @isset($book->genre_id) @if (1 === (int) old('genre_id', $book->genre_id)) selected @endif @endisset>
      {{ __('少年') }}</option>
    <option type="text" value="2"
      @isset($book->genre_id) @if (2 === (int) old('genre_id', $book->genre_id)) selected @endif @endisset>
      {{ __('青年') }}</option>
    <option type="text" value="3"
      @isset($book->genre_id) @if (3 === (int) old('genre_id', $book->genre_id)) selected @endif @endisset>
      {{ __('少女') }}</option>
    <option type="text" value="4"
      @isset($book->genre_id) @if (4 === (int) old('genre_id', $book->genre_id)) selected @endif @endisset>
      {{ __('女性') }}</option>
  </select>
</div>

{{-- 画面タイプ --}}
<div class="filters flex flex-col mb-12">
  <h3 class="tracking-widest text-[15px]">{{ __('画面タイプ') }}</h3>
  <div class="flex items-center mt-4">
    {{-- 縦スク --}}
    <input class="visually-hidden" type="radio" name="screen_type" value="vertical"
      @if (!$update) id="screen_type_vertical"
    @else id="screen_type_vertical_update" @endif
      @if ($update) @isset($book->screen_type)
        @if ($book->screen_type === 'vertical') checked @endif
      @endisset @endif
    />
    <label
      @if (!$update) for="screen_type_vertical" @else for="screen_type_vertical_update" @endif>
      {{ __('縦スクロール') }}
    </label>
    {{-- 横読み --}}
    <input class="visually-hidden" type="radio" name="screen_type" value="horizontal"
      @if (!$update) id="screen_type_horizontal" @else id="screen_type_horizontal_update" @endif
      @isset($book->screen_type)
        @if ($book->screen_type === 'horizontal') checked @endif
      @endisset
      @empty($book->screen_type) checked @endempty />
    <label
      @if (!$update) for="screen_type_horizontal"
    @else for="screen_type_horizontal_update" @endif
      class="ml-4">
      {{ __('横読み') }}
    </label>
  </div>
</div>

{{-- 作品言語 --}}
<h3 class="tracking-widest mb-4 text-[15px]">{{ __('作品言語') }}</h3>
<div class="mb-12">
  <select name="lang" class="flex flex-col items-center">
    <option type="text" value="ja"
      @isset($book->lang) @if ('ja' === old('lang', $book->lang)) selected @endif @endisset>
      日本語</option>
    <option type="text" value="en"
      @isset($book->lang) @if ('en' === old('lang', $book->lang)) selected @endif @endisset>
      English</option>
    <option type="text" value="tw"
      @isset($book->lang) @if ('tw' === old('lang', $book->lang)) selected @endif @endisset>
      繁體中文</option>
    <option type="text" value="cn"
      @isset($book->lang) @if ('cn' === old('lang', $book->lang)) selected @endif @endisset>
      簡体中文</option>
    <option type="text" value="es"
      @isset($book->lang) @if ('es' === old('lang', $book->lang)) selected @endif @endisset>
      Español</option>
    <option type="text" value="fr"
      @isset($book->lang) @if ('fr' === old('lang', $book->lang)) selected @endif @endisset>
      Français</option>
    <option type="text" value="it"
      @isset($book->lang) @if ('it' === old('lang', $book->lang)) selected @endif @endisset>
      Italiano</option>
    <option type="text" value="id"
      @isset($book->lang) @if ('id' === old('lang', $book->lang)) selected @endif @endisset>
      Bahasa Indonesia</option>
    <option type="text" value="th"
      @isset($book->lang) @if ('th' === old('lang', $book->lang)) selected @endif @endisset>
      ภาษาไทย</option>
    <option type="text" value="es"
      @isset($book->lang) @if ('es' === old('lang', $book->lang)) selected @endif @endisset>
      Español</option>
    <option type="text" value="ko"
      @isset($book->lang) @if ('ko' === old('lang', $book->lang)) selected @endif @endisset>
      한국어
    </option>
    <option type="text" value="de"
      @isset($book->lang) @if ('de' === old('lang', $book->lang)) selected @endif @endisset>
      Deutsch</option>
    <option type="text" value="hi"
      @isset($book->lang) @if ('hi' === old('lang', $book->lang)) selected @endif @endisset>
      हिन्दी</option>
    <option type="text" value="ar"
      @isset($book->lang) @if ('ar' === old('lang', $book->lang)) selected @endif @endisset>
      العربية</option>
    <option type="text" value="pt"
      @isset($book->lang) @if ('pt' === old('lang', $book->lang)) selected @endif @endisset>
      Português</option>
    <option type="text" value="bn"
      @isset($book->lang) @if ('bn' === old('lang', $book->lang)) selected @endif @endisset>
      বাংলা</option>

  </select>
</div>

{{-- カラー作品 --}}
<h3 class="tracking-widest mb-4 text-[15px]">{{ __('カラー作品') }}</h3>
<div class="checkbox mb-12">
  <label class="light-checkbox">
    <input type="checkbox" name="is_color"
      @if ($update) {{ $book->is_color ?? old('is_color') ? 'checked' : '' }} @endif
      class="light-checkbox-Input">
    <span class="light-checkbox-DummyInput">
      <svg width="10" height="8" class="stroke-white" viewBox="0 0 10 8" fill="none">
        <title>color work</title>
        <path d="M0.75 3.99998L3.58 6.82998L9.25 1.16998" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </span>
    <span class="light-checkbox-LabelText">{{ __('この作品はカラーです') }}</span>
  </label>
</div>

{{-- タグ --}}
<h3 class="tracking-widest mb-4 text-[15px]">{{ __('タグ') }}</h3>
<div class="mb-12">
  <book-tags-input :initial-tags='@json($book->tag_names ?? [])' :autocomplete-items='@json($allTags ?? [])'>
  </book-tags-input>
</div>

{{-- あらすじ --}}
@isset($create_book_modal_count)
  <h3 class="tracking-widest mb-4 text-[15px]">{{ __('あらすじ') }}</h3>
  <textarea required name="story" class="count_{{ $create_book_modal_count }} card-textarea mb-1"
    placeholder="{{ __('投稿できるのは400文字までです') }}" maxlength="400">{{ $book->story ?? old('story') }}</textarea>
  <div class="mb-4 text-right">
    <span class="string_count_{{ $create_book_modal_count }}">0</span>
    <span>/400</span>
  </div>
@endisset

@if ($update)
  {{-- 完結作品 --}}
  <h3 class="tracking-widest mb-4 text-[15px]">{{ __('完結作品の設定') }}</h3>
  <div class="checkbox mb-12">
    <label class="light-checkbox">
      <input type="checkbox" name="is_complete" {{ $book->is_complete ?? old('is_complete') ? 'checked' : '' }}
        class="light-checkbox-Input">
      <span class="light-checkbox-DummyInput">
        <svg width="10" height="8" class="stroke-white" viewBox="0 0 10 8" fill="none">
          <title>complete work</title>
          <path d="M0.75 3.99998L3.58 6.82998L9.25 1.16998" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </span>
      <span class="light-checkbox-LabelText">{{ __('作品を完結にする') }}</span>
    </label>
  </div>

  {{-- 休載 --}}
  <h3 class="tracking-widest mb-4 text-[15px]">{{ __('休載設定') }}</h3>
  <div class="checkbox mb-12">
    <label class="light-checkbox">
      <input type="checkbox" name="is_suspend" {{ $book->is_suspend ?? old('is_suspend') ? 'checked' : '' }}
        class="light-checkbox-Input">
      <span class="light-checkbox-DummyInput">
        <svg width="10" height="8" class="stroke-white" viewBox="0 0 10 8" fill="none">
          <title>on hiatus</title>
          <path d="M0.75 3.99998L3.58 6.82998L9.25 1.16998" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </span>
      <span class="light-checkbox-LabelText">{{ __('作品を休載する') }}</span>
    </label>
  </div>
@endif

@if (!$update)
  <h3 class="tracking-widest mb-4 text-[15px]">{{ __('作品投稿後の流れ') }}</h3>
  <p class="mb-6 bg-primary bg-opacity-10 text-primary px-4 py-2">
    {{ __('作品を投稿したら、続いてエピソードを追加してみましょう！') }}
  </p>
@endif
