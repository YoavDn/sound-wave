
import { httpService } from './http.serivce.js'

export const userService = {
    getUser,
    signup,
    updateUser,
    getLoggedInUser,
    logout,
    login,
    getLoggedInUser
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

async function updateUser(user) {
    return await httpService.put(`user/${user._id}`, user)
}



function getUser(user) {
    return httpService.post('auth/login', user)
}

function getLoggedInUser() {
    return httpService.get('auth')
}

