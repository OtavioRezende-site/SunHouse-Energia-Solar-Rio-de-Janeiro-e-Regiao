import { CompanyInfo, FAQItem, ProjectEvidence, ReviewItem } from '../types';
import { getAssetUrl } from '../utils/assetPath';

export const COMPANY: CompanyInfo = {
  nome: 'SunHouse Energia Solar',
  razaoSocial: 'SunHouse Energia solar Instalação Homologação Manutenção Serviços De Eletricista',
  decisor: 'Carlos Alberto',
  cidadeBase: 'Rio de Janeiro, RJ',
  siteOriginal: '',
  instagramUrl: 'https://www.instagram.com/sunhouseenergiasolar',
  instagramHandle: '@sunhouseenergiasolar',
  whatsappNumero: '5521996576079',
  whatsappFormatado: '+55 (21) 99657-6079',
  whatsappUrl: 'https://wa.me/5521996576079',
  telefoneComercial: '(21) 99565-0995',
  telefoneLink: 'tel:+5521996576079',
  telefoneComercialLink: 'tel:+5521995650995',
  email: 'contato@sunhouseenergiasolar.com.br',
  
  endereco: {
    logradouro: 'Rua Ururaí, 1092',
    complemento: '',
    bairro: 'Honório Gurgel',
    cidade: 'Rio de Janeiro',
    uf: 'RJ',
    cep: '21511-000',
    completo: 'Rua Ururaí, 1092 – Honório Gurgel, Rio de Janeiro – RJ, CEP 21511-000',
  },

  googleMaps: {
    placeId: '',
    url: 'https://www.google.com/maps/search/?api=1&query=SunHouse+Energia+Solar+Rua+Urura%C3%AD,+1092+-+Hon%C3%B3rio+Gurgel,+Rio+de+Janeiro+-+RJ',
    rotaUrl: 'https://www.google.com/maps/dir/?api=1&destination=SunHouse+Energia+Solar,+Rua+Urura%C3%AD,+1092+-+Hon%C3%B3rio+Gurgel,+Rio+de+Janeiro+-+RJ',
    wazeUrl: 'https://waze.com/ul?q=Rua%20Ururai,%201092%20Honorio%20Gurgel%20Rio%20de%20Janeiro%20RJ&navigate=yes',
    mapEmbedUrl: 'https://maps.google.com/maps?q=SunHouse%20Energia%20Solar%20Rua%20Urura%C3%AD,%201092%20-%20Hon%C3%B3rio+Gurgel,%20Rio%20de%20Janeiro%20-%20RJ&t=&z=15&ie=UTF8&iwloc=&output=embed',
    nota: '4,6',
    totalAvaliacoes: 62,
    dataConsulta: 'Mais de 60 avaliações confirmadas no Google',
  },

  cnpj: {
    numero: '41.092.319/0001-71',
    razaoSocial: 'SunHouse Energia solar Instalação Homologação Manutenção Serviços De Eletricista',
    status: 'Ativa',
  },

  regioesAtendidas: [
    'Rio de Janeiro (Capital)',
    'Baixada Fluminense',
    'Zona Norte e Zona Oeste',
    'Honório Gurgel e Região',
    'Região Metropolitana (Raio de até 50 km a partir da capital)',
  ],

  servicos: [
    'Instalação fotovoltaica residencial e comercial',
    'Homologação completa junto à Light e Enel',
    'Manutenção preventiva/corretiva e limpeza de placas solares',
    'Serviços especializados de eletricista e infraestrutura de rede',
    'Instalação e configuração de carregadores veiculares (Wallbox)',
  ],

  parametrosTecnicos: {
    irradiacao: '4,8 kWh/m²/dia',
    geracaoEstimada: '~112 kWh/mês por kWp instalado',
    economia: 'Até 95% de redução na conta de luz',
    concessionarias: 'Light e Enel',
    solarTaskUrl: 'https://solartask.com.br/empresa/sunhouse-energia-solar-instalacao-homologacao-manutencao-servicos-de-eletricista',
  },

  horario: 'Segunda a Sábado: Atendimento 24 horas (atendimento contínuo) | Domingo: Fechado',
};


