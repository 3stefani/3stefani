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
        // Menú
        'text-inicio': 'Inicio',
        'text-sobre-mi': 'Sobre mí',
        'text-proyectos': 'Proyectos',
        'text-contacto': 'Contacto',
        
        // Sobre mí
        'section-title-sobre-mi': 'Sobre mí',
        'sobre-mi-intro': '¡Hola! Soy Estefanía Ramírez Martínez, especialista en ciberseguridad y testing de software con pasión por la inteligencia artificial y el desarrollo seguro de tecnología.',
        'sobre-mi-intro-2': 'Con más de 10 años trabajando en proyectos internacionales de IA y experiencia práctica en pentesting, auditorías de seguridad y testing manual, combino habilidades técnicas con un enfoque analítico para identificar vulnerabilidades y mejorar la robustez de sistemas.',
        'sobre-mi-experience-title': 'Experiencia Profesional',
        'exp-title-cyber': 'Ciberseguridad & Pentesting',
        'exp-desc-cyber': 'Certificada eJPT con experiencia en auditorías web, OSINT, análisis forense de redes y pentesting interno. Especializada en detección de vulnerabilidades (SQL Injection, XSS, XXE) usando herramientas como Burp Suite, Metasploit, Nmap y Wireshark.',
        'exp-title-ai': 'Inteligencia Artificial',
        'exp-desc-ai': 'Más de 10 años evaluando y validando modelos de lenguaje (LLMs) en plataformas como Outlier, OneForma y Appen. Experiencia en AI Red Teaming, prompt injection, evaluación de robustez de modelos y control de calidad de salidas de IA.',
        'exp-title-qa': 'Software Testing',
        'exp-desc-qa': 'Testing manual y exploratorio de aplicaciones web y móviles. Experiencia con Selenium, Cypress, Jira y metodologías ágiles. Especializada en diseño de casos de prueba, reporte detallado de bugs y validación end-to-end.',
        'exp-title-dev': 'Desarrollo & Automatización',
        'exp-desc-dev': 'Desarrollo con Python, JavaScript, HTML y CSS. Creación de bots de trading, herramientas de automatización con N8N y scripts personalizados para análisis de vulnerabilidades y escaneo de redes.',
        'sobre-mi-skills-title': 'Stack Técnico',
        'skill-description': 'Pentesting Web: Burp Suite, OWASP ZAP, SQLMap\nReconocimiento: Nmap, Gobuster, Maltego, Shodan\nExplotación: Metasploit, Hydra, John the Ripper\nAnálisis de Red: Wireshark, Chisel, ProxyChains',
        'skill-title-testing': '🧪 Testing & QA',
        'skill-description-testing': 'Manual Testing: Jira, TestRail, Test Case Design\nAutomatización: Selenium, Cypress, Postman\nMetodologías: Agile, Scrum, SDLC\nAPI Testing: REST, validación de respuestas HTTP',
        'skill-title-ai': '🤖 IA & Machine Learning',
        'skill-description-ai': 'LLM Evaluation: Prompt Engineering, AI Red Teaming\nSeguridad en IA: Prompt Injection, Data Poisoning\nPython ML: Algoritmos, validación de modelos\nPlataformas: Outlier, OneForma, Appen',
        'skill-title-dev': '💻 Desarrollo',
        'skill-description-dev': 'Lenguajes: Python, JavaScript, SQL, HTML5, CSS3\nFrameworks: Node.js, integración de APIs\nTools: Git/Github, N8N, Notion\nCloud: Conocimientos en AWS',
        'sobre-mi-education-title': 'Formación',
        'edu-title-1': '🎓 Máster en Ciberseguridad & AI',
        'edu-desc-1': 'Evolve Academy | 2025 | 480 horas\nEspecialización en pentesting, auditorías web, OSINT y análisis forense. Prácticas avanzadas en pivoting, movimiento lateral y compromiso de Active Directory.',
        'edu-title-2': '🎓 Máster en Ciberseguridad',
        'edu-desc-2': 'Medac | 2022-2023 | 60 ECTS\nProyecto final: Laboratorio virtual para pentesting web.',
        'edu-title-3': '🎓 Desarrollo de Aplicaciones Web',
        'edu-desc-3': 'Medac | 2022-2023 | 120 ECTS\nProyecto final: Bot de Trading con Python.',
        'sobre-mi-certs-title': 'Certificaciones',
        'cert-text-1': 'eJPT - Junior Penetration Tester (INE Security, 2025)',
        'cert-text-2': 'Introduction to OSINT (Security Blue Team, 2025)',
        'cta-text': '¿Quieres saber más sobre mi trabajo?',
        'btn-projects': 'Ver mis proyectos',
        'btn-contact-cta': 'Contactar',
        
        // Proyectos
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
        
        // Contacto
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
        // Menu
        'text-inicio': 'Home',
        'text-sobre-mi': 'About me',
        'text-proyectos': 'Projects',
        'text-contacto': 'Contact',
        
        // About me
        'section-title-sobre-mi': 'About me',
        'sobre-mi-intro': 'Hi! I\'m Estefanía Ramírez Martínez, a cybersecurity and software testing specialist with a passion for artificial intelligence and secure technology development.',
        'sobre-mi-intro-2': 'With over 10 years working on international AI projects and hands-on experience in pentesting, security audits, and manual testing, I combine technical skills with an analytical approach to identify vulnerabilities and improve system robustness.',
        'sobre-mi-experience-title': 'Professional Experience',
        'exp-title-cyber': 'Cybersecurity & Pentesting',
        'exp-desc-cyber': 'eJPT certified with experience in web audits, OSINT, network forensic analysis, and internal pentesting. Specialized in vulnerability detection (SQL Injection, XSS, XXE) using tools like Burp Suite, Metasploit, Nmap, and Wireshark.',
        'exp-title-ai': 'Artificial Intelligence',
        'exp-desc-ai': 'Over 10 years evaluating and validating language models (LLMs) on platforms like Outlier, OneForma, and Appen. Experience in AI Red Teaming, prompt injection, model robustness evaluation, and AI output quality control.',
        'exp-title-qa': 'Software Testing',
        'exp-desc-qa': 'Manual and exploratory testing of web and mobile applications. Experience with Selenium, Cypress, Jira, and agile methodologies. Specialized in test case design, detailed bug reporting, and end-to-end validation.',
        'exp-title-dev': 'Development & Automation',
        'exp-desc-dev': 'Development with Python, JavaScript, HTML, and CSS. Creation of trading bots, automation tools with N8N, and custom scripts for vulnerability analysis and network scanning.',
        'sobre-mi-skills-title': 'Technical Stack',
        'skill-description': 'Web Pentesting: Burp Suite, OWASP ZAP, SQLMap\nReconnaissance: Nmap, Gobuster, Maltego, Shodan\nExploitation: Metasploit, Hydra, John the Ripper\nNetwork Analysis: Wireshark, Chisel, ProxyChains',
        'skill-title-testing': '🧪 Testing & QA',
        'skill-description-testing': 'Manual Testing: Jira, TestRail, Test Case Design\nAutomation: Selenium, Cypress, Postman\nMethodologies: Agile, Scrum, SDLC\nAPI Testing: REST, HTTP response validation',
        'skill-title-ai': '🤖 AI & Machine Learning',
        'skill-description-ai': 'LLM Evaluation: Prompt Engineering, AI Red Teaming\nAI Security: Prompt Injection, Data Poisoning\nPython ML: Algorithms, model validation\nPlatforms: Outlier, OneForma, Appen',
        'skill-title-dev': '💻 Development',
        'skill-description-dev': 'Languages: Python, JavaScript, SQL, HTML5, CSS3\nFrameworks: Node.js, API integration\nTools: Git/Github, N8N, Notion\nCloud: AWS knowledge',
        'sobre-mi-education-title': 'Education',
        'edu-title-1': '🎓 Master in Cybersecurity & AI',
        'edu-desc-1': 'Evolve Academy | 2025 | 480 hours\nSpecialization in pentesting, web audits, OSINT, and forensic analysis. Advanced practices in pivoting, lateral movement, and Active Directory compromise.',
        'edu-title-2': '🎓 Master in Cybersecurity',
        'edu-desc-2': 'Medac | 2022-2023 | 60 ECTS\nFinal project: Virtual lab for web pentesting.',
        'edu-title-3': '🎓 Web Application Development',
        'edu-desc-3': 'Medac | 2022-2023 | 120 ECTS\nFinal project: Trading Bot with Python.',
        'sobre-mi-certs-title': 'Certifications',
        'cert-text-1': 'eJPT - Junior Penetration Tester (INE Security, 2025)',
        'cert-text-2': 'Introduction to OSINT (Security Blue Team, 2025)',
        'cta-text': 'Want to know more about my work?',
        'btn-projects': 'View my projects',
        'btn-contact-cta': 'Contact',
        
        // Projects
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
        
        // Contact
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

