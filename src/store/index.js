
import { createStore } from 'vuex'
import rooms from './rooms'

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
        rooms: rooms
    }
  })

export default store;