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

    // Flip card interaktivitas
    const cards = document.querySelectorAll('.program-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const isActive = card.classList.contains('active');
            // Hapus active dan expanded dari semua kartu
            cards.forEach(c => {
                c.classList.remove('active', 'expanded');
            });
            // Tambah active dan expanded ke kartu yang diklik
            if (!isActive) {
                card.classList.add('active', 'expanded');
            }
        });
    });
});