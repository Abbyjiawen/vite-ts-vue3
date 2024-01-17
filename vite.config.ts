import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueJsx from "@vitejs/plugin-vue-jsx"

export default defineConfig({
  plugins: [vue(), vueJsx(),],
  resolve: {
    alias : {
      "@":path.join(__dirname,'src') ,"#":path.join(__dirname,'types ')
    }
  }
}
)
