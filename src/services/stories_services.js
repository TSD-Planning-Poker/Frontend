
import { api } from '../plugins'
import { notify } from "@kyvg/vue3-notification";

export async function startSessionService(id) {
    var response = await api.post(`/api/stories/startsession/${id}`)
    return response
}


export async function finiliseUserStoryService(data) {
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
    } catch (error) {
        console.log(error)
        notify({
            type: 'error',
            title: `${error.response.data.message}`,
            text: `${error.response.data.error}`,
        });
        return error.response
    }
}

export async function exportUserStoriesService(data) {
    try {
        var response = await api.get(`/api/export/${data}/`)
        // response = await api.get(`/static/${response.data.exportPath}/`)
        notify({
            type: 'success',
            title: `success`,
            text: ``,
        });
        return response
    } catch (error) {
        console.log(error)
        notify({
            type: 'error',
            title: `error during csv file creation`,
            text: ``,
        });
        return error.response
    }
}

export async function exportUserStoriesFromSingleRoom(data) {
    try {
        var response = await api.get(`/api/export/${data.delimiter}/${data.id}/`)
        notify({
            type: 'success',
            title: `success`,
            text: ``,
        });
        return response
    } catch (error) {
        console.log(error)
        notify({
            type: 'error',
            title: `error during csv file creation`,
            text: ``,
        });
        return error.response
    }
}


export async function importUserStoriesFromSingleRoom(data) {
    try {
        console.log(data.file)
        let formData = new FormData();
        formData.append('file', data.file);
        console.log(formData)
        console.log(formData.get("file"))
        var response = await api.post(`/api/import/${data.delimiter}/${data.id}/`, {"file": formData.get("file")})
        notify({
            type: 'success',
            title: `success`,
            text: ``,
        });
        return response
    } catch (error) {
        console.log(error)
        notify({
            type: 'error',
            title: `error during csv file import`,
            text: ``,
        });
        return error.response
    }
}

