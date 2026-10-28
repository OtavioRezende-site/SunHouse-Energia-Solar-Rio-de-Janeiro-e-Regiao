import React from 'react';
import { ArrowRight, Compass, FileCheck, Hammer, Activity, ShieldCheck, Zap, Wrench, Check } from 'lucide-react';

interface ProcessProps {
  onStartEvaluation: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onStartEvaluation }) => {
  const steps = [
    {
      number: '01',
      title: 'Entender',
      description: 'Você conta como consome energia e onde será o projeto.',
      icon: Compass,
      detail: 'Análise de histórico de faturas e identificação das necessidades reais de energia.',
    },
    {
      number: '02',
      title: 'Planejar',
      description: 'A equipe avalia o espaço e apresenta a solução e as condições.',
      icon: FileCheck,
      detail: 'Dimensionamento da quantidade de módulos, inversor adequado e opções comerciais.',
    },
    {
      number: '03',
      title: 'Implantar',
      description: 'Instalação e encaminhamento da homologação conforme o projeto.',
      icon: Hammer,
      detail: 'Montagem técnica cuidadosa e tramitação da documentação na concessionária.',
    },
    {
      number: '04',
      title: 'Acompanhar',
      description: 'Orientação e suporte para a fase de uso do sistema.',
      icon: Activity,
      detail: 'Instruções para monitoramento de geração e canal direto para tirar dúvidas rotineiras.',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 sm:py-24 bg-[#071C45] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#023399]/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#F9B500] uppercase bg-white/10 px-3 py-1 rounded-full mb-3">
            Passo a Passo Transparente
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Do primeiro estudo ao sistema em operação.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
            Uma trajetória clara, em quatro etapas reais, sem promessas milagrosas e com suporte presente do Carlos Alberto e equipe técnica.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group"
              >
                {/* Step Header */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#F9B500] font-heading">
                      {step.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/10 text-white group-hover:bg-[#F9B500] group-hover:text-[#071C45] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm font-medium text-white/95 leading-relaxed mb-4">
                    “{step.description}”
                  </p>

                  <p className="text-xs text-white/70 leading-relaxed border-t border-white/10 pt-3">
                    {step.detail}
                  </p>
                </div>

                {/* Progress bar line connecting */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-white/30">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Diferenciais em Destaque no Processo */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#F9B500] uppercase tracking-wider block mb-1">
              Garantias Operacionais do Nosso Processo
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Cuidado técnico em cada ponto crítico da instalação
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2.5">
              <div className="flex items-center gap-2.5 text-[#F9B500]">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <h4 className="font-bold text-sm text-white">Homologação Light & Enel</h4>
              </div>
              <p className="text-xs text-white/75 leading-relaxed">
                Protocolo com ART e projeto elétrico aprovado até a instalação do medidor bidirecional pela concessionária.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2.5">
              <div className="flex items-center gap-2.5 text-[#F9B500]">
                <Zap className="w-5 h-5 shrink-0" />
                <h4 className="font-bold text-sm text-white">Carregadores Wallbox</h4>
              </div>
              <p className="text-xs text-white/75 leading-relaxed">
                Previsão de carga e infraestrutura dedicada para recarga de veículos elétricos e híbridos com segurança.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2.5">
              <div className="flex items-center gap-2.5 text-[#F9B500]">
                <Wrench className="w-5 h-5 shrink-0" />
                <h4 className="font-bold text-sm text-white">Eletricista Especializado</h4>
              </div>
              <p className="text-xs text-white/75 leading-relaxed">
                Adequação do padrão de entrada, aterramento e quadros de distribuição em estrita conformidade com a NBR 5410.
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onStartEvaluation}
            className="inline-flex items-center justify-center gap-2.5 bg-[#F9B500] hover:bg-[#e0a300] text-[#071C45] font-bold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-black/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
          >
            <span>Começar minha avaliação</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

