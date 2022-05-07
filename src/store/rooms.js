
import { fetchRoomsService } from '../services'

const rooms_state = {
    state: () => ({ 
        rooms: []
     }),
    mutations: { 
        setRooms(state, payload){
          state.rooms = payload
        }
     },
    actions: { 

      async fetchRooms(contex, search){
        var rooms = await fetchRoomsService(search)
        contex.commit('setRooms', rooms.data)
      },

     }
  }

export default rooms_state