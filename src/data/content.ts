/**
 * Verbatim section copy (hero, about, section subtitles, contact, footer).
 * Kept in a data file so apostrophe-bearing Turkish strings never sit inside
 * JSX text (which would trip `react/no-unescaped-entities`).
 */

export const heroContent = {
  availability: "Yeni projelere ve iş birliklerine açığım.",
  name: "Ethem Köseoğlu",
  title: "İşletme problemlerini dijital ürünlere dönüştürüyorum.",
  description:
    "Endüstri Mühendisliği altyapımı yazılım, ürün ve girişimcilikle birleştiriyorum. ERP, B2B ve yapay zekâ destekli dijital ürünler geliştiriyorum.",
  // Named, verifiable proof — leads with credibility instead of abstract roles.
  roleChips: [
    "Co-CEO · Perdeno",
    "BiGG+ Boğaziçi",
    "Microsoft PL-300",
    "Endüstri Mühendisliği",
  ],
} as const;

export const aboutContent = {
  paragraphs: [
    "Endüstri Mühendisliği altyapımı yazılım geliştirme, ürün yönetimi ve girişimcilikle birleştiriyorum. Doğru problemi belirlemeye, süreçleri anlamaya ve ürünü gerçek kullanıcılarla buluşturmaya odaklanıyorum.",
    "ERP sistemleri, B2B platformları ve yapay zekâ destekli dijital ürünler geliştiriyorum.",
  ],
  values: [
    {
      number: "01",
      title: "İşletme Odaklı Yaklaşım",
      description:
        "Geliştirmeye başlamadan önce işletmeyi, kullanıcıyı ve problemi analiz ederim.",
    },
    {
      number: "02",
      title: "Uçtan Uca Ürün Geliştirme",
      description:
        "Fikirden pazara; kurgu, tasarım, geliştirme ve testi bir bütün olarak ele alırım.",
    },
    {
      number: "03",
      title: "Teknoloji ve Büyüme",
      description:
        "Ürünün çalışmasının yanı sıra doğru kullanıcıya ulaşmasına da odaklanırım.",
    },
  ],
} as const;

export const sectionCopy = {
  projectsTitle: "Seçilmiş Projeler",
  projectsSubtitle:
    "Gerçek ihtiyaçlardan yola çıkarak geliştirdiğim dijital ürünler, ERP sistemleri ve B2B platformları.",
  experienceTitle: "Deneyim",
  experienceSubtitle:
    "Saha deneyimini yazılım ve dijital ürün geliştirme çalışmalarıyla birleştirdiğim roller.",
  educationTitle: "Eğitim ve Sertifikalar",
  educationSubtitle:
    "Endüstri Mühendisliği altyapımı; veri analitiği, iş analitiği ve proje yönetimi alanındaki sertifika programlarıyla destekliyorum.",
  achievementsTitle: "Programlar ve Başarılar",
  skillsTitle: "Yetkinlikler",
  skillsSubtitle:
    "Yazılım, ürün, işletme ve girişimcilik alanlarında bir araya getirdiğim yetkinlikler.",
  processTitle: "Bir Ürünü Nasıl Geliştiriyorum?",
  processSubtitle:
    "Fikirden çalışan bir dijital ürüne uzanan süreci dört adımda ele alıyorum.",
  aboutTitle: "Hakkımda",
} as const;

export const contactContent = {
  heading: "Benimle iletişime geçin.",
} as const;

export const footerContent = {
  copyright: "© 2026 Ethem Köseoğlu. Tüm hakları saklıdır.",
  tagline: "Ürün, teknoloji ve işletme süreçlerinin kesişiminde geliştirildi.",
  contactReminder:
    "Yeni projeler ve iş birlikleri için her zaman ulaşabilirsiniz.",
} as const;
