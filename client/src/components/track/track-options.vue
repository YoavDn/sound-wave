<template class="track-options-dropdown" >
  <i class="bi bi-three-dots action-btn" @click="toggleModal"></i>
  <div v-if="isModalOn" class="opt-dropdown flex flex-column" v-click-outside="closeAllModals">

    <button class="clean-btn" @mouseover="openPlayListSubModal"><span class="flex space-between align-center">Add to
        playlist <i class="bi bi-caret-right-fill"></i></span>
    </button>

    <button class="clean-btn track-opt-btn">
      <span class="flex space-between align-center" @mouseover="openShareSubModal">Share <i
          class="bi bi-caret-right-fill"></i></span>
    </button>

  </div>

  <div v-if="isPlaylistsSubmodalOn" class="opt-dropdown-side" @mouseleave="isPlaylistsSubmodalOn = false">
    <button v-for="station in stations" class="clean-btn">{{ station.name }}</button>
  </div>

  <div v-if="isShareSubmodalOn" class="opt-dropdown-side" @mouseleave="isPlaylistsSubmodalOn = false">
    <button class="clean-btn">Copy link</button>
    <button class="clean-btn">Copy on whatsapp</button>
  </div>

</template>


<script>
import { eventBus } from '../../services/event-bus.js'
export default {
  props: { track: Object },
  data() {
    return {
      isModalOn: false,
      isPlaylistsSubmodalOn: false,
      isShareSubmodalOn: false
    }
  },
  computed: {
    stations() {
      return this.$store.getters.getStations
    }
  },

  methods: {
    addTrackToStation(data) {
      eventBus.emit('addTrackToStation', data)
    },
    openPlayListSubModal() {
      this.isShareSubmodalOn = false
      this.isPlaylistsSubmodalOn = true
    },
    toggleModal(){
      this.isModalOn = !this.isModalOn
    },
    closeAllModals() {
      console.log('hello');
      this.isShareSubmodalOn = false
      this.isPlaylistsSubmodalOn = false
      this.isModalOn = false
    },
    openShareSubModal() {
      this.isShareSubmodalOn = true
      this.isPlaylistsSubmodalOn = false
    }
  }

}
</script>
