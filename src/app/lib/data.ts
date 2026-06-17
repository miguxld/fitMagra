export type Lang = "es" | "en";

export const translations = {
  es: {
    "nav.about": "Sobre mí",
    "nav.method": "Método",
    "nav.results": "Resultados",
    "nav.plans": "Planes",
    "nav.contact": "Contacto",
    "nav.cta": "Valoración gratuita →",
    "hero.trust": "<b>Mg. Universidad del Rosario</b> · +450 clientes · 14 países",
    "hero.title.l1": "Tu cuerpo cambia",
    "hero.title.l2": "cuando tu mente",
    "hero.title.l3": "<em>entiende el porqué.</em>",
    "hero.sub":
      "FitMagra Systems integra bioquímica aplicada, nutrición clínica y entrenamiento periodizado. No es una rutina genérica — es un protocolo diseñado para tu fisiología.",
    "hero.cta": "Agenda tu valoración gratuita",
    "hero.cta2": "Ver el método",
    "stats.label": "Por los números",
    "stats.title": "Ciencia + experiencia,<br><em>medida en personas reales.</em>",
    "about.label": "Sobre el coach",
    "about.title": "No soy un entrenador más.<br><em>Soy tu sistema.</em>",
    "method.label": "El método",
    "method.title": "FitMagra Systems —<br><em>seis pilares, un protocolo.</em>",
    "transforms.label": "Evidencia visual",
    "transforms.title": "Transformaciones <em>reales.</em>",
    "testi.label": "Voces de clientes",
    "testi.title": "Clientes reales,<br><em>resultados reales.</em>",
    "pricing.label": "Inversión",
    "pricing.title": "Un sistema de<br><em>transformación guiada.</em>",
    "pricing.sub":
      "No compras una rutina. Accedes a un sistema de acompañamiento estratégico con base científica real, ajuste clínico semanal y resultados auditables.",
    "pricing.note":
      "<b>¿No sabes cuál elegir?</b> Toca cualquier card lateral para verla en detalle. Todos los planes incluyen <b>charla inicial gratuita</b>, plan personalizado en PDF, entrega en 1-3 días, soporte WhatsApp y dudas ilimitadas.",
    "pay.label": "Formas de pago",
    "pay.title": "Pago simple, <em>seguro.</em>",
    "contact.title": "Da el primer paso<br>hacia tu mejor<br><em>versión.</em>",
    "contact.sub":
      "Agenda una valoración gratuita de 30 minutos. Sin compromiso — solo claridad sobre tu punto de partida y lo que puedes lograr con FitMagra Systems.",
    "contact.cta": "Agendar valoración gratuita",
    "globe.label": "Alcance global",
    "globe.title": "14 países,<br><em>un solo sistema.</em>",
  },
  en: {
    "nav.about": "About",
    "nav.method": "Method",
    "nav.results": "Results",
    "nav.plans": "Plans",
    "nav.contact": "Contact",
    "nav.cta": "Free assessment →",
    "hero.trust":
      "<b>M.Sc. Universidad del Rosario</b> · +450 clients · 14 countries",
    "hero.title.l1": "Your body changes",
    "hero.title.l2": "when your mind",
    "hero.title.l3": "<em>understands why.</em>",
    "hero.sub":
      "FitMagra Systems integrates applied biochemistry, clinical nutrition and periodized training. Not a generic routine — a protocol designed for your physiology.",
    "hero.cta": "Book your free assessment",
    "hero.cta2": "See the method",
    "stats.label": "By the numbers",
    "stats.title": "Science + experience,<br><em>measured in real people.</em>",
    "about.label": "About the coach",
    "about.title": "Not just another trainer.<br><em>I am your system.</em>",
    "method.label": "The method",
    "method.title": "FitMagra Systems —<br><em>six pillars, one protocol.</em>",
    "transforms.label": "Visual evidence",
    "transforms.title": "Real <em>transformations.</em>",
    "testi.label": "Client voices",
    "testi.title": "Real clients,<br><em>real results.</em>",
    "pricing.label": "Investment",
    "pricing.title": "A guided<br><em>transformation system.</em>",
    "pricing.sub":
      "You don't buy a routine. You access a strategic coaching system with real scientific base, weekly clinical adjustments and auditable results.",
    "pricing.note":
      "<b>Not sure which to choose?</b> Tap any side card to see it in detail. All plans include <b>free initial chat</b>, personalized PDF plan, 1-3 day delivery, WhatsApp support and unlimited questions.",
    "pay.label": "Payment methods",
    "pay.title": "Simple, <em>secure</em> payment.",
    "contact.title": "Take the first step<br>toward your best<br><em>version.</em>",
    "contact.sub":
      "Book a free 30-minute assessment. No commitment — just clarity on your starting point and what you can achieve with FitMagra Systems.",
    "contact.cta": "Book free assessment",
    "globe.label": "Global reach",
    "globe.title": "14 countries,<br><em>one system.</em>",
  },
} as const;

