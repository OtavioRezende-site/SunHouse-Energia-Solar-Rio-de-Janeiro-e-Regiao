import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/companyData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="duvidas" className="py-20 sm:py-24 bg-white border-b border-[#D6DFEC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#023399] uppercase bg-[#023399]/10 px-3 py-1 rounded-full mb-3">
            Esclarecimentos Importantes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071C45] tracking-tight">
            Antes de decidir, tire suas dúvidas.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#46556B] leading-relaxed">
            Respostas claras e realistas para as principais perguntas sobre energia solar.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-[#D6DFEC] rounded-2xl overflow-hidden bg-[#F5F7FA] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left font-bold text-base sm:text-lg text-[#071C45] hover:text-[#023399] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399]"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#023399] shrink-0" />
                    <span>{faq.pergunta}</span>
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-white border border-[#D6DFEC] text-[#071C45] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#023399] text-white border-transparent' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Content strictly in the DOM */}
                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${faq.id}`}
                  className={`px-5 sm:px-6 pb-6 text-sm sm:text-base text-[#46556B] leading-relaxed border-t border-[#D6DFEC]/60 pt-4 transition-all ${
                    isOpen ? 'block' : 'hidden'
                  }`}
                >
                  <p>{faq.resposta}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
