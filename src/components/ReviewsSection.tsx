import React from 'react';
import { Star, Quote, ExternalLink, ShieldCheck } from 'lucide-react';
import { COMPANY, REVIEWS } from '../data/companyData';
import { ScrollReveal } from './ScrollReveal';
import { motion, useReducedMotion } from 'motion/react';

export const ReviewsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#D6DFEC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#023399] uppercase bg-[#023399]/10 px-3 py-1 rounded-full mb-3">
            Reputação Verificada
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071C45] tracking-tight">
            O que os clientes contam.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#46556B] leading-relaxed">
            Avaliações públicas registradas no perfil oficial do Google da SunHouse Energia Solar.
          </p>
        </ScrollReveal>

        {/* 2 Authentic Verified Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Review 1 */}
          <ScrollReveal delay={0.05}>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -4, transition: { duration: 0.2 } }}
              className="bg-[#F5F7FA] border border-[#D6DFEC] rounded-2xl p-7 sm:p-9 flex flex-col justify-between shadow-sm relative transition-shadow hover:shadow-md"
            >
              <Quote className="w-8 h-8 text-[#023399]/20 absolute top-6 right-6" />
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F9B500] text-[#F9B500]" />
                  ))}
                </div>
                <p className="text-lg sm:text-xl font-bold text-[#071C45] leading-snug italic">
                  “{REVIEWS[0].texto}”
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D6DFEC] flex items-center justify-between text-xs text-[#46556B]">
                <div className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#023399]" />
                  <span>{REVIEWS[0].fonte}</span>
                </div>
                <span>{REVIEWS[0].data}</span>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Review 2 */}
          <ScrollReveal delay={0.12}>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -4, transition: { duration: 0.2 } }}
              className="bg-[#F5F7FA] border border-[#D6DFEC] rounded-2xl p-7 sm:p-9 flex flex-col justify-between shadow-sm relative transition-shadow hover:shadow-md"
            >
              <Quote className="w-8 h-8 text-[#023399]/20 absolute top-6 right-6" />
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F9B500] text-[#F9B500]" />
                  ))}
                </div>
                <p className="text-lg sm:text-xl font-bold text-[#071C45] leading-snug italic">
                  “{REVIEWS[1].texto}”
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D6DFEC] flex items-center justify-between text-xs text-[#46556B]">
                <div className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#023399]" />
                  <span>{REVIEWS[1].fonte}</span>
                </div>
                <span>{REVIEWS[1].data}</span>
              </div>
            </motion.div>
          </ScrollReveal>

        </div>

        {/* Google Maps Reputation Callout */}
        <ScrollReveal delay={0.16} className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 bg-[#F5F7FA] border border-[#D6DFEC] px-6 py-4 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-[#071C45]">5,0 ★</span>
              <span className="text-sm text-[#46556B]">no Google (150 avaliações)</span>
            </div>
            <a
              href={COMPANY.googleMaps.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#023399] hover:underline"
            >
              <span>Conferir todas as avaliações no Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-2 text-xs text-[#46556B]">
            Consulta realizada em {COMPANY.googleMaps.dataConsulta}. Grafia original preservada.
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
