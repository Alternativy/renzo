// const sectionLinks = document.querySelectorAll('nav a');

// sectionLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         const targetSection = document.querySelector(link.getAttribute('href'));
//         targetSection.scrollIntoView({behavior: 'smooth'});
//     });
// });


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
