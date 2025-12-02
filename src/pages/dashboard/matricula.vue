
<template>
  <div class="matricula">
    <h2>Gestión de Matrícula</h2>
    <p>Control total del proceso de matrícula escolar</p>

    <div class="summary-cards">
      <div class="summary-card">
        <div class="icon">Checklist</div>
        <div class="value">1,234</div>
        <div class="label">Matriculados</div>
      </div>
      <div class="summary-card warning">
        <div class="icon">Warning</div>
        <div class="value">23</div>
        <div class="label">Pendientes</div>
      </div>
      <div class="summary-card success">
        <div class="icon">Check</div>
        <div class="value">98.1%</div>
        <div class="label">Tasa de Cobertura</div>
      </div>
    </div>

    <div class="matricula-table">
      <h3>Matrículas Recientes</h3>
      <table>
        <thead>
          <tr>
            <th>Estudiante</th>
            <th>Grado</th>
            <th>Fecha</th>
            <th>Monto</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="m in matriculas" :key="m.id">
            <td>{{ m.estudiante }}</td>
            <td>{{ m.grado }}</td>
            <td>{{ m.fecha }}</td>
            <td>{{ m.monto }}</td>
            <td><span class="status" :class="m.estado">{{ m.estado }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const matriculas = ref([
  { id: 1, estudiante: 'Luis Mendoza', grado: '11°A', fecha: '05 Nov', monto: '$850', estado: 'pagado' },
  { id: 2, estudiante: 'Sofía Vargas', grado: '9°B', fecha: '04 Nov', monto: '$850', estado: 'pendiente' },
  { id: 3, estudiante: 'Diego Castro', grado: '10°A', fecha: '03 Nov', monto: '$850', estado: 'pagado' },
  { id: 4, estudiante: 'Valeria Ortiz', grado: '11°B', fecha: '02 Nov', monto: '$425', estado: 'parcial' }
])
</script>

<style scoped>
.matricula {
  font-family: 'Segoe UI', sans-serif;
  padding: 10px;
}

.matricula h2 {
  color: #1a3a6e;
  margin-bottom: 8px;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.matricula p {
  color: #5a7ba1;
  margin-bottom: 28px;
}

.summary-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}

.summary-card {
  background: white;
  padding: 24px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(26, 58, 110, 0.1);
  border: 1px solid #e1e8f0;
  transition: all 0.3s ease;
}

.summary-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(26, 58, 110, 0.18);
}

.summary-card.warning { border-left: 5px solid #ff9f43; }
.summary-card.success { border-left: 5px solid #28a745; }

.summary-card .icon {
  font-size: 2.2em;
  margin-bottom: 12px;
}

.summary-card .value {
  font-size: 2em;
  font-weight: 700;
  color: #1a3a6e;
  margin-bottom: 6px;
}

.summary-card .label {
  color: #7a9cc0;
  font-size: 0.95rem;
}

.matricula-table {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(26, 58, 110, 0.1);
}

.matricula-table h3 {
  padding: 20px;
  margin: 0;
  background: #f8fbff;
  color: #1a3a6e;
  font-weight: 600;
  border-bottom: 1px solid #e1e8f0;
}

table { width: 100%; border-collapse: collapse; }
th { text-align: left; padding: 14px 20px; background: #f1f5f9; color: #5a7ba1; font-weight: 600; }
td { padding: 16px 20px; border-bottom: 1px solid #f0f4f8; }
tr:hover { background: #f8fbff; }

.status.pagado { background: rgba(40, 167, 69, 0.15); color: #28a745; }
.status.pendiente { background: rgba(255, 159, 67, 0.15); color: #ff9f43; }
.status.parcial { background: rgba(74, 144, 226, 0.15); color: #4a90e2; }
.status { padding: 4px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: 600; }
</style>



