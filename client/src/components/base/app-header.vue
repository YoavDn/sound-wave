<template>
    <section class="app-header-container flex align-center space-between" :class="headerBgStyle">
        <div class="page-btn-container flex align-center">
            <button class="pages-btn flex align-center" @click="$router.back()"><i
                    class="bi bi-chevron-left"></i></button>
            <button class="pages-btn flex align-center" @click="$router.go(1)"><i
                    class="bi bi-chevron-right"></i></button>
        </div>

        <div v-if="loggedInUser" class="user-avatar">
            <!-- <h2 class="temp">{{ loggedInUser.fullname }}</h2> -->
            <img src="../../assets/imgs/default-avatar.svg" class="avatar-img">
            <span class="avatar-name"> {{ loggedInUser.fullname }}</span>
            <button class="clean-btn" style="margin-inline-end: 6px;" @click="isUserModalShown = !isUserModalShown">
                <!-- <img src="../../assets/imgs/avatar-arrow.svg"> -->
                <arrow-down />
            </button>
        </div>

        <div v-else class="btns-container flex align-center">
            <button @click="goToLoginPage" class="clean-btn login">Log in</button>
        </div>

        <div v-if="isUserModalShown" class="user-modal flex flex-column" v-click-outside="closeModal">
            <button class="clean-btn" @click="logout"><span>Log Out</span></button>
            <button class="clean-btn"><span>Profile</span></button>
            <button class="clean-btn"><span>Account</span></button>
        </div>
    </section>
</template>
    
<script >
import arrowDown from '../../assets/imgs/arrow-down.svg'


export default {
    components: {
        arrowDown,
    },
    data() {
        return {
            isUserModalShown: false,
            onStationPage: false
        }
    },
    created() {
        this.onStationPage = this.$route.name === 'station' ? true : false
    },

    computed: {
        loggedInUser() {
            return this.$store.getters.getLoggedInUser
        },
        headerBgStyle() {
            return { 'on-station-page': this.onStationPage }

        },
    },
    methods: {
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
        }
    },

    watch: {
        $route: {
            handler: function (route) {
                this.onStationPage = route.name === 'station' ? true : false
            }
        }
    }
}
''
</script>
    
<style>
</style>