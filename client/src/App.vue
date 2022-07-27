<template>
  <main v-if="stations" class="main-layout">
    <div class="main-view">
      <perfect-scrollbar ref="scroll">
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
import trackOptionsVue from './components/track/track-options.vue'

export default {

  name: 'app',
  data() {
    return {
      isReady: false,
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
  },
  mounted() {
    console.log('hello');
    this.isReady = trackOptionsVue
  },
  // methods: {
  //   onScroll(event) {
  //     console.log(this.$refs.scroll.$el, event);
  //   }
  // },
  watch: {
    $route() {
      if (!this.isReady) return
      this.$refs.scroll.$el.scrollTop = 0
    }
  }

}
</script>

<style>
</style>