<script setup>
  import { RouterView } from 'vue-router';
  import Navbar from './components/Navbar.vue'
</script>

<template>
  <div id="app" class="container mx-auto mt-6">
    <Navbar/>

    <RouterView/>
  </div>
</template>


<style scoped>

</style>