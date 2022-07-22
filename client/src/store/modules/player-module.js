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
        }
    },
    mutations: {
        loadTrack(state, { track, station = null }) {
            state.currTrack = track
            if (station) state.currStation = station.tracks
        },

        changeTrackInStation(state, { diff }) {
            let trackIdx = state.currStation.findIndex(track => track.id === state.currTrack.id)
            trackIdx += diff
            if (trackIdx > state.currStation.length - 1) {
                trackIdx = 0
            } else if (trackIdx < 0) {
                trackIdx = state.currStation.length - 1
            }
            state.currTrack = state.currStation[trackIdx]
            // console.log('state.currTrack = ', state.currTrack)
            console.log('state.currTrack = ', state.currTrack.title)
        }
    },
    actions: {
    }
}