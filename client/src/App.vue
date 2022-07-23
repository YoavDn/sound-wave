<template>
  <main class="main-layout">
    <div class="main-view">
      <appHeader />
      <router-view />
    </div>
    <side-bar />
    <player />
  </main>
  <popup-msg />
</template>
  
<script>
import appHeader from './components/base/app-header.vue'
import sideBar from './components/base/side-bar.vue'
import player from './components/base/player.vue'
import popupMsg from './components/custom/popup-msg.vue'

export default {

  name: 'app',

  components: {
    appHeader,
    player,
    sideBar,
    popupMsg,
  },

  created() {
    this.$store.dispatch({ type: 'loadStations' })
  }

}
</script>

<style>
</style>