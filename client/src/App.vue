<template>
  <main class="main-layout">

    <div class="main-view">

      <appHeader />
      <router-view />
    </div>
    <side-bar />
    <player />
  </main>
</template>
  
<script>
import appHeader from './components/base/app-header.vue'
import sideBar from './components/base/side-bar.vue'
import player from './components/base/player.vue'

export default {

  name: 'app',

  components: {
    appHeader,
    player,
    sideBar,
  },

  created() {
    this.$store.dispatch({ type: 'loadStations' })
  }

}
</script>

<style>
</style>