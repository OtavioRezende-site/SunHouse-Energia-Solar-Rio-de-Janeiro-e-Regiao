import React, { useEffect, useRef, useCallback } from 'react';
import { X, Shield } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { COMPANY } from '../data/companyData';
import { gentleDecelEase } from '../utils/motionTransitions';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
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
          aria-labelledby="privacy-modal-title"
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
                <Shield className="w-5 h-5 text-[#F9B500]" />
                <h2 id="privacy-modal-title" className="text-lg sm:text-xl font-extrabold text-white">
                  Política de Privacidade e Tratamento de Dados
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9B500] cursor-pointer"
                aria-label="Fechar política de privacidade"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content (internal scroll preserved) */}
            <div className="p-6 sm:p-8 space-y-5 max-h-[75vh] overflow-y-auto text-xs sm:text-sm text-[#46556B] leading-relaxed">
              <div>
                <h3 className="font-bold text-sm text-[#071C45] mb-1">1. Finalidade do Tratamento</h3>
                <p>
                  As informações solicitadas nos formulários deste site (nome, número de WhatsApp, cidade, tipo de imóvel e faixa de consumo) destinam-se exclusivamente a atender sua solicitação de avaliação e proposta de energia solar com a {COMPANY.nome}.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-sm text-[#071C45] mb-1">2. Modalidade de Encaminhamento</h3>
                <p>
                  Nesta versão do site, os dados preenchidos são formatados localmente no seu dispositivo e encaminhados de forma transparente via aplicativo WhatsApp oficial da empresa ({COMPANY.whatsappFormatado}). Não armazenamos dados pessoais em bancos de dados não autorizados nem comercializamos informações com terceiros.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-sm text-[#071C45] mb-1">3. Direitos do Titular</h3>
                <p>
                  Em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018), você pode a qualquer momento solicitar a confirmação, correção ou exclusão de seus dados do histórico de atendimento através do nosso e-mail oficial: <span className="font-semibold text-[#071C45]">{COMPANY.email}</span>.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-sm text-[#071C45] mb-1">4. Base Territorial e Responsável</h3>
                <p>
                  {COMPANY.nome} — {COMPANY.endereco.completo}.
                </p>
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
                Entendido
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
