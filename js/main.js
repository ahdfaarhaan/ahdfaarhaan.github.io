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
        if (window.scrollY > document.documentElement.scrollHeight * 0.2) {
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

    // Modal untuk gambar di section about dan gallery
    const images = document.querySelectorAll('.about-image img, .gallery-image img');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-close');

    images.forEach(image => {
        image.addEventListener('click', () => {
            const modalId = image.getAttribute('data-modal-target');
            const modal = document.getElementById(modalId);
            modal.classList.add('active');
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal-close')) {
                modal.classList.remove('active');
            }
        });
    });

    // Parallax effect untuk teks di section about
    const parallaxTexts = document.querySelectorAll('.parallax-text');
    window.addEventListener('scroll', () => {
        parallaxTexts.forEach(text => {
            const rect = text.getBoundingClientRect();
            const offset = window.scrollY - rect.top;
            text.style.transform = `translateY(${offset * 0.1}px)`;
        });
    });
});