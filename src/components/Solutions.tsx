import React, { useState } from 'react';
import { Home, Building2, Check, ArrowRight, Wrench, ShieldCheck, Zap } from 'lucide-react';
import { PropertyType } from '../types';
import { getAssetUrl } from '../utils/assetPath';

interface SolutionsProps {
  onSelectPropertyType: (type: PropertyType) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onSelectPropertyType }) => {
  const [activeTab, setActiveTab] = useState<'Casa' | 'Comércio'>('Casa');

  return (
    <section id="solucoes" className="py-20 sm:py-24 bg-[#F5F7FA] border-b border-[#D6DFEC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#023399] uppercase bg-[#023399]/10 px-3 py-1 rounded-full mb-3">
            Soluções Sob Medida
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071C45] tracking-tight">
            Um projeto que começa pela sua realidade.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#46556B] leading-relaxed">
            Antes de escolher equipamentos, vale entender como você usa energia e o que seu espaço permite.
          </p>

          {/* Interactive Toggle for Tabbed View on Mobile/Tablet */}
          <div className="mt-8 inline-flex p-1.5 rounded-xl bg-white border border-[#D6DFEC] shadow-sm">
            <button
              onClick={() => setActiveTab('Casa')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399] ${
                activeTab === 'Casa'
                  ? 'bg-[#023399] text-white shadow-sm'
                  : 'text-[#46556B] hover:text-[#071C45]'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Para sua casa</span>
            </button>
            <button
              onClick={() => setActiveTab('Comércio')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399] ${
                activeTab === 'Comércio'
                  ? 'bg-[#023399] text-white shadow-sm'
                  : 'text-[#46556B] hover:text-[#071C45]'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Para seu negócio</span>
            </button>
          </div>
        </div>

        {/* Editorial Layout: Active Card Display with High Fidelity */}
        <div className="bg-white rounded-2xl border border-[#D6DFEC] shadow-sm overflow-hidden p-6 sm:p-10 lg:p-12 transition-all">
          {activeTab === 'Casa' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Text column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#023399] bg-blue-50 px-3 py-1 rounded-md">
                  <Home className="w-3.5 h-3.5" />
                  <span>Sistemas Residenciais</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071C45] leading-tight">
                  Para sua casa
                </h3>

                <p className="text-base sm:text-lg text-[#46556B] leading-relaxed">
                  Uma avaliação do consumo e da cobertura ajuda a definir um sistema adequado à rotina da família.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#071C45]">Dimensionamento individual</h4>
                      <p className="text-xs sm:text-sm text-[#46556B]">Cálculo feito com base no seu histórico real de kWh e hábitos de uso da família.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#071C45]">Estudo do telhado e orientação</h4>
                      <p className="text-xs sm:text-sm text-[#46556B]">Análise técnica de sombreamento, inclinação da cobertura e área útil disponível.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#071C45]">Homologação e suporte local</h4>
                      <p className="text-xs sm:text-sm text-[#46556B]">Encaminhamento completo com a concessionária de energia e acompanhamento da equipe.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onSelectPropertyType('Casa')}
                    className="inline-flex items-center gap-2 bg-[#F9B500] hover:bg-[#e0a300] text-[#071C45] font-bold text-sm sm:text-base px-6 py-3 rounded-xl shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399]"
                  >
                    <span>Avaliar minha casa</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Photo column */}
              <div className="lg:col-span-5 relative">
                <div className="aspect-square sm:aspect-[4/3] lg:aspect-square rounded-xl overflow-hidden border border-[#D6DFEC] bg-slate-100 shadow-inner group">
                  <img
                    src={getAssetUrl('/instagram/instagram-02.jpg')}
                    alt="Instalação residencial realizada pela SunHouse Energia Solar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={640}
                    height={640}
                  />
                </div>
                <div className="mt-2 text-center text-xs text-[#46556B]">
                  Instalação residencial publicada oficialmente pela SunHouse.
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Text column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#023399] bg-blue-50 px-3 py-1 rounded-md">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Sistemas Comerciais</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071C45] leading-tight">
                  Para seu negócio
                </h3>

                <p className="text-base sm:text-lg text-[#46556B] leading-relaxed">
                  O perfil de uso da operação orienta o dimensionamento e a proposta.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#071C45]">Previsibilidade nos custos fixos</h4>
                      <p className="text-xs sm:text-sm text-[#46556B]">Geração distribuída planejada para proteger seu fluxo de caixa contra aumentos tarifários.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#071C45]">Curva de consumo diurno</h4>
                      <p className="text-xs sm:text-sm text-[#46556B]">Empresas consomem muita energia justamente nos horários de maior incidência e geração solar.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#071C45]">Engenharia e segurança estrutural</h4>
                      <p className="text-xs sm:text-sm text-[#46556B]">Projeto estruturado para galpões, lajes ou telhados comerciais com equipamentos normatizados.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onSelectPropertyType('Comércio')}
                    className="inline-flex items-center gap-2 bg-[#F9B500] hover:bg-[#e0a300] text-[#071C45] font-bold text-sm sm:text-base px-6 py-3 rounded-xl shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399]"
                  >
                    <span>Avaliar meu comércio</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Photo column */}
              <div className="lg:col-span-5 relative">
                <div className="aspect-square sm:aspect-[4/3] lg:aspect-square rounded-xl overflow-hidden border border-[#D6DFEC] bg-slate-100 shadow-inner group">
                  <img
                    src={getAssetUrl('/instagram/instagram-03.jpg')}
                    alt="Instalação comercial realizada pela SunHouse Energia Solar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={640}
                    height={640}
                  />
                </div>
                <div className="mt-2 text-center text-xs text-[#46556B]">
                  Instalação comercial publicada oficialmente pela SunHouse.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Diferenciais em Destaque: Homologação Light/Enel, Carregadores Wallbox e Eletricista */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#023399] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full mb-2">
              Diferenciais SunHouse
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071C45] tracking-tight">
              Especialistas em todo o ciclo elétrico e regulatório
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#46556B]">
              Muito além da fixação das placas: cuidamos da burocracia com a concessionária, da infraestrutura de recarga veicular e da segurança da sua rede elétrica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* 1. Homologação Light e Enel */}
            <div className="bg-white rounded-2xl border border-[#D6DFEC] p-6 sm:p-7 shadow-sm hover:border-[#023399]/40 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#023399] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#023399]" />
                </div>
                <h4 className="text-lg font-bold text-[#071C45]">
                  Homologação Light & Enel
                </h4>
                <p className="text-sm text-[#46556B] leading-relaxed">
                  Engenharia completa com emissão de ART, elaboração de projeto técnico e acompanhamento até a troca do medidor bidirecional sem burocracia para você.
                </p>
                <ul className="text-xs text-[#46556B] space-y-1.5 pt-2 border-t border-[#D6DFEC]/60">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Conexão rápida às distribuidoras do RJ</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Projetistas e engenharia próprios</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Carregadores Wallbox */}
            <div className="bg-white rounded-2xl border border-[#D6DFEC] p-6 sm:p-7 shadow-sm hover:border-[#023399]/40 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#F9B500] flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-[#F9B500]" />
                </div>
                <h4 className="text-lg font-bold text-[#071C45]">
                  Carregadores Wallbox
                </h4>
                <p className="text-sm text-[#46556B] leading-relaxed">
                  Instalação e configuração de estações de recarga para veículos elétricos e híbridos plug-in, integrando a geração do telhado ao abastecimento do seu carro.
                </p>
                <ul className="text-xs text-[#46556B] space-y-1.5 pt-2 border-t border-[#D6DFEC]/60">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Dimensionamento de circuitos dedicados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Proteções específicas contra sobrecorrente</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. Serviços de Eletricista e Infraestrutura */}
            <div className="bg-white rounded-2xl border border-[#D6DFEC] p-6 sm:p-7 shadow-sm hover:border-[#023399]/40 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#071C45] flex items-center justify-center shrink-0">
                  <Wrench className="w-6 h-6 text-[#071C45]" />
                </div>
                <h4 className="text-lg font-bold text-[#071C45]">
                  Eletricista & Infraestrutura
                </h4>
                <p className="text-sm text-[#46556B] leading-relaxed">
                  Serviços especializados de eletricista, adequação de padrão de entrada, revisão de quadros de distribuição, DPS, disjuntores e aterramento normatizado.
                </p>
                <ul className="text-xs text-[#46556B] space-y-1.5 pt-2 border-t border-[#D6DFEC]/60">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Conformidade com a NBR 5410 e NR-10</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Manutenção preventiva e corretiva</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Existing System Complement */}
        <div className="mt-8 text-center bg-white/70 border border-[#D6DFEC] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Wrench className="w-4 h-4 text-[#023399] shrink-0" />
          <span className="text-sm sm:text-base font-semibold text-[#071C45]">
            Já possui um sistema?
          </span>
          <span className="text-sm text-[#46556B]">
            Converse sobre manutenção preventiva, corretiva e limpeza técnica com o Carlos Alberto.
          </span>
          <button
            onClick={() => onSelectPropertyType('Outro')}
            className="text-sm font-bold text-[#023399] hover:underline underline-offset-4 cursor-pointer"
          >
            Falar com suporte →
          </button>
        </div>

      </div>
    </section>
  );
};
