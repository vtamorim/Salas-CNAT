<script setup lang="ts">
import Carrossel from '@/components/carrosel.vue';
import CardInscricao from '@/components/CardInscricao.vue';
import ModalLab from '@/components/modal.vue'; 
import { ref } from 'vue';
import apr_quadra from '@/assets/images/apr_quadra.png';
import apresentacaopage from '@/components/apresentacaopage.vue';
import objetivos from '@/components/objetivos.vue';
import Basketball from '@/assets/images/Basketball.png';
import Heart from '@/assets/images/Heart Health.png';
import People from '@/assets/images/People Working Together.png';
const quadras = [
  {
    titulo: 'Quadra 01',
    local: 'IFRN CNAT - Área Esportiva',
    descricao: 'Quadra coberta poliesportiva, ideal para prática de futsal e handebol durante o dia.',
    categorias: ['Esportes']
  },
  {
    titulo: 'Quadra 02',
    local: 'IFRN CNAT - Área Esportiva',
    descricao: 'Quadra coberta com tabelas de basquete e marcações oficiais para vôlei.',
    categorias: ['Esportes']
  },
    {
    titulo: 'Quadra 03',
    local: 'IFRN CNAT - Área Esportiva',
    descricao: 'Quadra coberta com tabelas de basquete e marcações oficiais para vôlei.',
    categorias: ['Esportes']
  },
  {
    titulo: 'Ginásio Poliesportivo',
    local: 'IFRN CNAT - Área Esportiva',
    descricao: 'Ginásio coberto com arquibancada, vestiários e iluminação profissional para jogos e eventos.',
    categorias: ['Esportes'] 
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
  <apresentacaopage :url="apr_quadra" descricao="  As quadras do IFRN CNAT são espaços destinados à prática de atividades esportivas, promovendo o desenvolvimento físico e mental dos estudantes.

    Elas oferecem um ambiente propício para a realização de atividades esportivas, contribuindo para o bem-estar dos alunos e servidores.  

   A Coordenação de Espaços Esportivos (Cesport) é responsável pela gestão e coordenação das quadras, garantindo que estejam em conformidade com as normas e regulamentos de segurança e funcionamento." />
  
  <objetivos :titulos="['Esporte', 'Convivência', 'Saúde']" :descricoes="['As quadras do IFRN CNAT incentivam a prática esportiva, contribuindo para o desenvolvimento físico, a disciplina e o trabalho em equipe dos estudantes.', 'A utilização das quadras contribui para a qualidade de vida, o bem-estar físico e mental, além de estimular hábitos saudáveis na comunidade acadêmica.', 'Esses espaços promovem a integração entre alunos e servidores, fortalecendo a socialização, o respeito e a convivência no ambiente escolar.']" :urls="[Basketball, Heart, People]"/>

 

 <section id="laboratorios" class="laboratorios-section">
    <div class="content-wrapper">
      <h3>Quadras</h3>
     <Carrossel 
        :eventos="quadras" 
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