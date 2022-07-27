<template>
    <div class="search-result-list-container">
        <ul class="clean-list flex flex-column result-list">
            <li v-for="(track, idx) in tracks" class="flex align-center">
                <search-result-preview @toggleMobileOptions="$emit('toggleMobileOptions', track)" :listLength="tracks.length" :trackIdx="idx" :track="track" @setTrack="$emit('setTrack', track)" @updateStation="updateStation" />
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
        },
        currentPreivew: {
            type: String,
        }
    },
    components: {
        searchResultPreview,
        trackPreview
    },
    methods: {
        updateStation(data) {
            this.$emit('updateStation', data)
        }
    },

}
</script>

<style lang="scss" scoped>
</style>