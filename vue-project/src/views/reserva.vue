<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'


interface Laboratorio {
  titulo: string;
  local: string;
  descricao: string;
}

const route = useRoute()
const router = useRouter()


const laboratoriosDB: Laboratorio[] = [
  { titulo: 'Laboratório de Informática', local: 'Bloco A - Sala 102', descricao: 'Computadores de alto desempenho.' },
  { titulo: 'Laboratório de Química', local: 'Bloco B - Sala 204', descricao: 'Bancadas e vidrarias.' },
  { titulo: 'Laboratório de Física', local: 'Bloco C - Sala 101', descricao: 'Mecânica e óptica.' },
  { titulo: 'Quadra Poliesportiva', local: 'Ginásio', descricao: 'Esportes gerais.' },
]


const form = ref({
  nome: '',
  matricula: '',
  email: '',
  motivo: '',
  data: new Date().toISOString().split('T')[0],
  horario: ''
})

const reservasSalvas = ref<any[]>([])
const mostrarHorarios = ref(false)


const labAtual = computed(() => {
  const nomeLab = route.query.lab
  return (laboratoriosDB.find(l => l.titulo === nomeLab) || laboratoriosDB[0]) as Laboratorio
})


onMounted(() => {
  const dados = localStorage.getItem('lab_reservas')
  if (dados) reservasSalvas.value = JSON.parse(dados)
})


const horariosBase = [
  { label: '07:00 - 08:40', turno: 'Manhã' },
  { label: '08:50 - 10:30', turno: 'Manhã' },
  { label: '10:40 - 12:20', turno: 'Manhã' },
  { label: '13:00 - 14:40', turno: 'Tarde' },
  { label: '14:50 - 16:30', turno: 'Tarde' },
  { label: '16:40 - 18:20', turno: 'Tarde' },
  { label: '19:00 - 20:40', turno: 'Noite' },
  { label: '20:50 - 22:30', turno: 'Noite' },
]

const horariosEstado = computed(() => {
  return horariosBase.map(h => {
    const estaOcupado = reservasSalvas.value.some(reserva => 
      reserva.lab === labAtual.value.titulo && 
      reserva.data === form.value.data &&
      reserva.horario === h.label
    )
    return {
      ...h,
      ocupado: estaOcupado,
      selecionado: form.value.horario === h.label
    }
  })
})


const toggleHorarios = () => {
  mostrarHorarios.value = !mostrarHorarios.value
}

const selecionarHorario = (item: any) => {
  if (item.ocupado) return
  form.value.horario = item.label
  mostrarHorarios.value = false
}

const salvarReserva = () => {
  if (!form.value.nome || !form.value.matricula || !form.value.horario) {
    alert('Preencha os campos obrigatórios.')
    return
  }
  const novaReserva = {
    id: Date.now(),
    lab: labAtual.value.titulo,
    ...form.value
  }
  reservasSalvas.value.push(novaReserva)
  localStorage.setItem('lab_reservas', JSON.stringify(reservasSalvas.value))
  alert('Agendamento Confirmado!')
  router.push('/')
}

const voltar = () => router.back()

watch(() => form.value.data, () => {
  form.value.horario = ''
  mostrarHorarios.value = false
})
</script>

