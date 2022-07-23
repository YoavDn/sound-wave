<template>

    <section v-if="track" class="flex full-screen">

        <div class="flex full-screen-nav">
            <button class="close-btn" @click="$emit('toggleFullScreen')">
                <span>
                    <close></close>
                </span>
            </button>
            <h4>{{currStation.name}}</h4>
            <trackOptions></trackOptions>    
        </div>

        <YouTube hidden v-if="vidSrc" @stateChange="state" :src="vidSrc" @ready="onReady" ref="youtube" />
        <div class="curr-track-img-container">
            <img class="curr-track-img" :src="track.imgUrl" />
        </div>
    
    <div class="all-controllers flex">

        <div class="curr-track-name">{{ track.title }}</div>

        <div class="flex progress-bar-container">
                <input class="progress-bar-range" @change.prevent="handleTime" type="range" v-model="currTime"
                    :max="trackDuration" />
                <div class="flex progress-bar-time">
                    <div class="nums progress-bar-nums1">{{ convertMinStart }}</div>
                    <div class="nums progress-bar-nums2">{{ convertMinEnd }}</div>
                </div>
            </div>

                <div class="flex player-track-controllers">
                    <button @click="shuffle">
                        <span>
                            <shuffle></shuffle>
                        </span>
                    </button>
                    <button @click="onChangeSong(-1)">
                        <span>
                            <prev></prev>
                        </span>
                    </button>
    
                    <button class="btn-play" @click="toggleSongPlay">
                        <span v-html="isPlaying ? pauseSvg : playSvg"></span>
                    </button>
    
                    <button @click="onChangeSong(1)">
                        <span v-html="next">
                        </span>
                    </button>
    
                    <button>
                        <span v-html="repeatSvg">
                        </span>
                    </button>
                </div>
    </div>

    </section>
</template>

<script>
import { utilService } from '../../services/utils.service'
import { defineComponent } from 'vue';
import YouTube from 'vue3-youtube'
import shuffle from '../icons/shuffle-btn.vue'
import prev from '../icons/prev-btn.vue'
import close from '../icons/close-btn.vue'
import trackOptions from '../track/track-options.vue';

export default defineComponent({
    components: { YouTube, shuffle, prev,close, trackOptions},
    data() {
        return {
            isMute: false,
            volume: 50,
            currTime: 0,
            trackDuration: 0,
            trackInterval: null,
            player: null,
            isPlaying: false,
            currStation: null,
            // autoplay: 0,
        }
    },
    created() {
        this.currStation = this.$store.getters.getCurrStation
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
        arrowDown() {
            return `<svg role="img" height="16" width="16" fill="#fff" viewBox="0 0 16 16"><path d="M14 6l-6 6-6-6h12z"></path></svg>`;
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
        }
    },

    methods: {
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
