import type { Transition } from 'motion/react';

/**
 * Shared Motion transitions for SunHouse Energia Solar
 * 
 * Specs:
 * - Interações pequenas: 150–220 ms
 * - Menus e painéis: 220–300 ms
 * - Entradas de conteúdo: 350–450 ms
 * - Movimentos curtos, com desaceleração suave e sem quique exagerado
 */

// Smooth deceleration curve without exaggerated bounce
export const gentleDecelEase = [0.16, 1, 0.3, 1] as const;
export const gentleEase = [0.25, 1, 0.5, 1] as const;

export const motionTransitions = {
  // Interações pequenas: 150–220 ms
  interaction: {
    duration: 0.18,
    ease: gentleEase,
  } satisfies Transition,

  // Menus e painéis: 220–300 ms
  menu: {
    duration: 0.26,
    ease: gentleDecelEase,
  } satisfies Transition,

  // Mobile menu items stagger interval (25–35 ms)
  menuItemStagger: 0.03, // 30ms

  // Mobile menu individual item entrance
  menuItem: {
    duration: 0.18,
    ease: gentleDecelEase,
  } satisfies Transition,

  // Entradas de conteúdo: 350–450 ms
  content: {
    duration: 0.38,
    ease: gentleDecelEase,
  } satisfies Transition,

  // Entrada discreta de opacity para páginas/rotas: 180–220 ms
  pageEntry: {
    duration: 0.2,
    ease: gentleEase,
  } satisfies Transition,

  // Indicador deslizante suave da navbar desktop (sem quique exagerado)
  navIndicator: {
    type: 'spring',
    stiffness: 380,
    damping: 34,
    mass: 0.8,
  } satisfies Transition,
};
