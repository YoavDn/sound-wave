
<template>
    <section class="track-preview track-row-search align-center" @click="setTrackIfMobile">
        <button @click="togglePlay" class="clean-btn action-btn flex align-center play-pause">
            <component :is="togglePlayBtn"></component>
            <!-- <sound-bar class="flex align-center sound-bar" v-if="isPlaying && currTrack" /> -->
        </button>
        <sound-bar v-if="isPlaying && currTrack" class="sound-bar" />
        <div class="track-img-title flex">
            <div class="track-img">
                <img :src="track.imgUrl" />
            </div>
            <div class="div flex align-center">
                <h2 class="long-text">{{ track.title }}</h2>
            </div>
        </div>
        <div class="track-search-options flex">
            <button @click="addTrackToStation(track, true)" class="add-track-search-btn"
                v-if="$route.params.id">Add</button>
            <!-- <track-options v-else :track="track" /> -->
            <div v-else class="track-time align-center sub-text">
                <button @click="toggleLikedSong" class="clean-btn"><i :class="loveIcon"></i></button>
                <p>{{ track.time }}</p>
                <track-options :trackIdx="trackIdx" :listLength="listLength" :track="track" />
            </div>
            <button v-if="!$route.params.id" class="clean-btn mobile-options"
                @click="$emit('toggleMobileOptions', track)">
                <!-- <i class="bi bi-three-dots" @click="toggleModal"></i> -->
                <three-dots />
            </button>
        </div>

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
            'listLength': Number,
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
                station: null,
            }
        },
        created() {
    
        },
        computed: {
            isLiked() {
                const loggedInUser = this.$store.getters.getLoggedInUser
                let station
                if (!loggedInUser) station = this.$store.getters.getStation("likedSongs")
                else station = this.$store.getters.getStation(loggedInUser.likedSongs)
                return station?.tracks?.some(t => t.id === this.track?.id)
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
            togglePlay() {
                if (!this.currTrack) return this.$emit('setTrack', this.track)
    
                if (this.isPlaying) {
                    this.$store.commit({ type: 'setIsPlaying', isPlaying: false })
                } else {
                    this.$store.commit({ type: 'setIsPlaying', isPlaying: true })
                }
            },
            toggleLikedSong() {
                const loggedInUser = this.$store.getters.getLoggedInUser
                let station;
                if (!loggedInUser) station = this.$store.getters.getStation("likedSongs")
                else station = this.$store.getters.getStation(loggedInUser.likedSongs)
                const data = { station, track: this.track, isNew: !this.isLiked }
    
                this.$emit('updateStation', data)
            },
            setTrackIfMobile() {
                console.log(window.innerWidth);
                if (window.innerWidth > 700) return
                this.$emit('setTrack', this.track)
            },
    
            addTrackToStation(track, isNew) {
                const { id } = this.$route.params
                const station = this.$store.getters.getStation(id)
                const data = { station, track, isNew }
                this.$emit('updateStation', data)
            },
        }
    }
    
    </script>
