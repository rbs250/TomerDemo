document.addEventListener("DOMContentLoaded", () => {
    
    // --- Mobile Menu ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.m-link');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }

    // --- MINI CAROUSEL (ABOUT SECTION) ---
    const miniTrack = document.getElementById('miniGallery');
    
    // CONFIGURATION: Number of images in 'Media/Gallery'
    const totalPhotos = 10; 

    if (miniTrack) {
        for (let i = 1; i <= totalPhotos; i++) {
            const div = document.createElement('div');
            div.className = 'mini-item';
            
            // NOTE: Ensure files are named 'photo (1).jpeg', 'photo (2).jpeg', etc.
            div.innerHTML = `
                <img src="Media/Gallery/photo (${i}).jpeg" 
                     alt="Archive Work" 
                     loading="lazy" 
                     onerror="this.style.display='none'">`;
            
            miniTrack.appendChild(div);
        }
    }
});