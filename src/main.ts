import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import directives from "@/directives";
import { setupAxios } from '@/utils/SetupAxios'

const app = createApp(App)

setupAxios();

app.use(createPinia())
app.use(router)
app.use(directives)


app.mount('#app')
