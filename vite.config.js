import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        host: "0.0.0.0",
        proxy: {
            "/api": {
                target: "http://localhost:9000",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
            "/test": {
                target: "http://tengyuxin-bucket.oss-cn-beijing.aliyuncs.com",
                ws: true,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/test/, '')
            }
        },
    },
});
