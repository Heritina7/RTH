import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

// Importation du logo RTH
import logo from '../Assets/logo.png'; 

// Importation des photos de l'équipe
import photoJean from '../Assets/jean.jpg'; 
import photoAlice from '../Assets/alice.jpg'; 
import photoBob from '../Assets/bob.jpg'; 

// IMPORTATION DES ICÔNES DE TECHNOLOGIES (react-icons/si pour Simple Icons)
import { 
  SiPython, SiJavascript, SiReact, SiNextdotjs, 
  SiTailwindcss, SiNodedotjs, SiTypescript, SiFigma 
} from 'react-icons/si';

import { 
  Shield, Globe, Cpu, 
  ArrowUpRight, Fingerprint, ChevronLeft,
  Layout, Palette, Share2, Rocket, Headphones, Users, BookOpen, Monitor, Code2
} from 'lucide-react';

// DONNÉES DE L'ÉQUIPE AVEC LIENS
const teamMembers = [
  {
    name: "Jean R. Rakoto",
    role: "Fondateur / Lead Dev",
    photo: photoJean,
    link: "/equipe/jean-rakoto"
  },
  {
    name: "Alice Dubois",
    role: "UI/UX Designer",
    photo: photoAlice,
    link: "/equipe/alice-dubois"
  },
  {
    name: "Bob Smith",
    role: "Expert DevOps",
    photo: photoBob,
    link: "/equipe/bob-smith"
  }
];

// DONNÉES DE LA STACK TECHNIQUE AVEC ICÔNES ET COULEURS SPÉCIFIQUES
const techStack = [
  { 
    name: "Python", 
    icon: SiPython, 
    color: "#3776AB", // Couleur officielle Python
  },
  { 
    name: "JavaScript", 
    icon: SiJavascript, 
    color: "#F7DF1E", // Couleur officielle JS
  },
  { 
    name: "TypeScript", 
    icon: SiTypescript, 
    color: "#3178C6", // Couleur officielle TS
  },
  { 
    name: "React", 
    icon: SiReact, 
    color: "#61DAFB", // Couleur officielle React
  },
  { 
    name: "Next.js", 
    icon: SiNextdotjs, 
    color: "#ffffff", // Blanc (sur fond sombre)
  },
  { 
    name: "Node.js", 
    icon: SiNodedotjs, 
    color: "#339933", // Couleur officielle Node
  },
  { 
    name: "Tailwind", 
    icon: SiTailwindcss, 
    color: "#06B6D4", // Couleur officielle Tailwind
  },
  { 
    name: "Figma", 
    icon: SiFigma, 
    color: "#F24E1E", // Couleur officielle Figma
  },
];

