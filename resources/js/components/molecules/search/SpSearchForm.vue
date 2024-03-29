<template>
    <div class="relative flex items-center mx-auto">
        <div class="" @click="openSearchForm">
            <slot name="trigger"></slot>
        </div>

        <!-- フォーム -->
        <div v-show="show">
            <div class="search-form">
                <div class="flex items-center w-full">
                    <!-- 検索ボックス -->
                    <div class="flex items-center w-full">
                        <div class="text-gray absolute pl-8 py-2 flex-shrink-0">
                            <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </div>
                        <input
                            ref="inputToFocus"
                            v-model="state.search"
                            type="text"
                            :placeholder="t('検索する')"
                            class="my-2 mx-6 w-full py-2 pl-10 pr-10 bg-dark-1 text-white rounded-2xl"
                            @focus="result = true"
                        />
                    </div>
                    <button
                        v-show="result && state.search.length > 0"
                        class="pr-4 whitespace-nowrap text-f5 text-[14px]"
                        @click="reset()"
                    >
                        {{ t("キャンセル") }}
                    </button>
                </div>

                <div
                    v-if="result && state.search.length > 1"
                    class="flex flex-col justify-start mt-4 bg-dark shadow-lg overflow-y-auto max-h-[500px] scroll-none"
                >
                    <a
                        v-for="item in filter"
                        :key="item"
                        class="w-full flex justify-start items-center p-4 cursor-pointer mb-2"
                        @click="locate(item)"
                    >
                        <div class="">
                            <img
                                :src="item.thumbnail"
                                alt=""
                                class="w-[50px] h-[50px] object-cover rounded-xl"
                            />
                        </div>
                        <div class="ml-4 text-left">
                            <div class="text-xl text-ddd font-bold">
                                {{ item.title }}
                            </div>
                            <div class="text-ddd mt-1">
                                {{ item.name }}
                            </div>
                        </div>
                    </a>
                </div>

                <div
                    v-if="state.search.length > 1 && filter.length === 0"
                    class="text-ddd text-base"
                >
                    {{ t("検索結果がありません") }}
                </div>

                <div
                    class="flex justify-center text-gray text-base py-8"
                    @click="show = false"
                >
                    {{ t("閉じる") }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            show: false,
            result: false,
            state: {
                search: "",
                array: [],
            },
        };
    },
    computed: {
        filter() {
            if (this.state.search) {
                return Object.values(this.state.array).filter((item) => {
                    let word = item.title.concat(item.name);

                    return this.state.search
                        .toLowerCase()
                        .split(" ")
                        .every((v) => word.toLowerCase().includes(v));
                });
            } else {
                return this.state.array;
            }
        },
    },
    mounted() {
        this.getData();
    },
    methods: {
        async getData() {
            let result = await axios.get("/api/search-words");
            this.state.array = result.data;
        },
        locate(item) {
            location.href = "/b/" + item.title;
        },
        reset() {
            this.state.search = "";
        },
        openSearchForm() {
            this.show = true;
            this.$nextTick(() => {
                this.$refs.inputToFocus.focus();
            });
        },
    },
};
</script>
<style lang="scss" scoped>
.search-form {
    @apply fixed top-0 right-0 left-0 bottom-0 w-screen h-screen bg-dark z-[100];
}
</style>
