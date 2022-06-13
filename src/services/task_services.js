
import {api} from '../plugins'
import { notify } from "@kyvg/vue3-notification";


export async function fetchCurrentTasks(id){
    var response = await api.get(`/api/stories/${id}/tasks`)
    return response
}


export async function AddTask(data){
    try{

        var response = await api.post(`/api/tasks/`, data)
        notify({
            type: 'success',
            title: `task added`,
            text: ``,
        });
        return response
    } catch (error) {
    console.log(error)
    notify({
        type: 'error',
        title: `error`,
        text: ``,
    });
    return error.response
}
    
}


export async function deleteTaskInTaskService(data){
    try {
        var response = await api.delete(`/api/tasks/${data.id}/`)
        notify({
            type: 'success',
            title: `task deleted`,
            text: ``,
        });
        return response
    } catch (error) {
        console.log(error)
        notify({
            type: 'error',
            title: `error`,
            text: ``,
        });
        return error.response
    }
}
