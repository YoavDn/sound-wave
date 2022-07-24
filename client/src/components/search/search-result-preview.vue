
<template>
    <section class="track-preview track-row-search align-center">
        <div class="track-img-title flex">
            <img :src="track.imgUrl" />
            <div class="div flex align-center">
                <h2 class="long-text">{{ track.title }}</h2>
            </div>
        </div>
        <div style="grid-column:">
            <button @click="addTrackToStation(track, true)" class="add-track-search-btn"
                v-if="$route.params.id">Add</button>
            <!-- <track-options v-else :track="track" /> -->
            <div v-else class="track-time align-center sub-text">
                <button @click="toggleLikedSong" class="clean-btn"><i :class="loveIcon"></i></button>
                <p>{{ track.time }}</p>
                <track-options :track="track" />
            </div>
            <button class="clean-btn mobile-options">
                <i class="bi bi-three-dots" @click="toggleModal"></i>
            </button>
        </div>
    </section>
</template>

    <script>
    import trackOptions from '../track/track-options.vue'
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
        computed: {
            loveIcon() {
                return { 'bi bi-heart action-btn': !this.isLiked, "bi bi-heart-fill track-like": this.isLiked }
            },
        },
        components: {
            trackOptions
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
