import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueJsx from "@vitejs/plugin-vue-jsx"


// const pathResolve = (dir: string): any => {
//   return resolve(__dirname, ".", dir)
// }

// const alias: Record<string, string> = {
//   '@': pathResolve("src")
// }

export default defineConfig({
  plugins: [vue(), vueJsx({
    // options are passed on to @vue/babel-plugin-jsx
  }),],
  resolve: {
    alias : {
      "@":path.join(__dirname,'src') ,"#":path.join(__dirname,'types ')
    }
  }
}
)
