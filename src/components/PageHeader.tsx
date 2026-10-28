import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { gentleDecelEase } from '../utils/motionTransitions';

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  breadcrumbLabel: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
  breadcrumbLabel,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-[#071C45] text-white pt-28 sm:pt-32 pb-14 sm:pb-18 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#023399]/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb: Renders immediately without delay for instant orientation and navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
          <ol className="flex items-center gap-1.5 text-xs text-white/70">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Início
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            </li>
            <li aria-current="page" className="text-[#F9B500] font-semibold">
              {breadcrumbLabel}
            </li>
          </ol>
        </nav>

        {/* Badge & Headings: Short, discreet entrance that seamlessly matches route transition */}
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.22,
              delay: 0.02,
              ease: gentleDecelEase,
            }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#F9B500] uppercase bg-white/10 px-3 py-1 rounded-full">
              {badge}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.24,
              delay: 0.04,
              ease: gentleDecelEase,
            }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.24,
              delay: 0.08,
              ease: gentleDecelEase,
            }}
            className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>
        </div>

      </div>
    </div>
  );
};
