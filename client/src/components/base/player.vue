<template>
    <section v-if="vidSrc" class="player-container">
        <YouTube hidden v-if="vidSrc" @stateChange="state" :src="vidSrc" ref="youtube" />
        <div>
            <img class="curr-song" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/fe529a64193929.5aca8500ba9ab.jpg">
        </div>
        <div>
            <div class="flex center player-song-controllers">
                <button @click="shuffle">🔀</button>
                <button>⏪</button>
                <button @click="toggleSongPlay">{{ playOrPause }}</button>
                <button>⏩</button>
                <button>🔁</button>
            </div>
            <div class="flex">
            <div >{{currTime}}</div> 
                <progress id="file" :value="currTime" :max="trackDuration"></progress>
            <div>{{trackDuration}}</div>
            </div>
        </div>
        <div>
            <button @click="mute">{{soundIcon}}</button>
            <input @change="changeVolume" type="range" v-model="volume" />
        </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue'
import YouTube from 'vue3-youtube'

export default defineComponent({
    components: { YouTube },
    data() {
        return {
            playOrPause: '▶',
            soundIcon: '🔊',
            volume: 50,
            currTime: 0,
            trackDuration:0,
            trackInterval:null,
        }
    },
    created(){
        // CurrTime(){
            // this.currTime = this.$refs.youtube.getCurrentTime()
        // },
        // TrackDuration(){
        //     this.truckDuration = this.$refs.youtube.getDuration()
        // }
    },
    computed:{
        vidSrc() {
            return this.$store.getters.currSong
        },
    },
    methods: {
        state(ev){
            if(ev.data === 0){
                this.currTime = 0
                return clearInterval(this.trackInterval)
            } 
            console.log(ev)
        },
        toggleSongPlay() {
        if(this.playOrPause === '▶'){
          this.$refs.youtube.playVideo()
          this.playOrPause = '⏸'
          this.trackDuration = this.$refs.youtube.getDuration()
          this.trackInterval = setInterval(() => {
          this.currTime = this.$refs.youtube.getCurrentTime()
          }, 100);
          console.log('this.$refs.youtube',this.$refs.youtube)
        } else {
          this.$refs.youtube.pauseVideo()
          this.playOrPause = '▶'
        }
    },
    changeVolume(){
      this.$refs.youtube.setVolume(this.volume)
      console.log('this.volume',this.volume)
    },
    mute(){
      if(this.volume === 0){
        this.soundIcon = '🔊'
        this.volume = 50
        this.$refs.youtube.setVolume(50)
      }
      else {
        this.soundIcon = '🔇'
        this.volume = 0
        this.$refs.youtube.setVolume(0)
      }
    },
    shuffle() {{
        this.$refs.youtube.setShuffle(true)
    }}
    },
})
</script>

<style>

</style>
