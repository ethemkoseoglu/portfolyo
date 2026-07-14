import type {
  Project,
  Experience,
  SkillCategory,
  Achievement,
  EducationItem,
  Certification,
  LanguageItem,
  NavItem,
} from "@/lib/types";

export type Lang = "tr" | "en";

/** All localized content + UI strings for one language. */
export interface Dict {
  nav: NavItem[];
  hero: { title: string };
  sectionTitles: {
    about: string;
    projects: string;
    experience: string;
    education: string;
    skills: string;
  };
  aboutValues: string[];
  aboutBio: string;
  projects: Project[];
  experiences: Experience[];
  skills: SkillCategory[];
  education: {
    items: EducationItem[];
    certifications: Certification[];
    languages: LanguageItem[];
  };
  achievement: Achievement;
  contactHeading: string;
  footer: {
    copyright: string;
    tagline: string;
    reminder: string;
    cols: { menu: string; projects: string; links: string; contact: string };
  };
  marquee: string[];
  ui: {
    viewDetails: string;
    backToProjects: string;
    viewLive: string;
    brand: string;
    program: string;
    detail: {
      problem: string;
      solution: string;
      contribution: string;
      features: string;
      learned: string;
      results: string;
      tech: string;
    };
    bracket: { role: string; status: string; tech: string };
    eduCols: { education: string; certifications: string; languages: string };
    sendEmail: string;
    getInTouch: string;
    cv: string;
    language: string;
    openMenu: string;
    closeMenu: string;
    contactLabel: string;
    social: { email: string; phone: string; linkedin: string; github: string };
    dt: { email: string; phone: string; location: string };
    form: {
      fullName: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      sentTitle: string;
      sentBefore: string;
      sentAfter: string;
      newMessage: string;
      errName: string;
      errEmailEmpty: string;
      errEmailInvalid: string;
      errSubject: string;
      errMessageEmpty: string;
      errMessageShort: string;
    };
  };
}

