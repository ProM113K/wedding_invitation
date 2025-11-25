window.addEventListener("load", function () {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
        })
            .then(() => {
                alert("Terima kasih telah memberikan konfirmasi!");
            })
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const guestList = {
        'D01-SKM5': 'Alumni SDN Sukamaju 5',
        'D02-King': 'King Ilham & Friends',
        'D03-YTTA': 'Sirkel YTTA',
        'D04-RPL': 'Alumni RPL SMK YAJ',
        'D05-TI413': 'Alumni TI 413 & TI 414 LP3I',
        'D06-GenZ-OMG': 'Ardhiffa, Nathan & Aslam',
        'D07-Frido': 'Frido Anggoro & Family',
        'D08-Andika': 'Andika & Family',
        'D09-Amri': 'Amri Rosadi',
        'D10-Tio': 'Tio & Partner',
        'G01-Alumni-87-SMKI': 'Alumni 87 SMKI',
        'G02-Alumni-SMKI-JBDTB': 'Alumni SMKI Jabodetabek',
        'G03-Evn-Jeff': 'Pak Jeffri Sugiarto & Family',
        'G04-Evn-Apin': 'Bang Apin & Family',
        'G05-Evn-Qory': 'Ka Qory & Family',
        'G06-Evn-Irma': 'Ka Irma & Partner',
        'G07-Evn-Novi': 'Ka Novi & Family',
        'G08-Evn-Mega': 'Ka Mega & Partner',
        'G09-Evn-Mita': 'Ka Mita & Partner',
        'G10-Evn-Nadira': 'Ka Nadira & Partner',
        'G11-Evn-Vela': 'Ka Vela & Partner',
        'G12-Evn-Putri': 'Ka Putri & Partner',
        'G13-Evn-Ipeh': 'Ipeh & Partner',
        'G14-Evn-Nita': 'Nita & Partner',
        'G15-Evn-Biswa': 'Biswa & Partner',
        'G16-Evn-Fauzan': 'Fauzan & Partner',
        'G17-Evn-Fadhil': 'Fadhli & Partner',
        'G18-Evn-Angela': 'Angela & Partner',
        'G19-Evn-Sifa': 'Sifa & Partner',
        'G20-Evn-Angel': 'Angel & Partner',
        'G21-SD-Apif': 'Apif & Partner',
        'G22-Penari-Abo': 'Uda Abo & Partner',
        'G23-SMP-Enuy': 'Enuy & Partner',
        'G24-SMP-Gamal': 'Gamal & Prtner',
        'G25-SMP-Hizqil': 'Hizqil & Partner',
        'G26-SMP-Maryana': 'Maryana & Partner',
        'G27-SMP-Septi': 'Septi & Partner',
        'G28-SMP-Vivin': 'Vivin & Partner',
        'G29-KKP-Angga': 'Bang Angga & Partner',
        'G30-KKP-Topan': 'Bang Topan & Partner',
        'G31-KKP-Anin': 'Mba Anin & Partner',
        'G32-SD-Monic': 'Monic & Partner',
        'G33-UHMK-Safier': 'Pak Safier & Partner',
        'G34-UHMK-Adel': 'Adel & Partner',
        'G35-UHMK-Ainaya': 'Ainaya & Partner',
        'G36-UHMK-Alif': 'Alif & Partner',
        'G37-UHMK-Alifio': 'Alifio & Partner',
        'G38-UHMK-April': 'April & Partner',
        'G39-UHMK-Ariv': 'Ariv & Partner',
        'G40-UHMK-Ariha': 'Ariha & Partner',
        'G41-UHMK-Asep': 'Asep & Partner',
        'G42-UHMK-Atsna': 'Atsna & Partner',
        'G43-UHMK-Apriatunisa': 'Apriatunisa & Partner',
        'G44-UHMK-Camel': 'Camel & Partner',
        'G45-UHMK-Jihan': 'Jihan & Partner',
        'G46-UHMK-Diah': 'Diah & Partner',
        'G47-UHMK-Dimas': 'Dimas & Partner',
        'G48-UHMK-Dinda': 'Dinda & Partner',
        'G49-UHMK-Dwi': 'Dwi & Partner',
        'G50-UHMK-Halawa': 'Halawa & Partner',
        'G51-UHMK-Ilham': 'Ilham & Partner',
        'G52-UHMK-Inay': 'Inay & Partner',
        'G53-UHMK-Indah': 'Indah & Partner',
        'G54-UHMK-Leny': 'Leny & Partner',
        'G55-UHMK-Lusiana': 'Lusiana & Partner',
        'G56-UHMK-Manda': 'Manda & Partner',
        'G57-UHMK-Mila': 'Mila & Partner',
        'G58-UHMK-Mufida': 'Mufida & Partner',
        'G59-UHMK-Nia': 'Nia & Partner',
        'G60-UHMK-Nisa': 'Nisa & Partner',
        'G61-UHMK-PutriAulia': 'Putri Aulia & Partner',
        'G62-UHMK-Putri': 'Putri & Partner',
        'G63-UHMK-Reza': 'Reza & Partner',
        'G64-UHMK-Rika': 'Rika & Partner',
        'G65-UHMK-Rozi': 'Rozi & Partner',
        'G66-UHMK-Ruli': 'Ruli & Partner',
        'G67-UHMK-Salsabilla': 'Salsabilla & Partner',
        'G68-UHMK-Sifa': 'Sifa & Partner',
        'G69-UHMK-Sila': 'Sila & Partner',
        'G70-UHMK-Sindy': 'Sindy & Partner',
        'G71-UHMK-Tya': 'Tya & Partner',
        'G72-UHMK-Wawa': 'Wawa & Partner',
        'G73-SMK-AlfianaAdit': 'Alfiana & Adit',
        'G74-SMK-Andin': 'Andin & Partner',
        'G75-SMK-Aprilia': 'Aprilia & Partner',
        'G76-SMK-Cindy': 'Cindy & Partner',
        'G77-SMK-Dea': 'Dea & Partner',
        'G78-SMK-Dede': 'Dede & Partner',
        'G79-SMK-Dijah': 'Dijah & Partner',
        'G80-SMK-Dila': 'Dila & Partner',
        'G81-SMK-Dinda': 'Dinda & Partner',
        'G82-SMK-DwiMutia': 'Dwi Mutia & Partner',
        'G83-SMK-Dwi': 'Dwi & Partner',
        'G84-SMK-Fanesa': 'Fanesa & Partner',
        'G85-SMK-Fauziyah': 'Fauziyah & Partner',
        'G86-SMK-IqbalYusuf': 'Iqbal Yusuf & Partner',
        'G87-SMK-Iqbal': 'Iqbal & Partner',
        'G88-SMK-Intan': 'Intan & Partner',
        'G89-SMK-Hamzah': 'Hamzah & Partner',
        'G90-SMK-Rafly': 'Rafly & Partner',
        'G91-SMK-TataPale': 'Tata & Pale',
        'G92-SMK-KumayDodo': 'Kumay & Dodo',
        'G93-SMK-Laila': 'Laila & Partner',
        'G94-SMK-Mayani': 'Mayani & Partner',
        'G95-SMK-Mule': 'Mule & Partner',
        'G96-SMK-Nabila': 'Nabila & Partner',
        'G97-SMK-NabilaFauzi': 'Nabila & Fauzi',
        'G98-SMK-Nada': 'Nada & Partner',
        'G99-SMK-Nadyah': 'Nadyah & Partner',
        'G100-SMK-Namira': 'Namira & Partner',
        'G101-SMK-NovitaMpok': 'Novita Mpok & Partner',
        'G102-SMK-Novsar': 'Novsar & Partner',
        'G103-SMK-Nurul': 'Nurul & Partner',
        'G104-SMK-Opik': 'Opik & Partner',
        'G105-SMK-Pina': 'Pina & Partner',
        'G106-SMK-PutriAyu': 'Putri Ayu & Partner',
        'G107-SMK-PutriMeisya': 'Putri Meisya & Partner',
        'G108-SMK-Qiara': 'Qiara & Partner',
        'G109-SMK-Ratna': 'Ratna & Partner',
        'G110-SMK-Rona': 'Rona & Partner',
        'G111-SMK-Salsa': 'Salsa & Partner',
        'G112-SMK-SitiJelay': 'Siti Jelay & Partner',
        'G115-SMK-Syahita': 'Syahita & Partner',
        'G116-SMK-SyifaKiting': 'Syifa Kiting & Partner',
        'G117-SMK-Tari': 'Tari & Partner',
        'G118-SMK-Utay': 'Utay & Partner',
        'G119-SMK-Virly': 'Virly & Partner',
        'G120-SMK-Widya': 'Widya & Partner',
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
        transfer1: {
            title: 'Bank Transfer',
            details: 'BCA: 8415675603\na.n. Ghina Ghaniyyah',
            copyText: '8415675603'
        },
        transfer2: {
            title: 'Bank Transfer',
            details: 'GoPay: 082110051312 \na.n. Dimas Putra Widiyanto',
            copyText: '082110051312'
        },
        gift: {
            title: 'Kirim Kado',
            details: 'Alamat:\nPerumahan Taman Bumyagara, Blok G8 No. 32, Sanggar VGV\n\nPenerima: Ghina & Dimas\n(Mohon konfirmasi via WA)',
            copyText: 'Perumahan Taman Bumyagara, Blok G8 No. 32, RT.6/RW.3, Mustika Jaya, Mustika Jaya (Sanggar VGV), MUSTIKA JAYA, KOTA BEKASI, JAWA BARAT, ID, 17158'
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