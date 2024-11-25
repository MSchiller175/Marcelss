// Smooth Scroll Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(window.pageYOffset * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Animate on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Neon Text Effect
const neonText = document.querySelectorAll('.neon-text');
neonText.forEach(text => {
    text.innerHTML = text.textContent.split('').map(letter => 
        `<span class="neon-letter">${letter}</span>`
    ).join('');
});

// Particle Background
const createParticles = () => {
    const particleContainer = document.querySelector('.particle-container');
    if (!particleContainer) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random size
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random animation duration
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        particleContainer.appendChild(particle);
    }
};

// Server Status Animation
const updateServerStatus = async () => {
    const statusIndicator = document.querySelector('.status-indicator');
    if (!statusIndicator) return;

    try {
        const response = await fetch('/api/server-status');
        const data = await response.json();
        
        statusIndicator.className = `status-indicator ${data.online ? 'online pulse' : 'offline'}`;
        
        // Animate player count
        const playerCount = document.querySelector('.player-count');
        if (playerCount) {
            const currentCount = parseInt(playerCount.textContent);
            const targetCount = data.players;
            
            animateNumber(currentCount, targetCount, playerCount);
        }
    } catch (error) {
        console.error('Error fetching server status:', error);
    }
};

// Number Animation Helper
const animateNumber = (start, end, element) => {
    let current = start;
    const step = (end - start) / 30; // 30 frames for smooth animation
    
    const animate = () => {
        current += step;
        if ((step > 0 && current >= end) || (step < 0 && current <= end)) {
            element.textContent = end;
            return;
        }
        
        element.textContent = Math.round(current);
        requestAnimationFrame(animate);
    };
    
    animate();
};

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuButton && navLinks) {
        mobileMenuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuButton.classList.toggle('active');
        });
    }
});

// Smooth Scroll
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

// PDF Download Function
function downloadKeybindsPDF() {
    // PDF download logic will be implemented here
    alert('PDF Download wird vorbereitet...');
}

// Server Status Update
function updateServerStatus() {
    // Placeholder for server status update
    const statusElement = document.querySelector('.server-status');
    if (statusElement) {
        statusElement.innerHTML = '<span class="status-online">🟢 Online</span> | <span class="player-count">134 Spieler</span>';
    }
}

// Initialize features
document.addEventListener('DOMContentLoaded', () => {
    // Update server status initially and every 30 seconds
    updateServerStatus();
    setInterval(updateServerStatus, 30000);
});

// Create particles and update server status
createParticles();
setInterval(updateServerStatus, 30000); // Update every 30 seconds
updateServerStatus();
