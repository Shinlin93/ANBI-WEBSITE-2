export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  content?: ArticleSection[];
};

export type ArticleSection = {
  type: "paragraph" | "heading" | "callout";
  text: string;
};

export const articles: Article[] = [
  {
    slug: "perbedaan-pt-perorangan-dan-pt-biasa",
    category: "Legalitas",
    title: "Apa Perbedaan PT Perorangan dan PT Biasa? Mana yang Tepat untuk Bisnis Anda?",
    excerpt:
      "Sejak berlakunya UU Cipta Kerja, PT Perorangan menjadi pilihan baru bagi pelaku usaha mikro dan kecil. Pahami perbedaan mendasarnya sebelum memilih bentuk badan usaha yang sesuai.",
    date: "12 Agustus 2026",
    readTime: "7 menit",
    image: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?w=1200&h=700&fit=crop&auto=format",
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "Sejak UU Cipta Kerja disahkan, PT Perorangan menjadi opsi yang semakin banyak dipertimbangkan oleh pelaku usaha mikro dan kecil di Indonesia. Berbeda dari PT konvensional, PT Perorangan dapat didirikan hanya oleh satu orang tanpa membutuhkan akta notaris.",
      },
      {
        type: "heading",
        text: "Syarat Pendirian: Jauh Lebih Sederhana",
      },
      {
        type: "paragraph",
        text: "PT Perorangan hanya memerlukan satu pendiri yang sekaligus menjadi direktur dan pemegang saham tunggal. Prosesnya dilakukan secara elektronik melalui sistem AHU Online, tanpa perlu akta notaris. Biaya pendiriannya pun jauh lebih terjangkau.",
      },
      {
        type: "callout",
        text: "Penting: PT Perorangan hanya tersedia untuk kriteria usaha mikro dan kecil. Jika usaha Anda sudah melewati ambang batas tersebut, Anda wajib mengubahnya menjadi PT konvensional.",
      },
      {
        type: "heading",
        text: "Perbedaan Tanggung Jawab Hukum",
      },
      {
        type: "paragraph",
        text: "Baik PT Perorangan maupun PT biasa memberikan perlindungan tanggung jawab terbatas kepada pemiliknya. Artinya, kewajiban pemilik terbatas pada modal yang disetorkan, bukan aset pribadi. Ini adalah keunggulan utama dibandingkan usaha perseorangan biasa.",
      },
      {
        type: "heading",
        text: "Kapan Memilih PT Biasa?",
      },
      {
        type: "paragraph",
        text: "Jika bisnis Anda memerlukan lebih dari satu pemegang saham, berencana mencari investor, atau sudah memasuki kategori usaha menengah dan besar, PT konvensional adalah pilihan yang lebih tepat. Struktur yang lebih formal juga memberikan kredibilitas lebih di mata mitra bisnis dan perbankan.",
      },
    ],
  },
  {
    slug: "panduan-pajak-umkm-2026",
    category: "Pajak",
    title: "Panduan Pajak UMKM 2026: Tarif, Kewajiban, dan Cara Melapor dengan Benar",
    excerpt:
      "UMKM dengan omzet di bawah Rp 500 juta mendapat fasilitas bebas pajak penghasilan. Pahami aturan terbaru agar bisnis Anda tetap patuh dan terhindar dari sanksi.",
    date: "28 Juli 2026",
    readTime: "9 menit",
    image: "https://images.unsplash.com/photo-1672917187338-7f81ecac3d3f?w=1200&h=700&fit=crop&auto=format",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "Ketentuan perpajakan untuk UMKM terus berkembang. Memahami kewajiban pajak yang berlaku bukan hanya soal kepatuhan hukum, tetapi juga soal efisiensi keuangan bisnis Anda.",
      },
      {
        type: "heading",
        text: "Tarif PPh Final UMKM",
      },
      {
        type: "paragraph",
        text: "Bagi UMKM yang memenuhi kriteria, tarif PPh Final yang berlaku adalah 0,5% dari peredaran bruto. Namun, UMKM dengan omzet di bawah Rp 500 juta per tahun mendapatkan fasilitas tidak dipungut PPh Final atas bagian omzet tersebut.",
      },
      {
        type: "callout",
        text: "Fasilitas ini berlaku sejak tahun pajak 2022 berdasarkan ketentuan PMK dan PP yang berlaku. Pastikan Anda memahami mekanisme penghitungannya agar tidak terjadi kesalahan laporan.",
      },
    ],
  },
  {
    slug: "mengapa-legalitas-bisnis-bukan-beban",
    category: "Bisnis",
    title: "Mengapa Legalitas Bisnis Bukan Beban, Melainkan Investasi Jangka Panjang",
    excerpt:
      "Banyak pengusaha memandang urusan legalitas sebagai kewajiban yang memberatkan. Padahal, badan usaha yang legal membuka akses ke perbankan, tender pemerintah, dan kepercayaan mitra.",
    date: "15 Juni 2026",
    readTime: "6 menit",
    image: "https://images.unsplash.com/photo-1592220769343-8a128527c5f1?w=1200&h=700&fit=crop&auto=format",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "Tidak sedikit pengusaha yang menunda pengurusan legalitas usaha karena menganggapnya rumit dan memakan biaya. Padahal, justru ketiadaan legalitas yang kerap menjadi hambatan terbesar ketika bisnis ingin berkembang.",
      },
      {
        type: "heading",
        text: "Akses Permodalan yang Lebih Luas",
      },
      {
        type: "paragraph",
        text: "Bank dan lembaga keuangan formal mensyaratkan legalitas usaha sebagai syarat pengajuan kredit. Tanpa NIB, NPWP, dan akta pendirian yang sah, peluang mendapatkan modal usaha dari jalur perbankan menjadi sangat terbatas.",
      },
    ],
  },
  {
    slug: "panduan-kitas-tenaga-kerja-asing",
    category: "HR",
    title: "Panduan Lengkap KITAS dan IMTA untuk Mempekerjakan Tenaga Kerja Asing di Indonesia",
    excerpt:
      "Mempekerjakan ekspatriat memerlukan izin khusus dari pemerintah. Ketahui prosedur, dokumen, dan kewajiban yang harus dipenuhi agar tidak terjerat sanksi ketenagakerjaan.",
    date: "3 Juni 2026",
    readTime: "10 menit",
    image: "https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?w=1200&h=700&fit=crop&auto=format",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "Mempekerjakan tenaga kerja asing (TKA) di Indonesia memerlukan serangkaian izin yang harus dipenuhi oleh perusahaan pemberi kerja. Proses ini melibatkan beberapa instansi pemerintah dan memerlukan perencanaan yang matang.",
      },
    ],
  },
  {
    slug: "kewajiban-pelaporan-bpjs-ketenagakerjaan",
    category: "Kepatuhan",
    title: "Kewajiban Pelaporan BPJS Ketenagakerjaan: Yang Perlu Diketahui Setiap Pengusaha",
    excerpt:
      "Setiap pemberi kerja wajib mendaftarkan karyawan ke BPJS Ketenagakerjaan. Pahami kewajiban iuran, pelaporan, dan konsekuensi jika tidak patuh.",
    date: "20 Mei 2026",
    readTime: "8 menit",
    image: "https://images.unsplash.com/photo-1681505504714-4ded1bc247e7?w=1200&h=700&fit=crop&auto=format",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "Kewajiban mendaftarkan pekerja ke BPJS Ketenagakerjaan berlaku bagi seluruh pemberi kerja di Indonesia, tanpa memandang skala usaha. Ketidakpatuhan dapat berujung pada sanksi administratif hingga pidana.",
      },
    ],
  },
  {
    slug: "tips-mendirikan-pt-di-sidoarjo",
    category: "Perizinan",
    title: "Tips Mendirikan PT di Sidoarjo: Prosedur, Waktu, dan Biaya yang Perlu Dipersiapkan",
    excerpt:
      "Mendirikan PT kini semakin dipermudah dengan sistem OSS. Namun ada tahapan dan persyaratan yang perlu Anda siapkan agar prosesnya berjalan tanpa hambatan.",
    date: "8 Mei 2026",
    readTime: "7 menit",
    image: "https://images.unsplash.com/photo-1564846824194-346b7871b855?w=1200&h=700&fit=crop&auto=format",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "Proses pendirian PT di Indonesia kini jauh lebih mudah berkat sistem Online Single Submission (OSS). Namun, masih ada sejumlah tahapan yang memerlukan perhatian agar izin usaha Anda keluar tanpa hambatan.",
      },
    ],
  },
];

export const categories = ["Semua", "Legalitas", "Perizinan", "Pajak", "Bisnis", "HR", "Kepatuhan"];

export function getArticlesByCategory(cat: string): Article[] {
  if (cat === "Semua") return articles;
  return articles.filter((a) => a.category === cat);
}
