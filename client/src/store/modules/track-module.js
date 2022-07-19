export default {
    state: {
      srcVideo: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
    },
    getters:{
      currSong(state) {
        return state.srcVideo
      },
    },
    mutations:{},
    actions:{},
}