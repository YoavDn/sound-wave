
export default {
    state: {
        isPlaying: null,
        // player: {
                //isPlayin
                //currTrack
                //currStation
                // playVideo()
                // seekTo()
                // pauseVideo()
                // pauseVideo()
                // setVolume(0)
        // }
    },
    modules: {},
    getters: {
       isPlaying(state){
            return state.isPlaying
       }
    },
    mutations: {
        playVideo(state) {
            state.isPlaying = true
        },
        pauseVideo(state) {
            state.player = false
        },
        setTrack(state, {track}){
            
        },
    },
        actions: {
            playerState(){

            },
            updatePlayerState(){

            }
        }
}