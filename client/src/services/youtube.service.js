const YT_KEY = import.meta.env.VITE_YT_KEY
import axios from 'axios'
const audioDB = 'https://theaudiodb.com/api/v1/json/523532/searchalbum.php?s='

export const youtubeService = {
    searchTracks,
    getSongDuration: getTrackDuration
}

async function searchTracks(query) {

    try {
        const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YT_KEY}&q=${query}`)
        // const artist = await searchArtist(query) // if time allow 
        // console.log('data.items = ', data.items)
        let tracks

        tracks = data.items.map(async ({ snippet, id }) => {
            let { title, publishTime, description, thumbnails } = snippet
            const { videoId } = id
            const time = await getTrackDuration(videoId)

            title = proccessSpecialChars(title)
            return {
                title,
                id: videoId,
                description,
                imgUrl: thumbnails.high.url,
                publishedAt: publishTime,
                time,
            }
        })

        return Promise.all(tracks)
    } catch (error) {
        console.log('error = ', error)
    }
}

function proccessSpecialChars(str) {
    const specialChars = [
        { char: '&amp;', render: '&' },
        { char: '&quot;', render: '"' },
        { char: '&#39;', render: `'` },
        { char: '&lt;', render: `<` },
        { char: '&gt;', render: `>` }]

    const bracketsRegex = /[\(\[].+[\)\]]/g

    str = str.split(' ')
    str = str.map((word) => {
        for (let i = 0; i < specialChars.length; i++) {
            if (word.includes(specialChars[i].char))
                word = word
                    .replaceAll(specialChars[i].char, specialChars[i].render)
        }
        return word
    })
    return str.join(' ').replace(bracketsRegex, '')
}

async function getTrackDuration(songId) {
    try {
        const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${songId}&key=${YT_KEY}&part=snippet,contentDetails,statistics,status`)
        let str = data.items[0].contentDetails.duration
        const timeStrDigits = str.match(/([0-9]+)/g)
        const duration = timeStrDigits.map((timeStrDigit, idx) => {
            if (idx !== 0 && timeStrDigit.length === 1) return `0${timeStrDigit}`
            else return timeStrDigit
        })
        return duration.join(':')
    } catch (error) {
        console.log('request faild', error)
    }
}


async function searchArtist(query) {
    const artistAlbums = await fetch(audioDB + query).then(res => res.json())
    console.log(artistAlbums);
    if (artistAlbums.album === null) return
}