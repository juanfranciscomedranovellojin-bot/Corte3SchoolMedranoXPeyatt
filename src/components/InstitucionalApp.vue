<template>
  <v-container>
    <!-- Sección de Misión, Visión, Objetivos (sin cambios) -->
    <v-row class="mt-5 mb-5 d-flex justify-center align-stretch">
      <!-- Tarjeta de Misión -->
      <v-col cols="12" md="4" class="d-flex">
        <v-card
          class="mx-auto pa-4 d-flex flex-column"
          max-width="400"
          elevation="6"
          color="surface"
          height="100%"
        >
          <v-card-item>
            <v-card-title class="text-h5 text-primary text-center mb-2">
              <v-icon start icon="mdi-bullseye-arrow"></v-icon>
              Nuestra Misión
            </v-card-title>
          </v-card-item>

          <v-card-text class="text-body-1 text-center flex-grow-1">
            En la Institución Educativa Antonio Nariño, nuestra misión es formar
            ciudadanos íntegros, críticos y comprometidos con el desarrollo
            social, cultural y económico de Montería y Colombia. Fomentamos un
            ambiente de aprendizaje inclusivo y de excelencia académica, donde
            cada estudiante potencia sus talentos y valores.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Tarjeta de Visión -->
      <v-col cols="12" md="4" class="d-flex">
        <v-card
          class="mx-auto pa-4 d-flex flex-column"
          max-width="400"
          elevation="6"
          color="surface"
          height="100%"
        >
          <v-card-item>
            <v-card-title class="text-h5 text-primary text-center mb-2">
              <v-icon start icon="mdi-eye"></v-icon>
              Nuestra Visión
            </v-card-title>
          </v-card-item>

          <v-card-text class="text-body-1 text-center flex-grow-1">
            Para el año 2030, la Institución Educativa Antonio Nariño será
            reconocida como un referente de calidad educativa en la región
            Caribe, destacándose por su innovación pedagógica, el liderazgo de
            sus egresados y su impacto positivo en la comunidad. Aspiramos a ser
            un motor de transformación social.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Tarjeta de Objetivos -->
      <v-col cols="12" md="4" class="d-flex">
        <v-card
          class="mx-auto pa-4 d-flex flex-column"
          max-width="400"
          elevation="6"
          color="surface"
          height="100%"
        >
          <v-card-item>
            <v-card-title class="text-h5 text-primary text-left mb-2">
              <v-icon start icon="mdi-target-variant"></v-icon>
              Nuestros Objetivos
            </v-card-title>
          </v-card-item>

          <v-card-text class="text-body-1 text-left flex-grow-1">
            <ul>
              <li>° Desarrollar competencias académicas de alto nivel.</li>
              <li>° Promover valores éticos y ciudadanos.</li>
              <li>° Estimular el pensamiento crítico y la creatividad.</li>
              <li>° Fomentar la participación activa en la comunidad.</li>
              <li>° Garantizar un ambiente de respeto e inclusión.</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Sección de Línea de Tiempo Mejorada para PC -->
    <v-row class="mt-10 mb-5">
      <v-col cols="12">
        <h2 class="text-h4 text-center text-primary mb-8 font-weight-bold">
          <v-icon class="mr-2" color="primary" icon="mdi-history"></v-icon>
          Nuestra Trayectoria: Un Legado en Montería
        </h2>
      </v-col>
      <v-col cols="12">
        <v-timeline text-align="start" class="timeline-custom">
          <!-- Evento 1: Fundación y Primeros Pasos (Derecha) -->
          <v-timeline-item dot-color="red-lighten-2" size="x-large" elevation="2">
            <template v-slot:opposite>
              <span class="text-h6 font-weight-bold">1950</span><br>
              <span class="text-caption">Fundación</span>
            </template>
            <v-card class="pa-4" elevation="4" color="red-lighten-5">
              <v-card-title class="text-h6 text-red-darken-2 font-weight-bold d-flex align-center">
                <v-icon class="mr-3" color="red-darken-2" icon="mdi-school"></v-icon>
                Fundación del Colegio Antonio Nariño
              </v-card-title>
              <v-card-text class="text-body-2">
                En Montería, Córdoba, se establecen los cimientos de la Institución Educativa Antonio Nariño,
                con la misión de ofrecer una educación de calidad que sentaría las bases para futuras generaciones
                de líderes y profesionales en la región.
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <!-- Evento 2: Primeras Promociones (Izquierda) -->
          <v-timeline-item dot-color="teal-lighten-2" size="x-large" elevation="2" class="text-right">
            <template v-slot:opposite>
              <span class="text-h6 font-weight-bold">1965</span><br>
              <span class="text-caption">Primeros Egresados</span>
            </template>
            <v-card class="pa-4" elevation="4" color="teal-lighten-5">
              <v-card-title class="text-h6 text-teal-darken-2 font-weight-bold d-flex align-center justify-end">
                <span class="order-2 ml-3">Primeras Graduaciones Exitosas</span>
                <v-icon class="order-1" color="teal-darken-2" icon="mdi-account-group"></v-icon>
              </v-card-title>
              <v-card-text class="text-body-2">
                La Institución celebra con orgullo las primeras promociones de bachilleres, marcando un hito
                significativo. Estos egresados demostraron el impacto de una educación de excelencia en la
                sociedad cordobesa.
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <!-- Evento 3: Expansión de Infraestructura (Derecha) -->
          <v-timeline-item dot-color="blue-lighten-2" size="x-large" elevation="2">
            <template v-slot:opposite>
              <span class="text-h6 font-weight-bold">1980</span><br>
              <span class="text-caption">Ampliación</span>
            </template>
            <v-card class="pa-4" elevation="4" color="blue-lighten-5">
              <v-card-title class="text-h6 text-blue-darken-2 font-weight-bold d-flex align-center">
                <v-icon class="mr-3" color="blue-darken-2" icon="mdi-domain"></v-icon>
                Modernización y Nuevos Espacios
              </v-card-title>
              <v-card-text class="text-body-2">
                Para responder al crecimiento de su comunidad estudiantil en Montería, el colegio realiza
                una importante ampliación de sus instalaciones, incluyendo nuevas aulas, laboratorios y áreas
                deportivas, consolidando su infraestructura.
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <!-- Evento 4: Integración Comunitaria (Izquierda) -->
          <v-timeline-item dot-color="orange-lighten-2" size="x-large" elevation="2" class="text-right">
            <template v-slot:opposite>
              <span class="text-h6 font-weight-bold">1995</span><br>
              <span class="text-caption">Compromiso Social</span>
            </template>
            <v-card class="pa-4" elevation="4" color="orange-lighten-5">
              <v-card-title class="text-h6 text-orange-darken-2 font-weight-bold d-flex align-center justify-end">
                <span class="order-2 ml-3">Impacto en la Comunidad de Córdoba</span>
                <v-icon class="order-1" color="orange-darken-2" icon="mdi-handshake"></v-icon>
              </v-card-title>
              <v-card-text class="text-body-2">
                La Institución Educativa Antonio Nariño refuerza su compromiso social con Montería y la región,
                lanzando programas comunitarios que involucran a estudiantes y familias en proyectos
                de desarrollo local.
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <!-- Evento 5: Adopción Tecnológica y Logros (Derecha) -->
          <v-timeline-item dot-color="purple-lighten-2" size="x-large" elevation="2">
            <template v-slot:opposite>
              <span class="text-h6 font-weight-bold">2010</span><br>
              <span class="text-caption">Innovación Educativa</span>
            </template>
            <v-card class="pa-4" elevation="4" color="purple-lighten-5">
              <v-card-title class="text-h6 text-purple-darken-2 font-weight-bold d-flex align-center">
                <v-icon class="mr-3" color="purple-darken-2" icon="mdi-monitor-dashboard"></v-icon>
                Pioneros en Tecnología y Resultados
              </v-card-title>
              <v-card-text class="text-body-2">
                El colegio se consolida como referente tecnológico en Montería, implementando laboratorios
                de vanguardia y programas de bilingüismo. Sus estudiantes logran resultados destacados en
                pruebas académicas a nivel nacional.
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <!-- Evento 6: Presente y Futuro (Izquierda) -->
          <v-timeline-item dot-color="green-lighten-2" size="x-large" elevation="2" class="text-right">
            <template v-slot:opposite>
              <span class="text-h6 font-weight-bold">Actualidad</span><br>
              <span class="text-caption">Visión Futura</span>
            </template>
            <v-card class="pa-4" elevation="4" color="green-lighten-5">
              <v-card-title class="text-h6 text-green-darken-2 font-weight-bold d-flex align-center justify-end">
                <span class="order-2 ml-3">El Legado Continúa y se Proyecta</span>
                <v-icon class="order-1" color="green-darken-2" icon="mdi-chart-line"></v-icon>
              </v-card-title>
              <v-card-text class="text-body-2">
                La Institución Educativa Antonio Nariño de Montería sigue comprometida con la formación de
                ciudadanos críticos y éticos, adaptándose a las necesidades del siglo XXI y proyectándose
                hacia un futuro de constante innovación y excelencia educativa.
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

</script>

<style scoped>

ul {
  list-style: none; 
  padding: 0;
}

li {
  padding-left: 20px; 
  position: relative;
  margin-bottom: 0.5em;
}

li::before {
  content: "";
  display: inline-block;
  width: 8px; 
  height: 8px;
  border-radius: 50%; 
  background-color: var(--v-theme-primary); 
  position: absolute;
  left: 0;
  top: 0.6em; 
}


.v-timeline-item__opposite {
  
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: auto;
  min-width: 80px; 
  text-align: center;
  left: -120px; 
}


.v-timeline-item:nth-child(even) .v-timeline-item__opposite {
  
  left: auto;
  right: -120px; 
}

.v-timeline-item__body {
 
  flex-grow: 1; 
}

.v-timeline-item.text-right .v-card-text {
  text-align: right !important;
}


.v-timeline-item.text-right .v-card-title .v-icon {
  order: 1;
  margin-left: 12px;
  margin-right: 0;
}
.v-timeline-item.text-right .v-card-title span {
  order: 2;
}


.v-timeline {
  padding: 0 20px; 
}

.v-timeline-item {
  margin-bottom: 40px; 
}

.v-card-text.text-body-2 {
  line-height: 1.6; 
}
</style>