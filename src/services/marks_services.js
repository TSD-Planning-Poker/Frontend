
import {api} from '../plugins'

export async function fetchCurrentMarks(id){
    var response = await api.get(`/api/stories/${id}/allmarks`)
    return response
}
