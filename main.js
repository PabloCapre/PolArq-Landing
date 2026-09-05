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

// 3. Lógica del Comparador Interactivo de Cristales
function changeGlass(imgName, btnElement) {
    const img = document.getElementById('comp-image');
    const buttons = document.querySelectorAll('.comp-btn');
    
    // Remover estados activos de todos los botones
    buttons.forEach(b => {
        b.classList.remove('bg-cyan-500', 'text-slate-950', 'active-btn');
        b.classList.add('bg-slate-800', 'text-slate-300');
    });
    
    // Agregar estado activo al botón clickeado
    btnElement.classList.remove('bg-slate-800', 'text-slate-300');
    btnElement.classList.add('bg-cyan-500', 'text-slate-950', 'active-btn');
    
    // Efecto visual de transición (Fade In/Out)
    img.style.opacity = '0.3';
    setTimeout(() => {
        img.src = `assets/comparador/${imgName}`;
        img.style.opacity = '1';
    }, 200);
}