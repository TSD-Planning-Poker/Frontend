
import {api} from '../plugins'
import { notify } from "@kyvg/vue3-notification";

export async function fetchCurrentMarks(id){
    var response = await api.get(`/api/stories/${id}/allmarks`)
    return response
}

export async function UpdateMarkService(data){ 
    try {
        var mark = { "mark": data.mark }
        var response = await api.put(`/api/marks/${data.id}/update`, mark)
        notify({
            type: 'success',
            title: `${response.data.message}`,
            text: `Mark updated to: ${response.data.data.mark}`,
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
