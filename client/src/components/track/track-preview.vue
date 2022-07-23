<template>
    <section class="track-preview track-list-row align-center">
        <div class="track-play">
            <button @click="$emit('setTrack', track)" class="clean-btn action-btn"><i
                    class="bi bi-play-fill"></i></button>
            <p class="track-idx light" v-if="trackIdx">{{ trackIdx + 1 }}</p>
            <!-- <sound-bar /> -->
        </div>
        <div class="track-img-title flex">
            <img :src="track.imgUrl" />
            <div class="div">
                <h2 class="long-text">{{ track.title }}</h2>
                <p class="sub-text">singer</p>
            </div>
        </div>
        <div class="track-added-by sub-text">
            <!-- <p>John Smith</p> -->
            <p>{{ track.addedBy }}</p>
        </div>
        <div class="track-date-added sub-text">
            <p>Dec 25, 2019 </p>
        </div>

        <div class="track-time align-center sub-text">
            <button @click="$emit('addToLikedSongs', track)" class="clean-btn"><i :class="loveIcon"></i></button>
            <p>{{ track.time }}</p>
            <track-options :track="track" />
        </div>
    </section>
</template>



    <script>
    import trackOptions from '../track/track-options.vue'
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
        computed: {
            playBtn() {
                return { 'bi bi-play-fill': this.isPlaying, 'bi bi-pause-circle-fill': !this.isPlaying }
            },
    
            loveIcon() {
                return { 'bi bi-heart action-btn': !this.isLiked, "bi bi-heart-fill track-like": this.isLiked }
            },
    
            likedSongs() {
                return this.$store.getters.getLikedSongs
    
            }
        },
    
        methods: {
            likeTrack(track) {
                const data = {
                    track,
                    station: { _id: 'likedSongs' }
                }
                eventBus.emit('addTrackToStation', data)
            },
        },
    
        created() {
            if (this.likedSongs.tracks.find(t => t.id === this.track.id)) this.isLiked = true
        }
    }
    </script>
