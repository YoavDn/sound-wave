<template>
    <section class="track-preview flex align-center">
        <div class="track-play">
            <button @click="$emit('setTrack', track)" class="clean-btn action-btn"><i
                    class="bi bi-play-fill"></i></button>
            <p class="track-idx light">{{ trackIdx }}</p>
        </div>
        <div class="track-img">
            <img :src="track.imgUrl" />
        </div>
        <div class="track-title">
            <h2>{{ track.title }}</h2>
        </div>
        <div class="track-added-by sub-text">
            <p>John Smith</p>
        </div>
        <div class="track-date-added sub-text">
            <p>Dec 25, 2019 </p>
        </div>
        <div class="track-like">
            <button class="clean-btn action-btn"><i class="bi bi-heart"></i></button>
        </div>
        <div class="track-time sub-text">
            <p>{{ track.time }}</p>
        </div>
        <div class="track-options">
            <track-options :track="track" />
        </div>
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
            console.log(this.trackIdx);
        }
    }
    </script>
