<template>
    <div class="station-tracks-container">
        <track-list-head />
        <Container class="desktop-tracklist-container" orientation="vertical" @drop="onDrop">
            <Draggable v-for="(track, idx) in tracks" :key="track.id">
                <track-preview @toggleMobileOptions="$emit('toggleMobileOptions', track)" :listLength="tracks.length"
                    :trackIdx="idx" :track="track" @setTrack="$emit('setTrack', track)" @updateStation="updateStation"
                    @updateUser="updateUser" />
            </Draggable>
        </Container>

        <ul class="clean-list mobile-tracklist-container">
            <li v-for="(track, idx) in tracks" :key="track.id">
                <track-preview @toggleMobileOptions="$emit('toggleMobileOptions', track)" :listLength="tracks.length"
                    :trackIdx="idx" :track="track" @setTrack="$emit('setTrack', track)" @updateStation="updateStation"
                    @updateUser="updateUser" />
            </li>
        </ul>
    </div>
</template>

<script>
import { Container, Draggable } from "vue3-smooth-dnd";
import trackPreview from './track-preview.vue'
import trackListHead from '../custom/track-list-head.vue'
import { socketService } from "../../services/socket.service";


export default {
    name: 'track-list',
    components: {
        trackPreview,
        trackListHead,
        Container,
        Draggable
    },
    props: { 'station': Object },


    computed: {
        isMobileWidth() {
            return window.innerWidth > this.mobileWidth ? false : true
        },
        tracks() {
            return this.station.tracks
        }


    },
    methods: {
        async onDrop(dropResult) {
            let updatedList = this.applyDrag(this.tracks, dropResult)
            // const { id } = this.$route.params
            // const station = JSON.parse(JSON.stringify(this.$store.getters.getStation(id)))
            const updateStation = JSON.parse(JSON.stringify(this.station))
            console.log('updateStation = ', updateStation)
            updateStation.tracks = updatedList
            // this.tracks = updatedList
            const data = {
                station: updateStation,
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