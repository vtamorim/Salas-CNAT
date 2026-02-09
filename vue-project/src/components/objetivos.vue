<template>

      <section id="objetivos_comite">
        
        <div>
          <figure>
          <img :src="urls[0]" alt="Objetivos do Comitê">
            </figure>
            <h3>{{ titulos[0] }}</h3>
            <p>{{ descricoes[0] }}</p>
        </div>
        <div>
          <figure>
          <img :src="urls[1]" alt="Objetivos do Comitê">
            </figure>
            <h3>{{ titulos[1] }}</h3>
            <p>{{ descricoes[1] }}</p>

        </div>
        <div>
          <figure>
          <img :src="urls[2]" alt="Objetivos do Comitê">
            </figure>
            <h3>{{ titulos[2] }}</h3>
            <p>{{ descricoes[2] }}</p>

        </div>
    </section>

</template>
<script setup>
defineProps({
  titulos: {
    type: Array,
    required: true
  },
  descricoes: {
    type: Array,
    required: true
  },
  urls: {
    type: Array,
    required: true
  }
})

</script>
<style scoped>

</style>