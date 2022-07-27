<template>
    <section v-if="station" class="station-container">
        <station-header :station="station" @updateStationDetails="updateStationDetails" />

        <main class="station-main-container">
            <station-options :station="station" @playStation="playStation" @setStation="setStation"
                @toggleLikeStation="toggleLikeStation" />
            <track-list v-if="station?.tracks.length > 0" :tracks="station.tracks" @setTrack="setTrack"
                @updateStation="updateStation" @toggleMobileOptions="toggleMobileOptions" @updateUser="updateUser" />

            <div v-if="!station?.tracks?.length > 0" class="station-search">
                <h2 class='station-seaerch-main-txt'>Let's find Somethimg for you Playlist</h2>
                <search-bar class="station-search-bar flex align-center" @searchTrack="searchTrack" />
                <search-result-list v-if="searchResults" :currentPreivew="'searchResultPreview'" @setTrack="setTrack"
                    :tracks="searchResults" @updateStation="updateStation" />
            </div>

            <track-options-mobile @updateStation="updateStation" :track="track" v-if="isMobileOptionsOn"
                @toggleMobileOptions="toggleMobileOptions" />
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
import trackOptionsMobile from '../components/track/track-options-mobile.vue'


export default {
    name: 'station',
    components: {
        stationHeader,
        trackList,
        searchResultList,
        searchBar,
        stationOptions,
        trackOptionsMobile
    },

    data() {
        return {
            newStation: null,
            station: null,
            unsubscribe: null,
            currTrack: null,
            isPlaying: null,
            isMobileOptionsOn: false
        }
    },
    unmounted() {
        this.unsubscribe()
    },



    created() {
        const { id } = this.$route.params
        this.station = this.$store.getters.getStation(id)
        this.unsubscribe = eventBus.on('updateStation', this.updateStation)

    },

    methods: {

        setTrack(track) {
            this.$store.commit({ type: 'loadTrack', track, station: this.station })
            this.currTrack = track
        },
        playStation() {
            const firstTrack = this.station.tracks[0]
            this.currTrack = firstTrack
            this.setTrack(firstTrack)
        },

        toggleMobileOptions(track = null) {
            this.track = track
            this.isMobileOptionsOn = !this.isMobileOptionsOn
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

        async updateStationDetails(stationToUpdate) {
            const data = { station: stationToUpdate, track: null, isNew: null }
            await this.$store.dispatch({ type: 'updateStation', data })
            const { id } = this.$route.params
            this.station = this.$store.getters.getStation(id)
        },


        async updateStation(data) {
            if (!data) return
            console.log('data = ', data)
            await this.$store.dispatch({ type: 'updateStation', data })
            const { id } = this.$route.params
            let msg;

            if (data.isNew !== null) {
                if (data.isNew) msg = `Added ${data.track.title} to ${data.station.name}`
                if (!data.isNew) msg = `removed ${data.track.title} from ${data.station.name}`
            }

            eventBus.emit('show-msg', msg)
            this.station = this.$store.getters.getStation(id)
            console.log(this.station);
        },
        async updateUser(data) {
            await this.$store.dispatch({ type: 'updateUserLikedSong', data })
        },
        toggleLikeStation() {
            this.$store.dispatch({ type: 'toggleLikeStation', station: this.station._id })
        }

    },
    computed: {
        searchResults() { return this.$store.getters.searchResults },
        user() { return this.$store.getters.getLoggedInUser }
    },

    watch: {
        '$route.params.id': {
            handler: function (id) {
                this.station = this.$store.getters.getStation(id)
            },
            deep: true,
            immediate: true,
        },
    },

}
</script>
<style>
</style>