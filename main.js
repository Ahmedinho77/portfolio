// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const mobileThemeToggle = document.getElementById('mobileThemeToggle');
const themeIcon = themeToggle.querySelector('i');
const mobileThemeIcon = mobileThemeToggle.querySelector('i');

const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcons(savedTheme);

function updateThemeIcons(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        mobileThemeIcon.classList.remove('fa-moon');
        mobileThemeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        mobileThemeIcon.classList.remove('fa-sun');
        mobileThemeIcon.classList.add('fa-moon');
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcons(newTheme);

    themeToggle.style.transform = 'scale(0.9)';
    mobileThemeToggle.style.transform = 'scale(0.9)';
    setTimeout(() => {
        themeToggle.style.transform = '';
        mobileThemeToggle.style.transform = '';
    }, 200);
}

themeToggle.addEventListener('click', toggleTheme);
mobileThemeToggle.addEventListener('click', toggleTheme);

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const menuIcon = mobileMenuBtn.querySelector('i');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');

    if (window.innerWidth <= 768) {
        mobileThemeToggle.style.opacity = navLinks.classList.contains('active') ? '0' : '1';
        mobileThemeToggle.style.pointerEvents = navLinks.classList.contains('active') ? 'none' : 'all';
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-times');

        if (window.innerWidth <= 768) {
            mobileThemeToggle.style.opacity = '1';
            mobileThemeToggle.style.pointerEvents = 'all';
        }

        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
    });
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category').includes(filterValue)) {
                card.style.display = 'flex';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0) scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px) scale(0.9)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 400);
            }
        });
    });
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (barPosition < screenPosition) {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        }
    });
};

skillBars.forEach(bar => {
    bar.style.width = '0%';
});

window.addEventListener('scroll', animateSkillBars);

// CV Download Functionality — Full-Stack + Kotlin/Flutter/Supabase
const downloadCV = document.getElementById('downloadCV');

