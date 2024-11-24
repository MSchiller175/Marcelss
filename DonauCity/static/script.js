// Loading Screen
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Show loading screen
    loadingScreen.style.display = 'flex';
    
    // Hide loading screen after page is fully loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            loadingScreen.style.opacity = '0';
            setTimeout(function() {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    });
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuButton && navLinks) {
        mobileMenuButton.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuButton.classList.toggle('active');
        });
    }
});

// Server Status Update
async function updateServerStatus() {
    try {
        const response = await fetch('/api/server-status');
        const data = await response.json();
        
        const statusIndicator = document.querySelector('.status-indicator');
        const statusText = statusIndicator.nextElementSibling;
        const playerCount = statusText.nextElementSibling;

        statusIndicator.className = `status-indicator ${data.online ? 'online' : 'offline'}`;
        statusText.textContent = data.online ? 'Server Online' : 'Server Offline';
        playerCount.textContent = `${data.players}/${data.max_players} Spieler`;
    } catch (error) {
        console.error('Fehler beim Abrufen des Server-Status:', error);
    }
}

// Update server status every 30 seconds
setInterval(updateServerStatus, 30000);
updateServerStatus();

// Animated Background
document.addEventListener('DOMContentLoaded', () => {
    const bgAnimation = document.querySelector('.bg-animation');
    
    // Create light elements
    for (let i = 1; i <= 9; i++) {
        const light = document.createElement('div');
        light.className = `light x${i}`;
        bgAnimation.appendChild(light);
    }
});
