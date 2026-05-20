document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MENÚ DESPLEGABLE MÓVIL (Hamburguesa)
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (mobileMenuBtn && navList) {
        mobileMenuBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
            mobileMenuBtn.classList.toggle('open');
        });

        // Cerrar el menú automáticamente al hacer clic en un enlace
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                mobileMenuBtn.classList.remove('open');
            });
        });
    }

    // 2. INTERACCIÓN DE CONTROL PARA URGENCIAS
    const btnEmergency = document.querySelector('.btn-emergency');
    if (btnEmergency) {
        btnEmergency.addEventListener('click', (e) => {
            // Nota: Mantiene la acción de llamada nativa 'tel:' 
            // pero añade un aviso visual útil para el usuario
            console.log('Llamada de emergencia iniciada por el cliente.');
        });
    }

    // 3. CAMBIO DE CLASE ACTIVE EN EL NAV SEGÚN EL SCROLL
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a:not(.btn-nav)');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
});
