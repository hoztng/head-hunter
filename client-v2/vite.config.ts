import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base:"/head-hunter/",
  plugins: [react()],
  resolve: {

    alias: {
      '@app': resolve(__dirname, 'src/app'),
      '@features': resolve(__dirname, 'src/features'),
      '@common': resolve(__dirname, 'src/common'),
      '@layout': resolve(__dirname, 'src/layout'),
      '@views': resolve(__dirname, 'src/views'),
      '@routes': resolve(__dirname, 'src/routes'),
      '@components': resolve(__dirname, 'src/components'),
      '@sections': resolve(__dirname,'src/sections')
    }

}
})
