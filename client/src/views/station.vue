<template>
    <section v-if="station" class="station-container">
        <station-header :station="station" />
        <station-options />
        <track-list :tracks="station.tracks" @setTrack="setTrack" />
        <div class="station-search">
            <search-bar @setSearch="searchTrack" />
            <search-result-list :searchResults="searchResults" />
        </div>
    </section>

</template>
    
<script>
import stationHeader from '../components/station/station-header.vue'
import stationOptions from '../components/station/station-options.vue'
import searchBar from '../components/search/search-bar.vue'
import trackList from '../components/track/track-list.vue'
import searchResultList from '../components/search/search-result-list.vue'
import { stationService } from '../services/station.service'

export default {
    components: {
        stationHeader,
        stationOptions,
        trackList,
        searchResultList,
        searchBar
    },

    data() {
        return {
            station: null
        }
    },

    created() {
        const { id } = this.$route.params
        if (id) {
            this.$store.dispatch({ type: 'setCurrStation', stationId: id })
                .then(station => this.station = { ...station })

        } else {
            this.station = stationService.getEmptyStation()
            this.$store.dispatch({ type: 'saveStation', station: this.station })
        }
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
            return this.$store.getters.searchResults
        },
    }

}
</script>
<style>
</style>