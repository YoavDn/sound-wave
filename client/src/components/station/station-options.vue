<template>
    <section class="station-option-container flex align-center">
        <button v-if="station.tracks.length > 0" @click="$emit('setStation', station)" class="play-btn"><i
                class="bi bi-play-fill"></i></button>
        <button v-if="station.tracks.length > 0" class="heart-btn"><i class="bi bi-heart-fill"></i> </button>
        <track-options style="font-size: 40px ; color: gray" />
    </section>
</template>


<script setup>
import trackOptions from '../track/track-options.vue';
import { defineProps } from 'vue';
defineProps({ 'station': Object })


</script>
