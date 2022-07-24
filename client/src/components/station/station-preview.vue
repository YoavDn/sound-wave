<template>
    <div class="station-card">
        <div class="station-card-img">
            <img v-if="station.imgUrl !== null" :src="station.imgUrl" alt="">
            <img v-else src="../../assets/imgs/defaultCover.svg" alt="">
            <button @click.stop="playStation" class="station-preview-play-btn"><i class="bi bi-play-circle-fill"></i></button>
        </div>
        <h3 class="station-name">{{ station.name }}</h3>
    </div>
</template>
    
<script >
export default {
    props: { station: Object },

    methods: {
        setTrack(track) {
            this.$store.commit({ type: 'loadTrack', track, station: this.station })
        },
        playStation() {
            const firstTrack = this.station.tracks[0]
            this.setTrack(firstTrack)
        },

    }

}
</script>
    
<style>
</style>