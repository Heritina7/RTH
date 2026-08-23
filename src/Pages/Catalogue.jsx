import React, { useState } from 'react';
import { Plus, Layers, Fingerprint, Code2, Rocket, Palette, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  { id: "01", title: "DIGITAL ARCH", subtitle: "ECOSYSTEM", icon: Layers, image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800", color: "from-blue-600", glowColor: "bg-blue-600/40" },
  { id: "02", title: "CYBER CORE", subtitle: "SECURITY", icon: Fingerprint, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800", color: "from-[#2DD298]", glowColor: "bg-[#2DD298]/40" },
  { id: "03", title: "FLOW STATE", subtitle: "INTERFACE", icon: Code2, image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800", color: "from-purple-600", glowColor: "bg-purple-600/40" },
  { id: "04", title: "BRAND VISION", subtitle: "LOGO & DESIGN", icon: Palette, image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800", color: "from-pink-500", glowColor: "bg-pink-500/40" },
  { id: "05", title: "NOVA START", subtitle: "LAUNCHPAD", icon: Rocket, image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800", color: "from-orange-500", glowColor: "bg-orange-500/40" },
  { id: "06", title: "NEO MATRIX", subtitle: "SYSTEM", icon: Layers, image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800", color: "from-cyan-500", glowColor: "bg-cyan-500/40" },
  { id: "07", title: "SYNTH WAVE", subtitle: "AUDIO & VISUAL", icon: Code2, image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=800", color: "from-indigo-600", glowColor: "bg-indigo-600/40" },
  { id: "08", title: "HYPER DRIVE", subtitle: "VELOCITY", icon: Rocket, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", color: "from-red-500", glowColor: "bg-red-500/40" },
  { id: "09", title: "QUANTUM GRID", subtitle: "STRUCTURE", icon: Fingerprint, image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800", color: "from-emerald-500", glowColor: "bg-emerald-500/40" },
  { id: "10", title: "PULSE ENGINE", subtitle: "METRICS", icon: Layers, image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800", color: "from-yellow-500", glowColor: "bg-yellow-500/40" },
  { id: "11", title: "NEXUS NODE", subtitle: "NETWORK", icon: Code2, image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800", color: "from-teal-500", glowColor: "bg-teal-500/40" },
  { id: "12", title: "VORTEX SPHERE", subtitle: "3D CANVAS", icon: Palette, image: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?q=80&w=800", color: "from-violet-600", glowColor: "bg-violet-600/40" },
  { id: "13", title: "AURA LABS", subtitle: "EXPERIMENT", icon: Rocket, image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800", color: "from-fuchsia-600", glowColor: "bg-fuchsia-600/40" },
  { id: "14", title: "SHADOW WORK", subtitle: "UI SUITE", icon: Fingerprint, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800", color: "from-rose-500", glowColor: "bg-rose-500/40" }
];

export default function CreativeRevealGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // 12 cartes par page = 3 lignes de 4 cartes (sur xl)

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <section className="min-h-screen bg-[#080808] text-white py-12 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER FIXE (STICKY) --- */}
        <div className="sticky top-6 z-50 mb-12 py-4 bg-[#080808]/80 backdrop-blur-xl border-b border-white/10 transition-all">
          <div className="flex items-center justify-between gap-4">
            
            {/* Titre à GAUCHE */}
            <div className="flex items-center gap-3">
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter italic uppercase">
                Pure <span className="text-transparent stroke-text-white">Creation</span>
              </h2>
              <div className="h-3 w-[1px] bg-white/20 hidden sm:block"></div>
              <span className="text-[#2DD298] font-mono text-[10px] tracking-widest uppercase hidden sm:inline">
                Exploration Visuelle
              </span>
            </div>

            {/* Bouton Retour à DROITE */}
            <a 
              href="/" 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#2DD298]/50 text-[11px] font-mono tracking-wider text-white/70 hover:text-white transition-all duration-300 group shadow-lg"
            >
              <ArrowLeft size={13} className="text-[#2DD298] group-hover:-translate-x-1 transition-transform duration-300" />
              <span>ACCUEIL</span>
            </a>

          </div>
        </div>

        {/* Grille de 3 lignes (4 cols x 3 lignes = 12 cartes par page) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentProjects.map((project, idx) => {
            const Icon = project.icon;
            const titleParts = project.title.split(' ');
            return (
              <div key={`${project.id}-${idx}`} className="group relative">
                
                {/* --- GLOW EFFECT --- */}
                <div 
                  className={`absolute -inset-2 rounded-2xl ${project.glowColor} blur-2xl opacity-30 group-hover:opacity-80 group-hover:blur-3xl transition-all duration-500 ease-in-out pointer-events-none`}
                />

                {/* --- CARTE --- */}
                <div className="relative aspect-[4/5] w-full bg-[#111] overflow-hidden rounded-2xl cursor-pointer shadow-2xl z-10 border border-white/5">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-in-out opacity-80 group-hover:opacity-100"
                  />

                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                  <div className="absolute top-5 left-5 z-20 flex flex-col gap-3">
                    <span className="text-3xl font-black opacity-40 group-hover:opacity-100 transition-opacity">
                      {project.id}
                    </span>
                    <div className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-md bg-black/20">
                      <Icon size={16} className="text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-5 z-20">
                    <div className="mb-3 overflow-hidden">
                      <p className="text-[10px] font-bold tracking-[0.3em] text-[#2DD298] translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        {project.subtitle}
                      </p>
                      <h3 className="text-2xl font-black leading-tight uppercase mt-1">
                        {titleParts[0]} <br/> {titleParts[1] || ''}
                      </h3>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex justify-between items-center opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                      <span className="text-[10px] font-medium text-white/70">VOIR LE PROJET</span>
                      <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center">
                        <Plus size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- PAGINATION --- */}
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-3">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Page précédente"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                const isActive = currentPage === pageNumber;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`w-9 h-9 rounded-full font-mono text-xs transition-all duration-300 flex items-center justify-center ${
                      isActive
                        ? "bg-[#2DD298] text-black font-bold shadow-[0_0_15px_rgba(45,210,152,0.4)]"
                        : "border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"
                    }`}
                  >
                    {pageNumber < 10 ? `0${pageNumber}` : pageNumber}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Page suivante"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

      </div>

      <style jsx>{`
        .stroke-text-white {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </section>
  );
}