<template>

    <div class="hero-img ">
        <img v-if="station?.tracks?.length" :src="station.imgUrl" alt="">
        <img v-else src="../../assets/imgs/playlist_cover2.webp" alt="">
        <button class="hero-play-btn"><i class="bi bi-play-circle-fill"></i></button>
    </div>
    <h2 class="hero-card-title">{{ station.name }}</h2>
</template>
    
<script >


export default {
    props: {
        station: Object,
    },
}
</script>
    
<style>
</style>