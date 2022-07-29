
<template>
    <main class="home-container">
        <section class="hero-container">
            <h2 class="hero-title">{{ welcomeMessage }}</h2>
            <div class="hero-list">
                <article v-for="station in heroStations" :key="station._id" @click="goToStation(station._id)"
                    class="hero-card flex">
                    <hero-preview :station="station" />
                </article>
            </div>
        </section>
        <article class="home-stations-desktop" style="color:white;" v-if="stations" v-for="tag in tags">
            <h1 v-if="getFilterStations(tag).length">{{ tag }}</h1>
            <section class="station-list-container ">
                <stations-list :stations="getFilterStations(tag)" />
            </section>
        </article>

        <article class="home-stations-mobile" style="color:white;" v-if="stations" v-for="tag in tags" :key="tag">
            <h1>{{ tag }}</h1>
            <section>
                <mobile-sliders :stations="getFilterStations(tag)" />
            </section>
        </article>


    </main>
</template>

<script >

import heroPreview from '../components/home/hero-preview.vue'
import stationsList from '../components/station/stations-list.vue'
import mobileSliders from '../components/custom/mobile-sliders.vue'
import MobileSliders from '../components/custom/mobile-sliders.vue'

export default {
    name: 'home',
    components: {
        heroPreview,
        stationsList,
        mobileSliders,
        MobileSliders
    },


    data() {
        return {
            
        }
    },
    methods: {
        goToStation(stationId) {
            this.$router.push(`/station/${stationId}`)
        },
        getFilterStations(tag) {
            return this.stations.filter(s => s.tags?.some(t => t === tag))
        },
    },
    computed: {
        tags(){
            return this.$store.getters.getTags
        },
        stations() {
            return this.$store.getters.getStations
        },

        heroStations() {
            let heroList = this.$store.getters.getUserStations
            if (!heroList.length) heroList = this.$store.getters.getStations.filter(station => station.createdBy?._id === 'u101')
            return heroList.slice(0, 6)
        },
        welcomeMessage() {
            var today = new Date()
            var curHr = today.getHours()
            if (curHr < 12) {
                return 'Good morning'
            } else if (curHr < 18) {
                return 'Good afternoon'
            } else {
                return 'Good evening'
            }
        }
    },
}

</script>