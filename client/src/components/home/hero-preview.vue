<template>

    <div class="hero-img ">
        <img v-if="station?.tracks?.length" :src="station.imgUrl" alt="">
        <img v-else src="../../assets/imgs/playlist_cover2.webp" alt="">
        <button @click.stop="playStation" class="hero-play-btn"><i class="bi bi-play-circle-fill"></i></button>
    </div>
    <h2 class="bold hero-card-title">{{ station.name }}</h2>
</template>
    
<script >


export default {
    props: {
        station: Object,
    },

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