
<template>
    <main class="home-container">
        <section class="hero-container">
            <h2 class="hero-title">Final Sprint day 3 !</h2>
            <div class="hero-list">
                <article v-for="station in heroStations" :key="station._id" class="hero-card">
                    <hero-preview :station="station" />
                </article>
            </div>
        </section>
        <section class="station-list-container">
            <stations-list v-if="stations" :stations="stations" />
        </section>
        <!-- test render demo data -->
        <article style="color:white;" v-for="tag in tags" >
            <h1>{{tag}}</h1>
            <section class="station-list-container">
                <stations-list v-if="stations" :stations="stations" :tag="tag" />
            </section>
        </article>
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
            ],
            tags:['test', 'party', 'rock', 'pop', 'focus', 'jazz', 'album', 'mood']
        }
    },

    computed: {
        stations() {
            // JSON.parse(JSON.stringify())
            return this.$store.getters.getStations
        },
        demoDataRender() {
            this.tags.map((tag) =>{
                const stationsByTag = this.stations.filter(station => station.tags?.includes(tag))
                return stationsByTag
            })
        },
    },
    methods: {},
}
</script>