// Definición de requisitos y a qué ramos abre cada uno.
// Para hacer rápido el desbloqueo, definimos un mapa de dependencias (quién depende de quién)

const dependencias = {
  "Química General": [
    "Bioquímica",
    "Evaluación de Ciclo Inicial",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Biología Celular": [
    "Histología",
    "Evaluación de Ciclo Inicial",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Zoología": [
    "Parasitología",
    "Evaluación de Ciclo Inicial",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Inglés I": [
    "Inglés I (2do)",
    "Evaluación de Ciclo Inicial",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Ecología": [
    "Evaluación de Ciclo Inicial",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Rol del Médico Veterinario": [
    "Evaluación de Ciclo Inicial",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],

  "Bioquímica": [
    "Evaluación de Ciclo Inicial",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Histología": [
    "Embriología",
    "Patología General",
    "Evaluación de Ciclo Inicial",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Anatomía Animal I": [
    "Anatomía Animal II",
    "Evaluación de Ciclo Inicial",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Zootecnia": [
    "Nutrición y Alimentación",
    "Evaluación de Ciclo Inicial",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Etología y Bienestar Animal": [
    "Evaluación de Ciclo Inicial",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Electivo Antropológico Cristiano": [
    "Evaluación de Ciclo Inicial",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],

  "Fisiología Animal I": [
    "Fisiología Animal II",
    "Fisiopatología I",
    "Farmacología",
    "Evaluación de Ciclo Inicial",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Embriología": [
    "Evaluación de Ciclo Inicial",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Anatomía Animal II": [
    "Evaluación de Ciclo Inicial",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Microbiología General": [
    "Evaluación de Ciclo Inicial",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Reproducción y Genética": [
    "Evaluación de Ciclo Inicial",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Inglés I (2do)": [
    "Evaluación de Ciclo Inicial",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Electivo Diversidad I": [
    "Evaluación de Ciclo Inicial",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],

  "Fisiología Animal II": [
    "Evaluación de Ciclo Inicial",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Patología General": [
    "Evaluación de Ciclo Inicial",
    "Semiotecnia",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Nutrición y Alimentación": [
    "Producción de Aves y Cerdos",
    "Producción de Rumiantes Menores",
    "Producción Bovina",
    "Evaluación de Ciclo Inicial",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Epidemiología": [
    "Evaluación de Ciclo Inicial",
    "Vigilancia Epidemiológica",
    "Gestión Ambiental",
    "Tecnología de Alimentos e Inocuidad",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Contexto Social": [
    "Negocios y Emprendimiento",
    "Evaluación de Ciclo Inicial",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
    "Desarrollo Rural",
  ],
  "Parasitología": [
    "Evaluación de Ciclo Inicial",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],

  "Fisiopatología I": [
    "Fisiopatología II",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Farmacología": [
    "Anestesiología y Manejo del Dolor",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Enfermedades Infecciosas": [
    "Medicina de Pequeños Animales",
    "Medicina de Rumiantes",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Producción de Aves y Cerdos": [
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
    "Proyecto Productivo",
  ],
  "Producción de Rumiantes Menores": [
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
    "Proyecto Productivo",
  ],
  "Electivo Teológico": [
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Evaluación de Ciclo Inicial": [
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],

  "Fisiopatología II": [
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Ictiopatología": [
    "Producción Acuícola",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Producción Bovina": [
    "Tecnología de Alimentos e Inocuidad",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
    "Proyecto Productivo",
  ],
  "Negocios y Emprendimiento": [
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
    "Desarrollo Rural",
  ],
  "Semiotecnia": [
    "Técnicas Diagnósticas",
    "Anestesiología y Manejo del Dolor",
    "Metodología de Investigación",
    "Electivo Disciplinar I",
    "Electivo Disciplinar II",
  ],
  "Electivo Diversidad II": [
    "Metodología de Investigación",
  ],

  "Medicina de Pequeños Animales": [
    "Internado Pequeños Animales I",
    "Metodología de Investigación",
  ],
  "Técnicas Diagnósticas": [
    "Metodología de Investigación",
  ],
  "Anestesiología y Manejo del Dolor": [
    "Cirugía I",
    "Metodología de Investigación",
  ],
  "Producción Acuícola": [
    "Metodología de Investigación",
    "Proyecto Productivo",
  ],
  "Vigilancia Epidemiológica": [
    "Medicina de la Conservación",
    "Salud Pública",
    "Metodología de Investigación",
  ],
  "Gestión Ambiental": [
    "Metodología de Investigación",
  ],

  "Medicina de Rumiantes": [
    "Internado Animales Mayores I",
  ],
  "Medicina de Equinos": [
    "Internado Animales Mayores I",
  ],
  "Cirugía I": [
    "Cirugía II",
  ],

  // Los últimos sin dependencias
  "Metodología de Investigación": [],
  "Tecnología de Alimentos e Inocuidad": [],
  "Electivo Disciplinar I": [],
  "Internado Pequeños Animales I": [
    "Internado Pequeños Animales II",
  ],
  "Proyecto Productivo": [],
  "Internado Animales Mayores I": [
    "Internado Animales Mayores II",
  ],
  "Cirugía II": [],
  "Desarrollo Rural": [],
  "Electivo Diversidad III": [],
  "Internado Pequeños Animales II": [],
  "Internado Animales Mayores II": [],
  "Salud Pública": [],
  "Medicina de la Conservación": [],
  "Ética Profesional": [],
  "Electivo Disciplinar II": [],
};

