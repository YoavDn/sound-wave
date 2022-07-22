
<template>
    <main class="home-container">
        <section class="hero-container">
            <h2 class="hero-title">Final Sprint day 4 !</h2>
            <div class="hero-list">
                <article v-for="station in heroStations" :key="station._id" @click="goToStation(station._id)"
                    class="hero-card flex">
                    <hero-preview :station="station" />
                </article>
            </div>
        </section>
        <article style="color:white;" v-if="stations" v-for="tag in tags">
            <h1>{{ tag }}</h1>
            <section class="station-list-container">
                <stations-list :stations="getFilterStations(tag)" />
            </section>
        </article>
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


    data() {
        return {
            tags: ['test', 'party', 'rock', 'pop', 'focus', 'jazz', 'album', 'mood']
        }
    },
    methods: {
        goToStation(stationId) {
            this.$router.push(`/station/${stationId}`)
        },
        getFilterStations(tag) {
            return this.stations.filter(s => s.tags.some(t => t === tag))
        },
    },
    computed: {
        stations() {
            return this.$store.getters.getStations
        },

        heroStations() {
            return this.$store.getters.getStations.slice(-6)
        }
    },
}

</script>