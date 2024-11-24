// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
});

// Mobile Menu
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const navLinks = document.querySelector('.nav-links');

mobileMenuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
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
