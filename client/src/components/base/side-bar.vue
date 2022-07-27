

<template>
    <section class="side-bar-container flex-column">
        <nav class="side-bar-nav">
            <div class="logo flex">
                <img class="logo-svg" src="../../assets/imgs/soundWave.svg" alt="logo">
                <h2>SoundWave</h2>
            </div>
            <button v-for="pageLink in pagesLinks" :key="pageLink" @click="goToPage(pageLink.id)"
                :class="activeStyle(pageLink.id)" class=" page-link-btn flex align-center">
                <span class="page-link-svg">
                    <component v-if="activePage === pageLink.id" :is="pageLink.icon[1]" />
                    <component class="page-svg" v-else :is="pageLink.icon[0]" />
                </span>
                {{ pageLink.name }}
            </button>

            <button @click="createNewPlaylist" class=" create-playlist-link page-link-btn flex align-center ">
                <span class=" page-link-svg">
                    <i class="bi bi-plus-square-fill"></i>
                </span>
                Create Playlist
            </button>
            <button @click="goToPage(likedSongsRoute)" class=" liked-songs-link page-link-btn flex align-center">
                <span class="page-link-svg">
                    <i class="bi bi-heart-fill"></i>
                </span>
                Liked Songs
            </button>
        </nav>
        <div class="side-bar-station-list" v-if="stations" style="color:white;">
            <!-- <p class="station-side-link" v-for="station in stations" :key="station._id"
                @click="goToStation(station._id)">
                {{ station.name }}</p> -->
        </div>
    </section>
</template>

    
<script >
import homeIcon from '../../assets/imgs/home.svg'
import libraryIcon from '../../assets/imgs/library.svg'
import searchIcon from '../../assets/imgs/search.svg'
import activeSearchIcon from '../../assets/imgs/active-search.svg'
import activeHomeIcon from '../../assets/imgs/active-home.svg'
import activeLibraryIcon from '../../assets/imgs/active-library.svg'

export default {
    data() {
        return {
            activePage: null,
            pagesLinks: [
                { id: '', name: 'Home', icon: ['homeIcon', 'activeHomeIcon'] },
                { id: 'search', name: 'search', icon: ['searchIcon', 'activeSearchIcon'] },
                { id: 'library', name: ' Your Library', icon: ["libraryIcon", 'activeLibraryIcon'] }
            ],
            activePage: null
        }
    },
    components: {
        homeIcon,
        libraryIcon,
        searchIcon,
        activeHomeIcon,
        activeLibraryIcon,
        activeSearchIcon,
    },

    computed: {
        stations() {
            const stations = this.$store.getters.getStations

            if (!this.user) return this.$store.getters.getLocalStations
            const userStations = this.user.stations.map(id => stations.find(s => s._id === id))
            if (userStations) return userStations
            return stations

        },
        likedSongsRoute() {

            if (!this.user) {
                const station = this.$store.getters.getStation('likedSongs')
                console.log(station);
                return `station/${station._id}`
            }
            const _id = this.$store.getters.getLoggedInUser.likedSongs
            return `station/${_id}`

        },
        user() {
            return this.$store.getters.getLoggedInUser
        },
    },





    methods: {
        goToPage(page) {
            this.$router.push(`/${page}`)
            
        },

        goToStation(stationId) {
            this.$router.push(`/station/${stationId}`)
            // this.$router.go()
        },


        activeStyle(pageId) {
            return { 'active-link': this.activePage === pageId }
        },

        async createNewPlaylist() {
            const user = this.$store.getters.getLoggedInUser

            if (!user) {
                const localStation = await this.$store.dispatch({ type: 'createNewStation' })
                return this.$router.push(`/station/${localStation._id}`)
            }

            const station = await this.$store.dispatch({ type: 'createNewStation', user })
            const updatedUser = JSON.parse(JSON.stringify(user))
            console.log(station);

            updatedUser.stations.unshift(station.insertedId)

            await this.$store.dispatch({ type: 'updateUser', user: updatedUser, })
            return this.$router.push(`/station/${station.insertedId}`)

        }

    },

    watch: {
        '$route.name': {
            handler: function (name) {
                this.activePage = name
            },
            deep: true,
            immediate: true
        },

    },
}

</script>
     <!-- @click="goToStation(station._id)" -->
<style>
</style>