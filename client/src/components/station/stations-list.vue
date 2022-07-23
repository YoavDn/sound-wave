<template>
    <article v-if="stations" v-for="station in stations" :key="station?._id" 
        @click="goToStation(station._id)">
        <station-preview :station="station" />
    </article>
</template >
            
<script>
import stationPreview from './station-preview.vue'

export default {
    components: {
        stationPreview,
    },
    props: { stations: Array, 
                tag:String,
     },

    created() {
    },
    methods: {
        goToStation(stationId) {
            this.$router.push(`/station/${stationId}`)
        }
    },
}

</script>