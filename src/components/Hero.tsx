import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, SunMedium } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { buildQuickWhatsAppLink } from '../utils/whatsapp';
import { gentleDecelEase } from '../utils/motionTransitions';
import { getAssetUrl } from '../utils/assetPath';

const MotionLink = motion.create(Link);

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Detect current viewport to mount strictly the appropriate video asset
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(min-width: 768px)').matches;
    }
    return true;
  });

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    const onChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  const whatsappHeroUrl = buildQuickWhatsAppLink(
    'Gostaria de solicitar uma avaliação para economizar até 95% na conta de luz com a SunHouse.'
  );

  // Play only the active video if reduced motion is not preferred
  useEffect(() => {
    if (shouldReduceMotion) return;
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, [isDesktop, shouldReduceMotion]);

  // Motion animation presets: whole sequence completes in ~480 ms (well within 500 ms)
  const badgeAnim = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.26, delay: 0.04, ease: gentleDecelEase },
  };

  const titleAnim = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay: 0.1, ease: gentleDecelEase },
  };

  const textAnim = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.26, delay: 0.16, ease: gentleDecelEase },
  };

  const ctaAnim = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.25, delay: 0.22, ease: gentleDecelEase },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-between bg-[#071C45] overflow-hidden pt-20 sm:pt-24 pb-8 sm:pb-12"
    >
      {/* Background Media Container (Strictly one active video mounted, no parallax, no zoom) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        {/* Normal mode: mount ONLY the video matching the active viewport, avoiding duplicate download */}
        {!shouldReduceMotion && isDesktop && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            tabIndex={-1}
            poster={getAssetUrl('/video/poster-desktop.webp')}
            className="w-full h-full object-cover object-[70%_center] lg:object-[65%_center] pointer-events-none"
            aria-hidden="true"
          >
            <source src={getAssetUrl('/video/hero-desktop.mp4')} type="video/mp4" />
          </video>
        )}

        {!shouldReduceMotion && !isDesktop && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            tabIndex={-1}
            poster={getAssetUrl('/video/poster-mobile.webp')}
            className="w-full h-full object-cover object-center pointer-events-none"
            aria-hidden="true"
          >
            <source src={getAssetUrl('/video/hero-mobile.mp4')} type="video/mp4" />
          </video>
        )}

        {/* Reduced motion mode: display crisp static poster without autoplay or video network transfer */}
        {shouldReduceMotion && (
          <>
            <img
              src={getAssetUrl('/video/poster-desktop.webp')}
              alt=""
              className="hidden md:block w-full h-full object-cover object-[70%_center] lg:object-[65%_center] pointer-events-none"
              aria-hidden="true"
            />
            <img
              src={getAssetUrl('/video/poster-mobile.webp')}
              alt=""
              className="md:hidden w-full h-full object-cover object-center pointer-events-none"
              aria-hidden="true"
            />
          </>
        )}

        {/* Desktop Gradient Overlays */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#071C45] via-[#071C45]/85 to-transparent w-[58%] lg:w-[50%]" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#071C45]/80 via-transparent to-[#071C45]/40" />
        
        {/* Mobile Overlays: Only subtle gradients at top and bottom to ensure text legibility while keeping center 100% visible */}
        <div className="md:hidden absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#071C45]/95 via-[#071C45]/60 to-transparent pointer-events-none" />
        <div className="md:hidden absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#071C45]/95 via-[#071C45]/65 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto flex-1 flex flex-col justify-between">
        
        {/* Desktop / Tablet Layout: Left-aligned, leaving right side 100% free for solar panels and house */}
        <div className="hidden md:block w-full md:max-w-[58%] lg:max-w-[50%] space-y-6 sm:space-y-7 my-auto">
          
          {/* Badge: Discreet entrance */}
          <motion.div {...badgeAnim}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium">
              <SunMedium className="w-4 h-4 text-[#F9B500] animate-pulse" />
              <span>Rio de Janeiro, Baixada Fluminense e Região Metropolitana</span>
            </div>
          </motion.div>

          {/* Semantic H1: Focus on Up to 95% Savings */}
          <motion.h1
            {...titleAnim}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-sm"
          >
            Economize até <span className="text-[#F9B500]">95% na conta de luz</span> com energia solar.
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            {...textAnim}
            className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-normal max-w-xl"
          >
            Projetos residenciais e comerciais, homologação completa na Light e Enel e suporte direto com o Carlos Alberto.
          </motion.p>

          {/* CTA Buttons & Trust Line: Joint entrance */}
          <motion.div {...ctaAnim} className="space-y-6">
            <div className="flex flex-row items-center gap-3.5 pt-1">
              <MotionLink
                to="/pedir-avaliacao"
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 bg-[#F9B500] hover:bg-[#e0a300] text-[#071C45] font-bold text-base px-6 py-3.5 rounded-xl shadow-lg shadow-black/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
              >
                <span>Quero avaliar meu imóvel</span>
                <ArrowRight className="w-5 h-5 text-[#071C45]" />
              </MotionLink>

              <motion.a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-base px-5 py-3.5 rounded-xl backdrop-blur-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9B500] cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#F9B500]" />
                <span>WhatsApp com Carlos Alberto</span>
              </motion.a>
            </div>

            {/* Trust Line */}
            <div className="pt-2 border-t border-white/15 space-y-1.5">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-white/95 uppercase">
                <ShieldCheck className="w-4 h-4 text-[#F9B500] shrink-0" />
                <span>Homologação Light & Enel • Carregador Wallbox • Eletricista Especializado</span>
              </div>
              <p className="text-xs sm:text-sm text-white/70">
                Atendimento presencial em um raio de até 50 km com base em Honório Gurgel (RJ).
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout: Open center, snappy choreographed entrance */}
        <div className="md:hidden flex flex-col justify-between h-full min-h-[calc(100svh-5.5rem)] pt-2 pb-1">
          
          {/* Top Section */}
          <div className="space-y-2.5 pt-1">
            <motion.div {...badgeAnim}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#071C45]/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold shadow-sm">
                <SunMedium className="w-3.5 h-3.5 text-[#F9B500]" />
                <span>Rio de Janeiro e Região Metropolitana</span>
              </div>
            </motion.div>

            <motion.h1
              {...titleAnim}
              className="text-2xl sm:text-3xl font-black text-white leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(7,28,69,0.9)]"
            >
              Economize até <span className="text-[#F9B500]">95% na conta de luz</span> com energia solar.
            </motion.h1>

            <motion.p
              {...textAnim}
              className="text-xs text-white/95 leading-relaxed font-medium drop-shadow-[0_1px_4px_rgba(7,28,69,0.85)] max-w-xs"
            >
              Homologação Light/Enel, instalação fotovoltaica e atendimento direto com Carlos Alberto.
            </motion.p>
          </div>

          {/* Center Space: Completely clear */}
          <div className="flex-1 my-4 pointer-events-none" aria-hidden="true" />

          {/* Bottom Section */}
          <motion.div {...ctaAnim} className="space-y-3 pb-1">
            <div className="flex flex-col gap-2.5">
              <MotionLink
                to="/pedir-avaliacao"
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#F9B500] hover:bg-[#e0a300] text-[#071C45] font-black text-sm py-3.5 px-5 rounded-xl shadow-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
              >
                <span>Quero avaliar meu imóvel</span>
                <ArrowRight className="w-4 h-4 text-[#071C45]" />
              </MotionLink>

              <motion.a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#071C45]/85 hover:bg-[#071C45] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl border border-white/25 backdrop-blur-md shadow-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9B500] cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#F9B500]" />
                <span>WhatsApp com Carlos Alberto</span>
              </motion.a>
            </div>

            {/* Compact Trust Badge */}
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#071C45]/80 backdrop-blur-sm text-[11px] text-white/90 border border-white/10 shadow">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F9B500]" />
                <span>Homologação Light & Enel • Carregador Wallbox</span>
              </span>
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
};
