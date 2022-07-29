import { utilService } from './utils.service.js'
import { storageService } from './async-storage.service.js';
import { localStorageService } from './local-storage.js'
import { stationsData } from '../data/data.js'
import { httpService } from './http.serivce.js';

import { socketService } from './socket.service'

const KEY = 'stationsDB'

// const stationChannel = new BroadcastChannel('stationChannel')

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
    if (!gLocalStations || !gLocalStations.length) {
        gLocalStations = []
        const likedSongs = _createLikedSongs()
        gLocalStations.push(likedSongs)
        console.log(gLocalStations);
        localStorageService.saveToStorage(KEY, gLocalStations)
    }
    return gLocalStations

})()


const genres = [{
    imgUrl: 'https://i.scdn.co/image/ab67706f00000003ca64210a23622427ec19c4a6',
    background: 'background-color: rgb(119, 157, 195)',
    title: 'Hits',
},
{
    imgUrl: 'https://upload.wikimedia.org/wikipedia/he/2/21/Madvillainy.jpg',
    background: 'background-color: rgb(30, 50, 100);',
    title: 'Hip Hop',
},
{
    imgUrl: 'https://i.scdn.co/image/ab67706f00000003fa8c71f4d9a74d9d3335577b',
    background: 'background-color: rgb(27, 213, 127);',
    title: 'Rock',
},
{
    imgUrl: 'https://i.scdn.co/image/ab67706f000000029249b35f23fb596b6f006a15',
    background: 'background-color: rgb(180, 180, 180);',
    title: 'Workout',
},
{
    imgUrl: 'https://i.scdn.co/image/ab67706f00000003306b33f37176b84b14058bfc',
    background: 'background-color: rgb(232, 17, 91);',
    title: 'Love',
},
{
    imgUrl: 'https://i.scdn.co/image/ab67706f00000003e109bd481cb5fa0777511182',
    background: 'background-color: rgb(238, 193, 201)',
    title: 'Chill',
},
{
    imgUrl: 'https://seed-mix-image.spotifycdn.com/v6/img/pop/6KImCVD70vtIoJWnq6nGn3/en/large',
    background: 'background-color: rgb(180, 248, 200)',
    title: 'Pop',
},
{
    imgUrl: 'https://i.scdn.co/image/ab67706f0000000312cf5fd4624cce89f748ec99',
    background: 'background-color: rgb(128, 67, 59)',
    title: 'Meditation',
},
{
    imgUrl: 'https://i.scdn.co/image/ab67706f000000033a0ea5755963e844eb4a5700',
    background: 'background-color: rgb(4, 111, 188)',
    title: 'Summer',
},
{
    imgUrl: 'https://i.scdn.co/image/ab67706f000000032adb7ea2103f8ac7d2f06034',
    background: 'background-color: rgb(141, 103, 171)',
    title: 'Relax',
},]

async function query(demoStations = false) {
    return await httpService.get('station')
}

function queryLocalStations() {
    return localStorageService.loadFromStorage(KEY)
}

function genresQuery() {
    return genres
}

async function getById(stationId) {
    return await httpService.get(_getUrl(stationId))
}

async function save(station, user) {
    const isLocal = gLocalStations.some(localStation => localStation._id === station._id)

    //when there is no user {
    if (!user && isLocal) {
        if (station._id) return await storageService.put(KEY, station)
        else return await storageService.post(KEY, station)
    }

    //when user logged in
    else if (station._id) {
        await httpService.put(`station/${station._id}`, station)
        // socketService.emit(SOCKET_EMIT_UPDATE_STATION, station)
        remove
    } else return await httpService.post('station', station)
}

async function remove(station, user) {

    if (!user) {
        await storageService.remove(KEY, station)
        return storageService.query(KEY)

    } else {
        await httpService.delete(`station/${station._id}`)
        return await query()
        // stationChannel.postMessage({type: 'removeStation', reviewId})
    }

}


function getEmptyStation(user = null) {
    let stations;
    let newStation

    if (!user) { //when save to local storage
        stations = localStorageService.loadFromStorage(KEY)
        newStation = _createEmptyStation(stations.length)
        newStation._id = utilService.makeId()
        gLocalStations.unshift(newStation)
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
        tags: [],
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
        tags: [],
        imgUrl: "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png",
        createdAt: Date.now(),
        createdBy: null,
        likedByUsers: null,
        tracks: [],

    }
}