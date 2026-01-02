// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const mobileThemeToggle = document.getElementById('mobileThemeToggle');
const themeIcon = themeToggle.querySelector('i');
const mobileThemeIcon = mobileThemeToggle.querySelector('i');

// Check for saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

// Set initial icons based on saved theme
updateThemeIcons(savedTheme);

// Function to update theme icons
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

// Function to toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcons(newTheme);
    
    // Add click animation to both buttons
    themeToggle.style.transform = 'scale(0.9)';
    mobileThemeToggle.style.transform = 'scale(0.9)';
    setTimeout(() => {
        themeToggle.style.transform = '';
        mobileThemeToggle.style.transform = '';
    }, 200);
}

// Add click events to both theme toggle buttons
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
    
    // Hide mobile theme toggle when mobile menu is open
    if (window.innerWidth <= 768) {
        mobileThemeToggle.style.opacity = navLinks.classList.contains('active') ? '0' : '1';
        mobileThemeToggle.style.pointerEvents = navLinks.classList.contains('active') ? 'none' : 'all';
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-times');
        
        // Show mobile theme toggle again
        if (window.innerWidth <= 768) {
            mobileThemeToggle.style.opacity = '1';
            mobileThemeToggle.style.pointerEvents = 'all';
        }

        // Update active class
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
    });
});

// Project Count Display
const projectCountElement = document.getElementById('projectCount');
const projectCards = document.querySelectorAll('.project-card');

// Update project count dynamically
function updateProjectCount() {
    const visibleProjects = document.querySelectorAll('.project-card[style*="display: flex"], .project-card:not([style])');
    const totalProjects = projectCards.length;

    // Show count with "+" if less than total (for filtered view)
    if (visibleProjects.length === totalProjects) {
        projectCountElement.textContent = `${totalProjects}+`;
    } else {
        projectCountElement.textContent = `${visibleProjects.length}/${totalProjects}`;
    }
}

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
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

        // Update project count after filtering
        setTimeout(updateProjectCount, 450);
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

// Initialize skill bars to 0
skillBars.forEach(bar => {
    bar.style.width = '0%';
});

window.addEventListener('scroll', animateSkillBars);

// CV Download Functionality
const downloadCV = document.getElementById('downloadCV');

