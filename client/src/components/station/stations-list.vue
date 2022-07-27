<template>
    <article v-if="stations" v-for="station in stations" :key="station?._id" @click="goToStation(station._id)">
        <station-preview :station="station" />
    </article>
</template >
            
<script>
import stationPreview from './station-preview.vue'

export default {
    components: {
        stationPreview,
    },
    props: {
        // stations: Array, 
        tag: String,
    },

    created() {
    },
    computed: {
        stations() {
            const user = this.$store.getters.getLoggedInUser
            if (user) return this.$store.getters.getStations.filter(station => station.createdBy?._id === user._id)
            else return this.$store.getters.getStations.filter(station => station.createdBy?._id === 'u101')
        }
    },
    methods: {
        goToStation(stationId) {
            this.$router.push(`/station/${stationId}`)
        }
    },
}

</script>