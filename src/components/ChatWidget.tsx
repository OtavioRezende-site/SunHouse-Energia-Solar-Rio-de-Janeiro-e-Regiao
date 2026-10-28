import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, HelpCircle, Wrench, FileText, ArrowRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { COMPANY } from '../data/companyData';
import { buildQuickWhatsAppLink } from '../utils/whatsapp';
import { gentleDecelEase } from '../utils/motionTransitions';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<'duvida' | 'suporte' | null>(null);
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const handleOpenWhatsAppTopic = (topic: string) => {
    const url = buildQuickWhatsAppLink(topic);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      
      {/* Floating Panel with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            role="region"
            aria-label="Central de Atendimento SunHouse"
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 10,
              scale: shouldReduceMotion ? 1 : 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 8,
              scale: shouldReduceMotion ? 1 : 0.98,
            }}
            transition={{
              duration: isOpen ? 0.22 : 0.15,
              ease: gentleDecelEase,
            }}
            style={{ transformOrigin: 'bottom right' }}
            className="mb-3 w-[calc(100vw-2.5rem)] sm:w-88 max-w-sm bg-white rounded-2xl shadow-2xl border border-[#D6DFEC] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#071C45] p-4 text-white flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#023399] border border-[#F9B500]/40 flex items-center justify-center text-[#F9B500] shrink-0">
                  <WhatsAppIcon className="w-5 h-5 text-[#F9B500]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white leading-tight">
                    SunHouse Energia Solar
                  </h4>
                  <p className="text-[11px] text-white/75 flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Atendimento oficial no WhatsApp</span>
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setSelectedTopic(null);
                }}
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9B500]"
                aria-label="Fechar central de ajuda"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3.5 max-h-96 overflow-y-auto text-sm">
              
              {/* Greeting bubble */}
              <div className="bg-[#F5F7FA] border border-[#D6DFEC] rounded-xl p-3.5 text-[#071C45] text-xs sm:text-sm leading-relaxed">
                Olá! Quer avaliar um projeto solar para seu imóvel ou conversar com nossa equipe técnica?
              </div>

              {/* Topic views with smooth short fade transition */}
              <AnimatePresence mode="wait" initial={false}>
                {!selectedTopic && (
                  <motion.div
                    key="topic-selection"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.14, ease: gentleDecelEase }}
                    className="space-y-2 pt-1"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setIsOpen(false);
                        navigate('/pedir-avaliacao');
                      }}
                      className="w-full text-left p-3 rounded-xl bg-blue-50 hover:bg-blue-100/70 border border-blue-200 text-[#071C45] transition-colors flex items-center justify-between group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399]"
                    >
                      <div className="flex items-center gap-2.5">
                        <FileText className="w-4 h-4 text-[#023399]" />
                        <span className="font-bold text-xs sm:text-sm">Pedir avaliação do imóvel</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#023399] group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedTopic('duvida')}
                      className="w-full text-left p-3 rounded-xl bg-[#F5F7FA] hover:bg-slate-100 border border-[#D6DFEC] text-[#071C45] transition-colors flex items-center justify-between group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399]"
                    >
                      <div className="flex items-center gap-2.5">
                        <HelpCircle className="w-4 h-4 text-[#023399]" />
                        <span className="font-bold text-xs sm:text-sm">Tirar uma dúvida comum</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#46556B] group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedTopic('suporte')}
                      className="w-full text-left p-3 rounded-xl bg-[#F5F7FA] hover:bg-slate-100 border border-[#D6DFEC] text-[#071C45] transition-colors flex items-center justify-between group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399]"
                    >
                      <div className="flex items-center gap-2.5">
                        <Wrench className="w-4 h-4 text-[#023399]" />
                        <span className="font-bold text-xs sm:text-sm">Falar sobre suporte e manutenção</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#46556B] group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </motion.div>
                )}

                {/* Subtopic: Tirar Dúvida */}
                {selectedTopic === 'duvida' && (
                  <motion.div
                    key="topic-duvida"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.14, ease: gentleDecelEase }}
                    className="space-y-3 pt-1"
                  >
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-[#071C45] leading-relaxed">
                      As respostas mais frequentes sobre viabilidade, homologação e custo estão disponíveis na página de dúvidas. Você também pode conversar diretamente com nossa equipe no WhatsApp.
                    </div>

                    <div className="flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setIsOpen(false);
                          navigate('/duvidas');
                        }}
                        className="p-2.5 text-xs text-center font-bold text-[#023399] bg-white border border-[#023399] rounded-xl hover:bg-blue-50 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399]"
                      >
                        Ver perguntas e respostas na página
                      </button>

                      <button
                        type="button"
                        onClick={() => handleOpenWhatsAppTopic('Gostaria de tirar uma dúvida sobre energia solar para meu imóvel.')}
                        className="p-2.5 text-xs text-center font-bold text-[#071C45] bg-[#F9B500] hover:bg-[#e0a300] rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399]"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-[#071C45]" />
                        <span>Enviar dúvida no WhatsApp</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedTopic(null)}
                        className="text-xs text-[#46556B] hover:text-[#071C45] text-center pt-1 cursor-pointer"
                      >
                        ← Voltar às opções
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Subtopic: Suporte */}
                {selectedTopic === 'suporte' && (
                  <motion.div
                    key="topic-suporte"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.14, ease: gentleDecelEase }}
                    className="space-y-3 pt-1"
                  >
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-[#071C45] leading-relaxed">
                      Para clientes com sistemas já instalados que necessitam de orientação sobre inversor, acompanhamento de geração ou manutenção técnica.
                    </div>

                    <div className="flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={() => handleOpenWhatsAppTopic('Preciso de suporte técnico / manutenção para o meu sistema solar.')}
                        className="p-2.5 text-xs text-center font-bold text-[#071C45] bg-[#F9B500] hover:bg-[#e0a300] rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399]"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-[#071C45]" />
                        <span>Falar com suporte no WhatsApp</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedTopic(null)}
                        className="text-xs text-[#46556B] hover:text-[#071C45] text-center pt-1 cursor-pointer"
                      >
                        ← Voltar às opções
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Footer note */}
            <div className="px-4 py-2.5 bg-slate-50 border-t border-[#D6DFEC] text-[11px] text-[#46556B] text-center flex items-center justify-center gap-1.5">
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#023399]" />
              <span>WhatsApp oficial: {COMPANY.whatsappFormatado}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stable launcher button with discrete Motion press response */}
      <motion.button
        type="button"
        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 bg-[#023399] hover:bg-[#071C45] text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-2xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9B500] cursor-pointer border border-white/20 group"
        aria-label={isOpen ? 'Fechar janela de contato' : 'Abrir opções de contato no WhatsApp'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-[#F9B500]" />
        ) : (
          <WhatsAppIcon className="w-6 h-6 text-[#F9B500] group-hover:scale-105 transition-transform" />
        )}
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          {isOpen ? 'Fechar' : 'WhatsApp SunHouse'}
        </span>
      </motion.button>

    </div>
  );
};
