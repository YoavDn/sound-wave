
import { httpService } from './http.serivce.js'
import { socketService } from './socket.service'

export const userService = {
    getUser,
    signup,
    updateUser,
    logout,
    login,
    getLoggedInUser,
    getById
}

window.userService = userService

async function getById(userId) {
    // const user = await storageService.get('user', userId)
    const user = await httpService.get(`user/${userId}`)

    // socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
    // socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
    // socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

    return user
}

async function login(credential) {
    // const users = await storageService.query('user')
    // const user = users.find(user => user.username === credential.username)
    const user = await httpService.post('auth/login', credential)
    console.log(user);
    if (user) {
        socketService.login(user._id)
        return user
    }
}

async function signup(newUser) {
    const user = await httpService.post('auth/signup', newUser)
    socketService.emit('set-user-socket', user._id);
    return user
}

async function logout() {
    // socketService.logout()
    // socketService.emit('unset-user-socket'); //Raw bugged !!
    return await httpService.post('auth/logout')
}

async function updateUser(user) {
    return await httpService.put(`user/${user._id}`, user)
}

function getUser(user) {
    return httpService.post('auth/login', user)
}

async function getLoggedInUser() {
    return await httpService.get('auth')
}
