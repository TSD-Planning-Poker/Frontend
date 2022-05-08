
import {api} from '../plugins'

export async function startSessionService(id){
    var response = await api.post(`/api/stories/startsession/${id}`)
    return response
}
