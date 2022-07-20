<template>
    <img v-if="station.imgUrl" :src="station.imgUrl" alt="">
    <img v-else src="../../assets/imgs/playlist_cover2.webp" alt="">
    <h3 class="station-name">{{ station.name }}</h3>
</template>
    
<script >
export default {
    props: { station: Object },
    created() {
        console.log(this.station);
    }
}
</script>
    
<style>
</style>