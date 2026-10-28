import { LeadFormData } from '../types';
import { COMPANY } from '../data/companyData';

export function buildWhatsAppMessage(data: LeadFormData): string {
  const lines: string[] = [
    `Olá, Carlos Alberto (SunHouse Energia Solar)! Gostaria de solicitar uma avaliação técnica para o meu imóvel.`,
    ``,
    `*Nome:* ${data.nome.trim()}`,
    `*WhatsApp:* ${data.whatsapp.trim()}`,
    `*Cidade / Bairro:* ${data.cidade.trim()}`,
    `*Tipo de imóvel:* ${data.tipoImovel}`,
    `*Faixa média da conta mensal:* ${data.faixaConta}`,
  ];

  if (data.observacao && data.observacao.trim()) {
    lines.push(`*Observações:* ${data.observacao.trim()}`);
  }

  lines.push(``);
  lines.push(`Gostaria de saber sobre a viabilidade, homologação Light/Enel e a estimativa de economia.`);

  return lines.join('\n');
}

export function buildWhatsAppLink(data: LeadFormData): string {
  const text = buildWhatsAppMessage(data);
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${COMPANY.whatsappNumero}?text=${encodedText}`;
}

export function buildQuickWhatsAppLink(subject?: string): string {
  const text = subject
    ? `Olá, Carlos Alberto! ${subject}`
    : `Olá, Carlos Alberto (SunHouse)! Gostaria de tirar uma dúvida sobre energia solar para o meu imóvel.`;
  return `https://wa.me/${COMPANY.whatsappNumero}?text=${encodeURIComponent(text)}`;
}

export function formatPhone(value: string): string {
  const clean = value.replace(/\D/g, '').slice(0, 11);
  if (clean.length <= 2) return clean;
  if (clean.length <= 6) return `(${clean.slice(0, 2)}) ${clean.slice(2)}`;
  if (clean.length <= 10) return `(${clean.slice(0, 2)}) ${clean.slice(2, 6)}-${clean.slice(6)}`;
  return `(${clean.slice(0, 2)}) ${clean.slice(2, 7)}-${clean.slice(7, 11)}`;
}

export function isValidBrazilianPhone(value: string): boolean {
  const clean = value.replace(/\D/g, '');
  return clean.length >= 10 && clean.length <= 11;
}
