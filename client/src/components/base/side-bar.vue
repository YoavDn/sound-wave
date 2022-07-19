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
                    <component :is='pageLink.icon' />
                </span>
                {{ pageLink.name }}
            </button>

            <button class="create-playlist-link page-link-btn flex align-center ">
                <span class="page-link-svg">
                    <plus-icon />
                </span>
                Create Songs
            </button>
            <button class=" page-link-btn flex align-center">
                <span class="page-link-svg">
                    <heart-icon />
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
import { SearchIcon, HomeIcon, ViewBoardsIcon, PlusIcon, HeartIcon } from '@heroicons/vue/outline'
export default {
    components: {
        SearchIcon,
        HomeIcon,
        ViewBoardsIcon,
        PlusIcon,
        HeartIcon,
    },

    data() {
        return {
            activePage: null,
            pagesLinks: [
                { id: 'home', name: 'Home', icon: 'HomeIcon' },
                { id: 'search', name: 'Search', icon: 'SearchIcon' },
                { id: 'library', name: 'Library', icon: 'ViewBoardsIcon' }
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