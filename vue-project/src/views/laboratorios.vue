<script setup lang="ts">
import apresentacaopage from '@/components/apresentacaopage.vue';
import apr_laboratorio from '@/assets/apr_laboratorio.png';
import objetivos from '@/components/objetivos.vue';

import Experiment from '@/assets/Experiment.png';
import Detective from '@/assets/Detective.png';
import Training from '@/assets/Training.png';
</script>

<template>
  <apresentacaopage :url="apr_laboratorio" descricao="  Os laboratórios do IFRN são espaços projetados para a realização de aulas práticas e a realização de trabalhos de conclusão de curso, projetos de pesquisa e extensão.

    Eles desempenham um papel fundamental na formação dos estudantes, permitindo que eles vivenciem a ciência de forma concreta e desenvolvam habilidades como observação, interpretação de resultados e trabalho em equipe.  

   A Coordenação de Laboratórios (Colab) é responsável pela gestão e coordenação dos laboratórios, garantindo que estejam em conformidade com as normas e regulamentos de segurança e funcionamento." />
  
  <objetivos :titulos="['Prática', 'Experiência', 'Preparação']" :descricoes="['O laboratório possibilita que os alunos realizem experimentos e atividades práticas, facilitando a compreensão dos conteúdos teóricos trabalhados em sala de aula.', 'Por meio de experiências, os estudantes desenvolvem o pensamento científico, aprendendo a observar, formular hipóteses, testar ideias e analisar resultados.', 'O uso do laboratório contribui para a formação acadêmica e profissional dos alunos, promovendo contato com equipamentos, normas de segurança e trabalho em equipe.']" :urls="[Experiment, Detective, Training]"/>

 
   <section id="laboratorios" class="laboratorios-section">
    <div class="content-wrapper">
      <h3>Laboratórios</h3>
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