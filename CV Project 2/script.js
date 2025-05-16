// Animation for page transitions and nav highlighting
window.addEventListener('DOMContentLoaded', () => {
    // Highlight active nav link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (window.location.pathname.endsWith(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });

    // Animate main content
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.classList.add('animate-fade-in');
    }
});



// 1. Smooth scroll to section
function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

// 2. Toggle mobile menu
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}

// 3. Validate contact form
function validateForm() {
    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return false;
    }
    return true;
}

// 4. Highlight active navigation link
function highlightNav() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        if (window.location.href.includes(link.href)) {
            link.classList.add('active');
        }
    });
}

// 5. Scroll to top button
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 6. Show scroll-to-top button when scrolled
window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollTopBtn');
    if (btn) btn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

// 7. Filter project list
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-item');
    projects.forEach(item => {
        item.style.display = category === 'all' || item.classList.contains(category) ? 'block' : 'none';
    });
}

// 8. Animate progress bars
function animateSkills() {
    const bars = document.querySelectorAll('.skill-bar');
    bars.forEach(bar => {
        const value = bar.getAttribute('data-value');
        bar.style.width = value + '%';
    });
}

// 9. Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// 10. Print resume
function printResume() {
    window.print();
}
