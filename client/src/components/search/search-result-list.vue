<template>
    <div class="search-result-list-container">
        <ul class="clean-list flex flex-column result-list">
            <li v-for="track in tracks" class="flex align-center">
                <search-result-preview :track="track" />
            </li>
        </ul>
    </div>
</template>

<script>
import searchResultPreview from './search-result-preview.vue'
export default {
    
    props:{
        tracks: {
            type: Array,
            required: true,
        }
    },
    components:{
        searchResultPreview,
    },
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
    },
}
</script>

<style lang="scss" scoped>
</style>