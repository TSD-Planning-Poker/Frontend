
import {api} from '../plugins'


export async function fetchRoomsService(search){
    var rooms = await api.get(`/api/rooms/?search=${search}`)
    return rooms
}

export async function fetchStoriesInRoomsService(id){
    var rooms = await api.get(`/api/rooms/${id}/userstories/`)
    return rooms
}

export async function addStoryInRoomService(story){
    var response = await api.post(`/api/stories/`, story)
    return response
}

export async function fetchMembersInRoomService(id){
    var response = await api.get(`/api/rooms/${id}/allusers/`,)
    return response
}