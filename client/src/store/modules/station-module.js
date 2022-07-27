import { stationService } from '../../services/station.service'

export default {
    state: {
        stations: null,
        demoStations: null,
        player: null
    },

    mutations: {
        setStations: (state, { stations }) => state.stations = stations,
        setDemoStations: (state, { demoStations }) => state.demoStations = demoStations,
    },

    getters: {
        getStations: (state) => state.stations,
        getDemoStations: (state) => state.demoStations,
        getLikedStation: (state) => {
            return state.stations.find(s => s._id === '62deb26c4c8fc791056c4df6')
        },
        // getCurrStation(state) { return state.currStation },
        getStation: (state) => (id) => {
            const station = state.stations.find(station => station._id === id)
            if (station) return station
            return state.demoStations.find(station => station._id === id)
        },
    },

    actions: {
        async updateTracksInStation({ dispatch, state }, { value, id }) {
            try {
                console.log('id',id)
                const stations = state.stations
                console.log('stations',stations)
                const station = stations.find(s => s._id === id)
                station.tracks = value

                const stations2 = await stationService.save(station)
                console.log('stations2',stations2)

                await dispatch({ type: 'loadStations'})
                // commit({ type: 'setStations', stations2 })
                return station
            } catch {
                console.log('cant update tracks')
            }
            // try {
            //     const stations = await stationService.query()
            //     const station = stations.find(s => s._id === id)
            //     station.tracks = value

            //     const stations2 = await stationService.save(station)
            //     console.log('stations2',stations2)
                
            //     const updatedStation = stations2.find(s => s._id === id)
            //     console.log('updatedStation in try',updatedStation)
            //     await dispatch({ type: 'loadStations', stations2 })

            //     return updatedStation
            // } catch {
            //     console.log('cant update tracks')
            // }
        },

        async loadStations({ commit }) {
            try {
                const stations = await stationService.query()
                commit({ type: 'setStations', stations })
            } catch {
                return console.log('cant load stations');
            }
        },
        async loadDemoStations({ commit }) {
            try {
                const demoStations = await stationService.query(true)
                commit({ type: 'setDemoStations', demoStations })
            } catch {
                return console.log('cant load demoStation');
            }
        },

        async createNewStation({ commit, dispatch }, { user }) {
            try {
                console.log(user);
                const newStation = await stationService.getEmptyStation(user)
                const station = await stationService.save(newStation)
                console.log(station);

                await dispatch({ type: "loadStations" })
                return station

            } catch (err) {
                return console.log(err);
            }
        },


        async updateStation({ dispatch }, { data }) {
            try {
                const { station, track, isNew } = data

                console.log("data =", data);
                let stationToUpdate = JSON.parse(JSON.stringify(station))

                if (track && isNew !== null) {  //if  changing tracks
                    if (station.tracks.some(t => t.id === track.id) && isNew) return // if track alreay in station
                    if (isNew) stationToUpdate.tracks.unshift(track) // adding track
                    else { //removing tracks
                        const idx = station.tracks.findIndex(t => t.id === track.id)
                        stationToUpdate.tracks.splice(idx, 1)
                    }
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