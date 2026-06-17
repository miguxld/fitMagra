"use client";

import { useState } from "react";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { getPaymentMethodsCO, getPaymentMethodsInt, getSteps, type Lang } from "@/app/lib/data";

interface PaymentProps {
  t: (key: string) => string;
  lang: Lang;
}

export default function Payment({ t, lang }: PaymentProps) {
  const [tab, setTab] = useState<"co" | "int" | "how">("co");
  const ref = useScrollReveal();

  const paymentMethodsCO = getPaymentMethodsCO(lang);
  const paymentMethodsInt = getPaymentMethodsInt(lang);
  const steps = getSteps(lang);

  return (
    <div id="payment" className="bg-[var(--color-surface)] text-[var(--color-text-primary)] rounded-[var(--radius-lg)] mx-5 md:mx-10 lg:mx-20 my-8 py-16 md:py-20 px-6 md:px-10 lg:px-16">
      <div ref={ref} className="reveal max-w-[1240px] mx-auto">
        <div className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.22em] uppercase text-[var(--color-text-muted)] mb-3">
          <span className="w-[18px] h-[1px] bg-[var(--color-accent)] inline-block" />
          {t("pay.label")}
        </div>
        <h2
          className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-tight text-[var(--color-text-primary)] mb-5"
          dangerouslySetInnerHTML={{ __html: t("pay.title") }}
        />
        <div className="w-12 h-0.5 bg-[var(--color-accent)] rounded-full mb-6" />

        <div className="flex gap-2 flex-wrap mb-8">
          {[
            { key: "co" as const, label: "Colombia" },
            { key: "int" as const, label: lang === "es" ? "Internacional" : "International" },
            { key: "how" as const, label: lang === "es" ? "¿Cómo funciona?" : "How does it work?" },
          ].map((b) => (
            <button
              key={b.key}
              onClick={() => setTab(b.key)}
              className={`px-5 py-2.5 rounded-full text-[0.7rem] border cursor-pointer transition-all ${
                tab === b.key
                  ? "bg-[var(--color-card-bg)] text-[var(--color-text-primary)] border-[var(--color-card-border)]"
                  : "bg-transparent text-[var(--color-text-muted)] border-[var(--color-card-border)] hover:text-[var(--color-text-secondary)]"
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>

        {tab === "co" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {paymentMethodsCO.map((pm, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-[var(--radius-md)] bg-[var(--color-card-bg)] border border-[var(--color-card-border)] transition-all hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-accent-sm)]"
              >
                <div
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0 overflow-hidden"
                  style={{ background: pm.bg }}
                >
                  <img
                    src={pm.logo}
                    alt={pm.name}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div>
                  <div className="text-[0.78rem] font-medium text-[var(--color-text-primary)] mb-0.5">
                    {pm.name}
                  </div>
                  <div className="text-[0.66rem] text-[var(--color-text-muted)] leading-relaxed whitespace-pre-line">
                    {pm.detail}
                  </div>
                  {pm.badge && (
                    <span className="inline-block text-[0.54rem] tracking-wider uppercase bg-[var(--color-accent-dim)] text-[var(--color-accent)] rounded-full px-2 py-0.5 mt-1">
                      {pm.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "int" && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {paymentMethodsInt.map((pm, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-[var(--radius-md)] bg-[var(--color-card-bg)] border border-[var(--color-card-border)] transition-all hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-accent-sm)]"
                >
                  <div
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0 overflow-hidden"
                    style={{ background: pm.bg }}
                  >
                    <img
                      src={pm.logo}
                      alt={pm.name}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div>
                    <div className="text-[0.78rem] font-medium text-[var(--color-text-primary)] mb-0.5">
                      {pm.name}
                    </div>
                    <div className="text-[0.66rem] text-[var(--color-text-muted)] leading-relaxed">
                      {pm.detail}
                    </div>
                    {pm.badge && (
                      <span className="inline-block text-[0.54rem] tracking-wider uppercase bg-[var(--color-accent-dim)] text-[var(--color-accent)] rounded-full px-2 py-0.5 mt-1">
                        {pm.badge}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[0.72rem] text-[var(--color-text-muted)] leading-relaxed">
              {lang === "es" ? "Valor libre de comisiones. Envía comprobante a Fitmagrasystems@gmail.com o WhatsApp +57 316 5754416." : "Commission-free value. Send receipt to Fitmagrasystems@gmail.com or WhatsApp +57 316 5754416."}
            </p>
          </div>
        )}

        {tab === "how" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-5 rounded-[var(--radius-md)] bg-[var(--color-card-bg)] border border-[var(--color-card-border)]"
              >
                <div className="font-mono text-[0.78rem] mb-3 tracking-wider inline-block bg-[var(--color-accent)] text-[var(--color-bg)] px-2 py-1 rounded-lg font-bold">
                  {step.num}
                </div>
                <div className="text-[0.78rem] font-medium text-[var(--color-text-primary)] mb-1">
                  {step.title}
                </div>
                <div className="text-[0.7rem] text-[var(--color-text-muted)] leading-relaxed">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
