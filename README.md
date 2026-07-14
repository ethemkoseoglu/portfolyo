# Ethem Köseoğlu — Portfolyo

**Product Developer & Entrepreneur** konumlandırmasıyla hazırlanmış, tek sayfalık
(dinamik proje detay sayfaları içeren) premium bir portfolyo web sitesi. Tasarım dili
**koyu / editöryel / tipografi odaklı**: siyaha yakın bir zemin, dev tipografi ve
şampanya-altını (`#C9A96E`) vurgunun yalnızca imza detayı olarak kullanıldığı, ~%95
monokrom bir estetik.

Tüm arayüz metinleri **Türkçe**, tüm kod **İngilizce**. Veritabanı yok — tüm içerik
`src/data` ve `src/config` altındaki tipli TypeScript dosyalarında yaşar.

## Teknolojiler

- **Next.js 16** (App Router, React Server Components) + **TypeScript**
- **Tailwind CSS v4** (CSS `@theme` token'ları)
- **Framer Motion** (ölçülü, `prefers-reduced-motion` uyumlu animasyonlar)
- **Lucide React** ikonları
- `next/font` ile **Space Grotesk** (başlıklar) + **Inter** (gövde)

## Kurulum ve Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000 (geliştirme)
npm run build    # üretim derlemesi (TypeScript + ESLint dahil)
npm run start    # üretim sunucusu
npm run lint     # ESLint
```

Gereksinim: Node.js 18.18+ (Node 20+ önerilir).

## İçeriği Düzenleme

Tüm görünen içerik tipli veri dosyalarından akar — bileşenler içeriği prop olarak alır:

| Dosya | İçerik |
| --- | --- |
| `src/config/site.ts` | İsim, SEO başlık/açıklama/anahtar kelimeler, iletişim (e-posta, telefon), sosyal bağlantılar, kanonik URL, navigasyon |
| `src/data/content.ts` | Hero, Hakkımda, bölüm başlık/alt başlıkları, İletişim ve Footer metinleri |
| `src/data/projects.ts` | 6 proje (kısa/uzun açıklama, katkı, odak, teknolojiler, problem/çözüm/özellikler/öğrenilenler, görseller) |
| `src/data/experiences.ts` | Deneyim kayıtları |
| `src/data/skills.ts` | Yetkinlik grupları |
| `src/data/achievements.ts` | Programlar/başarılar, ürün süreci adımları, marquee metinleri |
| `src/lib/types.ts` | Tüm veri arayüzleri (`Project`, `Experience`, `SkillCategory`, `Achievement`, `SiteConfig`) |

### Doldurulması gereken placeholder'lar

`src/config/site.ts` içinde `// REPLACE:` ile işaretli alanları güncelleyin:

- `url` — yayına alınınca gerçek alan adı (kanonik URL, Open Graph, sitemap, JSON-LD)
- `linkedin`, `github` — gerçek profil URL'leri
- `cvUrl` — barındırılan CV/PDF bağlantısı

E-posta ve telefon gerçek değerlerle doldurulmuştur.

### Proje detay sayfasındaki "Sonuçlar" bölümü

Her projenin isteğe bağlı bir `results` alanı vardır ve **yalnızca veri girildiğinde**
görünür. Doğrulanmış bir sonuç eklemek için ilgili projeye şunu ekleyin:

```ts
results: [{ label: "Aktif Bayi", value: "120+" }],
```

Boş bırakılırsa bölüm tamamen gizli kalır.

## Aksan Rengini ve Fontları Değiştirme

**Renk token'ları** `src/app/globals.css` içindeki `:root` bloğundadır. Aksan rengini
tek bir yerden değiştirin:

```css
:root {
  --background: #0a0a0b;
  --foreground: #f4f2ed;
  --muted: #8a8a8e;
  --ghost: #1a1a1d;
  --accent: #c9a96e; /* şampanya altını — buradan değiştirin */
  --line: #232326;
}
```

Bu değerler `@theme inline` ile Tailwind yardımcı sınıflarına bağlanır
(`bg-background`, `text-accent`, `border-line`, `font-heading` vb.).

**Fontlar** `src/app/layout.tsx` içinde `next/font/google` ile yüklenir. Başka bir
grotesk için `Space_Grotesk` importunu değiştirin ve `--font-space-grotesk` /
`--font-inter` değişken adlarını koruyun (globals.css bunlara `--font-heading` /
`--font-body` olarak referans verir). Türkçe glifler için `subsets` içinde
`"latin-ext"` bırakılmalıdır.

## Gerçek Proje Görsellerini Ekleme

Placeholder görseller `public/images/projects/<slug>.svg` konumundadır (koyu, markalı,
"GÖRSEL YAKINDA"). Gerçek ekran görüntülerini eklemek için:

1. Görselleri `public/images/projects/` altına koyun (PNG/JPG önerilir, ~16:10 veya 4:3,
   en az 1200×800px, showcase için daha büyük).
2. `src/data/projects.ts` içindeki ilgili projenin `images` dizisini güncelleyin
   (`src` ve açıklayıcı `alt` metni).

> Not: `next.config.ts` içinde yerel SVG placeholder'ları için `images.dangerouslyAllowSVG`
> etkindir (kendi güvenilir varlıklarımız). Tüm görselleri PNG/JPG ile değiştirdiğinizde
> bu ayarı kaldırabilirsiniz.

## İletişim Formunu Bağlama

Form `src/components/forms/ContactForm.tsx` içinde **istemci tarafı doğrulama** ile gelir;
bilinçli olarak bir backend'e bağlı **değildir**. Entegrasyon noktası şu satırda işaretlidir:

```ts
// TODO: Integrate with Formspree, Resend, or a custom API route.
```

Seçenekler:

- **Formspree** — form gönderimini Formspree endpoint'inize `fetch` ile POST edin.
- **Resend** — `app/api/contact/route.ts` altında bir Route Handler oluşturup e-posta gönderin.
- **Özel API Route** — kendi doğrulama/gönderim mantığınızı yazın.

## Yayına Alma (Vercel)

1. Depoyu GitHub'a gönderin.
2. [Vercel](https://vercel.com) üzerinde projeyi import edin — framework otomatik olarak
   Next.js algılanır; ek yapılandırma gerekmez.
3. Yayın sonrası `src/config/site.ts` içindeki `url` alanını gerçek alan adıyla güncelleyin
   (kanonik URL, Open Graph görseli, sitemap ve robots doğru çalışsın diye).

## Proje Yapısı

```
src/
  app/            layout, sayfa, globals.css, sitemap.ts, robots.ts,
                  opengraph-image.tsx, not-found.tsx, projects/[slug]/page.tsx
  components/     layout · hero · sections · projects · experience · skills ·
                  process · achievements · forms · ui (yeniden kullanılabilir primitifler)
  config/         site.ts
  data/           projects · experiences · skills · achievements · content
  lib/            types.ts
public/images/    proje görsel placeholder'ları
```

---

© 2026 Ethem Köseoğlu. Ürün, teknoloji ve işletme süreçlerinin kesişiminde geliştirildi.
