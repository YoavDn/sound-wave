<template class="track-options-dropdown">
  <el-dropdown trigger="click">
    <i class="bi bi-three-dots action-btn"></i>
    <template #dropdown>
      <el-dropdown-menu class="dropdown-menu">
        <el-dropdown-item class="dropdown-item">
          <el-dropdown class="dropdown-item">
            Add to playlist
            <template #dropdown>
              <el-dropdown-menu class="dropdown-menu">
                <el-dropdown-item class="dropdown-item" v-for="station in stations" @click="addTrackToStation({ track, station })">{{
                    station.name
                }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-dropdown-item>
        <el-dropdown-item class="dropdown-item">Share</el-dropdown-item>
        <el-dropdown-item class="dropdown-item">Add to liked songs</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>


<script>
import { eventBus } from '../../services/event-bus.js'
export default {
  props: { track: Object },

  computed: {
    stations() {
      return this.$store.getters.getStations
    }
  },

  methods: {
    addTrackToStation(data) {
      eventBus.emit('addTrackToStation', data)
    }
  }

}
</script>
