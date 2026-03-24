document.addEventListener('DOMContentLoaded', () => {
  // 1. Select the hamburger container/icon and the sidebar
  const hamburgerBtn = document.querySelector('.hamburger'); 
  const sidebar = document.querySelector('.sidebar');

  // 2. Make sure they exist on the page to avoid errors
  if (hamburgerBtn && sidebar) {
    // 3. Listen for a click on the hamburger menu
    hamburgerBtn.addEventListener('click', (e) => {
      // Toggle the 'active' class on the sidebar
      sidebar.classList.toggle('active');
      
      // Stop the click from bubbling up (useful for the outside-click logic below)
      e.stopPropagation(); 
    });
  }

  // Optional but recommended: Close sidebar when clicking outside of it
  document.addEventListener('click', (e) => {
    if (sidebar && sidebar.classList.contains('active')) {
      // If the click is NOT inside the sidebar, close it
      if (!sidebar.contains(e.target)) {
        sidebar.classList.remove('active');
      }
    }
  });
});