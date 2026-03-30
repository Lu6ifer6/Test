document.addEventListener('DOMContentLoaded', () => {
    // Select elements needed for the hamburger menu functionality
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');

    // Toggle the active class on the sidebar when the hamburger button is clicked
    if (hamburgerBtn && sidebar) {
        hamburgerBtn.addEventListener('click', (e) => {
            // Prevent event from bubbling up to document click listener
            e.stopPropagation(); 
            sidebar.classList.toggle('active');
        });
    }

    // Optional: Close sidebar when clicking anywhere outside of it on mobile
    document.addEventListener('click', (e) => {
        if (sidebar && sidebar.classList.contains('active')) {
            // If the click is not inside the sidebar and not on the hamburger menu
            if (!sidebar.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });
});