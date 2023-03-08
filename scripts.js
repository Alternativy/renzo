const sectionLinks = document.querySelectorAll('nav a');

sectionLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.scrollIntoView({behavior: 'smooth'});
    });
});
