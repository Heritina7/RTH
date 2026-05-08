import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Send, ArrowLeft, Mail, Instagram, MessageSquare } from 'lucide-react';

const ContactSimple = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-[#05161a] flex items-center justify-center p-4 md:p-10 font-sans overflow-hidden">
      
      {/* CERCLES DE FOND (DÉCORATIFS - EFFET NÉON) */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-900 rounded-full blur-[120px] opacity-40 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-900 rounded-full blur-[120px] opacity-30" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-5xl h-auto md:h-[600px] bg-[#072e33]/40 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-cyan-800/30 flex flex-col md:flex-row overflow-hidden"
      >
        
        {/* SECTION GAUCHE : INFOS (CYAN PROFOND) */}
        <div className="w-full md:w-2/5 bg-[#0c7075] p-10 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Motif subtil en arrière-plan */}
          <div className="absolute -right-10 -top-10 opacity-10">
            <MessageSquare size={200} />
          </div>

          <div className="relative z-10">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-sm font-medium mb-12 text-cyan-100 hover:text-white hover:translate-x-[-5px] transition-all"
            >
              <ArrowLeft size={18} /> Retour au menu
            </button>
            <h1 className="text-4xl font-extrabold mb-4 tracking-tight">Parlons de demain.</h1>
            <p className="text-cyan-100/80 text-sm leading-relaxed max-w-[250px]">
              Une idée ? Un projet ? Remplissez le formulaire et créons quelque chose d'unique.
            </p>
          </div>

          <div className="space-y-6 relative z-10">
            <div className="group flex items-center gap-4 text-sm uppercase tracking-[0.2em] font-bold text-cyan-100 cursor-pointer">
                <div className="p-2 bg-cyan-800 rounded-lg group-hover:bg-cyan-400 group-hover:text-[#05161a] transition-colors">
                    <Instagram size={20} />
                </div>
                <span>@rth_creation</span>
            </div>
            <div className="group flex items-center gap-4 text-sm font-medium text-cyan-50 cursor-pointer">
                <div className="p-2 bg-cyan-800 rounded-lg group-hover:bg-cyan-400 group-hover:text-[#05161a] transition-colors">
                    <Mail size={20} />
                </div>
                <span>rthheritina@gmail.com</span>
            </div>
          </div>
        </div>

        {/* SECTION DROITE : FORMULAIRE (MODE DARK) */}
        <div className="w-full md:w-3/5 p-10 bg-[#051b20]/60 flex flex-col justify-center">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-cyan-500/60 uppercase tracking-widest ml-1">Nom & Prénom</label>
                <input 
                  type="text" 
                  className="w-full bg-[#0a262b] border border-cyan-900/50 rounded-2xl p-4 text-sm text-cyan-50 focus:ring-2 focus:ring-cyan-500 transition-all outline-none placeholder:text-cyan-800" 
                  placeholder="Marc Doe" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-cyan-500/60 uppercase tracking-widest ml-1">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-[#0a262b] border border-cyan-900/50 rounded-2xl p-4 text-sm text-cyan-50 focus:ring-2 focus:ring-cyan-500 transition-all outline-none placeholder:text-cyan-800" 
                  placeholder="marc@mail.com" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-cyan-500/60 uppercase tracking-widest ml-1">Votre message</label>
              <textarea 
                rows="4" 
                className="w-full bg-[#0a262b] border border-cyan-900/50 rounded-2xl p-4 text-sm text-cyan-50 focus:ring-2 focus:ring-cyan-500 transition-all outline-none resize-none placeholder:text-cyan-800" 
                placeholder="Comment pouvons-nous vous aider ?" 
              />
            </div>

            <motion.button 
              whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(6, 182, 212, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-[#0f969c] text-[#05161a] font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all shadow-lg"
            >
              Envoyer le message <Send size={18} />
            </motion.button>
          </form>
        </div>

      </motion.div>
    </div>
  );
};

export default ContactSimple;
