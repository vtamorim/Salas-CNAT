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
section{
  display:flex;
  justify-content: center;
  gap: 5rem;
}
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 320px;
  height: 400px;
  gap: 50px;
}
div:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

div h3 {
  color: #3A7259;
  font-size: 24px;
  margin: 0;
}
div p {
  color: #02402E;
  font-size: 16px;
  margin: 0;
}
figure{
  margin: 0;
  padding: 0;
  background-color: #31BF81;
  border-radius: 50%;
  width: 110px;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

</style>