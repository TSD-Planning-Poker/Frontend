
import { api } from '../plugins'
import { notify } from "@kyvg/vue3-notification";

export async function fetchRoomsService(search) {
    var rooms = await api.get(`/api/rooms/?search=${search}`)
    return rooms
}

export async function fetchStoriesInRoomsService(id) {
    var rooms = await api.get(`/api/rooms/${id}/userstories/`)
    return rooms
}

export async function addStoryInRoomService(story) {
    try {
        var response = await api.post(`/api/stories/`, story)
        notify({
            type: 'success',
            title: `story added`,
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

export async function fetchMembersInRoomService(id) {
    var response = await api.get(`/api/rooms/${id}/allusers/`,)
    return response
}