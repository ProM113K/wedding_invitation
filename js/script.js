document.addEventListener('DOMContentLoaded', () => {
    // Tanggal Pernikahan (Ganti dengan tanggal Anda: YYYY, MM-1, DD, HH, MM, SS)
    // Ingat, bulan di JS dimulai dari 0 (Januari = 0, Desember = 11)
    const weddingDate = new Date(2026, 1, 14, 9, 0, 0).getTime();

    const openButton = document.getElementById('open-invitation');
    const overlay = document.getElementById('opening-overlay');
    const mainContent = document.getElementById('main-content');
    const musicToggle = document.getElementById('music-toggle');
    const backgroundMusic = document.getElementById('background-music');

    /**
     * FUNGSI 1: TAMPILKAN NAMA TAMU DARI URL PARAMETER
     * Best Practice: Menggunakan URLSearchParams untuk parsing URL
     */
    function displayGuestName() {
        const urlParams = new URLSearchParams(window.location.search);
        const guest = urlParams.get('to'); // Cek parameter '?to=Nama+Tamu'
        const guestNameElement = document.getElementById('guest-name');

        if (guest) {
            // Hilangkan '+' atau ganti dengan spasi
            const formattedGuest = guest.replace(/\+/g, ' ');
            guestNameElement.textContent = formattedGuest;
        } else {
            // Default jika tidak ada parameter
            guestNameElement.textContent = 'Tamu Undangan';
        }
    }

    displayGuestName();

    /**
     * FUNGSI 2: BUKA UNDANGAN DAN PUTAR MUSIK
     */
    openButton.addEventListener('click', () => {
        // 1. Sembunyikan Overlay
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.classList.add('hidden');
            mainContent.classList.remove('hidden');
        }, 300); // Sesuaikan dengan transition-speed di CSS

        // 2. Putar Musik (Best Practice: Setelah interaksi user)
        if (backgroundMusic) {
            // Pastikan audio dimuat dengan baik
            backgroundMusic.volume = 0.7; // Atur volume
            backgroundMusic.play().catch(e => console.log("Music auto-play blocked:", e));
        }
    });

    /**
     * FUNGSI 3: HITUNG MUNDUR
     */
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Format dengan nol di depan
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

        // Jika hitungan mundur selesai
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown-timer').innerHTML = "<span>Acara Telah Selesai</span>";
        }
    }

    // Panggil fungsi setiap 1 detik
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Panggil sekali saat load agar tidak ada delay 1 detik

    /**
     * FUNGSI 4: TOGGLE MUSIK
     */
    let isPlaying = false;
    musicToggle.addEventListener('click', () => {
        if (backgroundMusic) {
            if (isPlaying) {
                backgroundMusic.pause();
                musicToggle.textContent = '🎵 Putar Musik';
            } else {
                backgroundMusic.play().catch(e => console.log("Play failed:", e));
                musicToggle.textContent = '⏸️ Jeda Musik';
            }
            isPlaying = !isPlaying;
        }
    });

    /**
     * FUNGSI 5: PENANGANAN FORM RSVP (Contoh sederhana)
     * Best Practice: Dalam proyek nyata, data ini harus dikirim ke server.
     */
    const rsvpForm = document.getElementById('rsvp-form');
    const formMessage = document.getElementById('form-message');

    rsvpForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Ambil data form
        const nama = document.getElementById('nama-tamu').value;
        const kehadiran = document.querySelector('input[name="kehadiran"]:checked').value;
        const jumlah = document.getElementById('jumlah-hadir').value;

        // Simulasi pengiriman data (ganti dengan AJAX/Fetch ke API Anda)
        console.log({ nama, kehadiran, jumlah });

        // Tampilkan pesan sukses
        formMessage.textContent = `Terima kasih ${nama}, konfirmasi kehadiran (${kehadiran}, ${jumlah} orang) telah kami terima.`;
        formMessage.style.color = 'green';
        rsvpForm.reset();

        // Dalam implementasi nyata: gunakan 'fetch' untuk POST data ke endpoint server.
    });
});