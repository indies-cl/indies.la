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

export const FINANCING_DATA: readonly FundingOpportunity[] = [
  {
    nombre: "startup chile",
    proveedor: "corfo",
    monto: "$15m - $40m clp (seed)",
    descripcion: "financiamiento para startups en etapa temprana con mentoría y red de contactos",
    tipo: "financing",
    lugar: "chile",
    url: "https://www.corfo.cl/sitescorfo/landing/start-up-chile"
  },
  {
    nombre: "venture capital latam",
    proveedor: "kaszek ventures",
    monto: "$2m - $15m usd",
    descripcion: "inversión en empresas de tecnología con alto potencial de crecimiento en latinoamérica",
    tipo: "financing",
    lugar: "latinoamerica",
    url: "https://www.kaszek.com"
  },
  {
    nombre: "fondo seed tech",
    proveedor: "aurus capital",
    monto: "$500k - $2m usd",
    descripcion: "inversión seed para startups de tecnología en chile y latinoamérica",
    tipo: "financing",
    lugar: "latinoamerica",
    url: "https://aurus.cl"
  }
] as const;

export const GRANTS_FUNDS_DATA: readonly FundingOpportunity[] = [
  {
    nombre: "innova chile",
    proveedor: "corfo",
    monto: "$5m - $200m clp",
    descripcion: "fondos para proyectos de innovación empresarial en distintas etapas",
    tipo: "fondo",
    lugar: "chile",
    url: "https://www.corfo.cl/sites/default/files/2024-03/innova-chile.pdf"
  },
  {
    nombre: "anid - fondequip",
    proveedor: "anid",
    monto: "$80m - $400m clp",
    descripcion: "equipamiento para investigación científica y tecnológica",
    tipo: "grant",
    lugar: "chile",
    url: "https://www.anid.cl/concursos/fondequip"
  },
  {
    nombre: "500 startups seed program",
    proveedor: "500 startups",
    monto: "$150k usd",
    descripcion: "programa seed para startups con inversión inicial y aceleración de 4 meses",
    tipo: "grant",
    lugar: "latinoamerica",
    url: "https://500.co/programs/"
  },
  {
    nombre: "y combinator",
    proveedor: "y combinator",
    monto: "$500k usd",
    descripcion: "programa de aceleración con inversión y acceso a red global de inversores",
    tipo: "grant",
    lugar: "latinoamerica",
    url: "https://www.ycombinator.com"
  }
] as const;
