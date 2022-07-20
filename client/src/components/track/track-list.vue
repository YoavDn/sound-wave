<template>
    <div class="station-tracks-container">
        <ul class="clean-list flex flex-column result-list">
            <li class="track-list-head flex space-between">
                <div class="track-preview flex align-center space-between">
                    <div class="track-details flex align-center">
                        <p>#</p>
                        <h2>Title</h2>
                    </div>
                </div>
            </li>
            <li v-for="track in tracks" class="flex align-center">
                <track-preview :track="track" />
            </li>
        </ul>
    </div>
</template>

<script>
import trackPreview from './track-preview.vue'


export default {
    components: {
        trackPreview,
    },
    props: { 'tracks': Array }
}
</script>
