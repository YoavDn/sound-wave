<template>
    <section v-if="station" class="station-container">
        <station-header :station="station" />
        <station-options />
        <track-list :tracks="station.songs" />
    </section>

</template>
    
<script>
import stationHeader from '../components/station/station-header.vue'
import stationOptions from '../components/station/station-options.vue'
import trackList from '../components/track/track-list.vue'



export default {
    components: {
        stationHeader,
        stationOptions,
        trackList
    },

    data() {
        return {
            station: null
        }
    },
    created() {
        const { id } = this.$route.params
        console.log(id);
        this.$store.dispatch({ type: 'setCurrStation', stationId: id })
            .then(station => this.station = { ...station })
    }

}
</script>
    
<style>
</style>