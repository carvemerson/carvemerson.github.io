import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    base: '/',
    plugins: [vue(), tailwindcss()],
});
