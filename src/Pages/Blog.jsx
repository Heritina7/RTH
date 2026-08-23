import React from 'react';
import { 
  ArrowLeft, Sparkles, TrendingUp, Play, Calendar, ExternalLink, 
  Clock, Video, ArrowUpRight, Image as ImageIcon, Send, Globe, Zap
} from 'lucide-react';

const highlightFeatures = {
  world: {
    tag: "TENDANCE MONDIALE 2026",
    title: "L'Ère du Design Génératif & Micro-Frontends",
    subtitle: "Comment les interfaces modernes mondiales adaptent l'UI en temps réel grâce aux moteurs décisionnels légers.",
    cta: "Explorer l'analyse",
    badgeColor: "bg-blue-950/80 text-blue-300 border-blue-800/50",
    bgGradient: "from-slate-950 via-slate-900 to-indigo-950",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800"
  },
  site: {
    tag: "NOUVEAUTÉ SUR LE SITE RTH",
    title: "Lancement du Studio Visuels & Branding Pub",
    subtitle: "Commandez directement vos maquettes UI/UX et bannières publicitaires 4:5 optimisées pour vos campagnes.",
    cta: "Voir les offres RTH",
    badgeColor: "bg-emerald-950/80 text-emerald-300 border-emerald-800/50",
    bgGradient: "from-slate-950 via-slate-900 to-emerald-950",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800"
  }
};

const posterGallery = [
  {
    id: 1,
    title: "Brand Identity Framework",
    category: "Design System",
    ratio: "4:5",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600"
  },
  {
    id: 2,
    title: "Minimalist Web Experience",
    category: "Affiche Pub",
    ratio: "4:5",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=600"
  },
  {
    id: 3,
    title: "Digital Ecosystem 2026",
    category: "Événement",
    ratio: "4:5",
    image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=600"
  }
];

const serviceNews = [
  {
    id: 1,
    date: "20 AOÛT 2026",
    title: "Lancement de la section Formations Interactives",
    description: "Découvrez nos nouveaux modules immersifs sur le développement moderne et le design UI/UX.",
    category: "Service"
  },
  {
    id: 2,
    date: "15 AOÛT 2026",
    title: "Offres Branding & Visuels Pub Mises à Jour",
    description: "Des packages repensés pour optimiser l'identité visuelle et le taux de conversion de votre marque.",
    category: "Offre"
  }
];

const marketTrends = [
  {
    id: 1,
    title: "L'impact du Micro-Frontends & de l'IA sur l'UI/UX en 2026",
    summary: "Comment les interfaces modernes intègrent la génération dynamique de composants sans sacrifier la performance.",
    readTime: "4 min"
  },
  {
    id: 2,
    title: "Pourquoi le format 4:5 domine le design sur le Web",
    summary: "Analyse visuelle et ergonomique des ratios d'images optimisés pour la conversion mobile.",
    readTime: "3 min"
  }
];

const videoTips = [
  {
    id: 1,
    title: "3 astuces Tailwind CSS pour des effets d'ombrage et de lumière",
    duration: "02:45",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600"
  },
  {
    id: 2,
    title: "Optimiser une Single Page Application React pour l'indexation Google",
    duration: "05:10",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600"
  }
];

const scheduleEvents = [
  { date: "28 AOÛT", event: "Webinaire : Stratégies de Design Systèmes Évolutifs", type: "Conférence" },
  { date: "05 SEPT", event: "Masterclass : Optimisation Performance React & SEO", type: "Formation" },
  { date: "12 SEPT", event: "Session Q&A & Analyse de Projets en Direct", type: "Live" }
];

