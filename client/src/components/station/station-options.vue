<template>
    <section class="station-option-container flex align-center">
        <button v-if="station.tracks.length > 0" @click="$emit('playStation')" class="play-btn"><i
                class="bi bi-play-fill"></i></button>
        <div class="like-share-container flex align-center">
            <button v-if="station.tracks.length > 0" class="heart-btn"><i class="bi bi-heart"></i> </button>
            <button class="clean-btn station-options"><i class="bi bi-three-dots"></i></button>
            <button class="clean-btn station-options-share">
                <three-dots />
            </button>
        </div>
    </section>
</template>


<script setup>
import threeDots from '../../assets/imgs/three-dots.svg'

import { defineComponent, defineProps } from 'vue';
defineProps({ 'station': Object })
defineComponent({ threeDots })


</script>
