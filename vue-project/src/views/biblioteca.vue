<script setup lang="ts">
import apresentacaopage from '@/components/apresentacaopage.vue';
import apr_biblioteca from '@/assets/apr_biblioteca.png';
import objetivos from '@/components/objetivos.vue';

import Reading from '@/assets/Reading.png';
import educacao from '@/assets/educacao.png';
import aprender from '@/assets/aprender.png';

</script>

<template>
  <apresentacaopage :url="apr_biblioteca" descricao=" As bibliotecas do IFRN CNAT (Campus Natal-Central) são espaços acadêmicos destinados a apoiar estudantes, professores, pesquisadores e funcionários nas atividades de estudo, pesquisa e extensão.
  
  Elas funcionam como centros de informação, conhecimento e cultura dentro do Instituto Federal do Rio Grande do Norte (IFRN), oferecendo acervo físico e acesso a recursos digitais para o desenvolvimento acadêmico.." />
  
  <objetivos :titulos="['Prática', 'Experiência', 'Preparação']" :descricoes="['O laboratório possibilita que os alunos realizem experimentos e atividades práticas, facilitando a compreensão dos conteúdos teóricos trabalhados em sala de aula.', 'Por meio de experiências, os estudantes desenvolvem o pensamento científico, aprendendo a observar, formular hipóteses, testar ideias e analisar resultados.', 'O uso do laboratório contribui para a formação acadêmica e profissional dos alunos, promovendo contato com equipamentos, normas de segurança e trabalho em equipe.']" :urls="[aprender, educacao, Reading]"/>


  <section id="laboratorios" class="laboratorios-section">
    <div class="content-wrapper">
      <h3>Bibliotecas</h3>

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