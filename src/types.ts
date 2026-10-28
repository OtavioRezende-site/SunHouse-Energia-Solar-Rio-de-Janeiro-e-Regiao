export type PropertyType = 'Casa' | 'Comércio' | 'Outro';

export type BillRange = 
  | 'Até R$300' 
  | 'R$301–600' 
  | 'R$601–1.000' 
  | 'Acima de R$1.000' 
  | 'Prefiro informar depois';

export interface LeadFormData {
  nome: string;
  whatsapp: string;
  cidade: string;
  tipoImovel: PropertyType;
  faixaConta: BillRange;
  observacao?: string;
}

export interface ReviewItem {
  texto: string;
  data: string;
  fonte: string;
}

export interface FAQItem {
  id: string;
  pergunta: string;
  resposta: string;
}

export interface ProjectEvidence {
  id: string;
  arquivo: string;
  titulo: string;
  categoria: 'Residencial' | 'Comercial' | 'Destaque';
  cidade: string;
  legendaSegura: string;
  origemInstagramUrl: string;
  detalhes?: string;
}

export interface CompanyAddress {
  logradouro: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
  completo: string;
}

export interface GoogleMapsData {
  placeId: string;
  url: string;
  rotaUrl: string;
  wazeUrl: string;
  mapEmbedUrl: string;
  nota: string;
  totalAvaliacoes: number;
  dataConsulta: string;
}

export interface CnpjData {
  numero: string;
  razaoSocial: string;
  status: string;
}

export interface TechnicalParams {
  irradiacao: string;
  geracaoEstimada: string;
  economia: string;
  concessionarias: string;
  solarTaskUrl: string;
}

export interface CompanyInfo {
  nome: string;
  razaoSocial: string;
  decisor: string;
  cidadeBase: string;
  siteOriginal: string;
  instagramUrl: string;
  instagramHandle: string;
  whatsappNumero: string;
  whatsappFormatado: string;
  whatsappUrl: string;
  telefoneComercial: string;
  telefoneLink: string;
  telefoneComercialLink: string;
  email: string;
  endereco: CompanyAddress;
  googleMaps: GoogleMapsData;
  cnpj: CnpjData;
  regioesAtendidas: string[];
  servicos: string[];
  parametrosTecnicos: TechnicalParams;
  horario: string;
}

