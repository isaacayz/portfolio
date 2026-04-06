function toggleChat() {
    const popup = document.getElementById('chatPopup');
    const badge = document.querySelector('.notification-badge');

    popup.classList.toggle('active');

    if (popup.classList.contains('active')) {
        badge.style.display = 'none';
        showTypingIndicator();
    }
}

function showTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    setTimeout(() => {
        indicator.style.display = 'flex';
        setTimeout(() => {
            indicator.style.display = 'none';
        }, 2000);
    }, 1000);
}

function openWhatsApp() {
    const phoneNumber = '2348071982054';
    const message = 'Hi Isaac! I found your website and would like to discuss a project.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    toggleChat();
}

// Close popup when clicking outside
document.addEventListener('click', function (event) {
    const widget = document.querySelector('.whatsapp-widget');
    const popup = document.getElementById('chatPopup');

    if (widget && popup && !widget.contains(event.target) && popup.classList.contains('active')) {
        toggleChat();
    }
});
