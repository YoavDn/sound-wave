<template>
    <div class="overlay"></div>
    <div class="station-update-modal">
        <div class="modal-header flex">
            <h2 clas="station-update-modal-title">Edit details</h2>
            <button class="clean-btn" @click="closeModal"><i class="bi bi-x-lg"></i></button>
        </div>
        <div class="main-modal-container ">
            <div class="modal-img-container">
                <label for="file-input">
                    <img ref="stationImg" v-if="stationToUpdate.imgUrl" :src="station.imgUrl" alt="station img">
                    <img v-else src="../../assets/imgs/defaultCover.svg" alt="station img">
                    <input id="file-input" class="apload-img-input" type="file" accept="image/*"
                        @change="uploadImage" />
                </label>
            </div>
            <div class="input-title">
                <input class="input-title" type="text" v-model="stationToUpdate.name" required>
            </div>
            <div class="text-area-modal">
                <textarea v-model="stationToUpdate.description" name="" id="" cols="30" rows="10"
                    placeholder="Add an optional descriptions"></textarea>
            </div>
            <button @click="updateStationDetails" class="save-btn">Save</button>
            <p class="modal-text-rights">By proceeding, you agree to give SoundWave access to the image you choose to
                upload. Please make sure you
                have the right to upload the image.</p>
        </div>
    </div>
</template>
    
<script >
import axios from 'axios'
export default {
    props: { 'station': Object },
    emits: ['updateStationDetails', 'closeModal'],
    data() {
        return {
            stationToUpdate: null,
            isLoaded: false
        }
    },

    created() {
        this.stationToUpdate = JSON.parse(JSON.stringify({ ...this.station, description: '' }))
    },


    methods: {
        closeModal() {
            this.$emit('closeModal')
        },
        updateStationDetails() {
            this.closeModal()
            this.$emit('updateStationDetails', this.stationToUpdate)
        },

        uploadImage(event) {
            // this.$refs.uploadImg.src = URL.createObjectURL(event.target.files[0]);
            this.stationToUpdate.imgUrl = URL.createObjectURL(event.target.files[0]);
            this.$refs.stationImg.src = this.stationToUpdate.imgUrl
            console.log(URL.createObjectURL(event.target.files[0]));
        },

        onLoadImg() {
            this.isLoaded = true
            console.log(this.isLoaded);
        }


    }

}
</script>
    
<style>
</style>