# B2B Portfolyo — Kurulum ve Düzenleme

Endüstri mühendisliği + B2B yazılım / ERP + girişimcilik odaklı, saf HTML/CSS/JS
(çerçevesiz) kişisel portfolyo sitesi.

## Dosya yapısı

```
b2b-site/
  index.html        # sayfa içeriği + SEO/OG etiketleri
  css/style.css     # tüm stiller (Türkçe yorumlu)
  js/main.js        # etkileşimler (Türkçe yorumlu)
  favicon.svg       # site ikonu
  assets/og-cover.png  # sosyal paylaşım görseli (1200×630)
  images/           # GERÇEK proje ekran görüntülerinizi buraya koyun
```

## Önizleme

Statik bir sitedir. En basiti `index.html`'i çift tıklayıp tarayıcıda açmaktır.
Formun (Formspree) ve tüm davranışların doğru çalışması için yerel bir sunucu önerilir:

```bash
# Python ile
python -m http.server 5500      # sonra http://localhost:5500

# veya Node ile
npx serve .
```

## Doldurmanız gereken yer tutucular (`REPLACE`)

Kod içinde `REPLACE` yazan ve aşağıdaki metinleri arayıp değiştirin:

- **Ad/Soyad:** `ADINIZ SOYADINIZ` / `Adınız Soyadınız`
- **E-posta:** `bilgi@siteniz.com`
- **Telefon:** `+90 5XX XXX XX XX`
- **Konum:** `Denizli, Türkiye`
- **LinkedIn:** `linkedin.com/in/kullaniciadi` (footer + JSON-LD)
- **Alan adı:** `https://siteniz.com/` (canonical + Open Graph URL'leri)
- **Proje metinleri:** PRJ-01 / PRJ-02 / PRJ-03 içerikleri örnektir; kendi projelerinizle değiştirin.

## İletişim formu (Formspree)

1. [formspree.io](https://formspree.io) üzerinde ücretsiz bir form oluşturun.
2. Size verilen form ID'sini `index.html` içindeki şu satırda yazın:
   `<form ... action="https://formspree.io/f/YOUR_FORM_ID" ...>`
   → `YOUR_FORM_ID` yerine kendi ID'nizi koyun.
3. Gönderim AJAX olarak yapılır; başarı/hata mesajı formda gösterilir.

## Gerçek ekran görüntüsü ekleme

Her projede solda CSS ile çizilmiş bir tarayıcı mockup'ı var. Gerçek görselinizi
koymak için ilgili `<div class="browser">...</div>` bloğunu tamamen silip yerine:

```html
<img class="mock-img" src="images/prj-01.png" alt="Proje adı ekran görüntüsü"
     width="1200" height="750" loading="lazy">
```

Görselleri `images/` klasörüne koyun (önerilen oran ~16:10, ör. 1200×750).
`.mock-img` stili görseli aynı çerçeveye (kenarlık + ofset gölge) oturtur.

## Öne çıkan davranışlar

- **Apple tarzı sinematik scroll:** hero altındaki bölüm kaydırdıkça sabitlenir,
  "Süreç → Sistem → Ürün" aşamaları sırayla belirir.
- **Metrik sayaç (count-up):** metrik kutuları görünüme girince 0'dan sayar.
- **Scroll ilerleme çizgisi:** üstte ince mavi çizgi.
- **Erişilebilirlik:** `prefers-reduced-motion` desteklenir (animasyonlar kapanır),
  klavye odağı, ARIA etiketleri, "içeriğe atla" bağlantısı.

## Renk / font değiştirme

`css/style.css` en üstteki `:root` bloğundan tüm renkleri ve fontları tek yerden
yönetebilirsiniz.

## Yayınlama

Herhangi bir statik barındırıcıya (Netlify, Vercel, GitHub Pages, Cloudflare Pages)
klasörü olduğu gibi yükleyebilirsiniz. Yükledikten sonra `REPLACE` alan adlarını
gerçek alan adınızla güncelleyin.
