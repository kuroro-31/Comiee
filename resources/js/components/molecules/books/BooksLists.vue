<template>
    <div ref="box" class="w-full">
        <!-- 検索条件 -->
        <div
            class="text-[14px] flex lg:flex-wrap whitespace-nowrap overflow-x-scroll scroll-none items-center mt-4 lg:mt-0 mb-4"
        >
            <!-- 画面タイプ -->
            <div class="mb-4">
                <select
                    v-model="screen_type"
                    class="bg-white dark:bg-transparent cursor-pointer py-1 px-2 inline-flex justify-center items-center border border-primary rounded-full mr-2 text-primary hover:bg-primary hover:bg-opacity-10 dark:text-[#8ab4f8] dark:border-[#626262]"
                >
                    <option value="">{{ t("画面タイプ") }}</option>
                    <option value="horizontal">{{ t("横読み") }}</option>
                    <option value="vertical">{{ t("縦スクロール") }}</option>
                </select>
            </div>

            <!-- 完結作品 -->
            <div
                :class="
                    is_complete
                        ? 'active hover:bg-opacity-80'
                        : 'hover:bg-opacity-10'
                "
                class="mb-4 cursor-pointer py-1 px-2 flex justify-center items-center border border-primary rounded-full mr-2 text-primary hover:bg-primary hover:bg-opacity-10 dark:text-[#8ab4f8] dark:border-[#626262]"
                @click="is_complete = !is_complete"
            >
                {{ t("完結作品") }}
            </div>

            <!-- カラー作品 -->
            <div
                :class="
                    is_color
                        ? 'active hover:bg-opacity-80'
                        : 'hover:bg-opacity-10'
                "
                class="mb-4 cursor-pointer py-1 px-2 flex justify-center items-center border border-primary rounded-full mr-2 text-primary hover:bg-primary hover:bg-opacity-10 dark:text-[#8ab4f8] dark:border-[#626262]"
                @click="is_color = !is_color"
            >
                {{ t("カラー作品") }}
            </div>

            <!-- 全話無料 -->
            <div
                :class="
                    is_all_charge
                        ? 'active hover:bg-opacity-80'
                        : 'hover:bg-opacity-10'
                "
                class="mb-4 cursor-pointer py-1 px-2 flex justify-center items-center border border-primary rounded-full mr-2 text-primary hover:bg-primary dark:text-[#8ab4f8] dark:border-[#626262]"
                @click="is_all_charge = !is_all_charge"
            >
                {{ t("全話無料") }}
            </div>

            <!-- 今日の新作 -->
            <div
                :class="
                    is_new
                        ? 'active hover:bg-opacity-80'
                        : 'hover:bg-opacity-10'
                "
                class="mb-4 cursor-pointer py-1 px-2 flex justify-center items-center border border-primary rounded-full mr-2 text-primary hover:bg-primary hover:bg-opacity-10 dark:text-[#8ab4f8] dark:border-[#626262]"
                @click="is_new = !is_new"
            >
                {{ t("今日の新作") }}
            </div>

            <!-- 閲覧数 -->
            <div class="mb-4 flex items-center">
                <select
                    v-model="views"
                    class="bg-white dark:bg-transparent cursor-pointer py-1 px-2 inline-flex justify-center items-center border border-primary rounded-full mr-2 text-primary hover:bg-primary hover:bg-opacity-10 dark:text-[#8ab4f8] dark:border-[#626262]"
                >
                    <option value="">{{ t("閲覧数") }}</option>
                    <option value="much">{{ t("多い順") }}</option>
                    <option value="less">{{ t("少ない順") }}</option>
                </select>
            </div>

            <!-- ジャンル -->
            <div class="mb-4 flex items-center">
                <select
                    v-model="genre_id"
                    class="bg-white dark:bg-transparent cursor-pointer py-1 px-2 inline-flex justify-center items-center border border-primary rounded-full mr-2 text-primary hover:bg-primary hover:bg-opacity-10 dark:text-[#8ab4f8] dark:border-[#626262]"
                >
                    <option value="">{{ t("ジャンル") }}</option>
                    <option value="1">{{ t("少年") }}</option>
                    <option value="2">{{ t("青年") }}</option>
                    <option value="3">{{ t("少女") }}</option>
                    <option value="4">{{ t("女性") }}</option>
                </select>
            </div>

            <!-- 言語 -->
            <div class="mb-4 flex items-center">
                <select
                    v-model="manga_lang"
                    class="bg-white dark:bg-transparent cursor-pointer py-1 px-2 inline-flex justify-center items-center border border-primary rounded-full mr-2 text-primary hover:bg-primary hover:bg-opacity-10 dark:text-[#8ab4f8] dark:border-[#626262]"
                >
                    <option value="">{{ t("作品言語") }}</option>
                    <option value="ja">日本語</option>
                    <option value="en">English</option>
                    <option value="tw">繁體中文</option>
                    <option value="cn">簡体中文</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="it">Italiano</option>
                    <option value="id">Bahasa Indonesia</option>
                    <option value="th">ภาษาไทย</option>
                    <option value="ko">한국어</option>
                    <option value="de">Deutsch</option>
                    <option value="hi">हिन्दी</option>
                    <option value="ar">العربية</option>
                    <option value="pt">Português</option>
                    <option value="bn">বাংলা</option>
                </select>
            </div>

            <!-- 休載中 -->
            <div
                :class="
                    is_suspend
                        ? 'active hover:bg-opacity-80'
                        : 'hover:bg-opacity-10'
                "
                class="mb-4 cursor-pointer py-1 px-2 flex justify-center items-center border border-primary rounded-full mr-2 text-primary hover:bg-primary hover:bg-opacity-10 dark:text-[#8ab4f8] dark:border-[#626262]"
                @click="is_suspend = !is_suspend"
            >
                {{ t("休載中") }}
            </div>
        </div>

        <!-- 作品 -->
        <div class="flex flex-wrap">
            <template v-for="manga in filteredManga" :key="manga.id">
                <div class="list-item">
                    <a :href="`/b/${manga.title}`">
                        <template v-if="manga.thumbnail">
                            <img
                                :src="manga.thumbnail"
                                alt="thumbnail"
                                class="w-full md:w-[200px] h-[200px] object-cover"
                            />
                        </template>
                        <template v-else>
                            <img
                                src="/img/noimage.svg"
                                alt=""
                                class="block dark:hidden min-h-[200px] max-h-[200px] w-full md:min-w-[200px] md:max-w-[200px] object-cover"
                            />
                            <img
                                src="/img/noimage-dark.svg"
                                alt="thumbnail"
                                class="hidden dark:block h-[200px] w-full md:w-[200px] object-cover"
                            />
                        </template>
                        <span class="thumbnail-title">{{ manga.title }}</span>
                    </a>
                </div>
            </template>
        </div>

        <!-- ローディング -->
        <template v-if="loading && currentPage <= lastPage">
            <div class="p-4">{{ t("取得中...") }}</div>
        </template>

        <!-- 0件 -->
        <template v-if="filteredManga.length === 0 && !loading">
            <div class="p-4">{{ t("表示する作品がまだありません") }}</div>
        </template>
    </div>
