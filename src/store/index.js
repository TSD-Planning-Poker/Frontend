
import { createStore } from 'vuex'
import rooms from './rooms'
import stories from './stories'
import marks from './marks'

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
        marks: marks
    }
  })

export default store;