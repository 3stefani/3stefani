// ===== SLIDES ROTATORIOS =====
const rotateBtn = document.querySelector('.rotate-btn');
const slides = document.querySelectorAll('.bg-slide');
const totalSlides = slides.length;
let index = 0;

rotateBtn.addEventListener('click', () => {
    rotateBtn.classList.add('active');
    setTimeout(() => {
        rotateBtn.classList.remove('active');
    }, 2100);

    slides.forEach(slide => {
        if (slide.classList.contains('active')) { 
            slide.classList.add('after-active');
        } else {
            slide.classList.remove('after-active');
        }
    });
       
    slides[index].classList.remove('active');
    index++;
    if (index == totalSlides) {
        index = 0;
    }
    slides[index].classList.add('active');
});

// ===== NAVEGACIÓN ENTRE SECCIONES =====
function navigateToSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Actualizar el menú activo
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Scroll al inicio
    window.scrollTo(0, 0);
}

// ===== SISTEMA DE TRADUCCIONES =====
const translations = {
    es: {
        'text-inicio': 'Inicio',
        'text-sobre-mi': 'Sobre mí',
        'text-proyectos': 'Proyectos',
        'text-contacto': 'Contacto',
        'section-title-sobre-mi': 'Sobre mí',
        'sobre-mi-intro': '¡Hola! Soy un profesional apasionado por la tecnología con experiencia en múltiples áreas del desarrollo de software y la ciberseguridad.',
        'sobre-mi-skills-title': 'Mis habilidades',
        'skill-description': 'Especializado en pruebas de software, automatización y aseguramiento de calidad.',
        'skill-title-cyber': 'Ciberseguridad',
        'skill-description-cyber': 'Pentesting web, análisis de vulnerabilidades y seguridad informática.',
        'skill-title-trading': 'Trading Algorítmico',
        'skill-description-trading': 'Desarrollo de estrategias automatizadas y análisis de mercados financieros.',
        'skill-title-bots': 'Bots con Python',
        'skill-description-bots': 'Creación de bots de trading y automatización de procesos con Python.',
        'skill-title-frontend': 'Desarrollo Frontend',
        'skill-description-frontend': 'HTML, CSS, JavaScript y frameworks modernos para interfaces de usuario.',
        'section-title-proyectos': 'Proyectos',
        'proyectos-intro': 'Algunos de mis trabajos más destacados en diferentes áreas tecnológicas.',
        'project-title-1': 'Automatización de Pruebas',
        'project-description-1': 'Framework de testing automatizado para aplicaciones web con Selenium y Python.',
        'project-title-2': 'Análisis de Vulnerabilidades',
        'project-description-2': 'Herramientas personalizadas para pentesting y auditorías de seguridad web.',
        'project-title-3': 'Bot de Trading',
        'project-description-3': 'Sistema automatizado de trading con análisis técnico y machine learning.',
        'project-title-4': 'Dashboard Interactivo',
        'project-description-4': 'Interfaz web moderna para visualización de datos financieros en tiempo real.',
        'section-title-contacto': 'Contacto',
        'contacto-intro': '¿Interesado en colaborar? ¡Hablemos!',
        'label-nombre': 'Nombre',
        'input-nombre': 'Tu nombre',
        'label-email': 'Email',
        'input-email': 'tu@email.com',
        'label-mensaje': 'Mensaje',
        'input-mensaje': 'Tu mensaje...',
        'btn-enviar': 'Enviar mensaje',
        'contacto-redes': 'O encuéntrame en:'
    },
    en: {
        'text-inicio': 'Home',
        'text-sobre-mi': 'About me',
        'text-proyectos': 'Projects',
        'text-contacto': 'Contact',
        'section-title-sobre-mi': 'About me',
        'sobre-mi-intro': 'Hi! I\'m a technology-passionate professional with experience in multiple areas of software development and cybersecurity.',
        'sobre-mi-skills-title': 'My skills',
        'skill-description': 'Specialized in software testing, automation and quality assurance.',
        'skill-title-cyber': 'Cybersecurity',
        'skill-description-cyber': 'Web pentesting, vulnerability analysis and IT security.',
        'skill-title-trading': 'Algorithmic Trading',
        'skill-description-trading': 'Development of automated strategies and financial market analysis.',
        'skill-title-bots': 'Python Bots',
        'skill-description-bots': 'Creation of trading bots and process automation with Python.',
        'skill-title-frontend': 'Frontend Development',
        'skill-description-frontend': 'HTML, CSS, JavaScript and modern frameworks for user interfaces.',
        'section-title-proyectos': 'Projects',
        'proyectos-intro': 'Some of my most outstanding work in different technological areas.',
        'project-title-1': 'Test Automation',
        'project-description-1': 'Automated testing framework for web applications with Selenium and Python.',
        'project-title-2': 'Vulnerability Analysis',
        'project-description-2': 'Custom tools for pentesting and web security audits.',
        'project-title-3': 'Trading Bot',
        'project-description-3': 'Automated trading system with technical analysis and machine learning.',
        'project-title-4': 'Interactive Dashboard',
        'project-description-4': 'Modern web interface for real-time financial data visualization.',
        'section-title-contacto': 'Contact',
        'contacto-intro': 'Interested in collaborating? Let\'s talk!',
        'label-nombre': 'Name',
        'input-nombre': 'Your name',
        'label-email': 'Email',
        'input-email': 'your@email.com',
        'label-mensaje': 'Message',
        'input-mensaje': 'Your message...',
        'btn-enviar': 'Send message',
        'contacto-redes': 'Or find me on:'
    }
};

// Función para cambiar idioma
function changeLanguage(lang) {
    // Actualizar botones de idioma
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Actualizar todos los textos
    for (const [key, value] of Object.entries(translations[lang])) {
        const elements = document.querySelectorAll(`.${key}`);
        elements.forEach(element => {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = value;
            } else {
                element.textContent = value;
            }
        });
    }

    // Guardar preferencia
    localStorage.setItem('preferred-language', lang);

    // Actualizar atributo lang del HTML
    document.documentElement.lang = lang;
}

// Cargar idioma guardado al inicio
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-language') || 'es';
    changeLanguage(savedLang);
});

// ===== FORMULARIO DE CONTACTO =====
function handleSubmit(event) {
    event.preventDefault();
    
    const currentLang = localStorage.getItem('preferred-language') || 'es';
    const successMessage = currentLang === 'es' 
        ? '¡Mensaje enviado! Te contactaré pronto.' 
        : 'Message sent! I will contact you soon.';
    
    alert(successMessage);
    event.target.reset();
}
