
import { fetchCurrentMarks , UpdateMarkService} from '../services'

const marks_state = {
    state: () => ({ 
        current_marks: []
     }),
    mutations: { 
        setCurrentMarks(state, payload){
            state.current_marks = payload
            console.log(state.current_marks)
        },
        
     },
    actions: { 

      async fetchCurrentMarks(contex, id){
        var response = await fetchCurrentMarks(id)
        contex.commit('setCurrentMarks', response.data)
      },

      async updateMark(context, data){
        var response = await UpdateMarkService(data)
      }
      
     }
  }

export default marks_state