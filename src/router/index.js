import Dashboard from '../pages/dashboard/dashboard.vue'
import Sidebar from '../pages/sidebar.vue'
import Tasks from '../pages/tasks/tasks.vue'
import Rooms from '../pages/rooms/rooms.vue'
import Users from '../pages/users/users.vue'

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
                path: '/users',
                name: 'users',
                component: Users ,
            },
              
      ]
    },
  ];

export default routes