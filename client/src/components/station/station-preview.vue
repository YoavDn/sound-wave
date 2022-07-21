<template>
    <img v-if="station?.tracks?.length" :src="station.tracks[0].imgUrl" alt="">
    <img v-else src="../../assets/imgs/playlist_cover2.webp" alt="">
    <h3 class="station-name">{{ station.name }}</h3>
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