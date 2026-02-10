export type FundingType = "financing" | "fondo" | "grant";

export type Location = "chile" | "latinoamerica";

export type FundingOpportunity = {
  readonly nombre: string;
  readonly proveedor: string;
  readonly monto: string;
  readonly descripcion: string;
  readonly tipo: FundingType;
  readonly lugar: Location;
  readonly url: string;
};

const toLugar = (nivel: string): Location =>
  nivel.toLowerCase().startsWith("chile") ? "chile" : "latinoamerica";

const toTipo = (tipo: string): FundingType =>
  tipo.toLowerCase() === "financiamiento" ? "financing" : "grant";

const low = (s: string): string => s.toLowerCase();

const normUrl = (u: string): string => u.toLowerCase().replace(/\/$/, "");

type RawRow = {
  nivel: string;
  tipo: string;
  nombre: string;
  empresa: string;
  monto: string;
  descripcion: string;
  url: string;
};

const toOpportunity = (r: RawRow): FundingOpportunity => ({
  nombre: low(r.nombre),
  proveedor: low(r.empresa),
  monto: r.monto,
  descripcion: low(r.descripcion),
  tipo: toTipo(r.tipo),
  lugar: toLugar(r.nivel),
  url: r.url,
});

const EXISTING: readonly FundingOpportunity[] = [
  {
    nombre: "startup chile",
    proveedor: "corfo",
    monto: "$15m - $40m clp (seed)",
    descripcion: "financiamiento para startups en etapa temprana con mentoría y red de contactos",
    tipo: "financing",
    lugar: "chile",
    url: "https://www.corfo.cl/sitescorfo/landing/start-up-chile",
  },
  {
    nombre: "venture capital latam",
    proveedor: "kaszek ventures",
    monto: "$2m - $15m usd",
    descripcion: "inversión en empresas de tecnología con alto potencial de crecimiento en latinoamérica",
    tipo: "financing",
    lugar: "latinoamerica",
    url: "https://www.kaszek.com",
  },
  {
    nombre: "fondo seed tech",
    proveedor: "aurus capital",
    monto: "$500k - $2m usd",
    descripcion: "inversión seed para startups de tecnología en chile y latinoamérica",
    tipo: "financing",
    lugar: "latinoamerica",
    url: "https://aurus.cl",
  },
  {
    nombre: "innova chile",
    proveedor: "corfo",
    monto: "$5m - $200m clp",
    descripcion: "fondos para proyectos de innovación empresarial en distintas etapas",
    tipo: "fondo",
    lugar: "chile",
    url: "https://www.corfo.cl/sites/default/files/2024-03/innova-chile.pdf",
  },
  {
    nombre: "anid - fondequip",
    proveedor: "anid",
    monto: "$80m - $400m clp",
    descripcion: "equipamiento para investigación científica y tecnológica",
    tipo: "grant",
    lugar: "chile",
    url: "https://www.anid.cl/concursos/fondequip",
  },
  {
    nombre: "500 startups seed program",
    proveedor: "500 startups",
    monto: "$150k usd",
    descripcion: "programa seed para startups con inversión inicial y aceleración de 4 meses",
    tipo: "grant",
    lugar: "latinoamerica",
    url: "https://500.co/programs/",
  },
  {
    nombre: "y combinator",
    proveedor: "y combinator",
    monto: "$500k usd",
    descripcion: "programa de aceleración con inversión y acceso a red global de inversores",
    tipo: "grant",
    lugar: "latinoamerica",
    url: "https://www.ycombinator.com",
  },
];

