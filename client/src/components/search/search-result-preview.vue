<template>
    <section class="result-preview-container flex align-center space-between">
        <div class="track-details flex align-center ">
            <button class="clean-btn action-btn" @click="$emit('setTrack', track)"><i
                    class="bi bi-play-fill"></i></button>
            <div class="track-img-container "><img :src="track.imgUrl"></div>
            <div class="track-title-container">{{ track.title }}</div>
        </div>

        <div v-if="isSearchPage" class="preview-actions flex align-center space-between">
            <button class="clean-btn action-btn" @click="likeTrack({ track })"><i class="bi bi-heart"></i></button>
            <div class="trackTime">{{ track.time }}</div>
            <track-options :track="track" />
        </div>
        <button class="add-to-playlist-btn" v-else>Add</button>
    </section>
</template>

<script>
import trackOptions from '../track/track-options.vue'
import { eventBus } from '../../services/event-bus'
export default {

    name: 'search-result-preview',
    props: {
        track: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isSearchPage: true,
        }
    },
    created() {
        this.$route.name === 'search' ? this.isSearchPage = true : this.isSearchPage = false
    },

    components: {
        trackOptions
    },
    methods: {
        likeTrack({ track }) {
            const data = {
                track,
                station: { _id: 'likedSongs' }
            }
            eventBus.emit('addTrackToStation', data)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>