<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  evento: Laboratorio, 
}>()

interface Laboratorio {
  titulo: string
  descricao: string
  local: string
  categorias?: string[]
  id?: number
  imagem?: string
}

const getPrimeiraCategoria = (categorias?: string[]) => {
  return categorias?.[0] ?? 'Geral'
}

const getIconPath = (categoria: string) => {
  const categoryMap: Record<string, string> = {
    'Palestras': 'palestras.svg',
    'Cultura': 'cultura.svg',
    'Esporte': 'esporte.svg',
    'Tecnologia': 'tecnologia.svg',
    'Saúde': 'saude.svg',
    'Química': 'quimica.svg', 
    'Informática': 'tecnologia.svg'
  }

  const fileName = categoryMap[categoria] || 'default.svg'
  return `/src/assets/images/icons/${fileName}`
}
</script>

<template>
  <div class="card-lab">
    <div class="cardheader">
      <h3>{{ props.evento?.titulo }}</h3>
      
      <div class="local-container">
        <span class="icon-local"></span>
        <p class="local">{{ props.evento?.local }}</p>
      </div>
    </div>

    <div class="cardbody">
      <p class="descricao-texto">
        {{ props.evento?.descricao }}
      </p>
    </div>

    <div class="cardfooter">
      <p>{{ getPrimeiraCategoria(props.evento.categorias) }}</p>
      <img 
        v-if="props.evento.categorias"
        :src="getIconPath(getPrimeiraCategoria(props.evento.categorias))" 
        alt="Ícone" 
        width="24px"
      />
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.card-lab {
  background-image: url('@/assets/images/illustrations/CardInscricoes_background.png');
  background-size: cover;
  background-position: center;
  
  max-width: 420px;
  width: 100%;
  min-height: 280px; 
  
  border-radius: 16px;
  padding: 24px 28px 16px 28px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0.5rem auto;
  
  transition: box-shadow 0.3s, transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: grab;
  font-family: 'Lato', Arial, sans-serif;
  overflow: hidden;
}

.card-lab:active {
  cursor: grabbing;
}


.cardheader {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.cardheader h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #0b513f;
  line-height: 1.2;
  letter-spacing: -0.3px;
}

.local-container {
  display: flex;
  align-items: center;
  gap: 6px;
}

.icon-local {
  font-size: 1rem;
}

.local {
  font-size: 0.95rem;
  color: #555;
  font-weight: 600;
  background-color: rgba(11, 81, 63, 0.1);
  padding: 4px 8px;
  border-radius: 6px;
  display: inline-block;
}


.cardbody {
  flex-grow: 1; 
}

.descricao-texto {
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  font-weight: 400;
  
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}


.cardfooter {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8em;
  

  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding-top: 12px;
  margin-top: auto;
  
  color: #0b513f; 
  font-weight: 600;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .card-lab {
    padding: 20px 20px 14px 20px;
    min-height: auto;
  }

  .cardheader h3 {
    font-size: 1.25rem;
  }

  .descricao-texto {
    font-size: 0.95rem;
    -webkit-line-clamp: 4;
  }
}

@media (max-width: 480px) {
  .cardheader h3 {
    font-size: 1.1rem;
  }
  
  .local {
    font-size: 0.85rem;
  }
}
</style>