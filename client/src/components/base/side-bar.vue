<template>
    <section class="side-bar-container flex-column">
        <nav class="side-bar-nav">
            <div @click="goToPage('')" class="logo flex">
                <img class="logo-svg" src="../../assets/imgs/logo.png" alt="logo">
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
                    <img src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png" alt="">
                </span>
                Liked Songs
            </button>
        </nav>
        <div class="side-bar-station-list" v-if="stations" style="color:white;">
            <p class="station-side-link" v-for="station in stations" :key="station._id"
                @click="goToStation(station._id)">
                {{ station.name }}</p>
        </div>
    </section>

    <!------------------------------------------------------------- SIDE-BAR-MOBILE -------------------------------------------------------------------->
    <button class="clean-btn mobile-menu-btn" @click="toggleMobileMenu"><i class="bi bi-list"></i></button>
    <section class="side-bar-container-mobile flex-column" :class="{ mobileActive: isMenuMobileOn }">

        <div v-if="loggedInUser" class="user-avatar">
            <span class="flex align-center flex-column" style="width: 26px">
                <avatar-svg />
            </span>
            <span class="avatar-name"> {{ loggedInUser.fullname }}</span>
            <button class="clean-btn" style="margin-inline-end: 6px;" @click="isUserModalShown = !isUserModalShown">
                <arrow-down />
            </button>
        </div>

        <div v-else class="btns-container flex align-center">
            <button @click="goToLoginPage" class="clean-btn login">Log In</button>
        </div>

        <div v-if="isUserModalShown" class="user-modal flex flex-column" v-click-outside="closeModal">
            <button class="clean-btn" @click="logout"><span>Log Out</span></button>
        </div>

        <nav class="side-bar-nav">
            <div @click="goToPage('')" class="logo flex">
                <img class="logo-svg" src="../../assets/imgs/logo.png" alt="logo">
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
                    <img src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png" alt="">
                </span>
                Liked Songs
            </button>
        </nav>
        <div class="side-bar-station-list" v-if="stations" style="color:white;">
            <p class="station-side-link" v-for="station in stations" :key="station._id"
                @click="goToStation(station._id)">
                {{ station.name }}</p>
        </div>
        <div><button class="clean-btn cancel-opt-mobile" @click="toggleMobileMenu">
                <span>Cancel</span>
            </button></div>
    </section>
</template>

    
<script >
import homeIcon from '../../assets/imgs/home.svg'
import libraryIcon from '../../assets/imgs/library.svg'
import searchIcon from '../../assets/imgs/search.svg'
import activeSearchIcon from '../../assets/imgs/active-search.svg'
import activeHomeIcon from '../../assets/imgs/active-home.svg'
import activeLibraryIcon from '../../assets/imgs/active-library.svg'
import likedPage from '../../assets/imgs/likedPage.svg'
import avatarSvg from '../../assets/imgs/default-avatar.svg'
import arrowDown from '../../assets/imgs/arrow-down.svg'

export default {
    data() {
        return {
            activePage: null,
            pagesLinks: [
                { id: '', name: 'Home', icon: ['homeIcon', 'activeHomeIcon'] },
                { id: 'search', name: 'Search', icon: ['searchIcon', 'activeSearchIcon'] },
                { id: 'library', name: ' Your Library', icon: ["libraryIcon", 'activeLibraryIcon'] }
            ],
            activePage: null,
            isMenuMobileOn: false,
            isUserModalShown: false,
        }
    },
    components: {
        homeIcon,
        libraryIcon,
        searchIcon,
        activeHomeIcon,
        activeLibraryIcon,
        activeSearchIcon,
        likedPage,
        avatarSvg,
        arrowDown
    },

    computed: {
        stations() {
            let stations = this.$store.getters.getUserStations
            return stations
        },
        loggedInUser() {
            return this.$store.getters.getLoggedInUser
        },
        likedSongsRoute() {

            if (!this.user) {
                const station = this.$store.getters.getStation('likedSongs')
                return `station/${station._id}`
            }
            return `station/${this.user.likedSongs}`

        },
        user() {
            return this.$store.getters.getLoggedInUser
        },
    },

    methods: {
        toggleMobileMenu() {
            this.isMenuMobileOn = !this.isMenuMobileOn
        },
        closeModal() {
            this.isUserModalShown = false
        },
        logout() {
            if (!this.loggedInUser) return
            this.$store.dispatch({ type: 'logout' })
            this.isUserModalShown = false
        },

        goToLoginPage() {
            this.$router.push('/login')
            this.isMenuMobileOn = false
        },

        goToPage(page) {
            this.$router.push(`/${page}`)
            this.isMenuMobileOn = false
        },

        goToStation(stationId) {
            this.$router.push(`/station/${stationId}`)
            this.isMenuMobileOn = false
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