// Guardamos el estado aprobado en localStorage para persistencia
const STORAGE_KEY = "malla-aprobados";

document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".ramo");

  // Cargamos estado previo
  let aprobados = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  // Función para guardar estado
  function guardarEstado() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(aprobados));
  }

  // Función para actualizar botones desbloqueados segun requisitos aprobados
  function actualizarDesbloqueados() {
    // Empezamos con desbloqueados vacíos excepto los del primer semestre
    botones.forEach((btn) => {
      const nombre = btn.dataset.nombre;
      if (aprobados.includes(nombre)) {
        btn.classList.add("aprobado");
        btn.classList.remove("bloqueado");
        btn.classList.add("desbloqueado");
        btn.disabled = false;
      } else {
        btn.classList.remove("aprobado");
      }
    });

    // Desbloqueamos aquellos que tienen TODOS sus requisitos aprobados
    botones.forEach((btn) => {
      const nombre = btn.dataset.nombre;
      if (!aprobados.includes(nombre)) {
        // Buscamos los ramos que abren este ramo
        // Si hay al menos 1 requisito no aprobado, bloqueamos
        let requisitosAprobados = true;

        // Para saber los requisitos, buscamos todos los ramos que abren este ramo
        // Pero solo tenemos mapa dependencias del ramo->abre. Necesitamos el inverso.
        // Construimos un mapa inverso (ramo -> lista de requisitos)
      }
    });

    // Construimos mapa inverso (ramo -> requisitos)
    const requisitosPorRamo = {};

    // Inicializamos vacío para todos
    botones.forEach((btn) => {
      requisitosPorRamo[btn.dataset.nombre] = [];
    });

    // Llenamos la lista con base en dependencias
    for (const [ramo, abreLista] of Object.entries(dependencias)) {
      abreLista.forEach((abreRamo) => {
        if (requisitosPorRamo[abreRamo]) {
          requisitosPorRamo[abreRamo].push(ramo);
        }
      });
    }

    // Ahora sí, evaluamos cada ramo
    botones.forEach((btn) => {
      const nombre = btn.dataset.nombre;

      if (!aprobados.includes(nombre)) {
        const reqs = requisitosPorRamo[nombre] || [];

        if (reqs.length === 0) {
          // No tiene requisitos, desbloqueado
          btn.classList.remove("bloqueado");
          btn.classList.add("desbloqueado");
          btn.disabled = false;
        } else {
          // Si TODOS los requisitos están aprobados, desbloqueado
          const todosAprobados = reqs.every((r) => aprobados.includes(r));
          if (todosAprobados) {
            btn.classList.remove("bloqueado");
            btn.classList.add("desbloqueado");
            btn.disabled = false;
          } else {
            btn.classList.add("bloqueado");
            btn.classList.remove("desbloqueado");
            btn.disabled = true;
          }
        }
      }
    });
  }

  // Inicializamos el estado visual al cargar
  actualizarDesbloqueados();

  botones.forEach((btn) => {
    btn.addEventListener("click", () => {
      const nombre = btn.dataset.nombre;

      if (aprobados.includes(nombre)) {
        // Si ya estaba aprobado, al volver a clickear lo desaprueba
        aprobados = aprobados.filter((r) => r !== nombre);
      } else {
        aprobados.push(nombre);
      }

      guardarEstado();
      actualizarDesbloqueados();
    });
  });
});
