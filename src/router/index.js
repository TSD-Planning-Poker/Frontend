import Dashboard from '../pages/dashboard/dashboard.vue'
import Sidebar from '../pages/sidebar.vue'
import Tasks from '../pages/tasks/tasks.vue'
import Rooms from '../pages/rooms/rooms.vue'
import RoomDtails from '../pages/rooms/room-details.vue'
import Users from '../pages/users/users.vue'
import Authorization from '../pages/users/authorization.vue'
import { createRouter, createWebHashHistory } from "vue-router";
import store from '../store'

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
              path: '/rooms/:id',
              name: 'rooms-details',
              props: true,
              component: RoomDtails ,
          },
            {
                path: '/users',
                name: 'users',
                component: Users ,
            },
            {
              path: '/authorization',
              name: 'authorization',
              component: Authorization,
            },
              
      ]
    },
  ];

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  
  router.beforeEach((to, from, next) => {
    if (to.name !== 'authorization' && store.state.users.userToken == "") next({ name: 'authorization' })
    else next()
  });
  
  
  export default router