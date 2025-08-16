const accordionButtons = document.querySelectorAll('.accordion__item--prompt');

accordionButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        toggleAccordion(this);
    });
    
    // Add keyboard support
    button.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleAccordion(this);
        }
        
        // Optional arrow key navigation (doesn't interfere with tab)
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = (index + 1) % accordionButtons.length;
            accordionButtons[nextIndex].focus();
        }
        
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = (index - 1 + accordionButtons.length) % accordionButtons.length;
            accordionButtons[prevIndex].focus();
        }
    });
});

function toggleAccordion(button) {
    // Find the response element within the same accordion item
    const accordionItem = button.closest('.accordion__item');
    const response = accordionItem.querySelector('.accordion__item--response');
    const toggleIcon = button.querySelector('.toggle');
    
    // Toggle the visibility of the response
    const isHidden = response.classList.toggle('hidden');
    
    // Update aria-expanded attribute
    button.setAttribute('aria-expanded', !isHidden);
    
    // Toggle the icon between plus and minus
    if (isHidden) {
        toggleIcon.src = 'assets/images/icon-plus.svg';
        toggleIcon.alt = 'Expand answer';
    } else {
        toggleIcon.src = 'assets/images/icon-minus.svg';
        toggleIcon.alt = 'Collapse answer';
    }
}