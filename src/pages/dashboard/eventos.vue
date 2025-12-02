
<template>
  <div class="eventos">
    <h2>Calendario de Eventos</h2>
    <p>Organiza y visualiza todas las actividades institucionales</p>

    <div class="event-summary">
      <div class="event-card today">
        <div class="icon">Today</div>
        <div class="count">3</div>
        <div class="label">Hoy</div>
      </div>
      <div class="event-card week">
        <div class="icon">Week</div>
        <div class="count">7</div>
        <div class="label">Esta Semana</div>
      </div>
      <div class="event-card month">
        <div class="icon">Month</div>
        <div class="count">18</div>
        <div class="label">Este Mes</div>
      </div>
    </div>

    <div class="event-list">
      <h3>Próximos Eventos</h3>
      <div class="event-item" v-for="e in eventos" :key="e.id">
        <div class="event-date">
          <div class="day">{{ e.dia }}</div>
          <div class="month">{{ e.mes }}</div>
        </div>
        <div class="event-info">
          <h4>{{ e.titulo }}</h4>
          <p>{{ e.hora }} • {{ e.lugar }}</p>
          <span class="tag" :class="e.tipo">{{ e.tipo }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const eventos = ref([
  { id: 1, dia: '10', mes: 'NOV', titulo: 'Feria de Ciencias', hora: '9:00 AM', lugar: 'Auditorio', tipo: 'académico' },
  { id: 2, dia: '12', mes: 'NOV', titulo: 'Día del Estudiante', hora: 'Todo el día', lugar: 'Patio Central', tipo: 'cultural' },
  { id: 3, dia: '15', mes: 'NOV', titulo: 'Capacitación Docente', hora: '2:00 PM', lugar: 'Sala de Juntas', tipo: 'formación' },
  { id: 4, dia: '20', mes: 'NOV', titulo: 'Entrega de Boletas', hora: '8:00 AM', lugar: 'Aulas', tipo: 'académico' }
])
</script>

<style scoped>
.eventos {
  font-family: 'Segoe UI', sans-serif;
  padding: 10px;
}

.eventos h2 {
  color: #1a3a6e;
  margin-bottom: 8px;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.eventos p {
  color: #5a7ba1;
  margin-bottom: 28px;
}

.event-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}

.event-card {
  background: white;
  padding: 24px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(26, 58, 110, 0.1);
  border: 1px solid #e1e8f0;
  transition: all 0.3s ease;
}

.event-card:hover {
  transform: translateY(-5px);
}

.event-card.today { border-left: 5px solid #4a90e2; }
.event-card.week { border-left: 5px solid #667eea; }
.event-card.month { border-left: 5px solid #50c8fc; }

.event-card .icon {
  font-size: 2em;
  margin-bottom: 10px;
}

.event-card .count {
  font-size: 2.2em;
  font-weight: 700;
  color: #1a3a6e;
}

.event-card .label {
  color: #7a9cc0;
  font-size: 0.95rem;
}

.event-list {
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(26, 58, 110, 0.1);
}

.event-list h3 {
  margin: 0 0 20px;
  color: #1a3a6e;
  font-weight: 600;
  padding-bottom: 12px;
  border-bottom: 1px solid #e1e8f0;
}

.event-item {
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px dashed #e1e8f0;
}

.event-item:last-child {
  border-bottom: none;
}

.event-date {
  text-align: center;
  background: #f8fbff;
  padding: 8px;
  border-radius: 12px;
  min-width: 60px;
}

.event-date .day {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a3a6e;
}

.event-date .month {
  font-size: 0.8rem;
  color: #4a90e2;
  text-transform: uppercase;
  font-weight: 600;
}

.event-info h4 {
  margin: 0 0 6px;
  color: #1a3a6e;
  font-size: 1.1rem;
}

.event-info p {
  margin: 0 0 8px;
  color: #7a9cc0;
  font-size: 0.9rem;
}

.tag {
  font-size: 0.75rem;
  padding: 4px 10px;
  border-radius: 12px;
  font-weight: 600;
}

.tag.académico { background: rgba(74, 144, 226, 0.15); color: #4a90e2; }
.tag.cultural { background: rgba(255, 159, 67, 0.15); color: #ff9f43; }
.tag.formación { background: rgba(40, 167, 69, 0.15); color: #28a745; }
</style>
