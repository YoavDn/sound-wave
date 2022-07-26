<template>
    <section v-if="station" class="station-container">
        <station-header :station="station" @updateStationDetails="updateStationDetails" />

        <main class="station-main-container">
            <station-options :station="station" @playStation="playStation" @setStation="setStation"
                @toggleLikeStation="toggleLikeStation" @deleteStation="deleteStation" />
            <track-list v-if="station?.tracks.length > 0" :station="station" @setTrack="setTrack"
                @updateStation="updateStation" @toggleMobileOptions="toggleMobileOptions" @updateUser="updateUser" />

            <div v-if="!station?.tracks?.length > 0" class="station-search">
                <h2 class='station-seaerch-main-txt'>Let's find something for your playlist</h2>

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
import { socketService } from '../services/socket.service'

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
        this.$store.dispatch({ type: 'setCurrStation', stationId: id })
        socketService.on('update-station', (station) => {
            console.log('station = ', station)
            this.sendStation(station)
        })

    },

    methods: {
        async sendStation(station) {
            const data = { station, track: null, isNew: null }
            await this.$store.dispatch({ type: 'updateStation', data })
            const { id } = this.$route.params
            //test
            this.station = this.$store.getters.getStation(id)
        },

        setTrack(track) {
            this.$store.commit({ type: 'loadTrack', track, station: this.station })
            const sharedStation = this.sharedStations.find(sId => sId === this.station._id)
            if (this.station._id === sharedStation) {
                socketService.emit('load-track', { track, station: this.station })
            }
        },


        playStation() {
            const firstTrack = this.station.tracks[0]
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

        async deleteStation() {

            await this.$store.dispatch({ type: 'removeStationFromUser', station: this.station._id })
            await this.$store.dispatch({ type: 'deleteStation', station: this.station })
            this.$router.push('/')
        },

        async updateStation(data) {
            if (!data) return
            await this.$store.dispatch({ type: 'updateStation', data })
            const { id } = this.$route.params
            let msg;

            if (data.isNew !== null) {
                if (data.isNew) msg = `Added ${data.track.title} to ${data.station.name}`
                if (!data.isNew) msg = `removed ${data.track.title} from ${data.station.name}`
            }

            eventBus.emit('show-msg', msg)

            this.station = this.$store.getters.getStation(id)
            socketService.emit('update-station', this.station)
        },

        async updateUser(data) {
            await this.$store.dispatch({ type: 'updateUserLikedSong', data })
        },

        toggleLikeStation() {
            if (!this.user) {
                eventBus.emit('show-msg', 'Log in to add station ')
                return

            }
            this.$store.dispatch({ type: 'toggleLikeStation', station: this.station._id })
            eventBus.emit('show-msg', `Added ${this.station.name} to library`)
        }
    },

    computed: {
        searchResults() { return this.$store.getters.searchResults },
        user() { return this.$store.getters.getLoggedInUser },
        sharedStations() {
            return this.$store.getters.getSharedStations
        },
        currTrack() {
            return this.$store.getters.getTrack
        }
    },

    watch: {
        '$route.params.id': {
            handler: function (id) {
                this.station = this.$store.getters.getStation(id)
                if (!id) return
                const sharedStation = this.sharedStations.find(sId => sId === id)
                if (this.station._id === sharedStation) {
                    socketService.emit('enter-station', sharedStation)
                }
            },
            deep: true,
            immediate: true,
        },
    },

}
</script>
<style>
</style>