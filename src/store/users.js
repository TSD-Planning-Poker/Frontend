
import { allUsersService, InviteUser, GetInvitations, Login, Logout } from '../services'

const users_state = {
  state: () => ({
    all_users: [],
    all_invitations: [],
    userToken: "",
  }),
  mutations: {
    setAllUsers(state, payload) {
      state.all_users = payload
    },
    setAllInvitations(state, payload) {
      state.all_invitations = payload
    },
    setUserToken(state, payload) {
      state.userToken = payload
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
    async Login(context, data) {
      var response = await Login(data)
      context.commit('setUserToken', response.data.token)
    },

    async Logout(context) {
      var response = await Logout()
      context.commit('setUserToken', "")
    }

  }
}

export default users_state