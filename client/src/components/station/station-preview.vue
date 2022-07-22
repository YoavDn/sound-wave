<template>
    <div class="station-card-img">
        <img v-if="station?.tracks?.length" :src="station.imgUrl" alt="">
        <img v-else src="../../assets/imgs/playlist_cover2.webp" alt="">
        <button class="station-preview-play-btn"><i class="bi bi-play-circle-fill"></i></button>
    </div>
    <h3 class="station-name">{{ station.name }}</h3>
    <p>Lorem ipsum, dolor sit amet consec</p>
</template>
    
<script >
export default {
    props: { station: Object },
    created() {
    },
    data() {
        return {
        }
    }
}
</script>
    
<style>
</style>