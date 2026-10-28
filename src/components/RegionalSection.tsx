import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  ExternalLink,
  Clock,
  Navigation,
  Compass,
  Copy,
  Check,
  Building,
  ShieldCheck,
  Share2
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { COMPANY } from '../data/companyData';
import { GoogleMapsLogo, WazeLogo } from './RouteBrandIcons';
import { ScrollReveal } from './ScrollReveal';

interface RegionalSectionProps {
  id?: string;
  className?: string;
  compact?: boolean;
}

export const RegionalSection: React.FC<RegionalSectionProps> = ({
  id = 'localizacao',
  className = '',
  compact = false,
}) => {
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Exact Google Maps directions URL from user's current location to SunHouse's headquarters
  const googleMapsRouteUrl = COMPANY.googleMaps.rotaUrl;
  
  // Exact Waze directions URL from user's current location to SunHouse's headquarters
  const wazeRouteUrl = COMPANY.googleMaps.wazeUrl;

  // Google Maps interactive embed
  const mapEmbedUrl = COMPANY.googleMaps.mapEmbedUrl;


  const handleCopyAddress = () => {
    navigator.clipboard.writeText(COMPANY.endereco.completo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id={id}
      className={`py-16 sm:py-24 bg-[#F5F7FA] border-b border-[#D6DFEC] ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#023399] uppercase bg-[#023399]/10 px-3.5 py-1.5 rounded-full mb-3">
            <MapPin className="w-4 h-4 text-[#023399]" />
            <span>Onde Estamos & Como Chegar</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071C45] tracking-tight">
            Localização da Sede e Atendimento
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#46556B] leading-relaxed">
            Nossa base própria fica em <strong>Honório Gurgel, Rio de Janeiro (RJ)</strong>. Conheça nosso endereço, canais de contato e trace a rota até a SunHouse no Waze ou Google Maps.
          </p>
        </ScrollReveal>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* 1 & 2. Bloco de Nome, Endereço e Contatos em Linhas Simples */}
          <ScrollReveal
            delay={0.06}
            className="order-1 lg:order-1 lg:col-span-6 lg:col-start-1 lg:row-start-1"
          >
            <div className="bg-transparent sm:bg-white border-0 sm:border border-[#D6DFEC] rounded-3xl p-0 sm:p-8 sm:shadow-sm space-y-6 h-full flex flex-col justify-between">
              
              {/* 1. Nome e Endereço */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <span className="text-xs font-extrabold text-[#023399] uppercase tracking-wider flex items-center gap-1.5">
                    <Building className="w-4 h-4 shrink-0" />
                    <span>Sede Própria Oficial</span>
                  </span>

                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#023399] hover:text-[#071C45] bg-white sm:bg-[#F5F7FA] hover:bg-slate-100 border border-[#D6DFEC] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                    title="Copiar endereço completo para a área de transferência"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="text-emerald-700">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 shrink-0" />
                        <span>Copiar endereço</span>
                      </>
                    )}
                  </button>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#071C45] leading-snug">
                  {COMPANY.nome}
                </h3>

                <p className="text-base sm:text-lg text-[#46556B] font-semibold mt-1">
                  {COMPANY.endereco.logradouro}, {COMPANY.endereco.complemento}
                </p>

                <p className="text-sm text-[#46556B] mt-0.5">
                  Bairro {COMPANY.endereco.bairro} — {COMPANY.endereco.cidade}, {COMPANY.endereco.uf} • CEP {COMPANY.endereco.cep}
                </p>
              </div>

              {/* 2. Contatos em Linhas Simples */}
              <div className="pt-4 border-t border-[#D6DFEC] space-y-3.5">
                <span className="text-xs font-bold text-[#46556B] uppercase tracking-wider block">
                  Canais Oficiais de Contato
                </span>

                {/* Linha: Telefone & WhatsApp */}
                <div className="flex items-start sm:items-center justify-between gap-3 py-1 border-b border-[#D6DFEC]/60 sm:border-0">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#46556B] block">Telefone & WhatsApp</span>
                      <a
                        href={COMPANY.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-[#023399] hover:text-[#071C45] transition-colors"
                      >
                        {COMPANY.whatsappFormatado}
                      </a>
                    </div>
                  </div>
                  <a
                    href={COMPANY.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-md transition-colors shrink-0"
                  >
                    Conversar
                  </a>
                </div>

                {/* Linha: E-mail Oficial */}
                <div className="flex items-start sm:items-center justify-between gap-3 py-1 border-b border-[#D6DFEC]/60 sm:border-0">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#023399] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#46556B] block">E-mail Corporativo</span>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-sm sm:text-base font-semibold text-[#071C45] hover:text-[#023399] break-all transition-colors"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Linha: Horário de Atendimento */}
                <div className="flex items-start gap-2.5 py-1">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#46556B] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-xs text-[#46556B]">
                    <span className="font-bold text-[#071C45] block">Horário de Atendimento</span>
                    <span>{COMPANY.horario}</span>
                  </div>
                </div>

                {/* Linha: Instagram */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-[#46556B]">
                    <Instagram className="w-4 h-4 text-pink-600 shrink-0" />
                    <span>Acompanhe fotos de obras no Instagram:</span>
                  </div>
                  <a
                    href={COMPANY.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#023399] hover:underline shrink-0"
                  >
                    <span>{COMPANY.instagramHandle}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>

              </div>

            </div>
          </ScrollReveal>

          {/* 3 & 4. Mapa Interativo e Botões de Rota */}
          <ScrollReveal
            delay={0.12}
            className="order-2 lg:order-2 lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:row-span-2"
          >
            <div className="bg-transparent sm:bg-white border-0 sm:border border-[#D6DFEC] rounded-3xl p-0 sm:p-8 sm:shadow-sm h-full flex flex-col justify-between space-y-5 sm:space-y-6">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Compass className="w-5 h-5 text-[#023399]" />
                    <h3 className="font-extrabold text-lg text-[#071C45]">
                      Mapa da Sede
                    </h3>
                  </div>
                  
                  <span className="text-xs font-bold text-[#023399] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                    Honório Gurgel — Rio de Janeiro, RJ
                  </span>
                </div>

                {/* 3. Mapa com Área Útil Adequada */}
                <div className="rounded-2xl overflow-hidden border border-[#D6DFEC] bg-slate-100 h-64 sm:h-72 lg:h-[340px] relative shadow-inner">
                  <iframe
                    title="Mapa interativo da localização da SunHouse Energia Solar em Honório Gurgel, Rio de Janeiro"
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>

                <p className="text-xs text-[#46556B] leading-relaxed pt-1">
                  Escolha o aplicativo de sua preferência abaixo para iniciar a navegação GPS com <strong>saída da sua localização atual direto para a SunHouse</strong>:
                </p>
              </div>

              {/* 4. Botões de Rota Identificáveis */}
              <div className="space-y-3 pt-2 sm:border-t sm:border-[#D6DFEC]">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  
                  {/* Botão Google Maps */}
                  <motion.a
                    href={googleMapsRouteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    className="flex items-center justify-center gap-2.5 bg-[#023399] hover:bg-[#071C45] text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-md transition-colors cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399]"
                  >
                    <GoogleMapsLogo className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform drop-shadow-xs" />
                    <span className="text-center">Traçar rota no Google Maps</span>
                    <ExternalLink className="w-4 h-4 text-white/70 shrink-0" />
                  </motion.a>

                  {/* Botão Waze */}
                  <motion.a
                    href={wazeRouteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    className="flex items-center justify-center gap-2.5 bg-[#33CCFF] hover:bg-[#00B4F5] text-[#071C45] font-black text-sm py-3.5 px-4 rounded-xl shadow-md transition-colors cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4F5]"
                  >
                    <WazeLogo className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform drop-shadow-xs" />
                    <span className="text-center">Traçar rota no Waze</span>
                    <ExternalLink className="w-4 h-4 text-[#071C45]/70 shrink-0" />
                  </motion.a>

                </div>

                <div className="bg-white sm:bg-[#F5F7FA] border border-[#D6DFEC] rounded-xl p-3 text-center">
                  <span className="text-[11px] text-[#46556B]">
                    📍 <strong>Destino configurado:</strong> SunHouse Energia Solar — Rua Ururaí, 1092, Honório Gurgel, Rio de Janeiro - RJ.
                  </span>
                </div>

              </div>

            </div>
          </ScrollReveal>

          {/* 5. Regiões Atendidas (Complementar) */}
          <ScrollReveal
            delay={0.16}
            className="order-3 lg:order-3 lg:col-span-6 lg:col-start-1 lg:row-start-2"
          >
            <div className="bg-transparent sm:bg-white border-t border-[#D6DFEC] sm:border sm:border-[#D6DFEC] rounded-none sm:rounded-2xl pt-5 sm:p-6 sm:shadow-sm">
              <h3 className="text-sm font-bold text-[#071C45] mb-2.5 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#023399] shrink-0" />
                <span>Atendimento Presencial Confirmado nas Regiões:</span>
              </h3>
              
              <div className="flex flex-wrap gap-2 pt-1">
                {COMPANY.regioesAtendidas.map((regiao) => (
                  <span
                    key={regiao}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white sm:bg-[#F5F7FA] border border-[#D6DFEC] text-xs font-semibold text-[#071C45]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F9B500]"></span>
                    {regiao}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
