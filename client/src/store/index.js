import { createStore } from 'vuex'
import searchStore from './modules/search-module.js'
import stationStore from './modules/station-module.js'
import playerStore from './modules/player-module'


const store = createStore({
    strict: true,
    state: {

    },

    modules: {
        searchStore,
        stationStore,
        playerStore
    }
})

export default store