<template>
    <section class="track-preview track-list-row align-center">
        <div class="track-play">
            <button @click="$emit('setTrack', track)" class="clean-btn action-btn"><i
                    class="bi bi-play-fill"></i></button>
            <p class="track-idx light" v-if="trackIdx > -1">{{ trackIdx + 1 }}</p>
            <!-- <sound-bar /> -->
        </div>
        <div class="track-img-title flex">
            <img :src="track.imgUrl" />
            <div class="div flex align-center">
                <h2 class="long-text">{{ track.title }}</h2>
            </div>
        </div>
        <div class="track-added-by sub-text">
            <!-- <p>John Smith</p> -->
            <p v-if="track.addedBy?.length">{{ track.addedBy }}</p>
            <p v-else>Guest</p>
        </div>
        <div class="track-date-added sub-text">
            <p>Dec 25, 2019 </p>
        </div>
        <div class="mobile-options">
            <i class="bi bi-three-dots mobile-options-dots"></i>
        </div>

        <div class="track-time align-center sub-text">
            <button @click="toggleLikedSong" class="clean-btn"><i :class="loveIcon"></i></button>
            <p>{{ track.time }}</p>
            <track-options :track="track" />
        </div>
    </section>
</template>



    <script>
    import trackOptions from '../track/track-options.vue'
    import { eventBus } from '../../services/event-bus.js'
    import soundBar from '../custom/sound-bar.vue'
    import { onMounted } from 'vue'
    export default {
        components: {
            trackOptions,
            soundBar,
    
        },
        props: {
            'track': Object,
            'trackIdx': Number,
            station: null,
        },
    
        data() {
            return {
                isPlaying: true,
                // isLike: null,
            }
        },
    
        created() {
            // this.isLiked = this.$store.getters.getLikedStation.tracks.some(t => t.id === this.track.id)
            // this.isLiked = this.track.isLiked ? this.track.isLiked : false
            // console.log('this.isLike = ', this.isLike)
            // this.isLike = this.$store.getters.getLikedStation.tracks.some(t => t.id === this.track.id)
    
        },
    
        computed: {
            isLiked() {
                return this.$store.getters.getLikedStation.tracks.some(t => t.id === this.track.id)
            },
            playBtn() {
                return { 'bi bi-play-fill': this.isPlaying, 'bi bi-pause-circle-fill': !this.isPlaying }
            },
    
            loveIcon() {
                return { 'bi bi-heart action-btn': !this.likedTrack, "bi bi-heart-fill track-like": this.likedTrack }
            },
            likedTrack() {
                return this.$store.getters.getLikedStation.tracks.some(t => t.id === this.track.id)
            }
    
        },
    
        methods: {
            toggleLikedSong() {
                const likedTracks = this.$store.getters.getLikedStation
                var isLike = this.isLiked
                console.log('isLike = ', isLike)
                isLike = !isLike
                console.log('isLike now? = ', isLike)
<<<<<<< HEAD
    
                const data = { station: likedTracks, track: this.track, isLike }
=======

                const data = { station: likedTracks, track: this.track, isNew: isLike }
>>>>>>> 41f6e53aa4bbe2bbb213996178a356de39a7a297
                this.$emit('updateStation', data)
            },
    
            addTrackToStation(track, isNew) {
                const { id } = this.$route.params
                const stations = this.$store.getters.getStations
                const station = stations.find(s => s._id === id)
                const data = { station, track, isNew }
                this.$emit('updateStation', data)
            }
        },
    
    
        // watch: {
        //     '$route.params.id': {
        //         handler: function () {
        //             this.isLiked = this.$store.getters.getLikedStation.tracks.find(t => t.id === this.track.id)
        //             console.log('this.isLiked = ', this.isLiked)
        //         },
        //         deep: true,
        //         immediate: true
        //     },
    
        // },
    }
    </script>
