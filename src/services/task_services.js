
import {api} from '../plugins'

export async function fetchCurrentTasks(id){
    var response = await api.get(`/api/stories/${id}/tasks`)
    return response
}


export async function AddTask(data){
    var response = await api.post(`/api/tasks/`, data)
    return response
}

