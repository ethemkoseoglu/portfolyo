import type { SkillCategory } from "@/lib/types";

/**
 * Competency groups. Rendered as hairline-bordered uppercase tags — no
 * proficiency bars or percentages.
 */
export const skillCategories: SkillCategory[] = [
  {
    title: "Yazılım ve Veri",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Python",
      "SQL",
      "Supabase",
      "PostgreSQL",
      "Power BI (PL-300)",
      "Veri Modelleme",
      "Tailwind CSS",
      "MobX",
      "Git",
      "Vercel",
    ],
  },
  {
    title: "Ürün Geliştirme",
    skills: [
      "Ürün Stratejisi",
      "MVP Geliştirme",
      "Kullanıcı Deneyimi",
      "Ürün Gereksinimleri",
      "Kullanıcı Araştırması",
      "Yol Haritası Oluşturma",
      "Prototipleme",
      "Test ve İyileştirme",
    ],
  },
  {
    title: "İşletme ve Operasyon",
    skills: [
      "İş Süreçleri Analizi",
      "ERP Tasarımı",
      "B2B Sistemleri",
      "Süreç Dijitalleştirme",
      "Operasyon Yönetimi",
      "Bayi Yönetimi",
      "Satış Süreçleri",
      "Raporlama ve Analitik",
    ],
  },
  {
    title: "Girişimcilik ve Growth",
    skills: [
      "Pazar Araştırması",
      "İş Modeli Geliştirme",
      "Müşteri Görüşmeleri",
      "B2B Satış",
      "Pazarlama",
      "Marka Konumlandırma",
      "Growth",
      "Sunum ve Hikâyeleştirme",
    ],
  },
];
