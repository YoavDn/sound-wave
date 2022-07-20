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
        getStations: (state) => state.stations
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
        async addTrackToStation({ commit }, { data }) {
            try {
                stationService.addTrackToStation(data)
            } catch (err) {
                return console.log(err);
            }
        }

    }
}