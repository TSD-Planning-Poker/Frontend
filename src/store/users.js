
import { allUsersService, InviteUser, AcceptInvitiation, GetInvitations,Register, Login, Logout } from '../services'

const users_state = {
  state: () => ({
    all_users: [],
    all_invitations: [],
  }),
  mutations: {
    setAllUsers(state, payload) {
      state.all_users = payload
    },
    setAllInvitations(state, payload) {
      state.all_invitations = payload
    },
    setUserToken(state, payload) {
      localStorage.setItem("userToken", payload.token)
      localStorage.setItem("userName", payload.username)
    }

  },
  actions: {

    async allUsers(contex) {
      var response = await allUsersService()
      contex.commit('setAllUsers', response.data)
    },
    async getInvitations(contex) {
      var response = await GetInvitations()
      contex.commit('setAllInvitations', response.data)
    },

    async inviteUser(contex, data) {
      var response = await InviteUser(data)
      console.log(response)

    },
    async acceptInvitiation(context, data){
      var response = await AcceptInvitiation(data)
      console.log(response)
    },

    async Register(context, data) {
      var response = await Register(data)
      response = await Login(data)
      context.commit('setUserToken', {username: data.username, token: response.data.token})
    },

    async Login(context, data) {
      var response = await Login(data)
      context.commit('setUserToken', {username: data.username, token: response.data.token})
    },

    async Logout(context) {
      var response = await Logout()
      context.commit('setUserToken', {username: '', token: ''})
    },
   
  }
}

export default users_state