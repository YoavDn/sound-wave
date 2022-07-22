import { youtubeService } from '../../services/youtube.service'

export default {

  state: {
    track: null,
    searchResults: null,
  },
  getters: {
    searchResults(state) {
      return state.searchResults
    }
  },
  mutations: {
    setSearchResults(state, { tracks }) {
      state.searchResults = tracks
    },
  },
  actions: {
    async searchTracks({ commit }, { query }) {
      if (!query || !query.length) return commit({ type: "setSearchResults", tracks: null })
      const tracks = await youtubeService.searchTracks(query)
      commit({ type: "setSearchResults", tracks })
    }
  },

}