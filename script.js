const ramos = [
  // PRIMER AÑO
  // I Semestre
  { semestre: "I Semestre", nombre: "Química General", abre: ["Bioquímica", "Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "I Semestre", nombre: "Biología Celular", abre: ["Histología", "Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "I Semestre", nombre: "Zoología", abre: ["Parasitología", "Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "I Semestre", nombre: "Inglés I", abre: ["Inglés II", "Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "I Semestre", nombre: "Ecología", abre: ["Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "I Semestre", nombre: "Rol del Médico Veterinario", abre: ["Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },

  // II Semestre
  { semestre: "II Semestre", nombre: "Bioquímica", abre: ["Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "II Semestre", nombre: "Histología", abre: ["Embriología", "Patología General", "Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "II Semestre", nombre: "Anatomía Animal I", abre: ["Anatomía Animal II", "Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "II Semestre", nombre: "Zootecnia", abre: ["Nutrición y Alimentación", "Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "II Semestre", nombre: "Etología y Bienestar Animal", abre: ["Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "II Semestre", nombre: "Electivo Antropológico Cristiano", abre: ["Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },

  // SEGUNDO AÑO
  // III Semestre
  { semestre: "III Semestre", nombre: "Fisiología Animal I", abre: ["Fisiología Animal II", "Fisiopatología I", "Farmacología", "Evaluación de Ciclo Inicial", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "III Semestre", nombre: "Embriología", abre: ["Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "III Semestre", nombre: "Anatomía Animal II", abre: ["Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "III Semestre", nombre: "Microbiología General", abre: ["Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "III Semestre", nombre: "Reproducción y Genética", abre: ["Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "III Semestre", nombre: "Inglés II", abre: ["Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "III Semestre", nombre: "Electivo Diversidad I", abre: ["Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },

  // IV Semestre
  { semestre: "IV Semestre", nombre: "Fisiología Animal II", abre: ["Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "IV Semestre", nombre: "Patología General", abre: ["Semiotecnia", "Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "IV Semestre", nombre: "Nutrición y Alimentación", abre: ["Producción de Aves y Cerdos", "Producción de Rumiantes Menores", "Producción Bovina", "Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "IV Semestre", nombre: "Epidemiología", abre: ["Vigilancia Epidemiológica", "Gestión Ambiental", "Tecnología de Alimentos e Inocuidad", "Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "IV Semestre", nombre: "Contexto Social", abre: ["Negocios y Emprendimiento", "Desarrollo Rural", "Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "IV Semestre", nombre: "Parasitología", abre: ["Evaluación de Ciclo Inicial", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },

  // TERCER AÑO
  // V Semestre
  { semestre: "V Semestre", nombre: "Fisiopatología I", abre: ["Fisiopatología II", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "V Semestre", nombre: "Farmacología", abre: ["Anestesiología y Manejo del Dolor", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "V Semestre", nombre: "Enfermedades Infecciosas", abre: ["Medicina de Pequeños Animales", "Medicina de Rumiantes", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "V Semestre", nombre: "Producción de Aves y Cerdos", abre: ["Proyecto Productivo", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "V Semestre", nombre: "Producción de Rumiantes Menores", abre: ["Proyecto Productivo", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "V Semestre", nombre: "Electivo Teológico", abre: ["Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "V Semestre", nombre: "Evaluación de Ciclo Inicial", abre: ["Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },

  // VI Semestre
  { semestre: "VI Semestre", nombre: "Fisiopatología II", abre: ["Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "VI Semestre", nombre: "Ictiopatología", abre: ["Producción Acuícola", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "VI Semestre", nombre: "Producción Bovina", abre: ["Proyecto Productivo", "Tecnología de Alimentos e Inocuidad", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "VI Semestre", nombre: "Negocios y Emprendimiento", abre: ["Desarrollo Rural", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "VI Semestre", nombre: "Semiotecnia", abre: ["Técnicas Diagnósticas", "Anestesiología y Manejo del Dolor", "Metodología de Investigación", "Electivo Disciplinar I", "Electivo Disciplinar II"] },
  { semestre: "VI Semestre", nombre: "Electivo Diversidad II", abre: ["Metodología de Investigación"] },

  // CUARTO AÑO
  // VII Semestre
  { semestre: "VII Semestre", nombre: "Medicina de Pequeños Animales", abre: ["Internado Pequeños Animales I", "Metodología de Investigación"] },
  { semestre: "VII Semestre", nombre: "Técnicas Diagnósticas", abre: ["Metodología de Investigación"] },
  { semestre: "VII Semestre", nombre: "Anestesiología y Manejo del Dolor", abre: ["Cirugía I", "Metodología de Investigación"] },
  { semestre: "VII Semestre", nombre: "Producción Acuícola", abre: ["Proyecto Productivo", "Metodología de Investigación"] },
  { semestre: "VII Semestre", nombre: "Vigilancia Epidemiológica", abre: ["Salud Pública", "Medicina de la Conservación", "Metodología de Investigación"] },
  { semestre: "VII Semestre", nombre: "Gestión Ambiental", abre: ["Metodología de Investigación"] },

  // VIII Semestre
  { semestre: "VIII Semestre", nombre: "Medicina de Rumiantes", abre: ["Internado Animales Mayores I"] },
  { semestre: "VIII Semestre", nombre: "Medicina de Equinos", abre: ["Internado Animales Mayores I"] },
  { semestre: "VIII Semestre", nombre: "Cirugía I", abre: ["Cirugía II"] },
  { semestre: "VIII Semestre", nombre: "Metodología de Investigación" },
  { semestre: "VIII Semestre", nombre: "Tecnología de Alimentos e Inocuidad" },
  { semestre: "VIII Semestre", nombre: "Electivo Disciplinar I" },

  // QUINTO AÑO
  // IX Semestre
  { semestre: "IX Semestre", nombre: "Internado Pequeños Animales I", abre: ["Internado Pequeños Animales II"] },
  { semestre: "IX Semestre", nombre: "Proyecto Productivo" },
  { semestre: "IX Semestre", nombre: "Internado Animales Mayores I", abre: ["Internado Animales Mayores II"] },
  { semestre: "IX Semestre", nombre: "Cirugía II" },
  { semestre: "IX Semestre", nombre: "Desarrollo Rural" },
  { semestre: "IX Semestre", nombre: "Electivo Diversidad III" },

  // X Semestre
  { semestre: "X Semestre", nombre: "Internado Pequeños Animales II" },
  { semestre: "X Semestre", nombre: "Internado Animales Mayores II" },
  { semestre: "X Semestre", nombre: "Salud Pública" },
  { semestre: "X Semestre", nombre: "Medicina de la Conservación" },
  { semestre: "X Semestre", nombre: "Ética Profesional" },
  { semestre: "X Semestre", nombre: "Electivo Disciplinar II" }
];

// Estado de cada ramo: true = aprobado, false = no aprobado
const estadoRamos = {};

// Inicializar estado de ramos como no aprobados
ramos.forEach(ramo => {
  estadoRamos[ramo.nombre] = false;
});

// Función para verificar si un ramo está desbloqueado (todos sus prerrequisitos aprobados)
function estaDesbloqueado(nombre) {
  // Un ramo está bloqueado si alguno de sus prerrequisitos no está aprobado
  // Para eso, buscamos los ramos que abren a este ramo
  const prerrequisitos = ramos.filter(ramo => ramo.abre && ramo.abre.includes(nombre));
  return prerrequisitos.every(prer => estadoRamos[prer.nombre] === true);
}

// Función para actualizar la visualización de un ramo
function actualizarRamo(nombre) {
  const elemento = document.getElementById(nombre);
  if (!elemento) return;

  if (estadoRamos[nombre]) {
    elemento.classList.add('aprobado');
    elemento.classList.remove('bloqueado');
  } else {
    if (estaDesbloqueado(nombre)) {
      elemento.classList.remove('bloqueado');
    } else {
      elemento.classList.add('bloqueado');
    }
    elemento.classList.remove('aprobado');
  }
}

// Función para desbloquear los ramos que depende del ramo aprobado
function desbloquearDependientes(nombre) {
  const ramo = ramos.find(r => r.nombre === nombre);
  if (!ramo || !ramo.abre) return;

  ramo.abre.forEach(ramoAbierto => {
    if (estaDesbloqueado(ramoAbierto)) {
      const elemento = document.getElementById(ramoAbierto);
      if (elemento) {
        elemento.classList.remove('bloqueado');
      }
    }
  });
}

// Función para manejar click en un ramo
function toggleAprobado(nombre) {
  const elemento = document.getElementById(nombre);
  if (!elemento) return;

  // No permitir aprobar si está bloqueado
  if (elemento.classList.contains('bloqueado')) return;

  // Alternar estado aprobado/no aprobado
  estadoRamos[nombre] = !estadoRamos[nombre];
  actualizarRamo(nombre);

  if (estadoRamos[nombre]) {
    desbloquearDependientes(nombre);
  } else {
    // Si desaprueba, desaprobar y bloquear los dependientes
    ramos.forEach(ramo => {
      if (ramo.abre && ramo.abre.includes(nombre)) {
        estadoRamos[ramo.nombre] = false;
        actualizarRamo(ramo.nombre);
      }
    });
  }
}

// Función para crear tarjetas dinámicamente en el contenedor
function crearTarjetas() {
  const contenedor = document.getElementById('contenedorRamos');
  if (!contenedor) return;

  // Agrupar ramos por semestre
  const semestres = {};
  ramos.forEach(ramo => {
    if (!semestres[ramo.semestre]) semestres[ramo.semestre] = [];
    semestres[ramo.semestre].push(ramo);
  });

  // Vaciar contenedor
  contenedor.innerHTML = '';

  // Crear elementos HTML
  Object.keys(semestres).forEach(semestre => {
    // Crear título semestre
    const tituloSemestre = document.createElement('h2');
    tituloSemestre.textContent = semestre;
    contenedor.appendChild(tituloSemestre);

    // Crear contenedor de ramos
    const divSemestre = document.createElement('div');
    divSemestre.classList.add('semestre');

    semestres[semestre].forEach(ramo => {
      const divRamo = document.createElement('div');
      divRamo.classList.add('ramo');
      divRamo.id = ramo.nombre;
      divRamo.textContent = ramo.nombre;
      divRamo.title = `Abre: ${ramo.abre ? ramo.abre.join(', ') : 'Ninguno'}`;

      // Inicialmente se bloquea si no está desbloqueado
      if (!estaDesbloqueado(ramo.nombre)) {
        divRamo.classList.add('bloqueado');
      }

      // Evento click para toggle aprobado
      divRamo.addEventListener('click', () => toggleAprobado(ramo.nombre));

      divSemestre.appendChild(divRamo);
    });

    contenedor.appendChild(divSemestre);
  });
}

// Inicializar al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  crearTarjetas();
});
