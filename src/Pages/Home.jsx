import React from 'react';
import bgImage from "../Assets/bg.jpg";
import { Link } from "react-router-dom";
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden font-mono selection:bg-[#00f2fe] selection:text-black bg-black">
      
      {/* CALQUE D'IMAGE ANIMÉ 
          - On agrandit légèrement l'image (w-[120%]) pour avoir de la marge pour le mouvement.
          - On applique l'animation personnalisée 'pan-horizontal'
      */}
      <div 
        className="absolute inset-0 w-[120%] h-full bg-cover bg-center animate-bg-pan opacity-60"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          left: '0' 
        }}
      />
      
      {/* Overlay de dégradé pour la lisibilité et l'effet tech */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between p-6 md:p-12">
        
        {/* LOGO SECTION */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="group relative">
            <div className="absolute inset-0 bg-[#00f2fe] rounded-full blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-1000" />
            
            <div className="relative w-48 h-48 md:w-64 md:h-64 bg-black/60 backdrop-blur-2xl flex justify-center items-center rounded-full border border-white/10 shadow-2xl group-hover:border-[#00f2fe]/40 transition-all duration-700">
              <span className="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
                RTH
              </span>
            </div>
          </div>
        </div>

        {/* NAVIGATION GRID */}
        <div className="w-full max-w-5xl mx-auto space-y-4 md:space-y-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <MenuLink to="/Services" title="SERVICES" desc="Expertise & Solutions" />
            <MenuLink to="/Portfolio" title="SHOP" desc="Digital Assets" />
          </div>

          <Link to="/Shop" className="group block relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-md p-8 md:p-12 hover:border-[#00f2fe]/30 hover:bg-white/[0.05] transition-all duration-500">
             <div className="flex flex-wrap justify-center items-center gap-4 text-xl md:text-3xl font-bold tracking-[0.2em] uppercase">
                <span className="hover:text-[#00f2fe] transition-colors">Formation</span>
                <span className="text-white/10 hidden md:inline">|</span>
                <span className="hover:text-[#00f2fe] transition-colors">Conférence</span>
                <span className="text-white/10 hidden md:inline">|</span>
                <span className="hover:text-[#00f2fe] transition-colors">Promotion</span>
                <span className="text-white/10 hidden md:inline">|</span>
                <span className="hover:text-[#00f2fe] transition-colors">Offre</span>
             </div>
             <p className="text-center text-[9px] text-white/30 mt-4 tracking-[0.6em] uppercase">High Performance Standards</p>
          </Link>
        </div>

        {/* FOOTER */}
        <div className="w-full flex justify-center items-center">
          <div className="flex space-x-10 text-[10px] uppercase tracking-[0.4em] text-white/40 border-t border-white/5 pt-8 px-12">
            <Link to="/Propos" className="hover:text-[#00f2fe] transition-colors">À propos</Link>
            <Link to="/Contact" className="hover:text-[#00f2fe] transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      {/* CSS ANIMATION POUR LE MOUVEMENT GAUCHE-DROITE */}
      <style jsx>{`
        @keyframes bg-pan {
          0% { transform: translateX(0%); }
          50% { transform: translateX(-15%); }
          100% { transform: translateX(0%); }
        }
        .animate-bg-pan {
          animation: bg-pan 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

function MenuLink({ to, title, desc }) {
  return (
    <Link to={to} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-md p-10 hover:border-[#00f2fe]/30 hover:bg-white/[0.05] transition-all duration-500">
      <div className="relative z-10 flex flex-col items-center">
        <span className="text-3xl md:text-4xl font-black tracking-widest group-hover:text-[#00f2fe] transition-colors">
          {title}
        </span>
        <span className="text-[9px] text-white/30 tracking-[0.5em] uppercase mt-2 group-hover:text-white/60 transition-colors">
          {desc}
        </span>
      </div>
      <ArrowUpRight className="absolute top-4 right-4 text-white/10 group-hover:text-[#00f2fe] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={18} />
    </Link>
  );
}
