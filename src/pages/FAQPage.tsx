import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Search,
  Home,
  Hammer,
  DollarSign,
  Wrench,
  Check,
  ExternalLink,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { PageHeader } from '../components/PageHeader';
import { SectionTransition } from '../components/SectionTransition';
import { ScrollReveal } from '../components/ScrollReveal';
import { motion, useReducedMotion } from 'motion/react';
import { COMPANY } from '../data/companyData';
import { buildQuickWhatsAppLink } from '../utils/whatsapp';

const MotionLink = motion.create(Link);

interface FAQQuestion {
  id: string;
  pergunta: string;
  resposta: React.ReactNode;
}

interface FAQCategory {
  id: string;
  nome: string;
  icone: React.ElementType;
  descricao: string;
  perguntas: FAQQuestion[];
}

export const FAQPage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  // Update document title and meta description for SEO
  useEffect(() => {
    document.title = 'Dúvidas Frequentes sobre Energia Solar | SunHouse Energia Solar';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Tire suas dúvidas sobre instalação de energia solar, dimensionamento, custos, homologação e manutenção em Rio de Janeiro e região com a SunHouse.'
      );
    }
  }, []);

  const [activeCategory, setActiveCategory] = useState<string>('imovel-consumo');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-5', 'faq-9', 'faq-13']);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const whatsappDuvidasUrl = buildQuickWhatsAppLink(
    'Olá, equipe SunHouse! Estava consultando a página de dúvidas e gostaria de tirar uma pergunta com um especialista.'
  );

  // 16 Structured Questions across 4 Categories
  const categories: FAQCategory[] = [
    {
      id: 'imovel-consumo',
      nome: 'Meu imóvel e meu consumo',
      icone: Home,
      descricao: 'Perguntas sobre viabilidade do telhado, histórico de faturas e atendimento regional.',
      perguntas: [
        {
          id: 'faq-1',
          pergunta: 'Como saber se meu imóvel pode receber um sistema fotovoltaico?',
          resposta: (
            <div className="space-y-2">
              <p>
                O ponto de partida é avaliar o consumo médio mensal em kWh, a área disponível de cobertura, a inclinação e orientação do telhado em relação ao sol e a existência de sombras provocadas por árvores, caixas d'água ou construções vizinhas.
              </p>
              <p>
                A equipe técnica da SunHouse realiza uma análise de viabilidade prévia por imagem aérea e, quando necessário, visita o local para confirmar a estrutura do telhado.
              </p>
              <div className="pt-1">
                <Link to="/solucoes" className="text-xs font-bold text-[#023399] hover:underline inline-flex items-center gap-1">
                  <span>Conhecer os critérios avaliados na página Soluções</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ),
        },
        {
          id: 'faq-2',
          pergunta: 'Quais informações ajudam na avaliação inicial do consumo?',
          resposta: (
            <p>
              Para a primeira orientação, basta informar a cidade onde fica o imóvel, se é uma casa ou comércio, e a faixa média de valor mensal da sua conta de luz. Se você tiver em mãos uma fatura recente, o gráfico do histórico dos últimos 12 meses em kWh permite dimensionar a potência com precisão técnica muito maior. Não solicitamos documentos pessoais ou dados sensíveis no primeiro contato.
            </p>
          ),
        },
        {
          id: 'faq-3',
          pergunta: 'A SunHouse atende residências e comércios?',
          resposta: (
            <div className="space-y-2">
              <p>
                Sim. Atendemos casas unifamiliares, sobrados e residências em condomínios fechados, além de estabelecimentos comerciais como lojas, clínicas, pequenos galpões e escritórios.
              </p>
              <p>
                O dimensionamento é adaptado ao perfil: residências focam no conforto e na rotina familiar, enquanto comércios aproveitam a forte coincidência do consumo diurno com o pico de geração solar.
              </p>
              <div className="pt-1">
                <Link to="/pedir-avaliacao" className="text-xs font-bold text-[#023399] hover:underline inline-flex items-center gap-1">
                  <span>Solicitar avaliação para sua casa ou empresa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ),
        },
        {
          id: 'faq-4',
          pergunta: 'A SunHouse atende na minha cidade ou região?',
          resposta: (
            <p>
              Nossa base operacional fica em Honório Gurgel, Rio de Janeiro (RJ), com atendimento presencial confirmado no <strong>Rio de Janeiro (Capital), Baixada Fluminense, Zona Norte, Zona Oeste e em toda a Região Metropolitana (raio de até 50 km a partir da capital)</strong>. Caso seu imóvel esteja em outra localidade próxima, entre em contato pelo WhatsApp com o Carlos Alberto para consultarmos a viabilidade técnica.
            </p>
          ),
        },
      ],
    },
    {
      id: 'projeto-instalacao',
      nome: 'Projeto e instalação',
      icone: Hammer,
      descricao: 'Etapas de engenharia, montagem mecânica, homologação na concessionária e prazos.',
      perguntas: [
        {
          id: 'faq-5',
          pergunta: 'O que é analisado no telhado durante a vistoria técnica?',
          resposta: (
            <p>
              A equipe avalia a integridade mecânica da cobertura (telhas cerâmicas, metálicas, fibrocimento ou laje de concreto), o espaço desimpedido para fixação dos trilhos de alumínio, a rota de passagem dos eletrodutos para descida do cabeamento elétrico solar (cabos solares resistentes a raios UV) e o ponto ideal para a fixação do inversor e quadros de proteção (String Box).
            </p>
          ),
        },
        {
          id: 'faq-6',
          pergunta: 'O que acontece depois do primeiro contato?',
          resposta: (
            <div className="space-y-2">
              <p>
                Após você enviar as informações de consumo, nossa equipe técnica elabora um estudo preliminar. Se o cenário for vantajoso, agendamos uma vistoria para checagem do telhado e apresentamos uma proposta formal completa com a especificação dos equipamentos, layout e condições comerciais.
              </p>
              <div className="pt-1">
                <Link to="/como-funciona" className="text-xs font-bold text-[#023399] hover:underline inline-flex items-center gap-1">
                  <span>Ver o passo a passo completo na página Como Funciona</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ),
        },
        {
          id: 'faq-7',
          pergunta: 'O que envolve a homologação junto à concessionária de energia (Light / Enel)?',
          resposta: (
            <p>
              A homologação é o processo formal e obrigatório de registro da sua usina solar junto à distribuidora de energia (Light e Enel no Rio de Janeiro). A SunHouse cuida de todo o trâmite: emissão de Anotação de Responsabilidade Técnica (ART), envio do diagrama elétrico, solicitação do parecer de acesso, agendamento da vistoria da concessionária e acompanhamento até a instalação do medidor bidirecional que registra a energia injetada na rede.
            </p>
          ),
        },
        {
          id: 'faq-8',
          pergunta: 'Quanto tempo pode levar o projeto da contratação à ativação?',
          resposta: (
            <p>
              A instalação física dos módulos no telhado costuma levar de 2 a 5 dias úteis, dependendo do tamanho da usina. Já o tempo total até a ativação é determinado principalmente pelos prazos regulatórios da distribuidora de energia local para análise de projeto, vistoria e troca do relógio medidor. Como esses prazos dependem da agenda da concessionária, acompanhamos cada protocolo de perto sem estipular prazos arbitrários.
            </p>
          ),
        },
      ],
    },
    {
      id: 'investimento-proposta',
      nome: 'Investimento e proposta',
      icone: DollarSign,
      descricao: 'Valores, regras de economia, regras de compensação e formas de pagamento.',
      perguntas: [
        {
          id: 'faq-9',
          pergunta: 'O que influencia o valor da proposta solar?',
          resposta: (
            <p>
              O investimento varia de acordo com a quantidade de módulos fotovoltaicos necessária para suprir sua demanda, a potência e tecnologia do inversor, o tipo de estrutura de fixação adequado para o seu telhado e a complexidade do percurso elétrico do imóvel. Por isso, a proposta é calculada individualmente para o seu imóvel, sem tabelas genéricas.
            </p>
          ),
        },
        {
          id: 'faq-10',
          pergunta: 'Como é avaliado o potencial de economia na conta de luz?',
          resposta: (
            <p>
              O potencial é calculado comparando a quantidade de energia que o sistema é capaz de gerar anualmente no seu telhado com o seu consumo histórico faturado. A energia gerada durante o dia abastece o imóvel e o excedente é injetado na rede da concessionária, gerando créditos que compensam o consumo noturno ou em dias chuvosos.
            </p>
          ),
        },
        {
          id: 'faq-11',
          pergunta: 'Minha conta de luz pode ser zerada com energia solar?',
          resposta: (
            <p>
              Não é correto prometer conta zerada. Em sistemas conectados à rede (on-grid), mesmo que sua geração cubra 100% dos kWh consumidos, continuam sendo cobrados na fatura o custo de disponibilidade da concessionária (taxa mínima de acordo com o padrão monofásico, bifásico ou trifásico) e a taxa municipal de iluminação pública (CIP/COSIP), conforme a legislação do setor elétrico.
            </p>
          ),
        },
        {
          id: 'faq-12',
          pergunta: 'Como consultar as opções e condições de pagamento disponíveis?',
          resposta: (
            <div className="space-y-2">
              <p>
                As condições comerciais, incluindo pagamento à vista ou opções de financiamento com carência e parcelamento através de instituições financeiras parceiras, são apresentadas na proposta técnica após o dimensionamento do sistema. A aprovação de crédito e taxas de financiamento dependem da análise individual da instituição financeira.
              </p>
              <div className="pt-1">
                <Link to="/pedir-avaliacao" className="text-xs font-bold text-[#023399] hover:underline inline-flex items-center gap-1">
                  <span>Pedir proposta e consultar condições</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: 'acompanhamento-manutencao',
      nome: 'Acompanhamento e manutenção',
      icone: Wrench,
      descricao: 'Monitoramento pelo aplicativo, limpeza dos módulos e suporte técnico contínuo.',
      perguntas: [
        {
          id: 'faq-13',
          pergunta: 'Como funciona o acompanhamento após a instalação do sistema?',
          resposta: (
            <p>
              Após a conexão do sistema à rede, nossa equipe orienta você sobre a leitura das primeiras faturas para conferir os créditos de compensação da distribuidora e disponibiliza um canal direto de contato pelo WhatsApp para tirar dúvidas rotineiras sobre a operação dos equipamentos.
            </p>
          ),
        },
        {
          id: 'faq-14',
          pergunta: 'Como acompanho a geração de energia no dia a dia?',
          resposta: (
            <p>
              O inversor é conectado à rede Wi-Fi do seu imóvel e envia dados em tempo real para um aplicativo de celular e computador. Pelo aplicativo, você pode visualizar quanta energia os módulos estão gerando no momento, o total acumulado no dia, no mês e no ano, além do status de funcionamento do sistema.
            </p>
          ),
        },
        {
          id: 'faq-15',
          pergunta: 'Posso solicitar avaliação ou revisão de um sistema solar já existente?',
          resposta: (
            <div className="space-y-2">
              <p>
                Sim. Atendemos proprietários que já possuem módulos fotovoltaicos instalados e necessitam de vistoria técnica, diagnóstico de falhas no inversor, reconexão de monitoramento ou checagem das conexões elétricas. O escopo e a viabilidade do serviço dependem da marca e das condições físicas dos equipamentos existentes.
              </p>
              <div className="pt-1">
                <a
                  href={whatsappDuvidasUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#023399] hover:underline inline-flex items-center gap-1"
                >
                  <span>Conversar sobre meu sistema instalado no WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ),
        },
        {
          id: 'faq-16',
          pergunta: 'Os módulos solares precisam de limpeza frequente?',
          resposta: (
            <p>
              Como os módulos são instalados com inclinação adequada, a própria água da chuva ajuda na remoção superficial da poeira. No entanto, em períodos secos prolongados ou locais próximos a vias movimentadas, fezes de pássaros e fuligem podem se acumular e reduzir a captação solar. Recomenda-se a limpeza periódica utilizando apenas água limpa e panos ou esponjas macias, sempre com o sistema desligado e sem produtos abrasivos.
            </p>
          ),
        },
      ],
    },
  ];

  // Search logic across all questions
  const isSearching = searchTerm.trim().length > 0;
  const searchResults: { categoryName: string; faq: FAQQuestion }[] = [];

  if (isSearching) {
    const term = searchTerm.toLowerCase();
    categories.forEach((cat) => {
      cat.perguntas.forEach((q) => {
        const perguntaMatch = q.pergunta.toLowerCase().includes(term);
        const respostaMatch =
          typeof q.resposta === 'string'
            ? q.resposta.toLowerCase().includes(term)
            : false;
        if (perguntaMatch || respostaMatch) {
          searchResults.push({ categoryName: cat.nome, faq: q });
        }
      });
    });
  }

  const currentCategoryObj = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <div className="bg-[#F5F7FA]">
      
      {/* Abertura da Página */}
      <PageHeader
        badge="Esclarecimentos Transparentes"
        title="Tire suas dúvidas sobre energia solar."
        subtitle="Respostas sinceras e fundamentadas sobre viabilidade, custos, homologação e manutenção para orientar sua decisão com segurança."
        breadcrumbLabel="Dúvidas"
      />

      {/* Transição suave: Header Azul Escuro (#071C45) → Barra de Apoio (Branco) */}
      <SectionTransition type="dark-to-white" />

      {/* Barra de Apoio e Contato Direto */}
      <section className="py-6 sm:py-8 bg-white">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="p-2.5 rounded-full bg-blue-50 text-[#023399] shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-[#46556B]">
                Reunimos <strong>16 respostas essenciais</strong> organizadas por tema para facilitar sua consulta.
              </p>
            </div>

            <a
              href={whatsappDuvidasUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#023399] hover:bg-[#071C45] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-all shrink-0 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#F9B500]" />
              <span>Conversar no WhatsApp</span>
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Transição suave: Branco → Cinza Claro (#F5F7FA) */}
      <SectionTransition type="white-to-gray" />

      {/* Conteúdo Principal de Dúvidas */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Campo de Busca Rápida */}
          <ScrollReveal className="max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="relative">
              <Search className="w-5 h-5 text-[#46556B] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Pesquisar por assunto (ex: telhado, homologação, conta de luz, prazo, inversor)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-[#D6DFEC] text-sm sm:text-base text-[#071C45] bg-white focus:outline-none focus:ring-2 focus:ring-[#023399] shadow-sm transition-all"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#46556B] hover:text-[#071C45] bg-slate-100 px-2 py-1 rounded"
                >
                  Limpar
                </button>
              )}
            </div>
          </ScrollReveal>

          {/* Se estiver buscando, mostra lista filtrada */}
          {isSearching ? (
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="text-sm font-bold text-[#071C45] mb-2 flex items-center justify-between">
                <span>Resultados para "{searchTerm}" ({searchResults.length})</span>
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-xs text-[#023399] hover:underline"
                >
                  Voltar à navegação por categorias
                </button>
              </div>

              {searchResults.length > 0 ? (
                searchResults.map(({ categoryName, faq }) => {
                  const isOpen = openIds.includes(faq.id);
                  return (
                    <div
                      key={faq.id}
                      className="border border-[#D6DFEC] rounded-2xl overflow-hidden bg-white shadow-2xs"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(faq.id)}
                        aria-expanded={isOpen}
                        aria-controls={`search-answer-${faq.id}`}
                        className="w-full flex items-center justify-between gap-4 p-5 text-left font-bold text-base sm:text-lg text-[#071C45] hover:text-[#023399] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399] cursor-pointer"
                      >
                        <div className="space-y-1">
                          <span className="text-[11px] font-bold text-[#023399] uppercase tracking-wider block">
                            {categoryName}
                          </span>
                          <span>{faq.pergunta}</span>
                        </div>
                        <div
                          className={`p-1.5 rounded-full bg-slate-100 text-[#071C45] shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 bg-[#023399] text-white' : ''
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      <div
                        id={`search-answer-${faq.id}`}
                        role="region"
                        className={`px-5 pb-5 text-sm sm:text-base text-[#46556B] leading-relaxed border-t border-[#D6DFEC]/60 pt-4 ${
                          isOpen ? 'block' : 'hidden'
                        }`}
                      >
                        {faq.resposta}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="p-8 text-center bg-white rounded-2xl border border-[#D6DFEC] space-y-3">
                  <p className="text-sm text-[#46556B]">
                    Não encontramos respostas contendo "{searchTerm}".
                  </p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="text-xs font-bold text-[#023399] hover:underline"
                  >
                    Ver todas as categorias
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Navegação por 4 Categorias Temáticas */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Category Selector Tabs */}
              <div className="lg:col-span-4 space-y-2 sticky top-24">
                <span className="text-xs font-bold text-[#46556B] uppercase tracking-wider px-2 block mb-1">
                  Categorias de Dúvidas
                </span>

                {categories.map((cat) => {
                  const Icon = cat.icone;
                  const isSelected = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-[#023399] text-white border-[#023399] shadow-md'
                          : 'bg-white text-[#071C45] border-[#D6DFEC] hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-xl shrink-0 ${
                            isSelected ? 'bg-white/15 text-[#F9B500]' : 'bg-[#F5F7FA] text-[#023399]'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-sm leading-snug">{cat.nome}</h3>
                          <span
                            className={`text-xs ${
                              isSelected ? 'text-white/80' : 'text-[#46556B]'
                            }`}
                          >
                            {cat.perguntas.length} perguntas
                          </span>
                        </div>
                      </div>

                      <ArrowRight
                        className={`w-4 h-4 shrink-0 transition-transform ${
                          isSelected ? 'translate-x-1 text-white' : 'text-slate-300'
                        }`}
                      />
                    </button>
                  );
                })}

                {/* Contextual Link to Process */}
                <div className="p-4 rounded-2xl bg-white border border-[#D6DFEC] mt-4 space-y-2 text-xs text-[#46556B]">
                  <p className="font-semibold text-[#071C45] flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-[#023399]" />
                    <span>Quer ver o fluxo completo?</span>
                  </p>
                  <p>
                    Confira a explicação detalhada do estudo à entrega na página Como Funciona.
                  </p>
                  <Link
                    to="/como-funciona"
                    className="inline-flex items-center gap-1 font-bold text-[#023399] hover:underline pt-1"
                  >
                    <span>Ver o passo a passo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Accordion Questions for Selected Category */}
              <div className="lg:col-span-8 space-y-4">
                
                {/* Category Header */}
                <div className="bg-transparent sm:bg-white border-0 sm:border border-[#D6DFEC] rounded-2xl p-1 sm:p-6 mb-2">
                  <span className="text-xs font-bold text-[#023399] uppercase tracking-wider block mb-1">
                    Categoria Selecionada
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#071C45]">
                    {currentCategoryObj.nome}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#46556B] mt-1">
                    {currentCategoryObj.descricao}
                  </p>
                </div>

                {/* Accordions strictly in the DOM */}
                {currentCategoryObj.perguntas.map((faq) => {
                  const isOpen = openIds.includes(faq.id);
                  return (
                    <div
                      key={faq.id}
                      className="border border-[#D6DFEC] rounded-2xl overflow-hidden bg-white shadow-2xs transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(faq.id)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${faq.id}`}
                        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left font-bold text-base sm:text-lg text-[#071C45] hover:text-[#023399] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399] cursor-pointer"
                      >
                        <span className="flex items-center gap-3">
                          <HelpCircle className="w-5 h-5 text-[#023399] shrink-0" />
                          <span>{faq.pergunta}</span>
                        </span>
                        <div
                          className={`p-1.5 rounded-full bg-slate-100 text-[#071C45] shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 bg-[#023399] text-white' : ''
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      <div
                        id={`faq-answer-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-question-${faq.id}`}
                        className={`px-5 sm:px-6 pb-6 text-sm sm:text-base text-[#46556B] leading-relaxed border-t border-[#D6DFEC]/60 pt-4 ${
                          isOpen ? 'block' : 'hidden'
                        }`}
                      >
                        {faq.resposta}
                      </div>
                    </div>
                  );
                })}

              </div>

            </div>
          )}

        </div>
      </section>

      {/* Transição suave: Cinza Claro (#F5F7FA) → Azul Escuro (#071C45) */}
      <SectionTransition type="gray-to-dark" />

      {/* Encerramento: "Não encontrou sua dúvida?" com botões para WhatsApp e /pedir-avaliacao */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#071C45] via-[#023399] to-[#071C45] text-white">
        <ScrollReveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#F9B500] uppercase bg-white/10 px-3 py-1 rounded-full">
            Atendimento Direto
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Não encontrou sua dúvida?
          </h2>

          <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe técnica e comercial está à disposição para tirar qualquer dúvida específica sobre o seu telhado, consumo ou localização.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={whatsappDuvidasUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#023399] hover:bg-[#071C45] border border-white/20 text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-lg transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#F9B500]" />
              <span>Tirar dúvida no WhatsApp</span>
            </motion.a>

            <MotionLink
              to="/pedir-avaliacao"
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#F9B500] hover:bg-[#e0a300] text-[#071C45] font-extrabold text-base px-8 py-4 rounded-xl shadow-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Pedir avaliação do imóvel</span>
              <ArrowRight className="w-5 h-5" />
            </MotionLink>
          </div>

          <p className="text-xs text-white/70 pt-2">
            Atendimento em horário comercial de segunda a sábado. Base própria em Honório Gurgel, Rio de Janeiro, RJ.
          </p>
        </ScrollReveal>
      </section>

    </div>
  );
};
