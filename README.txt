RENAI STORE OPTIMA — WEBSITE STATIS SEDERHANA

ISI
- Website statis HTML/CSS/JavaScript, tanpa backend.
- Katalog 11 merek: Samsung, iPhone, Vivo, OPPO, Redmi, Realme, Xiaomi, Infinix, TECNO, itel, POCO.
- Menu toggle untuk layar HP dan pencarian merek.
- Halaman detail Infinix HOT 70 dengan galeri dua foto.
- Struktur gambar: assets/images/NAMA-MEREK/NAMA-MODEL/nama-model-1.png, -2.png, -3.png, dst.
- SEO dasar: title, meta description, canonical URL, Open Graph, robots.txt, sitemap.xml.

PENTING
1. URL publik yang ditetapkan untuk proyek ini: https://renaigvtl-dot.github.io/php/
2. Canonical, Open Graph URL, sitemap.xml, dan robots.txt sudah diarahkan ke URL publik tersebut.
3. Periksa semua harga, kondisi, spesifikasi, kelengkapan, kontak, dan ketersediaan sebelum tayang.
4. Foto Infinix HOT 70 memakai dua gambar yang disediakan pengguna. Gambar kedua digunakan sebagai foto tambahan.
5. Folder model boleh memiliki berapa pun foto, gunakan penomoran berurutan dan perbarui galeri pada halaman produk.
6. Tidak ada halaman promo.
7. SEO dan kepercayaan tidak dapat dijamin oleh kode saja. Informasi yang akurat, kontak aktif, HTTPS, dan kebijakan transaksi yang jelas akan membantu.
8. Untuk menerbitkan: buat repository GitHub, unggah isi folder ini, aktifkan GitHub Pages di Settings > Pages, lalu pastikan deployment GitHub Pages aktif, lalu kirim sitemap ke Google Search Console.

LOGO MEREK
Logo kategori merek disimpan lokal di assets/logos/ dan digunakan konsisten di beranda serta katalog. Untuk kebutuhan penggunaan komersial, pastikan penggunaan merek dagang dan berkas logo sesuai izin/pedoman masing-masing pemilik merek.


STRUKTUR KATALOG
- produk.html hanya menampilkan pilihan merek (Product Center).
- Produk terdaftar muncul di halaman merek masing-masing, misalnya merek/infinix.html.
- Detail Infinix HOT 70 tetap berada di produk/Infinix/HOT-70.html.


STRUKTUR KATALOG V6
- produk.html hanya berisi Product Center / logo merek.
- merek/<slug>.html menampilkan produk yang terdaftar untuk merek itu saja.
- produk/<Merek>/<MODEL>.html adalah halaman detail produk.
- Saat ini Infinix HOT 70 terdaftar pada merek/Infinix dan detailnya berada di produk/Infinix/HOT-70.html.
- Merek lain menampilkan keadaan kosong sampai produk masing-masing didaftarkan.

LOGO RESMI RENAI STORE OPTIMA
Logo utama resmi tersimpan di assets/images/renai-store-optima-logo.png dan digunakan pada header seluruh halaman situs, menggantikan placeholder huruf R.


PRODUK TAMBAHAN - RENAI STORE OPTIMA
- vivo Y11d: halaman produk produk/Vivo/Y11d.html. Dua foto yang diberikan disimpan di assets/images/Vivo/Y11d/.
- itel A100C: halaman produk produk/itel/A100C.html, harga Rp1.200.000. Path foto sudah dibuat tetapi file foto itel sengaja tidak disertakan agar bisa ditambahkan manual.
- Katalog merek vivo dan itel serta bagian Produk Pilihan di beranda sudah diperbarui.
- Logo toko telah diperbarui menjadi assets/images/renai-store-optima-logo.png.
- Harga vivo Y11d: Rp1.950.000.


KOMITMEN TRANSPARANSI — PEMBARUAN
- Beranda dan halaman identitas menegaskan transparansi produk dan transaksi, kehati-hatian, serta kepercayaan pelanggan.
- Keterangan hubungan platform dengan pendiri PT RENAI GVTL Indonesia tetap berada pada metadata terstruktur, bukan konten pengenalan yang terlihat oleh publik.
- Sebelum transaksi, konfirmasikan harga akhir, kondisi, kelengkapan, biaya tambahan jika ada, pembayaran, dan pengiriman.
- URL canonical, Open Graph, sitemap, dan robots.txt menggunakan https://renaigvtl-dot.github.io/php/.
- Setelah situs aktif di HTTPS, daftarkan properti situs dan kirim sitemap.xml melalui Google Search Console untuk meminta pengindeksan. Pengindeksan tidak dapat dijamin seketika.


PWA / APLIKASI LAYAR BERANDA
- manifest.webmanifest dan sw.js ditambahkan untuk dukungan instalasi PWA.
- Ikon aplikasi 192x192 dan 512x512 dibuat dari logo utama assets/images/renai-store-optima-logo.png, bukan favicon.
- Tombol Pasang aplikasi muncul di halaman situs. Browser yang mendukung akan menampilkan dialog instalasi; browser lain diarahkan ke menu Tambahkan ke layar utama.
- Pemasangan membutuhkan HTTPS untuk service worker; pada GitHub Pages gunakan URL resmi https://renaigvtl-dot.github.io/php/.
- Untuk menguji, unggah seluruh isi folder ke jalur GitHub Pages /php/, lalu buka situs di Chrome Android dan gunakan tombol Pasang aplikasi atau menu browser.

PRODUK VIVO Y33S
- Halaman detail: produk/Vivo/Y33s.html.
- Harga Rp1.100.000; kondisi 99% siap pakai, tanpa minus menurut keterangan penjual; full set; charger original; kabel original masih berfungsi tetapi hampir putus/terkelupas.
- Lima foto di assets/images/Vivo/Y33s/ telah ditautkan ke galeri. Spesifikasi teknis sengaja belum diisi dan menunggu data dari pemilik.

PENYELARASAN GAMBAR
- Nama file kompatibilitas untuk gambar Infinix HOT 70 dan itel A100C ditambahkan agar semua referensi gambar yang dipakai halaman situs dapat ditemukan.
- Kartu katalog menggunakan bingkai rasio konsisten dan object-fit: contain agar perangkat tidak terpotong.
