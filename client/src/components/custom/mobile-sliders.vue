<template>
    <swiper :slidesPerView="2" :spaceBetween="20" :freeMode="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="station in stations" :key="station._id" @click="goToStation(station._id)">
            <station-preview :station="station" class="station-card" />
        </swiper-slide>
    </swiper>
</template>


<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import stationPreview from "../station/station-preview.vue";
import { useRouter } from "vue-router";

import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
        stationPreview
    },

    props: ['stations'],
    // props: ['stations'],
    setup(props) {
        const router = useRouter()
        const goToStation = (stationId) => router.push(`/station/${stationId}`)
        console.log(props.stations);

        return {
            props,
            goToStation,
            modules: [FreeMode, Pagination],
        };
    },
};
</script>

<style lang="scss">
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {

    // background-color: rgba(255, 255, 255, 0.1);
    padding: 10px;
    display: flex;
    flex-direction: column;

    font-size: 16px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 1;
    }

    .station-name {
        display: none;
    }

    p {
        color: rgb(181, 181, 181);
    }

    .swiper-pagination {
        display: none;
    }
}
</style>