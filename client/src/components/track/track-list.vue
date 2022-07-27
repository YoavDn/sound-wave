<template>
    <div class="station-tracks-container">
        <track-list-head />
        <!-- <draggable v-model="trackList" class="clean-list station-list" :sort="true"> -->
        <Container orientation="vertical" @drop="onDrop">
            <Draggable v-for="(track, idx) in tracks" :key="track.id">
                <track-preview @toggleMobileOptions="$emit('toggleMobileOptions', track)" :listLength="tracks.length"
                    :trackIdx="idx" :track="track" @setTrack="$emit('setTrack', track)" @updateStation="updateStation"
                    @updateUser="updateUser" />
            </Draggable>
        </Container>

        <!-- <li v-for="(track, idx) in tracks" :key="track.id">
            <track-preview @toggleMobileOptions="$emit('toggleMobileOptions', track)" :trackIdx="idx" :track="track"
                @setTrack="$emit('setTrack', track)" @updateStation="updateStation" @updateUser="updateUser" />
        </li> -->
        <!-- </draggable> -->
    </div>
</template>

<script>
import { Container, Draggable } from "vue3-smooth-dnd";
// import { Container, Draggable } from "vue-smooth-dnd";
// import { applyDrag, generateItems } from '../utils/helpers'
import trackPreview from './track-preview.vue'
import trackListHead from '../custom/track-list-head.vue'
import { socketService } from "../../services/socket.service";


export default {
    name: 'track-list',
    data() {
        return {
            // enabled: true,
            // dragging: false,
            showDragContainer: false,
        }
    },
    components: {
        // draggable: VueDraggableNext,
        trackPreview,
        trackListHead,
        Container,
        Draggable
    },
    props: { 'tracks': Array },
    computed: {
        // trackList: {
        //         get() {
        //             return this.tracks
        //         },
        //         set(value) {
        //             console.log('value', value)
        //             const { id } = this.$route.params
        //             const station = JSON.parse(JSON.stringify(this.$store.getters.getStation(id)))
        //             station.tracks = value
        //             const data = {
        //                 station,
        //                 track: null,
        //                 isNew: null,
        //             }
        //             // await this.$store.dispatch({ type: 'updateTracksInStation', value, id })
        //             this.$emit('updateStation', data)
        //         }
        //     }
        // },

    },
    methods: {
        async onDrop(dropResult) {
            let updatedList = this.applyDrag(this.tracks, dropResult)
            console.log('updatedList = ', updatedList)
            const { id } = this.$route.params
            const station = JSON.parse(JSON.stringify(this.$store.getters.getStation(id)))
            station.tracks = updatedList
            const data = {
                station,
                track: null,
                isNew: null,
            }
            this.$emit('updateStation', data)


        },

        updateStation(data) {
            this.$emit('updateStation', data)
        },

        updateUser(data) {
            this.$emit('updateUser', data)
        },

        applyDrag(arr, dragResult) {
            const { removedIndex, addedIndex, payload } = dragResult;

            if (removedIndex === null && addedIndex === null) return arr;
            const result = [...arr];
            let itemToAdd = payload;

            if (removedIndex !== null) {
                itemToAdd = result.splice(removedIndex, 1)[0];
            }
            if (addedIndex !== null) {
                result.splice(addedIndex, 0, itemToAdd);
            }
            return result;
        }
    },
}
</script>

<style>
.draggable-item {
    height: 50px;
    width: 70px;
    margin: 1px;
    border: 1px solid black;
}
</style>

<!-- <track-preview :trackIdx="idx" :track="track" @setTrack="$emit('setTrack', track)" -->