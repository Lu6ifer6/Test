document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Sidebar Toggle ---
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    function toggleSidebar() {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    }

    if(hamburgerBtn && sidebar && overlay) {
        hamburgerBtn.addEventListener('click', toggleSidebar);
        overlay.addEventListener('click', toggleSidebar);
    }

    // --- Task Popup Logic ---
    const taskPopup = document.getElementById('taskPopup');
    const clickableTask = document.querySelector('.task-clickable');
    let isPopupVisible = false;

    // Show popup when clicking a specific task
    if(clickableTask && taskPopup) {
        clickableTask.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent document click from firing
            
            if (isPopupVisible) {
                taskPopup.classList.remove('show');
                isPopupVisible = false;
            } else {
                // Position popup near the clicked element
                const rect = clickableTask.getBoundingClientRect();
                const containerRect = document.querySelector('.gantt-scroll-area').getBoundingClientRect();
                
                // Calculate position relative to the scroll area
                const top = rect.top - containerRect.top + 40; 
                const left = rect.left - containerRect.left - 50;
                
                taskPopup.style.top = `${top}px`;
                taskPopup.style.left = `${left}px`;
                
                taskPopup.classList.add('show');
                isPopupVisible = true;
            }
        });
    }

    // Hide popup when clicking anywhere else
    document.addEventListener('click', (e) => {
        if (isPopupVisible && !taskPopup.contains(e.target)) {
            taskPopup.classList.remove('show');
            isPopupVisible = false;
        }
    });
});