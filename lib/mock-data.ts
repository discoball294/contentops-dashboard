import { Account, ContentLog } from './types'

export const mockAccounts: Account[] = [
  {
    id: 'acc_1',
    handle: '@dariladang_id',
    platform: 'both',
    niche: 'MBG OR Makan Bergizi Gratis',
    brand_name: 'Dari Ladang',
    brand_colors: {
      primary: '#1A6B4A',
      accent: '#C47B1A',
      background: '#0D1B2A'
    },
    tone: 'Edukatif dan Menginspirasi',
    language: 'Indonesian',
    content_pillars: ['Petani', 'Fakta', 'UMKM'],
    hashtags_mandatory: ['#DariLadang', '#MakanBergiziGratis', '#PanganLokal'],
    brand_identity_text: 'Dari Ladang fokus pada edukasi program Makan Bergizi Gratis dan pemberdayaan pangan lokal.',
    active: true,
    created_at: new Date().toISOString(),
    instagram_username: 'dariladang_id',
    tiktok_username: 'dariladang_id'
  },
  {
    id: 'acc_2',
    handle: '@umkm.naik',
    platform: 'instagram',
    niche: 'UMKM Indonesia OR Produk Lokal',
    brand_name: 'UMKM Naik Kelas',
    brand_colors: {
      primary: '#3b82f6',
      accent: '#8b5cf6',
      background: '#0D1B2A'
    },
    tone: 'Energetik dan Mendukung',
    language: 'Indonesian',
    content_pillars: ['UMKM', 'Mitos'],
    hashtags_mandatory: ['#UMKMNaikKelas', '#ProdukLokal', '#BanggaBuatanIndonesia'],
    brand_identity_text: 'Mendukung pertumbuhan UMKM Indonesia melalui cerita inspiratif dan tips bisnis.',
    active: true,
    created_at: new Date().toISOString(),
    instagram_username: 'umkm.naik'
  },
  {
    id: 'acc_3',
    handle: '@panganlokal.id',
    platform: 'both',
    niche: 'Pertanian Indonesia OR Ketahanan Pangan',
    brand_name: 'Pangan Lokal ID',
    brand_colors: {
      primary: '#06b6d4',
      accent: '#10b981',
      background: '#0D1B2A'
    },
    tone: 'Informatif dan Berwibawa',
    language: 'Indonesian',
    content_pillars: ['Petani', 'Fakta'],
    hashtags_mandatory: ['#PanganLokal', '#PetaniIndonesia', '#KetahananPangan'],
    brand_identity_text: 'Fokus pada berita pertanian dan kisah sukses petani lokal di seluruh Indonesia.',
    active: true,
    created_at: new Date().toISOString(),
    instagram_username: 'panganlokal.id',
    tiktok_username: 'panganlokal.id'
  }
]

