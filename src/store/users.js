
import { allUsersService, InviteUser, Login, Logout } from '../services'

const users_state = {
    state: () => ({ 
        all_users: [],
        userToken: "",
     }),
    mutations: { 
        setAllUsers(state, payload){
            state.all_users = payload
        },
        setUserToken(state, payload){
          state.userToken = payload
        }
        
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
      async Login(context, data){
        var response = await Login(data)
        context.commit('setUserToken', response.data.token)
        console.log(response)
      },

      async Logout(context){
        var response = await Logout()
        context.commit('setUserToken', "")
        console.log(response)
      }
      
     }
  }

export default users_state