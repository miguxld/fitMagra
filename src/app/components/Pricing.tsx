"use client";

import { useState, useRef, useCallback } from "react";
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

  const planOrder = ["standard", "elite", "platino"] as const;
  const activeIndex = planOrder.indexOf(activePlan as typeof planOrder[number]);

  // Touch swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(dx) < 40) return;
      if (dx < 0) {
        // swipe left → next plan
        const next = (activeIndex + 1) % planOrder.length;
        setActivePlan(planOrder[next]);
      } else {
        // swipe right → prev plan
        const prev = (activeIndex - 1 + planOrder.length) % planOrder.length;
        setActivePlan(planOrder[prev]);
      }
      touchStartX.current = null;
    },
    [activeIndex, planOrder]
  );

  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-20 md:py-28 px-5 md:px-10 lg:px-20 bg-[var(--color-bg)]"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full opacity-[0.09] blur-3xl"
          style={{
            width: "min(800px, 100%)",
            height: "400px",
            top: "-5%",
            left: "15%",
            background: "radial-gradient(ellipse, rgba(126,217,87,.5), transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full opacity-[0.06] blur-3xl"
          style={{
            width: "min(600px, 100%)",
            height: "300px",
            bottom: "-5%",
            right: "5%",
            background: "radial-gradient(ellipse, rgba(126,217,87,.4), transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-[1240px] mx-auto relative z-10">

        {/* ── Header ── */}
        <div ref={headRef} className="reveal text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.22em] uppercase text-[var(--color-accent)] font-medium mb-4">
            <span className="w-[18px] h-[1px] bg-[var(--color-accent)] inline-block" />
            {t("pricing.label")}
            <span className="w-[18px] h-[1px] bg-[var(--color-accent)] inline-block" />
          </div>
          <h2
            className="font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.6rem)] font-medium leading-[1.1] tracking-tight text-[var(--color-text-primary)] mb-4"
            dangerouslySetInnerHTML={{ __html: t("pricing.title") }}
          />
          <p className="text-[0.95rem] leading-relaxed text-[var(--color-text-secondary)] max-w-[560px] mx-auto">
            {t("pricing.sub")}
          </p>
        </div>

        {/* ── Controls ── */}
        <Reveal className="flex flex-col items-center gap-4 mb-8">
          {/* Currency toggle */}
          <div className="flex bg-[var(--color-surface)] border border-[var(--color-card-border)] rounded-full p-[3px] shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
            {(["cop", "usd"] as const).map((cur) => (
              <button
                key={cur}
                onClick={() => setCurrency(cur)}
                aria-label={cur === "cop" ? "Pesos colombianos" : "Dólares"}
                aria-pressed={currency === cur}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[0.73rem] font-semibold tracking-wider cursor-pointer transition-all duration-300 ${
                  currency === cur
                    ? "bg-[var(--color-accent)] text-[var(--color-bg)] shadow-[0_3px_14px_rgba(126,217,87,0.4)]"
                    : "bg-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                }`}
              >
                <span className="w-[18px] h-[13px] rounded-sm overflow-hidden inline-block shadow-sm flex-shrink-0">
                  {cur === "cop" ? (
                    <svg viewBox="0 0 6 4" preserveAspectRatio="none" className="w-full h-full block">
                      <rect width="6" height="2" fill="#FCD116" />
                      <rect y="2" width="6" height="1" fill="#003893" />
                      <rect y="3" width="6" height="1" fill="#CE1126" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 19 10" preserveAspectRatio="none" className="w-full h-full block">
                      <rect width="19" height="10" fill="#B22234" />
                      <path d="M0 1.15h19M0 2.3h19M0 3.46h19M0 4.61h19M0 5.77h19M0 6.92h19M0 8.08h19M0 9.23h19" stroke="#fff" strokeWidth=".77" />
                      <rect width="7.6" height="5.38" fill="#3C3B6E" />
                    </svg>
                  )}
                </span>
                {cur === "cop" ? "COP" : "USD"}
              </button>
            ))}
          </div>
          {currency === "usd" && (
            <div className="text-[0.65rem] text-[var(--color-text-muted)] tracking-wide animate-fade-in-up">
              Conversión estimada: 1 USD = $4.000 COP (tasa referencial)
            </div>
          )}

          {/* Term pills */}
          <div className="flex gap-2.5 flex-wrap justify-center mt-1">
            {(["1m", "2m", "3m"] as TermKey[]).map((k) => {
              const isOn = term === k;
              const label = k === "1m" ? "1 mes" : k === "2m" ? "2 meses" : "3 meses";
              const badge = k === "2m" ? "−10% 🔥" : k === "3m" ? "−15% ⚡" : null;
              return (
                <button
                  key={k}
                  onClick={() => setTerm(k)}
                  aria-pressed={isOn}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-[0.78rem] font-semibold tracking-wide cursor-pointer transition-all duration-300 whitespace-nowrap ${
                    isOn
                      ? "bg-gradient-to-br from-[var(--color-accent-dim)] to-transparent border border-[var(--color-accent)] text-[var(--color-text-primary)] shadow-[0_0_0_3px_var(--color-accent-dim),0_0_22px_rgba(126,217,87,0.28),inset_0_0_14px_var(--color-accent-dim)]"
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

        {/* ── MOBILE: Swipeable single-card view ── */}
        <div
          className="block lg:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Plan tab selector */}
          <div className="flex rounded-2xl bg-[var(--color-surface)] border border-[var(--color-card-border)] p-1 mb-6 gap-1">
            {planOrder.map((pid) => {
              const plan = plans.find((p) => p.id === pid)!;
              const isOn = activePlan === pid;
              return (
                <button
                  key={pid}
                  onClick={() => setActivePlan(pid)}
                  className={`flex-1 py-2.5 px-2 rounded-xl text-[0.72rem] font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    isOn
                      ? "bg-[var(--color-accent)] text-[var(--color-bg)] shadow-[0_2px_12px_rgba(126,217,87,0.35)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                  }`}
                >
                  {plan.name}
                  {plan.featured && (
                    <span className="block text-[0.56rem] font-normal mt-0.5 opacity-80">
                      ⭐ Popular
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active card — mobile */}
          {plans
            .filter((p) => p.id === activePlan)
            .map((plan) => {
              const { monthly, total, discounted, savings } = getPrice(plan.baseCOP);
              const hasDiscount = termData.discount > 0;
              return (
                <div
                  key={plan.id}
                  className={`rounded-[22px] p-6 flex flex-col transition-all duration-500 ${
                    plan.featured
                      ? "bg-gradient-to-b from-[var(--color-card-bg)] to-[var(--color-surface)] border border-[var(--color-accent)] shadow-[0_0_0_1px_var(--color-accent),0_0_50px_rgba(126,217,87,0.2),inset_0_1px_0_rgba(126,217,87,0.12)]"
                      : "bg-[var(--color-card-bg)] border border-[var(--color-card-border)] shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
                  }`}
                >
                  {plan.featured && (
                    <div className="self-start mb-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold text-[0.66rem] tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full shadow-[0_4px_14px_rgba(126,217,87,0.4)]">
                      ⭐ Más popular
                    </div>
                  )}

                  <div className="font-[family-name:var(--font-display)] text-[1.8rem] font-medium text-[var(--color-text-primary)] leading-[1.1] tracking-tight mb-1">
                    {plan.name}
                  </div>
                  <div className="font-[family-name:var(--font-display)] italic text-[0.95rem] text-[var(--color-accent)] leading-snug mb-3 tracking-tight">
                    {plan.headline}
                  </div>
                  <p className="text-[0.84rem] text-[var(--color-text-secondary)] leading-relaxed mb-5">
                    {plan.tag}
                  </p>

                  {/* Price block */}
                  <div className="relative mb-2 pb-5 border-b border-[var(--color-card-border)]">
                    {hasDiscount && (
                      <>
                        <div className="text-[1.1rem] font-semibold text-[var(--color-text-muted)] line-through decoration-[var(--color-error)] decoration-2 mb-1.5 w-fit">
                          {fmt(total)}
                        </div>
                        <div className="absolute top-0 right-0 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold text-[0.68rem] px-3 py-1.5 rounded-xl tracking-wide whitespace-nowrap shadow-[0_6px_18px_rgba(126,217,87,0.45)] rotate-[4deg]">
                          Ahorras {fmt(savings)}
                        </div>
                      </>
                    )}
                    <div
                      className={`font-[family-name:var(--font-display)] text-[2.6rem] font-semibold leading-none tracking-tight ${
                        hasDiscount ? "text-[var(--color-accent)]" : "text-[var(--color-text-primary)]"
                      }`}
                    >
                      {fmt(hasDiscount ? discounted : monthly)}
                    </div>
                    <div className="text-[0.75rem] text-[var(--color-text-muted)] mt-2 tracking-wide">
                      {hasDiscount
                        ? `${suffix} · ${termData.months} meses · pago único`
                        : `${suffix} · por mes · 30 días`}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="flex-1 mt-5 mb-6 space-y-0">
                    {plan.features.map((feat, fi) => {
                      const isSubItem =
                        feat.startsWith("Drenaje") ||
                        feat.startsWith("Reset") ||
                        feat.startsWith('"Clean') ||
                        feat.startsWith("Por tipo") ||
                        feat.startsWith("Por perfil") ||
                        feat.startsWith("Por biodecomposición") ||
                        feat.startsWith("Por ritmos");
                      return (
                        <li
                          key={fi}
                          className={`text-[var(--color-text-primary)] py-1.5 flex gap-3 items-start leading-snug ${
                            isSubItem
                              ? "pl-7 text-[0.76rem] text-[var(--color-text-muted)] py-1"
                              : "text-[0.83rem]"
                          }`}
                        >
                          {isSubItem ? (
                            <span className="w-1.5 h-1.5 min-w-[6px] rounded-full bg-[var(--color-accent)] mt-2 opacity-70" />
                          ) : (
                            <span className="w-5 h-5 min-w-[20px] rounded-full bg-[var(--color-accent-dim)] text-[var(--color-accent)] text-[0.7rem] font-bold flex items-center justify-center mt-0.5 flex-shrink-0">
                              ✓
                            </span>
                          )}
                          {feat}
                        </li>
                      );
                    })}
                  </ul>

                  <a
                    href={`https://wa.me/573153614260?text=Hola%2C%20me%20interesa%20el%20Plan%20${plan.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-4 px-6 rounded-full font-semibold text-[0.86rem] tracking-wide no-underline transition-all active:scale-95 ${
                      plan.featured
                        ? "bg-[var(--color-accent)] text-[var(--color-bg)] border-2 border-[var(--color-accent)] shadow-[0_8px_24px_rgba(126,217,87,0.3)] hover:bg-[var(--color-accent-hover)] hover:shadow-[0_12px_32px_rgba(126,217,87,0.5)]"
                        : "border-2 border-[var(--color-card-border)] text-[var(--color-text-primary)] bg-transparent hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-dim)]"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              );
            })}

          {/* Dot navigation */}
          <div className="flex justify-center gap-2.5 mt-6">
            {planOrder.map((pid, i) => (
              <button
                key={pid}
                onClick={() => setActivePlan(pid)}
                aria-label={`Ver plan ${pid}`}
                className={`rounded-full transition-all duration-300 cursor-pointer border-0 ${
                  activePlan === pid
                    ? "w-7 h-2.5 bg-[var(--color-accent)] shadow-[0_0_10px_rgba(126,217,87,0.5)]"
                    : "w-2.5 h-2.5 bg-[var(--color-card-border)] hover:bg-[var(--color-text-muted)]"
                }`}
              />
            ))}
          </div>
          <p className="text-center text-[0.65rem] text-[var(--color-text-muted)] mt-3 tracking-wide">
            Desliza para cambiar de plan
          </p>
        </div>

        {/* ── DESKTOP: Fan/carousel stack ── */}
        <div className="hidden lg:block">
          <div className="relative mx-auto max-w-[1000px]" style={{ minHeight: "860px" }}>
            {plans.map((plan, i) => {
              const { monthly, total, discounted, savings } = getPrice(plan.baseCOP);
              const hasDiscount = termData.discount > 0;
              const isActive = plan.id === activePlan;
              const isLeft = i === (activeIndex + 2) % 3;

              return (
                <div
                  key={plan.id}
                  onClick={() => { if (!isActive) setActivePlan(plan.id); }}
                  className={`absolute top-0 left-1/2 rounded-[22px] p-8 xl:p-10 flex flex-col transition-all duration-[550ms] select-none ${
                    isActive
                      ? "cursor-default translate-x-[-50%] scale-100 z-10 w-[min(400px,90vw)]"
                      : `cursor-pointer z-[1] w-[min(360px,85vw)] ${
                          isLeft
                            ? "translate-x-[calc(-50%-240px)] translate-y-[40px] scale-[0.82] opacity-40 saturate-[0.5] brightness-[0.65] hover:opacity-70 hover:saturate-[0.8] hover:brightness-85"
                            : "translate-x-[calc(-50%+240px)] translate-y-[40px] scale-[0.82] opacity-40 saturate-[0.5] brightness-[0.65] hover:opacity-70 hover:saturate-[0.8] hover:brightness-85"
                        }`
                  } ${
                    isActive && plan.featured
                      ? "bg-gradient-to-b from-[var(--color-card-bg)] to-[var(--color-surface)] border border-[var(--color-accent)] shadow-[0_0_0_1px_var(--color-accent),0_0_70px_rgba(126,217,87,0.22),inset_0_1px_0_rgba(126,217,87,0.15)]"
                      : "bg-[var(--color-card-bg)] border border-[var(--color-card-border)] shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
                  }`}
                  style={{ transitionTimingFunction: "cubic-bezier(0.34,1.25,0.64,1)" }}
                >
                  {plan.featured && isActive && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold text-[0.68rem] tracking-[0.14em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_4px_16px_rgba(126,217,87,0.4)]">
                      ⭐ Más popular
                    </div>
                  )}

                  <div className="font-[family-name:var(--font-body)] text-[0.62rem] tracking-[0.24em] uppercase text-[rgba(126,217,87,0.65)] font-semibold mb-1">
                    {plan.name}
                  </div>
                  <div className="font-[family-name:var(--font-display)] text-[1.9rem] font-medium text-[var(--color-text-primary)] leading-[1.1] tracking-tight mb-2">
                    {plan.name}
                  </div>
                  <div className="font-[family-name:var(--font-display)] italic text-[1.0rem] text-[var(--color-accent)] leading-snug mb-3 tracking-tight">
                    {plan.headline}
                  </div>
                  <p className="text-[0.84rem] text-[var(--color-text-secondary)] leading-relaxed mb-6">
                    {plan.tag}
                  </p>

                  <div className="relative mb-2">
                    {hasDiscount && (
                      <>
                        <div className="text-[1.25rem] font-semibold text-[var(--color-text-muted)] line-through decoration-[var(--color-error)] decoration-2 mb-2 w-fit">
                          {fmt(total)}
                        </div>
                        <div className="absolute -top-3 -right-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold text-[0.68rem] px-3 py-1.5 rounded-[10px] tracking-wide whitespace-nowrap shadow-[0_6px_18px_rgba(126,217,87,0.5)] z-10 rotate-[7deg] animate-[savings-pop_0.5s_cubic-bezier(0.34,1.56,0.64,1)]">
                          Ahorras {fmt(savings)}
                        </div>
                      </>
                    )}
                    <div
                      className={`font-[family-name:var(--font-display)] text-[3rem] font-semibold leading-none tracking-tight ${
                        hasDiscount ? "text-[var(--color-accent)]" : "text-[var(--color-text-primary)]"
                      }`}
                    >
                      {fmt(hasDiscount ? discounted : monthly)}
                    </div>
                    <div className="text-[0.76rem] text-[var(--color-text-muted)] mt-2 tracking-wide">
                      {hasDiscount
                        ? `${suffix} · ${termData.months} meses · pago único`
                        : `${suffix} · por mes · 30 días`}
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-card-border)] to-transparent my-5" />

                  <ul className="flex-1 mb-6 space-y-0">
                    {plan.features.map((feat, fi) => {
                      const isSubItem =
                        feat.startsWith("Drenaje") ||
                        feat.startsWith("Reset") ||
                        feat.startsWith('"Clean') ||
                        feat.startsWith("Por tipo") ||
                        feat.startsWith("Por perfil") ||
                        feat.startsWith("Por biodecomposición") ||
                        feat.startsWith("Por ritmos");
                      return (
                        <li
                          key={fi}
                          className={`text-[var(--color-text-primary)] py-1.5 flex gap-3 items-start leading-snug ${
                            isSubItem
                              ? "pl-8 text-[0.76rem] text-[var(--color-text-muted)] py-0.5"
                              : "text-[0.83rem]"
                          }`}
                        >
                          {isSubItem ? (
                            <span className="w-1.5 h-1.5 min-w-[6px] rounded-full bg-[var(--color-accent)] mt-2 opacity-70" />
                          ) : (
                            <span className="w-5 h-5 min-w-[20px] rounded-full bg-[var(--color-accent-dim)] text-[var(--color-accent)] text-[0.7rem] font-bold flex items-center justify-center mt-0.5 flex-shrink-0">
                              ✓
                            </span>
                          )}
                          {feat}
                        </li>
                      );
                    })}
                  </ul>

                  <a
                    href={`https://wa.me/573153614260?text=Hola%2C%20me%20interesa%20el%20Plan%20${plan.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`block text-center py-4 px-6 rounded-full font-semibold text-[0.86rem] tracking-wide no-underline transition-all ${
                      plan.featured
                        ? "bg-[var(--color-accent)] text-[var(--color-bg)] border-2 border-[var(--color-accent)] shadow-[0_8px_24px_rgba(126,217,87,0.3)] hover:bg-[var(--color-accent-hover)] hover:shadow-[0_12px_32px_rgba(126,217,87,0.5)] hover:-translate-y-0.5"
                        : "border-2 border-[var(--color-card-border)] text-[var(--color-text-primary)] bg-transparent hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-dim)]"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              );
            })}
          </div>

          {/* Desktop dot navigation */}
          <div className="flex justify-center gap-3 mt-6">
            {planOrder.map((pid) => (
              <button
                key={pid}
                onClick={() => setActivePlan(pid)}
                aria-label={`Ver plan ${pid}`}
                className={`rounded-full border-0 cursor-pointer transition-all duration-300 ${
                  activePlan === pid
                    ? "w-8 h-2.5 bg-[var(--color-accent)] shadow-[0_0_10px_rgba(126,217,87,0.5)]"
                    : "w-2.5 h-2.5 bg-[var(--color-card-border)] hover:bg-[var(--color-text-muted)]"
                }`}
              />
            ))}
          </div>
          <p className="text-center text-[0.65rem] text-[var(--color-text-muted)] mt-3 tracking-wide">
            Clic en las cards laterales para navegar
          </p>
        </div>

        {/* ── Bottom note ── */}
        <Reveal>
          <div className="mt-12 mx-auto max-w-[640px] rounded-2xl bg-[var(--color-surface)] border border-[var(--color-card-border)] px-6 py-5">
            <p
              className="text-center text-[0.8rem] text-[var(--color-text-secondary)] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t("pricing.note") }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
