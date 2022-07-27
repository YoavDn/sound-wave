import { stationService } from '../../services/station.service'
import userStore from './user-module'

export default {
    state: {
        stations: null,
        demoStations: null,
        localStations: null,
        player: null
    },

    mutations: {
        setStations: (state, { stations }) => state.stations = stations,
        setDemoStations: (state, { demoStations }) => state.demoStations = demoStations,
        setLocalStations: (state, { localStations }) => state.localStations = localStations,
    },

    getters: {
        getStations: (state) => state.stations,
        getDemoStations: (state) => state.demoStations,
        getLocalStations: (state) => state.localStations,
        getLikedStation: (state) => {
            return state.stations.find(s => s._id === '62deb26c4c8fc791056c4df6')
        },
        getStation: (state) => (id) => {
            const demoStation = state.demoStations.find(station => station._id === id)

            if (demoStation) return demoStation // when clicking on demo station
            if (userStore.state.loggedInUser) {
                return state.stations.find(station => station._id === id)
            } else { // when no user logged in
                return state.localStations.find(station => station._id === id)
            }
        },


    },

    actions: {
        async updateTracksInStation({ commit, state }, { value, id }) {
            try {
                console.log('id', id)
                const stations = state.stations
                console.log('stations', stations)
                const station = stations.find(s => s._id === id)
                station.tracks = value

                const stations2 = await stationService.save(station)
                // await dispatch({ type: 'loadStations', stations })
                commit({ type: 'setStations', stations2 })
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

        loadLocalStations({ commit }) {
            const localStations = stationService.queryLocalStations()
            commit({ type: 'setLocalStations', localStations })
        },

        // async setCurrStation({ commit }, { stationId }) {
        //     try {
        //         const station = await stationService.getById(stationId)
        //         commit({ type: 'setCurrStation', station })
        //         return station
        //     } catch {
        //         return console.log('cant get current Station');
        //     }
        // },

        async createNewStation({ commit, dispatch }, { user }) {
            try {
                const newStation = stationService.getEmptyStation(user)
                console.log(newStation);
                if (!user) {
                    const localStations = stationService.queryLocalStations()
                    commit({ type: 'setLocalStations', localStations })
                    return newStation
                }
                const station = await stationService.save(newStation, user)
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
                const user = userStore.state.loggedInUser

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

                const stations = await stationService.save(stationToUpdate, user)
                await dispatch({ type: 'loadStations', stations })
                if (!user) dispatch({ type: 'loadLocalStations' })

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