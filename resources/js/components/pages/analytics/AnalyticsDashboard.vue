<template>
    <div class="flex w-full mx-auto justify-center">
        <div class="w-full h-screen flex flex-col">
            <!-- Main content -->
            <div class="flex-grow flex flex-col lg:flex-row">
                <!-- Sidebar -->
                <sidebar
                    class="bg-white dark:bg-dark w-full lg:w-1/5 lg:min-h-full lg:border-r border-comiee"
                >
                    <ul class="py-8">
                        <li
                            :class="{
                                'bg-f5 dark:bg-dark-1 dark:text-f5':
                                    selected === 'dashboard',
                            }"
                            class="py-2 mx-4 px-4 rounded-lg flex items-center hover:text-primary dark:hover:text-f5 hover:cursor-pointer"
                            @click="selected = 'dashboard'"
                        >
                            <svg
                                class="h-5 w-5 mr-5"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            {{ t("ダッシュボード") }}
                        </li>
                        <li
                            :class="{
                                'bg-f5 dark:bg-dark-1 dark:text-f5':
                                    selected === 'contents',
                            }"
                            class="py-2 mx-4 px-4 rounded-lg flex items-center hover:text-primary dark:hover:text-f5 hover:cursor-pointer"
                            @click="selected = 'contents'"
                        >
                            <svg
                                class="h-5 w-5 mr-5"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M21.08 8.58003V15.42C21.08 16.54 20.48 17.58 19.51 18.15L13.57 21.58C12.6 22.14 11.4 22.14 10.42 21.58L4.48004 18.15C3.51004 17.59 2.91003 16.55 2.91003 15.42V8.58003C2.91003 7.46003 3.51004 6.41999 4.48004 5.84999L10.42 2.42C11.39 1.86 12.59 1.86 13.57 2.42L19.51 5.84999C20.48 6.41999 21.08 7.45003 21.08 8.58003Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M9.75 12V10.8C9.75 9.26001 10.84 8.63005 12.17 9.40005L13.21 10L14.25 10.6C15.58 11.37 15.58 12.63 14.25 13.4L13.21 14L12.17 14.6C10.84 15.37 9.75 14.74 9.75 13.2V12Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            {{ t("コンテンツ分析") }}
                        </li>
                        <li
                            :class="{
                                'bg-f5 dark:bg-dark-1 dark:text-f5':
                                    selected === 'user',
                            }"
                            class="py-2 mx-4 px-4 rounded-lg flex items-center hover:text-primary dark:hover:text-f5 hover:cursor-pointer"
                            @click="selected = 'user'"
                        >
                            <svg
                                class="h-5 w-5 mr-5"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M17 21H7C3 21 2 20 2 16V8C2 4 3 3 7 3H17C21 3 22 4 22 8V16C22 20 21 21 17 21Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M14 8H19"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M15 12H19"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M17 16H19"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M8.49994 11.2899C9.49958 11.2899 10.3099 10.4796 10.3099 9.47992C10.3099 8.48029 9.49958 7.66992 8.49994 7.66992C7.50031 7.66992 6.68994 8.48029 6.68994 9.47992C6.68994 10.4796 7.50031 11.2899 8.49994 11.2899Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M12 16.3298C11.86 14.8798 10.71 13.7398 9.26 13.6098C8.76 13.5598 8.25 13.5598 7.74 13.6098C6.29 13.7498 5.14 14.8798 5 16.3298"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            {{ t("ユーザー分析") }}
                        </li>
                        <li
                            :class="{
                                'bg-f5 dark:bg-dark-1 dark:text-f5':
                                    selected === 'comments',
                            }"
                            class="py-2 mx-4 px-4 rounded-lg flex items-center hover:text-primary dark:hover:text-f5 hover:cursor-pointer"
                            @click="selected = 'comments'"
                        >
                            <svg
                                class="h-5 w-5 mr-5"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M17 9C17 12.87 13.64 16 9.5 16L8.57001 17.12L8.02 17.78C7.55 18.34 6.65 18.22 6.34 17.55L5 14.6C3.18 13.32 2 11.29 2 9C2 5.13 5.36 2 9.5 2C12.52 2 15.13 3.67001 16.3 6.07001C16.75 6.96001 17 7.95 17 9Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M21.9998 12.86C21.9998 15.15 20.8198 17.1801 18.9998 18.4601L17.6598 21.41C17.3498 22.08 16.4498 22.2101 15.9798 21.6401L14.4998 19.86C12.0798 19.86 9.91982 18.7901 8.56982 17.1201L9.49982 16.0001C13.6398 16.0001 16.9998 12.8701 16.9998 9.00006C16.9998 7.95006 16.7498 6.96007 16.2998 6.07007C19.5698 6.82007 21.9998 9.58005 21.9998 12.86Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M7 9H12"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            {{ t("コメント管理") }}
                        </li>
                        <li
                            :class="{
                                'bg-f5 dark:bg-dark-1 dark:text-f5':
                                    selected === 'sales',
                            }"
                            class="py-2 mx-4 px-4 rounded-lg flex items-center hover:text-primary dark:hover:text-f5 hover:cursor-pointer"
                            @click="selected = 'sales'"
                        >
                            <svg
                                class="h-5 w-5 mr-5"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M11.7405 17.75H17.6605C17.5705 17.83 17.4805 17.9 17.3905 17.98L13.1205 21.18C11.7105 22.23 9.41049 22.23 7.99049 21.18L3.71049 17.98C2.77049 17.28 2.00049 15.73 2.00049 14.56V7.14998C2.00049 5.92998 2.9305 4.57998 4.0705 4.14998L9.05049 2.27999C9.87049 1.96999 11.2305 1.96999 12.0505 2.27999L17.0205 4.14998C17.9705 4.50998 18.7805 5.50999 19.0305 6.52999H11.7305C11.5105 6.52999 11.3105 6.54 11.1205 6.54C9.27048 6.65 8.79048 7.31998 8.79048 9.42998V14.86C8.80048 17.16 9.39049 17.75 11.7405 17.75Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M8.80029 11.22H22.0003"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M22.0003 9.42001V14.97C21.9803 17.19 21.3703 17.74 19.0603 17.74H11.7403C9.3903 17.74 8.80029 17.15 8.80029 14.84V9.41C8.80029 7.31 9.28029 6.63999 11.1303 6.51999C11.3203 6.51999 11.5203 6.51001 11.7403 6.51001H19.0603C21.4103 6.52001 22.0003 7.10001 22.0003 9.42001Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M11.3203 15.26H12.6503"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M14.7505 15.26H18.0205"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            {{ t("収益") }}
                        </li>
                        <li
                            :class="{
                                'bg-f5 dark:bg-dark-1 dark:text-f5':
                                    selected === 'trend',
                            }"
                            class="py-2 mx-4 px-4 rounded-lg flex items-center hover:text-primary dark:hover:text-f5 hover:cursor-pointer"
                            @click="selected = 'trend'"
                        >
                            <svg
                                class="h-5 w-5 mr-5"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M16.5 9.5L12.3 13.7L10.7 11.3L7.5 14.5"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M14.5 9.5H16.5V11.5"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            {{ t("トレンド分析") }}
                        </li>
                        <li
                            :class="{
                                'bg-f5 dark:bg-dark-1 dark:text-f5':
                                    selected === 'ranking',
                            }"
                            class="py-2 mx-4 px-4 rounded-lg flex items-center hover:text-primary dark:hover:text-f5 hover:cursor-pointer"
                            @click="selected = 'ranking'"
                        >
                            <svg
                                class="h-5 w-5 mr-5"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M2 15.29V5.71002C2 4.38002 2.77 4.06002 3.71 5.00002L6.3 7.59002C6.69 7.98002 7.33 7.98002 7.71 7.59002L11.29 4.00002C11.68 3.61002 12.32 3.61002 12.7 4.00002L16.29 7.59002C16.68 7.98002 17.32 7.98002 17.7 7.59002L20.29 5.00002C21.23 4.06002 22 4.38002 22 5.71002V15.3C22 18.3 20 20.3 17 20.3H7C4.24 20.29 2 18.05 2 15.29Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            {{ t("ランキング") }}
                        </li>
                    </ul>
                </sidebar>

                <main class="p-8 w-full overflow-x-hidden">
                    <top-dashboard
                        v-if="selected === 'dashboard'"
                        :user="user"
                        :books="books"
                    ></top-dashboard>
                    <comments-dashboard
                        v-if="selected === 'comments'"
                    ></comments-dashboard>
                    <trend-dashboard
                        v-if="selected === 'trend'"
                    ></trend-dashboard>
                    <ranking-dashboard
                        v-if="selected === 'ranking'"
                    ></ranking-dashboard>
                    <sales-dashboard
                        v-if="selected === 'sales'"
                    ></sales-dashboard>
                    <contents-dashboard
                        v-if="selected === 'contents'"
                        :books="books"
                    ></contents-dashboard>
                    <user-dashboard v-if="selected === 'user'"></user-dashboard>
                </main>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
defineProps<{
    user: Object;
    books: Array<any>;
}>();

const selected = ref("dashboard");

// 外部に公開するプロパティとメソッドを指定し
defineExpose({
    selected,
});
</script>
