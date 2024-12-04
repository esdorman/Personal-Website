document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxDescription = document.getElementById('lightboxDescription');
    const closeBtn = document.getElementById('lightboxClose');

    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').getAttribute('src');
            const description = item.getAttribute('data-description');
            lightboxImg.setAttribute('src', imgSrc);
            lightboxDescription.textContent = description;
            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Sidebar menu functionality
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    sidebarToggle.addEventListener('click', () => {
        sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0';
        overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
    });

    overlay.addEventListener('click', () => {
        sidebar.style.left = '-250px';
        overlay.style.display = 'none';
    });
});