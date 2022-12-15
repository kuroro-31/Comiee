import vue from "@vitejs/plugin-vue";
import laravel from "laravel-vite-plugin";
import { defineConfig, splitVendorChunkPlugin } from "vite";
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
        "resources/js/app.js",
        "resources/js/common/atoms/text_count.js",
      ],
      refresh: true,
    }),
    viteCompression(),
    splitVendorChunkPlugin(),
  ],
});