export function t(lang: Lang, key: keyof (typeof translations)["es"]): string {
  return translations[lang][key] || key;
}

export const countryNames: Record<string, string> = {
  CO: "Colombia", US: "Estados Unidos", MX: "México", AR: "Argentina",
  CL: "Chile", EC: "Ecuador", ES: "España", PE: "Perú", VE: "Venezuela",
  BR: "Brasil", UY: "Uruguay", CR: "Costa Rica", PA: "Panamá", GT: "Guatemala",
};

export const countryNamesEN: Record<string, string> = {
  CO: "Colombia", US: "United States", MX: "Mexico", AR: "Argentina",
  CL: "Chile", EC: "Ecuador", ES: "Spain", PE: "Peru", VE: "Venezuela",
  BR: "Brazil", UY: "Uruguay", CR: "Costa Rica", PA: "Panama", GT: "Guatemala",
};

export const countryCoords: Record<string, [number, number]> = {
  CO: [4.7, -74.1], US: [38, -97], MX: [23.6, -102.5], AR: [-38.4, -63.6],
  CL: [-35.7, -71.5], EC: [-1.8, -78.2], ES: [40.5, -3.7], PE: [-9.2, -75],
  VE: [6.4, -66.6], BR: [-14.2, -51.9], UY: [-32.5, -55.8], CR: [9.7, -83.8],
  PA: [8.5, -80.8], GT: [15.8, -90.2],
};

export const flags: Record<string, string> = {
  CO: "#FCD116,#003893,#CE1126", US: "#3C3B6E,#FFFFFF,#B22234", MX: "#006847,#FFFFFF,#CE1126",
  AR: "#74ACDF,#FFFFFF,#74ACDF", CL: "#FFFFFF,#0039A6,#D52B1E", EC: "#FFDD00,#0033A0,#CE1126",
  ES: "#AA151B,#F1BF00,#AA151B", PE: "#D91023,#FFFFFF,#D91023", VE: "#FFCC00,#00247D,#CF142B",
  BR: "#009B3A,#FEDF00,#009B3A", UY: "#FFFFFF,#0038A8,#FFFFFF", CR: "#0033A0,#FFFFFF,#CE1126",
  PA: "#FFFFFF,#D52B1E,#005AA7", GT: "#4997D0,#FFFFFF,#4997D0",
};

export function getCountryNames(lang: Lang) {
  return lang === "en" ? countryNamesEN : countryNames;
}