/* ============================== TÜRKÇE ============================== */
const tr: Dict = {
  nav: [
    { label: "Ana Sayfa", href: "/#ana-sayfa" },
    { label: "Hakkımda", href: "/#hakkimda" },
    { label: "Projeler", href: "/#projeler" },
    { label: "Deneyim", href: "/#deneyim" },
    { label: "Yetkinlikler", href: "/#yetkinlikler" },
    { label: "İletişim", href: "/#iletisim" },
  ],
  hero: { title: "İşletme problemlerini dijital ürünlere dönüştürüyorum." },
  sectionTitles: {
    about: "Hakkımda",
    projects: "Seçilmiş Projeler",
    experience: "Deneyim",
    education: "Eğitim ve Sertifikalar",
    skills: "Yetkinlikler",
  },
  aboutValues: [
    "İşletme Odaklı Yaklaşım",
    "Uçtan Uca Ürün Geliştirme",
    "Teknoloji ve Büyüme",
  ],
  aboutBio:
    "Endüstri Mühendisliği öğrencisiyim. İşletme süreçlerini yazılım ve ürün geliştirmeyle birleştiriyor; ERP sistemleri, B2B platformları ve yapay zekâ destekli ürünler geliştiriyorum.",
  projects: [
    {
      slug: "perdeno",
      name: "Perdeno",
      featured: true,
      order: 1,
      role: "Co-CEO · Product Development & Growth",
      status: "Aktif Geliştirme",
      logo: { src: "/images/logos/perdeno.png", alt: "Perdeno logosu" },
      liveUrl: "https://perdeno.com/",
      achievementNote:
        "Perdeno girişimiyle BiGG+ Boğaziçi Hızlandırma Programı'na kabul edildik.",
      shortDescription:
        "Perde ve ev tekstili sektörüne özel ERP ve yapay zekâ destekli dijital satış platformu.",
      detail:
        "Perdeno; sipariş, ölçü, metrekare bazlı fiyatlandırma, aksesuar, montaj, stok, müşteri cari hesabı, maliyet, kârlılık ve finansal raporlama süreçlerini tek sistemde birleştirir. Yapay zekâ modülü sayesinde kullanıcılar seçtikleri perde modellerini kendi mekân fotoğrafları üzerinde gerçekçi biçimde görüntüleyebilir.",
      contribution:
        "Co-CEO olarak ürün geliştirme, işletme süreçlerinin dijitalleştirilmesi, kullanıcı ihtiyaçlarının belirlenmesi, müşteri görüşmeleri, pazarlama ve büyüme stratejileri üzerinde aktif olarak çalışıyorum.",
      focus: ["ERP", "Yapay Zekâ", "B2B SaaS", "Ürün Stratejisi", "Pazarlama", "Growth", "İş Süreçleri"],
      tech: [],
      problem:
        "Perde ve ev tekstili sektöründe sipariş, ölçü, fiyatlandırma, aksesuar, montaj, stok ve cari hesap süreçleri çoğunlukla birbirinden kopuk, manuel araçlarla yürütülüyor.",
      solution:
        "Perdeno, tüm bu süreçleri tek bir sistemde birleştiren ERP ve yapay zekâ destekli bir dijital satış platformu olarak kurgulandı. Yapay zekâ modülü, kullanıcıların seçtikleri perde modellerini kendi mekân fotoğrafları üzerinde görüntülemesini sağlar.",
      features: [
        "Sipariş yönetimi",
        "Ölçü ve metrekare bazlı fiyatlandırma",
        "Aksesuar ve montaj takibi",
        "Stok yönetimi",
        "Müşteri cari hesabı",
        "Maliyet ve kârlılık analizi",
        "Finansal raporlama",
        "Yapay zekâ destekli mekân görselleştirme",
      ],
      lessons: [
        "Sektöre özgü karmaşık fiyatlandırma mantığının yazılıma doğru biçimde aktarılmasının önemi.",
        "ERP ve yapay zekâ deneyiminin tek üründe kullanıcı dostu biçimde birleştirilebilmesi.",
        "Teknik geliştirme ile iş geliştirme koordinasyonunun ürün başarısındaki rolü.",
        "Müşteri görüşmelerinin ürün önceliklendirmesine katkısı.",
      ],
      images: [{ src: "/images/projects/perdeno.svg", alt: "Perdeno görseli" }],
    },
    {
      slug: "misil",
      name: "Mışıl",
      featured: false,
      order: 2,
      role: "Founder · Product Developer",
      status: "Geliştirme Aşamasında",
      logo: { src: "/images/logos/misil.png", alt: "Mışıl logosu" },
      shortDescription:
        "Modern ve çalışan ebeveynlerin bebek bakım süreçlerini daha kolay yönetebilmesi için geliştirilen mobil uygulama.",
      detail:
        "Mışıl; bebeklerin uyku, beslenme, gelişim ve günlük bakım süreçlerinin tek uygulama üzerinden takip edilebilmesini amaçlayan bir ebeveyn teknolojisi girişimidir.",
      contribution:
        "Projenin fikir geliştirme, kullanıcı araştırması, marka oluşturma, ürün tasarımı, iş modeli, pazarlama ve yazılım geliştirme süreçlerini tek kurucu olarak yürütüyorum.",
      focus: ["Mobile Product", "Parenting Technology", "Startup Development", "UX", "Product Strategy", "Branding", "Growth"],
      tech: [],
      problem:
        "Modern ve çalışan ebeveynler; bebeklerinin uyku, beslenme, gelişim ve günlük bakım bilgilerini çoğunlukla dağınık notlar ya da farklı uygulamalarla takip ediyor.",
      solution:
        "Mışıl, bu süreçlerin tek bir uygulama üzerinden takip edilebilmesini amaçlayan bir ebeveyn teknolojisi ürünü olarak kurgulanıyor; dağınık kayıtları anlaşılır bir deneyimde bir araya getiriyor.",
      features: [
        "Uyku takibi",
        "Beslenme takibi",
        "Gelişim takibi",
        "Günlük bakım kayıtları",
        "Ebeveyn dostu, sade kullanıcı deneyimi",
      ],
      lessons: [
        "Tek kurucu olarak fikirden ürüne uzanan sürecin tüm adımlarını yönetmenin kazandırdığı bakış açısı.",
        "Kullanıcı araştırmasının ürün kurgusundaki belirleyici rolü.",
        "Ebeveyn gibi hassas bir kullanıcı grubu için sadelik ve güvenin önceliği.",
      ],
      images: [{ src: "/images/projects/misil.svg", alt: "Mışıl görseli" }],
    },
    {
      slug: "pigment-erp",
      name: "Pigment",
      featured: false,
      order: 3,
      role: "Product Developer",
      status: "Geliştirildi",
      logo: { src: "/images/logos/pigment.png", alt: "Pigment ERP logosu" },
      shortDescription:
        "Boya ve pigment işletmelerinin operasyonel ve finansal süreçleri için geliştirilen kurumsal ERP sistemi.",
      detail:
        "Pigment ERP; müşteri, iş emri, çalışan, malzeme, üretim operasyonları, görevler ve finans süreçlerinin merkezi bir panel üzerinden yönetilmesini sağlar. Yönetici ve çalışan kullanıcılar için rol bazlı erişim yapısı geliştirilmiştir.",
      focus: ["ERP", "Operasyon Yönetimi", "Finans", "İş Emri Yönetimi", "Rol Bazlı Yetkilendirme"],
      tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
      problem:
        "Boya ve pigment işletmelerinde müşteri, iş emri, malzeme, üretim ve finans süreçleri çoğunlukla birbirinden ayrı araçlarla yönetiliyor.",
      solution:
        "Pigment ERP, tüm bu süreçlerin merkezi bir panel üzerinden yönetilmesini sağlayan kurumsal bir ERP sistemi olarak geliştirildi.",
      features: [
        "Müşteri yönetimi",
        "İş emri yönetimi",
        "Çalışan yönetimi",
        "Malzeme yönetimi",
        "Üretim operasyonları takibi",
        "Görev yönetimi",
        "Finans yönetimi",
        "Rol bazlı erişim (yönetici / çalışan)",
      ],
      lessons: [
        "Farklı kullanıcı rolleri için tek sistemde tutarlı bir deneyim tasarlamanın önemi.",
        "Operasyon ve finans süreçlerinin tek panelde birleştirilmesinin sağladığı görünürlük.",
        "Rol bazlı yetkilendirmenin kurumsal yazılımlardaki kritik rolü.",
      ],
      images: [{ src: "/images/projects/pigment-erp.svg", alt: "Pigment ERP görseli" }],
    },
    {
      slug: "hassan-dekor-tools-b2b",
      name: "Hassan Dekor Tools",
      featured: false,
      order: 4,
      role: "B2B Product Developer",
      status: "Demo Sistem Çalışması",
      logo: { src: "/images/logos/hassan-dekor.png", alt: "Hassan Dekor Tools logosu" },
      shortDescription:
        "İnşaat el aletleri sektörüne yönelik geliştirilen kapsamlı B2B bayi yönetim sistemi çalışması.",
      detail:
        "Platform; ürün kataloğu, hızlı sipariş, stok takibi, kampanyalar, cari hesap, tahsilat, teknik dokümanlar, bayi yönetimi ve satış temsilcisi süreçlerini tek sistem altında toplar.",
      contribution:
        "Şirketin ürün, bayi ve sipariş süreçlerini analiz ederek sistem mimarisi, kullanıcı rolleri, modül planlaması, kullanıcı deneyimi ve yazılım geliştirme çalışmalarını yürüttüm.",
      focus: ["B2B Commerce", "Dealer Management", "Product Catalog", "ERP", "Role-Based Access", "Sales Operations"],
      tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
      problem:
        "İnşaat el aletleri sektöründe bayi, ürün, sipariş, stok ve tahsilat süreçleri farklı kanallarla yürütüldüğünde bayi yönetimi ve satış temsilcisi operasyonları dağınık hâle geliyor.",
      solution:
        "Bu demo sistem çalışmasında; ürün kataloğu, hızlı sipariş, stok, kampanya, cari hesap, tahsilat, teknik doküman, bayi ve satış temsilcisi süreçlerini tek sistem altında toplayan kapsamlı bir B2B bayi yönetim sistemi tasarlandı.",
      features: [
        "Ürün kataloğu",
        "Hızlı sipariş",
        "Stok takibi",
        "Kampanya yönetimi",
        "Cari hesap",
        "Tahsilat",
        "Teknik doküman yönetimi",
        "Bayi yönetimi",
        "Satış temsilcisi panelleri",
        "Rol bazlı yetkilendirme (bayi / satış temsilcisi / yönetici)",
      ],
      lessons: [
        "Gerçek işletme süreçlerinin analiz edilerek B2B sistem mimarisine dönüştürülmesinin önemi.",
        "Farklı kullanıcı rolleri için ayrı kullanım senaryoları tasarlamanın değeri.",
        "Bir demo sistem çalışmasının, ürün fikrini ve modül yapısını doğrulamadaki rolü.",
      ],
      images: [{ src: "/images/projects/hassan-dekor-tools-b2b.svg", alt: "Hassan Dekor Tools B2B görseli" }],
    },
    {
      slug: "moral-tekstil-b2b",
      name: "Moral Tekstil",
      featured: false,
      order: 5,
      role: "B2B Product Developer",
      status: "Dijital Dönüşüm Çalışması",
      logo: { src: "/images/logos/modehome.png", alt: "Modehome logosu" },
      shortDescription:
        "Tekstil sektöründeki bayi, sipariş ve satış süreçlerini dijitalleştirmek için geliştirilen B2B platform.",
      detail:
        "Platform; bayilerin ürünleri incelemesini, sipariş oluşturmasını, cari hesaplarını takip etmesini sağlar. Satış temsilcileri ve yöneticiler için CRM, bayi performansı, sipariş takibi, tahsilat ve satış analitiği modülleri planlanmıştır.",
      contribution:
        "Moral Tekstil'de gözlemlediğim bayi siparişleri, satış temsilcisi operasyonları ve müşteri süreçlerinden yola çıkarak platformun ürün kurgusu, modül yapısı ve geliştirme süreçlerini oluşturdum.",
      focus: ["Textile Technology", "B2B Ordering", "Dealer Management", "CRM", "Sales Analytics", "Digital Transformation"],
      tech: ["Next.js", "TypeScript", "Supabase", "MobX", "Tailwind CSS"],
      problem:
        "Tekstil sektöründe bayi siparişleri ve satış temsilcisi operasyonları büyük ölçüde manuel yöntemlerle yürütülüyor.",
      solution:
        "Platform; bayilerin ürünleri incelemesini, sipariş oluşturmasını ve operasyonlarını dijital ortamdan yönetmesini sağlayacak biçimde kurgulandı; CRM ve satış analitiği modülleri planlandı.",
      features: [
        "Bayi ürün kataloğu",
        "Sipariş oluşturma",
        "Cari hesap takibi",
        "CRM",
        "Bayi performans takibi",
        "Sipariş takibi",
        "Tahsilat",
        "Satış analitiği",
      ],
      lessons: [
        "Saha deneyiminden elde edilen gözlemlerin dijital ürün kurgusuna dönüştürülmesinin değeri.",
        "B2B sipariş ve CRM süreçlerinin birlikte tasarlanmasının önemi.",
        "Satış analitiğinin karar alma süreçlerine sağladığı katkı.",
      ],
      images: [{ src: "/images/projects/moral-tekstil-b2b.svg", alt: "Moral Tekstil B2B görseli" }],
    },
    {
      slug: "dry-cleanic",
      name: "Dry Cleanic",
      featured: false,
      order: 6,
      role: "Web Developer",
      status: "Kurumsal Web Projesi",
      logo: { src: "/images/logos/dry-cleanic.png", alt: "Dry Cleanic logosu" },
      liveUrl: "https://drycleanic.com/",
      shortDescription:
        "Denizli merkezli kuru temizleme işletmesi için geliştirilen modern ve mobil uyumlu kurumsal internet sitesi.",
      detail:
        "Dry Cleanic'in hizmetlerini dijital ortamda etkili biçimde sunmak, yerel arama görünürlüğünü geliştirmek ve müşterilerin hızlı iletişim kurmasını sağlamak amacıyla tasarlanmıştır. Mobil uyumluluk, WhatsApp iletişimi ve yerel SEO öncelikli ele alınmıştır.",
      focus: ["Corporate Website", "Responsive Design", "Local SEO", "Conversion", "User Experience"],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Local Business Schema"],
      problem:
        "İşletmenin hizmetlerini dijital ortamda etkili biçimde sunacak, yerel arama görünürlüğünü güçlendirecek modern bir dijital varlığa ihtiyacı vardı.",
      solution:
        "Dry Cleanic için mobil uyumlu, modern ve kurumsal bir internet sitesi geliştirildi; WhatsApp iletişimi, yerel SEO ve kullanıcı deneyimi öncelikli ele alındı.",
      features: [
        "Modern kurumsal tasarım",
        "Mobil uyumluluk",
        "WhatsApp iletişim entegrasyonu",
        "Yerel SEO",
        "Hizmet tanıtımı",
        "Kullanıcı deneyimi odaklı düzen",
      ],
      lessons: [
        "Yerel işletmeler için dijital görünürlüğün ve hızlı iletişimin dönüşüme etkisi.",
        "Yerel SEO ve mobil deneyimin küçük işletmeler için önceliği.",
        "Sade ve amaç odaklı bir kurumsal web deneyiminin değeri.",
      ],
      images: [{ src: "/images/projects/dry-cleanic.svg", alt: "Dry Cleanic görseli" }],
    },
  ],
  experiences: [
    { company: "Hassan Dekor Tools", role: "Planlama ve Bilgi Teknolojileri Stajyeri", period: "2026", description: "", highlights: [] },
    { company: "Moral Tekstil / Modehome", role: "Yurtiçi Satış ve Dijital Dönüşüm Stajyeri", period: "2025", description: "", highlights: [] },
    { company: "Kayı Perde", role: "Satış Operasyonları Asistanı · Uzaktan", period: "2022 – 2024", description: "", highlights: [] },
  ],
  skills: [
    { title: "Yazılım ve Veri", skills: ["Next.js", "React", "TypeScript", "JavaScript", "Python", "SQL", "Supabase", "PostgreSQL", "Power BI (PL-300)", "Veri Modelleme", "Tailwind CSS", "MobX", "Git", "Vercel"] },
    { title: "Ürün Geliştirme", skills: ["Ürün Stratejisi", "MVP Geliştirme", "Kullanıcı Deneyimi", "Ürün Gereksinimleri", "Kullanıcı Araştırması", "Yol Haritası Oluşturma", "Prototipleme", "Test ve İyileştirme"] },
    { title: "İşletme ve Operasyon", skills: ["İş Süreçleri Analizi", "ERP Tasarımı", "B2B Sistemleri", "Süreç Dijitalleştirme", "Operasyon Yönetimi", "Bayi Yönetimi", "Satış Süreçleri", "Raporlama ve Analitik"] },
    { title: "Girişimcilik ve Growth", skills: ["Pazar Araştırması", "İş Modeli Geliştirme", "Müşteri Görüşmeleri", "B2B Satış", "Pazarlama", "Marka Konumlandırma", "Growth", "Sunum ve Hikâyeleştirme"] },
  ],
  education: {
    items: [
      { degree: "Endüstri Mühendisliği (Lisans)", school: "İstanbul Medipol Üniversitesi", period: "2022 – Günümüz" },
      { degree: "İşletme Yönetimi (Önlisans)", school: "Anadolu Üniversitesi", period: "2023 – Günümüz" },
    ],
    certifications: [
      { title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)", issuer: "Microsoft" },
      { title: "Big Data & Business Analytics Uzmanlık Programı", issuer: "İTÜ SEM" },
      { title: "Proje Yönetimi Uzmanlık Programı", issuer: "Yıldız Teknik Üniversitesi SEM" },
    ],
    languages: [
      { name: "Türkçe", level: "Ana dil" },
      { name: "İngilizce", level: "B2 — Orta-İleri" },
      { name: "Almanca", level: "A1 — Başlangıç" },
    ],
  },
  achievement: {
    program: "BiGG+ Boğaziçi",
    title: "Perdeno ile Hızlandırma Programına Kabul",
    description: "Perdeno girişimiyle BiGG+ Boğaziçi Hızlandırma Programı'na kabul edildik.",
    tags: ["Girişimcilik", "Ürün Doğrulama", "İş Modeli"],
  },
  contactHeading: "Benimle iletişime geçin.",
  footer: {
    copyright: "© 2026 Ethem Köseoğlu. Tüm hakları saklıdır.",
    tagline: "Ürün, teknoloji ve işletme süreçlerinin kesişiminde geliştirildi.",
    reminder: "Yeni projeler ve iş birlikleri için her zaman ulaşabilirsiniz.",
    cols: { menu: "Menü", projects: "Projeler", links: "Bağlantılar", contact: "İletişim" },
  },
  marquee: ["ÜRÜN GELİŞTİRME", "ERP", "B2B SİSTEMLER", "YAPAY ZEKÂ", "GROWTH", "GİRİŞİMCİLİK"],
  ui: {
    viewDetails: "Detayları Gör",
    backToProjects: "Projelere Dön",
    viewLive: "Canlı Siteyi Gör",
    brand: "Marka",
    program: "Program",
    detail: {
      problem: "Tespit Edilen Problem",
      solution: "Geliştirilen Çözüm",
      contribution: "Katkım",
      features: "Özellikler / Modüller",
      learned: "Öğrendiklerim",
      results: "Sonuçlar",
      tech: "Teknolojiler",
    },
    bracket: { role: "ROL", status: "DURUM", tech: "TEKNOLOJİLER" },
    eduCols: { education: "Eğitim", certifications: "Sertifikalar", languages: "Diller" },
    sendEmail: "E-posta Gönder",
    getInTouch: "İletişime Geç",
    cv: "CV",
    language: "Dil",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    contactLabel: "İletişim",
    social: { email: "E-posta", phone: "Telefon", linkedin: "LinkedIn", github: "GitHub" },
    dt: { email: "E-posta", phone: "Telefon", location: "Konum" },
    form: {
      fullName: "Ad Soyad",
      email: "E-posta",
      subject: "Konu",
      message: "Mesaj",
      send: "Mesajı Gönder",
      sentTitle: "Mesajınız hazır.",
      sentBefore:
        "E-posta uygulamanızı mesajınızla birlikte açtım. Otomatik açılmadıysa doğrudan",
      sentAfter: "adresine yazabilirsiniz.",
      newMessage: "Yeni Mesaj Yaz",
      errName: "Lütfen ad soyad girin.",
      errEmailEmpty: "Lütfen e-posta adresinizi girin.",
      errEmailInvalid: "Geçerli bir e-posta adresi girin.",
      errSubject: "Lütfen bir konu girin.",
      errMessageEmpty: "Lütfen mesajınızı girin.",
      errMessageShort: "Mesajınız en az 10 karakter olmalı.",
    },
  },
};

