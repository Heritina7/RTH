import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Send, ArrowLeft, Mail, Instagram, MessageSquare } from 'lucide-react';

const ContactSimple = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#041416] flex items-center justify-center p-5 md:p-8 font-sans relative overflow-hidden">
      
      {/* Ambient background lights */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-900/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-5%] w-[600px] h-[600px] bg-teal-900/25 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-800/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl bg-[#0a1f23]/70 backdrop-blur-2xl rounded-[2rem] shadow-2xl shadow-black/40 border border-cyan-900/30 flex flex-col md:flex-row overflow-hidden"
      >
        
        {/* LEFT PANEL */}
        <div className="w-full md:w-[42%] bg-gradient-to-br from-[#0d6b70] to-[#0a5559] p-9 md:p-11 text-white flex flex-col justify-between relative overflow-hidden">
          
          {/* Decorative icon */}
          <div className="absolute -right-8 -bottom-8 opacity-[0.07]">
            <MessageSquare size={220} strokeWidth={1} />
          </div>

          <div className="relative z-10">
            <button 
              onClick={() => navigate('/')}
              className="group flex items-center gap-2 text-[13px] font-medium mb-14 text-cyan-100/80 hover:text-white transition-all duration-300"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
              Retour au menu
            </button>

            <h1 className="text-3xl md:text-[2.4rem] font-semibold tracking-tight leading-[1.15] mb-5">
              Parlons de<br />demain.
            </h1>
            <p className="text-cyan-100/75 text-[15px] leading-relaxed max-w-[260px]">
              Une idée ? Un projet ? Remplissez le formulaire et créons quelque chose d'unique ensemble.
            </p>
          </div>

          <div className="space-y-5 relative z-10 mt-12 md:mt-0">
            <a 
              href="https://instagram.com/rth_creation" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-4 text-sm font-medium text-cyan-50/90 hover:text-white transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#0a5559] transition-all duration-300">
                <Instagram size={18} />
              </div>
              <span className="tracking-wide">@rth_creation</span>
            </a>

            <a 
              href="mailto:rthheritina@gmail.com"
              className="group flex items-center gap-4 text-sm font-medium text-cyan-50/90 hover:text-white transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#0a5559] transition-all duration-300">
                <Mail size={18} />
              </div>
              <span className="tracking-wide">rthheritina@gmail.com</span>
            </a>
          </div>
        </div>

        {/* RIGHT PANEL — FORM */}
        <div className="w-full md:w-[58%] p-9 md:p-12 bg-[#061a1e]/50 flex flex-col justify-center">
          
          <div className="mb-8">
            <h2 className="text-xl font-medium text-white tracking-tight">Envoyez un message</h2>
            <p className="text-sm text-cyan-700/80 mt-1.5">Nous vous répondrons rapidement.</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-[11px] font-medium text-cyan-600/70 uppercase tracking-[0.15em] ml-1">
                  Nom & Prénom
                </label>
                <input 
                  type="text" 
                  className="w-full bg-[#0b2429] border border-cyan-900/40 rounded-xl px-4 py-3.5 text-sm text-cyan-50 placeholder:text-cyan-900/60 focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" 
                  placeholder="Marc Doe" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-medium text-cyan-600/70 uppercase tracking-[0.15em] ml-1">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full bg-[#0b2429] border border-cyan-900/40 rounded-xl px-4 py-3.5 text-sm text-cyan-50 placeholder:text-cyan-900/60 focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" 
                  placeholder="marc@mail.com" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-medium text-cyan-600/70 uppercase tracking-[0.15em] ml-1">
                Votre message
              </label>
              <textarea 
                rows={4}
                className="w-full bg-[#0b2429] border border-cyan-900/40 rounded-xl px-4 py-3.5 text-sm text-cyan-50 placeholder:text-cyan-900/60 focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none" 
                placeholder="Comment pouvons-nous vous aider ?" 
              />
            </div>

            <motion.button 
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-2 py-4 bg-[#0f969c] hover:bg-cyan-400 text-[#041416] font-semibold tracking-wide rounded-xl flex items-center justify-center gap-2.5 transition-colors duration-300 shadow-lg shadow-cyan-900/20"
            >
              Envoyer le message
              <Send size={16} />
            </motion.button>
          </form>
        </div>

      </motion.div>
    </div>
  );
};

export default ContactSimple;