const NEW_RAW_1: RawRow[] = [
  { nivel: "Chile", tipo: "Grants", nombre: "Semilla Expande", empresa: "Corfo", monto: "Hasta $45.000.000 CLP", descripcion: "Para emprendimientos innovadores con ventas y validación comercial. Etapa 1: $25M, Etapa 2: $20M.", url: "https://www.corfo.cl/sites/cpp/programasyconvocatorias" },
  { nivel: "Chile", tipo: "Grants", nombre: "Startup Ciencia", empresa: "ANID", monto: "Hasta $134.550.000 CLP", descripcion: "Financiamiento para proyectos de base científica-tecnológica (EBCT) que requieran validación técnica y comercial.", url: "https://anid.cl/concursos/startup-ciencia-2026/" },
  { nivel: "Chile", tipo: "Grants", nombre: "Capital Semilla Emprende", empresa: "Sercotec", monto: "Hasta $3.500.000 CLP", descripcion: "Fondo concursable para emprendedores que buscan iniciar un negocio. Cubre asistencia técnica, capacitación y marketing.", url: "https://www.sercotec.cl/capital-semilla-emprende/" },
  { nivel: "Chile", tipo: "Grants", nombre: "Start-Up Chile", empresa: "Corfo", monto: "$10M - $75M CLP (Equity-free)", descripcion: "Aceleradora pública líder. Build (etapa temprana), Ignite (validación), Growth (escalamiento).", url: "https://startupchile.org/postula/" },
  { nivel: "Chile", tipo: "Financiamiento", nombre: "Red de Ángeles", empresa: "ChileGlobal Angels", monto: "$50.000 - $500.000 USD", descripcion: "Red de inversionistas ángeles que apoyan startups en etapas tempranas con capital y mentoría.", url: "https://chileglobalventures.cl/angels/" },
  { nivel: "Latinoamerica", tipo: "Grants", nombre: "ANR", empresa: "Agencia I+D+i", monto: "Variable (Hasta 80% del proyecto)", descripcion: "Financiamiento para proyectos de innovación tecnológica y desarrollo de productos en Argentina.", url: "https://www.argentina.gob.ar/ciencia/agencia" },
  { nivel: "Latinoamerica", tipo: "Financiamiento", nombre: "FONDCE - Argentina", empresa: "Ministerio de Desarrollo Productivo", monto: "Variable", descripcion: "Fondo de fondos que invierte en VC locales para potenciar startups argentinas.", url: "https://www.argentina.gob.ar/produccion/fondce" },
  { nivel: "Latinoamerica", tipo: "Grants", nombre: "Emprendedores Innovadores - Uruguay", empresa: "ANII", monto: "Hasta $3.000.000 UYU", descripcion: "Apoyo a emprendimientos con valor diferencial y potencial de crecimiento en Uruguay.", url: "https://www.anii.org.uy/apoyos/emprendimiento/" },
  { nivel: "Latinoamerica", tipo: "Grants", nombre: "PROINNOVA - Paraguay", empresa: "CONACYT", monto: "Hasta $50.000 USD", descripcion: "Capital semilla para empresas innovadoras de base tecnológica en Paraguay.", url: "https://www.conacyt.gov.py/proinnova" },
  { nivel: "Latinoamerica", tipo: "Grants", nombre: "Ideas Circulares - Bolivia", empresa: "Ministerio de Desarrollo Productivo", monto: "Variable", descripcion: "Fondo concursable para modelos de negocio de economía circular en Bolivia.", url: "https://produccion.gob.bo/" },
  { nivel: "Latinoamerica", tipo: "Grants", nombre: "ALDEA+ - Colombia", empresa: "iNNpulsa Colombia", monto: "Vouchers y capital semilla", descripcion: "Programa de aceleración y financiamiento para startups de alto impacto en Colombia.", url: "https://www.innpulsacolombia.com/" },
  { nivel: "Latinoamerica", tipo: "Grants", nombre: "Fondo Emprender - Colombia", empresa: "SENA", monto: "Hasta $160.000.000 COP", descripcion: "Capital semilla condonable para la creación de nuevas empresas en Colombia.", url: "https://www.fondoemprender.com/" },
  { nivel: "Latinoamerica", tipo: "Grants", nombre: "StartUp Perú", empresa: "ProInnóvate", monto: "67.000 - 150.000 PEN", descripcion: "Capital semilla no reembolsable para emprendimientos innovadores y dinámicos en Perú.", url: "https://startup.proinnovate.gob.pe/" },
  { nivel: "Latinoamerica", tipo: "Grants", nombre: "Fondo de Innovación - Ecuador", empresa: "SENESCYT", monto: "Variable", descripcion: "Apoyo a proyectos de investigación científica y desarrollo tecnológico en Ecuador.", url: "https://siau.senescyt.gob.ec/" },
  { nivel: "Latinoamerica", tipo: "Grants", nombre: "EMERGENTE 2026 - México", empresa: "Impact Hub CDMX / Banamex", monto: "Hasta 150.000 MXN", descripcion: "Convocatoria para emprendimientos creativos con impacto social en México.", url: "https://mexicocity.impacthub.net/" },
  { nivel: "Latinoamerica", tipo: "Financiamiento", nombre: "Capital Emprendedor - México", empresa: "Nacional Financiera (NAFIN)", monto: "Variable", descripcion: "Programas de crédito y garantías para pymes y emprendedores en México.", url: "https://www.nafin.com.mx/" },
  { nivel: "Latinoamerica", tipo: "Grants", nombre: "Impulso Tecnológico CR", empresa: "PROCOMER", monto: "Hasta 7.000.000 CRC", descripcion: "Fondos no reembolsables para pymes del sector TICs en Costa Rica.", url: "https://procomer.com/programa-impulso-tecnologico/" },
  { nivel: "Latinoamerica", tipo: "Grants", nombre: "Panamá Innova", empresa: "SENACYT", monto: "Variable", descripcion: "Apoyo a emprendimientos dinámicos basados en ciencia y tecnología en Panamá.", url: "https://www.senacyt.gob.pa/" },
  { nivel: "Latinoamerica", tipo: "Grants", nombre: "Capital Semilla Regional - Caribe", empresa: "CENPROMYPE / MICM", monto: "Variable", descripcion: "Fortalecimiento de Mipymes mediante financiamiento y asistencia técnica en República Dominicana y Centroamérica.", url: "https://www.cenpromype.org/" },
  { nivel: "Latinoamerica", tipo: "Grants", nombre: "BetterTogether", empresa: "USAID / BID Lab", monto: "Grants, préstamos y equity", descripcion: "Innovación para apoyar a venezolanos y comunidades receptoras en la región.", url: "https://trust-oea.org/" },
  { nivel: "Latinoamerica", tipo: "Grants", nombre: "Convocatoria Agroalimentaria", empresa: "Fontagro", monto: "Hasta $200.000 USD", descripcion: "Innovación tecnológica para sistemas agroalimentarios productivos en Latinoamérica.", url: "https://fontagro.org/" },
  { nivel: "Latinoamerica", tipo: "Financiamiento", nombre: "Aceleradora Latam", empresa: "500 Global", monto: "$60.000 USD aprox.", descripcion: "Inversión y mentoría para startups de habla hispana en etapa temprana.", url: "https://500.co/latam" },
  { nivel: "Latinoamerica", tipo: "Financiamiento", nombre: "Venture Capital Regional", empresa: "Kaszek Ventures", monto: "Variable (Seed a Series B+)", descripcion: "Fondo líder enfocado en empresas tecnológicas de alto crecimiento en Latam.", url: "https://www.kaszek.com/" },
  { nivel: "Latinoamerica", tipo: "Financiamiento", nombre: "Magma Partners", empresa: "Magma Partners", monto: "$25k - $5M USD", descripcion: "VC que apoya a emprendedores en etapas tempranas en toda la región.", url: "https://www.magmapartners.com/" },
  { nivel: "Latinoamerica", tipo: "Financiamiento", nombre: "Rockstart Latam", empresa: "Rockstart", monto: "$100.000 USD aprox.", descripcion: "Aceleradora con inversión en Fintech, Agtech y Energy en Latinoamérica.", url: "https://www.rockstart.com/latam/" },
  { nivel: "Latinoamerica", tipo: "Financiamiento", nombre: "Impacta VC", empresa: "Impacta VC", monto: "Variable", descripcion: "Inversión en startups que resuelven problemas sociales o ambientales en la región.", url: "https://impacta.vc/" },
  { nivel: "Latinoamerica", tipo: "Financiamiento", nombre: "The Yield Lab Latam", empresa: "The Yield Lab", monto: "Variable (Seed / Series A)", descripcion: "Fondo especializado en startups que resuelven desafíos en la industria agroalimentaria regional.", url: "https://theyieldlablatam.com/" },
  { nivel: "Latinoamerica", tipo: "Financiamiento", nombre: "Carao Ventures", empresa: "Carao Ventures", monto: "Variable", descripcion: "Fondo de VC enfocado en mercados pequeños y medianos de Centroamérica y el Caribe.", url: "https://www.caraov.com/" },
  { nivel: "Latinoamerica", tipo: "Financiamiento", nombre: "Angel Ventures", empresa: "Angel Ventures", monto: "Variable (Seed / Series A)", descripcion: "Fondo de VC y red de ángeles con presencia en México, Colombia y Perú.", url: "https://www.angelventures.vc/" },
  { nivel: "Latinoamerica", tipo: "Financiamiento", nombre: "NXTP Ventures", empresa: "NXTP Ventures", monto: "Variable (Seed / Series A)", descripcion: "Fondo de VC con foco en B2B y SaaS en toda la región.", url: "https://nxtp.vc/" },
];

