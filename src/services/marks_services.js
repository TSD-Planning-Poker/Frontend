
import {api} from '../plugins'

export async function fetchCurrentMarks(id){
    var response = await api.get(`/api/stories/${id}/allmarks`)
    return response
}

export async function UpdateMarkService(data){ 
    var mark = { "mark": data.mark }
    var response = await api.put(`/api/marks/${data.id}/update`, mark)
    return response
}
