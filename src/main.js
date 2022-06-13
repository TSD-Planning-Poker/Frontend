import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router";

import Notifications from '@kyvg/vue3-notification'

import App from './App.vue'
import store from './store'
import router from './router'
import "./index.css";



createApp(App).use(router).use(store).use(Notifications).mount('#app')
