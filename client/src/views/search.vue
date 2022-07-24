<template>
    <section class="search-page-container">
        <search-bar class="search-input-container flex align-center" @searchTrack="searchTrack" />
        <div v-if="tracks">
            <search-result-list @setTrack="setTrack" @updateStation="updateStation" :tracks="tracks" :currentPreivew="'trackPreview'" />
        </div>
        <genre-list v-if="!tracks" :genres="genres" />
    </section>
</template>
    
<script>
import { eventBus } from '../services/event-bus.js'
import searchResultList from '../components/search/search-result-list.vue'
import searchBar from '../components/search/search-bar.vue'
import genreList from '../components/genre/genre-list.vue'

export default {
    data() {
        return {
            unsubscribe: null,
            genres: null,
        }
    },
    created() {
        this.unsubscribe = eventBus.on('updateStation', this.updateStation)
        this.genres = this.$store.getters.genres
    },
    provide: {
        trackFromSearch: false
    },
    unmounted() {
        this.unsubscribe()
    },
    computed: {
        tracks() {
            return this.$store.getters.searchResults
        },

    },
    components: {
        searchResultList,
        searchBar,
        genreList
    },
    methods: {
        async searchTrack(query) {
            await this.$store.dispatch({ type: 'searchTracks', query })
        },
        setTrack(track) {
            this.$store.commit({ type: 'loadTrack', track })
        },

        updateStation(data) {
            let msg;
            console.log('data = ', data)
            if (data.isNew) msg = `Added ${data.track.title} to ${data.station.name}`
            if (!data.isNew) msg = `removed ${data.track.title} from ${data.station.name}`

            eventBus.emit('show-msg', msg)
            this.$store.dispatch({ type: 'updateStation', data })
        }

    },
}

</script>
<style>
</style>