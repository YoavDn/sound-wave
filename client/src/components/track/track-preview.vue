<template>
    <section class="track-preview">
        <div class="track-play">
            <button @click="$emit('setTrack', track)" class="clean-btn action-btn"><i
                    class="bi bi-play-fill"></i></button>
            <p class="track-idx light">{{ trackIdx }}</p>
        </div>
        <img :src="track.imgUrl" />
        <h2>{{ track.title }}</h2>
        <p>John Smith</p>
        <p>Dec 25, 2019 </p>
        <button class="clean-btn action-btn"><i class="bi bi-heart"></i></button>
        <p>{{ track.time }}</p>
        <track-options :track="track" />
    </section>
</template>



    <script>
    import trackOptions from '../track/track-options.vue'
    export default {
        components: {
            trackOptions
        },
        props: {
            'track': Object,
            'trackIdx': Number
        },
    
        created() {
        }
    }
    </script>
