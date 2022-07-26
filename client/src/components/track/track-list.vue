<template>
    <div class="station-tracks-container">
        <track-list-head />
        <draggable v-model="trackList" class="clean-list station-list" :sort="true">
            <li v-for="(track, idx) in tracks" :key="track.id">
                <track-preview @toggleMobileOptions="$emit('toggleMobileOptions', track)" :trackIdx="idx" :track="track"
                    @setTrack="$emit('setTrack', track)" @updateStation="updateStation" @updateUser="updateUser" />
            </li>
        </draggable>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'

import trackPreview from './track-preview.vue'
import trackListHead from '../custom/track-list-head.vue'
import { method } from 'lodash'

export default defineComponent({
    name: 'track-list',
    data() {
        return {
            enabled: true,
            dragging: false,
        }
    },
    components: {
        draggable: VueDraggableNext,
        trackPreview,
        trackListHead,
    },
    props: { 'tracks': Array },
    computed: {
        trackList: {
            get() {
                console.log('tracks in get', this.tracks)
                return this.tracks
            },
            async set(value) {
                console.log('value in set',value)
                const { id } = this.$route.params
                console.log('id',id)
                const station = await this.$store.dispatch({ type: 'updateTracksInStation', value, id })
                console.log('station in set',station)
                this.tracks = station.tracks
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