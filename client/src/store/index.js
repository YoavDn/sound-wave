import { createStore } from 'vuex'
import trackStore from './modules/track-module.js'

const store = createStore({
    strict: true,
    state: {

    },

    modules: {
        trackStore
    }
})

export default store