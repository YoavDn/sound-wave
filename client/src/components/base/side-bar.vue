<!-- TODO: set active link -->

<template>
    <section class="side-bar-container flex-column">
        <nav class="side-bar-nav">
            <div class="logo">
                <h2>SoundWave</h2>
            </div>
            <button v-for="pageLink in pagesLinks" :key="pageLink" @click="goToPage(pageLink.id)"
                :class="{ 'active-link': isActive(pageLink.id) }" class=" page-link-btn flex align-center">
                <span class="page-link-svg">
                    <i :class="pageLink.icon"></i>
                </span>
                {{ pageLink.name }}
            </button>

            <button class="create-playlist-link page-link-btn flex align-center ">
                <span class="page-link-svg">
                    <i class="bi bi-plus-square-fill"></i>
                </span>
                Create Playlist
            </button>
            <button class=" page-link-btn flex align-center">
                <span class="page-link-svg">
                    <i class="bi bi-heart-fill"></i>
                </span>
                Liked Songs
            </button>
        </nav>

        <div class="stations-nav">
            <h2>list</h2>
        </div>
    </section>
</template>
    
<script >
export default {
    data() {
        return {
            activePage: null,
            pagesLinks: [
                { id: 'home', name: 'Home', icon: 'bi bi-house-door-fill' },
                { id: 'search', name: 'Search', icon: 'bi bi-search' },
                { id: 'library', name: 'Library', icon: 'bi bi-music-note-list' }
            ]
        }
    },

    created() {
        console.log(this.$route);
        this.activePage = () => this.$route.name
    },

    computed: {
        currPage() {
            return this.$route.name
        }

    },

    methods: {
        goToPage(page) {
            console.log(page);
            this.$router.push(`/${page}`)
        },

        isActive(pageId) {
            return this.activePage === pageId ? true : false
        }
    }
}

</script>
    
<style>
</style>