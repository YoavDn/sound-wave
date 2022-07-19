<template>
    <section class="side-bar-container">
        <div class="logo">
            <h2>SoundWave</h2>
        </div>
        <nav class="side-bar-nav">
            <button v-for="pageLink in pagesLinks" @click="goToPage(pageLink.id)"
                class=" page-link-btn flex align-center">
                <span class="page-link-svg">
                    <component :is='pageLink.icon' />
                </span>
                {{ pageLink.name }}
            </button>
        </nav>
    </section>
</template>
    
<script >
import { SearchIcon, HomeIcon, ViewBoardsIcon } from '@heroicons/vue/outline'
export default {
    components: {
        SearchIcon,
        HomeIcon,
        ViewBoardsIcon
    },

    data() {
        return {
            pagesLinks: [
                { id: 'home', name: 'Home', icon: 'HomeIcon' },
                { id: 'search', name: 'Search', icon: 'SearchIcon' },
                { id: 'library', name: 'Library', icon: 'ViewBoardsIcon' }
            ]
        }
    },

    computed: {
        activePage() {
            console.log(this.$route);
            // const currPage = 
        }
    },

    methods: {
        goToPage(page) {
            this.$router.push(`/${page}`)
        }
    }
}

</script>
    
<style>
</style>