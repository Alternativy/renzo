// Obtener todos los enlaces de navegación
const enlaces = document.querySelectorAll('nav a');

// Recorrer los enlaces y agregar un evento "click" a cada uno
enlaces.forEach((enlace) => {
  enlace.addEventListener('click', (evento) => {
    // Prevenir el comportamiento por defecto del enlace (scroll)
    evento.preventDefault();
    
    // Obtener el ID de la sección correspondiente al enlace
    const seccionId = enlace.getAttribute('href').substring(1);
    
    // Obtener todas las secciones
    const secciones = document.querySelectorAll('main > div');
    
    // Recorrer las secciones y ocultar todas excepto la correspondiente al enlace
    secciones.forEach((seccion) => {
      if (seccion.getAttribute('id') === seccionId) {
        seccion.classList.remove('oculto');
      } else {
        seccion.classList.add('oculto');
      }
    });
  });
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();

    // Remueve la clase "active" de todos los enlaces
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Agrega la clase "active" al enlace clickeado
    link.classList.add('active');
  });
});
