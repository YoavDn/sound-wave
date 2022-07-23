<template>
    <section class="station-option-container flex align-center">
        <button v-if="station.tracks.length > 0" @click="$emit('setStation', station)" class="play-btn"><i
                class="bi bi-play-fill"></i></button>
        <div class="like-share-container flex align-center">
        <button v-if="station.tracks.length > 0" class="heart-btn"><i class="bi bi-heart"></i> </button>
        <button class="clean-btn station-options"><i class="bi bi-three-dots"></i></button>
        <button class="clean-btn station-options-share"><svg role="img" height="24" width="24" viewBox="0 0 24 24" style="color: white;"><path d="M18.5 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM15 5.5a3.5 3.5 0 111.006 2.455L9 12l7.006 4.045a3.5 3.5 0 11-.938 1.768l-6.67-3.85a3.5 3.5 0 110-3.924l6.67-3.852A3.513 3.513 0 0115 5.5zm-9.5 5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm13 6.5a1.5 1.5 0 10-.001 3 1.5 1.5 0 00.001-3z"></path></svg></button>
        </div>
    </section>
</template>


<script setup>
import trackOptions from '../track/track-options.vue';
import { defineProps } from 'vue';
defineProps({ 'station': Object })


</script>
