import React from 'react';
import { HelpCircle, Wrench, LineChart, MessageSquare, ArrowRight } from 'lucide-react';
import { buildQuickWhatsAppLink } from '../utils/whatsapp';
import { getAssetUrl } from '../utils/assetPath';

export const SupportSection: React.FC = () => {
  const supportUrl = buildQuickWhatsAppLink('Olá, equipe SunHouse! Gostaria de falar sobre suporte e acompanhamento de sistema solar.');

  return (
    <section className="py-20 sm:py-24 bg-[#071C45] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#F9B500] uppercase bg-white/10 px-3 py-1 rounded-full">
              Pós-Instalação & Relacionamento
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              A conversa continua depois da instalação.
            </h2>

            <p className="text-base sm:text-lg text-white/85 leading-relaxed">
              Dúvidas sobre operação, acompanhamento e manutenção fazem parte da experiência de ter energia solar. Converse com a SunHouse sobre o suporte previsto para o seu sistema.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="p-2 w-fit rounded-lg bg-[#023399] text-white mb-3">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-white mb-1">Orientação de uso</h3>
                <p className="text-xs text-white/70">Instruções práticas para leitura de geração e faturas de compensação.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="p-2 w-fit rounded-lg bg-[#023399] text-white mb-3">
                  <LineChart className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-white mb-1">Acompanhamento</h3>
                <p className="text-xs text-white/70">Esclarecimento de dúvidas sobre a rotina de funcionamento dos equipamentos.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="p-2 w-fit rounded-lg bg-[#023399] text-white mb-3">
                  <Wrench className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-white mb-1">Manutenção</h3>
                <p className="text-xs text-white/70">Diretrizes de limpeza e verificação técnica periódica quando necessário.</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={supportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F9B500] hover:bg-[#e0a300] text-[#071C45] font-bold text-sm sm:text-base px-6 py-3 rounded-xl shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Conversar sobre suporte técnico</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right card showing authentic hardware and installation detail */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-900 aspect-[4/3] relative">
              <img
                src={getAssetUrl('/instagram/instagram-07.jpg')}
                alt="Detalhe de instalação fotovoltaica no telhado realizada pela SunHouse"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-2 left-2 bg-[#071C45]/90 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 rounded">
                Inspeção técnica e fixação segura
              </div>
            </div>

            <div className="space-y-2 text-xs text-white/75 leading-relaxed">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="font-medium text-white/90">Atendimento pós-entrega:</span>
                <span className="font-semibold text-[#F9B500]">Direto com a equipe técnica</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="font-medium text-white/90">Base operacional:</span>
                <span>Honório Gurgel, Rio de Janeiro, RJ</span>
              </div>
              <p className="pt-1 text-[11px] text-white/60">
                Atendimento humano em horário comercial para proprietários de sistemas instalados.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
