
<template>
    <main class="home-container">
        <h2 class="hero-title">Final Sprint day 3 !</h2>
        <section class="hero-list">
            <article v-for="station in heroStations" :key="station._id" class="hero-card">
                <hero-preview :station="station" />
            </article>
        </section>
        <section class="station-list-container flex">
            <stations-list v-if="stations" :stations="stations" />
        </section>
    </main>
</template>

<script >
import heroPreview from '../components/home/hero-preview.vue'
import stationsList from '../components/station/stations-list.vue'
export default {
    name: 'home',
    components: {
        heroPreview,
        stationsList
    },
    data() {
        return {
            heroStations: [ // demo for now
                { id: 1, title: 'hello' },
                { id: 2, title: 'hello' },
                { id: 3, title: 'hello' },
                { id: 4, title: 'hello' },
                { id: 5, title: 'hello' },
                { id: 6, title: 'hello' },
            ]
        }
    },

    computed: {
        stations() {
            // JSON.parse(JSON.stringify())
            return this.$store.getters.getStations
        }
    }
}
</script>