
import { createStore } from 'vuex'
import rooms from './rooms'
import stories from './stories'
import marks from './marks'
import users from './users'
import tasks from './tasks'

// Create a new store instance.
const store = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    },
    modules: {
        rooms: rooms,
        stories: stories,
        marks: marks,
        users: users,
        tasks: tasks,
    }
  })

export default store;