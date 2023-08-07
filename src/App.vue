
<script setup>
import { RouterView } from 'vue-router';
import navBar from './components/navBar.vue';
import footter from './components/footter.vue';
</script>
<template >
    <navBar/>
    
    <div>
    <RouterView/>
  </div>
  <div>
    <footter/>
  </div>
</template>
<script>

</script>
<style >
  
</style>