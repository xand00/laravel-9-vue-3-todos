import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { createHead } from '@vueuse/head'

const app = createApp(App)
const head = createHead()

const router = createRouter({
  history: createWebHistory(),
})

declare global {
  interface Window {
    Pusher: typeof Pusher;
    Echo: Echo;
  }
}

// Websockets
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
window.Pusher = Pusher

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: import.meta.env.VITE_WEBSOCKETS_KEY,
  wsHost: import.meta.env.VITE_WEBSOCKETS_HOST,
  wsPort: 6001,
  forceTLS: false,
  disableStats: true
})

// Formkit
import { plugin, defaultConfig } from '@formkit/vue'
import { ru } from '@formkit/i18n'
app.use(plugin, defaultConfig({
  locales: { ru },
  locale: 'ru'
}))

// Vue final modal
import vfmPlugin from 'vue-final-modal'
app.use(vfmPlugin)

// Pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)

app.use(router)
app.use(head)
app.mount(document.body)