export function flagSVG(code: string): string {
  switch (code) {
    case "US": return `<svg viewBox="0 0 19 10" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="19" height="10" fill="#B22234"/><path d="M0 1.15h19M0 2.3h19M0 3.46h19M0 4.61h19M0 5.77h19M0 6.92h19M0 8.08h19M0 9.23h19" stroke="#fff" stroke-width=".77"/><rect width="7.6" height="5.38" fill="#3C3B6E"/></svg>`;
    case "ES": return `<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="6" height="4" fill="#AA151B"/><rect y="1" width="6" height="2" fill="#F1BF00"/></svg>`;
    case "CO": return `<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="6" height="2" fill="#FCD116"/><rect y="2" width="6" height="1" fill="#003893"/><rect y="3" width="6" height="1" fill="#CE1126"/></svg>`;
    case "AR": return `<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="6" height="4" fill="#74ACDF"/><rect y="1.33" width="6" height="1.34" fill="#fff"/><circle cx="3" cy="2" r=".42" fill="#F6B40E"/></svg>`;
    case "CL": return `<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="6" height="2" fill="#fff"/><rect y="2" width="6" height="2" fill="#D52B1E"/><rect width="2" height="2" fill="#0039A6"/><polygon points="1,.4 1.18,.85 1.62,.85 1.27,1.13 1.4,1.6 1,1.3 .6,1.6 .73,1.13 .38,.85 .82,.85" fill="#fff"/></svg>`;
    case "UY": return `<svg viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="18" height="12" fill="#fff"/><path d="M0 1.5h18M0 4.5h18M0 7.5h18M0 10.5h18" stroke="#0038A8" stroke-width="1.2"/><rect width="9" height="6" fill="#fff"/><circle cx="4.5" cy="3" r="1.5" fill="#FCD116"/></svg>`;
    case "CR": return `<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="6" height=".67" fill="#0033A0"/><rect y=".67" width="6" height=".67" fill="#fff"/><rect y="1.34" width="6" height="1.32" fill="#CE1126"/><rect y="2.66" width="6" height=".67" fill="#fff"/><rect y="3.33" width="6" height=".67" fill="#0033A0"/></svg>`;
    case "PA": return `<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="3" height="2" fill="#fff"/><rect x="3" width="3" height="2" fill="#D52B1E"/><rect y="2" width="3" height="2" fill="#005AA7"/><rect x="3" y="2" width="3" height="2" fill="#fff"/><polygon points="1.5,.5 1.6,.85 2,.85 1.68,1.05 1.8,1.4 1.5,1.2 1.2,1.4 1.32,1.05 1,.85 1.4,.85" fill="#005AA7"/><polygon points="4.5,2.5 4.6,2.85 5,2.85 4.68,3.05 4.8,3.4 4.5,3.2 4.2,3.4 4.32,3.05 4,2.85 4.4,2.85" fill="#D52B1E"/></svg>`;
    case "BR": return `<svg viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="14" height="10" fill="#009B3A"/><polygon points="7,1.5 12.5,5 7,8.5 1.5,5" fill="#FEDF00"/><circle cx="7" cy="5" r="2" fill="#002776"/></svg>`;
    case "VE": return `<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="6" height="1.33" fill="#FFCC00"/><rect y="1.33" width="6" height="1.34" fill="#00247D"/><rect y="2.67" width="6" height="1.33" fill="#CF142B"/></svg>`;
    case "EC": return `<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="6" height="2" fill="#FFDD00"/><rect y="2" width="6" height="1" fill="#0033A0"/><rect y="3" width="6" height="1" fill="#CE1126"/></svg>`;
    case "PE": return `<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="2" height="4" fill="#D91023"/><rect x="2" width="2" height="4" fill="#fff"/><rect x="4" width="2" height="4" fill="#D91023"/></svg>`;
    case "MX": return `<svg viewBox="0 0 7 4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="7" height="4" fill="#fff"/><rect width="2.33" height="4" fill="#006847"/><rect x="4.67" width="2.33" height="4" fill="#CE1126"/><circle cx="3.5" cy="2" r=".55" fill="none" stroke="#5C2C0A" stroke-width=".12"/></svg>`;
    case "GT": return `<svg viewBox="0 0 5 3" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="5" height="3" fill="#fff"/><rect width="1.67" height="3" fill="#4997D0"/><rect x="3.33" width="1.67" height="3" fill="#4997D0"/></svg>`;
    default:
      const [c1, c2, c3] = (flags[code] || "#888,#bbb,#444").split(",");
      return `<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="6" height="1.33" fill="${c1}"/><rect y="1.33" width="6" height="1.33" fill="${c2}"/><rect y="2.66" width="6" height="1.34" fill="${c3}"/></svg>`;
  }
}