</template>
<script>
import axios from "axios";
export default {
    props: {
        lang: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            // 検索条件
            is_complete: false,
            is_suspend: false,
            is_color: false,
            screen_type: "",
            is_all_charge: false,
            is_new: false,
            views: "",
            genre_id: "",
            manga_lang: this.lang,

            // ロード
            mangas: [],
            currentPage: 1,
            lastPage: 1,
            loading: false,
            error: null,
        };
    },
    computed: {
        setManga() {
            return this.mangas ? this.mangas : null;
        },
        filteredManga() {
            let result = this.setManga;
            if (this.is_complete)
                result = result.filter((manga) => manga.is_complete);
            if (this.is_color)
                result = result.filter((manga) => manga.is_color);
            if (this.is_new) result = result.filter((manga) => manga.is_new);
            if (this.is_suspend)
                result = result.filter((manga) => manga.is_suspend);
            if (this.is_all_charge)
                result = result.filter(
                    (manga) => manga.is_all_charge === "false"
                );
            // 閲覧数 降順、昇順
            if (this.views === "much") {
                result = result.sort((a, b) => b.views - a.views);
            } else if (this.views === "less") {
                result = result.sort((a, b) => a.views - b.views);
            }
            // 言語
            if (this.manga_lang) {
                result = result.filter(
                    (manga) => manga.lang == this.manga_lang
                );
            }

            // 画面タイプ
            if (this.screen_type) {
                result = result.filter(
                    (manga) => manga.screen_type == this.screen_type
                );
            }

            // ジャンル
            if (this.genre_id) {
                let selected_genre = parseInt(this.genre_id); // 文字列 → 数字変換
                result = result.filter(
                    (manga) => manga.genre_id === selected_genre
                );
            }

            // ランダムにする
            result.sort(() => Math.random() - 0.5);
            return result;
        },
    },
    watch: {
        is_complete: function () {
            this.saveFilters("is_complete", this.is_complete);
        },
        is_suspend: function () {
            this.saveFilters("is_suspend", this.is_suspend);
        },
        is_color: function () {
            this.saveFilters("is_color", this.is_color);
        },
        screen_type: function () {
            this.saveFilters("screen_type", this.screen_type);
        },
        is_all_charge: function () {
            this.saveFilters("is_all_charge", this.is_all_charge);
        },
        is_new: function () {
            this.saveFilters("is_new", this.is_new);
        },
        views: function () {
            this.saveFilters("views", this.views);
        },
        genre_id: function () {
            this.saveFilters("genre_id", this.genre_id);
        },
        manga_lang: function () {
            this.saveFilters("manga_lang", this.manga_lang);
        },
    },
    mounted() {
        this.loadMore();
        this.loadFilters();

        window.onscroll = () => {
            //一定位置以上スクロールされればtrueを返す
            let bottomOfWindow =
                document.documentElement.scrollTop + window.innerHeight >=
                document.documentElement.offsetHeight;

            //trueでデータ取得
            if (bottomOfWindow) {
                this.loadMore();
            }
        };
    },
    methods: {
        loadMore() {
            if (this.loading || this.currentPage > this.lastPage) {
                return;
            }
            this.loading = true;
            axios
                .get(`/api/book?page=${this.currentPage}`)
                .then((response) => {
                    this.mangas = this.mangas.concat(response.data.data);
                    this.currentPage = response.data.current_page + 1;
                    this.lastPage = response.data.last_page;
                })
                .catch((error) => {
                    this.error = error;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        saveFilters(key, value) {
            localStorage.setItem(`manga_search_${key}`, value);
        },
        loadFilters() {
            const filterKeys = [
                "is_complete",
                "is_suspend",
                "is_color",
                "screen_type",
                "is_all_charge",
                "is_new",
                "views",
                "genre_id",
                "manga_lang",
            ];

            filterKeys.forEach((key) => {
                const storedValue = localStorage.getItem(`manga_search_${key}`);

                if (storedValue) {
                    if (
                        [
                            "is_complete",
                            "is_suspend",
                            "is_color",
                            "is_all_charge",
                            "is_new",
                        ].includes(key)
                    ) {
                        this[key] = storedValue === "true";
                    } else {
                        this[key] = storedValue;
                    }
                }
            });
        },
    },
};
</script>
<style lang="scss" scoped>
.active {
    @apply bg-primary hover:bg-primary dark:border-primary;
    color: white !important;
}
select {
    @apply appearance-none;
}
</style>
