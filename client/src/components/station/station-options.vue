<template>
    <section class="station-option-container flex align-center">
        <img src="../../assets/imgs/share.svg" alt="">
        <button v-if="station.tracks.length > 0" @click="$emit('setStation', station)" class="play-btn"><i
                class="bi bi-play-fill"></i></button>
        <button v-if="station.tracks.length > 0" class="heart-btn"><i class="bi bi-heart-fill"></i> </button>
        <div style="color: white; position: relative;">
            <track-options />
        </div>
    </section>
</template>


<script setup>
import trackOptions from '../track/track-options.vue';
import { defineProps } from 'vue';
defineProps({ 'station': Object })


</script>
