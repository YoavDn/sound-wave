<template>
    <header class='station-header-container'>
        <h2 class="station-name">{{ station.name }}</h2>
    </header>
</template>

<script>
export default {
    name: 'stationHeader',
    props: { station: Object }
}
</script>