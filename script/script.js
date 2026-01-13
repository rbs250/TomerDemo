document.addEventListener("DOMContentLoaded", () => {
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

    const miniTrack = document.getElementById('miniGallery');
    const totalPhotos = 10; 

    if (miniTrack) {
        for (let i = 1; i <= totalPhotos; i++) {
            const div = document.createElement('div');
            div.className = 'mini-item';
            div.innerHTML = `
                <img src="Media/Gallery/photo (${i}).jpeg" 
                     alt="Archive Work" 
                     loading="lazy" 
                     onerror="this.style.display='none'">`;
            miniTrack.appendChild(div);
        }
    }
});