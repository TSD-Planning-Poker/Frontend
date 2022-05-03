
import {api} from '../plugins'


export async function fetchRoomsService(search){
    var rooms = await api.get(`/api/rooms/?search=${search}`)
    return rooms
}

