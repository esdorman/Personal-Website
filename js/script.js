document.addEventListener('DOMContentLoaded', () => {
  const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
  
    const toggleSidebar = () => {
      sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0';
      overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
    };
  
    sidebarToggle.addEventListener('click', toggleSidebar);
  
    overlay.addEventListener('click', () => {
      sidebar.style.left = '-250px';
      overlay.style.display = 'none';
    });
  
    // Keydown event for 'm' key
    document.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 'm') {
        toggleSidebar();
      }
    });
  });