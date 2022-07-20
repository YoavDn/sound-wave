import { youtubeService } from '../../services/youtube.service'

export default {

  state: {
    // videoSrc: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
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
      // state.videoSrc = `https://www.youtube.com/watch?v=${videoId}`
      state.track = track

    }
  },
  actions: {
    async searchTracks({ commit }, { query }) {
      if (!query || !query.length) return commit({ type: "setSearchResults", tracks: null })
      const tracks = await youtubeService.searchTracks(query)
      console.log('tracks = ', tracks)
      commit({ type: "setSearchResults", tracks })
    }
  },

}