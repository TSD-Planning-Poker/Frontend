
import { allUsersService, InviteUser } from '../services'

const users_state = {
    state: () => ({ 
        all_users: []
     }),
    mutations: { 
        setAllUsers(state, payload){
            state.all_users = payload
        },
        
     },
    actions: { 

      async allUsers(contex){
        var response = await allUsersService()
        contex.commit('setAllUsers', response.data)
      },

      async inviteUser(contex, data){
        var response = await InviteUser(data)
        console.log(response)
        
      },

      
     }
  }

export default users_state