export const countryCodes = Object.keys(countryCoords);
export const USD_RATE = 4000;

export const TERMS = {
  "1m": { months: 1, discount: 0 },
  "2m": { months: 2, discount: 0.1 },
  "3m": { months: 3, discount: 0.15 },
} as const;
export type TermKey = keyof typeof TERMS;

export function fmtCOP(n: number): string { return "$" + Math.round(n).toLocaleString("es-CO"); }
export function fmtUSD(n: number): string { return "$" + Math.round(n).toLocaleString("en-US") + " USD"; }

export const getPlans = (lang: Lang) => [
  {
    id: "standard",
    name: "Standard",
    headline: lang === "es" ? '"Tú ya sabes. Solo necesitas dirección."' : '"You already know. You just need direction."',
    tag: lang === "es" 
      ? "Vienes porque sabes que necesitas ayuda. Yo te doy el mapa. Tú caminas. No es coaching de mano sostenida — es arquitectura real de fitness para que entiendas qué hacer y lo hagas."
      : "You come because you know you need help. I give you the map. You walk. It's not hand-holding coaching — it's real fitness architecture so you understand what to do and do it.",
    baseCOP: 250000,
    features: lang === "es" ? [
      "Plan de alimentación personalizado con base científica real",
      "Rutina de entrenamiento periodizada",
      "Cálculos calóricos con 4 ecuaciones científicas según lo que tu cuerpo más requiera",
      "Plan de suplementación dosificado",
      "Árbol de decisión clínico (qué ajustar si te atascas)",
      "Soporte WhatsApp",
      "Prioridad de respuesta < 12 h",
      "1 sesión/mes de retroalimentación y Q&A · 1 h",
    ] : [
      "Personalized nutrition plan with real scientific basis",
      "Periodized training routine",
      "Caloric calculations with 4 scientific equations depending on what your body needs most",
      "Dosed supplementation plan",
      "Clinical decision tree (what to adjust if you get stuck)",
      "WhatsApp support",
      "Response priority < 12 h",
      "1 session/month of feedback and Q&A · 1 h",
    ],
    cta: lang === "es" ? "Comenzar con Standard" : "Start with Standard",
    featured: false,
  },
  {
    id: "elite",
    name: "Elite",
    headline: lang === "es" ? '"Cuando decides que esta vez sí."' : '"When you decide that this time is for real."',
    tag: lang === "es"
      ? "Acceso prioritario. 4 sesiones al mes contigo. Cada semana revisamos progreso, ajustamos protocolos y optimizamos en tiempo real. No es solo un plan — es un acompañamiento donde tus avances tienen mi atención real. Tus resultados importan."
      : "Priority access. 4 sessions a month with you. Every week we review progress, adjust protocols and optimize in real time. It's not just a plan — it's coaching where your progress gets my real attention. Your results matter.",
    baseCOP: 400000,
    features: lang === "es" ? [
      "Todo lo del Plan Standard",
      "4 sesiones/mes presencial o video",
      "Perfil nutricional por alimento (prescripción adaptada por tipo de sangre)",
      "Cronobiología aplicada (timing óptimo de macros)",
      "Biofeedback semanal con ajuste en tiempo real",
      'Ebook "Biohacking FitMagra" (exclusivo)',
      "Acceso a Portal FitMagra (biblioteca de protocolos, skills Claude, videos exclusivos)",
      "Dashboard interactivo de progreso mes a mes",
      "Prioridad de respuesta < 1 h",
    ] : [
      "Everything in the Standard Plan",
      "4 sessions/month in-person or video",
      "Nutritional profile per food (prescription adapted by blood type)",
      "Applied chronobiology (optimal timing of macros)",
      "Weekly biofeedback with real-time adjustment",
      'Ebook "FitMagra Biohacking" (exclusive)',
      "Access to FitMagra Portal (protocol library, Claude skills, exclusive videos)",
      "Interactive month-by-month progress dashboard",
      "Response priority < 1 h",
    ],
    cta: lang === "es" ? "Comenzar con Elite" : "Start with Elite",
    featured: true,
  },
  {
    id: "platino",
    name: "Platino",
    headline: lang === "es" ? '"Turbo desde el día uno. Mi atención, sin reservas."' : '"Turbo from day one. My attention, without reservations."',
    tag: lang === "es"
      ? "Este plan es para quien entiende que el cuerpo necesita ser escuchado antes de ser entrenado. Inicio con un protocolo de choque metabólico real — limpieza de órganos vitales, reset hormonal, base nutracéutica. Luego construimos juntos, con herramientas que no encontrarás en ningún otro lugar. Estoy contigo. De verdad."
      : "This plan is for those who understand that the body needs to be listened to before being trained. I start with a real metabolic shock protocol — cleansing of vital organs, hormonal reset, nutraceutical base. Then we build together, with tools you won't find anywhere else. I'm with you. For real.",
    baseCOP: 600000,
    features: lang === "es" ? [
      "Todo lo del Plan Elite",
      "6–8 sesiones mes 1 (protocolo de choque inicial)",
      "Protocolo de limpieza corporal mes 1:",
      "Drenaje linfático + movilidad articular",
      "Reset de ejes hormonales (cortisol, insulina)",
      '"Clean slate" nutricional · protocolo 72 h de reset',
      "Alimentación nutracéutica de alto impacto (aplicada en países avanzados, base funcional real)",
      "Prescripción desde múltiples ángulos clínicos:",
      "Por tipo de sangre",
      "Por perfil nutracéutico",
      "Por biodecomposición genética (tecnología alemana)",
      "Por ritmos circadianos y eje hormonal",
      "Protocolos de Medicina Tradicional China (diagnóstico funcional profundo)",
      "Árbol de decisión doctoral multidisciplinario (fisiólogo · dietista clínico · bioquímico)",
      "Suplementación basada en evidencia Oxford CEBM",
      "Videos de entrenamiento grabados personalizados",
      "Acceso a investigaciones científicas clasificadas por sistema corporal",
      "Prioridad máxima — acceso directo",
    ] : [
      "Everything in the Elite Plan",
      "6–8 sessions month 1 (initial shock protocol)",
      "Body cleansing protocol month 1:",
      "Lymphatic drainage + joint mobility",
      "Reset of hormonal axes (cortisol, insulin)",
      '"Clean slate" nutrition · 72h reset protocol',
      "High impact nutraceutical nutrition (applied in advanced countries, real functional base)",
      "Prescription from multiple clinical angles:",
      "By blood type",
      "By nutraceutical profile",
      "By genetic biodecomposition (German technology)",
      "By circadian rhythms and hormonal axis",
      "Traditional Chinese Medicine protocols (deep functional diagnosis)",
      "Multidisciplinary doctoral decision tree (physiologist · clinical dietitian · biochemist)",
      "Supplementation based on Oxford CEBM evidence",
      "Personalized recorded training videos",
      "Access to scientific research classified by body system",
      "Maximum priority — direct access",
    ],
    cta: lang === "es" ? "Comenzar con Platino" : "Start with Platino",
    featured: false,
  },
];

