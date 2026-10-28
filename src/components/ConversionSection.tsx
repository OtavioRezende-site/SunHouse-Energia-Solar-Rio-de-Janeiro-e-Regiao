import React from 'react';
import { Sun, CheckCircle, ShieldCheck, MapPin } from 'lucide-react';
import { LeadForm } from './LeadForm';
import { PropertyType } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface ConversionSectionProps {
  initialType?: PropertyType;
  onOpenPrivacy?: () => void;
}

export const ConversionSection: React.FC<ConversionSectionProps> = ({
  initialType = 'Casa',
  onOpenPrivacy,
}) => {
  return (
    <section id="avaliar" className="py-20 sm:py-24 bg-[#F5F7FA] border-b border-[#D6DFEC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border border-[#D6DFEC] rounded-3xl shadow-sm overflow-hidden p-6 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Copy & Benefits */}
            <ScrollReveal className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#023399] uppercase bg-[#023399]/10 px-3 py-1 rounded-full">
                Próximo Passo
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071C45] tracking-tight leading-tight">
                Vamos descobrir o potencial do seu imóvel?
              </h2>

              <p className="text-base sm:text-lg text-[#46556B] leading-relaxed">
                Conte um pouco sobre seu consumo. A SunHouse ajuda você a entender o próximo passo com transparência e responsabilidade técnica.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-blue-100 text-[#023399] shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#071C45]">Estudo sem compromisso inicial</h4>
                    <p className="text-xs sm:text-sm text-[#46556B]">Receba orientações preliminares baseadas nas faturas recentes e características do telhado.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-blue-100 text-[#023399] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#023399]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#071C45]">Atendimento regional</h4>
                    <p className="text-xs sm:text-sm text-[#46556B]">Profissionais que conhecem o clima, a incidência de radiação e a rede de Rio de Janeiro e cidades vizinhas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-blue-100 text-[#023399] shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-[#023399]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#071C45]">Dados protegidos e sem spam</h4>
                    <p className="text-xs sm:text-sm text-[#46556B]">Contato direto e exclusivo sobre sua solicitação solar.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs text-[#46556B] bg-[#F5F7FA] p-3.5 rounded-xl border border-[#D6DFEC]">
                <strong>Nota comercial:</strong> Esta solicitação abre uma conversa estruturada no WhatsApp oficial para iniciar a avaliação do seu imóvel.
              </div>
            </ScrollReveal>

            {/* Right Inline Form */}
            <ScrollReveal delay={0.08} className="lg:col-span-6 bg-[#F5F7FA] border border-[#D6DFEC] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#D6DFEC]">
                <Sun className="w-5 h-5 text-[#F9B500]" />
                <h3 className="font-bold text-base text-[#071C45]">
                  Formulário de solicitação de avaliação
                </h3>
              </div>

              <LeadForm
                initialType={initialType}
                idPrefix="inline"
                onOpenPrivacy={onOpenPrivacy}
              />
            </ScrollReveal>

          </div>
        </div>

      </div>
    </section>
  );
};
