import { createStore } from 'vuex'
import trackStore from './modules/track-module.js'
import stationStore from './modules/station-module.js'
import playerStore from './modules/player-module'


const store = createStore({
    strict: true,
    state: {

    },

    modules: {
        trackStore,
        stationStore,
        playerStore
    }
})

export default store