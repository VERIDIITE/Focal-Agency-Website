'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CustomCursor from '../components/CustomCursor';
import SmoothScroll from '../components/SmoothScroll';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ServicesMegaMenu from '../components/ServicesMegaMenu';
import ClientWinsSection from '../components/ClientWinsSection';
import ProcessSection from '../components/ProcessSection';
import StartupSection from '../components/StartupSection';
import TechStackSection from '../components/TechStackSection';
import ProjectEstimatorModal from '../components/ProjectEstimatorModal';
import Footer from '../components/Footer';

export default function Home() {
  const [estimatorOpen, setEstimatorOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenEstimator = (serviceName = '') => {
    if (serviceName) setSelectedService(serviceName);
    setEstimatorOpen(true);
  };

  const handleSelectServiceFromMenu = (serviceName) => {
    setSelectedService(serviceName);
    setEstimatorOpen(true);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen relative bg-[#07090e] text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
        {/* GSAP Custom Cursor */}
        <CustomCursor />

        {/* Floating Navigation Header */}
        <Navbar 
          onOpenServicesMenu={() => setServicesMenuOpen(true)}
          onOpenEstimator={() => handleOpenEstimator()} 
        />

        {/* Services Mega Menu Overlay */}
        <ServicesMegaMenu
          isOpen={servicesMenuOpen}
          onClose={() => setServicesMenuOpen(false)}
          onSelectService={handleSelectServiceFromMenu}
          onOpenEstimator={() => handleOpenEstimator()}
        />

        <main>
          {/* Section 1: Hero (Black) */}
          <HeroSection 
            onOpenEstimator={() => handleOpenEstimator()} 
            onOpenServicesMenu={() => setServicesMenuOpen(true)}
          />

          {/* Section 2: Featured Client Wins (Black) */}
          <ClientWinsSection onOpenEstimator={() => handleOpenEstimator()} />

          {/* Section 3: Process & Traction (White) */}
          <ProcessSection onOpenEstimator={() => handleOpenEstimator()} />

          {/* Section 4: Capabilities & Services (Black) */}
          <ServicesSection 
            onSelectService={(srv) => handleOpenEstimator(srv)} 
          />

          {/* Section 5: Startup Accelerator (White) */}
          <StartupSection onOpenEstimator={() => handleOpenEstimator('Startup MVP Development')} />

          {/* Section 6: Modern Technical Architecture & Outcomes (Black) */}
          <TechStackSection onOpenEstimator={() => handleOpenEstimator()} />
        </main>

        {/* Footer (Black) */}
        <Footer onOpenEstimator={() => handleOpenEstimator()} />

        {/* Interactive Project Estimator Modal ("Get In Touch") */}
        <ProjectEstimatorModal
          isOpen={estimatorOpen}
          onClose={() => setEstimatorOpen(false)}
          initialService={selectedService}
        />
      </div>
    </SmoothScroll>
  );
}
