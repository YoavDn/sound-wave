<template>
    <div class="station-tracks-container">
        <track-list-head />
        <draggable v-model="trackList" class="clean-list station-list" :sort="true">
            <li v-for="(track, idx) in tracks" :key="track.id">
                <track-preview :trackIdx="idx" :track="track" @setTrack="$emit('setTrack', track)"
                    @updateStation="updateStation" />
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
    name:'track-list',
    data(){
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
    props: { 'tracks': Array},
    computed: {
        trackList: {
        get() {
            return this.tracks
        },
        set(value) {
            const {id} = this.$route.params
            this.$store.dispatch({type:'updateTracksInStation', value, id})
        }
        }
    },
    methods: {
        updateStation(data) {
        this.$emit('updateStation', data)
        }
    },
})
</script>
