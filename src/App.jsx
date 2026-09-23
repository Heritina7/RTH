import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Shop from "./Pages/Shop";
import Portfolio from "./Pages/Portfolio";
import Propos from "./Pages/Propos";
import Contact from "./Pages/Contact";
import Devis from "./Pages/Devis";
import Contrat from "./Pages/Contrat";
import Catalogue from "./Pages/Catalogue";
import Blog from "./Pages/Blog";

// Composant Loader circulaire avec contour tournant et texte R. TH
function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950 transition-opacity duration-500">
      {/* Conteneur principal du cercle */}
      <div className="relative flex items-center justify-center w-44 h-44 sm:w-52 sm:h-52">
        
        {/* 1. Contour tournant avec dégradé de bleu (effet de bordure rotative) */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-transparent animate-spin p-[3px]">
          {/* Fond intérieur du cercle pour masquer l'intérieur du dégradé */}
          <div className="w-full h-full bg-gray-900 rounded-full"></div>
        </div>

        {/* 2. Cercle intérieur fixe (style sombre comme sur votre image) */}
        <div className="absolute inset-2 bg-gradient-to-b from-[#0b1d28] to-[#040e14] rounded-full flex flex-col items-center justify-center shadow-2xl border border-cyan-500/20">
          
          {/* Texte R. TH en blanc */}
          <span className="text-3xl sm:text-4xl font-extrabold tracking-widest text-white select-none">
            R. TH
          </span>
          
        </div>
      </div>

      {/* Petit texte de chargement discret */}
      <p className="mt-8 text-xs font-medium text-cyan-400/70 tracking-widest uppercase animate-pulse">
        Chargement...
      </p>
    </div>
  );
}

// Composant pour écouter les changements de routes (clics sur les liens)
function AnimatedRoutes() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Active le loader au premier plan lors du changement de route
    setIsLoading(true);

    const handleContentLoaded = () => {
      // Petit délai de sécurité pour un rendu fluide
      setTimeout(() => {
        setIsLoading(false);
      }, 400);
    };

    if (document.readyState === 'complete') {
      handleContentLoaded();
    } else {
      window.addEventListener('load', handleContentLoaded);
      // Sécurité : enlève le loader après 1.2s max si le chargement traîne
      const fallbackTimer = setTimeout(() => {
        setIsLoading(false);
      }, 1200);

      return () => {
        window.removeEventListener('load', handleContentLoaded);
        clearTimeout(fallbackTimer);
      };
    }
  }, [location.pathname]); // Se déclenche à chaque clic sur une autre page

  return (
    <>
      {isLoading && <Loader />}

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="services/" element={<Services/>}/>
        <Route path="shop/" element={<Shop/>}/>
        <Route path="portfolio/" element={<Portfolio/>}/>
        <Route path="propos/" element={<Propos/>}/>
        <Route path="contact/" element={<Contact/>}/>
        <Route path="devis/" element={<Devis/>}/>
        <Route path="contrat/" element={<Contrat/>}/>
        <Route path="catalogue/" element={<Catalogue/>}/>
        <Route path="blog/" element={<Blog/>}/>
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen bg-gray-950 text-gray-100 relative'>
        <main className='flex-grow'>
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;