document.addEventListener('DOMContentLoaded', () => {
  // 1. Select the hamburger container/icon and the sidebar
  const hamburgerBtn = document.querySelector('.hamburger'); 
  const hamburger = document.querySelector('.hamburger');

  // 2. Make sure they exist on the page to avoid errors
  if (hamburgerBtn && hamburger) {
    // 3. Listen for a click on the hamburger menu
    hamburgerBtn.addEventListener('click', (e) => {
      // Toggle the 'active' class on the sidebar
      hamburger.classList.toggle('active');
      
      // Stop the click from bubbling up (useful for the outside-click logic below)
      e.stopPropagation(); 
    });
  }

  // Optional but recommended: Close sidebar when clicking outside of it
  document.addEventListener('click', (e) => {
    if (hamburger && hamburger.classList.contains('active')) {
      // If the click is NOT inside the sidebar, close it
      if (!hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
      }
    }
  });
});