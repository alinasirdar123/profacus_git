import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'public/resource/js-extension/jquery/jquery.min.js',
                'resources/css/app.css',
                'resources/js/app.js',
                'public/resource/bootstrap/css/bootstrap.min.css',
                'public/resource/bootstrap/js/bootstrap.bundle.min.js',
                'public/resource/bootstrap/icons/bootstrap-icons.css',
                'public/resource/js-extension/slick/slick.css',
                'public/resource/js-extension/slick/slick-theme.css',
                'public/resource/js-extension/slick/slick.js',
                'public/resource/custom/custom.css',
                'public/resource/custom/custom.js',
            ],
            refresh: true,
        }),
    ],
});
