// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    offset: 100,
    once: true
});

// Project data
const projects = [
    {
        title: "Administrative Management System",
        description: "A comprehensive Minecraft plugin providing advanced server administration capabilities, including automated moderation, content filtering, and infraction management.",
        tags: ["Java", "Paper", "Folia", "MySQL"],
        type: "minecraft"
    },
    {
        title: "Multi-functional Discord Application",
        description: "A versatile Discord application offering administrative tools, audio playback, virtual currency management, and utility functions. Supports multiple server configurations.",
        tags: ["TypeScript", "Discord.js", "MongoDB"],
        type: "discord"
    },
    {
        title: "Gaming Analytics API",
        description: "A RESTful service designed for collecting, analyzing, and reporting player statistics across multiple game servers with high performance and reliability.",
        tags: ["Go", "PostgreSQL", "Redis"],
        type: "backend"
    }
];

// Function to create project cards
function createProjectCards() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.setAttribute('data-aos', 'fade-up');
        
        const tags = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">
                ${tags}
            </div>
        `;
        
        projectsGrid.appendChild(card);
    });
}

// Call function when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createProjectCards();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll event listener for navbar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(12, 12, 12, 0.95)';
    } else {
        header.style.background = 'rgba(12, 12, 12, 0.8)';
    }
});
