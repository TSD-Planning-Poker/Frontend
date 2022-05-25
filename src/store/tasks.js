
import { fetchCurrentTasks, AddTask } from '../services'

const tasks_state = {
    state: () => ({
        current_tasks: []
    }),
    mutations: {
        setCurrentTasks(state, payload) {
            state.current_tasks = payload
        },

    },
    actions: {

        async fetchCurrentTasks(contex, id) {
            var response = await fetchCurrentTasks(id)
            contex.commit('setCurrentTasks', response.data)
        },

        async AddTask(context, data) {
            var response = await AddTask(data)
        }
    }
}

export default tasks_state