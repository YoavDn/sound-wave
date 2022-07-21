<template>
    <section v-if="track" class="player-container">
        <YouTube hidden @stateChange="state" :src="vidSrc" ref="youtube" />
        <div class="flex track-details">
            <img class="curr-track-img" :src="track.imgUrl" />
            <div class="curr-track-name">{{ trackName }}</div>
        </div>

        <div class="track-controllers-container">
            <div class="flex center player-track-controllers">
                <button @click="shuffle">
                    <span v-html="shuffleSvg"></span>
                </button>
                <button><span v-html="prevSvg"></span></button>
                <button class="btn-play" @click="toggleSongPlay">
                    <span v-html="isPlayOrPause ? pauseSvg : playSvg"></span>
                </button>
                <button>
                    <button><span v-html="nextSvg"></span></button>
                </button>
                <button><span v-html="repeatSvg"></span></button>
            </div>
            <div class="flex progress-bar-container">
                <div>{{ convertSecToMin(currTime.toFixed(0)) }}</div>
                <input class="progress-bar" @change.prevent="handleTime" type="range" v-model="currTime"
                    :max="trackDuration" />
                <div>{{ convertSecToMin(trackDuration) }}</div>
            </div>
        </div>
        <div>
            <button @click="mute"><span v-html="isMute ? muteSvg : volumeSvg"></span></button>
            <input @change="changeVolume" type="range" v-model="volume" />
        </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue';
import YouTube from 'vue3-youtube';
// import {utilService} from '../../services/utils.service'

export default defineComponent({
    components: { YouTube },
    data() {
        return {
            isPlayOrPause: false,
            isMute: false,
            volume: 50,
            currTime: 0,
            trackDuration: 0,
            trackInterval: null,
        };
    },
    created() { },
    computed: {
        // make svgs work not from here
        playSvg() {
            return `<svg role="img" height="16" width="16" viewBox="0 0 16 16" ><path d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"></path></svg>`;
        },
        pauseSvg() {
            return `<svg role="img" height="16" width="16" viewBox="0 0 16 16"><path d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z"></path></svg>`;
        },
        shuffleSvg() {
            return `<svg role="img" height="16" width="16" viewBox="0 0 16 16" ><path d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z"></path><path d="M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 11-1.06-1.06L13.109 13H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z"></path></svg>`;
        },
        nextSvg() {
            return `<svg role="img" height="16" width="16" viewBox="0 0 16 16"><path d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"></path></svg>`;
        },
        prevSvg() {
            return `<svg role="img" height="16" width="16" viewBox="0 0 16 16" ><path d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z"></path></svg>`;
        },
        repeatSvg() {
            return `<svg role="img" height="16" width="16" viewBox="0 0 16 16" ><path d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z"></path></svg>`;
        },
        volumeSvg() {
            return `<svg role="presentation" height="16" width="16" aria-label="Volume high" id="volume-icon" viewBox="0 0 16 16" ><path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"></path><path d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"></path></svg>`;
        },
        muteSvg() {
            return `<svg role="presentation" height="16" width="16" aria-label="Volume off" id="volume-icon" viewBox="0 0 16 16" ><path d="M13.86 5.47a.75.75 0 00-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 008.8 6.53L10.269 8l-1.47 1.47a.75.75 0 101.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 001.06-1.06L12.39 8l1.47-1.47a.75.75 0 000-1.06z"></path><path d="M10.116 1.5A.75.75 0 008.991.85l-6.925 4a3.642 3.642 0 00-1.33 4.967 3.639 3.639 0 001.33 1.332l6.925 4a.75.75 0 001.125-.649v-1.906a4.73 4.73 0 01-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 01-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path></svg>`;
        },
        track() {
            console.log(
                'this.$store.getters.currTrack',
                this.$store.getters.currTrack
            );
            return this.$store.getters.currTrack;
        },
        vidSrc() {
            return `https://www.youtube.com/watch?v=${this.track.id}`;
        },
        trackName() {
            return this.track.title
            // console.log('this.track.title',this.track.title)
        },
    },
    methods: {
        // move to util
        convertSecToMin(totalSeconds) {
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            return `${minutes}:${this.padTo2Digits(seconds)}`;
        },

        padTo2Digits(num) {
            return num.toString().padStart(2, '0');
        },
        handleTime() {
            console.log('hello time');
            this.isPlayOrPause ? this.play() : this.pause();
            this.$refs.youtube.seekTo(this.currTime);
        },
        state(ev) {
            if (ev.data === 0) {
                this.currTime = 0;
                return clearInterval(this.trackInterval);
            }
            console.log(ev);
        },
        toggleSongPlay() {
            console.log(this.$refs.youtube);
            if (!this.isPlayOrPause) {
                console.log('on play', this.vidSrc);
                this.play();
                console.log('this.$refs.youtube', this.$refs.youtube);
            } else {
                this.pause();
            }
        },
        pause() {
            clearInterval(this.trackInterval);
            this.$refs.youtube.pauseVideo();
            this.isPlayOrPause = false;
        },
        play() {
            clearInterval(this.trackInterval);
            this.$refs.youtube.playVideo();
            console.log('this.$refs.youtube.playVideo(); = ', this.$refs.youtube.playVideo())
            this.intervalForTrack();
            this.isPlayOrPause = true;
        },
        intervalForTrack() {
            this.trackDuration = this.$refs.youtube.getDuration();
            this.trackInterval = setInterval(() => {
                this.currTime = this.$refs.youtube.getCurrentTime();
            }, 1000);
        },
        changeVolume() {
            this.$refs.youtube.setVolume(this.volume);
            console.log('this.volume', this.volume);
        },
        mute() {
            if (this.isMute) {
                this.isMute = false
                this.volume = 50;
                this.$refs.youtube.setVolume(50);
            } else {
                this.isMute = true
                this.volume = 0;
                this.$refs.youtube.setVolume(0);
            }
        },
        shuffle() {
            {
                this.$refs.youtube.setShuffle(true);
            }
        },
    },
});
</script>

<style>
</style>
