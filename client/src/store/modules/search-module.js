import { youtubeService } from '../../services/youtube.service'
import { stationService } from '../../services/station.service'

export default {

  state: {
    track: null,
    searchResults: null,
    genres: stationService.genresQuery()
  },
  getters: {
    searchResults(state) {
      return state.searchResults
    },
     genres(state){
      return state.genres
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