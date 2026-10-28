import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, ExternalLink, Shield } from 'lucide-react';
import { COMPANY } from '../data/companyData';
import { GoogleMapsLogo, WazeLogo } from './RouteBrandIcons';
import { SunHouseLogo } from './SunHouseLogo';
import { getAssetUrl } from '../utils/assetPath';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenPreviaStatus: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenPreviaStatus,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071C45] text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9B500] rounded-lg" aria-label="SunHouse Energia Solar - Página inicial">
              <SunHouseLogo variant="dark" className="h-9 sm:h-10 w-auto" />
            </Link>
            <p className="text-sm text-white/75 leading-relaxed max-w-sm">
              Projetos fotovoltaicos planejados para a sua realidade. Estudo, instalação, homologação e suporte em Rio de Janeiro e região.
            </p>
            <div className="pt-2">
              <a
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/90 hover:text-[#F9B500] transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-500" />
                <span>{COMPANY.instagramHandle}</span>
                <ExternalLink className="w-3 h-3 text-white/50" />
              </a>
            </div>
          </div>

          {/* Quick links to real pages */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#F9B500] uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/solucoes" className="hover:text-white transition-colors">
                  Soluções para Casa e Comércio
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="hover:text-white transition-colors">
                  Como funciona nosso processo
                </Link>
              </li>
              <li>
                <Link to="/projetos" className="hover:text-white transition-colors">
                  Projetos e publicações reais
                </Link>
              </li>
              <li>
                <Link to="/duvidas" className="hover:text-white transition-colors">
                  Dúvidas frequentes
                </Link>
              </li>
              <li>
                <Link
                  to="/pedir-avaliacao"
                  className="inline-flex items-center gap-1 text-[#F9B500] hover:underline font-semibold"
                >
                  Pedir avaliação do imóvel →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Route Buttons */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-xs font-bold text-[#F9B500] uppercase tracking-wider">
              Sede & Canais Oficiais
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F9B500] shrink-0 mt-0.5" />
                <span>{COMPANY.endereco.completo}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F9B500] shrink-0" />
                <div className="space-x-2">
                  <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold text-white">
                    {COMPANY.whatsappFormatado}
                  </a>
                  <span className="text-white/40">•</span>
                  <a href={COMPANY.telefoneComercialLink} className="hover:underline text-white/80">
                    {COMPANY.telefoneComercial}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F9B500] shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:underline">
                  {COMPANY.email}
                </a>
              </div>
              <div className="text-[11px] text-white/60 pt-1">
                CNPJ: {COMPANY.cnpj.numero} ({COMPANY.cnpj.status}) • {COMPANY.horario}
              </div>
            </div>

            {/* Quick GPS Route Buttons in Footer */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <a
                href={COMPANY.googleMaps.rotaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-3 py-2 rounded-xl transition-colors group"
                title="Abrir rota no Google Maps a partir da sua localização"
              >
                <GoogleMapsLogo className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Rota no Google Maps</span>
                <ExternalLink className="w-3 h-3 text-white/50" />
              </a>

              <a
                href={COMPANY.googleMaps.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#33CCFF]/20 hover:bg-[#33CCFF]/35 border border-[#33CCFF]/50 text-[#33CCFF] hover:text-white font-bold px-3 py-2 rounded-xl transition-colors group"
                title="Abrir rota no Waze a partir da sua localização"
              >
                <WazeLogo className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Rota no Waze</span>
                <ExternalLink className="w-3 h-3 text-[#33CCFF]/60" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {currentYear} {COMPANY.nome}. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>

            <button
              onClick={onOpenPreviaStatus}
              className="inline-flex items-center gap-1.5 hover:text-[#F9B500] transition-colors font-medium text-white/70 cursor-pointer"
              title="Visualizar status e pendências da prévia técnica"
            >
              <Shield className="w-3.5 h-3.5 text-[#F9B500]" />
              <span>Status da Prévia</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
