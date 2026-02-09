<script setup lang="ts">
import calendarioSemanal from './components/calendarioSemanal.vue';

import Header from './components/header.vue';

import apresentacao from './components/apresentacao.vue';
</script>

<template>
  <div>
    <Header/>
    <apresentacao/>
    <calendarioSemanal />
  </div>
</template>

<style>
*{

  margin:0;
  padding:0;
}
</style>
