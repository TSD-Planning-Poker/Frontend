
import { startSessionService, finiliseUserStoryService } from '../services'

const stories_state = {
    state: () => ({ 
        
     }),
    mutations: { 
        setRooms(state, payload){
        },
        
     },
    actions: { 

      async startSession(contex, id){
        var response = await startSessionService(id)
      },

      async finiliseUserStory(contex, data){
        var response = await finiliseUserStoryService(data)
      },
      
     }
  }

export default stories_state