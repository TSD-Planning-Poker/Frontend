
import {api} from '../plugins'
import { notify } from "@kyvg/vue3-notification";


export async function InviteUser(data){ 
    try {
        var response = await api.post(`/api/invitations/`, data)
        console.log(response)
        notify({
            type: 'success',
            title: `${response.data.message}`,
            text: `${response.data.data.code}`,
          });
        return response
    } catch(error) {
        console.log(error)
        notify({
            type: 'error',
            title: `${error.response.data.message}`,
            text: `${error.response.data.error}`,
          });
          return error.response
    }
    
    
}

export async function GetInvitations(){ 
    try {
        var response = await api.get(`/api/invitations/`)
        console.log(response)
        // notify({
        //     type: 'success',
        //     title: `${response}`,
        //     text: ``,
        //   });
        return response
    } catch(error) {
        console.log(error)
        // notify({
        //     type: 'error',
        //     title: `${error}`,
        //     text: ``,
        //   });
          return error.response
    }
    
    
}
export async function Login(data) {
    try {
        var response = await api.post(`auth/login/`, data)
        notify({
            type: 'success',
            title: `${data.username}`,
            text: `Logged in`,
        });
        return response
    } catch (error) {
        console.log(error)
        notify({
            type: 'error',
            title: `ERROR`,
            text: `You need to provide valid authentication credentials`,
        });
        return error
    }
}


export async function Logout() {
    try {
        var response = await api.post(`auth/logout/`)

        notify({
            type: 'success',
            title: ``,
            text: `Succesfully logged out`,
        });
        return response
    } catch (error) {
        console.log(error)
        notify({
            type: 'error',
            title: `ERROR`,
            text: `you have already been logged out`,
        });
        return error
    }
}
