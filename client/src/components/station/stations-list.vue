<template>
    <article v-if="stations" v-for="station in stations" :key="station._id" class="station-card">
        <station-preview :station="station" />
    </article>
</template >
            
<script>
import stationPreview from './station-preview.vue'
export default {
    components: { stationPreview },
    props: { stations: Array },

    created() {
        console.log(this.stations);
    }
}

</script>
            
        <style>
        </style>