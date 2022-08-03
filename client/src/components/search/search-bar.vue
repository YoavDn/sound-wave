<template>
    <form>
        <div class="search-container flex align-center">
            <i class="bi bi-search search-icon"></i>
            <input @input="$emit('searchTrack', query)" type="search" name="title" v-model="query"
                placeholder="Playlists or songs">
        </div>
    </form>
</template>
    
<script >
export default {
    data() {
        return {
            query: '',
        }
    },
}

</script>
    
<style>
</style>