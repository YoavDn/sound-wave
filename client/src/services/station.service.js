import { utilService } from './utils.service.js'
import { storageService } from './async-storage.service.js';
import { localStorageService } from './local-storage.js';
import { stationsData } from '../data/data.js'
import { httpService } from './http.serivce.js';

const KEY = 'stationsDB'

function _getUrl(id = '') {
    return `station/${id}`
}

export const stationService = {
    query,
    save,
    getById,
    getEmptyStation,
    genresQuery,
    queryLocalStations
}


var gLocalStations
(() => {
    gLocalStations = localStorageService.loadFromStorage(KEY)
    if (!gLocalStations || !gLocalStations.length) {
        gLocalStations = []
        localStorageService.saveToStorage(KEY, gLocalStations)
    }
    return gLocalStations

})()

const demoGenres = stationsData.demoGenres()

async function query(demoStations = false) {
    if (demoStations) return await httpService.get('station/demoStations')
    return await httpService.get('station')
}

function queryLocalStations() {
    return gLocalStations
}

function genresQuery() {
    return demoGenres
}

async function getById(stationId) {
    return await httpService.get(_getUrl(stationId))
}

async function save(station) {
    try {
        if (station._id) {
            await httpService.put(`station/${station._id}`, station)
        } else return await httpService.post('station', station)

        return await query()
    } catch (err) {
        return console.log("could not make new station", err);
    }
}
// if (station._id) await storageService.put(KEY, station)
// else {
//     station._id = utilService.makeId()
//     await storageService.post(KEY, station)
// }
// 



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

function getEmptyStation(user = null) {
    let stations;
    let newStation

    if (!user) { //when save to local storage
        stations = localStorageService.loadFromStorage(KEY)
        newStation = _createEmptyStation(stations.length)
        newStation._id = utilService.makeId()
        gLocalStations.push(newStation)
        console.log('ehllo');
        localStorageService.saveToStorage(KEY, gLocalStations)
    } else { // when user logged in
        stations = user.stations
        newStation = _createEmptyStation(user.stations.length)
    }
    return newStation
}

function _createEmptyStation(length) {
    return {
        // _id: isLikedSongs ? 'likedSongs' : null,
        name: 'My Playlist #' + (length),
        tags: ['test'],
        imgUrl: null,
        createdAt: Date.now(),
        createdBy: null,
        likedByUsers: null,
        tracks: [],

    }
}
