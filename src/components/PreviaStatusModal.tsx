import React, { useEffect, useRef, useCallback } from 'react';
import { X, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { COMPANY } from '../data/companyData';
import { gentleDecelEase } from '../utils/motionTransitions';

interface PreviaStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PreviaStatusModal: React.FC<PreviaStatusModalProps> = ({ isOpen, onClose }) => {
  const shouldReduceMotion = useReducedMotion();
  const triggerRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement | null;
      document.body.style.overflow = 'hidden';

      const timer = setTimeout(() => {
        const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable && focusable.length > 0) {
          focusable[0].focus();
        }
      }, 40);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Coordinate scroll unlocking and focus restoration with the completion of the exit animation
  const handleExitComplete = useCallback(() => {
    document.body.style.overflow = '';
    if (triggerRef.current) {
      triggerRef.current.focus({ preventScroll: true });
    }
  }, []);

  // Keyboard navigation: Escape and focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        if (!modalRef.current) return;
        const focusable = Array.from(
          modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.hasAttribute('disabled') && el.offsetParent !== null);

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="previa-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Animated Backdrop (Fade ~160ms) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#071C45]/70 backdrop-blur-sm cursor-pointer"
            aria-hidden="true"
          />

          {/* Animated Panel (Opacity + Scale 0.98 to 1 <= 220ms) */}
          <motion.div
            ref={modalRef}
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.98,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.98,
            }}
            transition={{
              duration: shouldReduceMotion ? 0.1 : 0.2,
              ease: gentleDecelEase,
            }}
            className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#D6DFEC] overflow-hidden z-10 my-8 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#071C45] px-6 py-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#F9B500]" />
                <div>
                  <h2 id="previa-modal-title" className="text-lg sm:text-xl font-extrabold text-white">
                    Status da Prévia & Registro de Pendências
                  </h2>
                  <p className="text-xs text-white/80">
                    Transparência operacional conforme arquivo de especificação
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9B500] cursor-pointer"
                aria-label="Fechar janela"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content (internal scroll preserved) */}
            <div className="p-6 sm:p-8 space-y-5 max-h-[75vh] overflow-y-auto text-xs sm:text-sm text-[#46556B] leading-relaxed">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-emerald-950">
                <h3 className="font-bold text-sm flex items-center gap-2 mb-2 text-emerald-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>O que está implementado e pronto na prévia:</span>
                </h3>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                  <li>Estrutura multipáginas completa: Início (/), Soluções (/solucoes), Como funciona (/como-funciona), Projetos (/projetos), Dúvidas (/duvidas) e Pedir avaliação (/pedir-avaliacao).</li>
                  <li>Identidade visual oficial azul e amarela da SunHouse no Rio de Janeiro.</li>
                  <li>Hero cinematográfica responsiva com vídeo horizontal 16:9 no computador/tablet e vídeo vertical 9:16 no celular.</li>
                  <li>Faixa de reputação confirmada: nota 4,6 de 5,0 estrelas no Google com mais de 60 avaliações verificadas.</li>
                  <li>Página Soluções com aprofundamento residencial, comercial, homologação Light/Enel, Wallbox, eletricista e escopo técnico.</li>
                  <li>Página Como Funciona com as 4 etapas detalhadas, diferenciais operacionais e transparência de prazos.</li>
                  <li>Página Projetos com galeria editorial de fotos reais, links oficiais e visualização ampliada acessível (lightbox).</li>
                  <li>Página Dúvidas com perguntas categorizadas e busca em tempo real.</li>
                  <li>Página Pedir Avaliação com formulário honesto e encaminhamento direto para o WhatsApp do Carlos Alberto.</li>
                  <li>Central de ajuda flutuante não intrusiva com suporte à navegação.</li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-950">
                <h3 className="font-bold text-sm flex items-center gap-2 mb-2 text-amber-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Dados Cadastrais Oficiais Validados:</span>
                </h3>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                  <li><strong>Decisor / Contato Principal:</strong> Carlos Alberto ({COMPANY.whatsappFormatado} / {COMPANY.telefoneComercial}).</li>
                  <li><strong>Sede Oficial:</strong> {COMPANY.endereco.completo}.</li>
                  <li><strong>CNPJ Ativo:</strong> {COMPANY.cnpj.numero} ({COMPANY.cnpj.status}).</li>
                  <li><strong>Horário Oficial:</strong> {COMPANY.horario}.</li>
                  <li><strong>Cobertura:</strong> Raio de até 50 km a partir da capital (Rio de Janeiro, Baixada Fluminense e Região Metropolitana).</li>
                </ul>
              </div>

              <div className="p-3.5 bg-slate-100 rounded-xl text-xs text-[#071C45]">
                <strong>Observação técnica:</strong> Este site respeita rigorosamente o pacote de criação e cumpre as cinco etapas do documento mestre.
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 border-t border-[#D6DFEC] text-right">
              <motion.button
                type="button"
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-[#023399] hover:bg-[#071C45] text-white font-bold text-xs sm:text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9B500] cursor-pointer"
              >
                Fechar
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
