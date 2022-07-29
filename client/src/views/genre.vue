<template>
    <article class="home-stations-desktop" style="color:white;">
        <section class="station-list-container ">
            <stations-list :stations="stations" />
        </section>
    </article>

    <article class="home-stations-mobile" style="color:white;" v-if="stations">
        <section>
            <mobile-sliders :stations="stations" />
        </section>
    </article>
</template>

<script>
import stationsList from '../components/station/stations-list.vue'
import mobileSliders from '../components/custom/mobile-sliders.vue'

export default {
    components: {
        stationsList,
        mobileSliders,
    },
    data() {
        return {
            tag: null,
        }
    },
    created() {
        const { id } = this.$route.params
        console.log('id = ', id)
        this.tag = id
    },
    methods: {
        getFilterStations(tag) {
            return this.stations.filter(s => s.tags?.some(t => t === tag))
        },
    },
    computed: {
        stations() {
            let stations = this.$store.getters.getStations
            console.log('stations = ', stations)
            stations = stations.filter(s => s.tags?.some(t => t === this.tag))
            //  console.log('stations = ', stations)
            return stations
            //  console.log(stations.filter(station => station.tags?.some(tag => tag  === this.tag)))
        }
    },
}
</script>

<style lang="scss" scoped>
</style>