<template>
  <div class="page-background">
    
    <div class="mobile-frame">
      
      <header class="header">
        <button @click="voltar" class="btn-icon">←</button>
        <h1>Nova Reserva</h1>
        <div style="width: 24px;"></div>
      </header>

      <main class="content">
        
        <div class="info-card">
          <span class="lab-tag">AMBIENTE</span>
          <h2>{{ labAtual.titulo }}</h2>
          <p>{{ labAtual.local }}</p>
        </div>

        <form @submit.prevent="salvarReserva" class="form-vertical">
          
          <div class="form-group">
            <label>Data</label>
            <input type="date" v-model="form.data" class="input-modern" />
          </div>

          <div class="form-group">
            <label>Horário</label>
            
            <div class="accordion-wrapper">
              <button type="button" class="accordion-trigger" @click="toggleHorarios" :class="{ 'active': mostrarHorarios }">
                <span v-if="form.horario">{{ form.horario }}</span>
                <span v-else class="placeholder">Toque para selecionar</span>
                <span class="chevron" :class="{ 'rotate': mostrarHorarios }">▼</span>
              </button>

              <transition name="slide">
                <div v-if="mostrarHorarios" class="accordion-content">
                  <div class="horarios-grid">
                    <div 
                      v-for="h in horariosEstado" 
                      :key="h.label"
                      class="time-option"
                      :class="{ 'ocupado': h.ocupado, 'selected': h.selecionado }"
                      @click="selecionarHorario(h)"
                    >
                      <span class="time">{{ h.label }}</span>
                      <span class="status">{{ h.ocupado ? 'Reservado' : 'Livre' }}</span>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>

          <div class="form-group">
            <label>Nome Completo</label>
            <input v-model="form.nome" type="text" placeholder="Seu nome" class="input-modern" required />
          </div>

          <div class="form-group">
            <label>Matrícula</label>
            <input v-model="form.matricula" type="text" placeholder="2023..." class="input-modern" required />
          </div>

          <div class="form-group">
            <label>Motivo</label>
            <input v-model="form.motivo" type="text" placeholder="Estudo, Trabalho..." class="input-modern" required />
          </div>

          <button type="submit" class="btn-confirmar" :disabled="!form.horario">
            Confirmar Agendamento
          </button>

        </form>

      </main>
    </div> </div> </template>

<style scoped>



.page-background {
  min-height: 100vh;
  background-color: #f2f4f6;
  display: flex;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  color: #333;
}


.mobile-frame {
  width: 100%;
  max-width: 480px; 
  background-color: #ffffff;
  min-height: 100vh;
  box-shadow: 0 0 20px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  position: relative;
}


.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: white;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  z-index: 100;

  width: 100%; 
}

.header h1 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
}

.btn-icon {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 4px;
}


.content {
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}


.info-card {
  text-align: center;
  margin-bottom: 10px;
}

.lab-tag {
  font-size: 0.7rem;
  font-weight: 700;
  color: #3A7259;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: rgba(58, 114, 89, 0.1);
  padding: 4px 8px;
  border-radius: 4px;
}

.info-card h2 {
  font-size: 1.5rem;
  margin: 12px 0 4px 0;
  color: #1a1a1a;
}

.info-card p {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}


.form-vertical {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: #444;
  margin-bottom: 8px;
  margin-left: 2px;
}

.input-modern {
  width: 100%;
  padding: 14px;
  background: #f8f9fa;
  border: 1px solid #eee;
  border-radius: 12px;
  font-size: 1rem;
  color: #333;
  transition: all 0.2s;
}

.input-modern:focus {
  background: white;
  border-color: #3A7259;
  outline: none;
  box-shadow: 0 4px 12px rgba(58, 114, 89, 0.1);
}


.accordion-wrapper {
  position: relative;
}

.accordion-trigger {
  width: 100%;
  padding: 16px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s;
}

.accordion-trigger:hover {
  border-color: #3A7259;
}

.accordion-trigger.active {
  border-color: #3A7259;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.placeholder { color: #999; font-size: 0.95rem; }

.chevron {
  font-size: 0.8rem;
  transition: transform 0.3s;
  color: #777;
}

.chevron.rotate {
  transform: rotate(180deg);
}

.accordion-content {
  background: white;
  border: 1px solid #3A7259;
  border-top: none;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  animation: slideDown 0.2s ease-out;
}

.horarios-grid {
  display: flex;
  flex-direction: column; 
}

.time-option {
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background 0.2s;
}

.time-option:last-child {
  border-bottom: none;
}

.time-option:hover {
  background: #f5f9f7;
}

.time-option.selected {
  background: #3A7259;
  color: white;
}
.time-option.selected .status { color: rgba(255,255,255,0.8); }

.time-option.ocupado {
  background: #f0f0f0;
  color: #aaa;
  cursor: not-allowed;
  pointer-events: none;
}

.status {
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 600;
  color: #999;
}


.btn-confirmar {
  margin-top: 10px;
  width: 100%;
  padding: 16px;
  background-color: #3A7259;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.1s, background 0.2s;
}

.btn-confirmar:hover {
  background-color: #2e5c47;
}

.btn-confirmar:active {
  transform: scale(0.98);
}

.btn-confirmar:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>