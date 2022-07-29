import { stationService } from '../../services/station.service'
import userStore from './user-module'

export default {
    state: {
        stations: null,

        localStations: null,
        player: null
    },

    mutations: {
        setStations: (state, { stations }) => state.stations = stations,
        setLocalStations: (state, { localStations }) => state.localStations = localStations,
    },

    getters: {
        getUserStations(state, getters, rootState, rootGetters) {
            const user = rootGetters.getLoggedInUser
            let stationsToSend = state.stations
            if (user) {
                const userStation = stationsToSend.filter(station => station.createdBy?._id === user._id)
                const userLikedStations = user.stations.map(id => {
                    return getters.getStation(id)
                })
                return [...userStation, ...userLikedStations]

            }
            else if (state.localStations) {
                stationsToSend = stationsToSend.filter(station => station.createdBy?._id === 'u101')
                return [...state.localStations, ...stationsToSend]
            }
            else return stationsToSend.filter(station => station.createdBy?._id === 'u101')
        },

        getStations: (state) => state.stations,
        getLocalStations: (state) => state.localStations,
        getLikedStation: (state, getters, rootState, rootGetters) => {
            const user = rootGetters.getLoggedInUser
            if (user) return state.stations.find(s => s._id === user.likedSongs)
            return state.stations.find(s => s._id === '62deb26c4c8fc791056c4df6')
        },
        getStation: (state) => (id) => {
            const station = state.stations.find(station => station._id === id)
            if (station) return station
            return state.localStations.find(station => station._id === id)
        }

    },




    actions: {
        async updateTracksInStation({ dispatch, state }, { value, id }) {
            try {
                const stations = state.stations
                const station = stations.find(s => s._id === id)
                station.tracks = value

                const stations2 = await stationService.save(station)

                await dispatch({ type: 'loadStations' })
                // commit({ type: 'setStations', stations2 })
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

        loadLocalStations({ commit }) {
            const localStations = stationService.queryLocalStations()
            commit({ type: 'setLocalStations', localStations })
        },


        async createNewStation({ commit, dispatch }, { user }) {
            try {
                const newStation = stationService.getEmptyStation(user)
                if (!user) {
                    const localStations = stationService.queryLocalStations()
                    commit({ type: 'setLocalStations', localStations })
                    return newStation
                }
                const station = await stationService.save(newStation, user)

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

                let stationToUpdate = JSON.parse(JSON.stringify(station))
                const newTrack = JSON.parse(JSON.stringify(track))

                if (track && isNew !== null) {  //if  changing tracks
                    if (station.tracks.some(t => t.id === track.id) && isNew) return // if track alreay in station
                    if (isNew) {

                        newTrack.addedBy = user ? user.fullname : 'Guest'
                        newTrack.addedAt = Date.now()
                        stationToUpdate.tracks.unshift(newTrack)
                    } // adding track

                    else { //removing tracks
                        const idx = station.tracks.findIndex(t => t.id === track.id)
                        stationToUpdate.tracks.splice(idx, 1)
                    }
                }

                const stations = await stationService.save(stationToUpdate, user)
                await dispatch({ type: 'loadStations', stations })
                dispatch({ type: 'loadLocalStations' })

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