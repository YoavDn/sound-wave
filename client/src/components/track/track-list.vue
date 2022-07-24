<template>
    <div class="station-tracks-container">
        <ul class="clean-list station-list">
            <track-list-head />
            <li v-for="(track, idx) in tracks">
                <track-preview @toggleMobileOptions="$emit('toggleMobileOptions', track)" :trackIdx="idx" :track="track" @setTrack="$emit('setTrack', track)"
                    @updateStation="updateStation" />
            </li>
        </ul>
    </div>
</template>

<script>
import trackPreview from './track-preview.vue'
import trackListHead from '../custom/track-list-head.vue'
import { method } from 'lodash'
// import TrackListHead from '../custom/track-list-head.vue'



export default {
    components: {
        trackPreview,
        trackListHead,
        // TrackListHead
    },
    props: { 'tracks': Array },

    methods: {
        updateStation(data) {
            this.$emit('updateStation', data)
        }
    },
}
</script>
