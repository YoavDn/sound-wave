<template>
    <section class="track-preview track-list-row align-center">
        <div class="track-play">
            <button @click="$emit('setTrack', track)" class="clean-btn action-btn"><i
                    class="bi bi-play-fill"></i></button>
            <p class="track-idx light">{{ trackIdx + 1 }}</p>
        </div>
        <div class="track-img-title flex">
            <img :src="track.imgUrl" />
            <div class="div">
                <h2>{{ track.title }}</h2>
                <p class="sub-text">singer</p>
            </div>
        </div>
        <div class="track-added-by sub-text">
            <!-- <p>John Smith</p> -->
            <p>{{ track.addedBy }}</p>
        </div>
        <div class="track-date-added sub-text">
            <p>Dec 25, 2019 </p>
        </div>

        <div class="track-time align-center sub-text">
            <button class="clean-btn action-btn"><i class="bi bi-heart"></i></button>
            <p>{{ track.time }}</p>
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
        }
    }
    </script>