/* ============================== ENGLISH ============================== */
const en: Dict = {
  nav: [
    { label: "Home", href: "/#ana-sayfa" },
    { label: "About", href: "/#hakkimda" },
    { label: "Projects", href: "/#projeler" },
    { label: "Experience", href: "/#deneyim" },
    { label: "Skills", href: "/#yetkinlikler" },
    { label: "Contact", href: "/#iletisim" },
  ],
  hero: { title: "I turn business problems into digital products." },
  sectionTitles: {
    about: "About",
    projects: "Selected Projects",
    experience: "Experience",
    education: "Education & Certifications",
    skills: "Skills",
  },
  aboutValues: [
    "Business-First Approach",
    "End-to-End Product Development",
    "Technology & Growth",
  ],
  aboutBio:
    "I'm an Industrial Engineering student. I combine business processes with software and product development — building ERP systems, B2B platforms and AI-powered products.",
  projects: [
    {
      slug: "perdeno",
      name: "Perdeno",
      featured: true,
      order: 1,
      role: "Co-CEO · Product Development & Growth",
      status: "In Active Development",
      logo: { src: "/images/logos/perdeno.png", alt: "Perdeno logo" },
      liveUrl: "https://perdeno.com/",
      achievementNote:
        "With Perdeno, we were accepted into the BiGG+ Boğaziçi Acceleration Program.",
      shortDescription:
        "An ERP and AI-powered digital sales platform built for the curtain and home-textile industry.",
      detail:
        "Perdeno unifies order management, measurements, square-meter-based pricing, accessories, installation, stock, customer accounts, cost, profitability and financial reporting in a single system. Its AI module lets users realistically preview curtain models on photos of their own spaces.",
      contribution:
        "As Co-CEO I actively work on product development, digitalizing business processes, identifying user needs, customer interviews, marketing and growth strategy.",
      focus: ["ERP", "AI", "B2B SaaS", "Product Strategy", "Marketing", "Growth", "Business Processes"],
      tech: [],
      problem:
        "In the curtain and home-textile sector, orders, measurements, pricing, accessories, installation, stock and customer accounts are mostly handled with disconnected, manual tools.",
      solution:
        "Perdeno was designed as an ERP and AI-powered digital sales platform that brings all these processes into one system. Its AI module lets users preview selected curtain models on photos of their own spaces.",
      features: [
        "Order management",
        "Measurement & square-meter pricing",
        "Accessory & installation tracking",
        "Stock management",
        "Customer accounts",
        "Cost & profitability analysis",
        "Financial reporting",
        "AI-powered space visualization",
      ],
      lessons: [
        "The importance of correctly translating the sector's complex pricing logic into software.",
        "Combining ERP and AI into a single, user-friendly product.",
        "The role of coordinating technical and business development in a product's success.",
        "How customer interviews feed product prioritization.",
      ],
      images: [{ src: "/images/projects/perdeno.svg", alt: "Perdeno visual" }],
    },
    {
      slug: "misil",
      name: "Mışıl",
      featured: false,
      order: 2,
      role: "Founder · Product Developer",
      status: "In Development",
      logo: { src: "/images/logos/misil.png", alt: "Mışıl logo" },
      shortDescription:
        "A mobile app that helps modern, working parents manage their baby-care routines more easily.",
      detail:
        "Mışıl is a parenting-technology venture that aims to let parents track a baby's sleep, feeding, development and daily care from a single app.",
      contribution:
        "As the sole founder I run the idea development, user research, branding, product design, business model, marketing and software development.",
      focus: ["Mobile Product", "Parenting Technology", "Startup Development", "UX", "Product Strategy", "Branding", "Growth"],
      tech: [],
      problem:
        "Modern, working parents mostly track their baby's sleep, feeding, development and daily-care information through scattered notes or different apps.",
      solution:
        "Mışıl is designed as a parenting-technology product that lets these processes be tracked from a single app, bringing scattered records into a clear experience.",
      features: [
        "Sleep tracking",
        "Feeding tracking",
        "Development tracking",
        "Daily care records",
        "Parent-friendly, simple UX",
      ],
      lessons: [
        "The holistic perspective gained from running every step from idea to product as a solo founder.",
        "The decisive role of user research in shaping the product.",
        "The priority of simplicity and trust for a sensitive user group like parents.",
      ],
      images: [{ src: "/images/projects/misil.svg", alt: "Mışıl visual" }],
    },
    {
      slug: "pigment-erp",
      name: "Pigment",
      featured: false,
      order: 3,
      role: "Product Developer",
      status: "Shipped",
      logo: { src: "/images/logos/pigment.png", alt: "Pigment ERP logo" },
      shortDescription:
        "An enterprise ERP system built for the operational and financial processes of paint and pigment businesses.",
      detail:
        "Pigment ERP lets customers, work orders, employees, materials, production operations, tasks and finance be managed from a central panel, with role-based access for admin and employee users.",
      focus: ["ERP", "Operations Management", "Finance", "Work-Order Management", "Role-Based Access"],
      tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
      problem:
        "In paint and pigment businesses, customers, work orders, materials, production and finance are often managed with separate tools.",
      solution:
        "Pigment ERP was built as an enterprise ERP that manages all these processes from a central panel.",
      features: [
        "Customer management",
        "Work-order management",
        "Employee management",
        "Material management",
        "Production-operation tracking",
        "Task management",
        "Finance management",
        "Role-based access (admin / employee)",
      ],
      lessons: [
        "The importance of designing a consistent experience for different user roles in one system.",
        "The visibility gained from unifying operations and finance in a single panel.",
        "The critical role of role-based authorization in enterprise software.",
      ],
      images: [{ src: "/images/projects/pigment-erp.svg", alt: "Pigment ERP visual" }],
    },
    {
      slug: "hassan-dekor-tools-b2b",
      name: "Hassan Dekor Tools",
      featured: false,
      order: 4,
      role: "B2B Product Developer",
      status: "Demo System Study",
      logo: { src: "/images/logos/hassan-dekor.png", alt: "Hassan Dekor Tools logo" },
      shortDescription:
        "A comprehensive B2B dealer-management system study for the construction hand-tools sector.",
      detail:
        "The platform gathers product catalog, quick ordering, stock tracking, campaigns, current accounts, collections, technical documents, dealer management and sales-rep processes under one system.",
      contribution:
        "By analyzing the company's product, dealer and order processes, I carried out the system architecture, user roles, module planning, UX and software development.",
      focus: ["B2B Commerce", "Dealer Management", "Product Catalog", "ERP", "Role-Based Access", "Sales Operations"],
      tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
      problem:
        "In the construction hand-tools sector, running dealer, product, order, stock and collection processes through different channels leaves them scattered.",
      solution:
        "In this demo system study, a comprehensive B2B dealer-management system was designed that gathers all these processes under one system, with role-based panels for dealer, sales-rep and admin users.",
      features: [
        "Product catalog",
        "Quick ordering",
        "Stock tracking",
        "Campaign management",
        "Current accounts",
        "Collections",
        "Technical-document management",
        "Dealer management",
        "Sales-rep panels",
        "Role-based authorization (dealer / sales-rep / admin)",
      ],
      lessons: [
        "The importance of turning real business processes into a B2B system architecture.",
        "The value of designing separate usage scenarios for different user roles.",
        "The role of a demo study in validating a product idea and module structure.",
      ],
      images: [{ src: "/images/projects/hassan-dekor-tools-b2b.svg", alt: "Hassan Dekor Tools B2B visual" }],
    },
    {
      slug: "moral-tekstil-b2b",
      name: "Moral Tekstil",
      featured: false,
      order: 5,
      role: "B2B Product Developer",
      status: "Digital Transformation Study",
      logo: { src: "/images/logos/modehome.png", alt: "Modehome logo" },
      shortDescription:
        "A B2B platform built to digitalize dealer, order and sales processes in the textile sector.",
      detail:
        "The platform lets dealers browse products, place orders and track their current accounts. CRM, dealer performance, order tracking, collections and sales-analytics modules were planned for sales reps and managers.",
      contribution:
        "Based on the dealer orders, sales-rep operations and customer processes I observed at Moral Tekstil, I created the platform's product concept, module structure and development processes.",
      focus: ["Textile Technology", "B2B Ordering", "Dealer Management", "CRM", "Sales Analytics", "Digital Transformation"],
      tech: ["Next.js", "TypeScript", "Supabase", "MobX", "Tailwind CSS"],
      problem:
        "In the textile sector, dealer orders and sales-rep operations are largely handled with manual methods.",
      solution:
        "The platform was designed to let dealers browse products, place orders and manage operations digitally, with CRM and sales-analytics modules.",
      features: [
        "Dealer product catalog",
        "Order creation",
        "Current-account tracking",
        "CRM",
        "Dealer performance tracking",
        "Order tracking",
        "Collections",
        "Sales analytics",
      ],
      lessons: [
        "The value of turning field observations into a digital product concept.",
        "The importance of designing B2B ordering and CRM processes together.",
        "The contribution of sales analytics to decision-making.",
      ],
      images: [{ src: "/images/projects/moral-tekstil-b2b.svg", alt: "Moral Tekstil B2B visual" }],
    },
    {
      slug: "dry-cleanic",
      name: "Dry Cleanic",
      featured: false,
      order: 6,
      role: "Web Developer",
      status: "Corporate Web Project",
      logo: { src: "/images/logos/dry-cleanic.png", alt: "Dry Cleanic logo" },
      liveUrl: "https://drycleanic.com/",
      shortDescription:
        "A modern, mobile-friendly corporate website built for a Denizli-based dry-cleaning business.",
      detail:
        "It was designed to present Dry Cleanic's services effectively online, improve local search visibility and let customers get in touch quickly. Mobile-friendliness, WhatsApp contact and local SEO were prioritized.",
      focus: ["Corporate Website", "Responsive Design", "Local SEO", "Conversion", "User Experience"],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Local Business Schema"],
      problem:
        "The business needed a modern digital presence to present its services effectively online and strengthen local search visibility.",
      solution:
        "A modern, mobile-friendly corporate website was built for Dry Cleanic, prioritizing WhatsApp contact, local SEO and user experience.",
      features: [
        "Modern corporate design",
        "Mobile-friendly",
        "WhatsApp contact integration",
        "Local SEO",
        "Service showcase",
        "UX-focused layout",
      ],
      lessons: [
        "The impact of digital visibility and quick contact on conversion for local businesses.",
        "The priority of local SEO and mobile experience for small businesses.",
        "The value of a simple, purpose-driven corporate web experience.",
      ],
      images: [{ src: "/images/projects/dry-cleanic.svg", alt: "Dry Cleanic visual" }],
    },
  ],
  experiences: [
    { company: "Hassan Dekor Tools", role: "Planning & IT Intern", period: "2026", description: "", highlights: [] },
    { company: "Moral Tekstil / Modehome", role: "Domestic Sales & Digital Transformation Intern", period: "2025", description: "", highlights: [] },
    { company: "Kayı Perde", role: "Sales Operations Assistant · Remote", period: "2022 – 2024", description: "", highlights: [] },
  ],
  skills: [
    { title: "Software & Data", skills: ["Next.js", "React", "TypeScript", "JavaScript", "Python", "SQL", "Supabase", "PostgreSQL", "Power BI (PL-300)", "Data Modeling", "Tailwind CSS", "MobX", "Git", "Vercel"] },
    { title: "Product Development", skills: ["Product Strategy", "MVP Development", "User Experience", "Product Requirements", "User Research", "Roadmapping", "Prototyping", "Testing & Iteration"] },
    { title: "Business & Operations", skills: ["Business Process Analysis", "ERP Design", "B2B Systems", "Process Digitalization", "Operations Management", "Dealer Management", "Sales Processes", "Reporting & Analytics"] },
    { title: "Entrepreneurship & Growth", skills: ["Market Research", "Business Modeling", "Customer Interviews", "B2B Sales", "Marketing", "Brand Positioning", "Growth", "Presentation & Storytelling"] },
  ],
  education: {
    items: [
      { degree: "Industrial Engineering (B.Sc.)", school: "Istanbul Medipol University", period: "2022 – Present" },
      { degree: "Business Management (Associate)", school: "Anadolu University", period: "2023 – Present" },
    ],
    certifications: [
      { title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)", issuer: "Microsoft" },
      { title: "Big Data & Business Analytics Specialization", issuer: "ITU SEM" },
      { title: "Project Management Specialization", issuer: "Yıldız Technical University SEM" },
    ],
    languages: [
      { name: "Turkish", level: "Native" },
      { name: "English", level: "B2 — Upper-Intermediate" },
      { name: "German", level: "A1 — Beginner" },
    ],
  },
  achievement: {
    program: "BiGG+ Boğaziçi",
    title: "Accepted to the Accelerator with Perdeno",
    description: "With Perdeno, we were accepted into the BiGG+ Boğaziçi Acceleration Program.",
    tags: ["Entrepreneurship", "Product Validation", "Business Model"],
  },
  contactHeading: "Get in touch.",
  footer: {
    copyright: "© 2026 Ethem Köseoğlu. All rights reserved.",
    tagline: "Built at the intersection of product, technology and business.",
    reminder: "Always reachable for new projects and collaborations.",
    cols: { menu: "Menu", projects: "Projects", links: "Links", contact: "Contact" },
  },
  marquee: ["PRODUCT DEVELOPMENT", "ERP", "B2B SYSTEMS", "AI", "GROWTH", "ENTREPRENEURSHIP"],
  ui: {
    viewDetails: "View Details",
    backToProjects: "Back to Projects",
    viewLive: "View Live Site",
    brand: "Brand",
    program: "Program",
    detail: {
      problem: "The Problem",
      solution: "The Solution",
      contribution: "My Contribution",
      features: "Features / Modules",
      learned: "What I Learned",
      results: "Results",
      tech: "Technologies",
    },
    bracket: { role: "ROLE", status: "STATUS", tech: "TECH" },
    eduCols: { education: "Education", certifications: "Certifications", languages: "Languages" },
    sendEmail: "Send Email",
    getInTouch: "Get in Touch",
    cv: "CV",
    language: "Language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    contactLabel: "Contact",
    social: { email: "Email", phone: "Phone", linkedin: "LinkedIn", github: "GitHub" },
    dt: { email: "Email", phone: "Phone", location: "Location" },
    form: {
      fullName: "Full Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      sentTitle: "Your message is ready.",
      sentBefore:
        "I've opened your email app with your message. If it didn't open, you can email me directly at",
      sentAfter: ".",
      newMessage: "Write a New Message",
      errName: "Please enter your full name.",
      errEmailEmpty: "Please enter your email address.",
      errEmailInvalid: "Please enter a valid email address.",
      errSubject: "Please enter a subject.",
      errMessageEmpty: "Please enter your message.",
      errMessageShort: "Your message must be at least 10 characters.",
    },
  },
};

export const dictionaries: Record<Lang, Dict> = { tr, en };
