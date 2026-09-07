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

// 2.1 Auto-cerrar menú móvil al hacer clic en un enlace
const mobileLinks = document.querySelectorAll('#mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
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

// 4. Lógica de Partners y Ventana Modal
const partnersData = {
    blandini: {
        title: "Blandini Detailing",
        desc: "Especialistas en estética vehicular. Realizamos tratamientos cerámicos, corrección de pintura, instalación de PPF, limpieza profunda de interiores y tapizados. Llevamos el brillo y la protección de tu vehículo al siguiente nivel, priorizando la atención y superando siempre las expectativas.",
        img: "assets/partners/blandini.png",
        link: "https://www.instagram.com/blandini.detailing/"
    },
    polart: {
        title: "PolArt Polarizados",
        desc: "Expertos en polarizado vehicular nano-cerámico de todas las calidades. Garantizamos la excelencia bajo estrictas normas de instalación dirigidas por Gino. Ofrecemos protección de parabrisas, láminas de seguridad, PPF, accesorios 4x4 y equipos de iluminación LED de alta gama.",
        img: "assets/partners/polart.png",
        link: "https://www.instagram.com/polarizados.polart.mendoza/"
    }
};

const modal = document.getElementById('partner-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalImg = document.getElementById('modal-img');
const modalLink = document.getElementById('modal-link');

function openModal(partnerId) {
    const data = partnersData[partnerId];
    
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    modalImg.src = data.img;
    modalLink.href = data.link;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}