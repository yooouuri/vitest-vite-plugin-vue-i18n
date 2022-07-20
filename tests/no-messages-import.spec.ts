import { it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import App from '../src/App.vue'

import { createI18n } from 'vue-i18n'
// import messages from '@intlify/vite-plugin-vue-i18n/messages'

it('should mount app with hello message', () => {
  const wrapper = mount(App, {
    global: {
      plugins: [createI18n({
        messages: {
          en: {
            hello: 'Hello'
          }
        }
      })]
    }
  })

  expect(wrapper.exists()).toBeTruthy()
  expect(wrapper.html()).toBe('<p>Hello</p>')
})
