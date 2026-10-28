import React from 'react';
import { ExternalLink, Instagram, ShieldCheck } from 'lucide-react';
import { PROJECTS } from '../data/companyData';

export const ProjectsGallery: React.FC = () => {
  const featured = PROJECTS[0];
  const sideProjects = PROJECTS.slice(1);

  return (
    <section id="projetos" className="py-20 sm:py-24 bg-white border-b border-[#D6DFEC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#023399] uppercase bg-[#023399]/10 px-3 py-1 rounded-full mb-3">
            Evidências & Publicações Reais
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071C45] tracking-tight">
            Veja o trabalho que a SunHouse já compartilha.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#46556B] leading-relaxed">
            Registros e publicações oficiais do perfil da SunHouse, preservando as fontes originais e a transparência técnica de cada projeto.
          </p>
        </div>

        {/* Editorial Layout: One Prominent Featured Project + Grid of Secondary Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Featured Item */}
          <div className="lg:col-span-7 bg-[#F5F7FA] border border-[#D6DFEC] rounded-2xl overflow-hidden shadow-sm flex flex-col group">
            <div className="relative aspect-square sm:aspect-[4/3] bg-slate-200 overflow-hidden">
              <img
                src={featured.arquivo}
                alt={featured.legendaSegura}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#071C45]/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F9B500]" />
                <span>{featured.categoria}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
              <div>
                <div className="text-xs font-bold text-[#023399] uppercase tracking-wide mb-1">
                  {featured.cidade}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#071C45] mb-2">
                  {featured.legendaSegura}
                </h3>
                <p className="text-sm text-[#46556B] leading-relaxed mb-4">
                  {featured.detalhes}
                </p>
              </div>

              <div className="pt-4 border-t border-[#D6DFEC] flex items-center justify-between">
                <span className="text-xs text-[#46556B]">
                  Fonte: @sunhouseenergiasolar
                </span>
                <a
                  href={featured.origemInstagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#023399] hover:text-[#071C45] hover:underline"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>Ver publicação original</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Side Projects Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {sideProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#F5F7FA] border border-[#D6DFEC] rounded-xl overflow-hidden p-4 sm:p-5 flex flex-col sm:flex-row gap-4 items-center group hover:border-[#023399]/40 transition-colors"
              >
                <div className="w-full sm:w-36 h-36 shrink-0 rounded-lg overflow-hidden bg-slate-200 relative">
                  <img
                    src={project.arquivo}
                    alt={project.legendaSegura}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute bottom-1.5 left-1.5 bg-[#071C45]/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {project.categoria}
                  </span>
                </div>

                <div className="flex-1 w-full flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-[#023399]">
                      {project.cidade}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-[#071C45] leading-snug line-clamp-2 mt-0.5">
                      {project.legendaSegura}
                    </h4>
                    <p className="text-xs text-[#46556B] mt-1 line-clamp-2">
                      {project.detalhes}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-200">
                    <a
                      href={project.origemInstagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#023399] hover:underline"
                    >
                      <span>Ver no Instagram</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Disclaimer / Editorial Transparency Note */}
        <div className="mt-10 p-4 rounded-xl bg-[#F5F7FA] border border-[#D6DFEC] text-xs text-[#46556B] leading-relaxed flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-[#023399] shrink-0 mt-0.5" />
          <div>
            <strong>Transparência técnica:</strong> As imagens apresentadas acima são registros e publicações oficiais do perfil{' '}
            <a
              href="https://www.instagram.com/sunhouseenergiasolar/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#023399] underline"
            >
              @sunhouseenergiasolar
            </a>. Cada imóvel possui características únicas de telhado, sombreamento e consumo, exigindo dimensionamento técnico próprio.
          </div>
        </div>

      </div>
    </section>
  );
};
