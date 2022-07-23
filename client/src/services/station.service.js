import { utilService } from './utils.service.js'
// import { storageService } from './local-storage.js'
import { storageService } from './async-storage.service.js';
import { localStorageService } from './local-storage.js';
import { stationsData } from '../data/data.js'
const KEY = 'stationsDB'

export const stationService = {
    query,
    save,
    getById,
    addTrackToStation,
    getEmptyStation
}
let demoStations;

(async () => {
    demoStations = localStorageService.loadFromStorage(KEY)
    if (!demoStations || !demoStations.length) {
        demoStations = stationsData.demoStations()
        const likedSongs = await getEmptyStation(true)
        demoStations.unshift(likedSongs)
        storageService.postMany(KEY, demoStations)
    }
    return demoStations

})()

async function query() {
    // return Promise.resolve(demoStations)
    return await storageService.query(KEY)
}

function getById(stationId) {
    const station = demoStations.find(s => s._id === stationId)
    return Promise.resolve(station)
}

async function save(station) {
    if (station._id) storageService.put(KEY, station)
    else await storageService.post(KEY, station)
    return query()
}

async function remove(station) {
    await storageService.remove(KEY, station)
    return storageService.query(KEY)
}

async function addTrackToStation(data) {


    const { station, track } = data
    const stations = await storageService.query(KEY)
    const stationIdx = stations.findIndex(s => s._id === station._id)

    stations[stationIdx].tracks.unshift(track)
    await storageService.put(KEY, stations[stationIdx])
    return stations
}

async function removeTrackFromStation({ station, track }) {
    const stationIdx = demoStations.findIndex(s => s._id === station._id)

}

async function getEmptyStation(isLikedSongs = false) {
    const stations = await query()
    console.log('stations = ', stations.length)
    return {
        _id: isLikedSongs ? 'likedSongs' : utilService.makeId(),
        name: isLikedSongs ? 'Liked Songs' : 'My Playlist #' + (stations.length + 1),
        tags: ['test'],
        createdAt: Date.now(),
        createdBy: null,
        likedByUsers: null,
        tracks: [],

    }
}

