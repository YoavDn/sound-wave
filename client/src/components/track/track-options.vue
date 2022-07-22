<template class="track-options-dropdown">
  <i class="bi bi-three-dots action-btn" @click="toggleModal"></i>
  <div v-if="isModalOn" class="opt-dropdown flex flex-column">

    <button class="clean-btn" @click="isPlaylistsSubmodalOn = !isPlaylistsSubmodalOn"><span
        class="flex space-between align-center">Add to playlist <i class="bi bi-caret-right-fill"></i></span>
    </button>

    <button class="clean-btn track-opt-btn">
      <span class="flex space-between align-center">Share <i class="bi bi-caret-right-fill"></i></span>
    </button>

  </div>
  <div v-if="isPlaylistsSubmodalOn" class="opt-dropdown-side">
    <button v-for="station in stations" class="clean-btn">{{ station.name }}</button>
  </div>
</template>


<script>
import { eventBus } from '../../services/event-bus.js'
export default {
  props: { track: Object },
  data() {
    return {
      isModalOn: false,
      isPlaylistsSubmodalOn: false
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
    toggleModal(){
      if (!this.isModalOn) this.isModalOn = true
      else if (this.isModalOn) {
        this.isModalOn = false
        this.isPlaylistsSubmodalOn = false
      }
    }
  }

}
</script>
