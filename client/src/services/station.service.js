import { utilService } from './utils.service.js'
import { storageService } from './local-storage.js'

const KEY = 'stationsDB'

export const stationService = {
    query,
    save,
    getById,
    addTrackToStation,
    getEmptyStation
}
let demoStations;

(() => {
    if (storageService.loadFromStorage(KEY)) demoStations = storageService.loadFromStorage(KEY)
    demoStations = _createDemoStations()
    storageService.saveToStorage(KEY, demoStations)
})()



function query() {
    return Promise.resolve(demoStations)
}

function getById(stationId) {
    const station = demoStations.find(s => s._id === stationId)
    return Promise.resolve(station)
}

function save(station) {
    console.log('hello');
    demoStations.unshift(station)
    storageService.saveToStorage(KEY, demoStations)
}

function addTrackToStation(data) {
    console.log('hello from station serivce');
    const { station, track } = data
    const stationIdx = demoStations.findIndex(s => s._id === station._id)
    demoStations[stationIdx].tracks.push(track)
    console.log(demoStations);
    storageService.saveToStorage(KEY, demoStations)
    return Promise.resolve(demoStations)
}

function getEmptyStation() {
    return {
        _id: utilService.makeId(),
        name: 'My Playlist #' + demoStations.length,
        tags: [],
        createdAt: Date.now(),
        createdBy: null,
        likedByUsers: null,
        tracks: [],

    }
}

function _createDemoStations() {
    return [
        {
            _id: "5cksxjas89xjsa8xjsa8jxs01",
            name: "afik's playlist",
            tags: [
                "Funk",
                "Happy"
            ],
            createdAt: 1541652422,
            createdBy: {
                _id: "u101",
                fullname: "Puki Ben David",
                imgUrl: "http://some-photo/"
            },
            likedByUsers: [
                "{minimal-user}",
                "{minimal-user}"
            ],
            tracks: [
                {
                    id: "s1001",
                    videoId: 'patwm5DXFrE',
                    title: "Baby ",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/4_iC0MyIykM/mqdefault.jpg",
                    addedBy: "yoav",
                    addedAt: 162521765262,
                    time: '4:03'

                },
                {
                    id: "mUkfiLjooxs",
                    videoId: 'jNQXAC9IVRw',
                    title: "song",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/mUkfiLjooxs/mqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:03'

                },
                {
                    id: "mUkfiLjooxs",
                    videoId: 'JXRN_LkCa_o',
                    title: "song",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/mUkfiLjooxs/mqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:03'

                }
            ],
            msgs: [
                {
                    id: "m101",
                    from: "{mini-user}",
                    txt: "Manish?"
                }
            ],

        },
        {
            _id: "5cksxjas89xjsa8xjsa8jxs09",
            name: "Avoya",
            tags: [
                "Funk",
                "Happy"
            ],
            createdAt: 1541652422,
            createdBy: {
                _id: "u101",
                fullname: "Puki Ben David",
                imgUrl: "http://some-photo/"
            },
            likedByUsers: [
                "{minimal-user}",
                "{minimal-user}"
            ],
            tracks: [
                {
                    id: "s1001",
                    title: "Baby ",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/4_iC0MyIykM/mqdefault.jpg",
                    addedBy: "yoav",
                    addedAt: 162521765262
                },
                {
                    id: "mUkfiLjooxs",
                    title: "song",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/mUkfiLjooxs/mqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262

                }
            ],
            msgs: [
                {
                    id: "m101",
                    from: "{mini-user}",
                    txt: "Manish?"
                }
            ]
        }
    ]
}


