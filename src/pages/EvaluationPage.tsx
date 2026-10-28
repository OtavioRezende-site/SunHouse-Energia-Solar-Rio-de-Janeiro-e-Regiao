import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  ShieldCheck,
  Star,
  MapPin,
  CheckCircle,
  Phone,
  Mail,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  Clock,
  Compass,
  FileCheck
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { PageHeader } from '../components/PageHeader';
import { SectionTransition } from '../components/SectionTransition';
import { LeadForm } from '../components/LeadForm';
import { ScrollReveal } from '../components/ScrollReveal';
import { motion, useReducedMotion } from 'motion/react';
import { PropertyType } from '../types';
import { COMPANY } from '../data/companyData';
import { GoogleMapsLogo, WazeLogo } from '../components/RouteBrandIcons';
import { buildQuickWhatsAppLink } from '../utils/whatsapp';

interface EvaluationPageProps {
  onOpenPrivacy: () => void;
}

export const EvaluationPage: React.FC<EvaluationPageProps> = ({ onOpenPrivacy }) => {
  const shouldReduceMotion = useReducedMotion();
  const [searchParams] = useSearchParams();
  const rawType = searchParams.get('tipo');

  // Update document title and meta description for SEO
  useEffect(() => {
    document.title = 'Pedir Avaliação do Imóvel | SunHouse Energia Solar';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Solicite uma avaliação técnica de energia solar para sua residência ou empresa em Rio de Janeiro e região com a SunHouse. Estudo inicial sem compromisso.'
      );
    }
  }, []);

  let initialType: PropertyType = 'Casa';
  if (rawType === 'Comércio' || rawType === 'Comercio') {
    initialType = 'Comércio';
  } else if (rawType === 'Outro') {
    initialType = 'Outro';
  }

  const whatsappDirectUrl = buildQuickWhatsAppLink(
    'Olá! Gostaria de conversar diretamente com a equipe SunHouse sobre a viabilidade de energia solar para meu imóvel.'
  );

  return (
    <div className="bg-[#F5F7FA]">
      
      {/* Abertura Oficial Conforme Especificação */}
      <PageHeader
        badge="Etapa Inicial"
        title="Vamos entender o potencial do seu imóvel."
        subtitle="Conte um pouco sobre sua necessidade para conversar com a equipe sobre os próximos passos."
        breadcrumbLabel="Pedir avaliação"
      />

      {/* Transição suave estática: Header Azul Escuro (#071C45) → Formulário (Branco) */}
      <SectionTransition type="dark-to-white" />

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/*
              Left Column: Introdução Objetiva & Formulário
              The form container is directly visible and never hidden or delayed,
              ensuring instant input accessibility.
            */}
            <ScrollReveal className="lg:col-span-7 bg-[#F5F7FA] border border-[#D6DFEC] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
              
              <div className="pb-4 border-b border-[#D6DFEC]">
                <span className="text-xs font-bold text-[#023399] uppercase tracking-wider block mb-1">
                  Avaliação Técnica Inicial
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#071C45]">
                  Formulário de solicitação de avaliação
                </h2>
                <p className="text-xs sm:text-sm text-[#46556B] mt-1.5 leading-relaxed">
                  Os dados abaixo são utilizados para montar a mensagem que orienta o primeiro contato pelo WhatsApp oficial da SunHouse.
                </p>
              </div>

              {/* LeadForm Component */}
              <LeadForm
                initialType={initialType}
                idPrefix="page-eval"
                onOpenPrivacy={onOpenPrivacy}
              />
            </ScrollReveal>

            {/* Right Column: Auxiliary content organized as open groups on mobile, sidebar card on desktop */}
            <div className="lg:col-span-5 space-y-8 lg:space-y-6 pt-4 lg:pt-0">
              
              {/* Próximos Passos (Open sequence on mobile, dark card on desktop) */}
              <ScrollReveal delay={0.04}>
                <div className="bg-transparent lg:bg-[#071C45] text-[#071C45] lg:text-white rounded-none lg:rounded-3xl p-0 lg:p-8 space-y-4 lg:space-y-5 shadow-none lg:shadow-lg">
                  <div className="flex items-center gap-2 text-[#023399] lg:text-[#F9B500] text-xs font-bold uppercase tracking-wider">
                    <Compass className="w-4 h-4" />
                    <span>O que acontece a seguir?</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#071C45] lg:text-white leading-tight">
                    Como a equipe atende sua solicitação:
                  </h3>

                  <div className="space-y-3.5 pt-1 text-xs sm:text-sm text-[#46556B] lg:text-white/85">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#023399] text-white lg:text-[#F9B500] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        1
                      </span>
                      <div>
                        <strong className="text-[#071C45] lg:text-white block">Recepção no WhatsApp:</strong>
                        <span>A equipe técnica recebe suas informações de consumo e localização do imóvel.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#023399] text-white lg:text-[#F9B500] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        2
                      </span>
                      <div>
                        <strong className="text-[#071C45] lg:text-white block">Estudo preliminar:</strong>
                        <span>Analisamos o consumo em kWh e fazemos o dimensionamento inicial da quantidade necessária de módulos.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#023399] text-white lg:text-[#F9B500] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        3
                      </span>
                      <div>
                        <strong className="text-[#071C45] lg:text-white block">Apresentação da proposta:</strong>
                        <span>Apresentamos os valores, modelos de equipamentos e combinamos uma vistoria no telhado caso haja interesse.</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#D6DFEC] lg:border-white/15 flex items-center justify-between text-xs text-[#46556B] lg:text-white/70">
                    <span className="flex items-center gap-1 font-semibold text-[#071C45] lg:text-[#F9B500]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#F9B500] text-[#F9B500]" />
                      ))}
                      <span className="ml-1 text-[#071C45] lg:text-white font-bold">5,0 no Google</span>
                    </span>
                    <span>150 avaliações</span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Conversar Diretamente pelo WhatsApp (Direct Action) */}
              <ScrollReveal delay={0.08}>
                <div className="bg-transparent lg:bg-[#F5F7FA] border-0 lg:border lg:border-[#D6DFEC] rounded-none lg:rounded-2xl p-0 lg:p-6 space-y-2.5 lg:space-y-3 pt-4 border-t border-[#D6DFEC] lg:border-t-0 lg:pt-0">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#023399] uppercase tracking-wider">
                    <WhatsAppIcon className="w-4 h-4 text-[#023399]" />
                    <span>Atendimento Direto no WhatsApp</span>
                  </div>

                  <h4 className="text-base font-bold text-[#071C45]">
                    Prefere conversar agora pelo WhatsApp?
                  </h4>

                  <p className="text-xs sm:text-sm text-[#46556B] leading-relaxed">
                    Se você já possui a conta de luz em mãos ou quer tirar uma dúvida específica, fale com a equipe sem preencher o formulário:
                  </p>

                  <div className="pt-1">
                    <motion.a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#023399] hover:bg-[#071C45] text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399]"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#F9B500]" />
                      <span>Iniciar conversa no WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5 text-white/70" />
                    </motion.a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Contatos, Sede da Empresa e Rotas GPS */}
              <ScrollReveal delay={0.12}>
                <div className="bg-transparent lg:bg-white border-0 lg:border lg:border-[#D6DFEC] rounded-none lg:rounded-3xl p-0 lg:p-6 space-y-4 text-xs sm:text-sm text-[#46556B] shadow-none lg:shadow-sm pt-4 border-t border-[#D6DFEC] lg:border-t-0 lg:pt-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-[#071C45] uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#023399]" />
                      <span>Sede & Atendimento Presencial</span>
                    </h4>
                    <span className="text-[11px] font-semibold text-[#023399] bg-blue-50 px-2.5 py-0.5 rounded-full">
                      Honório Gurgel, Rio de Janeiro
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <p className="text-[#071C45] font-bold text-sm leading-snug">
                      {COMPANY.endereco.completo}
                    </p>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1 text-xs">
                      <a
                        href={COMPANY.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#023399] font-bold hover:underline inline-flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{COMPANY.whatsappFormatado}</span>
                      </a>

                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-[#071C45] hover:text-[#023399] font-medium inline-flex items-center gap-1.5"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#023399]" />
                        <span>{COMPANY.email}</span>
                      </a>
                    </div>
                  </div>

                  {/* Interactive Map Embed */}
                  <div className="rounded-xl overflow-hidden border border-[#D6DFEC] bg-slate-100 aspect-[16/9] relative shadow-inner">
                    <iframe
                      title="Mapa da sede SunHouse Energia Solar"
                      src={COMPANY.googleMaps.mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Two GPS Route Buttons */}
                  <div className="pt-2 border-t border-[#D6DFEC] space-y-2">
                    <span className="text-[11px] font-medium text-[#46556B] block">
                      Trace a rota da sua localização atual até nossa sede:
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <motion.a
                        href={COMPANY.googleMaps.rotaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                        className="inline-flex items-center justify-center gap-2 bg-[#023399] hover:bg-[#071C45] text-white font-bold text-xs py-3 px-3 rounded-xl shadow-xs transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399]"
                      >
                        <GoogleMapsLogo className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                        <span>Rota no Google Maps</span>
                        <ExternalLink className="w-3 h-3 text-white/70" />
                      </motion.a>

                      <motion.a
                        href={COMPANY.googleMaps.wazeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                        className="inline-flex items-center justify-center gap-2 bg-[#33CCFF] hover:bg-[#00B4F5] text-[#071C45] font-black text-xs py-3 px-3 rounded-xl shadow-xs transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4F5]"
                      >
                        <WazeLogo className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                        <span>Rota no Waze</span>
                        <ExternalLink className="w-3 h-3 text-[#071C45]/70" />
                      </motion.a>
                    </div>
                  </div>

                  <div className="pt-1 text-[11px] text-[#46556B]">
                    {COMPANY.horario} • Sede em {COMPANY.endereco.completo}
                  </div>
                </div>
              </ScrollReveal>

              {/* Link Contextual para Dúvidas */}
              <ScrollReveal delay={0.16}>
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-transparent sm:bg-slate-50 border-0 sm:border sm:border-[#D6DFEC] text-xs text-[#46556B] flex items-center justify-between">
                  <span>Ficou com alguma dúvida sobre o processo?</span>
                  <Link
                    to="/duvidas"
                    className="font-bold text-[#023399] hover:underline inline-flex items-center gap-1 shrink-0"
                  >
                    <span>Ver Dúvidas</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </ScrollReveal>

            </div>

          </div>

        </div>
      </section>

      {/* Transição suave estática: Branco → Rodapé Azul Escuro (#071C45) */}
      <SectionTransition type="white-to-dark" />

    </div>
  );
};
