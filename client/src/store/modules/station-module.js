import { stationService } from '../../services/station.service'

export default {
    state: {
        stations: null,
        player: null
    },

    mutations: {
        setStations: (state, { stations }) => state.stations = stations,
    },

    getters: {
        getStations: (state) => state.stations,
        getLikedStation: (state) => {
            return state.stations.find(s => s._id === '62deb26c4c8fc791056c4df6')
        },
        // getCurrStation(state) { return state.currStation },
        getStation: ({ stations }) => (id) => {
            // if (!id) return await stationService.getEmptyStation()
            return stations.find(station => station._id === id)
        },
    },

    actions: {
        async updateTracksInStation({ commit }, { value, id }) {
            try {
                const station = await stationService.getById(id)
                station.tracks = value

                const stations = await stationService.save(station)
                commit({ type: 'setStations', stations })
                return station
            } catch {
                console.log('cant update tracks')
            }
        },

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

        async createNewStation({ commit, dispatch }) {
            try {
                const newStation = await stationService.getEmptyStation()
                const station = await stationService.save(newStation)
                console.log(station);
                // commit({ type: 'setStations', stations })
                await dispatch({ type: "loadStations" })
                return station

            } catch (err) {
                return console.log(err);
            }
        },


        async updateStation({ dispatch }, { data }) {
            try {
                const { station, track, isNew } = data
                if (station.tracks.some(t => t.id === track.id) && isNew) return
                let stationToUpdate = JSON.parse(JSON.stringify(station))
                if (isNew) {
                    stationToUpdate.tracks.unshift(track)
                } else {
                    const idx = station.tracks.findIndex(t => t.id === track.id)
                    stationToUpdate.tracks.splice(idx, 1)
                }

                const stations = await stationService.save(stationToUpdate)
                await dispatch({ type: 'loadStations', stations })
            } catch (err) {
                console.log(err);
            }
        },

        async updateLikedSongs() {
            try {

            } catch (err) {
                return console.log('could not update liked Songs');
            }
        }
    }
}