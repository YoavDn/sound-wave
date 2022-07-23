<template>
    <div class="search-result-list-container">
        <ul class="clean-list flex flex-column result-list">
            <li v-for="track in tracks" class="flex align-center">
                <track-preview :trackIdx="idx" :track="track" @setTrack="$emit('setTrack', track)" />
            </li>
        </ul>
    </div>
</template>

<script>
import searchResultPreview from './search-result-preview.vue'
import trackPreview from '../track/track-preview.vue'
export default {

    props: {
        tracks: {
            type: Array,
            required: true,
        }
    },
    components: {
        searchResultPreview,
        trackPreview
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