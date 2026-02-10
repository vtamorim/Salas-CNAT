<script setup lang="ts">
<<<<<<< HEAD
import Carrossel from '@/components/carrosel.vue'; 
import CardInscricao from '@/components/CardInscricao.vue';
import ModalLab from '@/components/modal.vue'; 
import { ref } from 'vue';
const salas = [
  {
    titulo: 'Laboratório de Informática',
    local: 'Bloco A - Sala 102',
    descricao: 'Espaço equipado com computadores de alto desempenho para aulas de programação e desenvolvimento de sistemas.',
    categorias: ['Tecnologia']
  },
  {
    titulo: 'Laboratório de Química',
    local: 'Bloco B - Sala 204',
    descricao: 'Laboratório completo com bancadas, vidrarias e reagentes para experimentos de química geral e analítica.',
    categorias: ['Química']
  },
  {
    titulo: 'Laboratório de Física',
    local: 'Bloco C - Sala 101',
    descricao: 'Ambiente destinado ao estudo de mecânica, óptica e eletricidade com equipamentos de medição precisos.',
    categorias: ['Física'] 
  },
];
=======
import apresentacaopage from '@/components/apresentacaopage.vue';
import objetivos from '@/components/objetivos.vue';
import sala from '@/assets/sala.png';
import Collaboration from '@/assets/Collaboration.png';
import Knowledge from '@/assets/Knowledge Sharing.png';
import Rocker from '@/assets/Rocket.png';
>>>>>>> 0ef8329c67ae09d20d0c2399179552bb1fd5f467


const showModal = ref(false)
const selectedLab = ref<any>(null) 


function abrirModal(lab: any) {
  console.log('Abrindo modal para:', lab.titulo); 
  selectedLab.value = lab
  showModal.value = true
}
</script>

<template>
<<<<<<< HEAD
   <section id="laboratorios" class="laboratorios-section">
=======
    <apresentacaopage :url="sala" descricao="As salas de aula do IFRN constituem o principal espaço de ensino e aprendizagem, onde ocorre a construção do conhecimento por meio da interação entre estudantes e professores.

     Esses ambientes favorecem o desenvolvimento do pensamento crítico, a troca de experiências e a formação acadêmica e profissional dos alunos, contribuindo diretamente para a missão educacional da instituição." />
  
  <objetivos :titulos="['Convivência', 'Conhecimento', 'Desenvolvimento']" :descricoes="['Elas estimulam o diálogo entre estudantes e professores, promovendo participação ativa, colaboração e pensamento crítico.', 'As salas de aula do IFRN CNAT são espaços centrais para a construção do conhecimento, favorecendo o ensino, a troca de ideias e o desenvolvimento acadêmico.', 'Nesse ambiente, ocorre a formação intelectual, ética e profissional dos alunos, preparando-os para a vida acadêmica e para o mercado de trabalho.']" :urls="[Collaboration, Knowledge, Rocker]"/>

 

  <section id="laboratorios" class="laboratorios-section">
>>>>>>> 0ef8329c67ae09d20d0c2399179552bb1fd5f467
    <div class="content-wrapper">
      <h3>Salas de Aula</h3>
     <Carrossel 
        :eventos="salas" 
        :component="CardInscricao" 
        variant="inscricao" 
        @select="abrirModal" 
      />

      <Teleport to="body">
        <ModalLab 
          :show="showModal" 
          :content="selectedLab" 
          @close="showModal = false" 
        />
      </Teleport>
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