
<template>

    <main class="home-container">
        <section class="hero-container">
            <h2 class="hero-title">Final Sprint day 3 !</h2>
            <div class="hero-list">
                <article v-for="station in heroStations" :key="station._id" @click="goToStation(station._id)"
                    class="hero-card flex">
                    <hero-preview :station="station" />
                </article>
            </div>
        </section>
        <section class="station-list-container">
            <stations-list v-if="stations" :stations="stations" />
        </section>
        <!-- test render demo data -->
        <article style="color:white;" v-for="tag in tags">
            <h1>{{ tag }}</h1>
            <section class="station-list-container">
                <stations-list v-if="stations" :stations="stations" :tag="tag" />
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
        }
    },
    computed: {
        stations() {
            return this.$store.getters.getStations
        },

        heroStations() {
            return this.$store.getters.getStations.slice(-6)
        }
    },

    demoDataRender() {
        this.tags.map((tag) => {
            const stationsByTag = this.stations.filter(station => station.tags?.includes(tag))
            return stationsByTag
        })
    },
}

</script>