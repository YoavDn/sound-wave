import stationModule from "./station-module"

export default {
    state: {
        currTrack: null,
        currStation: null,
    },
    modules: {

    },
    getters: {
        getTrack(state) {
            return state.currTrack
        },
        getCurrStation(state) {
            return state.currStation
        },
    },
    mutations: {
        loadTrack(state, { track, station = null }) {
            state.currTrack = track
            if (station) state.currStation = station
        },

        changeTrackInStation(state, { diff }) {
            let trackIdx = state.currStation.tracks.findIndex(track => track.id === state.currTrack.id)
            trackIdx += diff
            if (trackIdx > state.currStation.tracks.length - 1) {
                trackIdx = 0
            } else if (trackIdx < 0) {
                trackIdx = state.currStation.tracks.length - 1
            }
            state.currTrack = state.currStation.tracks[trackIdx]
        }
    },
    actions: {
    }
}