export const getPaymentMethodsCO = (lang: Lang) => [
  { name: "Nequi / Daviplata", detail: "+57 316 5754416", badge: lang === "es" ? "Digital · Inmediato" : "Digital · Instant", logo: "/img/logo-nequi.png.png", bg: "#fff" },
  { name: "Tarjeta D·C", detail: "Visa · Mastercard · SUMUP", badge: lang === "es" ? "Datáfono o link" : "POS or link", logo: "/img/logo-visa.png", bg: "#1A1F71" },
  { name: "MOVII · Baloto", detail: lang === "es" ? "Convenio 969696\nTel: 316 5754416" : "Agreement 969696\nTel: +57 316 5754416", logo: "/img/logo-baloto.png.png", bg: "#fff" },
  { name: "Av Villas", detail: "Cta: 05-48-74-172\nM. Sánchez · CC 1.016.013.376", logo: "/img/logo-avvillas.png.png", bg: "#fff" },
  { name: "BCSC · Bancolombia", detail: "Cta: 240-2386-5307\nM. Sánchez · CC 1.016.013.376", logo: "/img/logo-bancolombia.png.png", bg: "#fff" },
  { name: "Efecty · Baloto · Éxito", detail: lang === "es" ? "Toda Colombia\nA nombre de Mauricio Sánchez" : "All Colombia\nName: Mauricio Sánchez", badge: "", logo: "/img/logo-exito.png.png", bg: "#FFD200" },
];

