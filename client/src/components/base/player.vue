<template>

    <full-screen v-if="isFullScreen" @changeSong="onChangeSong" @toggleScreen="toggleFullScreen"></full-screen>

    <section @click="enterFullScreen" v-if="track && !isFullScreen" class="player-container">
        <YouTube hidden v-if="vidSrc" @stateChange="state" :src="vidSrc" @ready="onReady" ref="youtube" />
        <div class="flex track-details">
            <img class="curr-track-img" :src="track.imgUrl" />
            <div class="song-info">
                <div class="curr-track-name">{{ track.title }}</div>
                <div class="curr-track-singer">Big Boss Vette</div>
            </div>

            <button @click.stop="toggleLikedSong" class="like-btn">
                    <span v-bind:class="greenHeart" v-html="isLiked ? like : unlike"></span>
            </button>
        </div>

        <div class="test1">
            <div class="track-controllers-container">
                <div class="flex center player-track-controllers">
                    <button @click.stop="shuffle">
                        <span>
                            <shuffle></shuffle>
                        </span>
                    </button>
                    <button @click.stop="onChangeSong(-1)">
                        <span>
                            <prev></prev>
                        </span>
                    </button>

                    <button class="btn-play" @click.stop="toggleSongPlay">
                        <span v-html="isPlaying ? pauseSvg : playSvg"></span>
                    </button>

                    <button @click.stop="onChangeSong(1)">
                        <span v-html="next">
                        </span>
                    </button>

                    <button>
                        <span v-html="repeatSvg">
                        </span>
                    </button>
                </div>

                <div class="flex progress-bar-container">
                    <div class="nums progress-bar-nums1">{{ convertMinStart }}</div>
                    <progress class="progress-bar " :value="currTime" :max="trackDuration"></progress>
                    <input class="progress-bar-range" @change.stop="handleTime" type="range" v-model="currTime"
                        :max="trackDuration" />
                    <div class="nums progress-bar-nums2">{{ convertMinEnd }}</div>
                </div>
            </div>
        </div>
        <div class="volume-container">
            <button @click.stop="mute"><span v-html="isMute ? muteSvg : volumeSvg"></span></button>
            <input class="volume-bar" @input.stop="changeVolume" type="range" v-model="volume" />
        </div>

    </section>
</template>

<script>
import { utilService } from '../../services/utils.service'
import { defineComponent } from 'vue';
import YouTube from 'vue3-youtube'
import shuffle from '../icons/shuffle-btn.vue'
import prev from '../icons/prev-btn.vue'
import { eventBus } from '../../services/event-bus.js';

import fullScreen from '../base/full-screen.vue'