const AboutBento = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen w-full bg-[#05161a] text-white font-sans p-4 md:p-10 relative overflow-x-hidden">
      
      {/* EFFETS DE FOND LUMINEUX */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-teal-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* BOUTON RETOUR */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate(-1)}
        className="fixed top-8 left-8 z-50 flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-cyan-100 hover:bg-cyan-500 hover:text-[#05161a] transition-all group shadow-2xl"
      >
        <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs font-bold tracking-widest uppercase">Retour</span>
      </motion.button>

      <div className="max-w-7xl mx-auto relative z-10 pt-16">
        
        {/* HEADER */}
        <header className="mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center md:justify-start gap-3 text-cyan-400 mb-6"
          >
            <Fingerprint size={22} />
            <span className="text-xs tracking-[0.6em] uppercase font-black">R.TH_Identity</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8"
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase italic text-center md:text-left">
              RELATION <span className="text-[#0c7075]">●</span><br/>
              TRAVAIL <span className="text-[#0f969c]">●</span><br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-200">HONNEUR</span>
            </h1>

            <div className="relative group">
              <img 
                src={logo} 
                alt="Logo RTH" 
                className="h-[120px] md:h-[220px] lg:h-[280px] w-auto object-contain rounded-[2rem] shadow-2xl border border-white/10 group-hover:border-cyan-500/50 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-cyan-500/10 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        </header>

        {/* BENTO GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5"
        >
          {/* 1. VISION */}
          <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-7 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between group hover:border-cyan-500/50 transition-all shadow-xl">
            <div>
              <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-8 border border-cyan-500/20">
                <Rocket size={28} className="text-cyan-400" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white uppercase italic">L'élan RTH</h2>
              <p className="text-cyan-100/60 text-lg leading-relaxed max-w-xl">
                Nouveau souffle dans l'écosystème digital, <span className="text-cyan-400 font-semibold">RTH</span> est né de la volonté d'offrir des solutions web modernes et accessibles. 
                Nous fusionnons curiosité technologique et engagement total pour donner vie à vos ambitions numériques.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-4">
               <div className="px-4 py-1.5 bg-cyan-500/20 rounded-full text-[10px] font-bold text-cyan-300 uppercase tracking-widest border border-cyan-500/30">Nouvelle Génération</div>
            </div>
          </motion.div>

          {/* 2. STATS */}
          <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-5 bg-[#072e33]/40 backdrop-blur-md border border-cyan-800/30 rounded-[2.5rem] p-10 grid grid-cols-2 gap-8">
            {[
              { label: 'Disponibilité', value: '24/7', icon: <Cpu size={16}/> },
              { label: 'Projets', value: 'Lancement', icon: <Rocket size={16}/> },
              { label: 'Focus', value: 'Qualité', icon: <Shield size={16}/> },
              { label: 'Région', value: 'MG', icon: <Globe size={16}/> },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="text-cyan-500/50 flex items-center gap-2 uppercase text-[10px] font-black tracking-widest">
                  {stat.icon} {stat.label}
                </div>
                <div className="text-4xl font-black text-white">{stat.value}</div>
              </div>
            ))}
          </motion.div>

          {/* 3. EXPERTISES */}
          <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden">
            <h2 className="text-xs font-black tracking-[0.4em] uppercase text-cyan-500/60 mb-10">Pôles_Expertises</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              <div className="space-y-4">
                <ExpertiseItem icon={<Layout size={18}/>} title="Création Web" />
                <ExpertiseItem icon={<Palette size={18}/>} title="Design Graphique" />
                <ExpertiseItem icon={<Share2 size={18}/>} title="Social Media" />
                <ExpertiseItem icon={<Monitor size={18}/>} title="Stratégie Digitale" />
              </div>
              <div className="space-y-4">
                <ExpertiseItem icon={<Headphones size={18}/>} title="Assistance Virtuelle" color="text-teal-400" />
                <ExpertiseItem icon={<Users size={18}/>} title="Management Pro" color="text-teal-400" />
                <ExpertiseItem icon={<BookOpen size={18}/>} title="Formations IT" color="text-teal-400" />
                <ExpertiseItem icon={<Shield size={18}/>} title="Matériel Info" color="text-teal-400" />
              </div>
            </div>
          </motion.div>

          {/* 4. PHILOSOPHIE */}
          <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="md:col-span-6 lg:col-span-4 bg-[#0f969c] rounded-[2.5rem] p-10 flex flex-col justify-between text-[#05161a] relative overflow-hidden shadow-2xl cursor-default">
            <Shield size={40} strokeWidth={2.5} />
            <div className="relative z-10">
              <h3 className="text-2xl font-black uppercase leading-none mb-3 italic">Évoluons <br/>Ensemble</h3>
              <p className="text-sm font-bold opacity-80 uppercase leading-tight tracking-tighter">
                Votre succès est notre priorité. L'équipe s'investit personnellement dans chaque projet pour garantir un résultat unique.
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-20 rotate-12 text-[#05161a]">
                <Fingerprint size={180} />
            </div>
          </motion.div>

          {/* 6. SECTION : STACK TECHNOLOGIQUE AVEC ICÔNES DE MARQUES */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-6 lg:col-span-12 bg-[#072e33]/40 backdrop-blur-md border border-cyan-800/30 rounded-[2.5rem] p-10 flex flex-col hover:border-cyan-500/50 transition-all shadow-xl"
          >
            <div className="flex items-center gap-3 text-cyan-400 mb-10">
                <div className="p-2.5 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                    <Code2 size={20} />
                </div>
                <h2 className="text-xs font-black tracking-[0.4em] uppercase text-cyan-500/60">Notre_Stack_Technologique</h2>
            </div>
            
            {/* Grille adaptative pour les icônes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 justify-items-center">
              {techStack.map((tech, i) => {
                // Définition du composant d'icône dynamiquement
                const IconComponent = tech.icon;
                
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center gap-4 group"
                  >
                    {/* Conteneur de l'icône avec style verre/néon */}
                    <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center relative transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10 shadow-xl">
                      
                      {/* L'icône elle-même. La couleur change au survol selon la tech */}
                      <IconComponent 
                        size={40} 
                        color="rgba(207, 250, 254, 0.7)" // Couleur par défaut (Cyan très clair)
                        className="transition-colors duration-300 group-hover:scale-110"
                        style={{ '--hover-color': tech.color }} // Hack CSS pour passer la couleur au hover
                      />
                      
                      {/* Effet de lueur néon en arrière-plan au survol */}
                      <div 
                        className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10"
                        style={{ backgroundColor: tech.color }}
                      />
                    </div>
                    
                    {/* Nom de la tech en dessous */}
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-100/50 group-hover:text-cyan-100 transition-colors text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </motion.div>

        {/* CALL TO ACTION */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-24 text-center pb-20">
          <div className="h-px w-24 bg-cyan-500/30 mx-auto mb-10" />
          <p className="text-[10px] tracking-[0.8em] text-cyan-500/50 uppercase mb-8">Prendre_le_depart?</p>
          <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(15, 150, 156, 0.3)" }} whileTap={{ scale: 0.95 }} onClick={() => navigate('/Devis')} className="px-12 py-5 bg-white text-[#05161a] font-black text-xs uppercase tracking-[0.2em] rounded-2xl flex items-center gap-4 mx-auto transition-all shadow-xl">
            Lancer un projet <ArrowUpRight size={18} />
          </motion.button>
        </motion.div>

      </div>
      
      {/* CSS Injecté pour gérer la couleur au hover des icônes SVG */}
      <style>{`
        .group:hover svg {
          color: var(--hover-color) !important;
        }
      `}</style>
    </div>
  );
};

const ExpertiseItem = ({ icon, title, color = "text-cyan-400" }) => (
  <div className="flex items-center gap-4 group cursor-default">
    <div className={`p-2 bg-white/5 rounded-lg ${color} group-hover:scale-110 transition-transform border border-white/5`}>
      {icon}
    </div>
    <span className="text-sm font-bold uppercase tracking-widest text-cyan-50/80 group-hover:text-white transition-colors">
      {title}
    </span>
  </div>
);

export default AboutBento;