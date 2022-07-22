<template>
    <header class='station-header-container'>
        <div class="header-img-container">
            <img class="shadow" v-if="station.imgUrl" :src="station.imgUrl" alt="">
            <img class="shadow" v-else src="../../assets/imgs/defaultCover.svg" alt="">
        </div>
        <div class="station-text">
            <p>PLAYIST</p>
            <h2 class="station-name">{{ station.name }}</h2>
            <h4>with singer "singer" shakira and more.. </h4>
            <h3 classs="station-info"> <span>SoundWave</span> &#8226 {{ tracksCount }} Songs &#8226 {{ stationDetails
            }}<span></span>
            </h3>
        </div>
    </header>
</template>

<script>
import { utilService } from '../../services/utils.service';
export default {
    name: 'stationHeader',
    props: { 'station': Object },

    computed: {
        stationDetails() {
            const timeStamp = this.station.tracks.reduce((sum, track) => {
                return sum += utilService.strTimeToStamp(track.duration)
            }, 0)
            return `${utilService.timeStampToStr(timeStamp)}`
        },

        tracksCount() {
            return this.station.tracks.length
        }
    }
}
</script>