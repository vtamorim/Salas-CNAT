<script setup lang="ts">
import { useRouter } from 'vue-router'

// Definição das Props
const props = defineProps<{
  show: boolean
  content: any 
}>()

const emit = defineEmits(['close'])
const router = useRouter()

const close = () => {
  emit('close')
}

const irParaReserva = () => {
  emit('close')
  router.push('/reserva')
}

const horariosMock = [
  { turno: 'Manhã', horas: ['08:00', '09:00', '10:00', '11:00'] },
  { turno: 'Tarde', horas: ['14:00', '15:00', '16:00'] },
  { turno: 'Noite', horas: ['19:00', '20:00'] }
]
</script>

<template>
  <Transition name="fade">
    <div v-if="show" class="modal-overlay" @click.self="close">
      
      <div class="modal-container">
        
        <button class="btn-close" @click="close" aria-label="Fechar">
          &times;
        </button>

        <div class="modal-header">
          <span class="tag-categoria">{{ props.content?.categorias?.[0] || 'Laboratório' }}</span>
          <h2>{{ props.content?.titulo }}</h2>
          
          <div class="local-wrapper">
            <span class="label-local">LOCAL</span>
            <span class="texto-local">{{ props.content?.local }}</span>
          </div>
        </div>

        <div class="modal-body">
          
          <div class="section">
            <h3>Sobre</h3>
            <p class="descricao">
              {{ props.content?.descricao }}
            </p>
          </div>
          <div class="divider"></div>
          <div class="section">
            <h3>Disponibilidade (Hoje)</h3>
            <div class="horarios-container">
              <div v-for="periodo in horariosMock" :key="periodo.turno" class="turno-row">
                <span class="turno-nome">{{ periodo.turno }}</span>
                <div class="lista-horas">
                  <span v-for="hora in periodo.horas" :key="hora" class="hora-chip">
                    {{ hora }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <div class="contato-info">
            <span>Dúvidas? Entre em contato com a Coordenação</span>
          </div>
          
          <button class="btn-reservar" @click="irParaReserva">
            Reservar Horário
          </button>
        </div>

      </div>
    </div>
  </Transition>
</template>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active .modal-container {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-enter-from .modal-container,
.fade-leave-to .modal-container {
  transform: translateY(10px) scale(0.98);
}


.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4); 
  backdrop-filter: blur(5px);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
}

.modal-container {
  background: #fff;
  width: 100%;
  max-width: 500px; 
  max-height: 85vh;
  border-radius: 12px; 
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 20px 50px rgba(0,0,0,0.1);
  overflow: hidden;
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
}

.btn-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 28px;
  color: white; 
  cursor: pointer;
  line-height: 1;
  opacity: 0.8;
  transition: opacity 0.2s;
  z-index: 10;
}
.btn-close:hover {
  opacity: 1;
}

.modal-header {
  background-color: #3A7259; 
  color: white;
  padding: 40px 32px 32px 32px;
}

.tag-categoria {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  opacity: 0.8;
  margin-bottom: 8px;
}

.modal-header h2 {
  margin: 0 0 16px 0;
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 1.1;
}

.local-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
}

.label-local {
  background: rgba(255,255,255,0.2);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.texto-local {
  font-weight: 500;
  opacity: 0.95;
}


.modal-body {
  padding: 32px;
  overflow-y: auto;
  flex: 1;
}

.section {
  margin-bottom: 28px;
}

.section h3 {
  font-size: 0.85rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
  font-weight: 600;
}

.descricao {
  color: #333;
  line-height: 1.7;
  font-size: 0.95rem;
  font-weight: 400;
}


.equipamentos-lista {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.equip-tag {
  background: #f4f4f4;
  color: #333;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid transparent;
  transition: border-color 0.2s;
}

.equip-tag:hover {
  border-color: #ddd;
}

.divider {
  border-top: 1px solid #eee;
  margin: 10px 0 30px 0;
}


.horarios-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.turno-row {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
}

.turno-nome {
  font-weight: 600;
  color: #333;
  font-size: 0.9rem;
}

.lista-horas {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.hora-chip {
  border: 1px solid #e0e0e0;
  color: #333;
  background: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: default;
  transition: all 0.2s;
}

.hora-chip:hover {
  border-color: #3A7259;
  color: #3A7259;
}


.modal-footer {
  padding: 24px 32px 32px 32px;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-top: 1px solid #f5f5f5;
}

.contato-info {
  text-align: center;
  font-size: 0.8rem;
  color: #999;
}

.btn-reservar {
  width: 100%;
  padding: 16px;
  background-color: #3A7259;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
}

.btn-reservar:hover {
  background-color: #2e5c47;
}

.btn-reservar:active {
  transform: scale(0.99);
}


@media (max-width: 600px) {
  .modal-container {
    height: 100%;
    max-height: 100%;
    border-radius: 0;
    max-width: 100%;
  }
  
  .modal-header {
    padding: 30px 24px 24px 24px;
  }
  
  .modal-body {
    padding: 24px;
  }
}
</style>