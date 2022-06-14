
import { fetchCurrentMarks , UpdateMarkService, fetchVotingStoryService} from '../services'

const marks_state = {
    state: () => ({ 
        current_marks: [],
        current_voting_story: [],
     }),
    mutations: { 
        setCurrentMarks(state, payload){
            state.current_marks = payload
            console.log(state.current_marks)
        },
        setCurrentVotingStory(state, payload){
          state.current_voting_story = payload
        }
        
     },
    actions: { 

      async fetchCurrentMarks(contex, id){
        var response = await fetchCurrentMarks(id)
        contex.commit('setCurrentMarks', response.data)
      },

      async updateMark(context, data){
        var response = await UpdateMarkService(data)
      },
      async fetchVotingStory(context, data){
        var response = await fetchVotingStoryService(data)
        context.commit('setCurrentVotingStory', response.data.data)
      }
     }
  }

export default marks_state