import { stationService } from '../../services/station.service'

export const stationStore = {
    state: {
        stations: null,
        currStation: null
    },

    mutations: {
        loadStations: (state, { stations }) => state.stations = stations,

    },
    actions: {
        async loadStations({ commit }) {
            try {
                const stations = await stationService.query()
                commit({ type: 'loadStatoins', stations })
            } catch {
                return console.log('cant load stations');
            }
        }

    }
}