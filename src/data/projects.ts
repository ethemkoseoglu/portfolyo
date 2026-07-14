import type { Project } from "@/lib/types";

/**
 * All portfolio projects.
 *
 * Verbatim copy (short/detail/contribution/focus/tech, statuses, achievement
 * notes) is transcribed exactly from the brief. The detail-page fields
 * (problem/solution/features/lessons) are written in Turkish and derived
 * strictly from the provided descriptions — no invented metrics, results,
 * clients or claims. `results` is intentionally left undefined everywhere
 * (no verified data), so the results section stays hidden.
 */
export const projects: Project[] = [
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
      "Co-CEO olarak ürün geliştirme, işletme süreçlerinin dijitalleştirilmesi, kullanıcı ihtiyaçlarının belirlenmesi, müşteri görüşmeleri, pazarlama ve büyüme stratejileri üzerinde aktif olarak çalışıyorum. Teknik geliştirme ile iş geliştirme arasındaki koordinasyonu yürütüyorum.",
    focus: [
      "ERP",
      "Yapay Zekâ",
      "B2B SaaS",
      "Ürün Stratejisi",
      "Pazarlama",
      "Growth",
      "İş Süreçleri",
    ],
    tech: [],
    problem:
      "Perde ve ev tekstili sektöründe sipariş, ölçü, metrekare bazlı fiyatlandırma, aksesuar, montaj, stok ve cari hesap süreçleri çoğunlukla birbirinden kopuk, manuel araçlarla yürütülüyor. Bu dağınıklık; fiyatlama hatalarına, maliyet ve kârlılık takibinin zorlaşmasına ve müşteri deneyiminin zayıflamasına yol açıyor.",
    solution:
      "Perdeno, tüm bu süreçleri tek bir sistemde birleştiren ERP ve yapay zekâ destekli bir dijital satış platformu olarak kurgulandı. Sipariş oluşturma, ölçü ve metrekare bazlı fiyatlandırma, aksesuar ve montaj yönetimi, stok, müşteri cari hesabı, maliyet, kârlılık ve finansal raporlama tek panelde toplanır. Yapay zekâ modülü ise kullanıcıların seçtikleri perde modellerini kendi mekân fotoğrafları üzerinde gerçekçi biçimde görüntülemesini sağlar.",
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
      "Sektöre özgü karmaşık fiyatlandırma mantığının yazılıma doğru biçimde aktarılmasının kritik önemi.",
      "ERP ve yapay zekâ deneyiminin tek üründe, kullanıcı dostu bir bütün olarak birleştirilebilmesi.",
      "Teknik geliştirme ile iş geliştirme arasındaki koordinasyonun ürün başarısındaki belirleyici rolü.",
      "Müşteri görüşmelerinin ürün önceliklendirmesine ve yol haritasına doğrudan katkısı.",
    ],
    images: [
      {
        src: "/images/projects/perdeno-ai-1.png",
        alt: "Perdeno yapay zekâ modülüyle mekân fotoğrafı üzerinde görselleştirilmiş desenli perde",
      },
      {
        src: "/images/projects/perdeno-ai-2.png",
        alt: "Perdeno yapay zekâ modülüyle aynı mekânda görselleştirilmiş farklı bir perde modeli",
      },
      { src: "/images/projects/perdeno.svg", alt: "Perdeno platform arayüzü görseli" },
    ],
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
      "Mışıl; bebeklerin uyku, beslenme, gelişim ve günlük bakım süreçlerinin tek uygulama üzerinden takip edilebilmesini amaçlayan bir ebeveyn teknolojisi girişimidir. Ürün, dağınık bakım kayıtlarını daha anlaşılır ve kullanıcı dostu bir deneyimde bir araya getirmeyi hedefler.",
    contribution:
      "Projenin fikir geliştirme, kullanıcı araştırması, marka oluşturma, ürün tasarımı, iş modeli, pazarlama ve yazılım geliştirme süreçlerini tek kurucu olarak yürütüyorum.",
    focus: [
      "Mobile Product",
      "Parenting Technology",
      "Startup Development",
      "UX",
      "Product Strategy",
      "Branding",
      "Growth",
    ],
    tech: [],
    problem:
      "Modern ve çalışan ebeveynler; bebeklerinin uyku, beslenme, gelişim ve günlük bakım bilgilerini çoğunlukla dağınık notlar, farklı uygulamalar ya da akılda tutma yoluyla takip ediyor. Bu dağınıklık bakım sürecini yönetmeyi zorlaştırıyor ve ebeveynlerin ihtiyaç duyduğu bütünsel görünümü ortadan kaldırıyor.",
    solution:
      "Mışıl; bebeklerin uyku, beslenme, gelişim ve günlük bakım süreçlerinin tek bir uygulama üzerinden takip edilebilmesini amaçlayan bir ebeveyn teknolojisi ürünü olarak kurgulanıyor. Dağınık bakım kayıtları, anlaşılır ve kullanıcı dostu bir deneyimde bir araya getiriliyor.",
    features: [
      "Uyku takibi",
      "Beslenme takibi",
      "Gelişim takibi",
      "Günlük bakım kayıtları",
      "Ebeveyn dostu, sade kullanıcı deneyimi",
    ],
    lessons: [
      "Tek kurucu olarak fikirden ürüne uzanan sürecin tüm adımlarını yönetmenin kazandırdığı bütünsel bakış açısı.",
      "Kullanıcı araştırmasının ürün kurgusundaki belirleyici rolü.",
      "Ebeveyn gibi hassas bir kullanıcı grubu için sadelik ve güvenin önceliği.",
      "BiGG+ Boğaziçi sürecinde yürüttüğüm ürün doğrulama ve iş modeli çalışmalarının değeri.",
    ],
    images: [
      { src: "/images/projects/misil.svg", alt: "Mışıl mobil uygulama arayüzü görseli" },
      { src: "/images/projects/misil.svg", alt: "Mışıl bakım takibi ekranı görseli" },
      { src: "/images/projects/misil.svg", alt: "Mışıl marka görseli" },
    ],
  },
  {
    slug: "pigment-erp",
    name: "Pigment ERP",
    featured: false,
    order: 3,
    role: "Product Developer",
    status: "Geliştirildi",
    logo: { src: "/images/logos/pigment.png", alt: "Pigment ERP logosu" },
    shortDescription:
      "Boya ve pigment işletmelerinin operasyonel ve finansal süreçleri için geliştirilen kurumsal ERP sistemi.",
    detail:
      "Pigment ERP; müşteri, iş emri, çalışan, malzeme, üretim operasyonları, görevler ve finans süreçlerinin merkezi bir panel üzerinden yönetilmesini sağlar. Yönetici ve çalışan kullanıcılar için rol bazlı erişim yapısı, operasyon takibi ve finans yönetimi modülleri geliştirilmiştir.",
    focus: [
      "ERP",
      "Operasyon Yönetimi",
      "Finans",
      "İş Emri Yönetimi",
      "Rol Bazlı Yetkilendirme",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    problem:
      "Boya ve pigment işletmelerinde müşteri, iş emri, çalışan, malzeme, üretim operasyonları, görevler ve finans süreçleri çoğunlukla birbirinden ayrı araçlarla yönetiliyor. Bu da operasyon takibini, rol bazlı sorumluluk dağılımını ve finansal görünürlüğü zorlaştırıyor.",
    solution:
      "Pigment ERP, tüm bu süreçlerin merkezi bir panel üzerinden yönetilmesini sağlayan kurumsal bir ERP sistemi olarak geliştirildi. Yönetici ve çalışan kullanıcılar için rol bazlı erişim yapısı, operasyon takibi ve finans yönetimi modülleri kurgulandı.",
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
    images: [
      { src: "/images/projects/pigment-erp.svg", alt: "Pigment ERP yönetim paneli görseli" },
      { src: "/images/projects/pigment-erp.svg", alt: "Pigment ERP operasyon takibi görseli" },
      { src: "/images/projects/pigment-erp.svg", alt: "Pigment ERP finans modülü görseli" },
    ],
  },
  {
    slug: "hassan-dekor-tools-b2b",
    name: "Hassan Dekor Tools B2B",
    featured: false,
    order: 4,
    role: "B2B Product Developer",
    status: "Demo Sistem Çalışması",
    logo: {
      src: "/images/logos/hassan-dekor.png",
      alt: "Hassan Dekor Tools logosu",
    },
    shortDescription:
      "İnşaat el aletleri sektörüne yönelik geliştirilen kapsamlı B2B bayi yönetim sistemi çalışması.",
    detail:
      "Platform; ürün kataloğu, hızlı sipariş, stok takibi, kampanyalar, cari hesap, tahsilat, teknik dokümanlar, bayi yönetimi ve satış temsilcisi süreçlerini tek sistem altında toplar. Bayi, satış temsilcisi ve yönetici kullanıcılar için farklı yetki ve kullanım senaryolarına sahip paneller tasarlanmıştır.",
    contribution:
      "Şirketin ürün, bayi ve sipariş süreçlerini analiz ederek sistem mimarisi, kullanıcı rolleri, modül planlaması, kullanıcı deneyimi ve yazılım geliştirme çalışmalarını yürüttüm.",
    focus: [
      "B2B Commerce",
      "Dealer Management",
      "Product Catalog",
      "ERP",
      "Role-Based Access",
      "Sales Operations",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    problem:
      "İnşaat el aletleri sektöründe bayi, ürün, sipariş, stok, cari hesap ve tahsilat süreçleri farklı kanallar ve manuel yöntemlerle yürütüldüğünde; bayi yönetimi, satış temsilcisi operasyonları ve teknik dokümantasyon dağınık hâle geliyor.",
    solution:
      "Bu demo sistem çalışmasında; ürün kataloğu, hızlı sipariş, stok takibi, kampanyalar, cari hesap, tahsilat, teknik dokümanlar, bayi yönetimi ve satış temsilcisi süreçlerini tek sistem altında toplayan kapsamlı bir B2B bayi yönetim sistemi tasarlandı. Bayi, satış temsilcisi ve yönetici kullanıcılar için farklı yetki ve kullanım senaryolarına sahip paneller kurgulandı.",
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
    images: [
      { src: "/images/projects/hassan-dekor-tools-b2b.svg", alt: "Hassan Dekor Tools B2B bayi paneli görseli" },
      { src: "/images/projects/hassan-dekor-tools-b2b.svg", alt: "Hassan Dekor Tools B2B ürün kataloğu görseli" },
      { src: "/images/projects/hassan-dekor-tools-b2b.svg", alt: "Hassan Dekor Tools B2B sipariş ekranı görseli" },
    ],
  },
  {
    slug: "moral-tekstil-b2b",
    name: "Moral Tekstil B2B Platformu",
    featured: false,
    order: 5,
    role: "B2B Product Developer",
    status: "Dijital Dönüşüm Çalışması",
    logo: {
      src: "/images/logos/modehome.png",
      alt: "Modehome logosu",
    },
    shortDescription:
      "Tekstil sektöründeki bayi, sipariş ve satış süreçlerini dijitalleştirmek için geliştirilen B2B platform.",
    detail:
      "Platform; bayilerin ürünleri incelemesini, sipariş oluşturmasını, cari hesaplarını takip etmesini ve şirketle yürüttükleri operasyonları dijital ortamdan yönetmesini sağlar. Satış temsilcileri ve yöneticiler için CRM, bayi performansı, sipariş takibi, tahsilat ve satış analitiği modülleri planlanmıştır.",
    contribution:
      "Moral Tekstil'de gözlemlediğim bayi siparişleri, satış temsilcisi operasyonları ve müşteri süreçlerinden yola çıkarak platformun ürün kurgusu, modül yapısı, kullanıcı deneyimi ve geliştirme süreçlerini oluşturdum.",
    focus: [
      "Textile Technology",
      "B2B Ordering",
      "Dealer Management",
      "CRM",
      "Sales Analytics",
      "Digital Transformation",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "MobX", "Tailwind CSS"],
    problem:
      "Tekstil sektöründe bayi siparişleri, satış temsilcisi operasyonları ve müşteri ilişkileri büyük ölçüde manuel ve dijital olmayan yöntemlerle yürütülüyor. Bu da sipariş takibini, cari hesap yönetimini ve satış analitiğini zorlaştırıyor.",
    solution:
      "Platform; bayilerin ürünleri incelemesini, sipariş oluşturmasını, cari hesaplarını takip etmesini ve operasyonlarını dijital ortamdan yönetmesini sağlayacak biçimde kurgulandı. Satış temsilcileri ve yöneticiler için CRM, bayi performansı, sipariş takibi, tahsilat ve satış analitiği modülleri planlandı.",
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
    images: [
      { src: "/images/projects/moral-tekstil-b2b.svg", alt: "Moral Tekstil B2B platform arayüzü görseli" },
      { src: "/images/projects/moral-tekstil-b2b.svg", alt: "Moral Tekstil B2B sipariş ekranı görseli" },
      { src: "/images/projects/moral-tekstil-b2b.svg", alt: "Moral Tekstil B2B satış analitiği görseli" },
    ],
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
      "Dry Cleanic'in hizmetlerini dijital ortamda etkili biçimde sunmak, yerel arama görünürlüğünü geliştirmek ve potansiyel müşterilerin işletmeyle hızlı iletişim kurmasını sağlamak amacıyla tasarlanmıştır. Mobil uyumluluk, WhatsApp iletişimi, yerel SEO ve kullanıcı deneyimi öncelikli olarak ele alınmıştır.",
    focus: [
      "Corporate Website",
      "Responsive Design",
      "Local SEO",
      "Conversion",
      "User Experience",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Local Business Schema",
    ],
    problem:
      "Denizli merkezli kuru temizleme işletmesinin; hizmetlerini dijital ortamda etkili biçimde sunacak, yerel arama görünürlüğünü güçlendirecek ve potansiyel müşterilerin hızlı iletişim kurmasını sağlayacak modern bir dijital varlığa ihtiyacı vardı.",
    solution:
      "Dry Cleanic için mobil uyumlu, modern ve kurumsal bir internet sitesi geliştirildi. Mobil uyumluluk, WhatsApp iletişimi, yerel SEO ve kullanıcı deneyimi öncelikli olarak ele alındı.",
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
    images: [
      { src: "/images/projects/dry-cleanic.svg", alt: "Dry Cleanic kurumsal web sitesi görseli" },
      { src: "/images/projects/dry-cleanic.svg", alt: "Dry Cleanic mobil görünüm görseli" },
      { src: "/images/projects/dry-cleanic.svg", alt: "Dry Cleanic hizmetler bölümü görseli" },
    ],
  },
];

/** Projects ordered for display (ascending `order`). */
export const orderedProjects = [...projects].sort((a, b) => a.order - b.order);

/** The single featured project (Perdeno). */
export const featuredProject = projects.find((p) => p.featured) ?? projects[0];

/** Non-featured projects rendered as editorial rows. */
export const rowProjects = orderedProjects.filter((p) => !p.featured);

/** Lookup helper for detail pages. */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
