<script setup lang="ts">
import apresentacaopage from '@/components/apresentacaopage.vue';
import apr_laboratorio from '@/assets/apr_laboratorio.png';
import objetivos from '@/components/objetivos.vue';
</script>

<template>
  <apresentacaopage :url="apr_laboratorio" descricao="  Os laboratórios do IFRN são espaços projetados para a realização de aulas práticas e a realização de trabalhos de conclusão de curso, projetos de pesquisa e extensão.
    Eles desempenham um papel fundamental na formação dos estudantes, permitindo que eles vivenciem a ciência de forma concreta e desenvolvam habilidades como observação, interpretação de resultados e trabalho em equipe.  
   A Coordenação de Laboratórios (Colab) é responsável pela gestão e coordenação dos laboratórios, garantindo que estejam em conformidade com as normas e regulamentos de segurança e funcionamento." />
  
  <objetivos :titulos="['Promover a excelência acadêmica', 'Fomentar a pesquisa e inovação', 'Desenvolver competências técnicas']" :descricoes="['Promover a excelência acadêmica através de práticas pedagógicas inovadoras e rigorosas.', 'Fomentar a pesquisa e inovação ao incentivar projetos de pesquisa e extensão.', 'Desenvolver competências técnicas essenciais para o desenvolvimento profissional dos estudantes.']" :urls="['https://via.placeholder.com/300x200?text=Objetivo+1', 'https://via.placeholder.com/300x200?text=Objetivo+2', 'https://via.placeholder.com/300x200?text=Objetivo+3']"/>

 
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