// Toggle the panel menu on smaller screens
document.querySelector('.pannel .fa-bars').addEventListener('click', () => {
    const panelOps = document.querySelector('.pannel-ops');
    panelOps.style.display = panelOps.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scroll to the top when clicking "Back to Up"
document.querySelector('.foot-panel1').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Change hero message on interaction
document.querySelector('.hero-msg a').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Redirecting to Amazon India!');
});

// Add hover effects dynamically
const boxes = document.querySelectorAll('.shop-section .box');
boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.transform = 'scale(1.05)';
        box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
    box.addEventListener('mouseout', () => {
        box.style.transform = 'scale(1)';
        box.style.boxShadow = 'none';
    });
});
