<script setup lang="ts">
// Importe os componentes que são exclusivos da Home aqui
import apresentacao from '../components/apresentacao.vue';
import calendarioSemanal from '../components/calendarioSemanal.vue';
import CalendarioMensal from '../components/CalendarioMensal.vue';
</script>

<template>
  <main class="home-container">
    <apresentacao/>
    <calendarioSemanal />
    <CalendarioMensal/>
  </main>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
</style>