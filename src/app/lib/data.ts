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
  CO: "Colombia",
  US: "Estados Unidos",
  MX: "México",
  AR: "Argentina",
  CL: "Chile",
  EC: "Ecuador",
  ES: "España",
  PE: "Perú",
  VE: "Venezuela",
  BR: "Brasil",
  UY: "Uruguay",
  CR: "Costa Rica",
  PA: "Panamá",
  GT: "Guatemala",
};

export const countryNamesEN: Record<string, string> = {
  CO: "Colombia",
  US: "United States",
  MX: "Mexico",
  AR: "Argentina",
  CL: "Chile",
  EC: "Ecuador",
  ES: "Spain",
  PE: "Peru",
  VE: "Venezuela",
  BR: "Brazil",
  UY: "Uruguay",
  CR: "Costa Rica",
  PA: "Panama",
  GT: "Guatemala",
};

export const countryCoords: Record<string, [number, number]> = {
  CO: [4.7, -74.1],
  US: [38, -97],
  MX: [23.6, -102.5],
  AR: [-38.4, -63.6],
  CL: [-35.7, -71.5],
  EC: [-1.8, -78.2],
  ES: [40.5, -3.7],
  PE: [-9.2, -75],
  VE: [6.4, -66.6],
  BR: [-14.2, -51.9],
  UY: [-32.5, -55.8],
  CR: [9.7, -83.8],
  PA: [8.5, -80.8],
  GT: [15.8, -90.2],
};

export const flags: Record<string, string> = {
  CO: "#FCD116,#003893,#CE1126",
  US: "#3C3B6E,#FFFFFF,#B22234",
  MX: "#006847,#FFFFFF,#CE1126",
  AR: "#74ACDF,#FFFFFF,#74ACDF",
  CL: "#FFFFFF,#0039A6,#D52B1E",
  EC: "#FFDD00,#0033A0,#CE1126",
  ES: "#AA151B,#F1BF00,#AA151B",
  PE: "#D91023,#FFFFFF,#D91023",
  VE: "#FFCC00,#00247D,#CF142B",
  BR: "#009B3A,#FEDF00,#009B3A",
  UY: "#FFFFFF,#0038A8,#FFFFFF",
  CR: "#0033A0,#FFFFFF,#CE1126",
  PA: "#FFFFFF,#D52B1E,#005AA7",
  GT: "#4997D0,#FFFFFF,#4997D0",
};

export function getCountryNames(lang: Lang) {
  return lang === "en" ? countryNamesEN : countryNames;
}

