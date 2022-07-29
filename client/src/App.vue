<template>
  <main v-if="stations" class="main-layout">
    <appHeader />
    <div :class="mainViewStyle">
      <div class="main-app">
        <router-view />
        <popup-msg />
      </div>
    </div>
    <side-bar />
    <player />
  </main>
  <section>

  </section>
  <pulse-loader class="loader" :loading="!stations"></pulse-loader>
</template>
  
<script>
import appHeader from './components/base/app-header.vue'
import sideBar from './components/base/side-bar.vue'
import player from './components/base/player.vue'
import popupMsg from './components/custom/popup-msg.vue'
import loginSignup from './views/login-signup.vue'

export default {

  name: 'app',
  data() {
    return {
      onStationPage: false,
    }
  },
  components: {
    appHeader,
    player,
    sideBar,
    popupMsg,
    loginSignup,
  },

  created() {
    this.$store.dispatch({ type: 'getLoggedInUser' })
    this.$store.dispatch({ type: 'loadStations' })
    this.$store.dispatch({ type: 'loadLocalStations' })
  },
  computed: {
    stations() {
      return this.$store.getters.getStations
    },
    demoStations() {
      return this.$store.getters.getDemoStations
    },
    mainViewStyle() {
      return { 'main-view': !this.onStationPage, 'main-view-station': this.onStationPage }

    },

  },

  watch: {
    $route: {
      handler: function (route) {
        this.onStationPage = route.name === 'station' ? true : false
      }
    }
  }

}
</script>

<style>
</style>