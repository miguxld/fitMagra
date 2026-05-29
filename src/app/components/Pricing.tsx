"use client";

import { useState } from "react";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import {
  plans,
  TERMS,
  type TermKey,
  fmtCOP,
  fmtUSD,
  USD_RATE,
} from "@/app/lib/data";
import Reveal from "./Reveal";

interface PricingProps {
  t: (key: string) => string;
}

export default function Pricing({ t }: PricingProps) {
  const [currency, setCurrency] = useState<"cop" | "usd">("cop");
  const [term, setTerm] = useState<TermKey>("1m");
  const [activePlan, setActivePlan] = useState("elite");

  const headRef = useScrollReveal();

  const fmt = currency === "cop" ? fmtCOP : fmtUSD;
  const suffix = currency === "cop" ? "COP" : "USD";
  const termData = TERMS[term];

  const getPrice = (baseCOP: number) => {
    const monthly = currency === "cop" ? baseCOP : baseCOP / USD_RATE;
    const total = monthly * termData.months;
    const discounted = total * (1 - termData.discount);
    return { monthly, total, discounted, savings: total - discounted };
  };

  const planOrder = ["standard", "elite", "platino"];
  const activeIndex = planOrder.indexOf(activePlan);

  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-20 md:py-24 px-5 md:px-10 lg:px-20 bg-[var(--color-bg)]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[800px] h-[400px] top-[-10%] left-[20%] opacity-[0.08] rounded-full"
          style={{
            background:
              "radial-gradient(800px 400px at 20% -10%, rgba(126,217,87,.08), transparent 60%)",
          }}
        />
        <div
          className="absolute w-[600px] h-[300px] bottom-[-10%] right-[10%] opacity-[0.06] rounded-full"
          style={{
            background:
              "radial-gradient(600px 300px at 90% 110%, rgba(126,217,87,.06), transparent 60%)",
          }}
        />
      </div>

      <div className="max-w-[1240px] mx-auto relative z-10">
        <div ref={headRef} className="reveal text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.22em] uppercase text-[var(--color-accent)] font-medium mb-4">
            <span className="w-[18px] h-[1px] bg-[var(--color-accent)] inline-block" />
            {t("pricing.label")}
          </div>
          <h2
            className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,4.5vw,3.6rem)] font-medium leading-[1.1] tracking-tight text-[var(--color-text-primary)] mb-5"
            dangerouslySetInnerHTML={{ __html: t("pricing.title") }}
          />
          <p className="text-base leading-relaxed text-[var(--color-text-secondary)] max-w-[580px] mx-auto">
            {t("pricing.sub")}
          </p>
        </div>

        {/* Currency toggle */}
        <Reveal className="flex flex-col items-center gap-2 mb-4">
          <div className="flex bg-[var(--color-surface)] border border-[var(--color-card-border)] rounded-full p-[2px] shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
            <button
              onClick={() => setCurrency("cop")}
              aria-label="Colombian Pesos"
              aria-pressed={currency === "cop"}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[0.72rem] font-semibold tracking-wider cursor-pointer transition-all ${
                currency === "cop"
                  ? "bg-[var(--color-accent)] text-[var(--color-bg)] shadow-[0_3px_12px_rgba(126,217,87,0.35)]"
                  : "bg-transparent text-[var(--color-text-muted)]"
              }`}
            >
              <span className="w-[18px] h-[13px] rounded-sm overflow-hidden inline-block shadow-[0_1px_3px_rgba(0,0,0,0.35)]">
                <svg viewBox="0 0 6 4" preserveAspectRatio="none" className="w-full h-full block">
                  <rect width="6" height="2" fill="#FCD116" />
                  <rect y="2" width="6" height="1" fill="#003893" />
                  <rect y="3" width="6" height="1" fill="#CE1126" />
                </svg>
              </span>
              COP
            </button>
            <button
              onClick={() => setCurrency("usd")}
              aria-label="US Dollars"
              aria-pressed={currency === "usd"}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[0.72rem] font-semibold tracking-wider cursor-pointer transition-all ${
                currency === "usd"
                  ? "bg-[var(--color-accent)] text-[var(--color-bg)] shadow-[0_3px_12px_rgba(126,217,87,0.35)]"
                  : "bg-transparent text-[var(--color-text-muted)]"
              }`}
            >
              <span className="w-[18px] h-[13px] rounded-sm overflow-hidden inline-block shadow-[0_1px_3px_rgba(0,0,0,0.35)]">
                <svg viewBox="0 0 19 10" preserveAspectRatio="none" className="w-full h-full block">
                  <rect width="19" height="10" fill="#B22234" />
                  <path d="M0 1.15h19M0 2.3h19M0 3.46h19M0 4.61h19M0 5.77h19M0 6.92h19M0 8.08h19M0 9.23h19" stroke="#fff" strokeWidth=".77" />
                  <rect width="7.6" height="5.38" fill="#3C3B6E" />
                </svg>
              </span>
              USD
            </button>
          </div>
          {currency === "usd" && (
            <div className="text-[0.66rem] text-[var(--color-text-muted)] tracking-wide">
              Conversión estimada: 1 USD = $4.000 COP (tasa referencial)
            </div>
          )}
        </Reveal>

        {/* Term pills */}
        <Reveal className="flex justify-center mb-10">
          <div className="flex gap-2.5 flex-wrap justify-center">
            {(["1m", "2m", "3m"] as TermKey[]).map((k) => {
              const isOn = term === k;
              const label =
                k === "1m"
                  ? "1 mes"
                  : k === "2m"
                  ? "2 meses"
                  : "3 meses";
              const badge =
                k === "2m" ? "−10% 🔥" : k === "3m" ? "−15% ⚡" : null;
              return (
                <button
                  key={k}
                  onClick={() => setTerm(k)}
                  aria-pressed={isOn}
                  className={`relative flex items-center gap-2 px-5 py-3 rounded-full text-[0.78rem] font-semibold tracking-wide cursor-pointer transition-all whitespace-nowrap ${
                    isOn
                      ? "bg-gradient-to-br from-[var(--color-accent-dim)] to-transparent border border-[var(--color-accent)] text-[var(--color-text-primary)] shadow-[0_0_0_3px_var(--color-accent-dim),0_0_22px_rgba(126,217,87,0.32),inset_0_0_14px_var(--color-accent-dim)]"
                      : "bg-[var(--color-surface)] border border-[var(--color-card-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:-translate-y-px"
                  }`}
                >
                  {label}
                  {badge && (
                    <span
                      className={`text-[0.62rem] font-bold px-1.5 py-0.5 rounded tracking-wide ${
                        isOn
                          ? "bg-[var(--color-accent)] text-[var(--color-bg)]"
                          : "bg-[var(--color-accent-dim)] text-[var(--color-accent)]"
                      }`}
                    >
                      {badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Pricing cards stack */}
        <div className="relative mx-auto max-w-[920px] min-h-[700px] md:min-h-[980px]">
          {plans.map((plan, i) => {
            const { monthly, total, discounted, savings } = getPrice(plan.baseCOP);
            const hasDiscount = termData.discount > 0;
            const isActive = plan.id === activePlan;
            const isLeft =
              i === (activeIndex + 2) % 3;

            return (
              <div
                key={plan.id}
                onClick={() => {
                  if (!isActive) setActivePlan(plan.id);
                }}
                className={`absolute top-0 left-1/2 w-[clamp(280px,32vw,380px)] rounded-[22px] p-7 md:p-9 flex flex-col transition-all duration-[550ms] cursor-pointer ${
                  isActive
                    ? "translate-x-[-50%] scale-100 z-10"
                    : isLeft
                    ? "translate-x-[calc(-50%-220px)] translate-y-[35px] scale-[0.82] z-[1] opacity-45 saturate-[0.55] brightness-[0.7] hover:opacity-75 hover:saturate-[0.85] hover:brightness-90"
                    : "translate-x-[calc(-50%+220px)] translate-y-[35px] scale-[0.82] z-[1] opacity-45 saturate-[0.55] brightness-[0.7] hover:opacity-75 hover:saturate-[0.85] hover:brightness-90"
                } ${
                  isActive && plan.featured
                    ? "bg-gradient-to-b from-[var(--color-card-bg)] to-[var(--color-surface)] border border-[var(--color-accent)] shadow-[0_0_0_1px_var(--color-accent),0_0_60px_rgba(126,217,87,0.25),inset_0_1px_0_rgba(126,217,87,0.15)]"
                    : "bg-[var(--color-card-bg)] border border-[var(--color-card-border)]"
                }`}
                style={{
                  transitionTimingFunction: "cubic-bezier(0.34,1.25,0.64,1)",
                }}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold text-[0.7rem] tracking-[0.14em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_4px_16px_rgba(126,217,87,0.4)]">
                    ⭐ Más popular
                  </div>
                )}

                <div className="font-[family-name:var(--font-body)] text-[0.65rem] tracking-[0.24em] uppercase text-[rgba(126,217,87,0.7)] font-semibold mb-2">
                  {plan.name}
                </div>
                <div className="font-[family-name:var(--font-display)] text-[1.95rem] font-medium text-[var(--color-text-primary)] leading-[1.1] tracking-tight mb-4">
                  {plan.name}
                </div>
                <div className="font-[family-name:var(--font-display)] italic text-[1.05rem] text-[var(--color-accent)] leading-snug mb-3 tracking-tight">
                  {plan.headline}
                </div>
                <p className="text-[0.86rem] text-[var(--color-text-secondary)] leading-relaxed mb-7">
                  {plan.tag}
                </p>

                <div className="relative mb-2">
                  {hasDiscount && (
                    <>
                      <div className="text-[1.35rem] font-semibold text-[var(--color-text-muted)] relative w-fit line-through decoration-[var(--color-error)] decoration-2 px-1 mb-2">
                        {fmt(total)}
                      </div>
                      <div className="absolute -top-3.5 -right-3.5 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold text-[0.7rem] px-3 py-1.5 rounded-[10px] tracking-wide whitespace-nowrap shadow-[0_6px_18px_rgba(126,217,87,0.5)] z-10 rotate-[7deg] animate-[savings-pop_0.5s_cubic-bezier(0.34,1.56,0.64,1)]">
                        Ahorras {fmt(savings)}
                      </div>
                    </>
                  )}
                  <div
                    className={`font-[family-name:var(--font-display)] text-5xl font-semibold leading-none tracking-tight ${
                      hasDiscount ? "text-[var(--color-accent)]" : "text-[var(--color-text-primary)]"
                    }`}
                  >
                    {fmt(hasDiscount ? discounted : monthly)}
                  </div>
                  <div className="text-[0.78rem] text-[var(--color-text-muted)] mt-2 tracking-wide">
                    {hasDiscount
                      ? `${suffix} · ${termData.months} meses · pago único`
                      : `${suffix} · por mes · 30 días`}
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-card-border)] to-transparent my-6" />

                <ul className="flex-1 mb-7 space-y-0">
                  {plan.features.map((feat, fi) => (
                    <li
                      key={fi}
                      className={`text-[0.84rem] text-[var(--color-text-primary)] py-2 flex gap-3 items-start leading-snug ${
                        feat.startsWith("Drenaje") ||
                        feat.startsWith("Reset") ||
                        feat.startsWith('"Clean') ||
                        feat.startsWith("Por tipo") ||
                        feat.startsWith("Por perfil") ||
                        feat.startsWith("Por biodecomposición") ||
                        feat.startsWith("Por ritmos")
                          ? "pl-8 text-[0.78rem] text-[var(--color-text-muted)] py-0.5"
                          : ""
                      }`}
                    >
                      {feat.startsWith("Drenaje") ||
                      feat.startsWith("Reset") ||
                      feat.startsWith('"Clean') ||
                      feat.startsWith("Por tipo") ||
                      feat.startsWith("Por perfil") ||
                      feat.startsWith("Por biodecomposición") ||
                      feat.startsWith("Por ritmos") ? (
                        <span className="w-1.5 h-1.5 min-w-[6px] rounded-full bg-[var(--color-accent)] mt-2" />
                      ) : (
                        <span className="w-5 h-5 min-w-[20px] rounded-full bg-[var(--color-accent-dim)] text-[var(--color-accent)] text-[0.72rem] font-bold flex items-center justify-center mt-0.5">
                          ✓
                        </span>
                      )}
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/573153614260?text=Hola%2C%20me%20interesa%20el%20Plan%20${plan.name}`}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className={`block text-center py-4 px-6 rounded-full font-semibold text-[0.86rem] tracking-wide no-underline transition-all ${
                    plan.featured
                      ? "bg-[var(--color-accent)] text-[var(--color-bg)] border-2 border-[var(--color-accent)] shadow-[0_8px_24px_rgba(126,217,87,0.3)] hover:bg-[var(--color-accent-hover)] hover:border-[var(--color-accent-hover)] hover:shadow-[0_12px_32px_rgba(126,217,87,0.5)] hover:-translate-y-0.5 relative overflow-hidden"
                      : "border-2 border-[var(--color-card-border)] text-[var(--color-text-primary)] bg-transparent hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-dim)]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>

        <Reveal>
          <p
            className="text-center mt-12 text-[0.78rem] text-[var(--color-text-muted)] tracking-wide leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t("pricing.note") }}
          />
        </Reveal>
      </div>
    </section>
  );
}
