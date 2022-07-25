
<template>
    <section class="track-preview track-row-search align-center">
        <div class="track-img-title flex">
            <button @click="$emit('setTrack', track)" class="clean-btn flex align-center play-btn-search">
                <component :is="togglePlayBtn"></component>
            </button>
            <img :src="track.imgUrl" />
            <div class="div flex align-center">
                <h2 class="long-text">{{ track.title }}</h2>
            </div>
        </div>
        <div class="track-search-options">
            <button @click="addTrackToStation(track, true)" class="add-track-search-btn"
                v-if="$route.params.id">Add</button>
            <!-- <track-options v-else :track="track" /> -->
            <div v-else class="track-time align-center sub-text">
                <button @click="toggleLikedSong" class="clean-btn"><i :class="loveIcon"></i></button>
                <p>{{ track.time }}</p>
                <track-options :track="track" />
            </div>
            <button v-if="!$route.params.id" class="clean-btn mobile-options"
                @click="$emit('toggleMobileOptions', track)">
                <!-- <i class="bi bi-three-dots" @click="toggleModal"></i> -->
                <three-dots />
            </button>
        </div>

        <!-- MOBILE TRACK OPTIONS -->
    </section>
</template>

    <script>
    import playIcon from '../../assets/imgs/preview-play.svg'
    import pauseIcon from '../../assets/imgs/preview-pause.svg'
    import soundBar from '../custom/sound-bar.vue'
    import threeDots from '../../assets/imgs/three-dots.svg'
    import trackOptions from '../track/track-options.vue'
    export default {
    
        props: {
            'track': Object,
            'trackIdx': Number,
        },
    
        components: {
            trackOptions,
            threeDots,
            soundBar,
            playIcon,
            pauseIcon,
        },
    
        data() {
            return {
                isPlaying: true,
                station: null,
            }
        },
        created() {
    
        },
        computed: {
            isLiked() {
                return this.$store.getters.getLikedStation.tracks.some(t => t.id === this.track.id)
            },
            loveIcon() {
                return { 'bi bi-heart action-btn': !this.isLiked, "bi bi-heart-fill track-like": this.isLiked }
            },
            currTrack() {
                return this.$store.getters.getTrack?.id === this.track.id
            },
            currTrackStyle() {
                return { 'active-track': this.currTrack, 'test': !this.currTrack }
            },
            isPlaying() {
                return this.$store.getters.getIsPlaying
            },
            togglePlayBtn() {
                return this.isPlaying && this.currTrack ? 'pause-icon' : 'play-icon'
            },
        },
    
        methods: {
            toggleLikedSong() {
                const likedTracks = this.$store.getters.getLikedStation
                let isLike = this.isLiked
                isLike = !isLike
    
                const data = { station: likedTracks, track: this.track, isNew: isLike }
                this.$emit('updateStation', data)
            },
    
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
