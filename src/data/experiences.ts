import type { Experience } from "@/lib/types";

/**
 * Professional experience. Kept concise; dates and the Kayı Perde role are
 * taken from the CV (verified — not invented).
 */
export const experiences: Experience[] = [
  {
    company: "Hassan Dekor Tools",
    role: "Planlama ve Bilgi Teknolojileri Stajyeri",
    period: "2026",
    description:
      "Bayi, ürün, sipariş ve operasyon süreçlerini analiz ederek B2B bayi yönetim sistemi üzerine çalıştım.",
    highlights: [
      "B2B sistem mimarisinin planlanması",
      "Kullanıcı rolleri ve yetkilendirme yapısı",
      "Ürün ve sipariş modüllerinin geliştirilmesi",
    ],
  },
  {
    company: "Moral Tekstil / Modehome",
    role: "Yurtiçi Satış ve Dijital Dönüşüm Stajyeri",
    period: "2025",
    description:
      "Bayi siparişleri ve satış operasyonlarını gözlemleyip, bunları dijitalleştiren bir B2B platform geliştirdim.",
    highlights: [
      "Bayi ve satış süreçlerinin incelenmesi",
      "B2B sipariş sisteminin tasarlanması",
      "CRM ve satış analitiği modüllerinin planlanması",
    ],
  },
  {
    company: "Kayı Perde",
    role: "Satış Operasyonları Asistanı · Uzaktan",
    period: "2022 – 2024",
    description:
      "Sipariş, fiyatlandırma ve satış sonrası operasyonlarda görev alıyor; dijitalleşme ve raporlama çalışmalarını destekliyorum.",
    highlights: [
      "Sipariş ve satış operasyonları",
      "Stok kontrolü ve satış takibi",
      "Dijitalleşme ve raporlama",
    ],
  },
];
