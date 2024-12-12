document.addEventListener('DOMContentLoaded', () => {
    // Form validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('All fields are required.');
            event.preventDefault();
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
        } else {
            alert('Form submitted successfully!');
        }
    });

    // Interactive menu
    const submenuToggle = document.getElementById('submenu-toggle');
    const submenu = document.getElementById('submenu');
    submenuToggle.addEventListener('click', (event) => {
        event.preventDefault();
        submenu.classList.toggle('hidden');
    });

    // Dynamic content
    const loadContentButton = document.getElementById('load-content');
    const contentArea = document.getElementById('content-area');
    loadContentButton.addEventListener('click', () => {
        contentArea.textContent = 'Dynamic content loaded!';
    });
});