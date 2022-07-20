import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

const app = createApp(App)
app.use(createI18n({
  messages
}))

app.mount('#app')
