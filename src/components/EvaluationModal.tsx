import React, { useEffect, useRef } from 'react';
import { X, SunMedium } from 'lucide-react';
import { PropertyType } from '../types';
import { LeadForm } from './LeadForm';

interface EvaluationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: PropertyType;
  onOpenPrivacy?: () => void;
}

export const EvaluationModal: React.FC<EvaluationModalProps> = ({
  isOpen,
  onClose,
  initialType = 'Casa',
  onOpenPrivacy,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-evaluation-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#071C45]/70 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div
        ref={modalRef}
        className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-[#D6DFEC] overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="bg-[#071C45] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#023399] text-[#F9B500]">
              <SunMedium className="w-5 h-5" />
            </div>
            <div>
              <h2 id="modal-evaluation-title" className="text-lg sm:text-xl font-extrabold text-white">
                Avaliação do seu imóvel
              </h2>
              <p className="text-xs text-white/80">
                Conte sobre seu consumo para orientar a proposta.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9B500]"
            aria-label="Fechar janela de avaliação"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body with Lead Form */}
        <div className="p-6 sm:p-7 max-h-[82vh] overflow-y-auto">
          <LeadForm
            initialType={initialType}
            idPrefix="modal"
            onOpenPrivacy={() => {
              onClose();
              if (onOpenPrivacy) onOpenPrivacy();
            }}
          />
        </div>
      </div>
    </div>
  );
};