export const getPaymentMethodsInt = (lang: Lang) => [
  { name: "Remitly", detail: lang === "es" ? "Transferencia internacional" : "International transfer", badge: lang === "es" ? "Recomendado" : "Recommended", logo: "/img/logo-remitly.png.png", bg: "#fff" },
  { name: "Western Union", detail: lang === "es" ? "Disponible mundialmente" : "Available worldwide", logo: "/img/logo-western.png.png", bg: "#000" },
  { name: "MoneyGram", detail: lang === "es" ? "Convenio Bancolombia" : "Bancolombia agreement", logo: "/img/logo-moneygram.png.png", bg: "#fff" },
];

export const getSteps = (lang: Lang) => [
  { num: "01", title: lang === "es" ? "Elige tu plan" : "Choose your plan", desc: lang === "es" ? "Contáctanos por WhatsApp y confirmamos disponibilidad." : "Contact us via WhatsApp and we'll confirm availability." },
  { num: "02", title: lang === "es" ? "Realiza el pago" : "Make the payment", desc: lang === "es" ? "Por cualquier método. Libre de comisiones del ente recaudador." : "Via any method. Free of collector entity commissions." },
  { num: "03", title: lang === "es" ? "Envía comprobante" : "Send receipt", desc: "WhatsApp o Fitmagrasystems@gmail.com" },
  { num: "04", title: lang === "es" ? "Plan en 1-3 días" : "Plan in 1-3 days", desc: lang === "es" ? "Agendamos charla inicial y construimos tu protocolo." : "We schedule initial chat and build your protocol." },
];

export const getTestimonials = (lang: Lang) => [
  {
    initials: "AB",
    name: "Ángela Babilonia",
    role: lang === "es" ? "Post-operatoria · Cliente desde 2021" : "Post-surgery · Client since 2021",
    text: lang === "es" 
      ? "Llegué buscando recuperarme de una cirugía y encontré un sistema que transformó mi relación con el cuerpo. Mauricio no improvisa: cada decisión tiene un porqué científico."
      : "I came looking to recover from a surgery and found a system that transformed my relationship with my body. Mauricio doesn't improvise: every decision has a scientific reason.",
  },
  {
    initials: "JZ",
    name: "Juan Zaraza",
    role: lang === "es" ? "Médico · OceanMan 2026" : "Doctor · OceanMan 2026",
    text: lang === "es"
      ? "Como médico soy muy escéptico. Lo que me convenció fue la profundidad científica: bibliografía y niveles de evidencia Oxford que yo mismo revisé y validé."
      : "As a doctor I am very skeptical. What convinced me was the scientific depth: bibliography and Oxford evidence levels that I personally reviewed and validated.",
  },
  {
    initials: "AD",
    name: "Adriana Díaz",
    role: lang === "es" ? "Transformación estética" : "Aesthetic transformation",
    text: lang === "es"
      ? "Había probado todo. FitMagra fue diferente desde el primer día: un plan con mi nombre, mis exámenes y mis objetivos. No una plantilla con mi foto."
      : "I had tried everything. FitMagra was different from day one: a plan with my name, my exams and my goals. Not a template with my photo.",
  },
  {
    initials: "CM",
    name: "Carlos M.",
    role: lang === "es" ? "Pérdida de grasa · 90 días" : "Fat loss · 90 days",
    text: lang === "es"
      ? "En 90 días logré lo que en 3 años de gym solo no pude. El plan de nutrición fue clave — entendí por qué comía lo que comía y en qué momento exacto."
      : "In 90 days I achieved what I couldn't in 3 years of gym alone. The nutrition plan was key — I understood why I was eating what I was eating and at what exact time.",
  },
  {
    initials: "LG",
    name: "Laura G.",
    role: lang === "es" ? "Plan Platino · España" : "Platino Plan · Spain",
    text: lang === "es"
      ? "Me impactó el nivel del plan — bibliografía científica, justificación de cada suplemento. Esto no es coaching genérico, es medicina aplicada al fitness."
      : "I was struck by the level of the plan — scientific bibliography, justification for each supplement. This is not generic coaching, it's medicine applied to fitness.",
  },
  {
    initials: "RP",
    name: "Roberto P.",
    role: "CEO · México / Mexico",
    text: lang === "es"
      ? "Lo que me dio Mauricio no fue una rutina — fue un sistema para entender mi cuerpo. Después de 6 meses ya no necesito que me diga qué hacer."
      : "What Mauricio gave me wasn't a routine — it was a system to understand my body. After 6 months I no longer need him to tell me what to do.",
  },
];

