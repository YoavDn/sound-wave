<template>
    <header class='station-header-container'>
        <div @click="openEditModal" class="header-img-container">
            <img class="shadow" v-if="station.imgUrl !== null" :src="station.imgUrl" alt="">
            <img class="shadow" v-else src="../../assets/imgs/defaultCover.svg" alt="default cover">
        </div>
        <div class="station-text">
            <p>PLAYIST</p>
            <h2 class="station-name">{{ station.name }}</h2>
            <div class="station-sub-title flex flex-column">
                <h4>with singer "singer" shakira and more.. </h4>
                <h3 classs="station-info"> <span>SoundWave</span> &#8226 {{ tracksCount }} Songs &#8226
                    {{ stationDetails }}
                </h3>

            </div>
        </div>
    </header>
    <edit-station-modal v-if="editModalOpen" :station="station" @closeModal="editModalOpen = false"
        @updateStationDetails="updateStationDetails" />
</template>

<script>
import editStationModal from '../custom/edit-station-modal.vue'
import { utilService } from '../../services/utils.service';
export default {
    name: 'stationHeader',
    props: { 'station': Object },


    components: {
        editStationModal
    },
    created() {
        console.log(this.station.imgUrl);

    },
    data() {
        return {
            editModalOpen: false,
        }
    },

    computed: {
        stationDetails() {
            const timeStamp = this.station.tracks.reduce((sum, track) => {
                return sum += utilService.strTimeToStamp(track.time)
            }, 0)
            return `${utilService.timeStampToStr(timeStamp)}`
        },

        tracksCount() {
            return this.station.tracks.length
        },
    },
    methods: {
        openEditModal() {
            console.log('hi');
            this.editModalOpen = true
        },

        updateStationDetails(stationToUpdate) {
            this.$emit('updateStationDetails', stationToUpdate)
        }
    }
}
</script>