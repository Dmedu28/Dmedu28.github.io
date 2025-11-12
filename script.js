// Esto "observa" cuándo un elemento entra en la pantalla
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Si está en pantalla, le añade la clase 'show'
      entry.target.classList.add("show");
    }
  });
});

// Busca todos los elementos con la clase 'hidden'
const hiddenElements = document.querySelectorAll(".hidden");

// Le dice al observador que "vigile" cada elemento en la terminal
hiddenElements.forEach((el) => observer.observe(el));
// --- EFECTO DE TIPEO EN LA TERMINAL ---

var options = {
  strings: [
    "Hola, soy Aza. <br> Esto es un portafolio digital para poder subir mis proyectos relacionados a la carrera.",
  ],
  typeSpeed: 40, // Velocidad de tipeo
  backSpeed: 20, // Velocidad al borrar
  startDelay: 1000, // Pausa antes de empezar (1 seg)
  loop: false, // No queremos que se repita el texto
  showCursor: false, // El cursor que cree
};

var typed = new Typed("#mi-biografia", options);
// Fin de efecto de terminal
//
// --- EASTER EGG EN EL LOGO ---

// 1. Busca el logo en el HTML
const logo = document.querySelector(".logo");

// 2. Escucha cuando alguien le haga clic
logo.addEventListener("click", () => {
  // 3. Muestra una alerta (o haz lo que quieras)
  alert("¡Easter egg! 🥚");
});

/* --- INICIO: LÓGICA DE MODO CLARO/OSCURO DE LA TERMINAL--- */

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// FUNCIÓN: Aplicar el tema (claro u oscuro)
function aplicarTema(tema) {
  if (tema === "light") {
    body.classList.add("light-mode");
    themeToggle.innerHTML = "☀️"; // Cambia el ícono a solecito
  } else {
    body.classList.remove("light-mode");
    themeToggle.innerHTML = "🌙"; // Cambia el ícono a luna
  }
}

// 1. Revisa si el usuariotiene una preferencia de tema guardada
const temaGuardado = localStorage.getItem("theme");

if (temaGuardado) {
  aplicarTema(temaGuardado);
}

// 2. Cuando el usuario hace clic en el botón
themeToggle.addEventListener("click", () => {
  let nuevoTema;

  // Si ya está en modo claro, cambia a oscuro
  if (body.classList.contains("light-mode")) {
    nuevoTema = "dark";
  } else {
    // Si está en modo oscuro, cambia a claro
    nuevoTema = "light";
  }

  // Aplica el nuevo tema
  aplicarTema(nuevoTema);

  // Guarda la preferencia en el navegador
  if (nuevoTema === "light") {
    localStorage.setItem("theme", "light");
  } else {
    // Si es 'dark', quita la preferencia (es nuestro default)
    localStorage.removeItem("theme");
  }
});

/* --- FIN: LÓGICA DE MODO CLARO/OSCURO --- */
