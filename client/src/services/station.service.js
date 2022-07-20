// import { storageService } from './localStorage';




export const stationService = {
    query,
    save,
    getById,
}


function query() {
    return Promise.resolve(_demoStations)
}

function getById(stationId) {
    const station = _demoStations.find(s => s._id === stationId)
    return Promise.resolve(station)
}

function save() {
    // :TODO
}






const _demoStations = [
    {
        _id: "5cksxjas89xjsa8xjsa8jxs09",
        name: "FunkyMonks",
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
        songs: [
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
                addedBy: {}
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
    {
        _id: "5cksxjas89xjsa8xjsa8jxs09",
        name: "FunkyMonks",
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
        songs: [
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
                addedBy: {}
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



