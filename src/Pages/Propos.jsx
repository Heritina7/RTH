import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Importation du logo
import logo from '../Assets/logo.png'; 

import { 
  Shield, Globe, Cpu, 
  ArrowUpRight, Fingerprint, ChevronLeft,
  Layout, Palette, Share2, Rocket, Headphones, Users, BookOpen, Monitor
} from 'lucide-react';

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
        
        {/* HEADER : TEXTE À GAUCHE, LOGO À DROITE AVEC BORDURES ARRONDIES */}
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
            {/* TEXTE À GAUCHE */}
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase italic text-center md:text-left">
              RELATION <span className="text-[#0c7075]">●</span><br/>
              TRAVAIL <span className="text-[#0f969c]">●</span><br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-200">HONNEUR</span>
            </h1>

            {/* LOGO À DROITE : rounded-[2rem] pour l'arrondi, h-[1em] pour la hauteur */}
            <div className="relative group">
              <img 
                src={logo} 
                alt="Logo RTH" 
                className="h-[120px] md:h-[220px] lg:h-[280px] w-auto object-contain rounded-[2rem] shadow-2xl border border-white/10 group-hover:border-cyan-500/50 transition-all duration-500"
              />
              {/* Petit effet de halo derrière le logo */}
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
          <motion.div 
            variants={itemVariants}
            className="md:col-span-6 lg:col-span-7 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between group hover:border-cyan-500/50 transition-all shadow-xl"
          >
            <div>
              <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-8 border border-cyan-500/20">
                <Rocket size={28} className="text-cyan-400" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white uppercase italic">L'élan RTH</h2>
              <p className="text-cyan-100/60 text-lg leading-relaxed max-w-xl">
                Nouveau souffle dans l'écosystème digital, <span className="text-cyan-400 font-semibold">RTH</span> est né de la volonté d'offrir des solutions web modernes et accessibles. 
                Je fusionne curiosité technologique et engagement total pour donner vie à vos premières ambitions numériques.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-4">
               <div className="px-4 py-1.5 bg-cyan-500/20 rounded-full text-[10px] font-bold text-cyan-300 uppercase tracking-widest border border-cyan-500/30">Nouvelle Génération</div>
            </div>
          </motion.div>

          {/* 2. STATS */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-6 lg:col-span-5 bg-[#072e33]/40 backdrop-blur-md border border-cyan-800/30 rounded-[2.5rem] p-10 grid grid-cols-2 gap-8"
          >
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
          <motion.div 
            variants={itemVariants}
            className="md:col-span-6 lg:col-span-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden"
          >
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
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-6 lg:col-span-4 bg-[#0f969c] rounded-[2.5rem] p-10 flex flex-col justify-between text-[#05161a] relative overflow-hidden shadow-2xl cursor-default"
          >
            <Shield size={40} strokeWidth={2.5} />
            <div className="relative z-10">
              <h3 className="text-2xl font-black uppercase leading-none mb-3 italic">Évoluons <br/>Ensemble</h3>
              <p className="text-sm font-bold opacity-80 uppercase leading-tight tracking-tighter">
                Votre succès est ma priorité. Je m'investis personnellement dans chaque projet pour garantir un résultat unique.
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-20 rotate-12 text-[#05161a]">
                <Fingerprint size={180} />
            </div>
          </motion.div>
        </motion.div>

        {/* CALL TO ACTION */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center pb-20"
        >
          <div className="h-px w-24 bg-cyan-500/30 mx-auto mb-10" />
          <p className="text-[10px] tracking-[0.8em] text-cyan-500/50 uppercase mb-8">Prendre_le_depart?</p>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(15, 150, 156, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/Devis')}
            className="px-12 py-5 bg-white text-[#05161a] font-black text-xs uppercase tracking-[0.2em] rounded-2xl flex items-center gap-4 mx-auto transition-all shadow-xl"
          >
            Lancer un projet <ArrowUpRight size={18} />
          </motion.button>
        </motion.div>

      </div>
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
