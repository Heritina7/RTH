import React, { useState } from 'react';
import im1 from "../Assets/catalogue/im1.png";
import { 
  Plus, Layers, Fingerprint, Code2, Rocket, Palette, 
  ArrowLeft, ChevronLeft, ChevronRight 
} from 'lucide-react';

const projects = [
  { id: "01", title: "LOGO RTH", subtitle: "ECOSYSTEM", icon: Layers, image: im1, color: "from-blue-600", glowColor: "bg-blue-500" },
  { id: "02", title: "CYBER CORE", subtitle: "SECURITY", icon: Fingerprint, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800", color: "from-[#2DD298]", glowColor: "bg-[#2DD298]" },
  { id: "03", title: "FLOW STATE", subtitle: "INTERFACE", icon: Code2, image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800", color: "from-purple-600", glowColor: "bg-purple-500" },
  { id: "04", title: "BRAND VISION", subtitle: "LOGO & DESIGN", icon: Palette, image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800", color: "from-pink-500", glowColor: "bg-pink-500" },
  { id: "05", title: "NOVA START", subtitle: "LAUNCHPAD", icon: Rocket, image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800", color: "from-orange-500", glowColor: "bg-orange-500" },
  { id: "06", title: "NEO MATRIX", subtitle: "SYSTEM", icon: Layers, image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800", color: "from-cyan-500", glowColor: "bg-cyan-500" },
  { id: "07", title: "SYNTH WAVE", subtitle: "AUDIO & VISUAL", icon: Code2, image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=800", color: "from-indigo-600", glowColor: "bg-indigo-500" },
  { id: "08", title: "HYPER DRIVE", subtitle: "VELOCITY", icon: Rocket, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", color: "from-red-500", glowColor: "bg-red-500" },
  { id: "09", title: "QUANTUM GRID", subtitle: "STRUCTURE", icon: Fingerprint, image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800", color: "from-emerald-500", glowColor: "bg-emerald-500" },
  { id: "10", title: "PULSE ENGINE", subtitle: "METRICS", icon: Layers, image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800", color: "from-yellow-500", glowColor: "bg-yellow-500" },
  { id: "11", title: "NEXUS NODE", subtitle: "NETWORK", icon: Code2, image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800", color: "from-teal-500", glowColor: "bg-teal-500" },
  { id: "12", title: "VORTEX SPHERE", subtitle: "3D CANVAS", icon: Palette, image: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?q=80&w=800", color: "from-violet-600", glowColor: "bg-violet-500" },
  { id: "13", title: "AURA LABS", subtitle: "EXPERIMENT", icon: Rocket, image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800", color: "from-fuchsia-600", glowColor: "bg-fuchsia-500" },
  { id: "14", title: "SHADOW WORK", subtitle: "UI SUITE", icon: Fingerprint, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800", color: "from-rose-500", glowColor: "bg-rose-500" }
];

export default function CreativeRevealGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-[#0A0A0A] text-white py-10 px-5 sm:px-6 relative overflow-hidden">
      
      {/* Subtle background ambient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER STICKY */}
        <div className="sticky top-5 z-50 mb-14">
          <div className="flex items-center justify-between gap-4 px-5 py-4 rounded-2xl bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/[0.08] shadow-2xl shadow-black/40">
            
            <div className="flex items-center gap-3.5">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                Pure <span className="text-white/40 font-normal">Creation</span>
              </h2>
              <div className="hidden sm:flex items-center gap-2.5">
                <div className="w-px h-4 bg-white/15" />
                <span className="text-[#2DD298] text-[10px] font-medium tracking-[0.2em] uppercase">
                  Exploration Visuelle
                </span>
              </div>
            </div>

            <a 
              href="/" 
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-[#2DD298]/40 text-[11px] font-medium tracking-wide text-white/70 hover:text-white transition-all duration-300"
            >
              <ArrowLeft size={13} className="text-[#2DD298] group-hover:-translate-x-0.5 transition-transform duration-300" />
              Accueil
            </a>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {currentProjects.map((project, idx) => {
            const Icon = project.icon;
            const titleParts = project.title.split(' ');

            return (
              <div 
                key={`${project.id}-${idx}`} 
                className="group relative"
                style={{ animationDelay: `${idx * 40}ms` }}
              >
                {/* Controlled Glow */}
                <div 
                  className={`absolute -inset-1 rounded-3xl ${project.glowColor} opacity-0 blur-2xl group-hover:opacity-25 transition-opacity duration-700 pointer-events-none`}
                />

                {/* Card */}
                <div className="relative aspect-[4/5] w-full bg-[#111] overflow-hidden rounded-2xl cursor-pointer border border-white/[0.06] group-hover:border-white/[0.12] transition-all duration-500 shadow-xl shadow-black/50">
                  
                  {/* Image */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-600`} />
                  
                  {/* Dark bottom gradient always present for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Top content */}
                  <div className="absolute top-5 left-5 right-5 z-20 flex justify-between items-start">
                    <span className="text-2xl font-semibold text-white/30 group-hover:text-white/80 transition-colors duration-500 tracking-tight">
                      {project.id}
                    </span>
                    <div className="w-9 h-9 rounded-full border border-white/15 bg-black/30 backdrop-blur-md flex items-center justify-center group-hover:border-white/30 group-hover:bg-black/50 transition-all duration-500">
                      <Icon size={15} className="text-white/80" />
                    </div>
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 w-full p-5 z-20">
                    <div className="mb-4">
                      <p className="text-[10px] font-medium tracking-[0.25em] text-[#2DD298] mb-1.5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                        {project.subtitle}
                      </p>
                      <h3 className="text-xl sm:text-[1.35rem] font-semibold leading-[1.15] tracking-tight uppercase">
                        {titleParts[0]}
                        {titleParts[1] && (
                          <>
                            <br />
                            <span className="text-white/80">{titleParts[1]}</span>
                          </>
                        )}
                      </h3>
                    </div>

                    {/* CTA reveal */}
                    <div className="pt-4 border-t border-white/10 flex justify-between items-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                      <span className="text-[10px] font-medium tracking-wider text-white/60 uppercase">
                        Voir le projet
                      </span>
                      <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <Plus size={16} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-white/[0.08] hover:border-white/20 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Page précédente"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-1.5 mx-2">
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                const isActive = currentPage === pageNumber;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`w-10 h-10 rounded-full text-xs font-medium transition-all duration-300 flex items-center justify-center ${
                      isActive
                        ? "bg-[#2DD298] text-black shadow-[0_0_20px_rgba(45,210,152,0.35)]"
                        : "border border-white/10 bg-white/[0.03] text-white/60 hover:bg-white/[0.08] hover:text-white hover:border-white/20"
                    }`}
                  >
                    {pageNumber.toString().padStart(2, '0')}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-white/[0.08] hover:border-white/20 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Page suivante"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Page indicator */}
        <div className="mt-6 text-center">
          <span className="text-[11px] text-white/30 tracking-widest uppercase">
            Page {currentPage.toString().padStart(2, '0')} / {totalPages.toString().padStart(2, '0')}
          </span>
        </div>

      </div>
    </section>
  );
}