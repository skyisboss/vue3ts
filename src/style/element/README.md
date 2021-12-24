此处的 element-plus 近做为一个配置参考备份，如果要使用需要先安装一下,然后在 vite-config 里进行配置, 一下是配置参考

```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import ElementPlus from "unplugin-element-plus/vite";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    // ElementPlus({
    //   useSource: true,
    // }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
          // directives: true,
          // version: "1.2.0-beta.1",
        }),
      ],
    }),
  ],
})
```