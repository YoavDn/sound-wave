<template class="track-options-dropdown" >
    <three-dots @click="toggleModal" />

    <div v-if="isModalOn" class="opt-dropdown station-opt flex flex-column" v-click-outside="closeAllModals">
        <button class="clean-btn track-opt-btn">
            <span class="flex space-between align-center" @mouseover="openShareSubModal">Share <i
                    class="bi bi-caret-right-fill"></i></span>
        </button>

        <button v-if="isUserStation" @click="deleteStation" class="clean-btn track-opt-btn remove-from-station"
            @mouseenter="isShareSubmodalOn = false">Delete
        </button>

    </div>

    <div v-if="isShareSubmodalOn" class="station-share-modal">
        <button @click="copyToClipboard" class="share-link-btn clean-btn">Copy link</button>
        <button @click="whatsupShare" class="share-link-btn clean-btn">Copy on whatsapp</button>
    </div>


</template>


<script>
import threeDots from '../../assets/imgs/three-dots.svg'
import { eventBus } from '../../services/event-bus.js'
export default {
    props: { 'station': Object },
    emits: ['deleteStation'],
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

        isUserStation() {
            const user = this.$store.getters.getLoggedInUser
            const stations = this.$store.getters.getStations
            if (!user) return
            const userStations = stations.filter(station => station.createdBy?._id === user._id)
            return userStations.some(s => s._id === this.station._id)
        },

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
            this.isModalOn = false
        },
        openShareSubModal() {
            this.isShareSubmodalOn = true
        },

        copyToClipboard() {
            navigator.clipboard.writeText(window.location.href);
            eventBus.emit('show-msg', "Link copied to clipboard")
        },

        deleteStation() {
            this.closeAllModals()
            this.$emit('deleteStation')
        },
        whatsupShare() {
            const link = window.location.href
            window.open(`whatsapp://send?text=${link}`)
        }
    }

}
</script>
