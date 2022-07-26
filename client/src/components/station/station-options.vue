<template>
    <section class="station-option-container flex align-center">
        <button v-if="station.tracks.length > 0" @click="$emit('playStation')" class="play-btn"><i
                class="bi bi-play-fill"></i></button>
        <div class="like-share-container flex align-center">
            <button v-if="station.tracks.length > 0" class="heart-btn"><i class="bi bi-heart"></i> </button>
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
    }
}


</script>
