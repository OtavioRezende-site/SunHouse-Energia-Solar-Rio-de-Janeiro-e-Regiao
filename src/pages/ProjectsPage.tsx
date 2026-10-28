import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Instagram,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Home,
  Building2,
  Info
} from 'lucide-react';
import { motion, AnimatePresence, LayoutGroup, useReducedMotion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { SectionTransition } from '../components/SectionTransition';
import { ScrollReveal } from '../components/ScrollReveal';
import { PROJECTS, COMPANY } from '../data/companyData';
import { ProjectEvidence } from '../types';
import { gentleDecelEase } from '../utils/motionTransitions';
import { getAssetUrl } from '../utils/assetPath';

type FilterType = 'Todos' | 'Residencial' | 'Comercial';

const MotionLink = motion.create(Link);

export const ProjectsPage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Update document title and meta description for SEO
  useEffect(() => {
    document.title = 'Projetos e Instalações Reais | SunHouse Energia Solar';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Conheça projetos e instalações fotovoltaicas residenciais e comerciais compartilhadas no perfil oficial da SunHouse Energia Solar em Rio de Janeiro e região.'
      );
    }
  }, []);

  const [selectedFilter, setSelectedFilter] = useState<FilterType>('Todos');
  const [lightboxProject, setLightboxProject] = useState<ProjectEvidence | null>(null);

  // Store last active project for exiting state
  const lastActiveProjectRef = useRef<ProjectEvidence | null>(null);
  if (lightboxProject) {
    lastActiveProjectRef.current = lightboxProject;
  }
  const displayProject = lightboxProject || lastActiveProjectRef.current;

  // Refs for accessible focus management
  const triggerRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const filteredProjects = selectedFilter === 'Todos'
    ? PROJECTS
    : PROJECTS.filter((p) => p.categoria === selectedFilter);

  // Lock scroll immediately when lightbox opens
  useEffect(() => {
    if (lightboxProject) {
      document.body.style.overflow = 'hidden';
    }
  }, [lightboxProject]);

  // Coordinate scroll unlocking and focus restoration with end of exit animation
  const handleLightboxExitComplete = useCallback(() => {
    document.body.style.overflow = '';
    if (triggerRef.current) {
      triggerRef.current.focus({ preventScroll: true });
    }
  }, []);

  const openLightbox = (project: ProjectEvidence, e: React.MouseEvent<HTMLElement>) => {
    triggerRef.current = e.currentTarget;
    setLightboxProject(project);
  };

  const closeLightbox = () => {
    setLightboxProject(null);
  };

  const handleNextLightbox = useCallback(() => {
    if (!lightboxProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === lightboxProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setLightboxProject(filteredProjects[nextIndex]);
  }, [lightboxProject, filteredProjects]);

  const handlePrevLightbox = useCallback(() => {
    if (!lightboxProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === lightboxProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setLightboxProject(filteredProjects[prevIndex]);
  }, [lightboxProject, filteredProjects]);

  // Lightbox keyboard controls and accessible focus trap
  useEffect(() => {
    if (!lightboxProject) return;

    // Focus close button on open
    const focusTimer = setTimeout(() => {
      const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable && focusable.length > 0) {
        focusable[0].focus();
      }
    }, 40);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextLightbox();
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevLightbox();
        return;
      }
      if (e.key === 'Tab') {
        if (!modalRef.current) return;
        const focusable = Array.from(
          modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.hasAttribute('disabled') && el.offsetParent !== null);

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxProject, handleNextLightbox, handlePrevLightbox]);

  const filterOptions: { id: FilterType; label: string; icon?: React.ReactNode; count: number }[] = [
    {
      id: 'Todos',
      label: 'Todos',
      count: PROJECTS.length,
    },
    {
      id: 'Residencial',
      label: 'Residencial',
      icon: <Home className="w-3.5 h-3.5" />,
      count: PROJECTS.filter((p) => p.categoria === 'Residencial').length,
    },
    {
      id: 'Comercial',
      label: 'Comercial',
      icon: <Building2 className="w-3.5 h-3.5" />,
      count: PROJECTS.filter((p) => p.categoria === 'Comercial').length,
    },
  ];

  return (
    <div className="bg-[#F5F7FA]">
      
      {/* Abertura da Página */}
      <PageHeader
        badge="Portfólio & Evidências"
        title="Conheça projetos compartilhados pela SunHouse."
        subtitle="Explore fotografias e publicações autênticas de instalações fotovoltaicas divulgadas pela empresa no perfil oficial @sunhouseenergiasolar."
        breadcrumbLabel="Projetos"
      />

      {/* Transição suave estática: Header Azul Escuro (#071C45) → Galeria (Branco) */}
      <SectionTransition type="dark-to-white" />

      {/* Introdução e Filtros */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#D6DFEC]">
            <div className="max-w-2xl space-y-1.5">
              <span className="text-xs font-bold text-[#023399] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                Registros Confirmados
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071C45] tracking-tight">
                Instalações reais documentadas em campo
              </h2>
              <p className="text-sm sm:text-base text-[#46556B] leading-relaxed">
                Todas as imagens exibidas abaixo são publicações públicas de obras realizadas pela SunHouse. Clique nas fotos para ampliar e ver detalhes.
              </p>
            </div>

            {/*
              Filter buttons with dedicated LayoutGroup and layoutId sliding indicator.
              Preserves exact labels, icons, and counts.
            */}
            <LayoutGroup id="projects-filter-group">
              <div className="inline-flex flex-wrap p-1.5 rounded-2xl bg-[#F5F7FA] border border-[#D6DFEC] shrink-0 self-start md:self-center gap-1">
                {filterOptions.map((opt) => {
                  const isSelected = selectedFilter === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedFilter(opt.id)}
                      className="relative px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399]"
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="active-filter-indicator"
                          className="absolute inset-0 bg-[#023399] rounded-xl shadow-sm z-0"
                          transition={
                            shouldReduceMotion
                              ? { duration: 0 }
                              : { duration: 0.25, ease: gentleDecelEase }
                          }
                        />
                      )}
                      <span
                        className={`relative z-10 flex items-center gap-1.5 transition-colors ${
                          isSelected ? 'text-white' : 'text-[#46556B] hover:text-[#071C45]'
                        }`}
                      >
                        {opt.icon}
                        <span>
                          {opt.label} ({opt.count})
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </LayoutGroup>
          </ScrollReveal>

          {/*
            Galeria Editorial:
            - Rendered as unified grid using project.id as stable identity (never array index)
            - index === 0 receives full width (md:col-span-2) as the featured showcase
            - Remaining items compose the 2-column gallery
            - Uses layout="position" to prevent image/text stretching or distortion
            - Duration: 250 ms, no large shadow/blur animations
          */}
          <div className="pt-10 sm:pt-12">
            <LayoutGroup id="projects-gallery-layout">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project, index) => {
                    const isFeatured = index === 0;

                    if (isFeatured) {
                      return (
                        <motion.div
                          key={project.id}
                          layout="position"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={
                            shouldReduceMotion
                              ? { duration: 0 }
                              : { duration: 0.25, ease: gentleDecelEase }
                          }
                          className="md:col-span-2 bg-transparent md:bg-[#F5F7FA] border-0 md:border md:border-[#D6DFEC] rounded-none md:rounded-3xl overflow-hidden shadow-none md:shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0 items-center pb-8 md:pb-0 border-b border-[#D6DFEC]/70 md:border-b-0"
                        >
                          {/* Photo container */}
                          <div className="lg:col-span-7 relative bg-slate-900 group aspect-[4/3] rounded-2xl md:rounded-none overflow-hidden">
                            <img
                              src={project.arquivo}
                              alt={project.legendaSegura}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                              onClick={(e) => openLightbox(project, e)}
                            />
                            
                            {/* Category Badge */}
                            <span className="absolute top-4 left-4 bg-[#071C45]/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow">
                              {project.categoria}
                            </span>

                            {/* Expand button */}
                            <button
                              type="button"
                              onClick={(e) => openLightbox(project, e)}
                              className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-xl backdrop-blur-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#F9B500] cursor-pointer"
                              title="Ampliar fotografia"
                              aria-label="Ampliar fotografia do projeto"
                            >
                              <Maximize2 className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Narrative column */}
                          <div className="lg:col-span-5 pt-4 md:pt-0 p-0 md:p-6 lg:p-10 space-y-3 md:space-y-4">
                            <div className="flex items-center gap-2 text-xs font-bold text-[#023399] uppercase tracking-wider">
                              <span>{project.cidade}</span>
                              <span aria-hidden="true" className="text-[#D6DFEC] md:hidden">·</span>
                              <span className="md:hidden text-[#46556B]">{project.categoria}</span>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-extrabold text-[#071C45] leading-snug">
                              {project.legendaSegura}
                            </h3>

                            <p className="text-sm text-[#46556B] leading-relaxed">
                              {project.detalhes}
                            </p>

                            <div className="pt-3 md:pt-4 border-t border-[#D6DFEC] flex items-center justify-between">
                              <span className="text-xs text-[#46556B]">
                                Fonte: Instagram oficial
                              </span>

                              <a
                                href={project.origemInstagramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#023399] hover:text-[#071C45] hover:underline"
                              >
                                <Instagram className="w-4 h-4 text-pink-600" />
                                <span>Ver post original</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      );
                    }

                    // Remaining gallery cards: Editorial style on mobile, rounded card on desktop
                    return (
                      <motion.div
                        key={project.id}
                        layout="position"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={
                          shouldReduceMotion
                            ? { duration: 0 }
                            : { duration: 0.25, ease: gentleDecelEase }
                        }
                        className="bg-transparent md:bg-[#F5F7FA] border-0 md:border md:border-[#D6DFEC] rounded-none md:rounded-3xl overflow-hidden shadow-none md:shadow-sm flex flex-col justify-between group hover:border-[#023399]/40 transition-colors pb-8 md:pb-0 border-b border-[#D6DFEC]/70 md:border-b-0 last:border-b-0"
                      >
                        <div className="relative aspect-[4/3] bg-slate-900 rounded-2xl md:rounded-none overflow-hidden">
                          <img
                            src={project.arquivo}
                            alt={project.legendaSegura}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                            onClick={(e) => openLightbox(project, e)}
                          />

                          <span className="absolute top-3 left-3 bg-[#071C45]/85 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-md shadow">
                            {project.categoria}
                          </span>

                          <button
                            type="button"
                            onClick={(e) => openLightbox(project, e)}
                            className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/80 text-white p-2 rounded-lg backdrop-blur-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#F9B500] cursor-pointer"
                            title="Ampliar fotografia"
                            aria-label="Ampliar fotografia do projeto"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="pt-4 md:pt-0 p-0 md:p-6 space-y-3 flex flex-col justify-between flex-grow">
                          <div>
                            <div className="flex items-center gap-2 text-[11px] font-bold text-[#023399] uppercase tracking-wider">
                              <span>{project.cidade}</span>
                              <span aria-hidden="true" className="text-[#D6DFEC] md:hidden">·</span>
                              <span className="md:hidden text-[#46556B]">{project.categoria}</span>
                            </div>
                            <h4 className="text-lg font-bold text-[#071C45] mt-1 leading-snug">
                              {project.legendaSegura}
                            </h4>
                            <p className="text-xs sm:text-sm text-[#46556B] mt-2 leading-relaxed">
                              {project.detalhes}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-[#D6DFEC] flex items-center justify-between text-xs">
                            <span className="text-[#46556B]">@sunhouseenergiasolar</span>
                            <a
                              href={project.origemInstagramUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-bold text-[#023399] hover:underline inline-flex items-center gap-1"
                            >
                              <Instagram className="w-3.5 h-3.5 text-pink-600" />
                              <span>Ver post original</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </LayoutGroup>
          </div>

          {/* Official Profile Badge Card */}
          <ScrollReveal delay={0.06} className="mt-12 p-6 rounded-2xl bg-white border border-[#D6DFEC] shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <img
                src={getAssetUrl('/instagram/perfil.jpg')}
                alt="Perfil oficial SunHouse Energia Solar"
                className="w-12 h-12 rounded-full object-cover border border-[#D6DFEC]"
                width={48}
                height={48}
              />
              <div>
                <h4 className="font-bold text-sm text-[#071C45]">Perfil Oficial no Instagram</h4>
                <p className="text-xs text-[#46556B]">Acompanhe vídeos de obras, vistorias em telhados e depoimentos no @sunhouseenergiasolar.</p>
              </div>
            </div>

            <a
              href={COMPANY.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#023399] hover:bg-[#071C45] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all shrink-0"
            >
              <Instagram className="w-4 h-4" />
              <span>Acompanhar a SunHouse</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </ScrollReveal>

        </div>
      </section>

      {/* Transição suave estática: Branco → Cinza Claro (#F5F7FA) */}
      <SectionTransition type="white-to-gray" />

      {/* Seção Posterior à Galeria */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="bg-white border border-[#D6DFEC] rounded-3xl p-7 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-2.5 text-xs font-bold text-[#023399] uppercase tracking-wider">
              <Info className="w-4 h-4 text-[#023399]" />
              <span>Transparência de Engenharia</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071C45] tracking-tight">
              Cada projeto depende exclusivamente das características do seu imóvel
            </h3>

            <p className="text-sm sm:text-base text-[#46556B] leading-relaxed">
              As fotos acima comprovam o padrão técnico das instalações realizadas pela equipe SunHouse. No entanto, o número de módulos, a potência gerada e o resultado final variam de acordo com:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-[#46556B]">
              <div className="p-3.5 bg-[#F5F7FA] rounded-xl border border-[#D6DFEC]">
                <strong className="block text-[#071C45] mb-1">Área útil e tipo de telha:</strong>
                Estrutura de telha cerâmica, fibrocimento, metálica ou laje de concreto.
              </div>
              <div className="p-3.5 bg-[#F5F7FA] rounded-xl border border-[#D6DFEC]">
                <strong className="block text-[#071C45] mb-1">Orientação solar e inclinação:</strong>
                Ângulo de incidência solar ao longo das estações do ano.
              </div>
              <div className="p-3.5 bg-[#F5F7FA] rounded-xl border border-[#D6DFEC]">
                <strong className="block text-[#071C45] mb-1">Mapeamento de sombras:</strong>
                Árvores no entorno, platibandas, chaminés ou prédios vizinhos.
              </div>
              <div className="p-3.5 bg-[#F5F7FA] rounded-xl border border-[#D6DFEC]">
                <strong className="block text-[#071C45] mb-1">Demanda média em kWh:</strong>
                Consumo real dos ocupantes e aparelhos instalados no local.
              </div>
            </div>

            <div className="pt-3 border-t border-[#D6DFEC] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#46556B]">
                Quer entender detalhadamente o passo a passo de um projeto?
              </span>

              <Link
                to="/como-funciona"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#023399] hover:underline"
              >
                <span>Ver o processo na página Como Funciona</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Transição suave estática: Cinza Claro (#F5F7FA) → Azul Escuro (#071C45) */}
      <SectionTransition type="gray-to-dark" />

      {/* CTA Final para Avaliação */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#071C45] via-[#023399] to-[#071C45] text-white">
        <ScrollReveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#F9B500] uppercase bg-white/10 px-3 py-1 rounded-full">
            Próximo Passo
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Quero avaliar um projeto para meu imóvel
          </h2>

          <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Envie suas informações de consumo para a equipe técnica da SunHouse planejar um sistema sob medida para sua residência ou empresa em Rio de Janeiro e região.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MotionLink
              to="/pedir-avaliacao"
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F9B500] hover:bg-[#e0a300] text-[#071C45] font-extrabold text-base px-8 py-4 rounded-xl shadow-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Quero avaliar um projeto para meu imóvel</span>
              <ArrowRight className="w-5 h-5" />
            </MotionLink>

            <motion.a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/25 text-white font-semibold text-base px-7 py-4 rounded-xl backdrop-blur-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ExternalLink className="w-4 h-4 text-[#F9B500]" />
              <span>Conversar no WhatsApp</span>
            </motion.a>
          </div>

          <p className="text-xs text-white/70 pt-2">
            Avaliação preliminar sem compromisso financeiro inicial. Atendimento em Rio de Janeiro, Baixada Fluminense e Região Metropolitana.
          </p>
        </ScrollReveal>
      </section>

      {/*
        Lightbox Modal com AnimatePresence:
        - Fundo: fade de ~160 ms
        - Painel: opacity e scale de 0.98 para 1 em 200 ms (<= 220 ms)
        - Troca de fotografia: opacity de 160 ms via AnimatePresence mode="wait", sem empilhamento
        - Desbloqueio de rolagem e retorno de foco coordenados com o término da saída (onExitComplete)
        - Focus trap e atalhos de teclado (ESC, setas) plenamente funcionais
      */}
      <AnimatePresence onExitComplete={handleLightboxExitComplete}>
        {lightboxProject && displayProject && (
          <motion.div
            key="lightbox-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={`Visualização ampliada: ${displayProject.legendaSegura}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Modal Dialog Panel */}
            <motion.div
              ref={modalRef}
              initial={{
                opacity: 0,
                scale: shouldReduceMotion ? 1 : 0.98,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: shouldReduceMotion ? 1 : 0.98,
              }}
              transition={{
                duration: shouldReduceMotion ? 0.1 : 0.2,
                ease: gentleDecelEase,
              }}
              className="relative max-w-4xl w-full bg-[#071C45] rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 px-6 border-b border-white/10 text-white bg-black/40">
                <div className="flex items-center gap-3">
                  <span className="bg-[#023399] text-white text-xs font-bold px-2.5 py-1 rounded-md">
                    {displayProject.categoria}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white/90">
                    {displayProject.cidade}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={displayProject.origemInstagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#F9B500] px-3 py-1.5 rounded-lg bg-white/10 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-pink-500" />
                    <span>Ver post original</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={closeLightbox}
                    className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F9B500] cursor-pointer"
                    aria-label="Fechar visualização ampliada"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Image Area with Navigation Buttons and Clean Opacity Switch */}
              <div className="relative flex-grow flex items-center justify-center p-3 sm:p-6 bg-slate-950/60 overflow-hidden min-h-[300px]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={displayProject.id}
                    src={displayProject.arquivo}
                    alt={displayProject.legendaSegura}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: shouldReduceMotion ? 0.05 : 0.16,
                      ease: gentleDecelEase,
                    }}
                    className="max-h-[60vh] max-w-full object-contain rounded-xl shadow-lg select-none"
                  />
                </AnimatePresence>

                {/* Prev / Next navigation buttons */}
                <button
                  type="button"
                  onClick={handlePrevLightbox}
                  className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#F9B500] cursor-pointer z-10"
                  title="Foto anterior (seta esquerda)"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={handleNextLightbox}
                  className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#F9B500] cursor-pointer z-10"
                  title="Próxima foto (seta direita)"
                  aria-label="Próxima foto"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Caption Footer */}
              <div className="p-4 px-6 border-t border-white/10 bg-black/40 text-white space-y-1">
                <h4 className="font-bold text-sm sm:text-base text-white">
                  {displayProject.legendaSegura}
                </h4>
                <p className="text-xs text-white/75 leading-relaxed">
                  {displayProject.detalhes}
                </p>
                <div className="text-[11px] text-white/50 pt-1">
                  Pressione <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-white/80">ESC</kbd> para fechar ou as setas do teclado para navegar.
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
