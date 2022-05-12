
import {api} from '../plugins'

export async function allUsersService(){
    var response = await api.get(`/auth/allusers/`)
    return response
}
