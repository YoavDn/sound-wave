<template>
    <section class="search-page-container">
        <search-bar class="search-input-container flex align-center" @searchTrack="searchTrack" />
        <div v-if="tracks">
            <search-result-list @setTrack="setTrack" :tracks="tracks" />
        </div>

    </section>
</template>
    
<script>
import { eventBus } from '../services/event-bus.js'
import searchResultList from '../components/search/search-result-list.vue'
import searchBar from '../components/search/search-bar.vue'
export default {
    data() {
        return {
            unsubscribe: null,
        }
    },
    created() {
        this.unsubscribe = eventBus.on('addTrackToStation', this.addTrackToStation)
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
        searchBar
    },
    methods: {
        async searchTrack(query) {
            await this.$store.dispatch({ type: 'searchTracks', query })
        },
        setTrack(track) {
            this.$store.commit({ type: 'loadTrack', track })
        },

        addTrackToStation(data) {
            console.log('from search');
            this.$store.dispatch({ type: 'addTrackToStation', data })
        }

    },
}

</script>
<style>
</style>