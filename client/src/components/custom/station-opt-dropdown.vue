<template class="track-options-dropdown" >
    <three-dots @click="toggleModal" />

    <div v-if="isModalOn" class="opt-dropdown station-opt flex flex-column" v-click-outside="closeAllModals">
        <button class="clean-btn track-opt-btn">
            <span class="flex space-between align-center" @mouseover="openShareSubModal">Share <i
                    class="bi bi-caret-right-fill"></i></span>
        </button>

        <button @click="deleteStation" class="clean-btn track-opt-btn remove-from-station"
            @mouseenter="isShareSubmodalOn = false">Delete
        </button>

    </div>

    <div v-if="isShareSubmodalOn" class="opt-dropdown-side" @mouseleave="isPlaylistsSubmodalOn = false">
        <button class="clean-btn">Copy link</button>
        <button class="clean-btn">Copy on whatsapp</button>
    </div>


</template>


<script>
import threeDots from '../../assets/imgs/three-dots.svg'
import { eventBus } from '../../services/event-bus.js'
export default {
    props: { 'station': Object },
    data() {
        return {
            isModalOn: false,
            isShareSubmodalOn: false,
        }
    },
    components: {
        threeDots
    },

    created() {
    },
    computed: {

    },

    methods: {

        openPlayListSubModal() {
            this.isShareSubmodalOn = false
            this.isPlaylistsSubmodalOn = true
        },
        toggleModal() {
            !this.isModalOn ? this.isModalOn = true : this.closeAllModals()
        },
        closeAllModals() {
            this.isShareSubmodalOn = false
            this.isPlaylistsSubmodalOn = false
            this.isModalOn = false
        },
        openShareSubModal() {
            this.isShareSubmodalOn = true
            this.isPlaylistsSubmodalOn = false
        },

        deleteStation() {

        }
        // updateStation(track, station = this.currStation, isNew = true) {
        //     this.closeAllModals()

        //     const data = { track, station, isNew }
        //     eventBus.emit('updateStation', data)
        // }
    }

}
</script>