downloadCV.addEventListener('click', (e) => {
    e.preventDefault();

    const cvContent = `
AHMED ALI OSMAN - CV (Full-Stack Software Developer)

====================================================================
PERSONAL INFORMATION
====================================================================

Full Name: Ahmed Ali Osman
Email: ahmeyali2236@gmail.com
Phone: +254 721 237 883
Location: Bute, Wajir, Kenya

====================================================================
CAREER ASPIRATION
====================================================================

Full-Stack Software Developer with hands-on experience building complete web applications using PHP, MySQL, JavaScript, HTML/CSS, and mobile apps across Kotlin (native Android), Flutter + Supabase, and React Native + Firebase. Currently deepening expertise in software architecture, deployment, and scalable system design.

====================================================================
PROFESSIONAL PROFILE
====================================================================

A highly motivated and detail-oriented third-year university student and full-stack software developer with a strong foundation in web development, mobile app development, and management systems. Builds complete applications end-to-end — from database schema design and PHP back-end logic to responsive front-ends and published mobile apps. Combines technical skills in PHP, MySQL, Kotlin, Flutter, Supabase, C, C++, HTML, CSS, JavaScript, and React Native with a creative eye for visual design using Canva. Successfully developed and published multiple projects including the "Reunite" family connection mobile application, a CBC School Management System, and Sippora Store e-commerce platform. Proven ability to quickly learn new technologies, solve problems logically, and collaborate effectively in team settings.

====================================================================
EDUCATION
====================================================================

Umma University - Kenya
Bachelor's Degree in Information Technology (Ongoing)
Year: 2024 -- Present | Currently in Year 3, Semester 1

Bute Boys Secondary School
Kenya Certificate of Secondary Education (KCSE) -- Grade: B+
Year: 2020 -- 2023

Iftin Junior Academy
Kenya Certificate of Primary Education (KCPE) -- 305 Marks
Year: 2011 -- 2019

====================================================================
TECHNICAL SKILLS
====================================================================

Backend & Database:
• PHP (server-side logic, sessions, form handling, APIs)
• MySQL (schema design, queries, joins, CRUD)
• Supabase (PostgreSQL-backed open-source backend)
• REST API development
• Authentication & authorization
• Firebase (Authentication, Realtime Database, Cloud Storage)

Front-End & Programming:
• HTML5 / CSS3 (Expert)
• JavaScript (Advanced)
• C / C++ (core programming, data structures, OOP principles)
• Responsive Web Design
• UI/UX Principles
• Git & GitHub (Version Control)

Mobile App Development:
• Kotlin (Native Android development)
• Flutter (Cross-platform development)
• Supabase (Flutter backend integration)
• React Native (Cross-platform mobile development)
• Firebase Integration
• Android Studio (build, test, publish)
• Mobile UI/UX Design
• App Testing and Publishing

Design & Prototyping:
• Canva (graphics, logos, visual content)
• Mobile App UI Design
• Graphic Design Principles

Office Tools:
• Microsoft Excel
• Microsoft Word
• Microsoft PowerPoint

Currently Learning:
• Laravel & Modern PHP Frameworks
• Advanced Kotlin & Jetpack Compose
• Flutter State Management (Riverpod)
• Docker & Deployment
• Software Architecture

Soft Skills:
• Problem Solving
• Mathematics
• Communication
• Creative Thinking
• Logical Reasoning
• Team Collaboration
• Adaptability & Continuous Learning

====================================================================
FEATURED PROJECTS
====================================================================

1. CBC School Management System (2024)
   • Full-stack school management system built around Kenya's Competency-Based Curriculum (CBC)
   • PHP & MySQL backend with role-based access (admin/teacher/parent)
   • Features: student enrollment, competency tracking, grade management, report generation
   • Technologies: PHP, MySQL, JavaScript
   • Link: https://github.com/Ahmedinho77

2. Sippora Store - E-Commerce Platform (2024)
   • Full-stack e-commerce platform with PHP/MySQL backend
   • Features: product catalog, shopping cart, secure checkout, order management, admin dashboard
   • Technologies: PHP, MySQL, JavaScript
   • Link: https://github.com/Ahmedinho77

3. Reunite - Family Connection App (2024)
   • Cross-platform mobile app with real-time messaging, location sharing, and family tree management
   • Firebase authentication, database, and cloud storage
   • Technologies: React Native, Firebase, JavaScript
   • Link: https://github.com/Ahmedinho77/Reunite

4. Interactive Portfolio Website (2024)
   • Modern, responsive portfolio with dark/light mode and animations
   • Technologies: HTML5, CSS3, JavaScript

5. Bute5star Business Website (2024)
   • Business website with services showcase and responsive design
   • Technologies: HTML5, CSS3, JavaScript

6. StudyMate Learning Platform (2023)
   • Educational platform for study organization and progress tracking
   • Technologies: HTML5, CSS3, JavaScript

7. Al-huda Primary School Website (2023)
   • Comprehensive school website with education-focused aesthetic
   • Technologies: HTML5, CSS3, JavaScript

====================================================================
CAREER GOALS
====================================================================

1. Short-term: Secure a full-stack developer or mobile developer role
2. Medium-term: Deepen expertise in scalable architecture, Laravel, Kotlin/Compose, and Flutter
3. Long-term: Become a lead software engineer designing and deploying scalable systems across platforms

====================================================================
LANGUAGES
====================================================================

• English (Fluent -- Written & Spoken)
• Kiswahili (Fluent -- Written & Spoken)
• Somali (Native)

====================================================================
CAREER OBJECTIVE
====================================================================

To secure an internship or entry-level full-stack developer position where I can apply my PHP, MySQL, JavaScript, Kotlin, Flutter, Supabase, and React Native skills to real-world projects, gain valuable practical experience, and grow into a proficient software engineer contributing to a forward-thinking organization.

====================================================================
REFEREES
====================================================================

Available upon request.

1. Mr. Abdirizaq Abdidkadir
   Mathematics Teacher, Bute Boys Secondary School
   Phone: 0726 325 200

2. Mr. Hassan Billow
   Chemistry Teacher, Bute Boys Secondary School
   Phone: 0723 821 185

3. Mr. Abdiwahid Salat
   Biology Teacher, Bute Boys Secondary School
   Phone: 0724 499 686

====================================================================
Last Updated: 2026
====================================================================
    `;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ahmed_Ali_Osman_CV_2026.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const originalText = downloadCV.innerHTML;
    downloadCV.innerHTML = '<i class="fas fa-check"></i> CV Downloaded Successfully!';
    downloadCV.style.background = '#10b981';

    setTimeout(() => {
        downloadCV.innerHTML = originalText;
        downloadCV.style.background = '';
    }, 3000);
});

// Header scroll effect + active nav link
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.padding = '15px 0';
        header.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.08)';
    }

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize animations on load
window.addEventListener('load', () => {
    const heroElements = document.querySelectorAll('.hero-badge, .hero-text h1, .hero-text h2, .hero-text p, .hero-buttons, .image-wrapper');

    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';

        setTimeout(() => {
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });

    animateSkillBars();

    const stats = document.querySelectorAll('.stat-item');
    stats.forEach((stat, index) => {
        stat.style.opacity = '0';
        stat.style.transform = 'translateY(30px)';

        setTimeout(() => {
            stat.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            stat.style.opacity = '1';
            stat.style.transform = 'translateY(0)';
        }, 300 + (index * 150));
    });

    const capabilityCards = document.querySelectorAll('.capability-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    capabilityCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        observer.observe(card);
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        mobileThemeToggle.style.display = 'flex';
    } else {
        mobileThemeToggle.style.display = 'none';
    }
});

if (window.innerWidth <= 768) {
    mobileThemeToggle.style.display = 'flex';
} else {
    mobileThemeToggle.style.display = 'none';
}