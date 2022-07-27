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
                <h4 v-if="station.description">{{ station.description }}</h4>
                <h4 v-if="station.tracks.length > 1 && !station.description">{{ staitonsTracksNames }}</h4>
                <h3 v-if="station.tracks.length > 1 && this.station.createdBy.fullname" classs="station-info"> <span>{{
                        station.createdBy.fullname
                }}</span>
                    &#8226 {{ tracksCount
                    }} Songs &#8226
                    {{ stationDetails }}
                </h3>
                <h3 v-if="station.createdBy">{{ station.createdBy.fullname }}</h3>


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
    emits: ["updateStationDetails"],


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
            if (this.station.tracks.length < 1) return
            const timeStamp = this.station.tracks.reduce((sum, track) => {
                return sum += utilService.strTimeToStamp(track.time)
            }, 0)
            return `${utilService.timeStampToStr(timeStamp)}`
        },


        tracksCount() {

            return this.station.tracks.length
        },
        staitonsTracksNames() {
            return `${this.station.tracks[0].title}, ${this.station.tracks[1].title} and more..`
        }
    },
    methods: {
        openEditModal() {
            const stations = this.$store.getters.getStations
            // if (!stations.some(s => s._id === this.station._id)) return
            this.editModalOpen = true
        },

        updateStationDetails(stationToUpdate) {
            this.$emit('updateStationDetails', stationToUpdate)
        }
    }
}
</script>