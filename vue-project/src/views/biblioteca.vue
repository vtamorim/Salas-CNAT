<script setup lang="ts">
import apresentacaopage from '@/components/apresentacaopage.vue';
import apr_biblioteca from '@/assets/apr_biblioteca.png';
import objetivos from '@/components/objetivos.vue';
import Reading from '@/assets/Reading.png';
import educacao from '@/assets/educacao.png';
import aprender from '@/assets/aprender.png';
import Carrossel from '@/components/carrosel.vue';
import ModalLab from '@/components/modal.vue';
import CardInscricao from '@/components/CardInscricao.vue';
import { ref } from 'vue';

const bib = [
  {
    titulo: 'Sala 01',
    local: 'Biblioteca -  IFRN CNAT',
    descricao: 'Sala de Estudos.',
    categorias: ['Aprendizado']
  },
  {
    titulo: 'Sala 02',
    local: 'Biblioteca -  IFRN CNAT',
    descricao: 'Sala de Estudos.',
    categorias: ['Aprendizado']
  },
  {
    titulo: 'Sala 03',
    local: 'Biblioteca -  IFRN CNAT',
    descricao: 'Sala de Estudos.',
    categorias: ['Aprendizado']
  },
    {
    titulo: 'Sala 04',
    local: 'Biblioteca -  IFRN CNAT',
    descricao: 'Sala de Estudos.',
    categorias: ['Aprendizado']
  },
    {
    titulo: 'Sala 05',
    local: 'Biblioteca -  IFRN CNAT',
    descricao: 'Sala de Estudos.',
    categorias: ['Aprendizado']
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
  <apresentacaopage :url="apr_biblioteca" descricao=" As bibliotecas do IFRN CNAT (Campus Natal-Central) são espaços acadêmicos destinados a apoiar estudantes, professores, pesquisadores e funcionários nas atividades de estudo, pesquisa e extensão.
  
  Elas funcionam como centros de informação, conhecimento e cultura dentro do Instituto Federal do Rio Grande do Norte (IFRN), oferecendo acervo físico e acesso a recursos digitais para o desenvolvimento acadêmico.." />
  
  <objetivos :titulos="['Conhecimento', 'Aprendizado', 'Pesquisa']" :descricoes="['A biblioteca do IFRN CNAT oferece um amplo acervo físico e digital, apoiando o aprendizado, a pesquisa e o desenvolvimento acadêmico dos estudantes e servidores.', 'Ela funciona como suporte essencial às atividades de ensino, fornecendo materiais atualizados, espaços de estudo e auxílio à pesquisa em diversas áreas do conhecimento.', 'Além do estudo técnico, a biblioteca incentiva a leitura crítica, a autonomia intelectual e a formação cidadã da comunidade acadêmica.']" :urls="[aprender, educacao, Reading]"/>


  <section id="laboratorios" class="laboratorios-section">
    <div class="content-wrapper">
      <h3>Biblioteca</h3>
      <Carrossel 
        :eventos="bib" 
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