export const getTransformations = (lang: Lang) => [
  { src: "/img/t-01.jpg", label: lang === "es" ? "Recomposición" : "Recomposition", type: "cover" as const },
  { src: "/img/t-02.jpg", label: lang === "es" ? "Glúteos" : "Glutes", type: "contain" as const },
  { src: "/img/t-mes.jpg", label: lang === "es" ? "Recomposición" : "Recomposition", type: "cover" as const, wide: true },
  { src: "/img/t-03.jpg", label: lang === "es" ? "Recomposición" : "Recomposition", type: "contain" as const },
  { src: "/img/t-04.jpg", label: lang === "es" ? "Pérdida" : "Loss", type: "cover" as const },
  { src: "/img/t-05.jpg", label: lang === "es" ? "Adelgazar" : "Weight Loss", type: "cover" as const },
  { src: "/img/t-06.jpg", label: lang === "es" ? "Tonificación" : "Toning", type: "cover" as const },
  { src: "/img/t-07.jpg", label: lang === "es" ? "90 días" : "90 days", type: "cover" as const },
  { src: "/img/t-08.jpg", label: lang === "es" ? "Tonificación" : "Toning", type: "cover" as const },
  { src: "/img/t-09.jpg", label: lang === "es" ? "Adelgazar" : "Weight Loss", type: "cover" as const },
  { src: "/img/t-angela.png", label: lang === "es" ? "Adelgazar" : "Weight Loss", type: "cover" as const },
  { src: "/img/t-hernan.png", label: lang === "es" ? "Recomposición" : "Recomposition", type: "contain" as const },
];

export const getCredentials = (lang: Lang) => [
  {
    inst: "Universidad del Rosario",
    title: lang === "es" ? "Magíster en Actividad Física y Salud" : "M.Sc. in Physical Activity and Health",
    meta: lang === "es" ? "Bogotá, Colombia · 2021" : "Bogota, Colombia · 2021",
    logo: "/img/logo-rosario.png.png",
  },
  {
    inst: lang === "es" ? "Certificación profesional" : "Professional certification",
    title: lang === "es" ? "Personal Trainer + Nutrición Deportiva" : "Personal Trainer + Sports Nutrition",
    meta: lang === "es" ? "Acreditación internacional" : "International accreditation",
  },
  {
    inst: lang === "es" ? "Especialización" : "Specialization",
    title: lang === "es" ? "Bioquímica aplicada al ejercicio" : "Applied biochemistry to exercise",
    meta: lang === "es" ? "Cronobiología + micronutrición" : "Chronobiology + micronutrition",
  },
  {
    inst: lang === "es" ? "Sistema propio" : "Own system",
    title: lang === "es" ? "FitMagra Systems · método doctoral" : "FitMagra Systems · doctoral method",
    meta: lang === "es" ? "4 ecuaciones · Oxford CEBM · IA" : "4 equations · Oxford CEBM · AI",
  },
];

