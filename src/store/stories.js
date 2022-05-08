
import { startSessionService } from '../services'

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
      
     }
  }

export default stories_state