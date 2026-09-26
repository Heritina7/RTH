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
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-400/20",
    bgGradient: "from-slate-950 via-slate-900 to-indigo-950",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800"
  },
  site: {
    tag: "NOUVEAUTÉ SUR LE SITE RTH",
    title: "Lancement du Studio Visuels & Branding Pub",
    subtitle: "Commandez directement vos maquettes UI/UX et bannières publicitaires 4:5 optimisées pour vos campagnes.",
    cta: "Voir les offres RTH",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-400/20",
    bgGradient: "from-slate-950 via-slate-900 to-emerald-950",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800"
  }
};

const posterGallery = [
  {
    id: 1,
    title: "Brand Identity Framework",
    category: "Design System",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600"
  },
  {
    id: 2,
    title: "Minimalist Web Experience",
    category: "Affiche Pub",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=600"
  },
  {
    id: 3,
    title: "Digital Ecosystem 2026",
    category: "Événement",
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
    <div className="min-h-screen bg-[#F8F7F4] text-stone-800 antialiased selection:bg-emerald-100">
      
      <div className="max-w-6xl mx-auto px-6 py-14 space-y-24">
        
        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
              <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-emerald-700">
                Le Journal & Insights
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-medium text-stone-900 tracking-tight leading-[1.15]">
              Perspectives
              <span className="text-stone-400 font-normal"> & Editorial</span>
            </h1>
          </div>

          <a 
            href="/" 
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 text-white text-xs font-medium tracking-wide hover:bg-emerald-700 transition-colors duration-300"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Retour à l'accueil
          </a>
        </header>

        {/* DUAL HIGHLIGHT CARDS */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-stone-500 text-xs font-medium tracking-widest uppercase">
              <Zap size={14} className="text-emerald-600" />
              À la une
            </div>
            <span className="text-[11px] text-stone-400 hidden sm:block">Monde & Écosystème RTH</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Card Monde */}
            <div className="group relative rounded-[1.75rem] overflow-hidden min-h-[320px] flex flex-col justify-between p-8 text-white">
              <img 
                src={highlightFeatures.world.image} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${highlightFeatures.world.bgGradient} opacity-85`} />
              
              <div className="relative z-10 flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <Globe size={14} className="text-blue-300" />
                  <span className={`text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border font-medium ${highlightFeatures.world.badgeColor}`}>
                    {highlightFeatures.world.tag}
                  </span>
                </div>
                <button className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/80 hover:bg-blue-500 hover:border-blue-400 transition-all duration-300">
                  <ArrowUpRight size={15} />
                </button>
              </div>

              <div className="relative z-10 space-y-3.5 mt-12">
                <h3 className="text-2xl font-medium leading-snug tracking-tight">
                  {highlightFeatures.world.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                  {highlightFeatures.world.subtitle}
                </p>
                <button className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-white rounded-full text-xs font-medium tracking-wide transition-all duration-300">
                  {highlightFeatures.world.cta}
                </button>
              </div>
            </div>

            {/* Card Site */}
            <div className="group relative rounded-[1.75rem] overflow-hidden min-h-[320px] flex flex-col justify-between p-8 text-white">
              <img 
                src={highlightFeatures.site.image} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${highlightFeatures.site.bgGradient} opacity-85`} />
              
              <div className="relative z-10 flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-emerald-300" />
                  <span className={`text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border font-medium ${highlightFeatures.site.badgeColor}`}>
                    {highlightFeatures.site.tag}
                  </span>
                </div>
                <button className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/80 hover:bg-emerald-500 hover:border-emerald-400 transition-all duration-300">
                  <ArrowUpRight size={15} />
                </button>
              </div>

              <div className="relative z-10 space-y-3.5 mt-12">
                <h3 className="text-2xl font-medium leading-snug tracking-tight">
                  {highlightFeatures.site.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                  {highlightFeatures.site.subtitle}
                </p>
                <button className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full text-xs font-medium tracking-wide transition-all duration-300">
                  {highlightFeatures.site.cta}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* GALERIE POSTERS */}
        <section>
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-emerald-700 shadow-sm">
                <ImageIcon size={16} />
              </div>
              <h2 className="text-2xl font-medium text-stone-900 tracking-tight">Posters & Visual Showcase</h2>
            </div>
            <span className="text-[11px] text-stone-400 tracking-widest uppercase hidden sm:block">Format 4:5</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posterGallery.map((poster) => (
              <div key={poster.id} className="group">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 mb-5 shadow-sm">
                  <img 
                    src={poster.image} 
                    alt={poster.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-emerald-700">
                    {poster.category}
                  </span>
                  <h3 className="text-lg font-medium text-stone-900 group-hover:text-emerald-800 transition-colors">
                    {poster.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTENU PRINCIPAL + SIDEBAR */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
          
          <div className="lg:col-span-2 space-y-16">
            
            {/* Nouveautés */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-emerald-700 shadow-sm">
                  <Sparkles size={16} />
                </div>
                <h2 className="text-2xl font-medium text-stone-900 tracking-tight">Nouveautés & Offres</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {serviceNews.map((item) => (
                  <article 
                    key={item.id}
                    className="bg-white rounded-2xl border border-stone-200/80 p-7 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-center mb-5">
                      <span className="text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 bg-stone-100 text-stone-600 rounded-md">
                        {item.category}
                      </span>
                      <span className="text-xs text-stone-400">{item.date}</span>
                    </div>
                    <h3 className="text-lg font-medium text-stone-900 mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {/* Analyses */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-emerald-700 shadow-sm">
                  <TrendingUp size={16} />
                </div>
                <h2 className="text-2xl font-medium text-stone-900 tracking-tight">Analyses du Marché</h2>
              </div>

              <div className="space-y-4">
                {marketTrends.map((article) => (
                  <article 
                    key={article.id}
                    className="group bg-white rounded-2xl border border-stone-200/80 p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-stone-400">
                        <Clock size={12} />
                        <span>Lecture : {article.readTime}</span>
                      </div>
                      <h3 className="text-lg font-medium text-stone-900 group-hover:text-emerald-800 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-stone-500 leading-relaxed max-w-lg">
                        {article.summary}
                      </p>
                    </div>
                    <button className="self-start sm:self-center p-2.5 rounded-full bg-stone-50 text-stone-500 hover:bg-emerald-600 hover:text-white transition-all duration-300">
                      <ExternalLink size={16} />
                    </button>
                  </article>
                ))}
              </div>
            </section>

            {/* Vidéos */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-emerald-700 shadow-sm">
                  <Video size={16} />
                </div>
                <h2 className="text-2xl font-medium text-stone-900 tracking-tight">Tutoriels & Tips Vidéo</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videoTips.map((video) => (
                  <div key={video.id} className="group">
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-stone-900 mb-4 shadow-md">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-13 h-13 rounded-full bg-white text-stone-900 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
                          <Play size={18} className="ml-0.5 fill-current" />
                        </button>
                      </div>
                      <span className="absolute bottom-3 right-3 text-[11px] font-medium bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg">
                        {video.duration}
                      </span>
                    </div>
                    <h3 className="text-base font-medium text-stone-900 leading-snug group-hover:text-emerald-800 transition-colors">
                      {video.title}
                    </h3>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-10 bg-white rounded-3xl border border-stone-200 shadow-lg shadow-stone-200/40 p-7 space-y-7">
              
              <div className="flex items-center gap-3 pb-5 border-b border-stone-100">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
                  <Calendar size={16} />
                </div>
                <div>
                  <h2 className="text-base font-medium text-stone-900">Programme</h2>
                  <p className="text-xs text-stone-400 mt-0.5">Événements à venir</p>
                </div>
              </div>

              <div className="space-y-5">
                {scheduleEvents.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-stone-50 rounded-xl border border-stone-100 px-3 py-2.5 text-center min-w-[64px]">
                      <span className="text-xs font-semibold text-emerald-700 block">
                        {item.date.split(' ')[0]}
                      </span>
                      <span className="text-[10px] text-stone-400 block mt-0.5">
                        {item.date.split(' ')[1]}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-medium text-emerald-700">
                        {item.type}
                      </span>
                      <p className="text-sm font-medium text-stone-800 mt-1 leading-snug">
                        {item.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full py-3 rounded-xl bg-stone-900 text-white text-xs font-medium tracking-wide hover:bg-emerald-700 transition-colors duration-300">
                S'inscrire à la session
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-stone-950 text-stone-400 pt-16 pb-10 px-6 mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
            
            <div className="lg:col-span-2 space-y-4">
              <div>
                <h3 className="text-xl font-medium text-white tracking-tight">RTH</h3>
                <span className="text-[10px] tracking-[0.2em] uppercase text-emerald-500 font-medium">
                  Relation · Travail · Honneur
                </span>
              </div>
              <p className="text-sm text-stone-500 leading-relaxed max-w-xs">
                Plateforme éditoriale dédiée à l'ingénierie web moderne, au design d'interfaces et au branding stratégique.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-[11px] font-medium uppercase tracking-widest text-emerald-500">Rubriques</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">À la une</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Visual Showcase</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analyses de Marché</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutoriels Vidéo</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[11px] font-medium uppercase tracking-widest text-emerald-500">Services</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">React / Next.js</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Design UI/UX</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Identité Visuelle</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SEO & Performance</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[11px] font-medium uppercase tracking-widest text-emerald-500">Newsletter</h4>
              <p className="text-sm text-stone-500">Recevez les dernières ressources.</p>
              <form onSubmit={(e) => e.preventDefault()} className="relative">
                <input 
                  type="email" 
                  placeholder="votre@email.com"
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-emerald-600 transition-colors"
                />
                <button type="submit" className="absolute right-1.5 top-1.5 p-1.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors">
                  <Send size={12} />
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <Globe size={12} className="text-emerald-600" />
              <span>Conçu à Antananarivo · © 2026 RTH</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-stone-300 transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-stone-300 transition-colors">Conditions</a>
              <a href="#" className="hover:text-stone-300 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}