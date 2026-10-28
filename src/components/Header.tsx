import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, LayoutGroup, useReducedMotion } from 'motion/react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SunHouseLogo } from './SunHouseLogo';
import { COMPANY } from '../data/companyData';
import { motionTransitions } from '../utils/motionTransitions';
import { getAssetUrl } from '../utils/assetPath';

const MotionLink = motion.create(Link);

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const isHome = location.pathname === '/';

  // Refs for accessible focus management & scroll-lock coordination
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  const savedScrollYRef = useRef(0);
  const isLockedRef = useRef(false);
  const navigatedToTopRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is requested
  const lockScroll = useCallback(() => {
    if (isLockedRef.current) return;
    savedScrollYRef.current = window.scrollY;
    isLockedRef.current = true;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${savedScrollYRef.current}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }, []);

  // Unlock scroll coordinated with exit animation completion
  const unlockScroll = useCallback(() => {
    if (!isLockedRef.current) return;
    isLockedRef.current = false;
    const scrollY = savedScrollYRef.current;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';

    if (navigatedToTopRef.current) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      navigatedToTopRef.current = false;
    } else {
      window.scrollTo({ top: scrollY, left: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, []);

  // Handle open/close scroll locking
  useEffect(() => {
    if (mobileMenuOpen) {
      lockScroll();
    }
  }, [mobileMenuOpen, lockScroll]);

  // Clean-up safeguard on unmount
  useEffect(() => {
    return () => {
      if (isLockedRef.current) {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }
    };
  }, []);

  // Closes the menu, sets scroll flags, and returns focus to hamburger button
  const closeMobileMenu = useCallback((options?: { returnToTop?: boolean }) => {
    if (options?.returnToTop) {
      navigatedToTopRef.current = true;
    }
    setMobileMenuOpen(false);
    requestAnimationFrame(() => {
      hamburgerButtonRef.current?.focus({ preventScroll: true });
    });
  }, []);

  // Close mobile menu on Escape key with focus restoration
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        e.preventDefault();
        closeMobileMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, closeMobileMenu]);

  // Handle "Início" click: return smoothly to hero when on home page
  const handleHomeClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMobileMenu({ returnToTop: isHome });
  };

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Soluções', path: '/solucoes' },
    { name: 'Como funciona', path: '/como-funciona' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Dúvidas', path: '/duvidas' },
  ];

  // Header background style:
  // When mobileMenuOpen is true, always solid white with shadow.
  // On inner pages, solid white with shadow.
  // On home page without scroll, transparent gradient.
  const isLightHeader = isScrolled || !isHome || mobileMenuOpen;

  return (
    <>
      {/*
        Header element:
        - Fixed padding (py-3 sm:py-3.5) across all scroll states to satisfy rule 7:
          "Não anime continuamente a altura ou o padding do cabeçalho durante a rolagem."
        - CSS transition strictly on background-color, border-color, and box-shadow.
      */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 py-3 sm:py-3.5 transition-[background-color,border-color,box-shadow] duration-200 ease-renovo ${
          isLightHeader
            ? 'bg-white shadow-sm border-b border-[#D6DFEC]'
            : 'bg-gradient-to-b from-[#071C45]/90 via-[#071C45]/50 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo leads to home */}
            <Link
              to="/"
              onClick={handleHomeClick}
              className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9B500] rounded-lg"
              aria-label="SunHouse Energia Solar - Página inicial"
            >
              <SunHouseLogo
                variant={isLightHeader ? 'light' : 'dark'}
                className="h-9 sm:h-11 w-auto"
              />
            </Link>

            {/*
              Desktop Navigation:
              1. Uses exclusive LayoutGroup ("desktop-nav-group")
              2. Uses layoutId="active-desktop-nav-indicator" for smooth sliding between links
              3. Preserves exact colors (isLightHeader ? '#023399' : '#F9B500')
              4. Removed conflicting transition-all; preserves colors, focus, and hover
            */}
            <LayoutGroup id="desktop-nav-group">
              <nav className="hidden md:flex items-center gap-6 lg:gap-7" aria-label="Navegação principal">
                {navItems.map((item) => {
                  const isActive =
                    item.path === '/'
                      ? location.pathname === '/'
                      : location.pathname.startsWith(item.path);

                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={item.path === '/' ? handleHomeClick : undefined}
                      aria-current={isActive ? 'page' : undefined}
                      className={`text-sm font-semibold relative py-1 px-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9B500] transition-colors duration-150 ${
                        isActive
                          ? isLightHeader
                            ? 'text-[#023399]'
                            : 'text-[#F9B500]'
                          : isLightHeader
                          ? 'text-[#46556B] hover:text-[#023399]'
                          : 'text-white/90 hover:text-white'
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {isActive && (
                        <motion.span
                          layoutId="active-desktop-nav-indicator"
                          className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                            isLightHeader ? 'bg-[#023399]' : 'bg-[#F9B500]'
                          }`}
                          transition={shouldReduceMotion ? { duration: 0 } : motionTransitions.navIndicator}
                        />
                      )}
                    </NavLink>
                  );
                })}
              </nav>
            </LayoutGroup>

            {/* Header Actions */}
            <div className="hidden sm:flex items-center gap-3 lg:gap-5">
              <a
                href={COMPANY.telefoneLink}
                className={`flex items-center gap-2 text-xs lg:text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9B500] rounded-lg px-2 py-1.5 ${
                  isLightHeader
                    ? 'text-[#46556B] hover:text-[#023399]'
                    : 'text-white/90 hover:text-white'
                }`}
                title="Ligar para a SunHouse Energia Solar"
                aria-label={`Ligar para ${COMPANY.whatsappFormatado}`}
              >
                <Phone className="w-4 h-4 text-[#F9B500]" />
                <span>{COMPANY.whatsappFormatado}</span>
              </a>

              {/* "Pedir avaliação" leading to /pedir-avaliacao */}
              <MotionLink
                to="/pedir-avaliacao"
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className={`inline-flex items-center justify-center gap-2 font-bold text-xs lg:text-sm px-4 lg:px-5 py-2.5 rounded-xl shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399] ${
                  location.pathname === '/pedir-avaliacao'
                    ? 'bg-[#023399] text-white ring-2 ring-[#F9B500]'
                    : 'bg-[#F9B500] hover:bg-[#e0a300] text-[#071C45]'
                }`}
              >
                <span>Pedir avaliação</span>
                <ArrowRight className="w-4 h-4" />
              </MotionLink>
            </div>

            {/* Mobile Actions: Highlighted CTA + Hamburger button */}
            <div className="flex items-center gap-2 md:hidden">
              <Link
                to="/pedir-avaliacao"
                onClick={() => closeMobileMenu({ returnToTop: location.pathname !== '/pedir-avaliacao' })}
                className="bg-[#F9B500] hover:bg-[#e0a300] text-[#071C45] font-extrabold text-xs px-3.5 py-2 rounded-xl shadow-sm"
              >
                Pedir avaliação
              </Link>

              <button
                ref={hamburgerButtonRef}
                onClick={() => {
                  if (mobileMenuOpen) {
                    closeMobileMenu();
                  } else {
                    setMobileMenuOpen(true);
                  }
                }}
                className={`p-2 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9B500] cursor-pointer ${
                  isLightHeader ? 'text-[#071C45] hover:bg-slate-100' : 'text-white hover:bg-white/10'
                }`}
                aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/*
        Mobile Menu Drawer:
        - Animated with AnimatePresence: opacity and vertical offset <= 12px (10px entry, 8px exit)
        - onExitComplete coordinates scroll unlocking without page jumps
        - Items staggered at 30ms interval (25–35 ms) without delaying navigation
      */}
      <AnimatePresence onExitComplete={unlockScroll}>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-nav-drawer"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={shouldReduceMotion ? { duration: 0 } : motionTransitions.menu}
            className="md:hidden fixed inset-x-0 top-[57px] sm:top-[65px] bottom-0 z-50 bg-white border-t border-[#D6DFEC] shadow-2xl flex flex-col justify-between overflow-y-auto px-5 py-6"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação móvel"
          >
            <nav className="flex flex-col gap-1.5" aria-label="Menu móvel">
              <span className="text-[11px] font-bold text-[#46556B] uppercase tracking-wider px-3 mb-1">
                Navegação
              </span>

              {navItems.map((item, index) => {
                const isActive =
                  item.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.path);

                return (
                  <motion.div
                    key={item.path}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : {
                            ...motionTransitions.menuItem,
                            delay: 0.03 + index * motionTransitions.menuItemStagger,
                          }
                    }
                  >
                    <NavLink
                      to={item.path}
                      onClick={(e) => {
                        if (item.path === '/') {
                          handleHomeClick(e);
                        } else {
                          closeMobileMenu({ returnToTop: location.pathname !== item.path });
                        }
                      }}
                      aria-current={isActive ? 'page' : undefined}
                      className={`font-bold text-base py-3.5 px-4 rounded-xl transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-blue-50 text-[#023399]'
                          : 'text-[#071C45] hover:bg-slate-50'
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive ? (
                        <span className="w-2.5 h-2.5 rounded-full bg-[#023399]" />
                      ) : (
                        <ArrowRight className="w-4 h-4 text-slate-300" />
                      )}
                    </NavLink>
                  </motion.div>
                );
              })}

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        ...motionTransitions.menuItem,
                        delay: 0.03 + navItems.length * motionTransitions.menuItemStagger,
                      }
                }
                className="pt-5 mt-3 border-t border-[#D6DFEC] space-y-3"
              >
                <a
                  href={COMPANY.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => closeMobileMenu()}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#F5F7FA] border border-[#D6DFEC] text-[#071C45] hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <WhatsAppIcon className="w-5 h-5 text-[#023399]" />
                    <div>
                      <span className="block text-xs font-bold text-[#071C45]">WhatsApp Comercial</span>
                      <span className="text-xs text-[#46556B]">{COMPANY.whatsappFormatado}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#023399]" />
                </a>

                <MotionLink
                  to="/pedir-avaliacao"
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  onClick={() => closeMobileMenu({ returnToTop: location.pathname !== '/pedir-avaliacao' })}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F9B500] hover:bg-[#e0a300] text-[#071C45] font-black text-sm py-4 px-4 rounded-xl shadow-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023399]"
                >
                  <span>Pedir avaliação do imóvel</span>
                  <ArrowRight className="w-4 h-4" />
                </MotionLink>
              </motion.div>
            </nav>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 0.2,
                      delay: 0.03 + (navItems.length + 1) * motionTransitions.menuItemStagger,
                    }
              }
              className="pt-4 border-t border-[#D6DFEC] text-center text-xs text-[#46556B]"
            >
              SunHouse Energia Solar • Rio de Janeiro e Região
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