downloadCV.addEventListener('click', (e) => {
    e.preventDefault();

    // CV content based on your provided document
    const cvContent = `
AHMED ALI OSMAN

Email: ahmeyali2236@gmail.com
Phone: +254 721 237 883
Location: Bute, Wajir, Kenya

CAREER ASPIRATION
Aspiring Full-Stack Developer and Software Engineer transitioning from front-end expertise. Currently expanding skills in backend development, databases, and software architecture with the goal of becoming a complete software engineer capable of building end-to-end solutions.

PROFESSIONAL PROFILE
A highly motivated and detail-oriented third-year university student with a strong foundation in front-end web development and graphic design. Currently expanding technical expertise towards full-stack development with focus on backend technologies and software engineering principles. Combines technical skills in C, C++, HTML, CSS, and JavaScript with a creative eye for visual design using Canva. Proven ability to quickly learn new technologies, solve problems logically, and collaborate effectively in team settings. Actively seeking opportunities to contribute to full-stack projects and grow into a complete software engineering role.

EDUCATION
Umma University - Kenya
Bachelor's Degree in Information Technology (Ongoing)
Year: 2024 -- Present | Currently in Year 3, Semester 1
Explanation: Pursuing a degree that provides a theoretical and practical foundation in computing, which complements my self-driven learning in specific programming and design areas.

Bute Boys Secondary School
Kenya Certificate of Secondary Education (KCSE) -- Grade: B+
Year: 2020 -- 2023

Iftin Junior Academy
Kenya Certificate of Primary Education (KCPE) -- 305 Marks
Year: 2011 -- 2019

TECHNICAL SKILLS
• Programming Languages: C, C++ (Strong understanding of core programming concepts, data structures, and object-oriented principles).
• Web Development: HTML5, CSS3, JavaScript (Building responsive and interactive web page structures and styling).
• Database Management: MySQL (Database design, queries, and management).
• Design & Prototyping: Canva (Proficient in creating graphics, logos, and visual content).
• Office Tools: Microsoft Excel (85%), Microsoft Word (90%), Microsoft PowerPoint (85%)
• Software & Tools: Git & GitHub (Version Control Basics), VS Code.
• Currently Learning: Node.js, Python, React.js, Software Architecture
• Soft Skills: Problem Solving (90%), Mathematics (85%), Communication (85%), Creative Thinking (88%), Logical Reasoning (87%)

AREAS OF EXPERTISE
• Front-End Web Development & UI Design
• Graphic Design & Visual Communication
• Database Management with MySQL
• Microsoft Office Suite Proficiency
• Problem Solving & Algorithmic Thinking
• Cross-functional Team Collaboration
• Adaptability & Continuous Learning
• Full-Stack Development (In Progress)

CAREER GOALS
1. Short-term: Secure a front-end development role while expanding backend skills
2. Medium-term: Transition to full-stack developer position
3. Long-term: Become a complete software engineer capable of designing, building, and deploying scalable applications

LANGUAGES
• English (Fluent -- Written & Spoken)
• Kiswahili (Fluent -- Written & Spoken)
• Somali (Native)

PERSONAL ATTRIBUTES
• Initiative & Reliability: A self-starter who takes ownership of tasks and delivers on commitments with minimal supervision.
• Fast Learner: Enthusiastic about new technologies and frameworks, with a proven ability to grasp concepts quickly.
• Creative Problem-Solver: Approaches challenges with a positive attitude and a logical, solution-oriented mindset.
• Effective Communicator: Strong interpersonal skills, capable of explaining technical concepts clearly in team settings.

CAREER OBJECTIVE
To secure an internship or entry-level position in software development, front-end engineering, or graphic design. Eager to apply my technical and creative skills to real-world projects, gain invaluable practical experience, and grow into a proficient professional while making a tangible contribution to a forward-thinking organization.

REFEREES
Available upon request.
1. Mr. Abdirizaq Abdidkadir -- Mathematics Teacher, Bute Boys Secondary School | Phone: 0726 325 200
2. Mr. Hassan Billow -- Chemistry Teacher, Bute Boys Secondary School | Phone: 0723 821 185
3. Mr. Abdiwahid Salat -- Biology Teacher, Bute Boys Secondary School | Phone: 0724 499 686
            `;

    // Create a Blob with the CV content
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ahmed_Ali_Osman_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show a success message
    const originalText = downloadCV.innerHTML;
    downloadCV.innerHTML = '<i class="fas fa-check"></i> CV Downloaded Successfully!';
    downloadCV.style.background = '#10b981';

    setTimeout(() => {
        downloadCV.innerHTML = originalText;
        downloadCV.style.background = '';
    }, 3000);
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.padding = '15px 0';
        header.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.08)';
    }

    // Update active nav link based on scroll position
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

// Initialize animations and project count
window.addEventListener('load', () => {
    // Add initial animation to hero elements
    const heroElements = document.querySelectorAll('.hero-text h1, .hero-text h2, .hero-text p, .hero-buttons, .image-wrapper');

    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';

        setTimeout(() => {
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Animate skill bars on load
    animateSkillBars();

    // Initialize project count
    updateProjectCount();

    // Animate stats on load
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
});

// Handle window resize to update theme toggle visibility
window.addEventListener('resize', () => {
    // Show/hide mobile theme toggle based on screen size
    if (window.innerWidth <= 768) {
        mobileThemeToggle.style.display = 'flex';
    } else {
        mobileThemeToggle.style.display = 'none';
    }
});

// Initialize mobile theme toggle visibility on load
if (window.innerWidth <= 768) {
    mobileThemeToggle.style.display = 'flex';
} else {
    mobileThemeToggle.style.display = 'none';
}