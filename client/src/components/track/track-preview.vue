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
    export default {
        components: {
            trackOptions,
            soundBar,
    
        },
        props: {
            'track': Object,
            'trackIdx': Number
        },
    
        data() {
            return {
                isPlaying: true,
                isLiked: false,
            }
        },
    
        created() {
            this.isLiked = this.$store.getters.getTracksStation.tracks.some(t => t.id === this.track.id)
    
        },
        computed: {
            playBtn() {
                return { 'bi bi-play-fill': this.isPlaying, 'bi bi-pause-circle-fill': !this.isPlaying }
            },
    
            loveIcon() {
                return { 'bi bi-heart action-btn': !this.isLiked, "bi bi-heart-fill track-like": this.isLiked }
            },
    
        },
    
        methods: {
            toggleLikedSong() {
                const likedTracks = this.$store.getters.getTracksStation
                this.isLiked = !this.isLiked
                let msg = this.isLiked ? 'Add to' : 'Removed from'
                const data = { station: likedTracks, track: this.track, isNew: this.isLiked }
                eventBus.emit('show-msg', `${msg} Liked Songs`)
                this.$emit('updateStation', data)
            }
        },
    }
    </script>
