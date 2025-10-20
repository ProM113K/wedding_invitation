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

// =======================================================
// FUNGSI UNTUK MODAL / POPUP KADO PERNIKAHAN
// =======================================================
const giftModal = document.getElementById('gift-modal');
if (giftModal) {
    const infoButtons = document.querySelectorAll('.info-btn');
    const closeModalBtn = document.querySelector('.modal-close-btn');
    const overlay = document.querySelector('.modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const copyButton = document.getElementById('modal-copy-btn');

    // ISI DETAIL KADO DI SINI
    // Ganti dengan informasi rekening, alamat, atau link gambar QRIS Anda
    const giftData = {
        transfer: {
            title: 'Bank Transfer',
            details: 'BCA: 1234567890\na.n. Ghina Ghaniyyah',
            copyText: '1234567890'
        },
        qris: {
            title: 'QRIS',
            // Ganti src="" dengan link gambar QRIS Anda
            details: '<img src="" alt="QR Code">',
            copyText: null // Tidak ada teks untuk disalin
        },
        gift: {
            title: 'Kirim Kado',
            details: 'Alamat:\nJl. Bahagia Selalu No. 123, Kota Kasih\n\nPenerima: Ghina & Dimas\n(Mohon konfirmasi via WA)',
            copyText: 'Jl. Bahagia Selalu No. 123, Kota Kasih'
        }
    };

    // Fungsi untuk membuka modal
    const openModal = (type) => {
        const data = giftData[type];
        if (!data) return;

        modalTitle.textContent = data.title;
        modalBody.innerHTML = data.details; // Menggunakan innerHTML agar tag <img> bisa dirender

        if (data.copyText) {
            copyButton.style.display = 'inline-flex';
            copyButton.dataset.copy = data.copyText;
            copyButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Salin`;
        } else {
            copyButton.style.display = 'none';
        }

        giftModal.classList.remove('hidden');
    };

    // Fungsi untuk menutup modal
    const closeModal = () => {
        giftModal.classList.add('hidden');
    };

    // Event listener untuk setiap tombol "Info"
    infoButtons.forEach(button => {
        button.addEventListener('click', () => {
            const giftType = button.dataset.giftType;
            openModal(giftType);
        });
    });

    // Event listener untuk tombol copy
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(copyButton.dataset.copy).then(() => {
            copyButton.textContent = 'Berhasil Disalin!';
            setTimeout(() => {
                copyButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Salin`;
            }, 2000);
        });
    });

    // Event listener untuk menutup modal
    closeModalBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
}