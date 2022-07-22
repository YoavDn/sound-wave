import { storageService } from '../../services/async-storage.service'
import { stationService } from '../../services/station.service'

export default {
    state: {
        stations: null,
        currStation: null,
        player: null
    },

    mutations: {
        loadStations: (state, { stations }) => state.stations = stations,
        setCurrStation: (state, { station }) => {
            state.currStation = station
            console.log('station = ', station)
        }

    },
    getters: {
        getStations: (state) => state.stations,
        getCurrStation(state) { return state.currStation },
        getStation: ({ stations }) => async (id) => {
            if (!id) return await stationService.getEmptyStation()
            return stations.find(station => station._id === id)
        },
    },

    actions: {
        async loadStations({ commit }) {
            try {
                const stations = await stationService.query()
                commit({ type: 'loadStations', stations })
            } catch {
                return console.log('cant load stations');
            }
        },
        async setCurrStation({ commit }, { stationId }) {
            try {
                const station = await stationService.getById(stationId)
                commit({ type: 'setCurrStation', station })
                return station
            } catch {
                return console.log('cant get current Station');
            }
        },

        async saveStation({ commit }, { station }) {
            try {
                const stations = await stationService.save(station)
                commit({ type: 'loadStations', stations })
            } catch (err) {
                return console.log(err);
            }
        },

        async addTrackToStation({ commit }, { data }) {
            try {
                let { station, track } = data
                if (station._id === 'likedSongs') station = stationService.getById(station._id)
                if (station.tracks?.find(currTrack => currTrack.videoId === track.videoId)) throw new Error('Track already in station')
                const stations = await stationService.addTrackToStation(data)
                commit({ type: 'loadStations', stations })
            } catch (err) {
                return console.log(err);
            }
        },

    }
}