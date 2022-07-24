<template>
    <div class="search-result-list-container">
        <ul class="clean-list flex flex-column result-list">
            <li v-for="(track) in tracks" class="flex align-center">
                <!-- <track-preview :track="track" @setTrack="$emit('setTrack', track)" @updateStation="updateStation" /> -->
                <component :is="currentPreivew" :track="track" @setTrack="$emit('setTrack', track)"
                    @updateStation="updateStation" />
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
    data() {
        return {
        }
    },
    created() {
        console.log(this.currentPreivew);
    },
    methods: {
        updateStation(data) {
            console.log(data);
            this.$emit('updateStation', data)
        }
    },
    computed: {
    },
}
</script>

<style lang="scss" scoped>
</style>