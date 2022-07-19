<template>
    <section class="result-preview-container flex align-center space-between">
        <div class="track-details flex align-center ">
            <button class="clean-btn action-btn"><i class="bi bi-play"></i></button>
            <div class="track-img-container "><img :src="track.imgUrl"></div>
            <div class="track-title-container">{{ track.title }}</div>
        </div>
        <div class="preview-actions flex align-center space-between">
            <button class="clean-btn action-btn"><i class="bi bi-heart"></i></button>
            <div class="trackTime">{{ track.time }}</div>
        </div>
    </section>
</template>

<script>
import { HeartIcon, PlayIcon } from '@heroicons/vue/outline'

export default {
    name: 'search-result-preview',
    props: {
        track: {
            type: Object,
            required: true,
        },
    },
    components: {
        HeartIcon,
        PlayIcon
    }
}
</script>

<style lang="scss" scoped>
</style>