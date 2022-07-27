<template>
    <div class="station-tracks-container">
        <track-list-head />
        <!-- <draggable v-model="trackList" class="clean-list station-list" :sort="true"> -->
        <ul class="clean-list station-list">
            <li v-for="(track, idx) in tracks" :key="track.id">
                <track-preview @toggleMobileOptions="$emit('toggleMobileOptions', track)" :trackIdx="idx" :track="track"
                    @setTrack="$emit('setTrack', track)" @updateStation="updateStation" @updateUser="updateUser" />
            </li>
        </ul>
        <!-- </draggable> -->
    </div>
</template>

<script>
import { defineComponent } from 'vue'
// import { VueDraggableNext } from 'vue-draggable-next'

import trackPreview from './track-preview.vue'
import trackListHead from '../custom/track-list-head.vue'


export default defineComponent({
    name: 'track-list',
    data() {
        return {
            enabled: true,
            dragging: false,
        }
    },
    components: {
        // draggable: VueDraggableNext,
        trackPreview,
        trackListHead,
    },
    props: { 'tracks': Array },
    // defineProps: { 'tracks': Array },

    computed: {
        trackList: {
            get() {
                return this.tracks
            },
            set(value) {
                console.log('value', value)
                const { id } = this.$route.params
                const station = JSON.parse(JSON.stringify(this.$store.getters.getStation(id)))
                station.tracks = value
                const data = {
                    station,
                    track: null,
                    isNew: null,
                }
                // await this.$store.dispatch({ type: 'updateTracksInStation', value, id })
                this.$emit('updateStation', data)
            }
        }
    },
    methods: {
        updateStation(data) {
            this.$emit('updateStation', data)
        },
        updateUser(data) {
            this.$emit('updateUser', data)
        }
    },
})
</script>

<!-- <track-preview :trackIdx="idx" :track="track" @setTrack="$emit('setTrack', track)" -->