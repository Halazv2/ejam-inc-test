import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@views': path.resolve(__dirname, 'src/views'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@helpers': path.resolve(__dirname, 'src/helpers'),
            '@layouts': path.resolve(__dirname, 'src/layouts'),
            '@/types': path.resolve(__dirname, 'src/types'),
        },
    },
});
