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
        'skill-title-testing': 'Testing & QA',
        'skill-description-testing': 'Manual Testing: Jira, TestRail, Test Case Design\nAutomatización: Selenium, Cypress, Postman\nMetodologías: Agile, Scrum, SDLC\nAPI Testing: REST, validación de respuestas HTTP',
        'skill-title-ai': 'IA & Machine Learning',
        'skill-description-ai': 'LLM Evaluation: Prompt Engineering, AI Red Teaming\nSeguridad en IA: Prompt Injection, Data Poisoning\nPython ML: Algoritmos, validación de modelos\nPlataformas: Outlier, OneForma, Appen',
        'skill-title-dev': 'Desarrollo',
        'skill-description-dev': 'Lenguajes: Python, JavaScript, SQL, HTML5, CSS3\nFrameworks: Node.js, integración de APIs\nTools: Git/Github, N8N, Notion\nCloud: Conocimientos en AWS',
        'sobre-mi-education-title': 'Formación',
        'edu-title-1': 'Máster en Ciberseguridad & AI',
        'edu-desc-1': 'Evolve Academy | 2025 | 480 horas\nEspecialización en pentesting, auditorías web, OSINT y análisis forense. Prácticas avanzadas en pivoting, movimiento lateral y compromiso de Active Directory.',
        'edu-title-2': 'Máster en Ciberseguridad',
        'edu-desc-2': 'Medac | 2022-2023 | 60 ECTS\nProyecto final: Laboratorio virtual para pentesting web.',
        'edu-title-3': 'Desarrollo de Aplicaciones Web',
        'edu-desc-3': 'Medac | 2022-2023 | 120 ECTS\nProyecto final: Bot de Trading con Python.',
        'sobre-mi-certs-title': 'Certificaciones',
        'cert-text-1': 'eJPT - Junior Penetration Tester (INE Security, 2025)',
        'cert-text-2': 'Introduction to OSINT (Security Blue Team, 2025)',
        'cert-text-3': 'Introduction to Digital Forensics (Security Blue Team, 2025)',
        'cert-text-4': 'Introduction to Cybersecurity (Cisco, 2025)',
        'cta-text': '¿Quieres saber más sobre mi trabajo?',
        'btn-projects': 'Ver mis proyectos',
        'btn-contact-cta': 'Contactar',
        
        // Proyectos
        'section-title-proyectos': 'Proyectos',
        'proyectos-intro': 'Portfolio de proyectos especializados en ciberseguridad, inteligencia artificial y desarrollo de software.',
        'featured-title': 'Diario Hacking - Blog de Ciberseguridad',
        'featured-desc': 'Blog personal donde comparto artículos sobre ciberseguridad, pentesting, herramientas y técnicas de hacking ético. Incluye writeups detallados de CTFs resueltos y análisis de vulnerabilidades.',
        'link-text': 'Visitar diariohacking.com',
        'link-text-github': 'Ver en GitHub',
        'project-title-htb': 'Hack The Box Writeups',
        'project-description-htb': 'Colección de writeups detallados de máquinas retiradas de Hack The Box. Metodologías completas de explotación, técnicas de pentesting ofensivo y habilidades de hacking ético documentadas paso a paso.',
        'project-title-cd': 'CyberDefenders Writeups',
        'project-description-cd': 'Análisis detallados de desafíos de Blue Team en CyberDefenders. Enfocado en técnicas defensivas de ciberseguridad, threat hunting, análisis SOC e incident response con casos reales.',
        'project-title-osint': 'OSINT Portfolio',
        'project-description-osint': 'Portfolio de inteligencia de fuentes abiertas (OSINT). Metodologías de investigación, recopilación y análisis de información pública para research de seguridad y threat intelligence.',
        'project-title-forensics': 'Digital Forensics',
        'project-description-forensics': 'Colección de writeups de análisis forense digital. Documentación de técnicas de investigación, incident response y análisis de evidencias. Incluye metodología paso a paso, herramientas utilizadas y lecciones aprendidas.',
        'project-title-airedteam': 'AI Red Team',
        'project-description-airedteam': 'Investigación de vulnerabilidades en modelos de lenguaje (LLMs). Análisis de Indirect Prompt Injection, Data Poisoning y evaluación de sesgos. Demuestra comprensión profunda de los desafíos de seguridad en IA.',
        'project-title-aviation': 'Aviation Threat Intelligence',
        'project-description-aviation': 'Panel de inteligencia de amenazas para el sector aviación basado en OSINT. Amenazas mapeadas al framework MITRE ATT&CK con integración de bases de datos CVE (NIST NVD, CISA) y dashboard interactivo de KPIs.',
        'project-title-vulnscan': 'VulnScan-Xploit',
        'project-description-vulnscan': 'Escáner avanzado de vulnerabilidades con integración de NVD API, Exploit-DB y CIRCL CVE Search. Procesamiento concurrente y análisis de riesgo basado en puntuación CVSS para priorización de parches.',
        'project-title-cypress': 'Cypress E2E - Zero Bank',
        'project-description-cypress': 'Suite de pruebas automatizadas end-to-end para aplicación bancaria. Testing de transacciones, autenticación, navegación y verificación de saldos con Cypress y JavaScript.',
        'project-title-buggy': 'QA Testing - Buggy Rating',
        'project-description-buggy': 'Proyecto completo de QA: user stories, diseño de casos de prueba, testing manual/automatizado y exploratorio. Documentado profesionalmente en Jira y TestRail siguiendo mejores prácticas.',
        'project-title-api': 'API Testing - Buggy Cars',
        'project-description-api': 'Suite automatizada de testing de APIs REST. Validación de respuestas HTTP, tiempos de respuesta, integridad de datos y manejo de errores con Postman.',
        'project-title-trading': 'Trading Bot Automation',
        'project-description-trading': 'Bot de trading automatizado para criptomonedas en Binance. Elimina el factor emocional en las decisiones de inversión mediante estrategias programadas. Implementado con Python-Binance API y análisis numérico con NumPy.',
        'cta-text-projects': '¿Te interesa colaborar en algún proyecto?',
        'btn-contact-projects': 'Envíame un mensaje',
        
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
        'skill-title-testing': 'Testing & QA',
        'skill-description-testing': 'Manual Testing: Jira, TestRail, Test Case Design\nAutomation: Selenium, Cypress, Postman\nMethodologies: Agile, Scrum, SDLC\nAPI Testing: REST, HTTP response validation',
        'skill-title-ai': 'AI & Machine Learning',
        'skill-description-ai': 'LLM Evaluation: Prompt Engineering, AI Red Teaming\nAI Security: Prompt Injection, Data Poisoning\nPython ML: Algorithms, model validation\nPlatforms: Outlier, OneForma, Appen',
        'skill-title-dev': 'Development',
        'skill-description-dev': 'Languages: Python, JavaScript, SQL, HTML5, CSS3\nFrameworks: Node.js, API integration\nTools: Git/Github, N8N, Notion\nCloud: AWS knowledge',
        'sobre-mi-education-title': 'Education',
        'edu-title-1': 'Master in Cybersecurity & AI',
        'edu-desc-1': 'Evolve Academy | 2025 | 480 hours\nSpecialization in pentesting, web audits, OSINT, and forensic analysis. Advanced practices in pivoting, lateral movement, and Active Directory compromise.',
        'edu-title-2': 'Master in Cybersecurity',
        'edu-desc-2': 'Medac | 2022-2023 | 60 ECTS\nFinal project: Virtual lab for web pentesting.',
        'edu-title-3': 'Web Application Development',
        'edu-desc-3': 'Medac | 2022-2023 | 120 ECTS\nFinal project: Trading Bot with Python.',
        'sobre-mi-certs-title': 'Certifications',
        'cert-text-1': 'eJPT - Junior Penetration Tester (INE Security, 2025)',
        'cert-text-2': 'Introduction to OSINT (Security Blue Team, 2025)',
        'cert-text-3': 'Introduction to Digital Forensics (Security Blue Team, 2025)',
        'cert-text-4': 'Introduction to Cybersecurity (Cisco, 2025)',
        'cta-text': 'Want to know more about my work?',
        'btn-projects': 'View my projects',
        'btn-contact-cta': 'Contact',
        
        // Projects
        'section-title-proyectos': 'Projects',
        'proyectos-intro': 'Portfolio of specialized projects in cybersecurity, artificial intelligence, and software development.',
        'featured-title': 'Diario Hacking - Cybersecurity Blog',
        'featured-desc': 'Personal blog where I share articles about cybersecurity, pentesting, tools, and ethical hacking techniques. Includes detailed CTF writeups and vulnerability analysis.',
        'link-text': 'Visit diariohacking.com',
        'link-text-github': 'View on GitHub',
        'project-title-htb': 'Hack The Box Writeups',
        'project-description-htb': 'Collection of detailed writeups from retired Hack The Box machines. Complete exploitation methodologies, offensive pentesting techniques, and ethical hacking skills documented step by step.',
        'project-title-cd': 'CyberDefenders Writeups',
        'project-description-cd': 'Detailed analysis of Blue Team challenges on CyberDefenders. Focused on defensive cybersecurity techniques, threat hunting, SOC analysis, and incident response with real-world cases.',
        'project-title-osint': 'OSINT Portfolio',
        'project-description-osint': 'Open Source Intelligence (OSINT) portfolio. Research methodologies, gathering and analysis of public information for security research and threat intelligence.',
        'project-title-forensics': 'Digital Forensics',
        'project-description-forensics': 'Collection of digital forensic analysis writeups. Documentation of investigation techniques, incident response, and evidence analysis. Includes step-by-step methodology, tools used, and lessons learned.',
        'project-title-airedteam': 'AI Red Team',
        'project-description-airedteam': 'Research on vulnerabilities in language models (LLMs). Analysis of Indirect Prompt Injection, Data Poisoning, and bias evaluation. Demonstrates deep understanding of AI security challenges.',
        'project-title-aviation': 'Aviation Threat Intelligence',
        'project-description-aviation': 'OSINT-based threat intelligence dashboard for the aviation sector. Threats mapped to MITRE ATT&CK framework with CVE database integration (NIST NVD, CISA) and interactive KPI monitoring.',
        'project-title-vulnscan': 'VulnScan-Xploit',
        'project-description-vulnscan': 'Advanced vulnerability scanner with NVD API, Exploit-DB, and CIRCL CVE Search integration. Concurrent processing and CVSS-based risk analysis for patch prioritization.',
        'project-title-cypress': 'Cypress E2E - Zero Bank',
        'project-description-cypress': 'End-to-end automated testing suite for banking application. Transaction testing, authentication, navigation, and balance verification with Cypress and JavaScript.',
        'project-title-buggy': 'QA Testing - Buggy Rating',
        'project-description-buggy': 'Complete QA project: user stories, test case design, manual/automated and exploratory testing. Professionally documented in Jira and TestRail following best practices.',
        'project-title-api': 'API Testing - Buggy Cars',
        'project-description-api': 'Automated REST API testing suite. Validation of HTTP responses, response times, data integrity, and error handling with Postman.',
        'project-title-trading': 'Trading Bot Automation',
        'project-description-trading': 'Automated trading bot for cryptocurrencies on Binance. Eliminates emotional factor in investment decisions through programmed strategies. Implemented with Python-Binance API and numerical analysis with NumPy.',
        'cta-text-projects': 'Interested in collaborating on a project?',
        'btn-contact-projects': 'Send me a message',
        
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





