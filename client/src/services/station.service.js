import { utilService } from './utils.service.js'
// import { storageService } from './local-storage.js'
import { storageService } from './async-storage.service.js';
import { localStorageService } from './local-storage.js';
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
        demoStations = _createDemoStations()
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
    await storageService.post(KEY, station)
    return await query()
}

async function remove(station) {
    await storageService.remove(KEY, station)
    return storageService.query(KEY)
}

async function addTrackToStation(data) {
    const { station, track } = data
    const stations = await storageService.query(KEY)
    const stationIdx = stations.findIndex(s => s._id === station._id)
    console.log('statstationIdx = ', stationIdx)
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
            name: "Afik's playlist",
            tags: [
                "Funk",
                "Happy"
            ],
            createdAt: 1541652422,
            createdBy: {
                _id: "u101",
                fullname: "Afik Zehavi",
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
                // {
                //     id: "mUkfiLjooxs",
                //     videoId: 'jNQXAC9IVRw',
                //     title: "song",
                //     url: "youtube/song.mp4",
                //     imgUrl: "https://i.ytimg.com/vi/mUkfiLjooxs/mqdefault.jpg",
                //     addedBy: {},
                //     addedAt: 162521765262,
                //     time: '4:03'

                // },
                // {
                //     id: "mUkfiLjooxs",
                //     videoId: 'JXRN_LkCa_o',
                //     title: "song",
                //     url: "youtube/song.mp4",
                //     imgUrl: "https://i.ytimg.com/vi/mUkfiLjooxs/mqdefault.jpg",
                //     addedBy: {},
                //     addedAt: 162521765262,
                //     time: '4:03'

                // }
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
        },
        // Trending now

        // Hits

        //Mood

        //Focus
        {
            _id: "5cksxjas8lpqsa8xjsa8jxs09",
            name: "לומדים באיזי",
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
        },
        //Pop

        //Rock

        //Party

        //Jazz

    ]
}


