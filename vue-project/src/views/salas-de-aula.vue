<script setup lang="ts">
import apresentacaopage from '@/components/apresentacaopage.vue';
import objetivos from '@/components/objetivos.vue';
import sala from '@/assets/sala.png';
import Collaboration from '@/assets/Collaboration.png';
import Knowledge from '@/assets/Knowledge Sharing.png';
import Rocker from '@/assets/Rocket.png';


</script>

<template>
    <apresentacaopage :url="sala" descricao="As salas de aula do IFRN constituem o principal espaço de ensino e aprendizagem, onde ocorre a construção do conhecimento por meio da interação entre estudantes e professores.

     Esses ambientes favorecem o desenvolvimento do pensamento crítico, a troca de experiências e a formação acadêmica e profissional dos alunos, contribuindo diretamente para a missão educacional da instituição." />
  
  <objetivos :titulos="['Convivência', 'Conhecimento', 'Desenvolvimento']" :descricoes="['Elas estimulam o diálogo entre estudantes e professores, promovendo participação ativa, colaboração e pensamento crítico.', 'As salas de aula do IFRN CNAT são espaços centrais para a construção do conhecimento, favorecendo o ensino, a troca de ideias e o desenvolvimento acadêmico.', 'Nesse ambiente, ocorre a formação intelectual, ética e profissional dos alunos, preparando-os para a vida acadêmica e para o mercado de trabalho.']" :urls="[Collaboration, Knowledge, Rocker]"/>

 

  <section id="laboratorios" class="laboratorios-section">
    <div class="content-wrapper">
      <h3>Salas</h3>

    </div>
  </section>
</template>

<style scoped>
.laboratorios-section {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 120px; 
  min-height: 600px;
  display: flex;
  flex-direction: column;
  background-image: url('@/assets/inscricoesSection.svg'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  

  border-top-left-radius: 6rem;
  border-bottom-right-radius: 6rem;
  background-color: #3A7259; 
}

.content-wrapper {
  padding: 30px;
  width: 100%;
}

.content-wrapper h3 {
  color: white;
  font-size: 32px;
  margin: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
}

.content-wrapper p {
    color: white;
    font-size: 1.2rem;
}
</style>