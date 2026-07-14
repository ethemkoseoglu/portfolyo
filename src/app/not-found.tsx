import { PillButton } from "@/components/ui/PillButton";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[75vh] items-center overflow-hidden">
      <span
        aria-hidden
        className="ghost-text absolute inset-0 flex items-center justify-center text-[clamp(6rem,32vw,24rem)]"
      >
        404
      </span>

      <div className="relative z-10 mx-auto w-full max-w-3xl px-5 sm:px-8">
        <p className="text-[0.7rem] uppercase tracking-[0.24em] text-accent">
          Sayfa Bulunamadı
        </p>
        <h1 className="mt-5 heading-xl text-foreground">
          Aradığınız sayfa burada değil.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
          Bağlantı taşınmış veya kaldırılmış olabilir. Ana sayfaya dönerek
          projelere ve diğer bölümlere ulaşabilirsiniz.
        </p>
        <div className="mt-10">
          <PillButton href="/" variant="primary">
            Ana Sayfaya Dön
          </PillButton>
        </div>
      </div>
    </section>
  );
}
