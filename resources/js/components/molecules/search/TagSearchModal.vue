<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import axios from "axios";

const open = ref(false);
const state = reactive({
    search: null,
    array: [],
});

const filter = computed(() => {
    if (state.search) {
        return state.array.filter((item) => {
            return state.search
                .toLowerCase()
                .split(" ")
                .every((v) => item.text.toLowerCase().includes(v));
        });
    } else {
        return state.array;
    }
});

const getData = async () => {
    /* eslint-disable */
    let result = await axios.get("/api/search-tags");
    state.array = result.data;
};
onMounted(() => {
    getData();
});
</script>
<template>
    <div @click.self="open = false">
        <div class="trigger" @click="open = true">
            <slot name="trigger"></slot>
        </div>
        <transition name="modal" appear>
            <div v-show="open" class="overlay" @click.self="open = false">
                <div class="window">
                    <div class="header">
                        <button class="close" @click="open = false">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#333"
                            >
                                <path
                                    d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
                                ></path>
                            </svg>
                        </button>
                        <div class="title"><slot name="trigger"></slot></div>
                    </div>
                    <div class="p-8 h-[60vh] overflow-y-scroll scroll-none">
                        <input
                            v-model="state.search"
                            type="text"
                            :placeholder="t('検索')"
                            class="py-2 px-4 border w-full border-bbb rounded dark:bg-dark-1 dark:border-dark"
                            @focus="open = true"
                        />

                        <div class="my-4">
                            <a
                                v-for="item in filter"
                                :key="item"
                                :href="`/tags/${item.text}`"
                                class="inline-flex m-1 items-center px-4 py-2 cursor-pointer bg-primary hover:bg-opacity-90 text-white rounded-full"
                            >
                                {{ item.text }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<style lang="scss" scoped>
.trigger {
    @apply cursor-pointer hover:text-primary dark:hover:text-ddd;
}
.title {
    @apply text-[#5A5777] dark:text-ddd tracking-widest;
    animation: slide-in 0.3s;
}
@keyframes bounce-in {
    0% {
        transform: translateY(30px);
        opacity: 0;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
}
@keyframes slide-in {
    0% {
        transform: translateX(-30px);
        opacity: 0;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
}
</style>
