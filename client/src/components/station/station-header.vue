<template>
    <header class='station-header-container'>
        <img v-if="station.imgUrl" class="station-img" :src="station.imgUrl" alt="">
        <img class="station-img shadow" v-else src="../../assets/imgs/defaultCover.svg" alt="">
        <h2 class="station-name">{{ station.name }}</h2>
    </header>
</template>

<script>
export default {
    name: 'stationHeader',
    props: { 'station': Object },
}
</script>