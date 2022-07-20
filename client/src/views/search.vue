<template>
    <section class="search-page-container">
        <form @submit.prevent="searchTrack">
            <div class="input-container flex align-center">
                <i class="bi bi-search search-icon" @click="searchTrack"></i>
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
            return this.$store.getters.searchResults
        }
    },
    components: {
        searchResultList
    },
    methods: {
        async searchTrack() {  
            await this.$store.dispatch({ type: 'searchTracks', query: this.query })
        },
        setTrack(track){
            this.$store.commit({type: 'setTrack', track})
        },
    },
}

</script>
<style>
</style>