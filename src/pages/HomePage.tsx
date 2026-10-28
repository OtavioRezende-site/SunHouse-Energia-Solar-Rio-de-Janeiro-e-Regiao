import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Star,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Home,
  Building2,
  Wrench,
  Compass,
  FileCheck,
  Hammer,
  Activity,
  HelpCircle,
  ChevronDown,
  Check
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { Hero } from '../components/Hero';
import { RegionalSection } from '../components/RegionalSection';
import { SectionTransition } from '../components/SectionTransition';
import { ScrollReveal } from '../components/ScrollReveal';
import { motion, useReducedMotion } from 'motion/react';
import { COMPANY, FAQS, PROJECTS } from '../data/companyData';
import { buildQuickWhatsAppLink } from '../utils/whatsapp';

const MotionLink = motion.create(Link);

export const HomePage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Top 3 essential FAQs strictly as requested
  const essentialFaqs = FAQS.slice(0, 3);
  const [openFaqId, setOpenFaqId] = useState<string | null>(essentialFaqs[0].id);

  // Short selection of 3 authentic project images from Instagram
  const selectedProjects = PROJECTS.slice(0, 3);

  const whatsappGeneralUrl = buildQuickWhatsAppLink(
    'Olá, equipe SunHouse! Gostaria de conversar sobre um projeto de energia solar para o meu imóvel.'
  );

  return (
    <div className="bg-[#F5F7FA]">
      
      {/* 1. Hero Cinematográfica */}
      <Hero />

      {/* Transição suave estática: Hero (#071C45) → Apresentação (Branco) */}
      <SectionTransition type="dark-to-white" />

      {/* 2. Apresentação Breve da SunHouse & Reputação Confirmada */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Narrative */}
            <ScrollReveal className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#023399] uppercase bg-[#023399]/10 px-3 py-1 rounded-full">
                Sobre a SunHouse
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071C45] tracking-tight leading-tight">
                Engenharia solar próxima, transparente e com equipe local.
              </h2>

              <p className="text-base sm:text-lg text-[#46556B] leading-relaxed">
                Com sede em Honório Gurgel, <strong>Rio de Janeiro (RJ)</strong>, a <strong>{COMPANY.nome}</strong> atua diretamente em Rio de Janeiro, Baixada Fluminense, Zona Norte, Zona Oeste e em toda a Região Metropolitana (raio de até 50 km).
              </p>

              <p className="text-sm sm:text-base text-[#46556B] leading-relaxed">
                Sob a liderança de Carlos Alberto, nossa equipe cuida de todas as fases do seu sistema fotovoltaico: estudo de viabilidade, dimensionamento do consumo, homologação completa na Light e Enel, instalação de carregadores Wallbox e serviços especializados de eletricista.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-[#071C45]">
                <span className="inline-flex items-center gap-1.5 bg-[#F5F7FA] border border-[#D6DFEC] px-3 py-1.5 rounded-lg">
                  <MapPin className="w-3.5 h-3.5 text-[#023399]" />
                  Base em Honório Gurgel — Rio de Janeiro, RJ
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#F5F7FA] border border-[#D6DFEC] px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#023399]" />
                  Homologação Light & Enel inclusa
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#F5F7FA] border border-[#D6DFEC] px-3 py-1.5 rounded-lg">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#023399]" />
                  Equipe técnica e eletricistas próprios
                </span>
              </div>
            </ScrollReveal>

            {/* Right Verified Reputation Card (Preserves numbers statically without counter animations) */}
            <ScrollReveal delay={0.08} className="lg:col-span-5 bg-[#F5F7FA] border border-[#D6DFEC] rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-[#D6DFEC] pb-4">
                <div>
                  <span className="text-xs font-bold text-[#46556B] uppercase tracking-wide">
                    Google Meu Negócio
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-3xl font-black text-[#071C45]">{COMPANY.googleMaps.nota}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F9B500] text-[#F9B500]" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-sm font-bold text-[#071C45]">
                    {COMPANY.googleMaps.totalAvaliacoes}+ avaliações
                  </span>
                  <p className="text-[11px] text-[#46556B]">
                    {COMPANY.googleMaps.dataConsulta}
                  </p>
                </div>
              </div>

              {/* Quotation preview */}
              <div className="space-y-3 text-xs sm:text-sm text-[#46556B] italic">
                <p className="bg-white p-3 rounded-xl border border-[#D6DFEC] shadow-2xs">
                  “Muito bons, atenciosos e rápidos”
                  <span className="block not-italic text-[11px] text-[#46556B]/80 mt-1 font-medium">
                    — Avaliação pública verificada no Google
                  </span>
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY.googleMaps.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-[#D6DFEC] text-[#023399] font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl transition-colors"
                >
                  <span>Conferir avaliações no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* Transição suave estática: Branco → Cinza Claro (#F5F7FA) */}
      <SectionTransition type="white-to-gray" />

      {/* 3. Visão Geral das Soluções */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#023399] uppercase bg-[#023399]/10 px-3 py-1 rounded-full mb-3">
                Visão Geral
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071C45] tracking-tight">
                Um projeto que começa pela sua realidade
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#46556B] leading-relaxed">
                Antes de escolher equipamentos, entendemos como você usa energia e o que o espaço do seu imóvel permite.
              </p>
            </div>

            <Link
              to="/solucoes"
              className="inline-flex items-center gap-2 font-bold text-sm text-[#023399] hover:text-[#071C45] hover:underline shrink-0"
            >
              <span>Conhecer as soluções completas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>

          {/* Solutions Overview: Editorial list on mobile, 3-column grid on desktop */}
          <div className="divide-y divide-[#D6DFEC] md:divide-y-0 md:grid md:grid-cols-3 md:gap-6 lg:gap-8">
            
            {/* Residencial */}
            <ScrollReveal delay={0.04} className="py-6 first:pt-0 last:pb-0 md:py-0">
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -5, transition: { duration: 0.2 } }}
                className="h-full bg-transparent md:bg-white border-0 md:border md:border-[#D6DFEC] rounded-none md:rounded-2xl p-0 md:p-6 md:sm:p-7 flex flex-col justify-between shadow-none md:shadow-sm hover:border-[#023399]/50 transition-colors group"
              >
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-3 md:block">
                    <div className="p-2.5 md:p-3 w-fit rounded-xl bg-blue-50 text-[#023399] group-hover:bg-[#023399] group-hover:text-white transition-colors shrink-0">
                      <Home className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-[#071C45]">Para sua casa</h3>
                      <p className="text-xs text-[#023399] font-semibold mt-0.5">Sistemas Residenciais</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#46556B] leading-relaxed">
                    Avaliação detalhada do consumo da família e da cobertura do telhado para gerar economia com conforto e segurança.
                  </p>
                </div>

                <div className="pt-3 mt-3 md:pt-6 md:mt-6 border-t-0 md:border-t md:border-[#D6DFEC]">
                  <Link
                    to="/pedir-avaliacao?tipo=Casa"
                    className="text-xs sm:text-sm font-bold text-[#023399] hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>Avaliar imóvel residencial</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Comercial */}
            <ScrollReveal delay={0.1} className="py-6 first:pt-0 last:pb-0 md:py-0">
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -5, transition: { duration: 0.2 } }}
                className="h-full bg-transparent md:bg-white border-0 md:border md:border-[#D6DFEC] rounded-none md:rounded-2xl p-0 md:p-6 md:sm:p-7 flex flex-col justify-between shadow-none md:shadow-sm hover:border-[#023399]/50 transition-colors group"
              >
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-3 md:block">
                    <div className="p-2.5 md:p-3 w-fit rounded-xl bg-blue-50 text-[#023399] group-hover:bg-[#023399] group-hover:text-white transition-colors shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-[#071C45]">Para seu negócio</h3>
                      <p className="text-xs text-[#023399] font-semibold mt-0.5">Sistemas Comerciais</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#46556B] leading-relaxed">
                    Dimensionamento alinhado ao consumo diurno de energia da sua empresa, reduzindo custos fixos operacionais.
                  </p>
                </div>

                <div className="pt-3 mt-3 md:pt-6 md:mt-6 border-t-0 md:border-t md:border-[#D6DFEC]">
                  <Link
                    to="/pedir-avaliacao?tipo=Comercio"
                    className="text-xs sm:text-sm font-bold text-[#023399] hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>Avaliar imóvel comercial</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Sistemas Existentes & Suporte */}
            <ScrollReveal delay={0.16} className="py-6 first:pt-0 last:pb-0 md:py-0">
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -5, transition: { duration: 0.2 } }}
                className="h-full bg-transparent md:bg-white border-0 md:border md:border-[#D6DFEC] rounded-none md:rounded-2xl p-0 md:p-6 md:sm:p-7 flex flex-col justify-between shadow-none md:shadow-sm hover:border-[#023399]/50 transition-colors group"
              >
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-3 md:block">
                    <div className="p-2.5 md:p-3 w-fit rounded-xl bg-blue-50 text-[#023399] group-hover:bg-[#023399] group-hover:text-white transition-colors shrink-0">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-[#071C45]">Sistemas existentes</h3>
                      <p className="text-xs text-[#023399] font-semibold mt-0.5">Manutenção & Pós-Venda</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#46556B] leading-relaxed">
                    Já possui placas solares? Realizamos vistorias técnicas, suporte a inversores e acompanhamento periódico.
                  </p>
                </div>

                <div className="pt-3 mt-3 md:pt-6 md:mt-6 border-t-0 md:border-t md:border-[#D6DFEC]">
                  <Link
                    to="/solucoes"
                    className="text-xs sm:text-sm font-bold text-[#023399] hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>Ver serviços de manutenção</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </ScrollReveal>

          </div>

          <ScrollReveal delay={0.12} className="mt-8 text-center">
            <MotionLink
              to="/solucoes"
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 bg-[#023399] hover:bg-[#071C45] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399]"
            >
              <span>Conhecer as soluções</span>
              <ArrowRight className="w-4 h-4" />
            </MotionLink>
          </ScrollReveal>

        </div>
      </section>

      {/* Transição suave estática: Cinza Claro (#F5F7FA) → Azul Escuro (#071C45) */}
      <SectionTransition type="gray-to-dark" />

      {/* 4. Resumo do Processo em 4 Etapas */}
      <section className="py-16 sm:py-20 bg-[#071C45] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#F9B500] uppercase bg-white/10 px-3 py-1 rounded-full mb-3">
                Processo
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Do primeiro estudo ao sistema em operação
              </h2>
              <p className="mt-2 text-sm sm:text-base text-white/80 leading-relaxed">
                Quatro passos claros e transparentes, acompanhados de perto por nossa equipe em Rio de Janeiro e região.
              </p>
            </div>

            <Link
              to="/como-funciona"
              className="inline-flex items-center gap-2 font-bold text-sm text-[#F9B500] hover:underline shrink-0"
            >
              <span>Entender como funciona</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>

          {/* Process: Continuous vertical timeline on mobile, 4-column connected cards on desktop */}
          <div className="relative pl-9 sm:pl-0 space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            
            {/* Discrete connecting vertical line on mobile */}
            <div
              className="sm:hidden absolute left-3.5 top-3.5 bottom-3.5 w-px bg-white/25 pointer-events-none"
              aria-hidden="true"
            />

            {/* 01 Entender */}
            <ScrollReveal delay={0.03} className="relative">
              <div
                className="sm:hidden absolute -left-9 top-0.5 w-7 h-7 rounded-full bg-[#F9B500] text-[#071C45] font-black text-xs flex items-center justify-center shadow-xs shrink-0"
                aria-hidden="true"
              >
                01
              </div>
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -4, transition: { duration: 0.2 } }}
                className="h-full bg-transparent sm:bg-white/5 sm:hover:bg-white/10 border-0 sm:border sm:border-white/10 rounded-none sm:rounded-2xl p-0 sm:p-5 sm:sm:p-6 space-y-1 sm:space-y-3 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="hidden sm:inline-block text-2xl font-black text-[#F9B500]">01</span>
                  <Compass className="hidden sm:block w-5 h-5 text-white/70" />
                </div>
                <h3 className="font-bold text-base text-white">Entender</h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  Você conta como consome energia e onde será o projeto.
                </p>
              </motion.div>
            </ScrollReveal>

            {/* 02 Planejar */}
            <ScrollReveal delay={0.08} className="relative">
              <div
                className="sm:hidden absolute -left-9 top-0.5 w-7 h-7 rounded-full bg-[#F9B500] text-[#071C45] font-black text-xs flex items-center justify-center shadow-xs shrink-0"
                aria-hidden="true"
              >
                02
              </div>
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -4, transition: { duration: 0.2 } }}
                className="h-full bg-transparent sm:bg-white/5 sm:hover:bg-white/10 border-0 sm:border sm:border-white/10 rounded-none sm:rounded-2xl p-0 sm:p-5 sm:sm:p-6 space-y-1 sm:space-y-3 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="hidden sm:inline-block text-2xl font-black text-[#F9B500]">02</span>
                  <FileCheck className="hidden sm:block w-5 h-5 text-white/70" />
                </div>
                <h3 className="font-bold text-base text-white">Planejar</h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  A equipe avalia o espaço e apresenta a solução e as condições.
                </p>
              </motion.div>
            </ScrollReveal>

            {/* 03 Implantar */}
            <ScrollReveal delay={0.13} className="relative">
              <div
                className="sm:hidden absolute -left-9 top-0.5 w-7 h-7 rounded-full bg-[#F9B500] text-[#071C45] font-black text-xs flex items-center justify-center shadow-xs shrink-0"
                aria-hidden="true"
              >
                03
              </div>
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -4, transition: { duration: 0.2 } }}
                className="h-full bg-transparent sm:bg-white/5 sm:hover:bg-white/10 border-0 sm:border sm:border-white/10 rounded-none sm:rounded-2xl p-0 sm:p-5 sm:sm:p-6 space-y-1 sm:space-y-3 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="hidden sm:inline-block text-2xl font-black text-[#F9B500]">03</span>
                  <Hammer className="hidden sm:block w-5 h-5 text-white/70" />
                </div>
                <h3 className="font-bold text-base text-white">Implantar</h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  Instalação e encaminhamento da homologação conforme o projeto.
                </p>
              </motion.div>
            </ScrollReveal>

            {/* 04 Acompanhar */}
            <ScrollReveal delay={0.18} className="relative">
              <div
                className="sm:hidden absolute -left-9 top-0.5 w-7 h-7 rounded-full bg-[#F9B500] text-[#071C45] font-black text-xs flex items-center justify-center shadow-xs shrink-0"
                aria-hidden="true"
              >
                04
              </div>
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -4, transition: { duration: 0.2 } }}
                className="h-full bg-transparent sm:bg-white/5 sm:hover:bg-white/10 border-0 sm:border sm:border-white/10 rounded-none sm:rounded-2xl p-0 sm:p-5 sm:sm:p-6 space-y-1 sm:space-y-3 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="hidden sm:inline-block text-2xl font-black text-[#F9B500]">04</span>
                  <Activity className="hidden sm:block w-5 h-5 text-white/70" />
                </div>
                <h3 className="font-bold text-base text-white">Acompanhar</h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  Orientação e suporte para a fase de uso do sistema.
                </p>
              </motion.div>
            </ScrollReveal>

          </div>

          <ScrollReveal delay={0.12} className="mt-8 text-center">
            <MotionLink
              to="/como-funciona"
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 bg-[#F9B500] hover:bg-[#e0a300] text-[#071C45] font-bold text-sm px-6 py-3 rounded-xl transition-colors shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#071C45]"
            >
              <span>Entender como funciona</span>
              <ArrowRight className="w-4 h-4" />
            </MotionLink>
          </ScrollReveal>

        </div>
      </section>

      {/* Transição suave estática: Azul Escuro (#071C45) → Branco */}
      <SectionTransition type="dark-to-white" />

      {/* 5. Seleção Curta de Imagens Reais de Instalações */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#023399] uppercase bg-[#023399]/10 px-3 py-1 rounded-full mb-3">
                Evidências Reais
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071C45] tracking-tight">
                Veja o trabalho que a SunHouse já compartilha
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#46556B] leading-relaxed">
                Fotos autênticas de instalações publicadas oficialmente pela SunHouse em Rio de Janeiro e Região Metropolitana.
              </p>
            </div>

            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 font-bold text-sm text-[#023399] hover:text-[#071C45] hover:underline shrink-0"
            >
              <span>Conhecer os projetos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>

          {/* Authentic Photos: Featured first project + 2 compact projects on mobile, 3-column grid on desktop */}
          <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-6 lg:gap-8">
            {selectedProjects.map((project, idx) => {
              const isFirst = idx === 0;

              if (isFirst) {
                return (
                  <ScrollReveal key={project.id} delay={idx * 0.08}>
                    <motion.div
                      whileHover={shouldReduceMotion ? undefined : { y: -5, transition: { duration: 0.2 } }}
                      className="h-full bg-[#F5F7FA] border border-[#D6DFEC] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group hover:border-[#023399]/40 transition-colors"
                    >
                      <div className="aspect-[4/3] bg-slate-200 overflow-hidden relative">
                        <img
                          src={project.arquivo}
                          alt={project.legendaSegura}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <span className="absolute top-3 left-3 bg-[#071C45]/85 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow">
                          {project.categoria}
                        </span>
                      </div>

                      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow space-y-3">
                        <div>
                          <span className="text-[11px] font-bold text-[#023399] uppercase tracking-wider">
                            {project.cidade}
                          </span>
                          <h3 className="text-base font-bold text-[#071C45] mt-1 leading-snug">
                            {project.legendaSegura}
                          </h3>
                        </div>

                        <div className="pt-3 border-t border-[#D6DFEC] flex items-center justify-between text-xs">
                          <span className="text-[#46556B]">@sunhouseenergiasolar</span>
                          <a
                            href={project.origemInstagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-[#023399] hover:underline inline-flex items-center gap-1"
                          >
                            <span>Ver post</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                );
              }

              // Compact card for 2nd and 3rd project on mobile, full card on desktop
              return (
                <ScrollReveal key={project.id} delay={idx * 0.08}>
                  <motion.div
                    whileHover={shouldReduceMotion ? undefined : { y: -5, transition: { duration: 0.2 } }}
                    className="h-full bg-[#F5F7FA] border border-[#D6DFEC] rounded-2xl p-3 md:p-0 overflow-hidden shadow-sm flex flex-row md:flex-col justify-between items-center md:items-stretch gap-3 md:gap-0 group hover:border-[#023399]/40 transition-colors"
                  >
                    <div className="w-28 sm:w-36 md:w-full aspect-[4/3] bg-slate-200 rounded-xl md:rounded-none overflow-hidden relative shrink-0">
                      <img
                        src={project.arquivo}
                        alt={project.legendaSegura}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-2 left-2 md:top-3 md:left-3 bg-[#071C45]/85 text-white text-[10px] md:text-[11px] font-bold px-2 py-0.5 md:px-2.5 md:py-1 rounded-md shadow">
                        {project.categoria}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0 md:p-5 flex flex-col justify-between flex-grow space-y-1.5 md:space-y-3">
                      <div>
                        <span className="text-[10px] md:text-[11px] font-bold text-[#023399] uppercase tracking-wider block">
                          {project.cidade}
                        </span>
                        <h3 className="text-xs sm:text-sm md:text-base font-bold text-[#071C45] mt-0.5 md:mt-1 leading-snug line-clamp-2 md:line-clamp-none">
                          {project.legendaSegura}
                        </h3>
                      </div>

                      <div className="pt-1 md:pt-3 border-t-0 md:border-t border-[#D6DFEC] flex items-center justify-between text-xs">
                        <span className="hidden md:inline text-[#46556B]">@sunhouseenergiasolar</span>
                        <a
                          href={project.origemInstagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-[#023399] hover:underline inline-flex items-center gap-1 text-[11px] sm:text-xs"
                        >
                          <span>Ver post</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.12} className="mt-8 text-center">
            <MotionLink
              to="/projetos"
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 bg-[#023399] hover:bg-[#071C45] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399]"
            >
              <span>Conhecer os projetos</span>
              <ArrowRight className="w-4 h-4" />
            </MotionLink>
          </ScrollReveal>

        </div>
      </section>

      {/* Transição suave estática: Branco → Cinza Claro (#F5F7FA) */}
      <SectionTransition type="white-to-gray" />

      {/* 6. Até Três Dúvidas Essenciais */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#D6DFEC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#023399] uppercase bg-[#023399]/10 px-3 py-1 rounded-full mb-3">
              Perguntas Frequentes
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071C45] tracking-tight">
              Antes de decidir, tire suas dúvidas
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#46556B] leading-relaxed">
              Três respostas essenciais que todo proprietário de imóvel precisa saber.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="space-y-3.5">
            {essentialFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-[#D6DFEC] rounded-2xl overflow-hidden bg-white shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left font-bold text-base sm:text-lg text-[#071C45] hover:text-[#023399] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399] cursor-pointer"
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
                    className={`px-5 pb-5 text-sm sm:text-base text-[#46556B] leading-relaxed border-t border-[#D6DFEC]/60 pt-3.5 ${
                      isOpen ? 'block' : 'hidden'
                    }`}
                  >
                    <p>{faq.resposta}</p>
                  </div>
                </div>
              );
            })}
          </ScrollReveal>

          <ScrollReveal delay={0.12} className="mt-8 text-center">
            <Link
              to="/duvidas"
              className="inline-flex items-center justify-center gap-2 text-sm font-bold text-[#023399] hover:underline"
            >
              <span>Ver todas as dúvidas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>

        </div>
      </section>

      {/* 7. Localização, Sede, Mapa e Rotas */}
      <RegionalSection className="border-b-0" />

      {/* Transição suave estática: Cinza Claro (#F5F7FA) → Branco */}
      <SectionTransition type="gray-to-white" />

      {/* 8. Encerramento Convidando para Avaliação do Imóvel */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="bg-gradient-to-br from-[#071C45] via-[#023399] to-[#071C45] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#F9B500] uppercase bg-white/10 px-3 py-1 rounded-full">
                Próximo Passo
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Vamos descobrir o potencial do seu imóvel?
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
                Conte um pouco sobre seu consumo. A SunHouse ajuda você a entender o próximo passo com transparência e responsabilidade técnica em Rio de Janeiro e região.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <MotionLink
                  to="/pedir-avaliacao"
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#F9B500] hover:bg-[#e0a300] text-[#071C45] font-extrabold text-base px-8 py-4 rounded-xl shadow-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Quero avaliar meu imóvel</span>
                  <ArrowRight className="w-5 h-5" />
                </MotionLink>

                <motion.a
                  href={whatsappGeneralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/15 hover:bg-white/25 border border-white/25 text-white font-semibold text-base px-7 py-4 rounded-xl backdrop-blur-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <WhatsAppIcon className="w-5 h-5 text-[#F9B500]" />
                  <span>Conversar no WhatsApp</span>
                </motion.a>
              </div>

              <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/75">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#F9B500]" />
                  Estudo sem compromisso inicial
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#F9B500]" />
                  Atendimento em Rio de Janeiro e Região
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#F9B500]" />
                  Dados tratados com privacidade
                </span>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Transição suave estática: Branco → Rodapé Azul Escuro (#071C45) */}
      <SectionTransition type="white-to-dark" />

    </div>
  );
};
