import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Building2,
  Wrench,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Compass,
  FileCheck,
  Hammer,
  Activity,
  MapPin,
  HelpCircle,
  ChevronDown,
  ExternalLink,
  SunMedium,
  Check,
  AlertCircle,
  Zap
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { PageHeader } from '../components/PageHeader';
import { SectionTransition } from '../components/SectionTransition';
import { ScrollReveal } from '../components/ScrollReveal';
import { motion, useReducedMotion } from 'motion/react';
import { COMPANY } from '../data/companyData';
import { buildQuickWhatsAppLink } from '../utils/whatsapp';
import { getAssetUrl } from '../utils/assetPath';

const MotionLink = motion.create(Link);

export const SolutionsPage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Update document title and meta description for SEO
  useEffect(() => {
    document.title = 'Soluções em Energia Solar | SunHouse Energia Solar - Rio de Janeiro e Região';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Conheça as soluções de energia solar para residências, empresas, homologação Light/Enel, carregadores Wallbox e serviços de eletricista no Rio de Janeiro e região com a SunHouse.'
      );
    }
  }, []);


  const [openFaqId, setOpenFaqId] = React.useState<number | null>(0);

  const whatsappMaintenanceUrl = buildQuickWhatsAppLink(
    'Olá! Gostaria de conversar com a SunHouse sobre uma avaliação ou manutenção para o meu sistema solar já instalado.'
  );

  const whatsappRegionalUrl = buildQuickWhatsAppLink(
    'Olá! Gostaria de consultar se a SunHouse atende na minha cidade/bairro.'
  );

  const specificFaqs = [
    {
      id: 0,
      pergunta: 'Como saber se meu caso se enquadra como residencial ou comercial?',
      resposta:
        'A classificação depende da titularidade da fatura e do padrão de consumo da unidade consumidora. Imóveis residenciais com atividades de home office ou pequenos ateliês continuam classificados na tarifa residencial da concessionária, enquanto salas, galpões e lojas com CNPJ respondem a normas e tarifas comerciais com perfis de demanda específicos.',
    },
    {
      id: 1,
      pergunta: 'Posso instalar energia solar se meu telhado tiver espaço limitado?',
      resposta:
        'Sim. A viabilidade é calculada pela eficiência dos módulos fotovoltaicos em relação à área desimpedida do telhado. Com painéis de alta potência por metro quadrado, é possível planejar um sistema proporcional que cubra parte ou a totalidade da sua demanda, desde que haja incidência solar adequada e ausência de sombreamentos críticos.',
    },
    {
      id: 2,
      pergunta: 'Como sei se meu sistema fotovoltaico atual precisa de revisão ou manutenção?',
      resposta:
        'Quedas bruscas na geração indicada no aplicativo do inversor sem causa climática aparente, acúmulo visível de poeira e fuligem nos módulos ou desligamentos frequentes do disjuntor de proteção são indícios de que o sistema se beneficiará de uma vistoria técnica especializada.',
    },
  ];

  return (
    <div className="bg-[#F5F7FA]">
      
      {/* Abertura da Página */}
      <PageHeader
        badge="Projetos Personalizados"
        title="Energia solar pensada para a sua realidade."
        subtitle="Antes de definir equipamentos, avaliamos seu consumo, as condições físicas do imóvel e seus objetivos para construir uma proposta tecnicamente responsável."
        breadcrumbLabel="Soluções"
      />

      {/* Transição suave: Header Azul Escuro (#071C45) → Introdução (Branco) */}
      <SectionTransition type="dark-to-white" />

      {/* Introdução Conceitual */}
      <section className="py-12 sm:py-16 bg-white">
        <ScrollReveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-[#023399] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
            Visão de Engenharia
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071C45] tracking-tight">
            Cada imóvel pede um dimensionamento próprio
          </h2>
          <p className="text-base sm:text-lg text-[#46556B] leading-relaxed">
            Não existem sistemas pré-fabricados que sirvam para qualquer telhado. A quantidade de módulos, a potência do inversor e o tipo de estrutura de fixação variam conforme a orientação do sol, o padrão da rede elétrica e a rotina de consumo de quem ocupa o espaço.
          </p>
        </ScrollReveal>
      </section>

      {/* Transição suave: Branco → Cinza Claro (#F5F7FA) */}
      <SectionTransition type="white-to-gray" />

      {/* 1. Energia Solar para Residências */}
      <section id="residencial" className="py-16 sm:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white border border-[#D6DFEC] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Text & Details */}
              <ScrollReveal className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#023399] bg-blue-50 px-3 py-1 rounded-md">
                  <Home className="w-4 h-4 text-[#023399]" />
                  <span>Residencial</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071C45] tracking-tight leading-tight">
                  Energia solar para residências
                </h2>

                <p className="text-base sm:text-lg text-[#46556B] leading-relaxed">
                  Para casas unifamiliares, o projeto visa trazer mais previsibilidade financeira e conforto para a rotina doméstica, permitindo utilizar ar-condicionado e equipamentos sem sobressaltos nas contas de energia.
                </p>

                {/* O que avaliamos */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-sm font-bold text-[#071C45] uppercase tracking-wider">
                    O que é avaliado na sua residência:
                  </h3>

                  <div className="divide-y divide-[#D6DFEC]/60 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-3.5 text-xs sm:text-sm text-[#46556B]">
                    <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-3.5 sm:bg-[#F5F7FA] sm:rounded-xl sm:border sm:border-[#D6DFEC]">
                      <strong className="block text-[#071C45] mb-0.5 sm:mb-1">Perfil de consumo:</strong>
                      <span>Análise do histórico de faturas e hábitos de uso da família ao longo do ano.</span>
                    </div>

                    <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-3.5 sm:bg-[#F5F7FA] sm:rounded-xl sm:border sm:border-[#D6DFEC]">
                      <strong className="block text-[#071C45] mb-0.5 sm:mb-1">Espaço e cobertura:</strong>
                      <span>Telhas cerâmicas, metálicas ou lajes, verificando integridade e área útil.</span>
                    </div>

                    <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-3.5 sm:bg-[#F5F7FA] sm:rounded-xl sm:border sm:border-[#D6DFEC]">
                      <strong className="block text-[#071C45] mb-0.5 sm:mb-1">Orientação e sombras:</strong>
                      <span>Mapeamento da trajetória do sol e de eventuais sombreamentos de árvores ou prédios.</span>
                    </div>

                    <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-3.5 sm:bg-[#F5F7FA] sm:rounded-xl sm:border sm:border-[#D6DFEC]">
                      <strong className="block text-[#071C45] mb-0.5 sm:mb-1">Necessidades da rotina:</strong>
                      <span>Planejamento de reservas para futuros acréscimos de aparelhos na casa.</span>
                    </div>
                  </div>
                </div>

                {/* Benefícios com linguagem responsável */}
                <div className="p-4 rounded-xl bg-slate-50 border border-[#D6DFEC] space-y-1 text-xs text-[#46556B]">
                  <strong className="text-[#071C45] block">Benefícios potenciais responsáveis:</strong>
                  <p>
                    Geração limpa no próprio ponto de consumo, valorização do imóvel e proteção contra reajustes das bandeiras tarifárias. Não prometemos conta zerada, pois taxas de disponibilidade e iluminação pública continuam vigentes conforme a regulação.
                  </p>
                </div>

                {/* Contextual CTA */}
                <div className="pt-2">
                  <MotionLink
                    to="/pedir-avaliacao?tipo=Casa"
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    className="inline-flex items-center gap-2.5 bg-[#F9B500] hover:bg-[#e0a300] text-[#071C45] font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399]"
                  >
                    <span>Avaliar minha casa</span>
                    <ArrowRight className="w-5 h-5" />
                  </MotionLink>
                  <span className="block text-[11px] text-[#46556B] mt-2">
                    Abre o formulário de avaliação com a opção "Casa" previamente selecionada.
                  </span>
                </div>

              </ScrollReveal>

              {/* Photo Evidence */}
              <ScrollReveal delay={0.08} className="lg:col-span-5 space-y-2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#D6DFEC] bg-slate-100 shadow-sm relative group">
                  <img
                    src={getAssetUrl('/instagram/instagram-02.jpg')}
                    alt="Instalação solar residencial executada e publicada pela SunHouse"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute bottom-3 left-3 bg-[#071C45]/85 text-white text-xs font-semibold px-3 py-1 rounded-md backdrop-blur-sm">
                    Instalação residencial real
                  </span>
                </div>
                <p className="text-center text-xs text-[#46556B]">
                  Instalação residencial publicada oficialmente pelo perfil @sunhouseenergiasolar.
                </p>
              </ScrollReveal>

            </div>
          </div>

        </div>
      </section>

      {/* Transição suave: Cinza Claro (#F5F7FA) → Branco */}
      <SectionTransition type="gray-to-white" />

      {/* 2. Energia Solar para Comércios */}
      <section id="comercial" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#F5F7FA] border border-[#D6DFEC] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Photo Evidence on Left for visual variety */}
              <ScrollReveal className="lg:col-span-5 order-2 lg:order-1 space-y-2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#D6DFEC] bg-slate-200 shadow-sm relative group">
                  <img
                    src={getAssetUrl('/instagram/instagram-03.jpg')}
                    alt="Instalação solar comercial executada e publicada pela SunHouse"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute bottom-3 left-3 bg-[#071C45]/85 text-white text-xs font-semibold px-3 py-1 rounded-md backdrop-blur-sm">
                    Instalação comercial real
                  </span>
                </div>
                <p className="text-center text-xs text-[#46556B]">
                  Instalação comercial publicada oficialmente pelo perfil @sunhouseenergiasolar.
                </p>
              </ScrollReveal>

              {/* Text & Details on Right */}
              <ScrollReveal delay={0.08} className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#023399] bg-white border border-[#D6DFEC] px-3 py-1 rounded-md">
                  <Building2 className="w-4 h-4 text-[#023399]" />
                  <span>Comercial & Empresarial</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071C45] tracking-tight leading-tight">
                  Energia solar para comércios
                </h2>

                <p className="text-base sm:text-lg text-[#46556B] leading-relaxed">
                  Para lojas, escritórios, clínicas e empresas locais, a geração solar distribui a produção de energia exatamente durante o horário de funcionamento comercial, reduzindo os custos operacionais fixos do seu negócio.
                </p>

                {/* Como o perfil de uso orienta o projeto */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-sm font-bold text-[#071C45] uppercase tracking-wider">
                    Como o perfil da operação orienta a engenharia:
                  </h3>

                  <div className="divide-y divide-[#D6DFEC]/60 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-3.5 text-xs sm:text-sm text-[#46556B]">
                    <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-3.5 sm:bg-white sm:rounded-xl sm:border sm:border-[#D6DFEC]">
                      <strong className="block text-[#071C45] mb-0.5 sm:mb-1">Coincidência diurna:</strong>
                      <span>Equipamentos comerciais operam no pico do dia, gerando autoconsumo instantâneo eficiente.</span>
                    </div>

                    <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-3.5 sm:bg-white sm:rounded-xl sm:border sm:border-[#D6DFEC]">
                      <strong className="block text-[#071C45] mb-0.5 sm:mb-1">Planejamento da implantação:</strong>
                      <span>Cronograma executado com foco em minimizar impactos no fluxo de clientes e atendimento.</span>
                    </div>

                    <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-3.5 sm:bg-white sm:rounded-xl sm:border sm:border-[#D6DFEC]">
                      <strong className="block text-[#071C45] mb-0.5 sm:mb-1">Cálculo de demanda:</strong>
                      <span>Dimensionamento de inversores para suportar motores, câmaras frias e condicionadores de ar.</span>
                    </div>

                    <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-3.5 sm:bg-white sm:rounded-xl sm:border sm:border-[#D6DFEC]">
                      <strong className="block text-[#071C45] mb-0.5 sm:mb-1">Previsibilidade de caixa:</strong>
                      <span>Protege a margem do negócio contra flutuações e aumentos tarifários do setor elétrico.</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-1 text-xs text-[#071C45]">
                  <strong>Transparência operacional:</strong> Não prometemos ausência absoluta de interrupções na rede pública da distribuidora (sistemas on-grid tradicionais operam conectados e dependem da tensão de referência da rede).
                </div>

                {/* Contextual CTA */}
                <div className="pt-2">
                  <MotionLink
                    to="/pedir-avaliacao?tipo=Comercio"
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    className="inline-flex items-center gap-2.5 bg-[#023399] hover:bg-[#071C45] text-white font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399]"
                  >
                    <span>Avaliar meu negócio</span>
                    <ArrowRight className="w-5 h-5" />
                  </MotionLink>
                  <span className="block text-[11px] text-[#46556B] mt-2">
                    Abre o formulário de avaliação com a opção "Comércio" previamente selecionada.
                  </span>
                </div>

              </ScrollReveal>

            </div>
          </div>

        </div>
      </section>

      {/* Transição suave: Branco → Cinza Claro (#F5F7FA) */}
      <SectionTransition type="white-to-gray" />

      {/* Diferenciais Especializados: Homologação Light/Enel, Carregadores Wallbox e Eletricista */}
      <section id="diferenciais" className="py-16 sm:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#023399] uppercase bg-[#023399]/10 px-3 py-1 rounded-full mb-3">
              Diferenciais em Destaque
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071C45] tracking-tight">
              Infraestrutura completa: do padrão à recarga do seu carro
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#46556B] leading-relaxed">
              Além da montagem fotovoltaica de alto rendimento, dominamos a engenharia regulatória da Light e Enel, a instalação de carregadores veiculares e as instalações elétricas prediais.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Bloco 1: Homologação Completa Light e Enel */}
            <ScrollReveal delay={0.04} className="h-full">
              <div className="h-full bg-white rounded-3xl border border-[#D6DFEC] p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-[#023399]/50 transition-all">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#023399] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-7 h-7 text-[#023399]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#023399] uppercase tracking-wider block">Regulatório & Distribuidoras</span>
                    <h3 className="text-xl font-bold text-[#071C45] mt-1">Homologação Light & Enel</h3>
                  </div>
                  <p className="text-sm text-[#46556B] leading-relaxed">
                    Tramitamos 100% da documentação e projetos técnicos de engenharia junto à Light e à Enel até a vistoria e substituição do medidor pelo modelo bidirecional.
                  </p>
                  <ul className="space-y-2 text-xs text-[#46556B] pt-2 border-t border-[#D6DFEC]">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Emissão de ART por engenheiro responsável</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Acompanhamento direto do protocolo e vistoria</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Zero burocracia ou deslocamento para o cliente</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Bloco 2: Carregadores Wallbox */}
            <ScrollReveal delay={0.1} className="h-full">
              <div className="h-full bg-white rounded-3xl border border-[#D6DFEC] p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-[#F9B500]/60 transition-all">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 text-[#F9B500] flex items-center justify-center shrink-0">
                    <Zap className="w-7 h-7 text-[#F9B500]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#F9B500] uppercase tracking-wider block">Mobilidade Elétrica</span>
                    <h3 className="text-xl font-bold text-[#071C45] mt-1">Carregadores Veiculares (Wallbox)</h3>
                  </div>
                  <p className="text-sm text-[#46556B] leading-relaxed">
                    Instalação e configuração especializada de estações de recarga para veículos elétricos e híbridos plug-in (Wallbox), abastecendo seu carro com a energia gerada no próprio telhado.
                  </p>
                  <ul className="space-y-2 text-xs text-[#46556B] pt-2 border-t border-[#D6DFEC]">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Circuitos elétricos dedicados e dimensionados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Proteção contra surtos e sobrecargas (DPS)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Soluções para residências, condomínios e comércios</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Bloco 3: Serviços de Eletricista e Infraestrutura */}
            <ScrollReveal delay={0.16} className="h-full">
              <div className="h-full bg-white rounded-3xl border border-[#D6DFEC] p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-[#023399]/50 transition-all">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 text-[#071C45] flex items-center justify-center shrink-0">
                    <Wrench className="w-7 h-7 text-[#071C45]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#071C45] uppercase tracking-wider block">Segurança Normativa</span>
                    <h3 className="text-xl font-bold text-[#071C45] mt-1">Eletricista & Infraestrutura de Rede</h3>
                  </div>
                  <p className="text-sm text-[#46556B] leading-relaxed">
                    Corpo técnico de eletricistas especializados para adequação do padrão de entrada, quadros de distribuição, proteção elétrica geral e infraestrutura de rede.
                  </p>
                  <ul className="space-y-2 text-xs text-[#46556B] pt-2 border-t border-[#D6DFEC]">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Adequação de padrão e caixa de entrada às normas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Revisão de aterramento e proteção contra choque</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Serviços em conformidade com NBR 5410 e NR-10</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* Transição suave: Cinza Claro (#F5F7FA) → Azul Escuro (#071C45) */}
      <SectionTransition type="gray-to-dark" />

      {/* 3. Manutenção e Acompanhamento */}
      <section id="manutencao" className="py-16 sm:py-24 bg-[#071C45] text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#F9B500] uppercase bg-white/10 px-3 py-1 rounded-full mb-3">
              Suporte a Sistemas Existentes
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Manutenção e acompanhamento para sistemas já instalados
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
              Já possui placas solares no seu imóvel? A SunHouse atende proprietários que necessitam de avaliação técnica, revisão periódica ou suporte no inversor.
            </p>
          </ScrollReveal>

          {/* Maintenance: Open items over section background with dividers on mobile, 3-card grid on desktop */}
          <div className="divide-y divide-white/10 md:divide-y-0 md:grid md:grid-cols-3 md:gap-6 lg:gap-8">
            <ScrollReveal delay={0.04} className="py-6 first:pt-0 last:pb-0 md:py-0">
              <div className="h-full bg-transparent md:bg-white/5 border-0 md:border md:border-white/10 rounded-none md:rounded-2xl p-0 md:p-6 md:sm:p-7 space-y-2 md:space-y-3">
                <div className="flex items-center gap-3 md:block">
                  <div className="p-2.5 md:p-3 w-fit rounded-xl bg-white/10 text-[#F9B500] shrink-0">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base md:text-lg text-white">Vistoria e diagnóstico técnico</h3>
                </div>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Inspeção das condições físicas dos módulos, suportes de fixação, aperto dos conectores e fiação exposta a intempéries.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="py-6 first:pt-0 last:pb-0 md:py-0">
              <div className="h-full bg-transparent md:bg-white/5 border-0 md:border md:border-white/10 rounded-none md:rounded-2xl p-0 md:p-6 md:sm:p-7 space-y-2 md:space-y-3">
                <div className="flex items-center gap-3 md:block">
                  <div className="p-2.5 md:p-3 w-fit rounded-xl bg-white/10 text-[#F9B500] shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base md:text-lg text-white">Acompanhamento e inversores</h3>
                </div>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Verificação de parâmetros de funcionamento do inversor, reconexão de monitoramento Wi-Fi e análise de rendimento real de geração.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.16} className="py-6 first:pt-0 last:pb-0 md:py-0">
              <div className="h-full bg-transparent md:bg-white/5 border-0 md:border md:border-white/10 rounded-none md:rounded-2xl p-0 md:p-6 md:sm:p-7 space-y-2 md:space-y-3">
                <div className="flex items-center gap-3 md:block">
                  <div className="p-2.5 md:p-3 w-fit rounded-xl bg-white/10 text-[#F9B500] shrink-0">
                    <SunMedium className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base md:text-lg text-white">Limpeza e conservação</h3>
                </div>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Orientações para higienização correta dos módulos com produtos adequados, evitando riscos de choque elétrico e microfissuras no vidro.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Sincerity note */}
          <ScrollReveal delay={0.12} className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70 max-w-3xl leading-relaxed">
            <strong>Critério de atendimento:</strong> O escopo dos serviços de manutenção depende da avaliação preliminar das condições reais dos equipamentos, da marca do inversor e da acessibilidade do telhado. Não comercializamos planos obrigatórios com falsa garantia 24h.
          </ScrollReveal>

          <ScrollReveal delay={0.16} className="mt-8">
            <motion.a
              href={whatsappMaintenanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center gap-2.5 bg-[#F9B500] hover:bg-[#e0a300] text-[#071C45] font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#071C45]" />
              <span>Conversar sobre meu sistema no WhatsApp</span>
            </motion.a>
          </ScrollReveal>

        </div>
      </section>

      {/* Transição suave: Azul Escuro (#071C45) → Branco */}
      <SectionTransition type="dark-to-white" />

      {/* 4. O Que Envolve um Projeto */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#023399] uppercase bg-[#023399]/10 px-3 py-1 rounded-full mb-3">
              Escopo Integrado
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071C45] tracking-tight">
              O que está incluído em um projeto completo
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#46556B] leading-relaxed">
              Cuidamos de todas as etapas para que você não precise lidar com burocracias com concessionária ou montagens despadronizadas.
            </p>
          </ScrollReveal>

          {/* Complete Project: Compact numbered sequence on mobile, 5-box grid on desktop */}
          <div className="divide-y divide-[#D6DFEC]/60 sm:divide-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:gap-5">
            <ScrollReveal delay={0.03} className="py-3 first:pt-0 last:pb-0 sm:py-0">
              <div className="h-full p-0 sm:p-5 rounded-none sm:rounded-2xl bg-transparent sm:bg-[#F5F7FA] border-0 sm:border sm:border-[#D6DFEC] flex sm:block items-start gap-3.5 space-y-0 sm:space-y-2.5">
                <span className="text-xs font-black text-[#023399] bg-blue-50 sm:bg-transparent px-2.5 sm:px-0 py-0.5 sm:py-0 rounded sm:rounded-none shrink-0 mt-0.5 sm:mt-0 block">
                  01
                </span>
                <div className="min-w-0">
                  <span className="text-[11px] font-black text-[#023399] uppercase tracking-wider hidden sm:block">01. ESTUDO</span>
                  <h3 className="text-sm sm:text-base font-bold text-[#071C45]">Viabilidade técnica</h3>
                  <p className="text-xs text-[#46556B] leading-relaxed mt-0.5 sm:mt-1">
                    Levantamento do consumo, orientação e inclinação solar do telhado.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.07} className="py-3 first:pt-0 last:pb-0 sm:py-0">
              <div className="h-full p-0 sm:p-5 rounded-none sm:rounded-2xl bg-transparent sm:bg-[#F5F7FA] border-0 sm:border sm:border-[#D6DFEC] flex sm:block items-start gap-3.5 space-y-0 sm:space-y-2.5">
                <span className="text-xs font-black text-[#023399] bg-blue-50 sm:bg-transparent px-2.5 sm:px-0 py-0.5 sm:py-0 rounded sm:rounded-none shrink-0 mt-0.5 sm:mt-0 block">
                  02
                </span>
                <div className="min-w-0">
                  <span className="text-[11px] font-black text-[#023399] uppercase tracking-wider hidden sm:block">02. PROJETO</span>
                  <h3 className="text-sm sm:text-base font-bold text-[#071C45]">Dimensionamento</h3>
                  <p className="text-xs text-[#46556B] leading-relaxed mt-0.5 sm:mt-1">
                    Cálculo do arranjo fotovoltaico, inversores e quadros de proteção.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.11} className="py-3 first:pt-0 last:pb-0 sm:py-0">
              <div className="h-full p-0 sm:p-5 rounded-none sm:rounded-2xl bg-transparent sm:bg-[#F5F7FA] border-0 sm:border sm:border-[#D6DFEC] flex sm:block items-start gap-3.5 space-y-0 sm:space-y-2.5">
                <span className="text-xs font-black text-[#023399] bg-blue-50 sm:bg-transparent px-2.5 sm:px-0 py-0.5 sm:py-0 rounded sm:rounded-none shrink-0 mt-0.5 sm:mt-0 block">
                  03
                </span>
                <div className="min-w-0">
                  <span className="text-[11px] font-black text-[#023399] uppercase tracking-wider hidden sm:block">03. MONTAGEM</span>
                  <h3 className="text-sm sm:text-base font-bold text-[#071C45]">Instalação técnica</h3>
                  <p className="text-xs text-[#46556B] leading-relaxed mt-0.5 sm:mt-1">
                    Fixação estrutural segura nos telhados e conexões elétricas normatizadas.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="py-3 first:pt-0 last:pb-0 sm:py-0">
              <div className="h-full p-0 sm:p-5 rounded-none sm:rounded-2xl bg-transparent sm:bg-[#F5F7FA] border-0 sm:border sm:border-[#D6DFEC] flex sm:block items-start gap-3.5 space-y-0 sm:space-y-2.5">
                <span className="text-xs font-black text-[#023399] bg-blue-50 sm:bg-transparent px-2.5 sm:px-0 py-0.5 sm:py-0 rounded sm:rounded-none shrink-0 mt-0.5 sm:mt-0 block">
                  04
                </span>
                <div className="min-w-0">
                  <span className="text-[11px] font-black text-[#023399] uppercase tracking-wider hidden sm:block">04. CONCESSÃO</span>
                  <h3 className="text-sm sm:text-base font-bold text-[#071C45]">Homologação</h3>
                  <p className="text-xs text-[#46556B] leading-relaxed mt-0.5 sm:mt-1">
                    Tramitação da documentação e protocolo de acesso junto à distribuidora.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.19} className="py-3 first:pt-0 last:pb-0 sm:py-0">
              <div className="h-full p-0 sm:p-5 rounded-none sm:rounded-2xl bg-transparent sm:bg-[#F5F7FA] border-0 sm:border sm:border-[#D6DFEC] flex sm:block items-start gap-3.5 space-y-0 sm:space-y-2.5">
                <span className="text-xs font-black text-[#023399] bg-blue-50 sm:bg-transparent px-2.5 sm:px-0 py-0.5 sm:py-0 rounded sm:rounded-none shrink-0 mt-0.5 sm:mt-0 block">
                  05
                </span>
                <div className="min-w-0">
                  <span className="text-[11px] font-black text-[#023399] uppercase tracking-wider hidden sm:block">05. ENTREGA</span>
                  <h3 className="text-sm sm:text-base font-bold text-[#071C45]">Acompanhamento</h3>
                  <p className="text-xs text-[#46556B] leading-relaxed mt-0.5 sm:mt-1">
                    Instruções de monitoramento de geração e suporte pós-instalação contínuo.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.1} className="mt-8 text-center sm:text-left">
            <Link
              to="/como-funciona"
              className="inline-flex items-center gap-2 font-bold text-sm text-[#023399] hover:underline"
            >
              <span>Entender todas as etapas do processo detalhadamente na página Como Funciona</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>

        </div>
      </section>

      {/* Transição suave: Branco → Cinza Claro (#F5F7FA) */}
      <SectionTransition type="white-to-gray" />

      {/* 5. Atendimento Regional */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="bg-white border border-[#D6DFEC] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#023399] uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#023399]" />
                <span>Cobertura Regional Confirmada</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#071C45]">
                Onde a SunHouse atende com equipe presencial
              </h3>
              <p className="text-xs sm:text-sm text-[#46556B] leading-relaxed max-w-2xl">
                Atendimento confirmado em: <strong>{COMPANY.regioesAtendidas.join(', ')}</strong>.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={whatsappRegionalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F5F7FA] hover:bg-slate-100 border border-[#D6DFEC] text-[#071C45] font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors"
              >
                <span>Consultar outra localidade</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#023399]" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Transição suave: Cinza Claro (#F5F7FA) → Branco */}
      <SectionTransition type="gray-to-white" />

      {/* 6. Perguntas Específicas sobre Escolha de Solução */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#023399] uppercase bg-[#023399]/10 px-3 py-1 rounded-full mb-3">
              Dúvidas Sobre as Soluções
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071C45] tracking-tight">
              Perguntas comuns na hora de escolher a solução
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.06} className="space-y-3.5">
            {specificFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-[#D6DFEC] rounded-2xl overflow-hidden bg-[#F5F7FA]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left font-bold text-base text-[#071C45] hover:text-[#023399] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399] cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-[#023399] shrink-0" />
                      <span>{faq.pergunta}</span>
                    </span>
                    <div
                      className={`p-1 rounded-full bg-white border border-[#D6DFEC] text-[#071C45] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#023399] text-white' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <div
                    className={`px-5 pb-5 text-xs sm:text-sm text-[#46556B] leading-relaxed border-t border-[#D6DFEC]/60 pt-3.5 ${
                      isOpen ? 'block' : 'hidden'
                    }`}
                  >
                    <p>{faq.resposta}</p>
                  </div>
                </div>
              );
            })}
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mt-6 text-center">
            <Link to="/duvidas" className="text-xs sm:text-sm font-bold text-[#023399] hover:underline">
              Ver todas as dúvidas gerais na página Dúvidas →
            </Link>
          </ScrollReveal>

        </div>
      </section>

      {/* Transição suave: Branco → Azul Escuro (#071C45) */}
      <SectionTransition type="white-to-dark" />

      {/* Chamada Final para Avaliação */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#071C45] via-[#023399] to-[#071C45] text-white">
        <ScrollReveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#F9B500] uppercase bg-white/10 px-3 py-1 rounded-full">
            Próximo Passo
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pronto para entender o potencial do seu imóvel?
          </h2>

          <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Envie suas informações de consumo para a equipe técnica da SunHouse elaborar uma proposta individualizada para sua casa ou empresa em Rio de Janeiro e região.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MotionLink
              to="/pedir-avaliacao"
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F9B500] hover:bg-[#e0a300] text-[#071C45] font-extrabold text-base px-8 py-4 rounded-xl shadow-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Solicitar avaliação gratuita</span>
              <ArrowRight className="w-5 h-5" />
            </MotionLink>

            <motion.a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/25 text-white font-semibold text-base px-7 py-4 rounded-xl backdrop-blur-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#F9B500]" />
              <span>Tirar dúvidas no WhatsApp</span>
            </motion.a>
          </div>

          <p className="text-xs text-white/70 pt-2">
            Estudo inicial sem compromisso financeiro. Atendimento em Rio de Janeiro, Baixada Fluminense e Região Metropolitana.
          </p>
        </ScrollReveal>
      </section>

    </div>
  );
};
