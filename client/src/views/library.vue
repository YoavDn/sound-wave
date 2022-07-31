<template>
    <section class="library-container">
        <h2 class="library-title">Playlists</h2>
        <article class="station-list-container flex">
            <div @click="goToLikedSongs" class="library-liked-songs-card flex">
                <div v-if="likedTracks" class="liked-tracks-names"><span v-for="track in likedTracks.slice(0, 4)">{{
                        track.title
                }} ⚬
                    </span>
                </div>
                <h2 v-else>No Liked Songs..</h2>
                <h1 v-if="likedTracks" class="liked-tracks-title">Liked Songs</h1>
                <div v-if="likedTracks" class="liked-tracks-count">{{ likedTracks.length }} Liked Songs</div>
            </div>
            <stations-list :stations="stations" />
        </article>
    </section>
</template>
<!-- ⚬ -->
<script >
import stationsList from '../components/station/stations-list.vue'
export default {
    name: 'library',
    components: {
        stationsList
    },
    data() {
        return {
            // likedTracksName: this.likedTracks.slice(0, 5),
        }
    },
    created() {
    },
    computed: {
        stations() {
            const stationToShow = this.$store.getters.getUserStations
            const shift = stationToShow.shift()
            return stationToShow
        },
        likedTracks() {
            const likedTracks = this.$store.getters.getLikedStation
            if (!likedTracks) return false
            return likedTracks.tracks

        }
    },
    methods: {
        goToLikedSongs() {
            const user = this.$store.getters.getLoggedInUser
            if (!user) {
                const station = this.$store.getters.getStation('likedSongs')
                console.log(station);
                return this.$router.push(`station/${station._id}`)
            }
            return this.$router.push(`station/${user.likedSongs}`)
        },
    },
}
</script>