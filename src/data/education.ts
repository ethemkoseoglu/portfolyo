import type { EducationItem, Certification, LanguageItem } from "@/lib/types";

/**
 * Education, certifications and languages — all taken verbatim from the CV
 * (verified facts, nothing invented).
 */
export const education: EducationItem[] = [
  {
    degree: "Endüstri Mühendisliği (Lisans)",
    school: "İstanbul Medipol Üniversitesi",
    period: "2022 – Günümüz",
  },
  {
    degree: "İşletme (Önlisans)",
    school: "Anadolu Üniversitesi",
    period: "2023 – Günümüz",
  },
];

export const certifications: Certification[] = [
  {
    title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    issuer: "Microsoft",
  },
  {
    title: "Big Data & Business Analytics Uzmanlık Programı",
    issuer: "İTÜ SEM",
  },
  {
    title: "Proje Yönetimi Uzmanlık Programı",
    issuer: "Yıldız Teknik Üniversitesi SEM",
  },
];

export const languages: LanguageItem[] = [
  { name: "Türkçe", level: "Ana dil" },
  { name: "İngilizce", level: "B2 — Orta-İleri" },
  { name: "Almanca", level: "A1 — Başlangıç" },
];
