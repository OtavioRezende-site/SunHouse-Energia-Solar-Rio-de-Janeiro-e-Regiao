import React, { useState } from 'react';
import { Copy, Check, AlertCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { LeadFormData, PropertyType, BillRange } from '../types';
import { buildWhatsAppLink, buildWhatsAppMessage, formatPhone, isValidBrazilianPhone } from '../utils/whatsapp';
import { gentleDecelEase } from '../utils/motionTransitions';

interface LeadFormProps {
  initialType?: PropertyType;
  idPrefix?: string;
  onSuccess?: () => void;
  onOpenPrivacy?: () => void;
}

const CIDADES_PREDEFINIDAS = [
  'Rio de Janeiro (Capital)',
  'Honório Gurgel / Zona Norte',
  'Baixada Fluminense',
  'Zona Oeste',
  'Região Metropolitana (RJ)',
  'Outra localidade',
];


const FAIXAS_CONTA: BillRange[] = [
  'Até R$300',
  'R$301–600',
  'R$601–1.000',
  'Acima de R$1.000',
  'Prefiro informar depois',
];

export const LeadForm: React.FC<LeadFormProps> = ({
  initialType = 'Casa',
  idPrefix = 'form',
  onSuccess,
  onOpenPrivacy,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState<LeadFormData>({
    nome: '',
    whatsapp: '',
    cidade: 'Rio de Janeiro (Capital)',
    tipoImovel: initialType,
    faixaConta: 'R$301–600',
    observacao: '',
  });

  // Synchronize when initialType changes via navigation
  React.useEffect(() => {
    setFormData((prev) => ({ ...prev, tipoImovel: initialType }));
  }, [initialType]);

  const [outraCidadeTexto, setOutraCidadeTexto] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isCopied, setIsCopied] = useState(false);
  const [submittedLinkReady, setSubmittedLinkReady] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData((prev) => ({ ...prev, whatsapp: formatted }));
    if (errors.whatsapp) {
      setErrors((prev) => ({ ...prev, whatsapp: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Por favor, informe seu nome.';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'Por favor, informe seu WhatsApp com DDD.';
    } else if (!isValidBrazilianPhone(formData.whatsapp)) {
      newErrors.whatsapp = 'Informe um telefone celular válido com DDD (ex: 21 99999-9999).';
    }

    if (formData.cidade === 'Outra cidade' && !outraCidadeTexto.trim()) {
      newErrors.cidade = 'Por favor, especifique o nome da sua cidade.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getEffectiveFormData = (): LeadFormData => {
    const effectiveCity = formData.cidade === 'Outra cidade' ? outraCidadeTexto.trim() : formData.cidade;
    return {
      ...formData,
      cidade: effectiveCity || 'A confirmar',
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const effectiveData = getEffectiveFormData();
    const link = buildWhatsAppLink(effectiveData);
    setSubmittedLinkReady(true);

    // Open WhatsApp in a new tab explicitly on user submission
    window.open(link, '_blank', 'noopener,noreferrer');

    if (onSuccess) {
      onSuccess();
    }
  };

  const handleCopyMessage = () => {
    const effectiveData = getEffectiveFormData();
    const message = buildWhatsAppMessage(effectiveData);
    navigator.clipboard.writeText(message).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
      
      {/* Nome */}
      <div>
        <label htmlFor={`${idPrefix}-nome`} className="block text-xs sm:text-sm font-bold text-[#071C45] mb-1.5">
          Nome completo <span className="text-red-500">*</span>
        </label>
        <input
          id={`${idPrefix}-nome`}
          type="text"
          required
          autoComplete="name"
          placeholder="Como gostaria de ser chamado?"
          value={formData.nome}
          onChange={(e) => {
            setFormData({ ...formData, nome: e.target.value });
            if (errors.nome) setErrors({ ...errors, nome: '' });
          }}
          className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base text-[#071C45] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#023399] ${
            errors.nome ? 'border-red-500 ring-1 ring-red-500' : 'border-[#D6DFEC]'
          }`}
        />
        <AnimatePresence>
          {errors.nome && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="mt-1 text-xs text-red-600 flex items-center gap-1"
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.nome}</span>
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* WhatsApp */}
      <div>
        <label htmlFor={`${idPrefix}-whatsapp`} className="block text-xs sm:text-sm font-bold text-[#071C45] mb-1.5">
          WhatsApp com DDD <span className="text-red-500">*</span>
        </label>
        <input
          id={`${idPrefix}-whatsapp`}
          type="tel"
          inputMode="tel"
          required
          autoComplete="tel"
          placeholder="(21) 99999-9999"
          value={formData.whatsapp}
          onChange={handlePhoneChange}
          className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base text-[#071C45] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#023399] ${
            errors.whatsapp ? 'border-red-500 ring-1 ring-red-500' : 'border-[#D6DFEC]'
          }`}
        />
        <AnimatePresence>
          {errors.whatsapp && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="mt-1 text-xs text-red-600 flex items-center gap-1"
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.whatsapp}</span>
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Cidade */}
      <div>
        <label htmlFor={`${idPrefix}-cidade`} className="block text-xs sm:text-sm font-bold text-[#071C45] mb-1.5">
          Cidade onde fica o imóvel <span className="text-red-500">*</span>
        </label>
        <select
          id={`${idPrefix}-cidade`}
          value={formData.cidade}
          onChange={(e) => {
            setFormData({ ...formData, cidade: e.target.value });
            if (errors.cidade) setErrors({ ...errors, cidade: '' });
          }}
          className="w-full px-4 py-3 rounded-xl border border-[#D6DFEC] text-sm sm:text-base text-[#071C45] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#023399]"
        >
          {CIDADES_PREDEFINIDAS.map((cidade) => (
            <option key={cidade} value={cidade}>
              {cidade}
            </option>
          ))}
        </select>

        {/* Conditional "Outra cidade" input with smooth height/opacity animation */}
        <AnimatePresence>
          {formData.cidade === 'Outra cidade' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.18, ease: gentleDecelEase }}
              className="mt-2.5 overflow-hidden"
            >
              <input
                type="text"
                placeholder="Digite o nome da sua cidade"
                value={outraCidadeTexto}
                onChange={(e) => {
                  setOutraCidadeTexto(e.target.value);
                  if (errors.cidade) setErrors({ ...errors, cidade: '' });
                }}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#071C45] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#023399] ${
                  errors.cidade ? 'border-red-500 ring-1 ring-red-500' : 'border-[#D6DFEC]'
                }`}
              />
              <AnimatePresence>
                {errors.cidade && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="mt-1 text-xs text-red-600 flex items-center gap-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.cidade}</span>
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tipo de Imóvel */}
      <div>
        <label className="block text-xs sm:text-sm font-bold text-[#071C45] mb-1.5">
          Tipo de imóvel <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-3 gap-2">
          {(['Casa', 'Comércio', 'Outro'] as PropertyType[]).map((tipo) => (
            <button
              key={tipo}
              type="button"
              onClick={() => setFormData({ ...formData, tipoImovel: tipo })}
              className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399] cursor-pointer ${
                formData.tipoImovel === tipo
                  ? 'bg-[#023399] text-white border-[#023399] shadow-sm'
                  : 'bg-white text-[#46556B] border-[#D6DFEC] hover:border-[#023399]/40'
              }`}
            >
              {tipo}
            </button>
          ))}
        </div>
      </div>

      {/* Faixa média da conta mensal */}
      <div>
        <label htmlFor={`${idPrefix}-faixa`} className="block text-xs sm:text-sm font-bold text-[#071C45] mb-1.5">
          Faixa média da conta mensal de energia
        </label>
        <select
          id={`${idPrefix}-faixa`}
          value={formData.faixaConta}
          onChange={(e) => setFormData({ ...formData, faixaConta: e.target.value as BillRange })}
          className="w-full px-4 py-3 rounded-xl border border-[#D6DFEC] text-sm sm:text-base text-[#071C45] bg-white transition-colors focus:outline-none focus-ring-2 focus:ring-[#023399]"
        >
          {FAIXAS_CONTA.map((faixa) => (
            <option key={faixa} value={faixa}>
              {faixa}
            </option>
          ))}
        </select>
        <p className="mt-1 text-[11px] text-[#46556B]">
          Informação para orientação inicial de porte do sistema, sem simulação financeira automática.
        </p>
      </div>

      {/* Observação opcional */}
      <div>
        <label htmlFor={`${idPrefix}-obs`} className="block text-xs sm:text-sm font-bold text-[#071C45] mb-1.5">
          Observação adicional <span className="text-xs font-normal text-[#46556B]">(opcional)</span>
        </label>
        <textarea
          id={`${idPrefix}-obs`}
          rows={2}
          placeholder="Ex: telhado de telha colonial, obra em andamento, etc."
          value={formData.observacao}
          onChange={(e) => setFormData({ ...formData, observacao: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-[#D6DFEC] text-sm text-[#071C45] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#023399]"
        />
      </div>

      {/* Primary Action Button with discrete Motion press feedback */}
      <div className="pt-2">
        <motion.button
          type="submit"
          whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          className="w-full inline-flex items-center justify-center gap-2.5 bg-[#F9B500] hover:bg-[#e0a300] text-[#071C45] font-extrabold text-base px-6 py-3.5 rounded-xl shadow-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399] cursor-pointer"
        >
          <WhatsAppIcon className="w-5 h-5 text-[#071C45]" />
          <span>Continuar no WhatsApp</span>
        </motion.button>
      </div>

      {/* Feedback / Instructions after WhatsApp opening request */}
      <AnimatePresence>
        {submittedLinkReady && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2, ease: gentleDecelEase }}
            className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-[#071C45] space-y-2"
          >
            <p className="font-semibold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#023399]" />
              <span>O WhatsApp foi solicitado para abertura. Revise a mensagem e toque em enviar.</span>
            </p>
            <div className="flex items-center justify-between gap-2 pt-1 border-t border-blue-100">
              <span className="text-[#46556B]">Não abriu o aplicativo?</span>
              <button
                type="button"
                onClick={handleCopyMessage}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#023399] hover:underline cursor-pointer"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isCopied ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.12 }}
                      className="inline-flex items-center gap-1 text-emerald-700"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Mensagem copiada!</span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.12 }}
                      className="inline-flex items-center gap-1"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar mensagem de avaliação</span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Privacy note */}
      <p className="text-[11px] text-center text-[#46556B] leading-relaxed pt-1">
        Usaremos estas informações para conversar com você sobre sua solicitação.{' '}
        <button
          type="button"
          onClick={onOpenPrivacy}
          className="underline text-[#023399] hover:text-[#071C45] cursor-pointer"
        >
          Consulte nossa Política de Privacidade.
        </button>
      </p>

    </form>
  );
};
