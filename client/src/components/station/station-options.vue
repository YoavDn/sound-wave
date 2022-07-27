<template>
    <section class="station-option-container flex align-center">
        <button v-if="station.tracks.length > 0" @click="$emit('playStation')" class="play-btn"><i
                class="bi bi-play-fill"></i></button>
        <div class="like-share-container flex align-center">
            <button @click="toggleLikeStation" v-if="station.tracks.length > 0"><i :class="loveIcon"></i> </button>
            <button style="position: relative" class="clean-btn station-options">
                <station-opt-dropdown :station="station" />
            </button>
        </div>
    </section>
</template>


<script >
import threeDots from '../../assets/imgs/three-dots.svg'
import stationOptDropdown from '../custom/station-opt-dropdown.vue'


export default {
    props: { 'station': Object },
    components: {
        threeDots,
        stationOptDropdown
    },
    computed: {
        isUserStation() {
            const user = this.$store.getters.getLoggedInUser
            if (!user) return
            return user.stations.some(id => id === this.station._id)
            // return true
        },

        loveIcon() {
            return { 'bi bi-heart action-btn heart-btn ': !this.isUserStation, "bi bi-heart-fill track-like active-heart": this.isUserStation }
        },
    }
    ,
    methods: {
        toggleLikeStation() {
            this.$emit('toggleLikeStation',)
        }
    }
}


</script>
