import stationModule from "./station-module"

export default {
    state: {
        currTrack: null,
        isPlaying: false,
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
        getIsPlaying(state) {
            return state.isPlaying
        }
    },
    mutations: {
        setCurrStation: (state, { station }) => {
            state.currStation = station
        },
        loadTrack(state, { track, station = null }) {
            state.currTrack = track
            state.isPlaying = true
            if (station) state.currStation = station
            console.log('state.currTrack',state.currTrack)
        },
        setIsPlaying: (state, { isPlaying }) => {
            state.isPlaying = isPlaying
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

        async setCurrStation({ commit }, { stationId }) {
            try {
                const station = await stationService.getById(stationId)
                commit({ type: 'setCurrStation', station })
                return station
            } catch {
                return console.log('cant get current Station');
            }
        },

    }
}