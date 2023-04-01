import vue from "@vitejs/plugin-vue";
import laravel from "laravel-vite-plugin";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
    plugins: [
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        laravel({
            input: [
                "resources/sass/app.scss",
                "resources/js/app.ts",
                "resources/js/common/atoms/common.ts",
            ],
            refresh: true,
        }),
        viteCompression(),
    ],
});