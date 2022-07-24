
<template>
    <section class="track-preview track-list-row align-center">
        <div class="track-play">
            <button @click="$emit('setTrack', track)" class="clean-btn action-btn"><i
                    class="bi bi-play-fill"></i></button>
            <p class="track-idx light" v-if="trackIdx > -1">{{ trackIdx + 1 }}</p>
        </div>
        <div class="track-img-title flex">
            <img :src="track.imgUrl" />
            <div class="div flex align-center">
                <h2 class="long-text">{{ track.title }}</h2>
            </div>
        </div>
        <div><button @click="addTrackToStation(track, true)" class="add-track-search-btn">Add</button></div>
    </section>
</template>

    <script>
    export default {
    
    
        props: {
            'track': Object,
            'trackIdx': Number,
            station: null,
        },
    
    
    
        data() {
            return {
                isPlaying: true,
    
            }
        },
        created() {
        },
        methods: {
    
            addTrackToStation(track, isNew) {
                const { id } = this.$route.params
                const stations = this.$store.getters.getStations
                const station = stations.find(s => s._id === id)
                const data = { station, track, isNew }
                this.$emit('updateStation', data)
            },
        }
    }
    
    </script>
