import { stationService } from '../../services/station.service'

export default {
    state: {
        stations: null,
        currStation: null,
        player: null
    },

    mutations: {
        setStations: (state, { stations }) => state.stations = stations,
        setCurrStation: (state, { station }) => {
            state.currStation = station
        },


    },
    getters: {
        getStations: (state) => state.stations,
        getLikedStation: ({ stations }) => stations.find(s => s._id === 'likedSongs'),
        // getCurrStation(state) { return state.currStation },
        getStation: ({ stations }) => async (id) => {
            if (!id) return await stationService.getEmptyStation()
            return stations.find(station => station._id === id)
        },
    },

    actions: {
        async loadStations({ commit }) {
            try {
                const stations = await stationService.query()
                commit({ type: 'setStations', stations })
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

        async createNewStation({ commit }) {
            try {
                const station = await stationService.getEmptyStation()
                const stations = await stationService.save(station)
                console.log(stations);
                commit({ type: 'setStations', stations })
                return station
            } catch (err) {
                return console.log(err);
            }
        },


        async updateStation({ commit }, { data }) {
            try {
                const { station, track, isNew } = data
                let stationToUpdate = JSON.parse(JSON.stringify(station))
                if (isNew) {
                    stationToUpdate.tracks.push(track)
                } else {
                    const idx = station.tracks.findIndex(t => t.id === track.id)
                    stationToUpdate.tracks.splice(idx, 1)
                }

                const stations = await stationService.save(stationToUpdate)
                commit({ type: 'setStations', stations })
            } catch (err) {
                console.log(err);
            }
        }
    }
}