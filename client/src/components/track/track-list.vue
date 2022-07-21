<template>

    <div class="station-tracks-container">
        <ul class="clean-list station-list">
            <track-list-head />
            <!-- <p>#</p>
            <p>TITLE</p>
            <p>ADDED BY</p>
            <p>DATE ADDED</p>
            <p><i class="bi bi-clock"></i></p> -->
            <li v-for="(track, idx) in tracks">
                <track-preview :trackIdx="idx" :track="track" @setTrack="$emit('setTrack', track)" />
            </li>
        </ul>
    </div>
</template>

<script>
import trackPreview from './track-preview.vue'
import trackListHead from '../custom/track-list-head.vue'
// import TrackListHead from '../custom/track-list-head.vue'



export default {
    components: {
        trackPreview,
        trackListHead,
        // TrackListHead
    },
    props: { 'tracks': Array }
}
</script>
