<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Scrollbar, Mousewheel, FreeMode, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'

// REMOVIDO: import CardInscricao from './CardInscricao.vue' (Não é necessário importar aqui)


const emit = defineEmits(['select'])


const modules = [Scrollbar, Mousewheel, FreeMode, Navigation]


const props = defineProps({
  eventos: { type: Array, required: true },
  component: { type: Object, required: true },
  // NOVA PROP: Permite definir o estilo do carrossel ('destaque' ou 'inscricao')
  variant: { type: String, default: 'inscricao' } 
})


const device = ref('desktop')

function updateDevice() {
  const w = window.innerWidth
  if (w >= 1200) device.value = 'desktop'
  else if (w >= 768) device.value = 'tablet'
  else device.value = 'mobile'
}

onMounted(() => {
  updateDevice()
  window.addEventListener('resize', updateDevice)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateDevice)
})


const variant = computed(() => props.variant)

const DEVICE_CONFIG = {
  desktop: {
    destaque: { slidesPerView: 4 },
    inscricao: { slidesPerView: 3 },
  },
  tablet: {
    destaque: { slidesPerView: 3 },
    inscricao: { slidesPerView: 3 },
  },
  mobile: {
    destaque: { slidesPerView: 2 },
    inscricao: { slidesPerView: 1.5 },
  },
}


const layoutConfig = computed(() => DEVICE_CONFIG[device.value][variant.value])
const slidesPerView = computed(() => layoutConfig.value.slidesPerView)


const currentIndex = ref(0)
const swiperInstance = ref(null)

function onSlideChange(swiper) {
  currentIndex.value = swiper.activeIndex
  swiperInstance.value = swiper
}

async function goToSlide(index) {
  await nextTick()
  if (swiperInstance.value) {
    swiperInstance.value.slideTo(index, 500)
  }
}

const swiperConfig = computed(() => {
  const baseConfig = {
    modules,
    spaceBetween: variant.value === 'destaque' ? 12 : 20,
    loop: false,
    grabCursor: true,
    mousewheel: { forceToAxis: true },
    on: {
      slideChange: onSlideChange,
    },
  }
  // ... resto da configuração
})

</script>

<template>
  <div class="carrossel-wrapper">
    <div class="viewport-container">
      <swiper
        :modules="modules"
        :slides-per-view="slidesPerView"
        :space-between="variant === 'destaque' ? 12 : 20"
        :loop="false"
        :grab-cursor="true"
        :mousewheel="{ forceToAxis: true }"
        :free-mode-momentum="variant === 'destaque'"
        :centered-slides="variant === 'inscricao'"
        @swiper="(swiper) => { swiperInstance = swiper }"
        @slide-change="onSlideChange"
        :class="{
          'swiper-destaque': variant === 'destaque',
          'swiper-inscricao': variant === 'inscricao',
        }"
      >
        <swiper-slide v-for="(evento, i) in eventos" :key="i">
          <component
            :is="component"
            :evento="evento"
            :class="{ 'card-focus': variant === 'inscricao' }"
            :style="{ cursor: 'pointer' }"
            @click="emit('select', evento)"
          />
        </swiper-slide>
      </swiper>
    </div>

    <div class="carousel-scrollbar">
      <button
        v-for="i in eventos.length"
        :key="i"
        class="scrollbar-index"
        :class="{ active: currentIndex === i - 1 }"
        @click="goToSlide(i - 1)"
        :aria-label="`Ir para card ${i}`"
        :title="`Card ${i} de ${eventos.length}`"
      />
    </div>
  </div>
</template>

<style scoped>
.carrossel-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
}

.viewport-container {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: left;
}

:deep(.swiper) {
  width: 100%;
  overflow: hidden;
  border-radius: 0;
  padding: 1rem 0;
  box-sizing: border-box;
  cursor: grab;
}

:deep(.swiper.swiper-grabbing) {
  cursor: grabbing;
}

:deep(.swiper-wrapper) {
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

:deep(.swiper-slide) {
  height: auto;
  display: flex;
  align-items: center; /* Corrigido de 'left' para 'center' ou 'flex-start' */
  margin-right: 5px;
}

/* ===== ESTILOS ESPECÍFICOS ===== */
.swiper-destaque { width: 100%; }
.swiper-inscricao { width: 100%; }

/* Cards com foco central - escala e transição */
:deep(.swiper-inscricao .swiper-slide) {
  opacity: 0.7;
  transition: opacity 0.4s ease, transform 0.4s ease;
  transform: scale(0.95);
}

:deep(.swiper-inscricao .swiper-slide-active) {
  opacity: 1;
  transform: scale(1.05);
  filter: brightness(1.1);
}

:deep(.swiper-inscricao .swiper-slide-next) {
  opacity: 0.85;
  transform: scale(0.98);
}

/* ===== SCROLLBAR ===== */
.carousel-scrollbar {
  width: 100%;
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  overflow-x: auto;
  overflow-y: hidden;
  border-radius: 10px;
}

.carousel-scrollbar::-webkit-scrollbar { height: 4px; }
.carousel-scrollbar::-webkit-scrollbar-track { background: transparent; }
.carousel-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(11, 81, 63, 0.3);
  border-radius: 10px;
}

.scrollbar-index {
  width: 12px;
  height: 12px;
  min-width: 12px;
  min-height: 12px;
  padding: 0;
  border-radius: 50%;
  border: 2px solid rgba(11, 81, 63, 0.4);
  background-color: rgba(11, 81, 63, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.scrollbar-index:hover {
  background-color: rgba(11, 81, 63, 0.3);
  border-color: #0b513f;
  transform: scale(1.2);
}

.scrollbar-index.active {
  background-color: #0b513f;
  border-color: #0b513f;
  box-shadow: 0 2px 8px rgba(11, 81, 63, 0.4);
  transform: scale(1.3);
}

/* ===== RESPONSIVIDADE ===== */
@media (max-width: 767px) {
  .carrossel-wrapper { gap: 1rem; }
  :deep(.swiper) { padding: 1rem 0; }
  .carousel-scrollbar{ display: none; }
}
</style>