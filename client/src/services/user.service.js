
import { httpService } from './http.serivce.js'

export const userService = {
    getUser,
    signup,
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

function getUser(user) {
    return httpService.post('auth/login', user)
}

function getLoggedInUser() {
    return httpService.get('auth')
}

