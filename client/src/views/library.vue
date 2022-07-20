<template>
    <section class="library-container">
        <h2 class="library-title">Playlists</h2>
        <article class="station-list-container flex">
            <div @click="goToLikedSongs" class="library-liked-songs-card flex">
                <div class="liked-tracks-names">{{likedTracksName.join(' ⚬ ')}}</div>
                <h1 class="liked-tracks-title">liked Songs</h1>
                <div class="liked-tracks-count">{{likedTracksCount}} liked songs</div>
                </div>
                <stations-list :stations="stations" />
        </article>
    </section>
</template>

<script >
import stationsList from '../components/station/stations-list.vue'
export default {
    name: 'library',
    components: {
        stationsList
    },
    data() {
        return {
            likedTracksCount:12,
            likedTracksName:['נסרין תנשום', 'Hello Adele', 'Goodbye Russ', 'Timber Pitbull ', 'פלונטר התקווה 6'],
        }
    },
    created(){
        // console.log('here', ['Hello Adele', 'Goodbye Russ'].join(' * '))
    },
    computed: {
        stations() {
            return this.$store.getters.getStations
        }
        },
    methods: {
        goToLikedSongs() {
            this.$router.push('/station/likedSongs')
        },
    },
}
</script>