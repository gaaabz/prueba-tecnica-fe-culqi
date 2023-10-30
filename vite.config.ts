import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            '/api': {
                target: 'https://fepruebatecnicaculqi-backend-production.up.railway.app',
                changeOrigin: true,
                secure: false,
                rewrite: path => path.replace(/^\/api/, ''),
            },
        },
    },
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
            '@layouts': path.resolve(__dirname, './src/layouts'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@services': path.resolve(__dirname, './src/services'),
            '@stores': path.resolve(__dirname, './src/stores'),
            '@types': path.resolve(__dirname, './src/types'),
        },
    },
    base: './',
})
