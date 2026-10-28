import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  FileCheck,
  Hammer,
  Activity,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  HelpCircle,
  ChevronDown,
  Info,
  Check,
  FileText,
  AlertTriangle,
  Zap,
  Wrench
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { PageHeader } from '../components/PageHeader';
import { SectionTransition } from '../components/SectionTransition';
import { ScrollReveal } from '../components/ScrollReveal';
import { motion, useReducedMotion } from 'motion/react';
import { COMPANY } from '../data/companyData';
import { buildQuickWhatsAppLink } from '../utils/whatsapp';

const MotionLink = motion.create(Link);

export const ProcessPage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Update document title and meta description for SEO
  useEffect(() => {
    document.title = 'Como Funciona o Projeto Solar | SunHouse Energia Solar';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Entenda o passo a passo de um projeto de energia solar da SunHouse: do entendimento inicial do consumo, planejamento e homologação até a ativação e suporte em Rio de Janeiro e região.'
      );
    }
  }, []);

  const [openFaqId, setOpenFaqId] = useState<number | null>(0);

  const whatsappDuvidaProcessoUrl = buildQuickWhatsAppLink(
    'Olá! Estava lendo sobre o processo de instalação e gostaria de tirar uma dúvida sobre o meu imóvel.'
  );

  const processFaqs = [
    {
      id: 0,
      pergunta: 'Preciso alterar a fiação da minha casa para instalar energia solar?',
      resposta:
        'Na grande maioria dos casos, a instalação é conectada ao quadro geral de distribuição existente. No entanto, a equipe técnica verifica se o padrão de entrada (caixa do relógio) e o aterramento atendem às exigências vigentes da concessionária local. Se houver necessidade de adequação, isso é identificado e orientado com total transparência durante o planejamento.',
    },
    {
      id: 1,
      pergunta: 'Quanto tempo leva entre a contratação e a ativação do sistema?',
      resposta:
        'O cronograma total envolve a montagem física dos módulos (que costuma levar poucos dias, a depender do porte do projeto) e o trâmite formal de homologação junto à distribuidora de energia, que inclui análise de projeto, vistoria e troca do medidor por um modelo bidirecional. Como os prazos de vistoria e vistoria técnica dependem das etapas regulatórias da concessionária, acompanhamos cada protocolo de perto sem estipular prazos arbitrários.',
    },
    {
      id: 2,
      pergunta: 'O fornecimento de energia é interrompido durante a instalação?',
      resposta:
        'A montagem dos trilhos, fixação dos módulos no telhado e passagem do cabeamento ocorrem normalmente sem interrupção de energia na casa ou empresa. Apenas no momento final da conexão elétrica no quadro de distribuição pode ser necessário um breve desligamento programado do disjuntor geral, sempre combinado previamente no melhor horário.',
    },
  ];

  return (
    <div className="bg-[#F5F7FA]">
      
      {/* Abertura da Página */}
      <PageHeader
        badge="Metodologia & Transparência"
        title="Do primeiro estudo ao sistema em operação."
        subtitle="O projeto solar começa pelo entendimento das suas necessidades reais de consumo e das características da cobertura do imóvel, sem etapas nebulosas."
        breadcrumbLabel="Como funciona"
      />

      {/* Transição suave: Header Azul Escuro (#071C45) → Introdução (Branco) */}
      <SectionTransition type="dark-to-white" />

      {/* Introdução ao Processo */}
      <section className="py-12 sm:py-16 bg-white">
        <ScrollReveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-[#023399] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
            Etapas Claras e Acompanhadas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071C45] tracking-tight">
            Engenharia planejada do primeiro contato ao pós-venda
          </h2>
          <p className="text-base sm:text-lg text-[#46556B] leading-relaxed">
            Desenvolvemos uma metodologia de atendimento em quatro fases bem definidas. Em cada uma delas, você sabe exatamente o que está sendo executado, o que precisa ser aprovado e quais são os próximos passos.
          </p>
        </ScrollReveal>
      </section>

      {/* Transição suave: Branco → Cinza Claro (#F5F7FA) */}
      <SectionTransition type="white-to-gray" />

      {/* Conteúdo Principal: Percurso Visual das 4 Etapas (reveladas conforme entram no viewport) */}
      <section className="py-16 sm:py-24 bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Process Journey: Continuous vertical path on mobile, 4 full cards on desktop */}
          <div className="relative pl-8 sm:pl-0 space-y-10 sm:space-y-12">
            
            {/* Continuous vertical timeline connector line on mobile */}
            <div
              className="sm:hidden absolute left-3 top-3 bottom-4 w-0.5 bg-[#023399]/20 pointer-events-none"
              aria-hidden="true"
            />

            {/* ETAPA 1: ENTENDER */}
            <ScrollReveal className="relative">
              {/* Mobile Timeline Number Marker */}
              <div
                className="sm:hidden absolute -left-8 top-0.5 w-6 h-6 rounded-full bg-[#023399] text-white flex items-center justify-center font-black text-xs font-heading shadow-xs shrink-0"
                aria-hidden="true"
              >
                01
              </div>

              <div className="bg-transparent sm:bg-white border-0 sm:border sm:border-[#D6DFEC] rounded-none sm:rounded-3xl p-0 sm:p-10 shadow-none sm:shadow-sm relative overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 items-start">
                  
                  {/* Desktop Header Block with Number */}
                  <div className="hidden sm:flex items-center gap-4 lg:flex-col lg:items-start lg:w-48 shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-[#023399] text-white flex items-center justify-center font-black text-2xl font-heading shadow-sm">
                      01
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#023399] uppercase tracking-wider block">
                        Primeiro Contato
                      </span>
                      <h3 className="text-2xl font-extrabold text-[#071C45]">
                        Entender
                      </h3>
                    </div>
                  </div>

                  {/* Mobile Header Title */}
                  <div className="sm:hidden">
                    <span className="text-[11px] font-bold text-[#023399] uppercase tracking-wider block">
                      Primeiro Contato
                    </span>
                    <h3 className="text-xl font-extrabold text-[#071C45]">
                      Entender
                    </h3>
                  </div>

                  {/* Content Breakdown: Identified text groups on mobile, clean 2x2 grid on desktop */}
                  <div className="flex-1 space-y-3 sm:space-y-5">
                    <p className="text-sm sm:text-lg text-[#071C45] font-semibold leading-relaxed">
                      “Você conta como consome energia e onde será o projeto.”
                    </p>

                    <div className="divide-y divide-[#D6DFEC]/60 sm:divide-y-0 sm:grid sm:grid-cols-1 md:grid-cols-2 sm:gap-4 text-xs sm:text-sm">
                      
                      <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-4 sm:rounded-xl sm:bg-[#F5F7FA] sm:border sm:border-[#D6DFEC] space-y-0.5 sm:space-y-1">
                        <strong className="block text-[#071C45] text-xs font-bold uppercase tracking-wider">
                          🎯 O objetivo:
                        </strong>
                        <p className="text-[#46556B] leading-relaxed">
                          Compreender o cenário atual de consumo em kWh, a localização do imóvel e a expectativa de economia para orientar se a instalação solar é técnica e financeiramente viável.
                        </p>
                      </div>

                      <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-4 sm:rounded-xl sm:bg-[#F5F7FA] sm:border sm:border-[#D6DFEC] space-y-0.5 sm:space-y-1">
                        <strong className="block text-[#071C45] text-xs font-bold uppercase tracking-wider">
                          🛠️ O que a equipe faz:
                        </strong>
                        <p className="text-[#46556B] leading-relaxed">
                          Analisa a média histórica das faturas, verifica por imagens aéreas a inclinação da cobertura em Rio de Janeiro e região e faz o levantamento de viabilidade preliminar.
                        </p>
                      </div>

                      <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-4 sm:rounded-xl sm:bg-[#F5F7FA] sm:border sm:border-[#D6DFEC] space-y-0.5 sm:space-y-1">
                        <strong className="block text-[#071C45] text-xs font-bold uppercase tracking-wider">
                          🤝 Como o cliente participa:
                        </strong>
                        <p className="text-[#46556B] leading-relaxed">
                          Informa a cidade, o tipo de imóvel (casa ou comércio) e a faixa média de valor da conta ou envia uma fatura recente para conferência do histórico.
                        </p>
                      </div>

                      <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-4 sm:rounded-xl sm:bg-[#F5F7FA] sm:border sm:border-[#D6DFEC] space-y-0.5 sm:space-y-1">
                        <strong className="block text-[#071C45] text-xs font-bold uppercase tracking-wider">
                          ✅ O que precisa estar definido para avançar:
                        </strong>
                        <p className="text-[#46556B] leading-relaxed">
                          Confirmação do endereço e interesse em receber uma proposta detalhada com dimensionamento técnico dos equipamentos.
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>

            {/* ETAPA 2: PLANEJAR */}
            <ScrollReveal className="relative">
              {/* Mobile Timeline Number Marker */}
              <div
                className="sm:hidden absolute -left-8 top-0.5 w-6 h-6 rounded-full bg-[#023399] text-white flex items-center justify-center font-black text-xs font-heading shadow-xs shrink-0"
                aria-hidden="true"
              >
                02
              </div>

              <div className="bg-transparent sm:bg-white border-0 sm:border sm:border-[#D6DFEC] rounded-none sm:rounded-3xl p-0 sm:p-10 shadow-none sm:shadow-sm relative overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 items-start">
                  
                  {/* Desktop Header Block with Number */}
                  <div className="hidden sm:flex items-center gap-4 lg:flex-col lg:items-start lg:w-48 shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-[#023399] text-white flex items-center justify-center font-black text-2xl font-heading shadow-sm">
                      02
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#023399] uppercase tracking-wider block">
                        Engenharia & Proposta
                      </span>
                      <h3 className="text-2xl font-extrabold text-[#071C45]">
                        Planejar
                      </h3>
                    </div>
                  </div>

                  {/* Mobile Header Title */}
                  <div className="sm:hidden">
                    <span className="text-[11px] font-bold text-[#023399] uppercase tracking-wider block">
                      Engenharia & Proposta
                    </span>
                    <h3 className="text-xl font-extrabold text-[#071C45]">
                      Planejar
                    </h3>
                  </div>

                  {/* Content Breakdown */}
                  <div className="flex-1 space-y-3 sm:space-y-5">
                    <p className="text-sm sm:text-lg text-[#071C45] font-semibold leading-relaxed">
                      “A equipe avalia o espaço e apresenta a solução e as condições.”
                    </p>

                    <div className="divide-y divide-[#D6DFEC]/60 sm:divide-y-0 sm:grid sm:grid-cols-1 md:grid-cols-2 sm:gap-4 text-xs sm:text-sm">
                      
                      <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-4 sm:rounded-xl sm:bg-[#F5F7FA] sm:border sm:border-[#D6DFEC] space-y-0.5 sm:space-y-1">
                        <strong className="block text-[#071C45] text-xs font-bold uppercase tracking-wider">
                          🎯 O objetivo:
                        </strong>
                        <p className="text-[#46556B] leading-relaxed">
                          Desenvolver o projeto de engenharia customizado, definindo a potência ideal do sistema (kWp), a disposição dos painéis e as condições comerciais transparentes.
                        </p>
                      </div>

                      <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-4 sm:rounded-xl sm:bg-[#F5F7FA] sm:border sm:border-[#D6DFEC] space-y-0.5 sm:space-y-1">
                        <strong className="block text-[#071C45] text-xs font-bold uppercase tracking-wider">
                          🛠️ O que a equipe faz:
                        </strong>
                        <p className="text-[#46556B] leading-relaxed">
                          Realiza a vistoria técnica no telhado, mapeia sombras, especifica os modelos de módulos e inversor certificados e elabora a proposta com discriminação de escopo.
                        </p>
                      </div>

                      <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-4 sm:rounded-xl sm:bg-[#F5F7FA] sm:border sm:border-[#D6DFEC] space-y-0.5 sm:space-y-1">
                        <strong className="block text-[#071C45] text-xs font-bold uppercase tracking-wider">
                          🤝 Como o cliente participa:
                        </strong>
                        <p className="text-[#46556B] leading-relaxed">
                          Permite o acesso à cobertura para a medição técnica, analisa a proposta apresentada, tira dúvidas sobre os equipamentos e escolhe a condição de pagamento.
                        </p>
                      </div>

                      <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-4 sm:rounded-xl sm:bg-[#F5F7FA] sm:border sm:border-[#D6DFEC] space-y-0.5 sm:space-y-1">
                        <strong className="block text-[#071C45] text-xs font-bold uppercase tracking-wider">
                          ✅ O que precisa estar definido para avançar:
                        </strong>
                        <p className="text-[#46556B] leading-relaxed">
                          Contrato assinado com escopo, equipamentos, garantias e responsabilidades de ambas as partes plenamente acordados antes de qualquer movimentação.
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>

            {/* ETAPA 3: IMPLANTAR */}
            <ScrollReveal className="relative">
              {/* Mobile Timeline Number Marker */}
              <div
                className="sm:hidden absolute -left-8 top-0.5 w-6 h-6 rounded-full bg-[#023399] text-white flex items-center justify-center font-black text-xs font-heading shadow-xs shrink-0"
                aria-hidden="true"
              >
                03
              </div>

              <div className="bg-transparent sm:bg-white border-0 sm:border sm:border-[#D6DFEC] rounded-none sm:rounded-3xl p-0 sm:p-10 shadow-none sm:shadow-sm relative overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 items-start">
                  
                  {/* Desktop Header Block with Number */}
                  <div className="hidden sm:flex items-center gap-4 lg:flex-col lg:items-start lg:w-48 shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-[#023399] text-white flex items-center justify-center font-black text-2xl font-heading shadow-sm">
                      03
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#023399] uppercase tracking-wider block">
                        Obra & Concessionária
                      </span>
                      <h3 className="text-2xl font-extrabold text-[#071C45]">
                        Implantar
                      </h3>
                    </div>
                  </div>

                  {/* Mobile Header Title */}
                  <div className="sm:hidden">
                    <span className="text-[11px] font-bold text-[#023399] uppercase tracking-wider block">
                      Obra & Concessionária
                    </span>
                    <h3 className="text-xl font-extrabold text-[#071C45]">
                      Implantar
                    </h3>
                  </div>

                  {/* Content Breakdown */}
                  <div className="flex-1 space-y-3 sm:space-y-5">
                    <p className="text-sm sm:text-lg text-[#071C45] font-semibold leading-relaxed">
                      “Instalação e encaminhamento da homologação conforme o projeto.”
                    </p>

                    <div className="divide-y divide-[#D6DFEC]/60 sm:divide-y-0 sm:grid sm:grid-cols-1 md:grid-cols-2 sm:gap-4 text-xs sm:text-sm">
                      
                      <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-4 sm:rounded-xl sm:bg-[#F5F7FA] sm:border sm:border-[#D6DFEC] space-y-0.5 sm:space-y-1">
                        <strong className="block text-[#071C45] text-xs font-bold uppercase tracking-wider">
                          🎯 O objetivo:
                        </strong>
                        <p className="text-[#46556B] leading-relaxed">
                          Montar com precisão mecânica e elétrica toda a usina fotovoltaica e protocolar o pedido de conexão e vistoria junto à concessionária de energia.
                        </p>
                      </div>

                      <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-4 sm:rounded-xl sm:bg-[#F5F7FA] sm:border sm:border-[#D6DFEC] space-y-0.5 sm:space-y-1">
                        <strong className="block text-[#071C45] text-xs font-bold uppercase tracking-wider">
                          🛠️ O que a equipe faz:
                        </strong>
                        <p className="text-[#46556B] leading-relaxed">
                          Fixa os suportes respeitando as telhas, instala módulos, cabeamento protegido e quadros de proteção, emitindo a ART e protocolando a documentação na distribuidora.
                        </p>
                      </div>

                      <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-4 sm:rounded-xl sm:bg-[#F5F7FA] sm:border sm:border-[#D6DFEC] space-y-0.5 sm:space-y-1">
                        <strong className="block text-[#071C45] text-xs font-bold uppercase tracking-wider">
                          🤝 Como o cliente participa:
                        </strong>
                        <p className="text-[#46556B] leading-relaxed">
                          Acompanha a equipe nos dias de instalação e disponibiliza os dados cadastrais da conta de energia para protocolização do acesso.
                        </p>
                      </div>

                      <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-4 sm:rounded-xl sm:bg-[#F5F7FA] sm:border sm:border-[#D6DFEC] space-y-0.5 sm:space-y-1">
                        <strong className="block text-[#071C45] text-xs font-bold uppercase tracking-wider">
                          ✅ O que precisa estar definido para avançar:
                        </strong>
                        <p className="text-[#46556B] leading-relaxed">
                          Instalação finalizada, laudo técnico emitido e protocolo registrado na distribuidora, aguardando a vistoria e a troca do medidor por parte da concessionária.
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>

            {/* ETAPA 4: ACOMPANHAR */}
            <ScrollReveal className="relative">
              {/* Mobile Timeline Number Marker */}
              <div
                className="sm:hidden absolute -left-8 top-0.5 w-6 h-6 rounded-full bg-[#023399] text-white flex items-center justify-center font-black text-xs font-heading shadow-xs shrink-0"
                aria-hidden="true"
              >
                04
              </div>

              <div className="bg-transparent sm:bg-white border-0 sm:border sm:border-[#D6DFEC] rounded-none sm:rounded-3xl p-0 sm:p-10 shadow-none sm:shadow-sm relative overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 items-start">
                  
                  {/* Desktop Header Block with Number */}
                  <div className="hidden sm:flex items-center gap-4 lg:flex-col lg:items-start lg:w-48 shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-[#023399] text-white flex items-center justify-center font-black text-2xl font-heading shadow-sm">
                      04
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#023399] uppercase tracking-wider block">
                        Ativação & Suporte
                      </span>
                      <h3 className="text-2xl font-extrabold text-[#071C45]">
                        Acompanhar
                      </h3>
                    </div>
                  </div>

                  {/* Mobile Header Title */}
                  <div className="sm:hidden">
                    <span className="text-[11px] font-bold text-[#023399] uppercase tracking-wider block">
                      Ativação & Suporte
                    </span>
                    <h3 className="text-xl font-extrabold text-[#071C45]">
                      Acompanhar
                    </h3>
                  </div>

                  {/* Content Breakdown */}
                  <div className="flex-1 space-y-3 sm:space-y-5">
                    <p className="text-sm sm:text-lg text-[#071C45] font-semibold leading-relaxed">
                      “Orientação e suporte para a fase de uso do sistema.”
                    </p>

                    <div className="divide-y divide-[#D6DFEC]/60 sm:divide-y-0 sm:grid sm:grid-cols-1 md:grid-cols-2 sm:gap-4 text-xs sm:text-sm">
                      
                      <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-4 sm:rounded-xl sm:bg-[#F5F7FA] sm:border sm:border-[#D6DFEC] space-y-0.5 sm:space-y-1">
                        <strong className="block text-[#071C45] text-xs font-bold uppercase tracking-wider">
                          🎯 O objetivo:
                        </strong>
                        <p className="text-[#46556B] leading-relaxed">
                          Garantir que você compreenda o funcionamento da geração solar, saiba acompanhar pelo aplicativo e tenha suporte direto da equipe para qualquer dúvida futura.
                        </p>
                      </div>

                      <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-4 sm:rounded-xl sm:bg-[#F5F7FA] sm:border sm:border-[#D6DFEC] space-y-0.5 sm:space-y-1">
                        <strong className="block text-[#071C45] text-xs font-bold uppercase tracking-wider">
                          🛠️ O que a equipe faz:
                        </strong>
                        <p className="text-[#46556B] leading-relaxed">
                          Liga o sistema após a troca do medidor, configura o aplicativo de monitoramento no seu celular, ensina a ler a primeira fatura de compensação e permanece à disposição.
                        </p>
                      </div>

                      <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-4 sm:rounded-xl sm:bg-[#F5F7FA] sm:border sm:border-[#D6DFEC] space-y-0.5 sm:space-y-1">
                        <strong className="block text-[#071C45] text-xs font-bold uppercase tracking-wider">
                          🤝 Como o cliente participa:
                        </strong>
                        <p className="text-[#46556B] leading-relaxed">
                          Acompanha a produção diária no aplicativo e entra em contato pelo canal de suporte sempre que tiver dúvidas sobre a fatura ou necessidade de manutenção.
                        </p>
                      </div>

                      <div className="py-2.5 sm:py-0 first:pt-0 last:pb-0 sm:p-4 sm:rounded-xl sm:bg-[#F5F7FA] sm:border sm:border-[#D6DFEC] space-y-0.5 sm:space-y-1">
                        <strong className="block text-[#071C45] text-xs font-bold uppercase tracking-wider">
                          ✅ O que precisa estar definido para avançar:
                        </strong>
                        <p className="text-[#46556B] leading-relaxed">
                          Medidor bidirecional ativado pela concessionária, aplicativo configurado e canal de atendimento pós-venda compartilhado.
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* Transição suave: Branco → Cinza Claro (#F5F7FA) */}
      <SectionTransition type="white-to-gray" />

      {/* Seções Complementares: O que ajuda na 1ª conversa & O que influencia o andamento */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="divide-y divide-[#D6DFEC] md:divide-y-0 md:grid md:grid-cols-2 md:gap-8 lg:gap-12">
            
            {/* Bloco: O que ajuda na primeira conversa */}
            <ScrollReveal className="py-6 first:pt-0 last:pb-0 md:py-0 bg-transparent md:bg-[#F5F7FA] border-0 md:border md:border-[#D6DFEC] rounded-none md:rounded-3xl p-0 md:p-8 space-y-3 md:space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#023399] uppercase tracking-wider">
                <FileText className="w-4 h-4 text-[#023399]" />
                <span>Preparação Simples</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#071C45]">
                O que ajuda na primeira conversa
              </h3>

              <p className="text-xs sm:text-sm text-[#46556B] leading-relaxed">
                Você não precisa de documentos sensíveis, certidões ou comprovantes complexos para iniciar a avaliação. Bastam informações básicas:
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-[#46556B] pt-1">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Cidade e bairro do imóvel:</strong> Para verificar a incidência de radiação solar e regras da distribuidora local.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Tipo aproximado de telhado:</strong> Se é telha cerâmica, telha metálica, fibrocimento ou laje plana.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Valor médio ou foto da conta de luz:</strong> O histórico de kWh dos últimos 12 meses é a melhor base de cálculo.</span>
                </li>
              </ul>

              <div className="pt-2 text-[11px] text-[#46556B] border-t border-[#D6DFEC]">
                * Dados pessoais são coletados somente com sua concordância para a elaboração formal do contrato.
              </div>
            </ScrollReveal>

            {/* Bloco: O que pode influenciar o andamento */}
            <ScrollReveal delay={0.08} className="py-6 first:pt-0 last:pb-0 md:py-0 bg-transparent md:bg-[#F5F7FA] border-0 md:border md:border-[#D6DFEC] rounded-none md:rounded-3xl p-0 md:p-8 space-y-3 md:space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#023399] uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-[#023399]" />
                <span>Transparência de Prazos</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#071C45]">
                O que pode influenciar o andamento
              </h3>

              <p className="text-xs sm:text-sm text-[#46556B] leading-relaxed">
                Cada projeto depende de fatores técnicos e regulatórios reais que devem ser considerados com responsabilidade:
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-[#46556B] pt-1">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F9B500] shrink-0 mt-2"></span>
                  <span><strong>Características da cobertura:</strong> Acesso seguro ao telhado, necessidade de reforço estrutural ou remanejamento de obstáculos.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F9B500] shrink-0 mt-2"></span>
                  <span><strong>Padrão de entrada da concessionária:</strong> Verificação se a caixa de medição e disjuntor já atendem às normas técnicas da distribuidora.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F9B500] shrink-0 mt-2"></span>
                  <span><strong>Prazos da distribuidora de energia:</strong> A análise técnica do projeto de acesso, a vistoria e a troca de relógio seguem os prazos de fiscalização da concessionária.</span>
                </li>
              </ul>

              <div className="pt-2 text-[11px] text-[#46556B] border-t border-[#D6DFEC]">
                A SunHouse acompanha cada protocolo junto à distribuidora e mantém você informado em todas as etapas.
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* Diferenciais em Destaque no Processo */}
      <section className="py-16 bg-[#F5F7FA] border-t border-[#D6DFEC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#023399] uppercase bg-[#023399]/10 px-3 py-1 rounded-full mb-3">
              Diferenciais de Engenharia
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071C45] tracking-tight">
              Padrão técnico superior em todas as etapas
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#46556B]">
              Homologação desburocratizada, preparação para carros elétricos e corpo técnico de eletricistas qualificados.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={0.04} className="bg-white rounded-2xl border border-[#D6DFEC] p-6 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#023399] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#023399]" />
              </div>
              <h3 className="font-bold text-lg text-[#071C45]">Homologação Light & Enel</h3>
              <p className="text-xs sm:text-sm text-[#46556B] leading-relaxed">
                Elaboração de projeto elétrico, emissão de ART assinada e acompanhamento até a instalação do medidor bidirecional pela concessionária.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08} className="bg-white rounded-2xl border border-[#D6DFEC] p-6 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#F9B500] flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#F9B500]" />
              </div>
              <h3 className="font-bold text-lg text-[#071C45]">Carregadores Wallbox</h3>
              <p className="text-xs sm:text-sm text-[#46556B] leading-relaxed">
                Integração e cabeamento dedicado para recarga rápida de veículos elétricos e híbridos plug-in com proteção contra surtos elétricos.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.12} className="bg-white rounded-2xl border border-[#D6DFEC] p-6 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#071C45] flex items-center justify-center">
                <Wrench className="w-6 h-6 text-[#071C45]" />
              </div>
              <h3 className="font-bold text-lg text-[#071C45]">Eletricistas Especializados</h3>
              <p className="text-xs sm:text-sm text-[#46556B] leading-relaxed">
                Adequação do padrão de entrada, quadros de distribuição, DPS e aterramento seguindo rigorosamente a NBR 5410 e normas de segurança.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Transição suave: Cinza Claro (#F5F7FA) → Branco */}
      <SectionTransition type="gray-to-white" />

      {/* Perguntas Frequentes Específicas sobre o Processo */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#023399] uppercase bg-[#023399]/10 px-3 py-1 rounded-full mb-3">
              Dúvidas Sobre as Etapas
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071C45] tracking-tight">
              Perguntas frequentes sobre a instalação
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.06} className="space-y-3.5">
            {processFaqs.map((faq) => {
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
                      className={`p-1 rounded-full bg-white text-[#071C45] shrink-0 transition-transform duration-200 ${
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

          <ScrollReveal delay={0.1} className="mt-8 text-center">
            <a
              href={whatsappDuvidaProcessoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#023399] hover:underline"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#023399]" />
              <span>Ficou com alguma dúvida sobre seu telhado? Pergunte no WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </ScrollReveal>

        </div>
      </section>

      {/* Transição suave: Branco (#FFFFFF) → Azul Escuro (#071C45) */}
      <SectionTransition type="white-to-dark" />

      {/* CTA Final para Avaliação */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#071C45] via-[#023399] to-[#071C45] text-white">
        <ScrollReveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#F9B500] uppercase bg-white/10 px-3 py-1 rounded-full">
            Comece Hoje
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dê o primeiro passo para o seu projeto solar
          </h2>

          <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe técnica analisa seu consumo e a cobertura do imóvel para apresentar um estudo inicial de viabilidade sem compromisso financeiro.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MotionLink
              to="/pedir-avaliacao"
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F9B500] hover:bg-[#e0a300] text-[#071C45] font-extrabold text-base px-8 py-4 rounded-xl shadow-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Começar minha avaliação</span>
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
              <span>Falar no WhatsApp</span>
            </motion.a>
          </div>

          <p className="text-xs text-white/70 pt-2">
            Base técnica em Honório Gurgel, Rio de Janeiro (RJ), com atendimento em toda a Região Metropolitana e Baixada Fluminense (raio de até 50 km).
          </p>
        </ScrollReveal>
      </section>


    </div>
  );
};
