document.addEventListener("DOMContentLoaded", () => {
    // Select elements for mobile menu toggle
    const hamburgerBtn = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    // Function to toggle sidebar visibility
    const toggleMenu = () => {
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
    };

    // Event listeners
    if (hamburgerBtn && sidebar && overlay) {
        // Open menu when hamburger is clicked
        hamburgerBtn.addEventListener("click", toggleMenu);

        // Close menu when clicking on the dark overlay background
        overlay.addEventListener("click", toggleMenu);
    }
});