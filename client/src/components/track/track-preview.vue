<template>
    <section class="track-preview track-list-row align-center">
        <div class="track-play">
            <button @click="$emit('setTrack', track)" class="clean-btn action-btn ">
                <component :is="togglePlayBtn" />

            </button>
            <sound-bar v-if="isPlaying && currTrack" class="sound-bar" />
            <p v-else :class="currTrackStyle" class="track-idx light" v-if="trackIdx > -1">{{ trackIdx + 1 }}</p>
        </div>
        <div :class="currTrackStyle" class="track-img-title flex">
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
    import playIcon from '../../assets/imgs/preview-play.svg'
    import pauseIcon from '../../assets/imgs/preview-pause.svg'
    import trackOptions from '../track/track-options.vue'
    import soundBar from '../custom/sound-bar.vue'
    
    import { eventBus } from '../../services/event-bus.js'
    import { rest } from 'lodash'
    
    export default {
        components: {
            trackOptions,
            soundBar,
            playIcon,
            pauseIcon,
    
        },
        props: {
            'track': Object,
            'trackIdx': Number,
            station: null,
        },
    
        data() {
            return {
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
            togglePlayBtn() {
                return this.isPlaying ? 'pause-icon' : 'play-icon'
            },
    
            loveIcon() {
                return { 'bi bi-heart action-btn': !this.likedTrack, "bi bi-heart-fill track-like": this.likedTrack }
            },
            likedTrack() {
                return this.$store.getters.getLikedStation.tracks.some(t => t.id === this.track.id)
            },
            currTrack() {
                return this.$store.getters.getTrack?.id === this.track.id
            },
            currTrackStyle() {
                return { 'active-track': this.currTrack, 'test': !this.currTrack }
            },
            isPlaying() {
                return this.$store.getters.getIsPlaying
            }
    
        },
    
        methods: {
            toggleLikedSong() {
                const likedTracks = this.$store.getters.getLikedStation
                var isLike = this.isLiked
                console.log('isLike = ', isLike)
                isLike = !isLike
                console.log('isLike now? = ', isLike)
    
                const data = { station: likedTracks, track: this.track, isNew: isLike }
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
