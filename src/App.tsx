import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { MotionConfig, motion } from 'motion/react';
import { ScrollToTop } from './components/ScrollToTop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { PrivacyModal } from './components/PrivacyModal';
import { PreviaStatusModal } from './components/PreviaStatusModal';
import { motionTransitions } from './utils/motionTransitions';

// Pages
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ProcessPage } from './pages/ProcessPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { FAQPage } from './pages/FAQPage';
import { EvaluationPage } from './pages/EvaluationPage';

interface RouteContentProps {
  onOpenPrivacy: () => void;
}

/**
 * Animated route container:
 * - Pure opacity entry (180–220 ms)
 * - NO transform to prevent breaking fixed-positioned children
 * - Keyed by location.pathname (NOT location.search or key) so query params do not remount pages or reset forms
 * - Header, Footer, ChatWidget, and Modals remain completely outside this animated element
 */
function PageRouteContainer({ onOpenPrivacy }: RouteContentProps) {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={motionTransitions.pageEntry}
      className="flex-grow flex flex-col"
    >
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/solucoes" element={<SolutionsPage />} />
        <Route path="/como-funciona" element={<ProcessPage />} />
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="/duvidas" element={<FAQPage />} />
        <Route path="/pedir-avaliacao" element={<EvaluationPage onOpenPrivacy={onOpenPrivacy} />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        
        {/* Catch-all redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </motion.div>
  );
}

export default function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [previaStatusModalOpen, setPreviaStatusModalOpen] = useState(false);

  // Normaliza o basename para suportar '/' ou '/SunHouse-Energia-Solar-Rio-de-Janeiro-e-Regiao'
  const rawBase = import.meta.env.BASE_URL || '/';
  const routerBase = rawBase.endsWith('/') && rawBase !== '/' ? rawBase.slice(0, -1) : rawBase;

  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter basename={routerBase === '/' ? '' : routerBase}>
        {/* Scroll restoration to top on page change */}
        <ScrollToTop />

        <div className="min-h-screen bg-[#F5F7FA] text-[#071C45] flex flex-col font-sans selection:bg-[#F9B500] selection:text-[#071C45]">
          
          {/* Consistent Global Header */}
          <Header />

          {/* Multi-page Routing */}
          <main className="flex-grow flex flex-col">
            <PageRouteContainer onOpenPrivacy={() => setPrivacyModalOpen(true)} />
          </main>

          {/* Consistent Global Footer */}
          <Footer
            onOpenPrivacy={() => setPrivacyModalOpen(true)}
            onOpenPreviaStatus={() => setPreviaStatusModalOpen(true)}
          />

          {/* Global Floating Chat Widget */}
          <ChatWidget />

          {/* Legal & Status Modals */}
          <PrivacyModal
            isOpen={privacyModalOpen}
            onClose={() => setPrivacyModalOpen(false)}
          />

          <PreviaStatusModal
            isOpen={previaStatusModalOpen}
            onClose={() => setPreviaStatusModalOpen(false)}
          />

        </div>
      </BrowserRouter>
    </MotionConfig>
  );
}
