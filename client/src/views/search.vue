<template>
    <section class="search-page-container">
        <form @submit.prevent="searchTrack">
            <div class="input-container flex align-center">
                <SearchIcon @click="searchTrack" class="search-icon" />
                <input type="search" name="title" placeholder="Playlists or songs" v-model="query">
            </div>
        </form>

        <div v-if="tracks">
            <search-result-list :tracks="tracks"/>
        </div>

    </section>
</template>
    
<script>
import { youtubeService } from '../services/youtube.service'
import { SearchIcon } from '@heroicons/vue/outline'
import searchResultList from '../components/search/search-result-list.vue'

export default {
    data(){
        return {
            query: '',
            tracks: null,
        }
    },
    components: {
        SearchIcon,
        searchResultList
    },
    methods:{
        async searchTrack(){
            console.log('query = ', this.query)
            if (!this.query) return this.tracks = null
            this.tracks = await youtubeService.searchTracks(this.query)
            console.log('tracks = ', this.tracks)
        }
    },
}

</script>
<style>
</style>