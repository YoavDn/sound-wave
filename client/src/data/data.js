export const stationsData = {
    demoStations,
    demoGenres
}

function demoGenres() {
    return [
        {
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
        },

        // {
        //     imgUrl: 'https://i.scdn.co/image/ab67706f0000000319563f001e26bc056720e839',
        //     background: 'background-color: rgb(150, 234, 220)',
        //     title: 'French',
        // },
    ]
}

function demoStations() {
    return [
        {
            _id: "5cksxjas89xjsa8xjsa8jxs01",
            name: "Yoav's playlist",
            imgUrl: "https://upload.wikimedia.org/wikipedia/he/2/21/Madvillainy.jpg",
            tags: ['test'],
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
                    id: 'patwm5DXFrE',
                    title: "Baby ",
                    duration: '2:03',
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/4_iC0MyIykM/mqdefault.jpg",
                    addedBy: "yoav",
                    addedAt: 162521765262,
                    time: '4:03'

                },
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
            name: "Run it ",
            imgUrl: "https://www.giorarecords.co.il/wp-content/uploads/product_images/0602547311009.jpg",
            tags: ['test'],
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
                    title: "Baby ",
                    duration: '2:03',
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/4_iC0MyIykM/mqdefault.jpg",
                    addedBy: "yoav",
                    addedAt: 162521765262,
                    time: '3:22'
                },
                {
                    id: "mUkfiLjooxs",
                    title: "song",
                    duration: '2:03',
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/mUkfiLjooxs/mqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:22'
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
        /*ALBUMS 1-------------------------------------------------------------------- */
        {
            _id: "5cksxjas8rergxjsa8jxs09",
            name: "צעירים לנצח",
            tags: ['album'],
            createdAt: 1541652422,
            imgUrl: "https://i.postimg.cc/j22vrgnW/9.jpg",
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
                    id: "lYfrKmEYpdA",
                    title: "חביב אלבי",
                    url: "youtube/song.mp4",
                    imgUrl: "http://127.0.0.1:5173/http://127.0.0.1:5173/",
                    addedBy: "aviya",
                    addedAt: 162521765262,
                    time: '3:22',
                },
                {
                    id: "zhOAhJ_r1ec",
                    title: "בשבילך",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/zhOAhJ_r1ec/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:50',
                },
                {
                    id: "Z6xJFAvaH5U",
                    title: "מנגלים",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/Z6xJFAvaH5U/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:53',
                },
                {
                    id: "hNrJfTzQSGc",
                    title: "מספיק טוב",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/hNrJfTzQSGc/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '2:53',
                },
                {
                    id: "LgUWr2zCWng",
                    title: "שחרר אותי",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/LgUWr2zCWng/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '2:29',
                },
                {
                    id: "cIV6yMvL-I8",
                    title: "צעירים לנצח",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/cIV6yMvL-I8/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:25',
                },
            ],
            msgs: [
                {
                    id: "m101",
                    from: "{mini-user}",
                    txt: "Manish?"
                }
            ]
        },
        /*ALBUM 2------------------------------------------------------------------ */
        {
            _id: "5ceregjas8lpqsa8xjsa8jxs09",
            name: "Gemini Rights",
            tags: ['album'],
            createdAt: 1541652422,
            imgUrl: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F07%2FSteve-Lacy-Dissects-a-Breakup-on-Dreamy-Sophomore-LP-Gemini-Rights-0.jpg?w=960&cbr=1&q=90&fit=max",
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
                    id: "jeeA2MyGXBE",
                    title: "Static",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/jeeA2MyGXBE/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '2:37',
                    singer: 'Steve Lacy',
                },
                {
                    id: "9WQ-H_niE7o",
                    title: "Bad Habit",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/9WQ-H_niE7o/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: "3:53",
                    singer: 'Steve Lacy',
                },
                {
                    id: "GEjUUqCpVns",
                    title: "Buttons",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/GEjUUqCpVns/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: "3:06",
                    singer: 'Steve Lacy',
                },
                {
                    id: "uyyj98UYRY0",
                    title: "Sunshine",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/uyyj98UYRY0/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: "4:06",
                    singer: 'Steve Lacy',
                },
                {
                    id: "ydOLMwwA7x8",
                    title: "Amber",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/ydOLMwwA7x8/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: "2:55",
                    singer: 'Steve Lacy',
                },
                {
                    id: "OHaQyv9Plv4",
                    title: "Mercury",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/OHaQyv9Plv4/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: "2:31",
                    singer: 'Steve Lacy',
                },
                {
                    id: "U5kT8ECYOBs",
                    title: "Helmet",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/U5kT8ECYOBs/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: "3:24",
                    singer: 'Steve Lacy',
                },
            ],
            msgs: [
                {
                    id: "m101",
                    from: "{mini-user}",
                    txt: "Manish?"
                }
            ]
        },
        // Hits

        /*MOOD 1----------------------------------------------------------------------- */
        {
            _id: "5cksxjas8lpqerrggjxs09",
            name: "Feeling myself",
            tags: ['mood'],
            createdAt: 1541652422,
            imgUrl: 'https://i0.wp.com/legitmuzic.com/wp-content/uploads/2022/05/2-226.jpg?w=740&ssl=1',
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
                    id: "GigvFh48cGM",
                    title: "Wifey",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/GigvFh48cGM/hqdefault.jpg",
                    addedBy: "aviya",
                    addedAt: 162521765262,
                    time: '3:00',
                },
                {
                    id: "QZp2biJul1c",
                    title: "Vegas",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/QZp2biJul1c/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:22',
                },
                {
                    id: "LGZ7aTNAoeE",
                    title: "It's Givin",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/LGZ7aTNAoeE/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '2:34',
                },
                {
                    id: "S1G8PGnbb38",
                    title: "Snatched",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/S1G8PGnbb38/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '2:40',
                },
            ],
            msgs: [
                {
                    id: "m101",
                    from: "{mini-user}",
                    txt: "Manish?"
                }
            ]
        },
        /*MOOD 2------------------------------------------------------------------------- */
        {
            _id: "5ckgrerglpqsa8xjsa8jxs09",
            name: "You&Me",
            tags: ['mood'],
            createdAt: 1541652422,
            imgUrl: "https://cdns-images.dzcdn.net/images/cover/75fb6690bb211b20d9c041c9714637d9/200x200.jpg",
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
                    id: "R8LpukOp1rI",
                    title: "Old Pine",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/R8LpukOp1rI/hqdefault.jpg",
                    addedBy: "aviya",
                    addedAt: 162521765262,
                    time: '5:28',
                },
                {
                    id: "pQ1o0WgzVPI",
                    title: "Purple",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/pQ1o0WgzVPI/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:25',
                },
                {
                    id: "SQJVDwk3QFI",
                    title: "twin flame",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/SQJVDwk3QFI/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:58',
                },
                {
                    id: "CTspcr3Iaws",
                    title: "I Found",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/CTspcr3Iaws/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:33',
                },
                {
                    id: "K-htm8S85gA",
                    title: "Call Me Lover",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/K-htm8S85gA/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:21',
                },
                {
                    id: "mRD0-GxqHVo",
                    title: "Heat Waves",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/mRD0-GxqHVo/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:55',
                },
            ],
            msgs: [
                {
                    id: "m101",
                    from: "{mini-user}",
                    txt: "Manish?"
                }
            ]
        },
        /*FOCUS 1------------------------------------------------------------------------- */
        {
            _id: "5cksgergbsa8xjsa8jxs09",
            name: "לומדים באיזי",
            tags: ['focus'],
            createdAt: 1541652422,
            imgUrl: "https://i.scdn.co/image/ab67706f000000037593e7102541d2bfa7a32c3a",
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
                    id: "TFHCew8DnC0",
                    title: "Reckless ",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/TFHCew8DnC0/hqdefault.jpg",
                    addedBy: "aviya",
                    addedAt: 162521765262,
                    time: '3:48',
                },
                {
                    id: "Fp8msa5uYsc",
                    title: "Ghost",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/Fp8msa5uYsc/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:22',
                },
                {
                    id: "7-x3uD5z1bQ",
                    title: "Watermelon Sugar",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/7-x3uD5z1bQ/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '2:53',
                },
                {
                    id: "PWqEPKduGm8",
                    title: "Infinity",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/PWqEPKduGm8/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:57',
                },
                {
                    id: "BPp4doFEkYE",
                    title: "Your Power",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/BPp4doFEkYE/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:06',
                },
                {
                    id: "BAVH9_jMbuM",
                    title: "Good Without",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/BAVH9_jMbuM/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:02',
                },
                {
                    id: "X-yIEMduRXk",
                    title: "Easy On Me",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/X-yIEMduRXk/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:45',
                },
                {
                    id: "KrgJp7Z1Hv8",
                    title: "It'll Be Okay",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/KrgJp7Z1Hv8/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:52',
                },
            ],
            msgs: [
                {
                    id: "m101",
                    from: "{mini-user}",
                    txt: "Manish?"
                }
            ]
        },
        /*FOCUS 2------------------------------------------------------------------------ */
        {
            _id: "gerrg8lpqsa8xjsa8jxs09",
            name: "Coding Mode",
            tags: ['focus'],
            createdAt: 1541652422,
            imgUrl: "https://vmusic.ir/wp-content/uploads/2021/02/Coding-Mood.jpg",
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
                    id: "fkabCtAwvy8",
                    title: "Nothing It Can",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/fkabCtAwvy8/hqdefault.jpg",
                    addedBy: "aviya",
                    addedAt: 162521765262,
                    time: '4:47',
                },
                {
                    id: "ZdR-c_myB9M",
                    title: "LUCHS",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/ZdR-c_myB9M/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '2:16',
                },
                {
                    id: "g9k8e2yfx94",
                    title: "Blur",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/g9k8e2yfx94/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '1:56',
                },
                {
                    id: "DITy3T2BgbI",
                    title: "Day One",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/DITy3T2BgbI/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:21',
                },
                {
                    id: "dpEHdj6fIz0",
                    title: "Candles",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/dpEHdj6fIz0/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '2:30',
                },
            ],
            msgs: [
                {
                    id: "m101",
                    from: "{mini-user}",
                    txt: "Manish?"
                }
            ]
        },
        /*POP 1--------------------------------------------------------------------------- */
        {
            _id: "5cksxjas8lpqrgbrjxs09",
            name: "Mega Hit Mix",
            tags: ['pop'],
            createdAt: 1541652422,
            imgUrl: "https://i.scdn.co/image/ab67706f00000003db32a17c1f5291b19317b62e",
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
                    id: "iquhBgM-Qv0",
                    title: "Adore You",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/iquhBgM-Qv0/hqdefault.jpg",
                    addedBy: "aviya",
                    addedAt: 162521765262,
                    time: '3:28',
                },
                {
                    id: "HeOpRzcqKrE",
                    title: "Bad Habits",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/HeOpRzcqKrE/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:51',
                },
                {
                    id: "DCcAtJ1PuEU",
                    title: "Traitor",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/DCcAtJ1PuEU/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:49',
                },
                {
                    id: "RsEZmictANA",
                    title: "willow",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/RsEZmictANA/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:12',
                },
                {
                    id: "bZYPI4mYwhw",
                    title: "My Universe",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/bZYPI4mYwhw/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:48',
                },
                {
                    id: "1WHPExTeOwg",
                    title: "Hold On",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/1WHPExTeOwg/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '2:56',
                },
                {
                    id: "jeeA2MyGXBE",
                    title: "Static",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/jeeA2MyGXBE/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '2:37',
                },
            ],
            msgs: [
                {
                    id: "m101",
                    from: "{mini-user}",
                    txt: "Manish?"
                }
            ]
        },
        /*POP 2-------------------------------------------------------------------------- */
        {
            _id: "gbjy568lpqsa8xjsa8jxs09",
            name: "Guilty Pleasures",
            tags: ['pop'],
            createdAt: 1541652422,
            imgUrl: "https://i.scdn.co/image/ab67706f000000034a2afca194d4819c57201bc3",
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
                    id: "b7k0a5hYnSI",
                    title: "Unwritten",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/b7k0a5hYnSI/hqdefault.jpg",
                    addedBy: "aviya",
                    addedAt: 162521765262,
                    time: '3:46',
                },
                {
                    id: "qw7WNwMyagw",
                    title: "Footloose",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/qw7WNwMyagw/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:44',
                },
                {
                    id: "E4OzdyxbOuU",
                    title: "9 to 5",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/E4OzdyxbOuU/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:00',
                },
                {
                    id: "4bob1KzjYQA",
                    title: "Shut Up And Dance",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/4bob1KzjYQA/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:18',
                },
                {
                    id: "ynZCDm0IEVM",
                    title: "Fame",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/ynZCDm0IEVM/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:50',
                },
            ],
            msgs: [
                {
                    id: "m101",
                    from: "{mini-user}",
                    txt: "Manish?"
                }
            ]
        },
        /*ROCK 1------------------------------------------------------------------*/
        {
            _id: "5cksxjas8lpqsakbfsd88jxs09",
            name: "Soft Rock",
            tags: ['rock'],
            createdAt: 1541652422,
            imgUrl: "https://i.scdn.co/image/ab67616d0000b273435a19dc7413841e1c72409d",
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
                    id: "85cNRQo1m3A",
                    title: "Human Touch",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/85cNRQo1m3A/hqdefault.jpg",
                    addedBy: "aviya",
                    addedAt: 162521765262,
                    time: '6:31',
                },
                {
                    id: "vPzDTfIb0DU",
                    title: "Easy",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/vPzDTfIb0DU/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:06',
                },
                {
                    id: "ftjEcrrf7r0",
                    title: "One",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/ftjEcrrf7r0/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:33',
                },
                {
                    id: "s6TtwR2Dbjg",
                    title: "Heaven",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/s6TtwR2Dbjg/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:10',
                },
                {
                    id: "6NXnxTNIWkc",
                    title: "What's Up",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/6NXnxTNIWkc/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:52',
                },
                {
                    id: "Y6yUY7M9yfw",
                    title: "Everybody Hurts",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/Y6yUY7M9yfw/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '5:20',
                },
            ],
            msgs: [
                {
                    id: "m101",
                    from: "{mini-user}",
                    txt: "Manish?"
                }
            ]
        },
        /*ROCK 2-------------------------------------------------------------------------*/
        {
            _id: "5cksxjas8lgdsyg3jsa8jxs09",
            name: "Rock Classics",
            tags: ['rock'],
            createdAt: 1541652422,
            imgUrl: "https://i.scdn.co/image/ab67706f000000033b52952432e3a6d3f517eb2e",
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
                    id: "zYxkezUr8MQ",
                    title: "Smells Like Teen Spirit",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/zYxkezUr8MQ/hqdefault.jpg",
                    addedBy: "aviya",
                    addedAt: 162521765262,
                    time: '5:01',
                },
                {
                    id: "l482T0yNkeo",
                    title: "Highway to Hell",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/l482T0yNkeo/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:27',
                },
                {
                    id: "Rbm6GXllBiw",
                    title: "Paradise City",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/Rbm6GXllBiw/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '6:48',
                },
                {
                    id: "auLBLk4ibAk",
                    title: "Tom Sawyer",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/auLBLk4ibAk/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:33',
                },
                {
                    id: "pAgnJDJN4VA",
                    title: "Back In Black",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/pAgnJDJN4VA/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:13',
                },
            ],
            msgs: [
                {
                    id: "m101",
                    from: "{mini-user}",
                    txt: "Manish?"
                }
            ]
        },
        /*PARTY 1------------------------------------------------------------------------- */
        {
            _id: "5cksxjas8lpqskdsgfisyd9",
            name: "Party Songs",
            tags: ['party', 'test'],
            createdAt: 1541652422,
            imgUrl: "https://i.scdn.co/image/ab67706c0000bebb6c5db53da7585761f71553ae",
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
                    id: "4B9oklZd5UE",
                    title: "One Kiss",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/4B9oklZd5UE/hqdefault.jpg",
                    addedBy: "aviya",
                    addedAt: 162521765262,
                    time: '3:55',
                },
                {
                    id: "iP6XpLQM2Cs",
                    title: "TiK ToK",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/iP6XpLQM2Cs/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:35',
                },
                {
                    id: "SeIJmciN8mo",
                    title: "Starships",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/SeIJmciN8mo/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:21',
                },
                {
                    id: "hV2z4oBNFKs",
                    title: "Good Feeling",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/hV2z4oBNFKs/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:07',
                },
                {
                    id: "XNtTEibFvlQ",
                    title: "Shots",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/XNtTEibFvlQ/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:13',
                },
                {
                    id: "VYaygLi1Qd0",
                    title: "Like A G6",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/VYaygLi1Qd0/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:45',
                },
            ],
            msgs: [
                {
                    id: "m101",
                    from: "{mini-user}",
                    txt: "Manish?"
                }
            ]
        },
        /*PARTY 2------------------------------------------------------------------------ */
        {
            _id: "5ckshjgdsuhsdgy8xjsa8jxs09",
            name: "Summer 2022",
            tags: ['party'],
            createdAt: 1541652422,
            imgUrl: "https://i.scdn.co/image/ab67706c0000bebb5c9cf102570b591ad09ee364",
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
                    id: "4cCi6-16HR4",
                    title: "Ferrari",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/4cCi6-16HR4/hqdefault.jpg",
                    addedBy: "aviya",
                    addedAt: 162521765262,
                    time: '4:05',
                },
                {
                    id: "3-IURqfCCQg",
                    title: "MAMIII",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/3-IURqfCCQg/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:45',
                },
                {
                    id: "8duW75iMBa4",
                    title: "Save Me Pls",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/8duW75iMBa4/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:05',
                },
                {
                    id: "hXL9Y4ziD4g",
                    title: "good 4 u",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/hXL9Y4ziD4g/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '2:58',
                },
                {
                    id: "FA0FWsw_xDc",
                    title: "Never Going Back Again",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/FA0FWsw_xDc/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:07',
                },
                {
                    id: "G5xSLbYMr-I",
                    title: "Sunroof",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/G5xSLbYMr-I/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '2:54',
                },
                {
                    id: "o2W6gACB6MU",
                    title: "Jiggle Jiggle",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/o2W6gACB6MU/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '1:38',
                },
                {
                    id: "JsOVJ1PAC6s",
                    title: "About Damn Time",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/JsOVJ1PAC6s/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:11',
                },
            ],
            msgs: [
                {
                    id: "m101",
                    from: "{mini-user}",
                    txt: "Manish?"
                }
            ]
        },
        /*JAZZ 1------------------------------------------------------------------------- */
        {
            _id: "5cksxjas8lpqsa8jigs32209",
            name: "Late Night Jazz",
            tags: ['jazz', 'test'],
            createdAt: 1541652422,
            imgUrl: "https://i.scdn.co/image/ab67706f00000003987367cd09caff68b5fa34ec",
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
                    id: "Q2PujLvkDEs",
                    title: "Heroes",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/Q2PujLvkDEs/hqdefault.jpg",
                    addedBy: "aviya",
                    addedAt: 162521765262,
                    time: '4:15',
                },
                {
                    id: "7NQMHSja3xs",
                    title: "Clara",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/7NQMHSja3xs/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:54',
                },
                {
                    id: "p-bHWsnKt4Q",
                    title: "Arm in Arm",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/p-bHWsnKt4Q/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '8:43',
                },
                {
                    id: "7893juDY71Q",
                    title: "Virgo",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/7893juDY71Q/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '5:58',
                },
                {
                    id: "1Ehr1Rg2gfg",
                    title: "Cloud",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/1Ehr1Rg2gfg/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:22',
                },
                {
                    id: "Hcx68dXfEqM",
                    title: "Largo",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/Hcx68dXfEqM/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:22',
                },
            ],
            msgs: [
                {
                    id: "m101",
                    from: "{mini-user}",
                    txt: "Manish?"
                }
            ]
        },
        /*JAZZ 2---------------------------------------------------------------------------- */
        {
            _id: "5cshdfytd3328xjsa8jxs09",
            name: "Jazz Vibes",
            tags: ['jazz'],
            createdAt: 1541652422,
            imgUrl: "https://i.scdn.co/image/ab67706f000000035ea54b91b073c2776b966e7b",
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
                    id: "Ux0M_LpDgPw",
                    title: "Bliss",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/Ux0M_LpDgPw/hqdefault.jpg",
                    addedBy: "aviya",
                    addedAt: 162521765262,
                    time: "2:24",
                    singer: 'Tabi',
                },
                {
                    id: "E-jRpJrsuvw",
                    title: "Lazy Sunday",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/E-jRpJrsuvw/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: "2:43",
                    singer: 'UKDD',
                },
                {
                    id: "IptrjPADGsE",
                    title: "From up there",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/IptrjPADGsE/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: "2:29",
                    singer: 'CrazyJaZz',
                },
                {
                    id: "3Arsz4GmnSI",
                    title: "Revue",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/3Arsz4GmnSI/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: "2:32",
                    singer: 'Parise91',
                },
                {
                    id: "ySTXzuMHCI4",
                    title: "Inner Child",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/ySTXzuMHCI4/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: "1:44",
                    singer: 'Living Room',
                },
                {
                    id: "WI3h08Zod2A",
                    title: "Out for a Stroll",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/WI3h08Zod2A/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: "3:42",
                    singer: 'Tabi',
                },
                {
                    id: "7qqE4jn1tRY",
                    title: "Jupiter's Moon",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/7qqE4jn1tRY/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '2:11',
                    singer: 'SamuW',
                },
            ],
            msgs: [
                {
                    id: "m101",
                    from: "{mini-user}",
                    txt: "Manish?"
                }
            ]
        },
        // hiphob
        {
            _id: "4c5sxjas8lpqsa8j15igs32209",
            name: "Mellow Bars",
            tags: ['jazz', 'hiphop'],
            createdAt: 1541652422,
            imgUrl: "https://i.scdn.co/image/ab67706f000000022f8fdda43fa482dca18180f7",
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
                    id: "Q2PujLvkDEs",
                    title: "Heroes",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/Q2PujLvkDEs/hqdefault.jpg",
                    addedBy: "aviya",
                    addedAt: 162521765262,
                    time: '4:15',
                },
                {
                    id: "7NQMHSja3xs",
                    title: "Clara",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/7NQMHSja3xs/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:54',
                },
                {
                    id: "p-bHWsnKt4Q",
                    title: "Arm in Arm",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/p-bHWsnKt4Q/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '8:43',
                },
                {
                    id: "7893juDY71Q",
                    title: "Virgo",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/7893juDY71Q/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '5:58',
                },
                {
                    id: "1Ehr1Rg2gfg",
                    title: "Cloud",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/1Ehr1Rg2gfg/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:22',
                },
                {
                    id: "Hcx68dXfEqM",
                    title: "Largo",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/Hcx68dXfEqM/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:22',
                },
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
            _id: "4c5sxjas8lpqsa8552jigs3253209",
            name: "Mind right",
            tags: ['mood', 'hiphop'],
            createdAt: 1541652422,
            imgUrl: "https://i.scdn.co/image/ab67706f0000000204eed48edd33d4eb60419ea7",
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
                    id: "Q2PujLvkDEs",
                    title: "Heroes",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/Q2PujLvkDEs/hqdefault.jpg",
                    addedBy: "aviya",
                    addedAt: 162521765262,
                    time: '4:15',
                },
                {
                    id: "7NQMHSja3xs",
                    title: "Clara",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/7NQMHSja3xs/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:54',
                },
                {
                    id: "p-bHWsnKt4Q",
                    title: "Arm in Arm",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/p-bHWsnKt4Q/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '8:43',
                },
                {
                    id: "7893juDY71Q",
                    title: "Virgo",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/7893juDY71Q/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '5:58',
                },
                {
                    id: "1Ehr1Rg2gfg",
                    title: "Cloud",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/1Ehr1Rg2gfg/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:22',
                },
                {
                    id: "Hcx68dXfEqM",
                    title: "Largo",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/Hcx68dXfEqM/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:22',
                },
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
            _id: "4c5sxjas8lp52sa8jigs32209",
            name: "This is MF DOOM",
            tags: ['hiphop'],
            createdAt: 1541652422,
            imgUrl: 'https://ukhiphopblogcouk.files.wordpress.com/2019/02/img_20190202_234413.jpg',
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
                    id: "gSJeHDlhYls",
                    title: "Madvillain - All Caps",
                    singer: 'MF DOOM',
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/gSJeHDlhYls/hqdefault.jpg",
                    addedBy: "Aviv Zafrir",
                    addedAt: 162521765262,
                    time: '2:14',
                },
                {
                    id: "I4P5RR4jPGg",
                    title: "Figaro",
                    singer: 'MF DOOm',
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/I4P5RR4jPGg/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:54',
                },
                {
                    id: "gQtKJbptcns",
                    title: "Rapp Snitch Knishes (feat. Mr. Fantastik)",
                    singer: 'MF DOOM',
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/gQtKJbptcns/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '2:52',
                },
                {
                    id: "kHBHDWpK1yo",
                    title: "Doomsday",
                    singer: 'MF DOOM',
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/kHBHDWpK1yo/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '5:58',
                },
                {
                    id: "1Ehr1Rg2gfg",
                    title: "Cloud",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/1Ehr1Rg2gfg/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:22',
                },
                {
                    id: "tv2q9vQ7GOI",
                    title: "Curls",
                    singer: 'MF DOOM',
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/tv2q9vQ7GOI/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:22',
                },
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
            _id: "4c5sxjas8lpqsa8jigs353209",
            name: "jazz rap",
            tags: ['mood', 'hiphop'],
            createdAt: 1541652422,
            imgUrl: "https://i.scdn.co/image/ab67706f000000025115b9702d26cd841fda7827",
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
                    id: "A8pYbK46VEI",
                    title: "Rejjie Snow, MF DOOM & Cam O'bi - Cookie Chips",
                    singer: 'Rejjie Snow',
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/A8pYbK46VEI/hqdefault.jpg",
                    addedBy: "aviya",
                    addedAt: 162521765262,
                    time: '4:15',
                },
                {
                    id: "BpkxuwG1UJU",
                    title: "  tom misch - it runs through me",
                    url: "youtube/song.mp4",
                    singer: 'tom misch',
                    imgUrl: "https://i.ytimg.com/vi/BpkxuwG1UJU/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:24',
                },
                {
                    id: "EzKvCAshwRI",
                    title: "Jazz ",
                    singer: 'Mick Jenkins',
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/EzKvCAshwRI/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:20',
                },
                {
                    id: "hC8CH0Z3L54",
                    title: "Tadow",
                    singer: 'Masego',
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/hC8CH0Z3L54/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '8:06',
                },
                {
                    id: "RM7lw0Ovzq0",
                    title: "The Story of O.J.",
                    singer: 'JAY-Z',
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/RM7lw0Ovzq0/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:13',
                },
                {
                    id: "_GghFQ8ryEU",
                    title: "untitled 02 | 06.23.2014.",
                    singer: 'Kendrick Lamar',
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/_GghFQ8ryEU/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:18',
                },
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
            _id: "4c5sxjas8lpq431a8jigs32209",
            name: "I Love My '90s Hip-Hop",
            tags: ['hiphop'],
            createdAt: 1541652422,
            imgUrl: "https://i.scdn.co/image/ab67706f0000000285632c594e2b9d7515d7b912",
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
                    id: "Q2PujLvkDEs",
                    title: "Heroes",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/Q2PujLvkDEs/hqdefault.jpg",
                    addedBy: "aviya",
                    addedAt: 162521765262,
                    time: '4:15',
                },
                {
                    id: "7NQMHSja3xs",
                    title: "Clara",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/7NQMHSja3xs/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:54',
                },
                {
                    id: "p-bHWsnKt4Q",
                    title: "Arm in Arm",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/p-bHWsnKt4Q/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '8:43',
                },
                {
                    id: "7893juDY71Q",
                    title: "Virgo",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/7893juDY71Q/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '5:58',
                },
                {
                    id: "1Ehr1Rg2gfg",
                    title: "Cloud",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/1Ehr1Rg2gfg/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:22',
                },
                {
                    id: "Hcx68dXfEqM",
                    title: "Largo",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/Hcx68dXfEqM/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:22',
                },
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
            _id: "4c5sxjas8lpq431a8jigs353209",
            name: "Get Turnt",
            tags: ['hiphop', 'workout'],
            createdAt: 1541652422,
            imgUrl: "https://i.scdn.co/image/ab67706f0000000290a895ce2bd3e7195b84ae89",
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
                    id: "Q2PujLvkDEs",
                    title: "Heroes",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/Q2PujLvkDEs/hqdefault.jpg",
                    addedBy: "aviya",
                    addedAt: 162521765262,
                    time: '4:15',
                },
                {
                    id: "7NQMHSja3xs",
                    title: "Clara",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/7NQMHSja3xs/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:54',
                },
                {
                    id: "p-bHWsnKt4Q",
                    title: "Arm in Arm",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/p-bHWsnKt4Q/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '8:43',
                },
                {
                    id: "7893juDY71Q",
                    title: "Virgo",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/7893juDY71Q/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '5:58',
                },
                {
                    id: "1Ehr1Rg2gfg",
                    title: "Cloud",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/1Ehr1Rg2gfg/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '3:22',
                },
                {
                    id: "Hcx68dXfEqM",
                    title: "Largo",
                    url: "youtube/song.mp4",
                    imgUrl: "https://i.ytimg.com/vi/Hcx68dXfEqM/hqdefault.jpg",
                    addedBy: {},
                    addedAt: 162521765262,
                    time: '4:22',
                },
            ],
            msgs: [
                {
                    id: "m101",
                    from: "{mini-user}",
                    txt: "Manish?"
                }
            ]
        },


    ]
}

