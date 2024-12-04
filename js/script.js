document.addEventListener('DOMContentLoaded', () => {
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