<template>
    <section class="track-preview flex align-center space-between">
        <div class="track-details flex align-center ">
            <button @click="$emit('setTrack', track)" class="clean-btn action-btn"><i
                    class="bi bi-play-fill"></i></button>
            <p class="track-idx light">{{ trackIdx }}</p>
            <div class="track-img-container "><img :src="track.imgUrl"></div>
            <div class="track-title-container">{{ track.title }}</div>
        </div>
        <div class="preview-actions flex align-center space-between">
            <button class="clean-btn action-btn"><i class="bi bi-heart"></i></button>
            <div class="trackTime">{{ track.time }}</div>
        </div>
    </section>
    <!-- 
    <section class="track-preview flex align-center">
   
    </section> -->
    <!-- <pre style="color: white">{{ track }}</pre> -->
</template>

    <script>
    
    
    export default {
        props: {
            'track': Object,
            'trackIdx': Number
        },
    
        created() {
        }
    }
    </script>