const NEW_RAW_2: RawRow[] = [
  { nivel: "Chile", tipo: "Grants", nombre: "Capital Semilla Emprende", empresa: "Sercotec", monto: "$3.500.000 CLP", descripcion: "Fondo concursable que promueve la creación de nuevos negocios. Otorga subsidio no reembolsable para acciones de gestión empresarial ($200 mil - $500 mil) e inversiones en activos ($3 - $3,3 millones). Dirigido a emprendedores mayores de 18 años sin inicio de actividades en primera categoría ante el SII. Postulaciones abiertas por región con fechas variables.", url: "https://www.sercotec.cl/capital-semilla-emprende/" },
  { nivel: "Chile", tipo: "Grants", nombre: "Start-Up Chile", empresa: "CORFO", monto: "Hasta $75.000.000 CLP", descripcion: "Programa de financiamiento para emprendimientos de base tecnológica a nivel nacional e internacional. Ofrece capital semilla, aceleración y conexión con inversionistas. Dirigido a emprendedores con ideas innovadoras. Convocatorias abiertas durante el año.", url: "https://startupchile.org/" },
  { nivel: "Chile", tipo: "Grants", nombre: "Fondo CRECE", empresa: "Sercotec", monto: "$5.000.000 CLP", descripcion: "Subsidio no reembolsable para micro y pequeñas empresas y cooperativas que buscan fortalecer o crecer. Dirigido a empresas en funcionamiento. Postulaciones abiertas en 2025.", url: "https://www.sercotec.cl/crece/" },
  { nivel: "Chile", tipo: "Grants", nombre: "Fondos de Etapas Tempranas", empresa: "CORFO", monto: "Variable según fondo", descripcion: "Diversos fondos de inversión en etapas tempranas para startups innovadoras. Incluye financiamiento de capital de riesgo. Postulaciones continuas.", url: "https://wapp4.corfo.cl/fondoetapastempranas/entrepreneurs.html" },
  { nivel: "Chile", tipo: "Grants", nombre: "Impulso Emprendedor", empresa: "Sercotec", monto: "Variable según región", descripcion: "Programa de apoyo integral para emprendedores con ideas de negocio. Incluye capacitación, asesoría y acceso a financiamiento. Dirigido a personas que desean iniciar un negocio. Postulaciones abiertas por región.", url: "https://www.sercotec.cl/impulso-emprendedor/" },
  { nivel: "Chile", tipo: "Grants", nombre: "Capital Pioneras", empresa: "Sercotec", monto: "$3.500.000 CLP", descripcion: "Fondo especial para mujeres emprendedoras que desean crear empresas en rubros con mayor presencia de hombres. Promueve la inclusión y diversidad empresarial. Dirigido a mujeres mayores de 18 años. Postulaciones abiertas en 2025.", url: "https://www.sercotec.cl/capital-pioneras/" },
  { nivel: "Chile", tipo: "Financiamiento", nombre: "Emprendamos", empresa: "FOSIS", monto: "Variable según programa", descripcion: "Programa de apoyo para emprendimientos en funcionamiento. Incluye capacitación, asesoría personalizada, financiamiento y material didáctico. Dirigido a personas en vulnerabilidad con negocio operativo. Requisitos: Mayor de 18 años, estar en tramos de vulnerabilidad según RSH, tener negocio en funcionamiento.", url: "https://www.fosis.gob.cl/es/programas/autonomia-economica/emprendamos/" },
  { nivel: "Chile", tipo: "Financiamiento", nombre: "Líneas de Crédito CORFO", empresa: "CORFO", monto: "Variable según línea", descripcion: "Diversas líneas de crédito para emprendimientos innovadores, empresas en crecimiento y consolidadas. Financiamiento a través de intermediarios. Postulaciones continuas.", url: "https://www.corfo.cl/" },
  { nivel: "Chile", tipo: "Financiamiento", nombre: "Créditos Sercotec", empresa: "Sercotec", monto: "Variable", descripcion: "Líneas de crédito para micro y pequeñas empresas. Financiamiento para capital de trabajo, inversión en activos y otros. Postulaciones continuas.", url: "https://www.sercotec.cl/" },
  { nivel: "Latinoamérica - Centro América", tipo: "Grants", nombre: "Amador Seed Fund II", empresa: "BID Lab", monto: "Hasta US$3.000.000", descripcion: "Fondo de capital semilla para startups en Centro América. Financiamiento para emprendimientos en etapas tempranas. Enfoque en ecosistemas de venture capital emergentes. Aplicable en Guatemala, Honduras, El Salvador, Nicaragua, Costa Rica y Panamá.", url: "https://bidlab.org/es/noticias/bid-lab-invierte-en-amador-seed-fund-ii-para-impulsar-ecosistemas-de-venture-capital-emergentes-en" },
  { nivel: "Latinoamérica - Centro América", tipo: "Grants", nombre: "500 LatAm", empresa: "500 Global", monto: "Inversión BID Lab: US$2.000.000", descripcion: "Fondo de capital semilla para startups de Latinoamérica y el Caribe. Financiamiento para emprendimientos tecnológicos en etapas tempranas. Postulaciones abiertas.", url: "https://www.iadb.org/es/noticias/bid-lab-invierte-us2-millones-en-el-fondo-500-latam-seed-iv-para-potenciar-startups-de-america" },
  { nivel: "Latinoamérica - Centro América", tipo: "Grants", nombre: "Fondo de Garantía de Panamá", empresa: "Gobierno de Panamá", monto: "$150.000.000", descripcion: "Fondo de garantía para impulsar a las pymes. Facilita acceso a crédito para pequeñas y medianas empresas en Panamá.", url: "https://ampyme.gob.pa/" },
  { nivel: "Latinoamérica - Centro América", tipo: "Grants", nombre: "INNOVATECH 2025", empresa: "Ministerio de Ciencia y Tecnología - Costa Rica", monto: "Variable", descripcion: "Programa de financiamiento para innovación en pymes. Dirigido a empresas que buscan innovar en sus procesos y productos. Postulaciones abiertas en 2025.", url: "https://pulsocapital.com/innovatech-2025-financia-innovacion-en-pymes-de-costa-rica/" },
  { nivel: "Latinoamérica - Centro América", tipo: "Grants", nombre: "DINÁMICA II", empresa: "BCIE", monto: "Más de US$5.200.000 en capital semilla", descripcion: "Iniciativa regional de capital semilla para emprendimientos y mipymes en Centro América. Financiamiento para etapas tempranas. Aplicable en Guatemala, Honduras, El Salvador, Nicaragua, Costa Rica y Panamá. Postulaciones abiertas.", url: "https://gruposgestores.org.gt/programa-regional-dinamica-ii/" },
  { nivel: "Latinoamérica - Centro América", tipo: "Financiamiento", nombre: "BID Invest", empresa: "BID Invest", monto: "Hasta US$120.000.000 según país", descripcion: "Financiamiento para pymes a través de instituciones financieras locales. Líneas de crédito para capital de trabajo, inversión y exportaciones. Aplicable en El Salvador, Guatemala, Honduras, Nicaragua, Costa Rica y Panamá.", url: "https://www.idbinvest.org/" },
  { nivel: "Latinoamérica - Centro América", tipo: "Financiamiento", nombre: "BCIE - Facilidad de Apoyo a Mipymes", empresa: "BCIE", monto: "Variable", descripcion: "Financiamiento para micro, pequeñas y medianas empresas en Centro América. Créditos para capital de trabajo e inversión. Aplicable en Guatemala, Honduras, El Salvador, Nicaragua, Costa Rica y Panamá.", url: "https://www.bcie.org/" },
  { nivel: "Latinoamérica - Centro América", tipo: "Financiamiento", nombre: "PROFIPYME", empresa: "Gobierno de Panamá", monto: "Variable", descripcion: "Programa de financiamiento a micro y pequeñas empresas en Panamá. Créditos para capital de trabajo e inversión. Postulaciones continuas.", url: "https://www.panamadigital.gob.pa/InformacionTramite/programa-de-financiamiento-a-las-micro-y-pequenas-empresa-profipyme" },
  { nivel: "Latinoamérica - Sudamérica", tipo: "Grants", nombre: "Fondo Acceso", empresa: "BID", monto: "Variable", descripcion: "Fondo de acceso a financiamiento para pequeñas empresas en crecimiento. Financiamiento innovador para pymes en toda Latinoamérica. Postulaciones abiertas.", url: "https://www.iadb.org/es/proyecto/RG-L1158" },
  { nivel: "Latinoamérica - Sudamérica", tipo: "Grants", nombre: "BID Lab", empresa: "BID Lab", monto: "Variable según producto", descripcion: "Amplia gama de productos para financiar innovación en etapas tempranas. Incluye inversiones de capital, cuasi capital y préstamos. Postulaciones continuas según convocatorias.", url: "https://bidlab.org/es/productos/financiamiento" },
  { nivel: "Latinoamérica - Sudamérica", tipo: "Grants", nombre: "FNE", empresa: "INADEM - México", monto: "Variable según convocatoria", descripcion: "Financiamiento para emprendedores y pymes. Subsidios y créditos para iniciar o fortalecer negocios. Convocatorias abiertas durante el año.", url: "https://convocatoriaemprendedores.org.mx/" },
  { nivel: "Latinoamérica - Sudamérica", tipo: "Grants", nombre: "EcuaEmprende", empresa: "Gob. de Ecuador", monto: "Hasta $70.000 USD", descripcion: "Programa de financiamiento para emprendedores. Dirigido a proyectos innovadores en Ecuador. Postulaciones abiertas.", url: "https://www.ondata.com.ec/" },
  { nivel: "Latinoamérica - Sudamérica", tipo: "Grants", nombre: "FONAMIPYMES", empresa: "Gob. de Paraguay", monto: "USD 5.000.000 (fondo inicial)", descripcion: "Fondo Nacional de Mipymes para financiamiento y formalización. Recientemente activado para impulsar emprendimientos. Postulaciones abiertas en 2026.", url: "https://www.afd.gov.py/" },
  { nivel: "Latinoamérica - Sudamérica", tipo: "Grants", nombre: "Fondo de Exportaciones", empresa: "Gobierno de Uruguay", monto: "USD 1.500.000", descripcion: "Fondo para impulsar ventas al exterior de pequeñas y medianas empresas. Postulaciones abiertas.", url: "https://www.gub.uy/" },
  { nivel: "Latinoamérica - Sudamérica", tipo: "Financiamiento", nombre: "BNDES", empresa: "BNDES - Brasil", monto: "R$ 14.000.000.000 (2025)", descripcion: "Financiamiento para startups e innovación. Incluye Angel Fund de Co-Inversión para startups innovadoras brasileñas. Postulaciones continuas.", url: "https://www.bndes.gov.br/" },
  { nivel: "Latinoamérica - Sudamérica", tipo: "Financiamiento", nombre: "COFIDE", empresa: "COFIDE - Perú", monto: "Hasta S/ 30.000 para mypes", descripcion: "Financiamiento para micro y pequeñas empresas. Créditos para capital de trabajo e inversión. Postulaciones continuas.", url: "https://www.cofide.com.pe/" },
  { nivel: "Latinoamérica - Sudamérica", tipo: "Financiamiento", nombre: "BANCOLDEX", empresa: "BANCOLDEX - Colombia", monto: "Variable según línea", descripcion: "Líneas de crédito para empresas exportadoras y pymes. Financiamiento en dólares y pesos. Postulaciones continuas.", url: "https://www.bancoldex.com/" },
  { nivel: "Latinoamérica - Sudamérica", tipo: "Financiamiento", nombre: "BICE", empresa: "BICE - Argentina", monto: "Variable", descripcion: "Financiamiento para pymes y empresas en crecimiento. Líneas de crédito para inversión y capital de trabajo. Postulaciones continuas.", url: "https://www.bice.com.ar/" },
  { nivel: "Latinoamérica - Sudamérica", tipo: "Financiamiento", nombre: "FIRA", empresa: "FIRA - México", monto: "Variable según programa", descripcion: "Financiamiento para emprendimientos agrícolas y rurales. Microcréditos productivos y líneas de crédito. Postulaciones continuas.", url: "https://www.fira.gob.mx/" },
  { nivel: "Latinoamérica - Sudamérica", tipo: "Financiamiento", nombre: "Banco CMF", empresa: "Banco CMF - Argentina", monto: "Variable", descripcion: "Financiamiento especializado para pymes. Créditos para inversión y capital de trabajo. Postulaciones continuas.", url: "https://www.bancocmf.com.ar/" },
];

const existingUrls = new Set(EXISTING.map((e) => normUrl(e.url)));

const appendWithoutDupe = (
  acc: FundingOpportunity[],
  raw: RawRow[],
): void => {
  for (const r of raw) {
    const u = normUrl(r.url);
    if (existingUrls.has(u)) continue;
    existingUrls.add(u);
    acc.push(toOpportunity(r));
  }
};

const allFinancing: FundingOpportunity[] = EXISTING.filter((e) => e.tipo === "financing");
const allGrants: FundingOpportunity[] = EXISTING.filter((e) => e.tipo !== "financing");

appendWithoutDupe(allFinancing, NEW_RAW_1.filter((r) => toTipo(r.tipo) === "financing"));
appendWithoutDupe(allGrants, NEW_RAW_1.filter((r) => toTipo(r.tipo) !== "financing"));
appendWithoutDupe(allFinancing, NEW_RAW_2.filter((r) => toTipo(r.tipo) === "financing"));
appendWithoutDupe(allGrants, NEW_RAW_2.filter((r) => toTipo(r.tipo) !== "financing"));

export const FINANCING_DATA: readonly FundingOpportunity[] = allFinancing;
export const GRANTS_FUNDS_DATA: readonly FundingOpportunity[] = allGrants;
