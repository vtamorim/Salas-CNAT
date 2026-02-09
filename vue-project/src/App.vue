<script setup lang="ts">
import Header from './components/header.vue';
import Footer from './components/footer.vue';
</script>

<template>
  <div class="layout-container">
    <Header/>
    
    <router-view />

    <Footer/> 
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  gap: 4rem; 
  margin: 0 auto;
  min-height: 100vh; /* Garante que o footer vá para baixo se a página for curta */
}
</style>