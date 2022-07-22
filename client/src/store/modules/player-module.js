import stationModule from "./station-module"

export default {
    state: {
        currTrack: null,
        currStation: null,
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
    modules: {

    },
    getters: {
        // isPlaying(state) {
        //     return state.isPlaying
        // },
        getTrack(state) {
            return state.currTrack
        }
    },
    mutations: {
        loadTrack(state, { track, station = null }) {
            state.currTrack = track
            state.currStation = station.tracks
            // state.currStation = stationModule.getters.getStations
            // state.currStation 
        },
        
        changeTrackInStation(state, { diff }) {
            console.log('currStation = ',state.currStation)
            console.log('diff = ', diff)
        }
    },
    actions: {
    }
}