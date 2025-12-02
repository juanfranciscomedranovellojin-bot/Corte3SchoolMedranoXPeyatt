
<template>
  <div class="ayuda">
    <h2>Centro de Ayuda</h2>
    <p>Soporte técnico y guías para usuarios del sistema</p>

    <div class="help-grid">
      <div class="help-card" @click="openGuide('registro')">
        <div class="icon">Guide</div>
        <h3>Cómo Registrar Estudiantes</h3>
        <p>Paso a paso para nuevos registros</p>
      </div>
      <div class="help-card" @click="openGuide('matricula')">
        <div class="icon">Payment</div>
        <h3>Proceso de Matrícula</h3>
        <p>Guía completa de pagos y confirmación</p>
      </div>
      <div class="help-card" @click="openChat">
        <div class="icon">Chat</div>
        <h3>Chat en Vivo</h3>
        <p>Habla con un agente ahora</p>
        <span class="online">En línea</span>
      </div>
      <div class="help-card" @click="openFAQ">
        <div class="icon">FAQ</div>
        <h3>Preguntas Frecuentes</h3>
        <p>Respuestas a dudas comunes</p>
      </div>
    </div>

    <div class="contact-info">
      <h3>Contáctanos</h3>
      <div class="contact-item">
        <div class="icon">Email</div>
        <div>soporte@educapro.edu</div>
      </div>
      <div class="contact-item">
        <div class="icon">Phone</div>
        <div>+57 601 234 5678</div>
      </div>
      <div class="contact-item">
        <div class="icon">Schedule</div>
        <div>Lun - Vie: 7:00 AM - 5:00 PM</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const openGuide = (tipo) => alert(`Abriendo guía: ${tipo}`)
const openChat = () => alert('Iniciando chat en vivo...')
const openFAQ = () => alert('Abriendo FAQ...')
</script>

<style scoped>
.ayuda {
  font-family: 'Segoe UI', sans-serif;
  padding: 10px;
}

.ayuda h2 {
  color: #1a3a6e;
  margin-bottom: 8px;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.ayuda p {
  color: #5a7ba1;
  margin-bottom: 28px;
}

.help-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}

.help-card {
  background: white;
  padding: 24px;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(26, 58, 110, 0.1);
  border: 1px solid #e1e8f0;
  position: relative;
}

.help-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 25px rgba(26, 58, 110, 0.18);
}

.help-card .icon {
  font-size: 2.5em;
  margin-bottom: 12px;
  color: #4a90e2;
}

.help-card h3 {
  color: #1a3a6e;
  margin: 0 0 8px;
  font-size: 1.2rem;
}

.help-card p {
  margin: 0;
  color: #7a9cc0;
  font-size: 0.95rem;
}

.online {
  position: absolute;
  top: 16px;
  right: 16px;
  background: #28a745;
  color: white;
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 12px;
  font-weight: 600;
}

.contact-info {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 15px rgba(26, 58, 110, 0.1);
}

.contact-info h3 {
  margin: 0 0 20px;
  color: #1a3a6e;
  font-weight: 600;
  padding-bottom: 12px;
  border-bottom: 1px solid #e1e8f0;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  color: #5a7ba1;
}

.contact-item .icon {
  font-size: 1.3em;
  color: #4a90e2;
}
</style>
