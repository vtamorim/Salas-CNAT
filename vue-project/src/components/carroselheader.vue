<template>
  <div class="carousel-container">
    <div class="carousel-wrapper">
        <img :src="mano[index].url" :alt="mano[index].name" class="carousel-image"  />
    </div>
      <div class="carousel-overlay">
        <h2>Agendar Salas CNAT</h2>
        <p>Agende locais no IFRN pra fazer o L E várias outras coisas legais eu acho</p>
      </div>
      


    <div class="carousel-dots-wrapper">
      <ol class="carousel-dots">
        <li
          v-for="(_, i) in mano"
          :key="i"
          :class="{ active: i === index }"
          @click="goToSlide(i)"
          class="dot"
        ></li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import img1 from '@/assets/sala_aula.png'
import img2 from '@/assets/quadra.png'
import img3 from '@/assets/biblio.png'
import img4 from '@/assets/laboratorio.png'
const props = defineProps({
  currentPage: { type: String, default: null }
})

const route = useRoute()

const pageKey = computed(() => {
  const name = route.name ?? props.currentPage ?? 'home'
  return typeof name === 'string' ? name : String(name)
})



const currentTitle = computed(() => titles[pageKey.value] || titles.home)


const mano = [
  { name: "img1", url : img1},
  { name: "img2", url :  img2},
  { name: "img3", url : img3},
  { name: "img4", url : img4 }
]

const index = ref(0)
let interval = null

const nextSlide = () => {
  index.value = (index.value + 1) % mano.length
  resetInterval()
}

const prevSlide = () => {
  index.value = (index.value - 1 + mano.length) % mano.length
  resetInterval()
}

const goToSlide = (i) => {
  index.value = i
  resetInterval()
}

const resetInterval = () => {
  clearInterval(interval)
  startAutoPlay()
}

const startAutoPlay = () => {
  interval = setInterval(() => {
    index.value = (index.value + 1) % mano.length
  }, 2500)
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  clearInterval(interval)
})


</script>

<style scoped>
  
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');


*{
  font-family: 'Poppins',sans-serif;
}
  @keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}

.carousel-container {
  width: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  margin-left: calc(-50vw + 50%);
  overflow: hidden;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  height: clamp(220px, 35vh, 520px);
}

.carousel-image {
  width: 100%;
  height: 100%;
  display: block;
  animation: fadeIn 0.6s ease-in-out;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.6);
}


.carousel-overlay {
  position: absolute;
  top: 0;
  left: 52%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100%;
  display: flex;
  color:white;
  justify-content: center;
  pointer-events: none;
  flex-direction:column;
  max-width: 1400px;
  padding-left: clamp(0.5rem, 3vw, 2.5rem);
}

.carousel-title {
  color: #ffffff;
  font-size: clamp(1.1rem, 3.6vw, 2.6rem);
  margin: 0;
  text-shadow: 0 6px 18px rgba(0,0,0,0.55);
  max-width: 70%;
  position: relative;
  line-height: 1.2;
  pointer-events: none;
  opacity: 0;
  animation: titleIn 0.8s ease-out 0.2s forwards;
  padding-right: 0%;
  word-wrap: break-word;
}

/* Camada preta semitransparente sobre a imagem */
.carousel-overlay::before{
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
}

.carousel-title{ 
  z-index: 2; 
}

@keyframes titleIn {
  to { 
    transform: translateY(0); 
    opacity: 1; 
  }
}

/* Indicadores (dots) */
.carousel-dots-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 1400px;
}

.carousel-dots {
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #d1d5db;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.dot:hover {
  background: #9ca3af;
  transform: scale(1.2);
}

.dot.active {
  background: #31BF81;
  animation: pulse 0.6s ease-in-out;
  width: 32px;
  border-radius: 6px;
}

/* Mobile - Extra Small */
@media (max-width: 480px) {

  .carousel-wrapper {
    height: clamp(180px, 25vh, 250px);
  }

  .carousel-overlay {
    padding-left: clamp(1rem, 4vw, 1.5rem);
    padding-right: clamp(1rem, 4vw, 1.5rem);
  }

  .carousel-title {
    font-size: clamp(0.95rem, 3vw, 1.3rem);
    max-width: 95%;
    text-align: left;
    line-height: 1.1;
  }

  .carousel-dots {
    gap: 8px;
    margin: 15px 0 0;
    padding: 0 1rem;
  }

  .dot {
    width: 8px;
    height: 8px;
  }

  .dot.active {
    width: 20px;
  }
}

/* Tablet - Small devices */
@media (max-width: 768px) {
  .carousel-wrapper {
    height: clamp(200px, 30vh, 360px);
  }

  .carousel-overlay {
    padding-left: clamp(1rem, 3vw, 2rem);
    justify-content: flex-start;
  }

  .carousel-title {
    font-size: clamp(1rem, 3.2vw, 2rem);
    max-width: 85%;
  }

  .carousel-dots {
    gap: 10px;
    margin: 18px 0 0;
  }

  .dot {
    width: 10px;
    height: 10px;
  }

  .dot.active {
    width: 28px;
  }
}

/* Medium devices */
@media (max-width: 900px) {
  .carousel-wrapper {
    height: clamp(220px, 32vh, 400px);
  }

  .carousel-title {
    font-size: clamp(1.1rem, 3.5vw, 2.2rem);
    max-width: 85%;
  }
}

/* Desktop and up */
@media (min-width: 901px) {
  .carousel-wrapper {
    height: clamp(300px, 40vh, 520px);
  }

  .carousel-title {
    max-width: 70%;
  }
}
</style>