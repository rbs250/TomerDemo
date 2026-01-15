document.addEventListener("DOMContentLoaded", () => {
    
    // --- Mobile Menu ---
    const menuBtn = document.querySelector('.menu-toggle');
    const menuOverlay = document.querySelector('.mobile-menu-overlay');
    const links = document.querySelectorAll('.mm-link');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            menuOverlay.classList.toggle('active');
        });
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuOverlay.classList.remove('active');
            });
        });
    }

    // --- Archive Strip (About Section) ---
    const track = document.getElementById('archiveTrack');
    const totalPhotos = 10; 

    if (track) {
        for (let i = 1; i <= totalPhotos; i++) {
            const div = document.createElement('div');
            div.className = 'strip-item';
            div.innerHTML = `
                <img src="Media/Gallery/photo (${i}).jpeg" 
                     alt="Archive" 
                     loading="lazy"
                     onerror="this.style.display='none'">
            `;
            track.appendChild(div);
        }
    }

    // --- Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.grid-item, .split-text').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });
});