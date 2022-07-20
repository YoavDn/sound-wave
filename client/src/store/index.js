import { createStore } from 'vuex'
import trackStore from './modules/track-module.js'
import stationStore from './modules/station-module.js'


const store = createStore({
    strict: true,
    state: {

    },

    modules: {
        trackStore,
        stationStore,
    }
})

export default store