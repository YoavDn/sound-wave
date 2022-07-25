<template>
  <main v-if="stations" class="main-layout">
    <div class="main-view">
      <appHeader />
      <router-view />
      <popup-msg />
    </div>
    <side-bar />
    <player />
  </main>
  <section>

  </section>
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
    login,
  },

  created() {
    this.$store.dispatch({ type: 'loadStations' })
  },
  computed: {
    stations() {
      return this.$store.getters.getStations
    }
  }

}
</script>

<style>
</style>