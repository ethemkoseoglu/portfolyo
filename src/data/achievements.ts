import type { Achievement, ProcessStep } from "@/lib/types";

/**
 * Programs & accomplishments. Only the BiGG+ Boğaziçi acceptance is stated —
 * no investment, grant, award or funding claims.
 */
export const achievements: Achievement[] = [
  {
    program: "BiGG+ Boğaziçi",
    title: "Perdeno ile Hızlandırma Programına Kabul",
    description:
      "Perdeno girişimiyle BiGG+ Boğaziçi Hızlandırma Programı'na kabul edildik.",
    tags: ["Girişimcilik", "Ürün Doğrulama", "İş Modeli"],
  },
];

/**
 * "Bir Ürünü Nasıl Geliştiriyorum?" — the four-step product process.
 */
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Problemi Anlamak",
    description:
      "İşletmenin, kullanıcının ve mevcut sürecin gerçek problemlerini analiz ederim.",
  },
  {
    number: "02",
    title: "Ürünü Kurgulamak",
    description:
      "Kullanıcı rolleri, temel özellikler, iş akışları ve MVP kapsamını belirlerim.",
  },
  {
    number: "03",
    title: "Geliştirmek",
    description:
      "Ölçeklenebilir, güvenli ve kullanıcı dostu bir ürün deneyimi oluştururum.",
  },
  {
    number: "04",
    title: "Test Etmek ve Büyütmek",
    description:
      "Gerçek kullanıcı geri bildirimlerini değerlendirir, ürünü geliştirir ve pazara ulaşma stratejisini planlarım.",
  },
];

/** Marquee items shown below the hero and before the contact CTA. */
export const marqueeItems: string[] = [
  "ÜRÜN GELİŞTİRME",
  "ERP",
  "B2B SİSTEMLER",
  "YAPAY ZEKÂ",
  "GROWTH",
  "GİRİŞİMCİLİK",
];
