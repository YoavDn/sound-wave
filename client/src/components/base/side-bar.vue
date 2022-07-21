<!-- TODO: set active link -->

<template>
    <section class="side-bar-container flex-column">
        <nav class="side-bar-nav">
            <div class="logo flex align-center">
                <i class="bi bi-circle-fill logo-svg"></i>
                <h2> Sound</h2>
            </div>
            <button v-for="pageLink in pagesLinks" :key="pageLink" @click="goToPage(pageLink.id)"
                :class="{ 'active-link': isActive(pageLink.id) }" class=" page-link-btn flex align-center">
                <span class="page-link-svg">
                    <i :class="pageLink.icon"></i>
                </span>
                {{ pageLink.name }}
            </button>

            <button @click="goToPage('station')" class=" create-playlist-link page-link-btn flex align-center ">
                <span class=" page-link-svg">
                    <i class="bi bi-plus-square-fill"></i>
                </span>
                Create Playlist
            </button>
            <button @click="goToPage('station/likedSongs')" class=" page-link-btn flex align-center">
                <span class="page-link-svg">
                    <i class="bi bi-heart-fill"></i>
                </span>
                Liked Songs
            </button>
        </nav>
        <hr>
        <div v-if="stations" style="color:white;" v-for="station in stations" :key="station?._id">
            <p @click="goToStation(station._id)">{{ station.name }}</p>
        </div>
    </section>
</template>

    
<script >
export default {
    data() {
        return {
            activePage: null,
            pagesLinks: [
                { id: '', name: 'Home', icon: 'bi bi-house-door-fill' },
                { id: 'search', name: 'Search', icon: 'bi bi-search' },
                { id: 'library', name: 'Library', icon: 'bi bi-music-note-list' }
            ]
        }
    },

    created() {
        this.activePage = () => this.$route.name
    },

    computed: {
        currPage() {
            return this.$route.name
        },
        stations() {
            return this.$store.getters.getStations
        },
    },

    methods: {
        goToPage(page) {
            this.$router.push(`/${page}`)
        },
        goToStation(stationId) {
                this.$router.push(`/station/${stationId}`)
        },
        isActive(pageId) {
            return this.activePage === pageId ? true : false
        }
    }
}

</script>
     <!-- @click="goToStation(station._id)" -->
<style>
</style>