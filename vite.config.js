import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

import path from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/scss/app.scss", "resources/js/app.js"],
            refresh: true,
        }),
    ],

    //aggiungiamo alias per resolve con tilde
    resolve: {
        alias: {
            "~resources": "/resources",
        },
    },
    //alias per bootstrap tilde
    resolve: {
        alias: {
            "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
        },
    },
});
