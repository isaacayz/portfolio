
        function toggleChat() {
            const popup = document.getElementById('chatPopup');
            const badge = document.querySelector('.notification-badge');
            
            popup.classList.toggle('active');
            
            // Hide notification badge when chat is opened
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
            // Replace with your WhatsApp number (include country code without + sign)
            const phoneNumber = '+2348071982054';
            
            // Customize your message
            const message = 'Hi! I found your website and would like to get in touch.';
            
            // Create WhatsApp URL
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            // Open WhatsApp in new tab
            window.open(whatsappUrl, '_blank');
            
            // Close the popup
            toggleChat();
        }

        // Close popup when clicking outside
        document.addEventListener('click', function(event) {
            const widget = document.querySelector('.whatsapp-widget');
            const popup = document.getElementById('chatPopup');
            
            if (!widget.contains(event.target) && popup.classList.contains('active')) {
                toggleChat();
            }
        });

        // Auto-show notification badge after page load
        window.addEventListener('load', function() {
            setTimeout(() => {
                const badge = document.querySelector('.notification-badge');
                badge.style.display = 'flex';
            }, 3000);
        });
