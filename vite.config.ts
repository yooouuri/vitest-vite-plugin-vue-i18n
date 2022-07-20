import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18n from '@intlify/vite-plugin-vue-i18n'

export default defineConfig({
  test: {
    environment: 'jsdom'
  },
  plugins: [
    vue(),
    VueI18n({
      compositionOnly: true,
      include: 'src/locale/**',
    })
  ]
})
