<template>
    <section class="app-header-container flex align-center space-between">
        <div class="page-btn-container flex align-center">
            <button class="pages-btn flex align-center" @click="$router.back()"><i
                    class="bi bi-chevron-left"></i></button>
            <button class="pages-btn flex align-center" @click="$router.go(1)"><i
                    class="bi bi-chevron-right"></i></button>
        </div>

        <div v-if="loggedInUser" class="user-avatar">
            <!-- <h2 class="temp">{{ loggedInUser.fullname }}</h2> -->
            <img src="../../assets/imgs/default-avatar.svg" class="avatar-img">
            <span class="avatar-name"> {{loggedInUser.fullname }}</span>
            <button class="clean-btn" style="margin-inline-end: 6px;" @click="isUserModalShown = !isUserModalShown"><img src="../../assets/imgs/avatar-arrow.svg"></button>
        </div>

        <div v-else class="also-temp">
            <button @click="goToLoginPage">Log In</button>
        </div>

        <div v-if="isUserModalShown" class="user-modal flex flex-column">
            <button class="clean-btn"><span>Log Out</span></button>
            <button class="clean-btn"><span>Profile</span></button>
            <button class="clean-btn"><span>Account</span></button>
        </div>
    </section>
</template>
    
<script >

export default {
    data(){
        return {
            isUserModalShown: false,
        }
    },

    computed: {
        loggedInUser() {
            return this.$store.getters.getLoggedInUser
        }
    },
    methods: {
        logout() {
            if (!this.loggedInUser) return
            this.$store.dispatch({ type: 'logout' })
        },

        goToLoginPage() {
            this.$router.push('/login')
        }
    }
}
''
</script>
    
<style>
</style>