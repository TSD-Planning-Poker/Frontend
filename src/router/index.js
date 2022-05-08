import Dashboard from '../pages/dashboard/dashboard.vue'
import Sidebar from '../pages/sidebar.vue'
import Tasks from '../pages/tasks/tasks.vue'
import Rooms from '../pages/rooms/rooms.vue'
import RoomDtails from '../pages/rooms/room-details.vue'
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
              
      ]
    },
  ];

export default routes