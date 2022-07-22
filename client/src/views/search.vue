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
            // return [
            //     {
            //         description: "Listen to \"Easy On Me\" here: http://Adele.lnk.to/EOM Pre-order Adele's new album \"30\" before its release on November 19: ...",
            //         id: "YQHsXMglC9A",
            //         imgUrl: "https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg",
            //         publishedAt: "2015-10-23T06:54:18Z",
            //         time: "6:07",
            //         title: "Adele - Hello",
            //     },
            //     {
            //         description: "REMASTERED IN HD! Explore the music of Lionel Richie: https://lnk.to/LionelBestOf Watch more Lionel videos: ...",
            //         id: "mHONNcZbwDY",
            //         imgUrl: "https://i.ytimg.com/vi/mHONNcZbwDY/hqdefault.jpg",
            //         publishedAt: "2020-11-20T17:00:16Z",
            //         time: "5:27",
            //         title: "Lionel Richie - Hello ",
            //     }
            // ]
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
            this.$store.dispatch({ type: 'addTrackToStation', data })
        }

    },
}

</script>
<style>
</style>