import React from 'react';
import { Star, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';
import { COMPANY } from '../data/companyData';
import { ScrollReveal } from './ScrollReveal';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-white border-b border-[#D6DFEC] py-5 sm:py-6 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-8">
          
          {/* Google Reviews Indicator */}
          <ScrollReveal delay={0} yOffset={8} className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-1.5 bg-[#F5F7FA] border border-[#D6DFEC] px-3.5 py-2 rounded-xl transition-shadow hover:shadow-xs">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F9B500] text-[#F9B500]" />
                ))}
              </div>
              <span className="font-extrabold text-[#071C45] text-base ml-1">5,0</span>
              <span className="text-xs text-[#46556B] font-medium">no Google</span>
            </div>

            <div>
              <div className="text-xs sm:text-sm font-semibold text-[#071C45]">
                150 avaliações confirmadas
              </div>
              <a
                href={COMPANY.googleMaps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#023399] hover:text-[#071C45] font-semibold underline underline-offset-2 transition-colors"
              >
                <span>Ler avaliações no Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </ScrollReveal>

          {/* Regional & Workflow Highlights */}
          <ScrollReveal delay={0.08} yOffset={8} className="flex flex-wrap items-center justify-center lg:justify-end gap-x-6 gap-y-2 text-xs sm:text-sm text-[#46556B]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#023399] shrink-0" />
              <span className="font-medium">
                Atendimento local em Rio de Janeiro, Baixada Fluminense e Região
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#023399] shrink-0" />
              <span className="font-medium">
                Caminho completo: do estudo de viabilidade ao suporte
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Dated Verification Note */}
        <ScrollReveal delay={0.12} yOffset={6} className="mt-2.5 text-center lg:text-left text-[11px] text-[#46556B]/80">
          Nota pública registrada na consulta de {COMPANY.googleMaps.dataConsulta}. Registro factual verificado, sem contador artificial em tempo real.
        </ScrollReveal>
      </div>
    </section>
  );
};
