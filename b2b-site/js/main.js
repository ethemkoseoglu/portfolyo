/* ============================================================
   main.js — site etkileşimleri
   Bölümler:
     1) Scroll-reveal (görünüme girince belirme)
     2) Aktif menü linki vurgulama
     3) Mobil menü aç/kapa
     4) Üst scroll ilerleme çizgisi        (premium)
     5) Apple tarzı sinematik pinned scroll (premium)
     6) Metrik sayaç animasyonu (count-up)  (premium)
     7) İletişim formu — Formspree gönderimi
   Not: Hareket tercihi kapalıysa (prefers-reduced-motion) animasyonlar
   atlanır, içerik anında görünür.
   ============================================================ */
(function () {
  "use strict";

  // Kullanıcı "azaltılmış hareket" tercih ediyor mu?
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 1) SCROLL REVEAL ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (reduceMotion) {
    revealEls.forEach((el) => el.classList.add("visible"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---------- 2) AKTİF MENÜ LİNKİ ---------- */
  const links = document.querySelectorAll(".pills a");
  const secs = [...links]
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);
  if (secs.length) {
    const nio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((l) =>
              l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id)
            );
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    secs.forEach((s) => nio.observe(s));
  }

  /* ---------- 3) MOBİL MENÜ ---------- */
  const menuBtn = document.getElementById("menuBtn");
  const pills = document.getElementById("pills");
  if (menuBtn && pills) {
    menuBtn.addEventListener("click", () => {
      const open = pills.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    // Bir linke tıklanınca menüyü kapat
    links.forEach((a) =>
      a.addEventListener("click", () => {
        pills.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------- 4) + 5) SCROLL BAĞLI EFEKTLER (tek rAF döngüsü) ---------- */
  const progress = document.getElementById("scrollProgress");
  const cine = document.getElementById("sinematik");
  const cineStages = cine ? [...cine.querySelectorAll(".cine-stage")] : [];
  const cineBar = document.getElementById("cineBar");

  // Bir aşamanın kaydırma ilerlemesine (0..1) göre opaklığını hesaplar
  function stageOpacity(p, i, n) {
    const seg = 1 / n;
    const center = (i + 0.5) * seg;
    const full = seg * 0.5;   // tam görünür alan
    const fade = seg * 0.5;   // geçiş alanı
    let o = 1 - (Math.abs(p - center) - full) / fade;
    o = Math.max(0, Math.min(1, o));
    if (i === 0 && p < center) o = 1;         // ilk aşama başta görünür
    if (i === n - 1 && p > center) o = 1;     // son aşama sonda görünür kalır
    return { o, center };
  }

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;

      // 4) Üst ilerleme çizgisi
      if (progress) {
        const max = doc.scrollHeight - doc.clientHeight;
        progress.style.width = (max > 0 ? (scrollTop / max) * 100 : 0) + "%";
      }

      // 5) Sinematik pinned scroll (hareket açıkken)
      if (cine && cineStages.length && !reduceMotion) {
        const top = cine.offsetTop;
        const scrollable = cine.offsetHeight - doc.clientHeight;
        const p = Math.max(0, Math.min(1, (scrollTop - top) / scrollable));
        const n = cineStages.length;
        cineStages.forEach((st, i) => {
          const { o, center } = stageOpacity(p, i, n);
          const dir = p < center ? 1 : -1;
          st.style.opacity = o.toFixed(3);
          st.style.transform = "translateY(" + (dir * (1 - o) * 22).toFixed(1) + "px)";
        });
        if (cineBar) cineBar.style.width = (p * 100).toFixed(1) + "%";
      }
      ticking = false;
    });
  }

  if (!reduceMotion) {
    // Sinematik bölümde ilk aşamayı görünür yap (sayfa açılışında)
    if (cineStages.length) {
      cineStages.forEach((st, i) => {
        st.style.opacity = i === 0 ? "1" : "0";
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
  } else if (progress) {
    // Hareket kapalı: yalnızca ilerleme çizgisini güncelle
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- 6) METRİK SAYAÇ (COUNT-UP) ---------- */
  // "%40", "1.200+", "%99,2", "İst. 4" gibi değerlerdeki ilk sayıyı animasyonla
  // 0'dan hedefe sayar; ön ek / son ek ("%", "+", " dk"...) korunur. Sayı
  // içermeyen değerlere ("MVP") dokunulmaz. Türkçe binlik "." ve ondalık ","
  // biçimi korunur.
  function animateCount(el) {
    const text = el.textContent.trim();
    const m = text.match(/^(\D*)(\d[\d.,]*)(.*)$/);
    if (!m) return;
    const prefix = m[1], numStr = m[2], suffix = m[3];
    const hasComma = numStr.includes(",");
    const decimals = hasComma ? (numStr.split(",")[1] || "").length : 0;
    const target = parseFloat(numStr.replace(/\./g, "").replace(",", "."));
    if (!isFinite(target)) return;

    function fmt(v) {
      let s = v.toFixed(decimals);
      let parts = s.split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, "."); // binlik ayıracı
      return prefix + parts[0] + (decimals ? "," + parts[1] : "") + suffix;
    }

    const dur = 1100, start = performance.now();
    function tick(now) {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      el.textContent = fmt(target * eased);
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = fmt(target);
    }
    requestAnimationFrame(tick);
  }

  const counters = document.querySelectorAll(".stat .num, .kpi .v");
  if (reduceMotion) {
    // Hareket kapalı: değerler olduğu gibi kalır
  } else {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateCount(e.target);
            cio.unobserve(e.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((el) => cio.observe(el));
  }

  /* ---------- 7) İLETİŞİM FORMU (Formspree) ---------- */
  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");
  if (form && statusEl) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const action = form.getAttribute("action") || "";

      // Endpoint henüz ayarlanmadıysa kullanıcıyı bilgilendir
      if (action.includes("YOUR_FORM_ID")) {
        statusEl.className = "form-status err";
        statusEl.textContent =
          "Form henüz bağlanmadı: index.html içindeki action URL'sine Formspree form ID'nizi yazın.";
        return;
      }

      const btn = form.querySelector('button[type="submit"]');
      if (btn) btn.disabled = true;
      statusEl.className = "form-status";
      statusEl.textContent = "Gönderiliyor…";

      try {
        const res = await fetch(action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          statusEl.className = "form-status ok";
          statusEl.textContent = "Teşekkürler! Mesajınız gönderildi.";
          form.reset();
        } else {
          const data = await res.json().catch(() => ({}));
          statusEl.className = "form-status err";
          statusEl.textContent =
            (data.errors && data.errors.map((x) => x.message).join(" ")) ||
            "Bir hata oluştu, lütfen tekrar deneyin.";
        }
      } catch {
        statusEl.className = "form-status err";
        statusEl.textContent = "Bağlantı hatası. Lütfen daha sonra tekrar deneyin.";
      } finally {
        if (btn) btn.disabled = false;
      }
    });
  }
})();
