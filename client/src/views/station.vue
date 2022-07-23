<template>
    <section v-if="station" class="station-container">
        <station-header :station="station" />
        <main class="station-main-container">
            <station-options :station="station" @setStation="setStation" />
            <track-list v-if="station.tracks.length > 0" :tracks="station.tracks" @setTrack="setTrack"
                @updateStation="updateStation" />
            <div v-if="!station?.tracks?.length > 0" class="station-search">
                <h2 class='station-seaerch-main-txt'>Let's find Somethimg for you Playlist</h2>
                <search-bar class="station-search-bar flex align-center" @searchTrack="searchTrack" />
                <search-result-list v-if="searchResults" @setTrack="setTrack" :tracks="searchResults" />
            </div>
        </main>
    </section>

</template>
    
<script>
import stationHeader from '../components/station/station-header.vue'
import { eventBus } from '../services/event-bus.js'
import searchBar from '../components/search/search-bar.vue'
import trackList from '../components/track/track-list.vue'
import searchResultList from '../components/search/search-result-list.vue'
import stationOptions from '../components/station/station-options.vue'

export default {
    components: {
        stationHeader,
        trackList,
        searchResultList,
        searchBar,
        stationOptions,
    },

    data() {
        return {
            newStation: null,
            station: null,
            unsubscribe: null,
        }
    },
    unmounted() {
        this.unsubscribe()
    },

    async created() {
        const { id } = this.$route.params
        this.station = await this.$store.getters.getStation(id)
        // if (!id) await this.$store.dispatch({ type: 'saveStation', station: this.station })
        this.unsubscribe = eventBus.on('addTrackToStation', this.addTrackToStation)
    },

    methods: {
        setTrack(track) {
            this.$store.commit({ type: 'loadTrack', track, station: this.station })
        },

        async searchTrack(query) {
            await this.$store.dispatch({ type: 'searchTracks', query })
        },

        addTrackToStation(data) {
            eventBus.emit('show-msg', `Added to${data.station.name}`)
            this.$store.dispatch({ type: 'addTrackToStation', data })
        },
        setStation(station) {
            this.$store.commit({ type: 'setCurrStation', station })
        },

        async updateStation(station) {
            this.$store.dispatch({ type: 'updateStation', station })
        }

    },
    computed: {
        searchResults() { return this.$store.getters.searchResults },
    },

    watch: {
        '$route.params.id': {
            handler: async function (id) {
                this.station = await this.$store.getters.getStation(id)
            },
            deep: true,
            immediate: true
        }
    },

}
</script>
<style>
</style>