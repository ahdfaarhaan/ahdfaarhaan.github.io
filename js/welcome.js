document.addEventListener('DOMContentLoaded', () => {
    const welcomeText = document.querySelector('.welcome-text');
    const popupButton = document.querySelector('.popup-button');
    const greetings = [
        { text: 'Welcome', lang: 'english' },
        { text: 'Bienvenido', lang: 'spanish' },
        { text: 'Bienvenue', lang: 'french' },
        { text: 'Willkommen', lang: 'german' },
        { text: 'Selamat Datang', lang: 'indonesian' },
        { text: '欢迎', lang: 'chinese' },
        { text: 'Velkommen', lang: 'danish' },
        { text: 'Aloha', lang: 'hawaiian' },
        { text: 'いらっしゃいませ', lang: 'japanese' },
        { text: 'مرحباً', lang: 'arabic' },
        { text: '환영', lang: 'korean' },
        { text: 'ยินดีต้อนรับ', lang: 'thai' },
        { text: 'Benvenuto', lang: 'italian' },
        { text: 'Bem-vindo', lang: 'portuguese' },
        { text: 'добро пожаловать', lang: 'russian' },
        { text: 'қош келдіңіз', lang: 'kazakh' },
        { text: 'Maligayang Pagdating', lang: 'filipino' },
        { text: 'Chào Mừng', lang: 'vietnamese' }
    ];
    let currentIndex = 0;
    let cycleCount = 0;

    function updateGreeting() {
        welcomeText.classList.remove('show', greetings[currentIndex].lang);
        welcomeText.classList.add('hide');
        
        setTimeout(() => {
            welcomeText.textContent = greetings[currentIndex].text;
            welcomeText.classList.remove('hide');
            welcomeText.classList.add('show', greetings[currentIndex].lang);
            currentIndex = (currentIndex + 1) % greetings.length;

        setTimeout(() => {
            document.getElementById('popup').style.display = 'flex';
        }, 1800); // 90 detik     

       // Tampilkan popup setelah 2 siklus penuh
            if (currentIndex === 0) {
                cycleCount++;
                if (cycleCount >= 2) {
                    document.getElementById('popup').style.display = 'flex';
                }
            }
        }, 500);
    }

    // Mulai animasi
    welcomeText.classList.add('show', greetings[0].lang);
    updateGreeting();
    setInterval(updateGreeting, 100); // Ganti setiap 3 detik

    // Animasi tombol dan redirect
    popupButton.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah redirect langsung
        popupButton.classList.add('expand');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000); // Redirect setelah animasi selesai (1 detik)
    });
});