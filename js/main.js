document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 hello-pages- loaded');

    // Плавное появление карточек при скролле
    const revealItems = document.querySelectorAll('.reveal, .project-card');
    revealItems.forEach((el, i) => {
        setTimeout(() => el.classList.add('reveal--visible'), 80 * i);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal--visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealItems.forEach((el) => observer.observe(el));

    // Форма
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const msg = document.getElementById('form-message');
            msg.textContent = '✅ Сообщение отправлено! (демо)';
            msg.style.color = '#00e0c6';
            msg.style.fontWeight = 'bold';
            form.reset();
            setTimeout(() => { msg.textContent = ''; }, 4000);
        });
    }
});
