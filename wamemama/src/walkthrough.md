# Walkthrough - Pembaruan Desain & Fitur Wamemama English Class

Berikut adalah rangkuman perubahan terbaru pada website portofolio Wamemama English Class:

## Perubahan yang Dilakukan

### 1. Welcome Loading Screen [NEW]
- Menambahkan halaman Loading Screen (`WelcomeLoader.jsx`) sebelum masuk ke halaman utama portofolio.
- Menampilkan teks **"Welcome to Wamemama English class!"** dengan animasi fade-in yang halus.
- Menambahkan loading indicator (progress bar) berwarna biru langit (`#0ea5e9`) yang berjalan selama 2.5 detik sebelum memudar perlahan pada detik ke-3.0 dan melepas loader sepenuhnya pada detik ke-3.3.

### 2. Penataan Symmetrical & Ukuran Kartu Pengajar
- Mengubah `.teachers-section` agar menggunakan tinggi layar penuh (`min-height: 100vh`) dan konten di dalamnya berada tepat di tengah (vertikal dan horizontal).
- Mengecilkan ukuran 3 kartu pengajar sedikit dengan membatasi max-width kontainer menjadi `1260px` agar terlihat simetris dan elegan.
- Memperbesar ukuran teks Judul "Profil Pengajar" (`52px`) dan Subjudul (`22px`) agar proporsional dan mudah dibaca.
- Menambahkan drop shadow lembut (`box-shadow: 0 15px 35px rgba(0,0,0,0.12), 0 5px 15px rgba(0,0,0,0.06)`) pada kartu pengajar untuk tampilan visual yang lebih smooth dan premium.

### 3. Teks Nama Brand Pada Navbar
- Menambahkan teks **"Wamemama English Class"** berwarna putih di samping kanan logo navbar.
- Menyelaraskan teks brand dengan ukuran logo serta tinggi navbar agar terlihat rapi.
- Mengatur responsivitas agar ukuran teks mengecil secara otomatis pada tablet, dan disembunyikan di layar mobile yang sangat kecil guna menghindari tumpang tindih layout.

### 4. Modularisasi Halaman "Dalam Pengembangan" [NEW]
- Memisahkan komponen halaman "Dalam Pengembangan" ke berkas tersendiri (`DevelopmentPage.jsx`).
- Menghubungkan tombol **"Mulai Belajar"** di Hero section dan menu **"Artikel"** di Navbar agar berpindah ke halaman "Dalam Pengembangan" ini ketika diklik.
- Menambahkan tombol kembali ke halaman utama yang berfungsi secara mulus.

---

## Verifikasi Hasil

### Tampilan Welcome Loading Screen
![Welcome Loader](/C:/Users/Derajat/.gemini/antigravity-ide/brain/cf44d17e-c24d-4331-b3c0-fb3f8caf39bf/loading_bar_1786918400865.png)
