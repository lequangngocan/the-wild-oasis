import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      emitWarning: false, // 👈 Tắt warning hiển thị trong trình duyệt
      emitError: true, // (tuỳ chọn) vẫn báo lỗi nghiêm trọng
      failOnWarning: false,
      failOnError: false,
    }),
  ],
});
