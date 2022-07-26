
import { httpService } from './http.serivce.js'

export const userService = {
    getUser,
    signup,
    updateUserLikedSong,
    getLoggedInUser,
    logout,
    login,
}


async function login(credential) {
    return await httpService.post('auth/login', credential)
}

function signup(newUser) {
    return httpService.post('auth/signup', newUser)
}

async function logout() {
    return await httpService.post('auth/logout')
}

async function updateUserLikedSong(user, data) {
    const userToUpdate = JSON.parse(JSON.stringify(user))
    try {
        const { station, track, isNew } = data
        if (isNew) {
            userToUpdate.likedSongs.tracks.push(track)

        } else {
            const idx = userToUpdate.likedSongs.tracks.findIndex(t => t.id === track.id)
            userToUpdate.likedSongs.tracks.splice(idx, 1)

        }
    } catch (err) {
        return console.log('somthing went worng in service', err);
    }
    return await httpService.put(`user/${user._id}`, userToUpdate)
}



function getUser(user) {
    return httpService.post('auth/login', user)
}

function getLoggedInUser() {
    return httpService.get('auth')
}

