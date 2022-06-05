
import { startSessionService, finiliseUserStoryService, exportUserStoriesService, exportUserStoriesFromSingleRoom } from '../services'

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
      var response = await exportUserStoriesService(data);
      context.commit('setExportFile', response.data.exportPath);
    }
  }
}


export default stories_state