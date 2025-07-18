document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Scroll to top button
    const scrollTop = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > document.documentElement.scrollHeight * 0.8) {
            scrollTop.style.display = 'block';
        } else {
            scrollTop.style.display = 'none';
        }
    });

    scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Animasi interaktif untuk section
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

    // Formulir validasi
    const form = document.getElementById('contact-form');
    const errorElement = document.getElementById('form-error');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            errorElement.textContent = 'Semua kolom wajib diisi!';
            errorElement.style.display = 'block';
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errorElement.textContent = 'Email tidak valid!';
            errorElement.style.display = 'block';
            return;
        }

        if (message.length < 10) {
            errorElement.textContent = 'Pesan harus minimal 10 karakter!';
            errorElement.style.display = 'block';
            return;
        }

        errorElement.style.display = 'none';
        alert('Pesan berhasil dikirim! (Simulasi, belum ada backend)');
        form.reset();
    });
});