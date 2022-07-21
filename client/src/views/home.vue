
<template>

    <main class="home-container">
        <section class="hero-container">
            <h2 class="hero-title">Final Sprint day 3 !</h2>
            <div class="hero-list">
                <article v-for="station in heroStations" :key="station._id" class="hero-card flex">
                    <hero-preview :station="station" />
                </article>
            </div>
        </section>
        <section class="station-list-container">
            <stations-list v-if="stations" :stations="stations" />
        </section>


    </main>
</template>

<script >
import dropDown from '../components/custom/drop-down.vue'
import heroPreview from '../components/home/hero-preview.vue'
import stationsList from '../components/station/stations-list.vue'

export default {
    name: 'home',
    components: {
        heroPreview,
        stationsList,
        dropDown
    },


    computed: {
        stations() {
            return this.$store.getters.getStations
        },

        heroStations() {
            return this.$store.getters.getStations.slice(-6)
        }
    }
}
</script>