import { youtubeService } from '../../services/youtube.service'

export default {

  state: {
    videoSrc: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
    searchResults: null,
  },
  getters: {
    currSong(state) {
      return state.videoSrc
    },
    searchResults(state) {
      return state.searchResults
    }
  },
  mutations: {
    setSearchResults(state, { tracks }) {
      state.searchResults = tracks
    },
    setVideoSrc(state, { videoId }) {
      state.videoSrc = `https://www.youtube.com/watch?v=${videoId}`
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