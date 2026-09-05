// 1. Efecto sombra en el Navbar al hacer scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 20) {
        nav.classList.add('shadow-lg', 'shadow-black/40');
    } else {
        nav.classList.remove('shadow-lg', 'shadow-black/40');
    }
});

// 2. Lógica del menú hamburguesa para celulares
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// (Acá sumaremos la lógica del Comparador Interactivo más adelante)