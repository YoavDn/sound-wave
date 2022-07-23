<template>
    <section class="app-header-container flex align-center">
        <div class="page-btn-container flex align-center">
            <button  class="pages-btn flex align-center" @click="$router.back()"><i
                    class="bi bi-chevron-left"></i></button>
            <button class="pages-btn flex align-center" @click="$router.go(1)"><i
                    class="bi bi-chevron-right"></i></button>
        </div>
    </section>
</template>
    
<script >

</script>
    
<style>
</style>