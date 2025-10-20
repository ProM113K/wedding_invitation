document.addEventListener('DOMContentLoaded', function () {
    const guestList = {
        'A01': 'Alumni SDN Sukamaju 5',
        'A02': 'Sirkel Percaya Rencana Tuhanku',
        'A03': 'Sirkel YTTA'
    }
    // Fungsi untuk mengambil nama tamu undangan dari parameter url
    const urlParams = new URLSearchParams(window.location.search);
    const guestId = urlParams.get('id'); // Kita akan menggunakan parameter '?to='

    const guestNameElement = document.querySelector('.guest-name');

    if (guestId && guestList[guestId]) {
        guestNameElement.textContent = guestList[guestId]
    } else {
        guestNameElement.textContent = 'Tamu Undangan'
    }

    const cover = document.getElementById('cover');
    const openButton = document.getElementById('open-invitation');
    const mainContent = document.getElementById('main-content');
    const backgroundMusic = document.getElementById('background-music');
    const musicControl = document.getElementById('music-control');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');

    // 1. FUNGSI UNTUK MEMBUKA UNDANGAN
    openButton.addEventListener('click', () => {
        // Tambahkan class untuk memulai animasi fade out pada cover
        cover.classList.add('hidden');

        // Aktifkan scroll pada body
        document.body.style.overflowY = 'auto';

        // Tampilkan konten utama
        mainContent.classList.remove('hidden');

        // Putar musik
        backgroundMusic.play().catch(error => {
            // Beberapa browser memblokir autoplay, jadi ini untuk penanganan error
            console.log("Autoplay was prevented:", error);
        });

        // Update ikon musik
        musicControl.classList.remove('paused');
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');

        // Hapus cover dari DOM setelah animasi selesai agar tidak mengganggu
        setTimeout(() => {
            cover.style.display = 'none';
        }, 1500); // Sesuaikan dengan durasi transisi di CSS
    });

    // 2. FUNGSI KONTROL MUSIK
    musicControl.addEventListener('click', () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicControl.classList.remove('paused');
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        } else {
            backgroundMusic.pause();
            musicControl.classList.add('paused');
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
        }
    });

    // 3. FUNGSI HITUNG MUNDUR
    const weddingDate = new Date("Dec 6, 2025 16:00:00").getTime();
    const countdownFunction = setInterval(function () {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown").innerHTML = "<h2>The day is here!</h2>";
            return;
        }
        document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);

    // 4. FUNGSI ANIMASI SAAT SCROLL
    const sections = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });
    sections.forEach(section => observer.observe(section));
});