export const mockContentLogs: ContentLog[] = [
  {
    id: 'log_1',
    account_id: 'acc_1',
    account_handle: '@dariladang_id',
    date: '2024-05-20',
    article_title: 'Program Makan Bergizi Gratis Sasar 15 Juta Anak Sekolah',
    article_url: 'https://example.com/article-1',
    source: 'Antara News',
    pillar: 'Fakta',
    angle: 'Pemerintah mempercepat implementasi program MBG untuk meningkatkan kualitas SDM.',
    slides: [
      { slide_number: 1, function: 'Hook', text: '15 Juta Anak Sekolah akan dapat Makan Bergizi Gratis!', illustration: 'Anak sekolah ceria dengan kotak makan' },
      { slide_number: 2, function: 'Konteks', text: 'Pemerintah resmi mengumumkan perluasan program MBG tahun ini.', illustration: 'Infografis peta Indonesia' }
    ],
    caption_instagram: 'Kabar gembira! 🥳 Program Makan Bergizi Gratis akan segera menyapa 15 juta anak sekolah di seluruh Indonesia. Langkah besar untuk masa depan generasi bangsa! #DariLadang #MBG',
    caption_tiktok: '15 Juta anak sekolah dapat makan gratis! 🍱🇮🇩 #MBG #Indonesia',
    hashtags: '#DariLadang #MakanBergiziGratis #PanganLokal',
    image_url: '/images/samples/slide_01.png',
    visual_prompt: 'High quality photo of healthy Indonesian school lunch with rice, vegetables and protein.',
    status: 'pending'
  },
  {
    id: 'log_2',
    account_id: 'acc_1',
    account_handle: '@dariladang_id',
    date: '2024-05-21',
    article_title: 'Petani Lokal Pasok 70% Kebutuhan Bahan Baku MBG',
    article_url: 'https://example.com/article-2',
    source: 'Republika',
    pillar: 'Petani',
    angle: 'Kolaborasi petani lokal dalam mendukung rantai pasok program makan siang gratis.',
    slides: [
      { slide_number: 1, function: 'Hook', text: 'Siapa dibalik lezatnya Makan Bergizi Gratis?', illustration: 'Petani tersenyum di sawah' },
      { slide_number: 2, function: 'Fakta', text: '70% bahan baku berasal langsung dari petani lokal kita!', illustration: 'Truk mengangkut sayuran segar' }
    ],
    caption_instagram: 'Bangga banget! 🧑‍🌾 Ternyata mayoritas bahan baku program MBG berasal dari keringat petani lokal kita. Ekonomi desa bergerak, anak-anak sehat! #PetaniLokal #MBG',
    caption_tiktok: 'Petani lokal jadi pahlawan MBG! 🚜🥦 #Petani #PanganLokal',
    hashtags: '#DariLadang #PetaniIndonesia #MakanBergiziGratis',
    image_url: '/images/samples/slide_02.png',
    visual_prompt: 'Cinematic shot of a farmer harvesting fresh organic vegetables in a green field.',
    status: 'pending'
  },
  {
    id: 'log_3',
    account_id: 'acc_2',
    account_handle: '@umkm.naik',
    date: '2024-05-19',
    article_title: 'Kisah Sukses Keripik Tempe Ngawi Tembus Pasar Ekspor',
    article_url: 'https://example.com/article-3',
    source: 'Kompas',
    pillar: 'UMKM',
    angle: 'Inspirasi UMKM daerah yang berhasil melakukan ekspor dengan modal minimal.',
    slides: [
      { slide_number: 1, function: 'Hook', text: 'Dari Ngawi ke Dunia! 🌍 Keripik Tempe ini Laris Manis di Luar Negeri.', illustration: 'Keripik tempe dalam kemasan premium' },
      { slide_number: 2, function: 'Tips', text: 'Kuncinya ada pada kualitas bahan dan branding yang kuat.', illustration: 'Logo UMKM yang menarik' }
    ],
    caption_instagram: 'Inspirasi hari ini datang dari Ngawi! 💥 Keripik tempe lokal berhasil menembus pasar internasional. Bukti kalau UMKM kita punya kualitas dunia! #UMKMNaikKelas #Ekspor',
    caption_tiktok: 'Keripik Tempe Ngawi Go International! 🥨✈️ #UMKM #Sukses',
    hashtags: '#UMKMNaikKelas #ProdukLokal #BanggaBuatanIndonesia',
    image_url: '/images/samples/slide_03.png',
    visual_prompt: 'Modern packaging design for traditional Indonesian tempeh chips.',
    status: 'approved'
  },
  {
    id: 'log_4',
    account_id: 'acc_2',
    account_handle: '@umkm.naik',
    date: '2024-05-18',
    article_title: 'Mitos: Jualan Online Harus Punya Modal Jutaan',
    article_url: 'https://example.com/article-4',
    source: 'Detik Finance',
    pillar: 'Mitos',
    angle: 'Membedah kesalahan persepsi bahwa memulai bisnis digital butuh biaya besar.',
    slides: [
      { slide_number: 1, function: 'Hook', text: 'Gak punya modal jutaan gak bisa jualan online?', illustration: 'Orang bingung melihat dompet kosong' },
      { slide_number: 2, function: 'Mitos vs Fakta', text: 'MITOS! Sekarang bisa mulai jadi dropshipper atau reseller tanpa modal.', illustration: 'Smartphone menampilkan dashboard toko online' }
    ],
    caption_instagram: 'Siapa bilang jualan online harus mahal? 🤔 Yuk bedah mitos modal jutaan yang sering bikin takut mulai bisnis. Baca selengkapnya di slide! #BisnisOnline #TipsUMKM',
    caption_tiktok: 'Jualan online tanpa modal? Bisa banget! 📱💸 #MitosBisnis #UMKM',
    hashtags: '#UMKMNaikKelas #TipsBisnis #DigitalMarketing',
    image_url: '/images/samples/slide_04.png',
    visual_prompt: 'Flat lay of a workspace with a laptop, smartphone, and a cup of coffee.',
    status: 'rejected',
    rejection_note: 'Caption kurang menarik, tolong tambahkan lebih banyak call to action.'
  },
  {
    id: 'log_5',
    account_id: 'acc_3',
    account_handle: '@panganlokal.id',
    date: '2024-05-17',
    article_title: 'Inovasi Beras Singkong dari Gunungkidul Jadi Solusi Pangan',
    article_url: 'https://example.com/article-5',
    source: 'Tempo',
    pillar: 'Fakta',
    angle: 'Diversifikasi pangan lokal menggunakan singkong sebagai alternatif beras.',
    slides: [
      { slide_number: 1, function: 'Hook', text: 'Bukan Beras Biasa! 🍚 Ini Rahasia Pangan dari Gunungkidul.', illustration: 'Beras singkong berwarna putih bersih' },
      { slide_number: 2, function: 'Manfaat', text: 'Beras singkong lebih rendah glikemik dan kaya serat.', illustration: 'Grafik kesehatan' }
    ],
    caption_instagram: 'Singkong naik kelas! 🍠 Warga Gunungkidul berhasil mengolah singkong menjadi beras sehat. Solusi keren untuk ketahanan pangan kita! #PanganLokal #Inovasi',
    caption_tiktok: 'Beras dari singkong? Sehat dan mengenyangkan! 🍚🍠 #KetahananPangan #Lokal',
    hashtags: '#PanganLokal #Sehat #Gunungkidul',
    image_url: '/images/samples/slide_05.png',
    visual_prompt: 'Close up shot of cooked cassava rice in a wooden bowl.',
    status: 'published',
    published_at: '2024-05-18T10:00:00Z'
  },
  {
    id: 'log_6',
    account_id: 'acc_3',
    account_handle: '@panganlokal.id',
    date: '2024-05-16',
    article_title: 'Kisah Abah Jajang, Petani Milenial yang Omzetnya Ratusan Juta',
    article_url: 'https://example.com/article-6',
    source: 'Liputan6',
    pillar: 'Petani',
    angle: 'Profil petani muda yang sukses mengintegrasikan teknologi dalam pertanian.',
    slides: [
      { slide_number: 1, function: 'Hook', text: 'Jadi Petani Gak Bisa Kaya? 💸 Tanya Dulu sama Abah Jajang!', illustration: 'Pria muda sukses di lahan pertanian modern' },
      { slide_number: 2, function: 'Strategi', text: 'Gunakan sistem hidroponik dan pemasaran langsung ke konsumen.', illustration: 'Greenhouse modern' }
    ],
    caption_instagram: 'Siapa bilang jadi petani itu kuno? 🚜 Abah Jajang buktiin kalau jadi petani milenial itu prospeknya luar biasa. Inspirasi buat anak muda nih! #PetaniMilenial #Sukses',
    caption_tiktok: 'Petani muda omzet ratusan juta! 🚜💰 #PetaniMilenial #Inspirasi',
    hashtags: '#PetaniIndonesia #PanganLokal #MudaSukses',
    image_url: '/images/samples/slide_06.png',
    visual_prompt: 'Young entrepreneur standing in a high-tech hydroponic greenhouse.',
    status: 'approved'
  },
  {
    id: 'log_7',
    account_id: 'acc_1',
    account_handle: '@dariladang_id',
    date: '2024-05-15',
    article_title: 'Pentingnya Protein Hewani dalam Menu Makan Siang Gratis',
    article_url: 'https://example.com/article-7',
    source: 'Kemenkes',
    pillar: 'Fakta',
    angle: 'Edukasi gizi mengenai komposisi ideal makanan untuk anak sekolah.',
    slides: [
      { slide_number: 1, function: 'Hook', text: 'Kenapa Harus Ada Telur & Susu di MBG? 🥚🥛', illustration: 'Anak minum susu' },
      { slide_number: 2, function: 'Gizi', text: 'Protein hewani krusial untuk mencegah stunting dan kecerdasan otak.', illustration: 'Ilustrasi otak anak yang berkembang' }
    ],
    caption_instagram: 'Gizi seimbang itu kunci! 🔑 Dalam menu MBG, protein hewani seperti telur dan susu sangat diutamakan untuk cegah stunting. Generasi emas dimulai dari piring makan! #GiziSeimbang #MBG',
    caption_tiktok: 'Cegah stunting dengan protein hewani! 🥚🥛 #AnakSehat #MBG',
    hashtags: '#DariLadang #Kesehatan #GenerasiEmas',
    image_url: '/images/samples/slide_07.png',
    visual_prompt: 'Flat lay of a nutritious meal with eggs, milk, and vegetables.',
    status: 'published',
    published_at: '2024-05-16T08:00:00Z'
  },
  {
    id: 'log_8',
    account_id: 'acc_2',
    account_handle: '@umkm.naik',
    date: '2024-05-14',
    article_title: 'Cara Daftar Sertifikasi Halal Gratis bagi Pelaku UMKM',
    article_url: 'https://example.com/article-8',
    source: 'Kemenag',
    pillar: 'UMKM',
    angle: 'Panduan praktis mendapatkan sertifikasi halal tanpa biaya melalui program Sehati.',
    slides: [
      { slide_number: 1, function: 'Hook', text: 'Mau Produkmu Makin Laris? 📈 Daftar Halal GRATIS Sekarang!', illustration: 'Logo Halal Indonesia' },
      { slide_number: 2, function: 'Step-by-step', text: 'Siapkan NIB dan ikuti langkah mudah di website BPJPH.', illustration: 'Layar laptop pendaftaran online' }
    ],
    caption_instagram: 'Kesempatan emas buat UMKM! 🕌 Sertifikasi Halal sekarang bisa GRATIS lewat program Sehati. Yuk, bikin konsumen makin percaya sama produkmu! #HalalGratis #UMKM',
    caption_tiktok: 'Daftar Halal Gratis! Begini caranya.. ☪️✨ #UMKM #Halal',
    hashtags: '#UMKMNaikKelas #HalalIndonesia #TipsBisnis',
    image_url: '/images/samples/slide_08.png',
    visual_prompt: 'Close up of a Halal certification logo on a food package.',
    status: 'pending'
  },
  {
    id: 'log_9',
    account_id: 'acc_3',
    account_handle: '@panganlokal.id',
    date: '2024-05-13',
    article_title: 'Cuaca Ekstrem, Petani Cabai Gunakan Greenhouse Pintar',
    article_url: 'https://example.com/article-9',
    source: 'Media Indonesia',
    pillar: 'Petani',
    angle: 'Penerapan teknologi IoT dalam pertanian untuk menjaga produktivitas saat cuaca buruk.',
    slides: [
      { slide_number: 1, function: 'Hook', text: 'Hujan Gak Berhenti? 🌧️ Cabai Tetap Panen Melimpah!', illustration: 'Cabai merah segar di dalam greenhouse' },
      { slide_number: 2, function: 'Teknologi', text: 'Greenhouse pintar dengan sensor suhu otomatis jaga kualitas tanaman.', illustration: 'Dashboard sensor di smartphone' }
    ],
    caption_instagram: 'Teknologi jadi solusi! 🌶️ Meskipun cuaca lagi gak menentu, petani kita tetap bisa panen berkat Greenhouse pintar. Masa depan pertanian Indonesia cerah! #SmartFarming #Petani',
    caption_tiktok: 'Petani cabai anti gagal panen! 🌶️🤖 #SmartFarming #Lokal',
    hashtags: '#PetaniIndonesia #PanganLokal #TeknologiPertanian',
    image_url: '/images/samples/slide_01.png',
    visual_prompt: 'Vibrant red chili peppers growing in a modern, automated greenhouse.',
    status: 'pending'
  },
  {
    id: 'log_10',
    account_id: 'acc_1',
    account_handle: '@dariladang_id',
    date: '2024-05-12',
    article_title: 'Mitos: Susu Kedelai Lebih Sehat dari Susu Sapi untuk MBG',
    article_url: 'https://example.com/article-10',
    source: 'Nutrisi.id',
    pillar: 'Mitos',
    angle: 'Perbandingan kandungan nutrisi antara susu nabati dan hewani untuk pertumbuhan anak.',
    slides: [
      { slide_number: 1, function: 'Hook', text: 'Susu Kedelai vs Susu Sapi, Mana yang Lebih Oke?', illustration: 'Dua gelas susu berdampingan' },
      { slide_number: 2, function: 'Fakta', text: 'Keduanya baik, tapi susu sapi punya profil asam amino lebih lengkap untuk anak.', illustration: 'Tabel nutrisi' }
    ],
    caption_instagram: 'Jangan salah pilih ya! 🥛 Keduanya punya manfaat, tapi buat pertumbuhan optimal anak sekolah, susu sapi tetap juaranya. Simak bedanya! #InfoNutrisi #MBG',
    caption_tiktok: 'Susu sapi vs Susu kedelai, pilih mana? 🥛🤔 #MBG #Sehat',
    hashtags: '#DariLadang #InfoGizi #AnakSehat',
    image_url: '/images/samples/slide_02.png',
    visual_prompt: 'High quality studio shot of a glass of milk and soy milk side by side.',
    status: 'rejected',
    rejection_note: 'Sudut pandang terlalu memihak, tolong buat lebih netral.'
  },
  {
    id: 'log_11',
    account_id: 'acc_2',
    account_handle: '@umkm.naik',
    date: '2024-05-11',
    article_title: 'Strategi Live Shopping yang Bikin Jualan Ludes dalam 1 Jam',
    article_url: 'https://example.com/article-11',
    source: 'Forbes Indonesia',
    pillar: 'UMKM',
    angle: 'Teknik psikologi penjualan dan persiapan teknis untuk sukses di TikTok Live/Shopee Live.',
    slides: [
      { slide_number: 1, function: 'Hook', text: 'Live 1 Jam Langsung Sold Out? 😱 Ini Rahasianya!', illustration: 'Orang sedang live streaming dengan banyak paket' },
      { slide_number: 2, function: 'Tips', text: 'Siapkan penawaran terbatas dan interaksi yang intens dengan penonton.', illustration: 'Komentar live yang ramai' }
    ],
    caption_instagram: 'Mau jualanmu ludes kilat? ⚡️ Live shopping bukan cuma soal nyalain kamera. Ada strateginya biar penonton langsung checkout! Cek tipsnya! #LiveShopping #UMKM',
    caption_tiktok: 'Rahasia sold out lewat Live! 🛍️✨ #TipsJualan #UMKM',
    hashtags: '#UMKMNaikKelas #DigitalMarketing #LiveStreaming',
    image_url: '/images/samples/slide_03.png',
    visual_prompt: 'Professional live streaming setup with ring light and multiple smartphones.',
    status: 'published',
    published_at: '2024-05-12T19:00:00Z'
  },
  {
    id: 'log_12',
    account_id: 'acc_3',
    account_handle: '@panganlokal.id',
    date: '2024-05-10',
    article_title: 'Sorgum Jadi Primadona Baru Lahan Kering di NTT',
    article_url: 'https://example.com/article-12',
    source: 'VIVA',
    pillar: 'Fakta',
    angle: 'Keberhasilan budidaya sorgum sebagai pangan alternatif yang tahan kekeringan.',
    slides: [
      { slide_number: 1, function: 'Hook', text: 'Tanaman Ajaib yang Tahan Haus! 🌾 Sorgum Berjaya di NTT.', illustration: 'Lahan sorgum yang luas dan subur' },
      { slide_number: 2, function: 'Keunggulan', text: 'Sorgum tidak butuh banyak air dan sangat bergizi.', illustration: 'Butiran sorgum yang eksotis' }
    ],
    caption_instagram: 'Harapan baru dari NTT! 🌾 Sorgum terbukti tangguh hadapi lahan kering dan punya gizi tinggi. Alternatif keren pengganti nasi! #Sorgum #PanganLokal',
    caption_tiktok: 'Sorgum, tanaman masa depan Indonesia! 🌾🇮🇩 #KetahananPangan #NTT',
    hashtags: '#PanganLokal #Sorgum #IndonesiaTimur',
    image_url: '/images/samples/slide_04.png',
    visual_prompt: 'Beautiful sunset over a golden sorghum field.',
    status: 'approved'
  }
]
