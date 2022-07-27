<template class="track-options-dropdown" >
  <i class="bi bi-three-dots action-btn" @click="toggleModal"></i>
  <div v-if="isModalOn" :style="modalPos" class="opt-dropdown flex flex-column" v-click-outside="closeAllModals">

    <button class="clean-btn" @mouseover="openPlayListSubModal"><span class="flex space-between align-center">Add to
        playlist <i class="bi bi-caret-right-fill"></i></span>
    </button>

    <button class="clean-btn track-opt-btn">
      <span class="flex space-between align-center" @mouseover="openShareSubModal">Share <i
          class="bi bi-caret-right-fill"></i></span>
    </button>

    <button v-if="currStation" class="clean-btn track-opt-btn remove-from-station"
      @click="updateStation(track, undefined, false)" @mouseenter="isShareSubmodalOn = false">Remove
      from playlist</button>

  </div>

  <div v-if="isPlaylistsSubmodalOn" class="opt-dropdown-side" :style="modalPos"
    @mouseleave="isPlaylistsSubmodalOn = false">
    <button v-for="station in stations" class="clean-btn" @click="updateStation(track, station, true)">{{ station.name
    }}</button>
  </div>

  <div v-if="isShareSubmodalOn" class="opt-dropdown-side" :style="modalPos" @mouseleave="isPlaylistsSubmodalOn = false">
    <button class="clean-btn">Copy link</button>
    <button class="clean-btn">Copy on whatsapp</button>
  </div>


</template>


<script>
import threeDots from '../../assets/imgs/three-dots.svg'
import { eventBus } from '../../services/event-bus.js'

export default {
  props: { track: Object, trackIdx: Number, listLength: Number },
  data() {
    return {
      isModalOn: false,
      isPlaylistsSubmodalOn: false,
      isShareSubmodalOn: false,
      currStation: null,
    }
  },
  components: {
    threeDots
  },

  created() {
    const { id } = this.$route.params
    if (id) this.currStation = this.$store.getters.getStation(id)

  },
  computed: {
    stations() {
      const user = this.$store.getters.getLoggedInUser
      if (user) return this.$store.getters.getStations.filter(station => station.createdBy?._id === user._id)
      else return this.$store.getters.getStations.filter(station => station.createdBy?._id === 'u101')
    },
    modalPos() {
      if (this.listLength - this.trackIdx > 3) return 'top: 2.5rem'
      return 'bottom: 2.5rem'
    }
  },

  methods: {

    openPlayListSubModal() {
      this.isShareSubmodalOn = false
      this.isPlaylistsSubmodalOn = true
    },
    toggleModal() {
      !this.isModalOn ? this.isModalOn = true : this.closeAllModals()
    },
    closeAllModals() {
      this.isShareSubmodalOn = false
      this.isPlaylistsSubmodalOn = false
      this.isModalOn = false
    },
    openShareSubModal() {
      this.isShareSubmodalOn = true
      this.isPlaylistsSubmodalOn = false
    },
    updateStation(track, station = this.currStation, isNew = true) {
      this.closeAllModals()
      const data = { track, station, isNew }
      eventBus.emit('updateStation', data)
    }
  }

}
</script>
