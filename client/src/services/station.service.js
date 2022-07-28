import { utilService } from './utils.service.js'
import { storageService } from './async-storage.service.js';
import { localStorageService } from './local-storage.js';

import { stationsData } from '../data/data.js'
import { httpService } from './http.serivce.js';

import { socketService } from './socket.service'

const KEY = 'stationsDB'

// const stationChannel = new BroadcastChannel('stationChannel')

// ;(() => {
//     // reviewChannel.addEventListener('message', (ev) => {
//     //   console.log('msg event', ev)
//     //   store.commit(ev.data)
//     // })
//     setTimeout(()=>{
//       socketService.on(SOCKET_EMIT_UPDATE_STATION, (station) => {
//         console.log('GOT from socket', station)
//         store.dispatch({type: 'updateStation', station})
//       })
//       socketService.on(SOCKET_EVENT_REVIEW_ABOUT_YOU, (station) => {
//         showSuccessMsg(`New station about me ${station.txt}`)
//       })
//     }, 0)

//   })()



export const stationService = {
    query,
    save,
    getById,
    getEmptyStation,
    genresQuery,
    queryLocalStations,
    remove,
}

function _getUrl(id = '') {
    return `station/${id}`
}

var gLocalStations
(() => {
    gLocalStations = localStorageService.loadFromStorage(KEY)
    console.log(gLocalStations);
    if (!gLocalStations || !gLocalStations.length) {
        gLocalStations = []
        const likedSongs = _createLikedSongs()
        gLocalStations.push(likedSongs)
        console.log(gLocalStations);
        localStorageService.saveToStorage(KEY, gLocalStations)
    }
    return gLocalStations

})()

const demoGenres = stationsData.demoGenres()

async function query(demoStations = false) {
    return await httpService.get('station')
}

function queryLocalStations() {
    return localStorageService.loadFromStorage(KEY)
}

function genresQuery() {
    return demoGenres
}

async function getById(stationId) {
    return await httpService.get(_getUrl(stationId))
}

async function save(station, user) {

    //when there is no user {
    if (!user) {
        if (station._id) return await storageService.put(KEY, station)
        else return await storageService.post(KEY, station)
    }

    //when user logged in
    else if (station._id) {
        await httpService.put(`station/${station._id}`, station)
        // socketService.emit(SOCKET_EMIT_UPDATE_STATION, station)
        return await query()
    } else return await httpService.post('station', station)
}

async function remove(station) {
    // await httpService.delete(`station/${reviewId}`)
    // stationChannel.postMessage({type: 'removeStation', reviewId})

    await storageService.remove(KEY, station)
    return storageService.query(KEY)
}


function getEmptyStation(user = null) {
    let stations;
    let newStation

    if (!user) { //when save to local storage
        stations = localStorageService.loadFromStorage(KEY)
        newStation = _createEmptyStation(stations.length)
        newStation._id = utilService.makeId()
        gLocalStations.push(newStation)
        localStorageService.saveToStorage(KEY, gLocalStations)
    } else { // when user logged in
        stations = user.stations
        newStation = _createEmptyStation(user.stations.length, user)
    }
    return newStation
}

function _createEmptyStation(length, user = null) {
    return {
        // _id: isLikedSongs ? 'likedSongs' : null,
        name: user ? 'My Playlist #' + (length + 1) : 'My Playlist #' + (length),
        tags: ['test'],
        imgUrl: null,
        createdAt: Date.now(),
        createdBy: user ? user : 'Guest',
        likedByUsers: null,
        tracks: [],

    }
}

function _createLikedSongs() {
    return {
        _id: 'likedSongs',
        name: 'Liked Songs',
        tags: ['test'],
        imgUrl: "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png",
        createdAt: Date.now(),
        createdBy: null,
        likedByUsers: null,
        tracks: [],

    }
}