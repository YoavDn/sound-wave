import { youtubeService } from '../../services/youtube.service'
import _ from 'lodash'

export default {

  state: {
    track: null,
    searchResults: null,
  },
  getters: {
    currTrack(state) {
      return state.track
    },
    searchResults(state) {
      return state.searchResults
    }
  },
  mutations: {
    setSearchResults(state, { tracks }) {
      state.searchResults = tracks
    },
    setTrack(state, { track }) {
      state.track = track

    }
  },
  actions: {
    async searchTracks({ commit }, { query }) {
      if (!query || !query.length) return commit({ type: "setSearchResults", tracks: null })
      const tracks = _.debounce(await youtubeService.searchTracks(query), 4400, { 'maxWait': 2000 })
      commit({ type: "setSearchResults", tracks })
    }
  },

}