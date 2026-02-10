<script setup lang="ts">
import { ref } from 'vue';
import apresentacaopage from '@/components/apresentacaopage.vue';
import objetivos from '@/components/objetivos.vue';
import Carrossel from '@/components/carrosel.vue'; 
import CardInscricao from '@/components/CardInscricao.vue';
import apr_laboratorio from '@/assets/images/apr_laboratorio.png';
import Experiment from '@/assets/images/Experiment.png';
import Detective from '@/assets/images/Detective.png';
import Training from '@/assets/images/Training.png';
import ModalLab from '@/components/modal.vue'; 

const laboratorios = [
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


const showModal = ref(false)
const selectedLab = ref<any>(null) 


function abrirModal(lab: any) {
  console.log('Abrindo modal para:', lab.titulo); 
  selectedLab.value = lab
  showModal.value = true
}
</script>

<template>
  <apresentacaopage 
    :url="apr_laboratorio" 
    descricao="Os laboratórios do IFRN são espaços projetados para a realização de aulas práticas e a realização de trabalhos de conclusão de curso, projetos de pesquisa e extensão. Eles desempenham um papel fundamental na formação dos estudantes, permitindo que eles vivenciem a ciência de forma concreta e desenvolvam habilidades como observação, interpretação de resultados e trabalho em equipe. A Coordenação de Laboratórios (Colab) é responsável pela gestão e coordenação dos laboratórios, garantindo que estejam em conformidade com as normas e regulamentos de segurança e funcionamento." 
  />
  
  <objetivos 
    :titulos="['Prática', 'Experiência', 'Preparação']" 
    :descricoes="['O laboratório possibilita que os alunos realizem experimentos e atividades práticas, facilitando a compreensão dos conteúdos teóricos trabalhados em sala de aula.', 'Por meio de experiências, os estudantes desenvolvem o pensamento científico, aprendendo a observar, formular hipóteses, testar ideias e analisar resultados.', 'O uso do laboratório contribui para a formação acadêmica e profissional dos alunos, promovendo contato com equipamentos, normas de segurança e trabalho em equipe.']" 
    :urls="[Experiment, Detective, Training]"
  />

  <section id="laboratorios" class="laboratorios-section">
    <div class="content-wrapper">
      <h3>Laboratórios</h3>
      
      <Carrossel 
        :eventos="laboratorios" 
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
  
  /* Caminho da imagem de fundo */
  background-image: url('@/assets/inscricoesSection.svg'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  /* Estilos de borda e cor */
  border-top-left-radius: 6rem;
  border-bottom-right-radius: 6rem;
  background-color: #3A7259; 
  
  /* Isso garante que nada vaze das bordas arredondadas */
  overflow: hidden; 
  position: relative;
}

.content-wrapper {
  padding: 30px;
  width: 100%;
  box-sizing: border-box; /* Importante para o padding não estourar a largura */
}

.content-wrapper h3 {
  color: white;
  font-size: 32px;
  margin-bottom: 2rem; /* Espaço entre título e carrossel */
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  padding-left: 1rem; /* Alinhamento visual */
}

.content-wrapper p {
  color: white;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .laboratorios-section {
    padding-top: 80px;
    border-top-left-radius: 3rem;
    border-bottom-right-radius: 3rem;
  }
  
  .content-wrapper h3 {
    font-size: 24px;
    text-align: center;
    padding-left: 0;
  }
}
</style>