export const REVIEWS: ReviewItem[] = [
  {
    texto: 'Excelente atendimento do Carlos Alberto e equipe técnica. Instalação rápida e homologação sem burocracia.',
    data: 'Avaliação no Google',
    fonte: 'Avaliação pública no Google (4,6 estrelas)',
  },
  {
    texto: 'Serviço de primeira qualidade tanto na parte solar quanto nos serviços de eletricista e infraestrutura. Muito satisfeito.',
    data: 'Avaliação no Google',
    fonte: 'Avaliação pública no Google',
  },
  {
    texto: 'Instalaram o sistema e o carregador veicular na minha casa. A redução na conta de luz veio como o prometido.',
    data: 'Avaliação no Google',
    fonte: 'Avaliação pública no Google',
  },
];

export const PROJECTS: ProjectEvidence[] = [
  {
    id: 'proj-01',
    arquivo: getAssetUrl('/instagram/instagram-02.jpg'),
    titulo: 'Instalação Residencial Completa',
    categoria: 'Residencial',
    cidade: 'Rio de Janeiro e Região',
    legendaSegura: 'Instalação residencial executada pela SunHouse Energia Solar',
    origemInstagramUrl: '#',
    detalhes: 'Dimensionamento fotovoltaico personalizado com foco na máxima eficiência e redução na conta.',
  },
  {
    id: 'proj-02',
    arquivo: getAssetUrl('/instagram/instagram-03.jpg'),
    titulo: 'Projeto Comercial e Infraestrutura',
    categoria: 'Comercial',
    cidade: 'Região Metropolitana RJ',
    legendaSegura: 'Projeto comercial com homologação rápida junto à distribuidora',
    origemInstagramUrl: '#',
    detalhes: 'Geração solar planejada para redução direta dos custos operacionais do estabelecimento.',
  },
  {
    id: 'proj-03',
    arquivo: getAssetUrl('/instagram/instagram-05.jpg'),
    titulo: 'Manutenção e Adequação Elétrica',
    categoria: 'Residencial',
    cidade: 'Rio de Janeiro, RJ',
    legendaSegura: 'Manutenção preventiva e serviços especializados de eletricista',
    origemInstagramUrl: '#',
    detalhes: 'Revisão das conexões, limpeza técnica dos módulos e adequação da rede.',
  },
  {
    id: 'proj-04',
    arquivo: getAssetUrl('/instagram/instagram-07.jpg'),
    titulo: 'Homologação e Conexão à Rede',
    categoria: 'Residencial',
    cidade: 'Rio de Janeiro, RJ',
    legendaSegura: 'Sistema conectado e homologado na Light / Enel',
    origemInstagramUrl: '#',
    detalhes: 'Fixação técnica em telhado garantindo segurança, vedação e estética.',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    pergunta: 'Como saber se meu imóvel pode receber energia solar no RJ?',
    resposta: 'O ponto de partida é avaliar seu consumo mensal na conta da Light ou Enel, o espaço disponível e a orientação do telhado. Nossa irradiação média no Rio é de 4,8 kWh/m²/dia, garantindo excelente geração. Converse com o Carlos Alberto para uma análise técnica gratuita.',
  },
  {
    id: 'faq-2',
    pergunta: 'Quanto posso economizar na conta de luz?',
    resposta: 'Com um sistema bem dimensionado pela SunHouse, a redução na fatura pode chegar a até 95%, pagando apenas a taxa mínima de conexão da concessionária.',
  },
  {
    id: 'faq-3',
    pergunta: 'A SunHouse cuida da homologação na Light e na Enel?',
    resposta: 'Sim! Realizamos todo o processo burocrático e de engenharia junto à Light ou Enel até a troca do medidor bidirecional e a liberação formal do sistema.',
  },
  {
    id: 'faq-4',
    pergunta: 'Vocês também instalam carregador para carro elétrico (Wallbox)?',
    resposta: 'Sim, somos especialistas em infraestrutura elétrica de rede e fazemos a instalação segura e dimensionada de carregadores veiculares Wallbox residenciais e comerciais.',
  },
  {
    id: 'faq-5',
    pergunta: 'Quais regiões a SunHouse atende?',
    resposta: 'Atendemos a Capital do Rio de Janeiro, Honório Gurgel, Zona Norte, Zona Oeste, Baixada Fluminense e toda a Região Metropolitana em um raio de até 50 km.',
  },
  {
    id: 'faq-6',
    pergunta: 'A SunHouse faz manutenção e limpeza em sistemas já existentes?',
    resposta: 'Sim! Prestamos serviços de manutenção preventiva, corretiva, revisão de inversores e limpeza técnica especializada de painéis para manter o rendimento máximo.',
  },
];
