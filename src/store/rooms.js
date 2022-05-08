
import { fetchRoomsService, fetchStoriesInRoomsService, addStoryInRoomService } from '../services'

const rooms_state = {
    state: () => ({ 
        rooms: [],
        storiesInRoom: []
     }),
    mutations: { 
        setRooms(state, payload){
          state.rooms = payload
        },
        setStoriesInRoom(state, payload){
          state.storiesInRoom = payload
        }
     },
    actions: { 

      async fetchRooms(contex, search){
        var rooms = await fetchRoomsService(search)
        contex.commit('setRooms', rooms.data)
      },
      async fetchStoriesInRoom(contex, id){
        var stories = await fetchStoriesInRoomsService(id)
        contex.commit('setStoriesInRoom', stories.data)
      },

      async AddStory(contex, story){
        var response = await addStoryInRoomService(story)
        console.log(response)
      },

     }
  }

export default rooms_state