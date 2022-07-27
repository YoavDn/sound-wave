import { io } from 'socket.io-client'
import { userService } from './user.service'

export const ENTERED_STATION = 'enter-station'
export const UPDATE_STATION = 'update-station'
export const STATION_UPDATED = 'station-updated'

const LOGIN = 'set-user-socket'
const LOGOUT = 'unset-user-socket'


const baseUrl = (process.env.NODE_ENV === 'production') ? '' : '//localhost:3030'
export const socketService = createSocketService()

socketService.setup()

function createSocketService() {
  var socket = null
  const socketService = {
    setup() {
      socket = io(baseUrl)
      setTimeout(() => {
        const user = userService.getLoggedInUser()
        if (user) this.login(user._id)
      }, 500)
    },
    on(eventName, cb) {
      socket.on(eventName, cb)
    },
    off(eventName, cb = null) {
      if (!socket) return;
      if (!cb) socket.removeAllListeners(eventName)
      else socket.off(eventName, cb)
    },
    emit(eventName, data) {
      data = JSON.parse(JSON.stringify(data))
      socket.emit(eventName, data)
    },
    login(userId) {
      socket.emit(LOGIN, userId)
    },
    logout() {
      socket.emit(LOGOUT)
    },
    terminate() {
      socket = null
    },


  }
  return socketService
}
