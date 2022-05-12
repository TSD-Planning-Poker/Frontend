
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
