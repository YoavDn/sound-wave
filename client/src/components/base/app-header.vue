<template>
    <section class="app-header-container flex align-center space-between">
        <div class="page-btn-container flex align-center">
            <button class="pages-btn flex align-center" @click="$router.back()"><i
                    class="bi bi-chevron-left"></i></button>
            <button class="pages-btn flex align-center" @click="$router.go(1)"><i
                    class="bi bi-chevron-right"></i></button>
        </div>
        <div v-if="loggedInUser" class="user-avatar">
            <h2 class="temp">{{ loggedInUser.fullname }}</h2>
            <button @click="logout">logout</button>
        </div>
        <div v-else class="also-temp">
            <button @click="goToLoginPage">Log In</button>
        </div>
    </section>
</template>
    
<script >

export default {

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

</script>
    
<style>
</style>