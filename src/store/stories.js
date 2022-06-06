
import { startSessionService, finiliseUserStoryService, exportUserStoriesService, exportUserStoriesFromSingleRoom, importUserStoriesFromSingleRoom} from '../services'

const stories_state = {
  state: () => ({
      exportUrl: '',
  }),
  mutations: {
    setExportFile(state, payload) {
      state.exportUrl = payload
    },
  },
  actions: {

    async startSession(contex, id) {
      var response = await startSessionService(id)
    },

    async finiliseUserStory(contex, data) {
      var response = await finiliseUserStoryService(data)
    },
    async exportUserStories(context, data) {
      var response = await exportUserStoriesService(data.delimiter);
      context.commit('setExportFile', response.data.exportPath);
    },
    async exportUserStoriesSingleRoom(context, data){
      var response = await exportUserStoriesFromSingleRoom(data);
      context.commit('setExportFile', response.data.exportPath);
    },
    async importUserStoriesSingleRoom(context, data){
     localStorage.setItem("multipart", true)
    var response = await importUserStoriesFromSingleRoom(data);
    }
  }
}


export default stories_state