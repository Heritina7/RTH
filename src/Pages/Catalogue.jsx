import React from 'react';
import { Plus, ArrowRight, Layers, Fingerprint, Code2, Rocket } from 'lucide-react';

const projects = [
  {
    id: "01",
    title: "DIGITAL ARCH",
    subtitle: "ECOSYSTEM",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
    color: "from-blue-600",
  },
  {
    id: "02",
    title: "CYBER CORE",
    subtitle: "SECURITY",
    icon: Fingerprint,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
    color: "from-[#2DD298]",
  },
  {
    id: "03",
    title: "FLOW STATE",
    subtitle: "INTERFACE",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800",
    color: "from-purple-600",
  },
  {
    id: "04",
    title: "NOVA START",
    subtitle: "LAUNCHPAD",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
    color: "from-orange-500",
  }
];

export default function CreativeRevealGallery() {
  return (
    <section className="min-h-screen bg-[#080808] text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header avec ligne de progression */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#2DD298] font-mono text-xs tracking-widest uppercase">Exploration Visuelle</span>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none italic uppercase">
            Pure <span className="text-transparent stroke-text-white">Creation</span>
          </h2>
        </div>

        {/* Grille de cartes verticales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div 
                key={project.id} 
                className="group relative h-[600px] w-full bg-[#111] overflow-hidden rounded-2xl cursor-pointer shadow-2xl"
              >
                {/* Background Image avec filtre Grayscale par défaut */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out opacity-40 group-hover:opacity-80"
                />

                {/* Overlay de dégradé coloré au survol */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                {/* Contenu Permanent (ID et Icône) */}
                <div className="absolute top-8 left-8 z-20 flex flex-col gap-4">
                  <span className="text-4xl font-black opacity-20 group-hover:opacity-100 transition-opacity">
                    {project.id}
                  </span>
                  <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                    <Icon size={18} className="text-white" />
                  </div>
                </div>

                {/* Contenu Bas (Titre et Reveal) */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                  <div className="mb-4 overflow-hidden">
                    <p className="text-[10px] font-bold tracking-[0.3em] text-[#2DD298] translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      {project.subtitle}
                    </p>
                    <h3 className="text-3xl font-black leading-none uppercase mt-1">
                      {project.title.split(' ')[0]} <br/> {project.title.split(' ')[1]}
                    </h3>
                  </div>

                  {/* Ligne et Bouton qui apparaissent */}
                  <div className="pt-6 border-t border-white/10 flex justify-between items-center opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700">
                    <span className="text-[10px] font-medium text-white/60">VOIR LE PROJET</span>
                    <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center">
                      <Plus size={20} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .stroke-text-white {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </section>
  );
}