export default defineComponent({
    components: { YouTube, shuffle, prev, fullScreen,eventBus },
    data() {
        return {
            isFullScreen: false,
            isMute: false,
            volume: 50,
            currTime: 0,
            trackDuration: 0,
            trackInterval: null,
            player: null,
            isPlaying: false,
            isLiked:false,
            // autoplay: 0,
        }
    },
    created() {
        this.isLiked = this.$store.getters.getLikedStation.tracks.some(t => t.id === this.track.id)
        },
    computed: {
        // make svgs work not from here
        playSvg() {
            return `<svg role="img" height="16" width="16" viewBox="0 0 16 16" ><path d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"></path></svg>`;
        },
        pauseSvg() {
            return `<svg role="img" height="16" width="16" viewBox="0 0 16 16"><path d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z"></path></svg>`;
        },
        volumeSvg() {
            return `<svg role="presentation" height="16" width="16" aria-label="Volume high" id="volume-icon" viewBox="0 0 16 16" ><path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"></path><path d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"></path></svg>`;
        },
        muteSvg() {
            return `<svg role="presentation" height="16" width="16" aria-label="Volume off" id="volume-icon" viewBox="0 0 16 16" ><path d="M13.86 5.47a.75.75 0 00-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 008.8 6.53L10.269 8l-1.47 1.47a.75.75 0 101.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 001.06-1.06L12.39 8l1.47-1.47a.75.75 0 000-1.06z"></path><path d="M10.116 1.5A.75.75 0 008.991.85l-6.925 4a3.642 3.642 0 00-1.33 4.967 3.639 3.639 0 001.33 1.332l6.925 4a.75.75 0 001.125-.649v-1.906a4.73 4.73 0 01-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 01-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path></svg>`;
        },
        next() {
            return `<svg role="img" height="16" width="16" viewBox="0 0 16 16"><path d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"></path></svg>`;
        },
        repeatSvg() {
            return `<svg role="img" height="16" width="16" viewBox="0 0 16 16" ><path d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z"></path></svg>`;
        },
        unlike() {
            return `<svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 EQkJl"><path d="M1.69 2A4.582 4.582 0 018 2.023 4.583 4.583 0 0111.88.817h.002a4.618 4.618 0 013.782 3.65v.003a4.543 4.543 0 01-1.011 3.84L9.35 14.629a1.765 1.765 0 01-2.093.464 1.762 1.762 0 01-.605-.463L1.348 8.309A4.582 4.582 0 011.689 2zm3.158.252A3.082 3.082 0 002.49 7.337l.005.005L7.8 13.664a.264.264 0 00.311.069.262.262 0 00.09-.069l5.312-6.33a3.043 3.043 0 00.68-2.573 3.118 3.118 0 00-2.551-2.463 3.079 3.079 0 00-2.612.816l-.007.007a1.501 1.501 0 01-2.045 0l-.009-.008a3.082 3.082 0 00-2.121-.861z"></path></svg>`
        },
        like(){
            return `<svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 EQkJl"><path d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"></path></svg>`
        },
        greenHeart(){
            return {'green-heart' : this.isLiked}
        },
        track() {
            return this.$store.getters.getTrack;
        },
        vidSrc() {
            return `https://www.youtube.com/watch?v=${this.track.id}`;
        },
        convertMinStart() {
            return utilService.convertSecToMin(this.currTime.toFixed(0))
        },
        convertMinEnd() {
            return utilService.convertSecToMin(this.trackDuration.toFixed(0))
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
        },
        toggleFullScreen() {
            this.isFullScreen = !this.isFullScreen
        },
        handleTime() {
            this.isPlaying ? this.play() : this.pause()
            this.player.seekTo(this.currTime)
            this.play()
        },

        state(ev) {
            if (ev.data === 3) {
                this.pause()
                this.play()
            }
            if (ev.data === 0) {
                this.currTime = 0
                return clearInterval(this.trackInterval)
            }
        },
        onReady() {
            this.player = this.$refs.youtube
            this.play()
        },

        toggleSongPlay() {
            if (!this.isPlaying) {
                this.play()
            } else {
                this.pause()
            }
        },
        enterFullScreen(){
            const tabletWidth = window.innerWidth
            if(tabletWidth > 915) return
            this.toggleFullScreen()
        },
        pause() {
            clearInterval(this.trackInterval);
            this.isPlaying = false
            this.player.pauseVideo()
        },

        play() {
            clearInterval(this.trackInterval);
            this.isPlaying = true
            this.player.playVideo()
            this.intervalForTrack()
        },

        intervalForTrack() {
            this.trackDuration = this.player.getDuration()
            this.trackInterval = setInterval(() => {
                this.currTime = this.player.getCurrentTime()
            }, 1000);
        },

        changeVolume() {
            this.player.setVolume(this.volume)
        },
        mute() {
            if (this.isMute) {
                this.isMute = false
                this.volume = 50;
                this.player.setVolume(50)
            } else {
                this.isMute = true
                this.volume = 0;
                this.player.setVolume(0)
            }
        },

        onChangeSong(diff) {
            this.$store.commit({ type: 'changeTrackInStation', diff })
            this.pause()
            this.play()
        },

        shuffle() {
            {
                this.player.setShuffle(true);
            }
        },

    },

});
</script>

<style>
</style>
