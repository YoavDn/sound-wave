<template>
    <section v-if="station" class="station-container">
        <station-header :station="station" />
        <main class="station-main-container">
            <station-options />
            <track-list :tracks="station.tracks" @setTrack="setTrack" />
            <div v-if="!station?.tracks.length > 0" class="station-search">
                <search-bar class="station-search-bar flex align-center" @searchTrack="searchTrack" />
                <search-result-list v-if="searchResults" @setTrack="setTrack" :tracks="searchResults" />
            </div>
        </main>
    </section>

</template>
    
<script>
import stationHeader from '../components/station/station-header.vue'
import searchBar from '../components/search/search-bar.vue'
import trackList from '../components/track/track-list.vue'
import searchResultList from '../components/search/search-result-list.vue'
import stationOptions from '../components/station/station-options.vue'
import { stationService } from '../services/station.service'

export default {
    components: {
        stationHeader,
        trackList,
        searchResultList,
        searchBar,
        stationOptions

    },

    data() {
        return {
            newStation: null
        }
    },

    created() {
    },
    async unmounted(){
        await this.$store.dispatch({type:'saveStation', station: this.station})
    },
    methods: {
        setTrack(track) {
            this.$store.commit({ type: 'setTrack', track })
        },

        async searchTrack(query) {
            console.log(query);
            await this.$store.dispatch({ type: 'searchTracks', query })
        },

    },
    computed: {
        searchResults() {
            const tracks = this.$store.getters.searchResults
            console.log('tracks!!!', tracks);
            return tracks
        },
        station() {
            const { id } = this.$route.params
            return this.$store.getters.getStation(id)
        }
    }

}
</script>
<style>
</style>