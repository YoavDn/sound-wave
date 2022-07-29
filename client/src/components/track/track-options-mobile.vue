<template>
    <div class="track-options-overlay flex-column">
        <div class="options-img-title flex">
            <img :src=track.imgUrl alt="">
            <h1>{{ track.title }}</h1>
        </div>
        <div class="track-options-mobile">
            <button class="clean-btn mobile-opt-btn flex align-center"><img src="../../assets/imgs/like.svg"
                    @click="toggleLikedSong()">
                <span v-if="!isLiked">Like</span>
                <span v-else>Unlike</span>
            </button>
            <button class="clean-btn mobile-opt-btn flex align-center"><img
                    src="../../assets/imgs/share.svg"><span>Share</span></button>
            <button class="clean-btn mobile-opt-btn flex align-center" @click="isListShown = !isListShown"><img
                    src="../../assets/imgs/active-library.svg"><span>Add to Playlist</span></button>
        </div>
        <div v-if="isListShown" class="station-hidden-list flex flex-column">
            <button v-for="station in stations" @click="addTrackToStation(station, true)" class="clean-btn btn-album">
                <span>{{ station.name }}</span>
            </button>
        </div>


        <div><button class="clean-btn cancel-opt-mobile" @click="$emit('toggleMobileOptions')">
                <span>Cancel</span>
            </button></div>
    </div>
</template>

<script>
export default {
    props: {
        'track': Object
    },

    data() {
        return {
            isListShown: false,
        }
    },
    methods: {
        toggleLikedSong() {
            const loggedInUser = this.$store.getters.getLoggedInUser
            let station;
            if (!loggedInUser) station = this.$store.getters.getStation("likedSongs")
            else station = this.$store.getters.getStation(loggedInUser.likedSongs)


            const data = { station, track: this.track, isNew: !this.isLiked }

            this.$emit('updateStation', data)
            this.$emit('toggleMobileOptions')
        },

        addTrackToStation(station, isNew) {
            const data = { station, track: this.track, isNew }
            this.$emit('updateStation', data)
            this.$emit('toggleMobileOptions')
        },
    },
    computed: {
        isLiked() {
            const loggedInUser = this.$store.getters.getLoggedInUser
            let station
            if (!loggedInUser) station = this.$store.getters.getStation("likedSongs")
            else station = this.$store.getters.getStation(loggedInUser.likedSongs)
            return station?.tracks?.some(t => t.id === this.track?.id)
        },
        stations() {
            return this.$store.getters.getUserStations
        }
    },
}
</script>

<style lang="scss" scoped>
</style>