document.addEventListener('DOMContentLoaded', () => {
    // ---- DOM Elements ----
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const toggleDetailsBtn = document.getElementById('toggleDetailsBtn');
    const appSidebar = document.getElementById('appSidebar');
    const messagesSidebar = document.getElementById('messagesSidebar');
    const detailsSidebar = document.getElementById('detailsSidebar');
    const overlay = document.getElementById('sidebarOverlay');

    const messageInput = document.getElementById('messageInput');
    const sendBtn = document.getElementById('sendBtn');
    const messagesFeed = document.getElementById('messagesFeed');
    const chatItems = document.querySelectorAll('.chat-item');

    // ---- Sidebar Toggles ----

    // Toggle Left Sidebars (Mobile/Tablet)
    function toggleLeftSidebar() {
        appSidebar.classList.toggle('open');
        messagesSidebar.classList.toggle('open');
        overlay.classList.toggle('active');
        
        // Ensure right sidebar is closed when opening left
        if(detailsSidebar.classList.contains('open')) {
            detailsSidebar.classList.remove('open');
        }
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleLeftSidebar);
    }

    // Toggle Right Sidebar (Mobile/Tablet)
    if (toggleDetailsBtn) {
        toggleDetailsBtn.addEventListener('click', () => {
            detailsSidebar.classList.toggle('open');
            // Toggle overlay
            if (detailsSidebar.classList.contains('open')) {
                overlay.classList.add('active');
                // Close left sidebars
                appSidebar.classList.remove('open');
                messagesSidebar.classList.remove('open');
            } else {
                overlay.classList.remove('active');
            }
        });
    }

    // Close sidebars on overlay click
    if (overlay) {
        overlay.addEventListener('click', () => {
            appSidebar.classList.remove('open');
            messagesSidebar.classList.remove('open');
            detailsSidebar.classList.remove('open');
            overlay.classList.remove('active');
        });
    }

    // ---- Active Chat Highlight ----
    chatItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all
            chatItems.forEach(c => c.classList.remove('active'));
            // Add active class to clicked item
            item.classList.add('active');
            
            // On mobile, close sidebar after picking a chat
            if (window.innerWidth <= 992) {
                appSidebar.classList.remove('open');
                messagesSidebar.classList.remove('open');
                overlay.classList.remove('active');
            }
        });
    });

    // ---- Send Message Functionality ----
    function createMessageHTML(text) {
        const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        return `
            <div class="message-row sent" style="animation: fadeIn 0.3s ease;">
                <i class='bx bx-dots-vertical-rounded msg-options'></i>
                <div class="msg-content">
                    <div class="msg-meta">
                        <span class="msg-time">${timeString}</span>
                        <span class="msg-name">Dristin Watson</span>
                    </div>
                    <div class="msg-bubble primary">${text}</div>
                </div>
                <img src="https://i.pravatar.cc/150?img=60" alt="Dristin" class="msg-avatar">
            </div>
        `;
    }

    function sendMessage() {
        const text = messageInput.value.trim();
        if (text !== '') {
            // Append message
            messagesFeed.insertAdjacentHTML('beforeend', createMessageHTML(text));
            // Clear input
            messageInput.value = '';
            // Scroll to bottom
            messagesFeed.scrollTop = messagesFeed.scrollHeight;
        }
    }

    // Listen for Send Button click
    if (sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
    }

    // Listen for Enter key
    if (messageInput) {
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});