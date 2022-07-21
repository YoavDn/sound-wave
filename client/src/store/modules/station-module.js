import { stationService } from '../../services/station.service'

export default {
    state: {
        stations: null,
        currStation: null
    },

    mutations: {
        loadStations: (state, { stations }) => state.stations = stations,
        setCurrStation: (state, { station }) => state.currStation = station,

    },
    getters: {
        getStations: (state) => state.stations,
        getStation: ({ stations }) => id => {
            if (!id) return stationService.getEmptyStation()
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
                const { station, track } = data
                if (station.tracks.find(currTrack => currTrack.videoId === track.videoId)) throw new Error('Track already in station')
                stationService.addTrackToStation(data)
            } catch (err) {
                return console.log(err);
            }
        }

    }
}