
import { fetchCurrentMarks } from '../services'

const marks_state = {
    state: () => ({ 
        current_marks: []
     }),
    mutations: { 
        setCurrentMarks(state, payload){
            state.current_marks = payload
        },
        
     },
    actions: { 

      async fetchCurrentMarks(contex, id){
        var response = await fetchCurrentMarks(id)
        contex.commit('setCurrentMarks', response.data)
      },
      
     }
  }

export default marks_state