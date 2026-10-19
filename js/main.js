document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 hello-pages- loaded');
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const msg = document.getElementById('form-message');
            msg.textContent = '✅ Сообщение отправлено! (демо)';
            msg.style.color = '#28a745';
            msg.style.fontWeight = 'bold';
            form.reset();
        });
    }
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('nav__link--active');
        }
    });
});
