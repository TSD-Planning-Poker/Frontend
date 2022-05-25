
import {api} from '../plugins'
import { notify } from "@kyvg/vue3-notification";

export async function startSessionService(id){
    var response = await api.post(`/api/stories/startsession/${id}`)
    return response
}


export async function finiliseUserStoryService(data){
    try {
        var mark = { "final_mark": data.final_mark }
        console.log(mark)
        var response = await api.post(`/api/stories/${data.id}/finalise/`, mark)
        notify({
            type: 'success',
            title: `${response.data.message}`,
            text: ``,
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

