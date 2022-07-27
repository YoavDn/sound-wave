<template>
  <main v-if="stations && demoStations" class="main-layout">
    <div class="main-view">
      <perfect-scrollbar>
        <div class="background-1">
          <appHeader />
        </div>
        <div class="main-app">
          <router-view />
          <popup-msg />
        </div>
      </perfect-scrollbar>

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
import loginSignup from './views/login-signup.vue'

export default {

  name: 'app',
  data() {
    return {
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
    this.$store.dispatch({ type: 'loadDemoStations' })
  },
  computed: {
    stations() {
      return this.$store.getters.getStations
    },
    demoStations() {
      return this.$store.getters.getDemoStations
    },
  }

}
</script>

<style>
</style>