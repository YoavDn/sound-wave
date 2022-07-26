import { utilService } from './utils.service.js'
// import { storageService } from './local-storage.js'
import { storageService } from './async-storage.service.js';
import { localStorageService } from './local-storage.js';
import { stationsData } from '../data/data.js'
import { httpService } from './http.serivce.js';

const KEY = 'stationsDB'



export const stationService = {
    query,
    save,
    getById,
    getEmptyStation,
    genresQuery
}

// let demoStations;
// (async () => {
//     demoStations = localStorageService.loadFromStorage(KEY)
//     if (!demoStations || !demoStations.length) {
//         demoStations = stationsData.demoStations()
//         const likedSongs = await getEmptyStation(true)
//         demoStations.unshift(likedSongs)
//         storageService.postMany(KEY, demoStations)
//     }
//     return demoStations

// })()

const demoGenres = stationsData.demoGenres()

async function query() {
    // return Promise.resolve(demoStations)
    // return await storageService.query(KEY)
    return await httpService.get('station')
}

function genresQuery() {
    return demoGenres
}

function getById(stationId) {
    const station = demoStations.find(s => s._id === stationId)
    return Promise.resolve(station)
}

async function save(station) {
    try {
        if (station._id) return await httpService.put(`station/${station._id}`, station)
    } catch (err) {
        return console.log("could not make new station", err);
    }
    // if (station._id) await storageService.put(KEY, station)
    // else {
    //     station._id = utilService.makeId()
    //     await storageService.post(KEY, station)
    // }
    // return await query()
    return await httpService.post('station', station)
}

async function remove(station) {
    await storageService.remove(KEY, station)
    return storageService.query(KEY)
}

// async function addTrackToStation(data) {
//     const { station, track } = data
//     const stations = await storageService.query(KEY)
//     const stationIdx = stations.findIndex(s => s._id === station._id)

//     stations[stationIdx].tracks.unshift(track)
//     await storageService.put(KEY, stations[stationIdx])
//     return stations
// }

// async function removeTrackFromStation({ station, track }) {
//     const stationIdx = demoStations.findIndex(s => s._id === station._id)

// }

async function getEmptyStation(user = null) {
    let stations;
    if (!user) stations = await query()
    stations = user.stations

    return {
        // _id: isLikedSongs ? 'likedSongs' : null,
        name: 'My Playlist #' + (stations.length + 1),
        tags: ['test'],
        imgUrl: null,
        createdAt: Date.now(),
        createdBy: null,
        likedByUsers: null,
        tracks: [],

    }
}
