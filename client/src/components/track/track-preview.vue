<template>
    <section class="track-preview  track-list-row align-center" @click="setTrackIfMobile">
        <div class="track-play">

            <!-- <button @click="$emit('setTrack', track)" class="clean-btn action-btn play-pause">
                <component :is="togglePlayBtn" />
            </button> -->

            <button @click="togglePlay" class="clean-btn action-btn play-pause">
                <component :is="togglePlayBtn" />
            </button>

            <sound-bar v-if="isPlaying && currTrack" class="sound-bar" />
            <p v-else :class="currTrackStyle" class="track-idx light" v-if="trackIdx > -1">{{ trackIdx + 1 }}</p>
        </div>

        <div :class="currTrackStyle" class="track-img-title flex">
            <div class="track-img">
                <img :src="track.imgUrl" />
            </div>
            <div class="div flex align-center">
                <h2 class="long-text">{{ track.title }}</h2>
            </div>
        </div>

        <div class="track-added-by sub-text">
            <p v-if="track.addedBy?.length">{{ track.addedBy }}</p>
            <p v-else>Guest</p>
        </div>

        <div class="track-date-added sub-text">
            <p v-if="track.addedAt">{{ addedAtToStr }}</p>
            <p v-else>Dec 25, 2019 </p>
        </div>

        <div class="mobile-options" @click.stop="$emit('toggleMobileOptions', track)">
            <three-dots />
        </div>

        <div class="track-time align-center sub-text">
            <button @click="toggleLikedSong" class="clean-btn"><i :class="loveIcon"></i></button>
            <p>{{ track.time }}</p>
            <track-options :trackIdx="trackIdx" :listLength="listLength" :track="track" />
        </div>

    </section>
</template>



    <script>
    import playIcon from '../../assets/imgs/preview-play.svg'
    import pauseIcon from '../../assets/imgs/preview-pause.svg'
    import trackOptions from '../track/track-options.vue'
    import { utilService } from '../../services/utils.service'
    import soundBar from '../custom/sound-bar.vue'
    import threeDots from '../../assets/imgs/three-dots.svg'
    
    
    export default {
        components: {
            trackOptions,
            soundBar,
            playIcon,
            pauseIcon,
            threeDots
        },
        props: {
            'track': Object,
            'trackIdx': Number,
            'listLength': Number,
            station: null,
        },
    
        data() {
            return {
    
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
            togglePlayBtn() {
                return this.isPlaying && this.currTrack ? 'pause-icon' : 'play-icon'
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
            addedAtToStr() {
                const date = new Date(this.track.addedAt)
    
                const strDate = date.toLocaleDateString().split('/').splice(1, 2).join(', ')
    
                const month = utilService.getStrMonth(this.track.addedAt)
                return month + ' ' + strDate
            }
    
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
    
            addTrackToStation(track, isNew) {
                const { id } = this.$route.params
                const station = this.$store.getters.getStation(id)
    
                const data = { station, track, isNew }
                this.$emit('updateStation', data)
            },
    
            setTrackIfMobile() {
                if (window.innerWidth > 965) return
                this.$emit('setTrack', this.track)
            }
        },
    
    
    }
    </script>
