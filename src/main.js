import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router";

import App from './App.vue'
import Dashboard from './pages/dashboard/dashboard.vue'
// import Login from './pages/authorization/login.vue'
import Sidebar from './pages/sidebar.vue'
import Tasks from './pages/tasks/tasks.vue'
import Rooms from './pages/rooms/rooms.vue'
import Users from './pages/users/users.vue'
import axios from 'axios';

import "./index.css";


const routes = [
    {
      path: "/",
      name: 'home',
      component: Sidebar,
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: Dashboard ,
      },
    //   {
    //     path: '/login',
    //     name: 'login',
    //     component: Login ,
    // },
              {
                path: '/tasks',
                name: 'tasks',
                component: Tasks ,
            },
            {
                path: '/rooms',
                name: 'rooms',
                component: Rooms ,
            },
            {
                path: '/users',
                name: 'users',
                component: Users ,
            },
              
      ]
    },
  ];
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/",
   withCredentials: false,
   headers: {
     Accept: 'application/json',
     'Content-Type': 'application/json',
   },
 
 })

  instance.interceptors.request.use(
    (config) => {
      console.log("axios used")
      let token = localStorage.getItem('authtoken');
      console.log(token)
      if (token) {
        console.log(token)
        config.headers['Authorization'] = `Token ${ token }`;
      }
  
      return config;
    }, 
  
    (error) => {
      return Promise.reject(error);
    }
  );





const app = createApp(App).use(router)
app.config.globalProperties.$http = instance;
app.mount('#app')
