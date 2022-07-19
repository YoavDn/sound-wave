<template>
    <section class="player-container">
        <YouTube hidden v-if="vidSrc" :src="vidSrc" ref="youtube" />
        <div>
            <img class="curr-song" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/fe529a64193929.5aca8500ba9ab.jpg">
        </div>
        <div>
            <div class="flex center player-song-controllers">
                <button>🔀</button>
                <button>⏪</button>
                <button @click="toggleSongPlay">{{ playOrPause }}</button>
                <button>⏩</button>
                <button>🔁</button>
            </div>
            <div>
            0:00
                <progress @change="changeTime" id="file" value="50" max="100"></progress>
            0:19
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
            songDuration: 0,
        }
    },
    computed:{
        vidSrc() {
            return this.$store.getters.currSong
        },
    },
    methods: {
        toggleSongPlay() {
        if(this.playOrPause === '▶'){
          this.$refs.youtube.playVideo()
          this.playOrPause = '⏸'
          console.log('this.$refs.youtube',this.$refs.youtube)
        } else {
          this.$refs.youtube.pauseVideo()
          this.playOrPause = '▶'
        }
        console.log(this.playOrPause)
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
    },
})
</script>

<style>

</style>
