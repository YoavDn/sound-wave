<template>
    <section v-if="track" class="player-container">
        <YouTube hidden v-if="vidSrc" 
        @stateChange="state" :src="vidSrc" 
        @ready="onReady" ref="youtube"/>
        
        <div class="flex track-details">
            <img class="curr-track-img" :src="track.imgUrl" />
            <div class="curr-track-name">{{ trackName }}</div>
        </div>

        <div class="track-controllers-container">
            <div class="flex center player-track-controllers">
                <button @click="shuffle">
                    <span><shuffle></shuffle> </span>
                </button>
                <button @click="onChangeSong(-1)" ><span><prev></prev></span></button>
                <button class="btn-play" @click="toggleSongPlay">
                    <span v-html="isPlayOrPause ? pauseSvg : playSvg"></span>
                </button>
                    <button><span v-html="repeatSvg"></span></button>
                    <button @click="onChangeSong(1)" ><span><next></next></span>
                    </button>
            </div>
            <div class="flex progress-bar-container">
                <div>{{ convertMinStart }}</div>
                <input class="progress-bar" @change.prevent="handleTime" type="range" v-model="currTime"
                    :max="trackDuration" />
                <div>{{ convertMinEnd }}</div>
            </div>
        </div>
        <div>
            <button @click="mute"><span v-html="isMute ? muteSvg : volumeSvg"></span></button>
            <input @change="changeVolume" type="range" v-model="volume" />
        </div>
    </section>
</template>

<script>
import {utilService} from '../../services/utils.service'
import { defineComponent } from 'vue';
import YouTube from 'vue3-youtube'
import shuffle from '../icons/shuffle-btn.vue'
import next from '../icons/next-btn.vue'
import prev from '../icons/prev-btn.vue'

export default defineComponent({
    components: { YouTube, shuffle, next, prev},
    data() {
        return {
            isPlayOrPause: false,
            isMute: false,
            volume: 50,
            currTime: 0,
            trackDuration: 0,
            trackInterval: null,
            player: null,
        }
    },
    created() {
        console.log('this.$store.getters.getPlayer',this.$store.getters.getPlayer)
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
        repeatSvg() {
            return `<svg role="img" height="16" width="16" viewBox="0 0 16 16"><path d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"></path></svg>`;
        },
        track() {
            return this.$store.getters.currTrack;
        },
        vidSrc() {
            return `https://www.youtube.com/watch?v=${this.track.id}`;
        },
        trackName() {
            return this.track.title
        },
        station() {
            const { id } = this.$route.params
            return this.$store.getters.getStation(id)
        },
        convertMinStart(){
            return utilService.convertSecToMin(this.currTime.toFixed(0))
        },
        convertMinEnd(){
            return utilService.convertSecToMin(this.trackDuration.toFixed(0))
        }
    },
    methods: {
        setTrack(track) {
            this.$store.commit({ type: 'setTrack', track })
        },
        handleTime() {
            this.isPlayOrPause ? this.play() : this.pause()
            this.player.seekTo(this.currTime)
        },
        state(ev) {
            if (ev.data === 0) {
                this.currTime = 0
                return clearInterval(this.trackInterval)
            }
        },
        onReady() {
            this.player = this.$refs.youtube
            this.play()
            console.log('player is ready')
        },
        toggleSongPlay() {
            if (!this.isPlayOrPause) {
                this.play()
            } else {
                this.pause()
            }
        },
        pause() {
            clearInterval(this.trackInterval);
            this.player.pauseVideo()
            this.isPlayOrPause = false;
        },
        play() {
            clearInterval(this.trackInterval);
            this.player.playVideo()
            this.intervalForTrack()
            this.isPlayOrPause = true;
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
            let currStation = { ...this.station }
            let currTrack = this.track
            let currTrackIdx = currStation.tracks.indexOf(currTrack)
            let currTrackInStationIdx = currStation.tracks[currTrackIdx]

            currTrackInStationIdx = currTrackInStationIdx + diff

            if (currTrackInStationIdx < 0) {
                this.player.seekTo(0)
                return
            } else if (currTrackInStationIdx >= currStation.tracks.length) {
                this.player.seekTo(0)
                return
            }

            let changedTrack = currStation.tracks[currTrackInStationIdx]
            this.setTrack(changedTrack)
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
