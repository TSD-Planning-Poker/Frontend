
import { fetchCurrentTasks, AddTask, deleteTaskInTaskService } from '../services'

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
        },

        async deleteTask(context, id){
            var response = await deleteTaskInTaskService(id)
            console.log(response)
          },

    }
}

export default tasks_state