export function flagSVG(code: string): string {
  switch (code) {
    case "US":
      return `<svg viewBox="0 0 19 10" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="19" height="10" fill="#B22234"/><path d="M0 1.15h19M0 2.3h19M0 3.46h19M0 4.61h19M0 5.77h19M0 6.92h19M0 8.08h19M0 9.23h19" stroke="#fff" stroke-width=".77"/><rect width="7.6" height="5.38" fill="#3C3B6E"/></svg>`;
    case "ES":
      return `<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="6" height="4" fill="#AA151B"/><rect y="1" width="6" height="2" fill="#F1BF00"/></svg>`;
    case "CO":
      return `<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="6" height="2" fill="#FCD116"/><rect y="2" width="6" height="1" fill="#003893"/><rect y="3" width="6" height="1" fill="#CE1126"/></svg>`;
    case "AR":
      return `<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="6" height="4" fill="#74ACDF"/><rect y="1.33" width="6" height="1.34" fill="#fff"/><circle cx="3" cy="2" r=".42" fill="#F6B40E"/></svg>`;
    case "CL":
      return `<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="6" height="2" fill="#fff"/><rect y="2" width="6" height="2" fill="#D52B1E"/><rect width="2" height="2" fill="#0039A6"/><polygon points="1,.4 1.18,.85 1.62,.85 1.27,1.13 1.4,1.6 1,1.3 .6,1.6 .73,1.13 .38,.85 .82,.85" fill="#fff"/></svg>`;
    case "UY":
      return `<svg viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="18" height="12" fill="#fff"/><path d="M0 1.5h18M0 4.5h18M0 7.5h18M0 10.5h18" stroke="#0038A8" stroke-width="1.2"/><rect width="9" height="6" fill="#fff"/><circle cx="4.5" cy="3" r="1.5" fill="#FCD116"/></svg>`;
    case "CR":
      return `<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="6" height=".67" fill="#0033A0"/><rect y=".67" width="6" height=".67" fill="#fff"/><rect y="1.34" width="6" height="1.32" fill="#CE1126"/><rect y="2.66" width="6" height=".67" fill="#fff"/><rect y="3.33" width="6" height=".67" fill="#0033A0"/></svg>`;
    case "PA":
      return `<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="3" height="2" fill="#fff"/><rect x="3" width="3" height="2" fill="#D52B1E"/><rect y="2" width="3" height="2" fill="#005AA7"/><rect x="3" y="2" width="3" height="2" fill="#fff"/><polygon points="1.5,.5 1.6,.85 2,.85 1.68,1.05 1.8,1.4 1.5,1.2 1.2,1.4 1.32,1.05 1,.85 1.4,.85" fill="#005AA7"/><polygon points="4.5,2.5 4.6,2.85 5,2.85 4.68,3.05 4.8,3.4 4.5,3.2 4.2,3.4 4.32,3.05 4,2.85 4.4,2.85" fill="#D52B1E"/></svg>`;
    case "BR":
      return `<svg viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="14" height="10" fill="#009B3A"/><polygon points="7,1.5 12.5,5 7,8.5 1.5,5" fill="#FEDF00"/><circle cx="7" cy="5" r="2" fill="#002776"/></svg>`;
    case "VE":
      return `<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="6" height="1.33" fill="#FFCC00"/><rect y="1.33" width="6" height="1.34" fill="#00247D"/><rect y="2.67" width="6" height="1.33" fill="#CF142B"/></svg>`;
    case "EC":
      return `<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="6" height="2" fill="#FFDD00"/><rect y="2" width="6" height="1" fill="#0033A0"/><rect y="3" width="6" height="1" fill="#CE1126"/></svg>`;
    case "PE":
      return `<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="2" height="4" fill="#D91023"/><rect x="2" width="2" height="4" fill="#fff"/><rect x="4" width="2" height="4" fill="#D91023"/></svg>`;
    case "MX":
      return `<svg viewBox="0 0 7 4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="7" height="4" fill="#fff"/><rect width="2.33" height="4" fill="#006847"/><rect x="4.67" width="2.33" height="4" fill="#CE1126"/><circle cx="3.5" cy="2" r=".55" fill="none" stroke="#5C2C0A" stroke-width=".12"/></svg>`;
    case "GT":
      return `<svg viewBox="0 0 5 3" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="5" height="3" fill="#fff"/><rect width="1.67" height="3" fill="#4997D0"/><rect x="3.33" width="1.67" height="3" fill="#4997D0"/></svg>`;
    default: {
      const [c1, c2, c3] = (flags[code] || "#888,#bbb,#444").split(",");
      return `<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="6" height="1.33" fill="${c1}"/><rect y="1.33" width="6" height="1.33" fill="${c2}"/><rect y="2.66" width="6" height="1.34" fill="${c3}"/></svg>`;
    }
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

export function fmtCOP(n: number): string {
  return "$" + Math.round(n).toLocaleString("es-CO");
}

export function fmtUSD(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US") + " USD";
}

export const plans = [
  {
    id: "standard",
    name: "Standard",
    headline: '"Tú ya sabes. Solo necesitas dirección."',
    tag: "Vienes porque sabes que necesitas ayuda. Yo te doy el mapa. Tú caminas. No es coaching de mano sostenida — es arquitectura real de fitness para que entiendas qué hacer y lo hagas.",
    baseCOP: 250000,
    features: [
      "Plan de alimentación personalizado con base científica real",
      "Rutina de entrenamiento periodizada",
      "Cálculos calóricos con 4 ecuaciones científicas según lo que tu cuerpo más requiera",
      "Plan de suplementación dosificado",
      "Árbol de decisión clínico (qué ajustar si te atascas)",
      "Soporte WhatsApp",
      "Prioridad de respuesta < 12 h",
      "1 sesión/mes de retroalimentación y Q&A · 1 h",
    ],
    cta: "Comenzar con Standard",
    featured: false,
  },
  {
    id: "elite",
    name: "Elite",
    headline: '"Cuando decides que esta vez sí."',
    tag: "Acceso prioritario. 4 sesiones al mes contigo. Cada semana revisamos progreso, ajustamos protocolos y optimizamos en tiempo real. No es solo un plan — es un acompañamiento donde tus avances tienen mi atención real. Tus resultados importan.",
    baseCOP: 400000,
    features: [
      "Todo lo del Plan Standard",
      "4 sesiones/mes presencial o video",
      "Perfil nutricional por alimento (prescripción adaptada por tipo de sangre)",
      "Cronobiología aplicada (timing óptimo de macros)",
      "Biofeedback semanal con ajuste en tiempo real",
      'Ebook "Biohacking FitMagra" (exclusivo)',
      "Acceso a Portal FitMagra (biblioteca de protocolos, skills Claude, videos exclusivos)",
      "Dashboard interactivo de progreso mes a mes",
      "Prioridad de respuesta < 1 h",
    ],
    cta: "Comenzar con Elite",
    featured: true,
  },
  {
    id: "platino",
    name: "Platino",
    headline: '"Turbo desde el día uno. Mi atención, sin reservas."',
    tag: "Este plan es para quien entiende que el cuerpo necesita ser escuchado antes de ser entrenado. Inicio con un protocolo de choque metabólico real — limpieza de órganos vitales, reset hormonal, base nutracéutica. Luego construimos juntos, con herramientas que no encontrarás en ningún otro lugar. Estoy contigo. De verdad.",
    baseCOP: 600000,
    features: [
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
    ],
    cta: "Comenzar con Platino",
    featured: false,
  },
];

export const paymentMethodsCO = [
  { name: "Nequi / Daviplata", detail: "+57 316 5754416", badge: "Digital · Inmediato", logo: "/img/logo-nequi.png.png", bg: "#fff" },
  { name: "Tarjeta D·C", detail: "Visa · Mastercard · SUMUP", badge: "Datáfono o link", logo: "/img/logo-visa.png", bg: "#1A1F71" },
  { name: "MOVII · Baloto", detail: "Convenio 969696\nTel: 316 5754416", logo: "/img/logo-baloto.png.png", bg: "#fff" },
  { name: "Av Villas", detail: "Cta: 05-48-74-172\nM. Sánchez · CC 1.016.013.376", logo: "/img/logo-avvillas.png.png", bg: "#fff" },
  { name: "BCSC · Bancolombia", detail: "Cta: 240-2386-5307\nM. Sánchez · CC 1.016.013.376", logo: "/img/logo-bancolombia.png.png", bg: "#fff" },
  { name: "Efecty · Baloto · Éxito", detail: "Toda Colombia\nA nombre de Mauricio Sánchez", badge: "", logo: "/img/logo-exito.png.png", bg: "#FFD200" },
];

export const paymentMethodsInt = [
  { name: "Remitly", detail: "Transferencia internacional", badge: "Recomendado", logo: "/img/logo-remitly.png.png", bg: "#fff" },
  { name: "Western Union", detail: "Disponible mundialmente", logo: "/img/logo-western.png.png", bg: "#000" },
  { name: "MoneyGram", detail: "Convenio Bancolombia", logo: "/img/logo-moneygram.png.png", bg: "#fff" },
];

export const steps = [
  { num: "01", title: "Elige tu plan", desc: "Contáctanos por WhatsApp y confirmamos disponibilidad." },
  { num: "02", title: "Realiza el pago", desc: "Por cualquier método. Libre de comisiones del ente recaudador." },
  { num: "03", title: "Envía comprobante", desc: "WhatsApp o Fitmagrasystems@gmail.com" },
  { num: "04", title: "Plan en 1-3 días", desc: "Agendamos charla inicial y construimos tu protocolo." },
];

export const testimonials = [
  {
    initials: "AB",
    name: "Ángela Babilonia",
    role: "Post-operatoria · Cliente desde 2021",
    text: "Llegué buscando recuperarme de una cirugía y encontré un sistema que transformó mi relación con el cuerpo. Mauricio no improvisa: cada decisión tiene un porqué científico.",
  },
  {
    initials: "JZ",
    name: "Juan Zaraza",
    role: "Médico · OceanMan 2026",
    text: "Como médico soy muy escéptico. Lo que me convenció fue la profundidad científica: bibliografía y niveles de evidencia Oxford que yo mismo revisé y validé.",
  },
  {
    initials: "AD",
    name: "Adriana Díaz",
    role: "Transformación estética",
    text: "Había probado todo. FitMagra fue diferente desde el primer día: un plan con mi nombre, mis exámenes y mis objetivos. No una plantilla con mi foto.",
  },
  {
    initials: "CM",
    name: "Carlos M.",
    role: "Pérdida de grasa · 90 días",
    text: "En 90 días logré lo que en 3 años de gym solo no pude. El plan de nutrición fue clave — entendí por qué comía lo que comía y en qué momento exacto.",
  },
  {
    initials: "LG",
    name: "Laura G.",
    role: "Plan Platinum · España",
    text: "Me impactó el nivel del plan — bibliografía científica, justificación de cada suplemento. Esto no es coaching genérico, es medicina aplicada al fitness.",
  },
  {
    initials: "RP",
    name: "Roberto P.",
    role: "CEO · México",
    text: "Lo que me dio Mauricio no fue una rutina — fue un sistema para entender mi cuerpo. Después de 6 meses ya no necesito que me diga qué hacer.",
  },
];

export const transformations = [
  { src: "/img/t-01.jpg", label: "Recomposición", type: "cover" as const },
  { src: "/img/t-02.jpg", label: "Glúteos", type: "contain" as const },
  { src: "/img/t-mes.jpg", label: "Recomposición", type: "cover" as const, wide: true },
  { src: "/img/t-03.jpg", label: "Recomposición", type: "contain" as const },
  { src: "/img/t-04.jpg", label: "Pérdida", type: "cover" as const },
  { src: "/img/t-05.jpg", label: "Adelgazar", type: "cover" as const },
  { src: "/img/t-06.jpg", label: "Tonificación", type: "cover" as const },
  { src: "/img/t-07.jpg", label: "90 días", type: "cover" as const },
  { src: "/img/t-08.jpg", label: "Tonificación", type: "cover" as const },
  { src: "/img/t-09.jpg", label: "Adelgazar", type: "cover" as const },
  { src: "/img/t-angela.png", label: "Adelgazar", type: "cover" as const },
  { src: "/img/t-hernan.png", label: "Recomposición", type: "contain" as const },
];

export const credentials = [
  {
    inst: "Universidad del Rosario",
    title: "Magíster en Actividad Física y Salud",
    meta: "Bogotá, Colombia · 2021",
    logo: "/img/logo-rosario.png.png",
  },
  {
    inst: "Certificación profesional",
    title: "Personal Trainer + Nutrición Deportiva",
    meta: "Acreditación internacional",
  },
  {
    inst: "Especialización",
    title: "Bioquímica aplicada al ejercicio",
    meta: "Cronobiología + micronutrición",
  },
  {
    inst: "Sistema propio",
    title: "FitMagra Systems · método doctoral",
    meta: "4 ecuaciones · Oxford CEBM · IA",
  },
];

export const timeline = [
  { year: "2017", title: "Inicio en entrenamiento personal", desc: "Primeros clientes presenciales en Bogotá. Aprendizaje empírico + autoformación." },
  { year: "2019", title: "Certificación + nutrición deportiva", desc: "Formalización académica. Primeros casos clínicos: post-operatorios y atletas." },
  { year: "2021", title: "Magíster · Universidad del Rosario", desc: "Maestría en Actividad Física y Salud. Base científica formal para FitMagra Systems." },
  { year: "2023", title: "Escalado internacional · 14 países", desc: "Coaching remoto con protocolo doctoral. +200 clientes nuevos por año." },
  { year: "2026", title: "FitMagra Systems · MagraMind AI", desc: "Sistema científico + asistente de IA 24/7. La siguiente generación del coaching." },
];

export const methodCards = [
  { num: "01 · Bioquímica", title: "Bioquímica aplicada", desc: "4 ecuaciones científicas cruzan tu metabolismo real: Harris-Benedict, Mifflin-St Jeor, Cunningham y Oxford. Sin estimaciones de internet." },
  { num: "02 · Nutrición", title: "Nutrición clínica", desc: "Cronobiología + micronutriente por alimento. Tus comidas en el momento exacto para máxima absorción." },
  { num: "03 · Suplementación", title: "Suplementación evidenciada", desc: "Mecanismo de acción, dosis exacta y nivel de evidencia Oxford CEBM. Sin modas, sin riesgo." },
  { num: "04 · Entrenamiento", title: "Entrenamiento periodizado", desc: "Fuerza, HIIT y cardio en ciclos progresivos según tu capacidad real y objetivos concretos." },
  { num: "05 · Decisión clínica", title: "Árbol de decisión clínico", desc: "Ajuste semanal según tus respuestas fisiológicas reales. El plan evoluciona contigo, no al revés." },
  { num: "06 · IA", title: "MagraMind AI", desc: "Asistente de coaching con IA disponible 24/7. Soporte ilimitado durante todo el plan." },
];