export default function EditorialBlogPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-800 font-serif flex flex-col justify-between">
      
      <div className="max-w-7xl mx-auto py-10 px-6 space-y-16 w-full">
        
        {/* HEADER */}
        <header className="border-b-2 border-stone-800 pb-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-emerald-800 font-bold block mb-2">
              Le Journal & Insights
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-stone-900 tracking-tight leading-none italic">
              Perspectives <span className="not-italic font-light text-stone-500">& Editorial</span>
            </h1>
          </div>

          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-800 bg-stone-900 text-stone-100 font-sans text-xs tracking-wider uppercase shadow-md hover:bg-emerald-800 hover:border-emerald-800 transition-all group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Retour à l'accueil</span>
          </a>
        </header>

        {/* ========================================================= */}
        {/* --- SECTION DUAL CARDS : SOMBRE & MAT (PAS DE BRILLANCE) --- */}
        {/* ========================================================= */}
        <section className="font-sans">
          <div className="flex items-center justify-between mb-6 border-b border-stone-300 pb-3">
            <div className="flex items-center gap-2 text-stone-600 uppercase tracking-widest text-xs font-bold">
              <Zap size={16} className="text-emerald-700" />
              <span>À la une : Monde vs Écosystème RTH</span>
            </div>
            <span className="text-[11px] font-mono text-stone-400 hidden sm:inline">Actu Globale & Mises à Jour</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* CARTE 1 : DANS LE MONDE */}
            <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-lg min-h-[320px] flex flex-col justify-between p-8 text-white">
              <img 
                src={highlightFeatures.world.image} 
                alt={highlightFeatures.world.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${highlightFeatures.world.bgGradient} opacity-95 -z-10`} />

              <div className="flex justify-between items-start z-10">
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-blue-400" />
                  <span className={`text-[10px] tracking-widest uppercase font-mono px-3 py-1 rounded-full border font-semibold ${highlightFeatures.world.badgeColor}`}>
                    {highlightFeatures.world.tag}
                  </span>
                </div>
                <button className="p-2 rounded-full bg-slate-800/80 text-stone-300 border border-slate-700 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all cursor-pointer">
                  <ArrowUpRight size={18} />
                </button>
              </div>

              <div className="z-10 mt-8 space-y-3">
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight text-slate-100">
                  {highlightFeatures.world.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-sans max-w-md">
                  {highlightFeatures.world.subtitle}
                </p>
                <button className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-full font-bold text-xs uppercase tracking-wider shadow-md hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all cursor-pointer">
                  {highlightFeatures.world.cta}
                </button>
              </div>
            </div>

            {/* CARTE 2 : SUR LE SITE RTH */}
            <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-lg min-h-[320px] flex flex-col justify-between p-8 text-white">
              <img 
                src={highlightFeatures.site.image} 
                alt={highlightFeatures.site.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${highlightFeatures.site.bgGradient} opacity-95 -z-10`} />

              <div className="flex justify-between items-start z-10">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-emerald-400" />
                  <span className={`text-[10px] tracking-widest uppercase font-mono px-3 py-1 rounded-full border font-semibold ${highlightFeatures.site.badgeColor}`}>
                    {highlightFeatures.site.tag}
                  </span>
                </div>
                <button className="p-2 rounded-full bg-slate-800/80 text-stone-300 border border-slate-700 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all cursor-pointer">
                  <ArrowUpRight size={18} />
                </button>
              </div>

              <div className="z-10 mt-8 space-y-3">
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight text-slate-100">
                  {highlightFeatures.site.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-sans max-w-md">
                  {highlightFeatures.site.subtitle}
                </p>
                <button className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-full font-bold text-xs uppercase tracking-wider shadow-md hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all cursor-pointer">
                  {highlightFeatures.site.cta}
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* --- GALERIE DE POSTERS --- */}
        <section className="font-sans pt-6 border-t border-stone-300">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <ImageIcon size={20} className="text-emerald-700" />
              <h2 className="text-2xl font-serif font-bold text-stone-900">Posters & Visual Showcase</h2>
            </div>
            <span className="text-xs font-mono text-stone-400 uppercase tracking-widest hidden sm:inline">Format 4:5</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posterGallery.map((poster) => (
              <div key={poster.id}>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-200 shadow-md mb-4">
                  <img 
                    src={poster.image} 
                    alt={poster.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 block">
                      {poster.category}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-stone-900">
                      {poster.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- GRILLE PRINCIPALE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-6 border-t border-stone-300">
          
          <div className="lg:col-span-2 space-y-16">
            
            {/* NOUVEAUTÉS SERVICES */}
            <section>
              <div className="flex items-center gap-3 mb-8 pb-3 border-b border-stone-300">
                <Sparkles size={20} className="text-emerald-700" />
                <h2 className="text-2xl font-serif font-bold text-stone-900">Nouveautés & Offres</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                {serviceNews.map((item) => (
                  <article key={item.id} className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 bg-stone-100 text-stone-700 font-bold rounded">
                          {item.category}
                        </span>
                        <span className="text-xs text-stone-400 font-mono">{item.date}</span>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-stone-900 mb-3 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* TENDANCES DU MARCHÉ */}
            <section>
              <div className="flex items-center gap-3 mb-8 pb-3 border-b border-stone-300">
                <TrendingUp size={20} className="text-emerald-700" />
                <h2 className="text-2xl font-serif font-bold text-stone-900">Analyses du Marché</h2>
              </div>

              <div className="space-y-6 font-sans">
                {marketTrends.map((article) => (
                  <article key={article.id} className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-stone-400 font-mono">
                        <Clock size={13} />
                        <span>Lecture estimée : {article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-stone-900">
                        {article.title}
                      </h3>
                      <p className="text-stone-600 text-sm leading-relaxed max-w-xl">
                        {article.summary}
                      </p>
                    </div>
                    <button className="self-start md:self-center p-3 rounded-full bg-stone-100 text-stone-800 hover:bg-emerald-700 hover:text-white transition-colors cursor-pointer">
                      <ExternalLink size={18} />
                    </button>
                  </article>
                ))}
              </div>
            </section>

            {/* TIPS VIDÉO */}
            <section>
              <div className="flex items-center gap-3 mb-8 pb-3 border-b border-stone-300">
                <Video size={20} className="text-emerald-700" />
                <h2 className="text-2xl font-serif font-bold text-stone-900">Tutoriels & Tips Vidéo</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                {videoTips.map((video) => (
                  <div key={video.id}>
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-stone-900 mb-4 shadow-lg">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-stone-900/30 flex items-center justify-center">
                        <button className="w-14 h-14 rounded-full bg-white text-stone-900 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer">
                          <Play size={22} className="ml-1 fill-stone-900" />
                        </button>
                      </div>
                      <span className="absolute bottom-3 right-3 text-[11px] font-mono bg-stone-900/90 text-white px-2.5 py-1 rounded-md">
                        {video.duration}
                      </span>
                    </div>
                    <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                      {video.title}
                    </h3>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* COLONNE DROITE */}
          <div className="lg:col-span-1 font-sans">
            <div className="sticky top-10 p-8 rounded-3xl bg-white border border-stone-300 shadow-xl space-y-8">
              
              <div className="flex items-center gap-3 pb-6 border-b border-stone-200">
                <Calendar size={22} className="text-emerald-700" />
                <div>
                  <h2 className="text-lg font-serif font-bold text-stone-900 uppercase tracking-wide">Programme</h2>
                  <p className="text-xs text-stone-400 font-mono mt-0.5">Événements & Échéances</p>
                </div>
              </div>

              <div className="space-y-6">
                {scheduleEvents.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-stone-100 p-3 rounded-xl border border-stone-200 text-center min-w-[70px]">
                      <span className="text-xs font-mono text-emerald-800 block font-black leading-none">
                        {item.date.split(' ')[0]}
                      </span>
                      <span className="text-[10px] font-mono text-stone-500 block leading-none mt-1">
                        {item.date.split(' ')[1]}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-emerald-800">
                        {item.type}
                      </span>
                      <h4 className="text-xs font-bold text-stone-800 mt-1 leading-snug">
                        {item.event}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-stone-200">
                <button className="w-full py-3 rounded-xl bg-stone-900 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-emerald-800 transition-colors cursor-pointer">
                  S'inscrire à la session
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 px-6 font-sans border-t-4 border-emerald-700 mt-20">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
            
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-2xl font-serif font-bold text-white italic tracking-wide">
                RTH <span className="not-italic text-emerald-500 text-sm uppercase font-sans tracking-widest font-mono block">Relation · Travail · Honneur</span>
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
                Plateforme éditoriale et vitrine de création dédiée à l'ingénierie web moderne, au design d'interfaces haut de gamme et au branding stratégique.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">Rubriques</h4>
              <ul className="space-y-2 text-xs font-medium text-stone-400">
                <li><a href="#" className="hover:text-white transition-colors">À la une (Monde / Site)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Visual Showcase (Posters)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analyses de Marché</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutoriels & Tips Vidéo</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">Services</h4>
              <ul className="space-y-2 text-xs font-medium text-stone-400">
                <li><a href="#" className="hover:text-white transition-colors">Développement React / Next.js</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Design UI/UX & Prototypes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Identité Visuelle & Publicité</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Optimisation Performance & SEO</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">Newsletter</h4>
              <p className="text-xs text-stone-400 leading-normal">
                Recevez directement les derniers articles et ressources dans votre boîte mail.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="votre.email@domaine.com"
                    className="w-full bg-stone-800 border border-stone-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder-stone-500 focus:outline-none"
                  />
                  <button type="submit" className="absolute right-1.5 top-1.5 p-1 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors cursor-pointer">
                    <Send size={12} />
                  </button>
                </div>
              </form>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-mono">
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-emerald-500" />
              <span>Conçu à Antananarivo · Tous droits réservés © 2026 RTH</span>
            </div>

            <div className="flex items-center gap-6 text-[11px]">
              <a href="#" className="hover:text-stone-300 transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-stone-300 transition-colors">Conditions Générales</a>
              <a href="#" className="hover:text-stone-300 transition-colors">Contact</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}