export const getTimeline = (lang: Lang) => [
  { year: "2017", title: lang === "es" ? "Inicio en entrenamiento personal" : "Start in personal training", desc: lang === "es" ? "Primeros clientes presenciales en Bogotá. Aprendizaje empírico + autoformación." : "First in-person clients in Bogota. Empirical learning + self-training." },
  { year: "2019", title: lang === "es" ? "Certificación + nutrición deportiva" : "Certification + sports nutrition", desc: lang === "es" ? "Formalización académica. Primeros casos clínicos: post-operatorios y atletas." : "Academic formalization. First clinical cases: post-surgery and athletes." },
  { year: "2021", title: lang === "es" ? "Magíster · Universidad del Rosario" : "M.Sc. · Universidad del Rosario", desc: lang === "es" ? "Maestría en Actividad Física y Salud. Base científica formal para FitMagra Systems." : "Master's in Physical Activity and Health. Formal scientific base for FitMagra Systems." },
  { year: "2023", title: lang === "es" ? "Escalado internacional · 14 países" : "International scaling · 14 countries", desc: lang === "es" ? "Coaching remoto con protocolo doctoral. +200 clientes nuevos por año." : "Remote coaching with doctoral protocol. +200 new clients per year." },
  { year: "2026", title: lang === "es" ? "FitMagra Systems · MagraMind AI" : "FitMagra Systems · MagraMind AI", desc: lang === "es" ? "Sistema científico + asistente de IA 24/7. La siguiente generación del coaching." : "Scientific system + 24/7 AI assistant. The next generation of coaching." },
];

export const getMethodCards = (lang: Lang) => [
  { num: lang === "es" ? "01 · Bioquímica" : "01 · Biochemistry", title: lang === "es" ? "Bioquímica aplicada" : "Applied biochemistry", desc: lang === "es" ? "4 ecuaciones científicas cruzan tu metabolismo real: Harris-Benedict, Mifflin-St Jeor, Cunningham y Oxford. Sin estimaciones de internet." : "4 scientific equations cross your real metabolism: Harris-Benedict, Mifflin-St Jeor, Cunningham and Oxford. No internet estimates." },
  { num: lang === "es" ? "02 · Nutrición" : "02 · Nutrition", title: lang === "es" ? "Nutrición clínica" : "Clinical nutrition", desc: lang === "es" ? "Cronobiología + micronutriente por alimento. Tus comidas en el momento exacto para máxima absorción." : "Chronobiology + micronutrient per food. Your meals at the exact moment for maximum absorption." },
  { num: lang === "es" ? "03 · Suplementación" : "03 · Supplements", title: lang === "es" ? "Suplementación evidenciada" : "Evidence-based supplementation", desc: lang === "es" ? "Mecanismo de acción, dosis exacta y nivel de evidencia Oxford CEBM. Sin modas, sin riesgo." : "Mechanism of action, exact dose and Oxford CEBM level of evidence. No fads, no risk." },
  { num: lang === "es" ? "04 · Entrenamiento" : "04 · Training", title: lang === "es" ? "Entrenamiento periodizado" : "Periodized training", desc: lang === "es" ? "Fuerza, HIIT y cardio en ciclos progresivos según tu capacidad real y objetivos concretos." : "Strength, HIIT and cardio in progressive cycles according to your real capacity and concrete goals." },
  { num: lang === "es" ? "05 · Decisión clínica" : "05 · Clinical decision", title: lang === "es" ? "Árbol de decisión clínico" : "Clinical decision tree", desc: lang === "es" ? "Ajuste semanal según tus respuestas fisiológicas reales. El plan evoluciona contigo, no al revés." : "Weekly adjustment according to your real physiological responses. The plan evolves with you, not the other way around." },
  { num: "06 · IA", title: "MagraMind AI", desc: lang === "es" ? "Asistente de coaching con IA disponible 24/7. Soporte ilimitado durante todo el plan." : "AI coaching assistant available 24/7. Unlimited support throughout the plan." },
];
