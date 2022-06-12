
import { fetchRoomsService, fetchStoriesInRoomsService, addStoryInRoomService, fetchMembersInRoomService, deleteStoryInRoomService } from '../services'

const rooms_state = {
    state: () => ({ 
        rooms: [],
        storiesInRoom: [],
        membersInRoom: []
     }),
    mutations: { 
        setRooms(state, payload){
          state.rooms = payload
        },
        setMembersInRoom(state, payload){
          state.membersInRoom = payload
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

     

      async fetchMembersInRoom(contex, room_id){
        var response = await fetchMembersInRoomService(room_id)
        contex.commit('setMembersInRoom', response.data)
      },

     }
  }

export default rooms_state