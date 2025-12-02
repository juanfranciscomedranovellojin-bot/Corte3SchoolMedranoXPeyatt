
<template>
  <div class="asignaturas">
    <h2>Gestión de Asignaturas</h2>
    <p>Administra el catálogo de materias y horarios</p>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="icon">Book</div>
        <div class="value">89</div>
        <div class="label">Asignaturas Activas</div>
      </div>
      <div class="stat-card">
        <div class="icon">Teacher</div>
        <div class="value">42</div>
        <div class="label">Docentes Asignados</div>
      </div>
      <div class="stat-card">
        <div class="icon">Schedule</div>
        <div class="value">1,856</div>
        <div class="label">Horas Programadas</div>
      </div>
    </div>

    <div class="asignaturas-list">
      <h3>Asignaturas por Grado</h3>
      <div class="grado-group" v-for="grado in grados" :key="grado.id">
        <div class="grado-header">
          <strong>{{ grado.nombre }}</strong>
          <span>{{ grado.total }} asignaturas</span>
        </div>
        <div class="materias">
          <span v-for="m in grado.materias" :key="m">{{ m }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const grados = ref([
  {
    id: 1,
    nombre: '9° Grado',
    total: 12,
    materias: ['Matemáticas', 'Ciencias', 'Lengua', 'Historia', 'Inglés', 'Arte']
  },
  {
    id: 2,
    nombre: '10° Grado',
    total: 14,
    materias: ['Álgebra', 'Física', 'Literatura', 'Geografía', 'Química', 'Educación Física']
  },
  {
    id: 3,
    nombre: '11° Grado',
    total: 15,
    materias: ['Cálculo', 'Biología', 'Filosofía', 'Economía', 'Informática', 'Música']
  }
])
</script>

<style scoped>
.asignaturas {
  font-family: 'Segoe UI', sans-serif;
  padding: 10px;
}

.asignaturas h2 {
  color: #1a3a6e;
  margin-bottom: 8px;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.asignaturas p {
  color: #5a7ba1;
  margin-bottom: 28px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}

.stat-card {
  background: white;
  padding: 24px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(26, 58, 110, 0.1);
  border: 1px solid #e1e8f0;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(26, 58, 110, 0.18);
}

.stat-card .icon {
  font-size: 2.2em;
  margin-bottom: 12px;
}

.stat-card .value {
  font-size: 2em;
  font-weight: 700;
  color: #1a3a6e;
}

.stat-card .label {
  color: #7a9cc0;
  font-size: 0.95rem;
}

.asignaturas-list {
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(26, 58, 110, 0.1);
}

.asignaturas-list h3 {
  margin: 0 0 20px;
  color: #1a3a6e;
  font-weight: 600;
  padding-bottom: 12px;
  border-bottom: 1px solid #e1e8f0;
}

.grado-group {
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px dashed #e1e8f0;
}

.grado-group:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.grado-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 1.1rem;
}

.grado-header strong {
  color: #1a3a6e;
}

.grado-header span {
  color: #4a90e2;
  font-weight: 600;
  font-size: 0.9rem;
}

.materias {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.materias span {
  background: #f0f7ff;
  color: #4a90e2;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}
</style>

