// Page Transition Effects
document.addEventListener('DOMContentLoaded', function() {
    // Get current page type from body class
    const body = document.body;
    const pageType = body.dataset.page;
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Add specific loading class based on page type
    if (loadingScreen) {
        loadingScreen.classList.add(`${pageType}-loading`);
        
        // Create and add particles
        createParticles();
        
        // Add progress bar
        const progressContainer = document.createElement('div');
        progressContainer.className = 'loading-progress';
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressContainer.appendChild(progressBar);
        loadingScreen.appendChild(progressContainer);
        
        // Hide loading screen after animation
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 2000);
    }
});

// Create floating particles
function createParticles() {
    const loadingScreen = document.querySelector('.loading-screen');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'loading-particles';
    
    // Create multiple particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        
        particlesContainer.appendChild(particle);
    }
    
    loadingScreen.appendChild(particlesContainer);
}

// Page transition for links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.href && !e.target.href.startsWith('#')) {
        e.preventDefault();
        const loadingScreen = document.createElement('div');
        loadingScreen.className = 'loading-screen fade-in';
        document.body.appendChild(loadingScreen);
        
        setTimeout(() => {
            window.location.href = e.target.href;
        }, 500);
    }
});
