document.addEventListener('DOMContentLoaded', () => {
    // 1. Select the carousel container and buttons
    const carousel = document.querySelector('.reviews-carousel');
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');

    // 2. Ensure elements exist before adding logic
    if (carousel && prevBtn && nextBtn) {
        
        // Function to dynamically calculate how far to scroll.
        // It gets the width of one card + the gap (24px) between them.
        const getScrollAmount = () => {
            const firstCard = document.querySelector('.review-card');
            if (firstCard) {
                // offsetWidth gets the card's width. We add 24 to account for the CSS gap.
                return firstCard.offsetWidth + 24; 
            }
            return 300; // Fallback value just in case
        };

        // 3. Scroll Right (Next)
        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({
                left: getScrollAmount(), 
                behavior: 'smooth' // Ensures a smooth sliding animation
            });
        });

        // 4. Scroll Left (Previous)
        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({
                left: -getScrollAmount(), // Negative value to scroll left
                behavior: 'smooth'
            });
        });
    }
});