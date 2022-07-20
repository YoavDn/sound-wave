<template>
    <section class="search-page-container">
        <form >
            <div class="input-container flex align-center">
                <i class="bi bi-search search-icon"></i>
                <input type="search" name="title" placeholder="Playlists or songs" v-model="query">
            </div>
        </form>

        <div v-if="tracks">
            <search-result-list @setTrack="setTrack" :tracks="tracks" />
        </div>

    </section>
</template>
    
<script>
import searchResultList from '../components/search/search-result-list.vue'

export default {
    data() {
        return {
            query: '',
        }
    },
    computed: {
        tracks() {
            // return this.$store.getters.searchResults
            return [
                {
                    description: "Listen to \"Easy On Me\" here: http://Adele.lnk.to/EOM Pre-order Adele's new album \"30\" before its release on November 19: ...",
                    id: "YQHsXMglC9A",
                    imgUrl: "https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg",
                    publishedAt: "2015-10-23T06:54:18Z",
                    time: "6:07",
                    title: "Adele - Hello",
                },
                {
                    description: "REMASTERED IN HD! Explore the music of Lionel Richie: https://lnk.to/LionelBestOf Watch more Lionel videos: ...",
                    id: "mHONNcZbwDY",
                    imgUrl: "https://i.ytimg.com/vi/mHONNcZbwDY/hqdefault.jpg",
                    publishedAt: "2020-11-20T17:00:16Z",
                    time: "5:27",
                    title: "Lionel Richie - Hello ",
                }
            ]
        }
    },
    components: {
        searchResultList
    },
    methods: {
        async searchTrack() {
            await this.$store.dispatch({ type: 'searchTracks', query: this.query })
        },
        setTrack(track) {
            this.$store.commit({ type: 'setTrack', track })
        },
    },
}

</script>
<style>
</style>