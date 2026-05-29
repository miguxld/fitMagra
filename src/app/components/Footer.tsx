"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-card-border)]">
      <div className="bg-[var(--color-surface)] py-8 px-5 md:px-10 lg:px-20 flex flex-col items-center gap-5 border-b border-[var(--color-card-border)]">
        <img
          src="/img/logo neon.jpeg"
          alt="FitMagra Neon"
          className="max-w-[340px] w-[60%] h-auto object-contain"
          style={{ filter: "drop-shadow(0 0 18px rgba(126,217,87,0.45))" }}
        />
        <div className="w-full overflow-hidden" style={{ maskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)", WebkitMaskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)" }}>
          <div className="flex gap-6 whitespace-nowrap animate-footer-mq w-max">
            {Array.from({ length: 4 }).flatMap((_, i) => [
              <span key={`a-${i}`} className="font-[family-name:var(--font-body)] text-base font-semibold text-[var(--color-text-primary)] tracking-wider uppercase">
                Renueva tu mente
              </span>,
              <span key={`b-${i}`} className="text-[var(--color-accent)] text-base font-bold">
                ·
              </span>,
              <span key={`c-${i}`} className="font-[family-name:var(--font-body)] text-base font-semibold text-[var(--color-text-primary)] tracking-wider uppercase">
                Cambia tu destino
              </span>,
              <span key={`d-${i}`} className="text-[var(--color-accent)] text-base font-bold">
                ·
              </span>,
            ])}
          </div>
        </div>
      </div>

      <div className="py-6 px-5 md:px-10 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-5 flex-wrap justify-center">
          {[
            { label: "WhatsApp", href: "https://wa.me/573153614260" },
            { label: "Email", href: "mailto:Fitmagrasystems@gmail.com" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/mauriciofitmagra/" },
            { label: "Facebook", href: "https://www.facebook.com/FitmagraOficial/" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              className="text-[0.7rem] text-[var(--color-text-muted)] no-underline transition-colors hover:text-[var(--color-accent)]"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="text-[0.7rem] text-[var(--color-text-muted)] max-w-[520px] leading-relaxed text-center md:text-right">
          © 2026 FitMagra Systems · Bogotá, Colombia · M.Sc. Mauricio Sánchez · Todos los derechos reservados · Términos y condiciones · Política de privacidad
        </div>
      </div>
    </footer>
  );
}
