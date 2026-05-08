import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import NavShop from "../Components/NavShop";
import { 
  Cpu, Terminal, Zap, Target, ArrowRight, ShieldCheck, 
  Music, Monitor, Gift, Rocket, BadgePercent, Sparkles, Star 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const panelsData = [
  {
    id: "accueil",
    unit: "UNIT_01",
    category: "MES_FORMATIONS_PRINCIPALES",
    layout: "triple",
    cards: [
      { id: 'EDU-01', title: 'BUREAUTIQUE', tag: 'MAÎTRISE', icon: Monitor, desc: 'Optimisation de la productivité.', color: '#ffffff', image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=800&auto=format&fit=crop' },
      { id: 'EDU-02', title: 'DÉVELOPPEMENT', tag: 'EXPERT', icon: Terminal, desc: 'Conception d’applications modernes.', color: '#00f2fe', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop' },
      { id: 'EDU-03', title: 'MUSIQUE', tag: 'CRÉATION', icon: Music, desc: 'Théorie musicale et ingénierie.', color: '#ff0055', image: 'https://images.unsplash.com/photo-1514525253361-bee8a187499b?q=80&w=800&auto=format&fit=crop' },
    ]
  },
  {
    id: "services",
    unit: "UNIT_02",
    category: "SOLUTIONS_EXPERTES",
    layout: "triple",
    cards: [
      { id: 'SRV-01', title: 'AUDIT TECHNIQUE', tag: 'PERFORMANCE', icon: Cpu, desc: 'Analyse complète de vos systèmes.', color: '#a855f7', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop' },
      { id: 'SRV-02', title: 'CYBER SÉCURITÉ', tag: 'PROTECTION', icon: ShieldCheck, desc: 'Protocoles avancés.', color: '#10b981', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop' },
      { id: 'SRV-03', title: 'CONSEIL IT', tag: 'STRATÉGIE', icon: Target, desc: 'Accompagnement personnalisé.', color: '#f97316', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop' },
    ]
  },
  {
    id: "projet",
    unit: "UNIT_03",
    category: "OFFRES_&_PROMOTIONS_FLASH",
    layout: "grid",
    cards: [
      { id: 'PRM-01', title: 'PACK WEB', tag: '-40%', icon: BadgePercent, desc: 'Site vitrine + SEO inclus.', color: '#fdfa05', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500' },
      { id: 'PRM-02', title: 'STARTUP KIT', tag: 'OFFRE', icon: Rocket, desc: 'MVP prêt en 2 semaines.', color: '#ff0055', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500' },
      { id: 'PRM-03', title: 'FIDÉLITÉ', tag: 'CADEAU', icon: Gift, desc: 'Maintenance offerte 1 an.', color: '#00f2fe', image: 'https://images.unsplash.com/photo-1549463595-b443b222fe95?q=80&w=500' },
    ]
  }
];

const Shop = () => {
  const component = useRef(null);
  const slider = useRef(null);
  const [activeSection, setActiveSection] = useState('ACCUEIL');

  useEffect(() => {
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.panel');
      const sectionNames = ['ACCUEIL', 'FORMATION', 'CONFERENCE'];

      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        let scrollTween = gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: slider.current,
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1),
            end: () => '+=' + slider.current.scrollWidth,
            onUpdate: (self) => {
              const index = Math.round(self.progress * (panels.length - 1));
              setActiveSection(sectionNames[index]);
            }
          },
        });

        window.scrollToSection = (index) => {
          const st = scrollTween.scrollTrigger;
          const targetScroll = st.start + (index / (panels.length - 1)) * (st.end - st.start);
          gsap.to(window, { scrollTo: targetScroll, duration: 1, ease: "power2.inOut" });
        };

        panels.forEach((panel) => {
          gsap.fromTo(panel.querySelectorAll('.anim-card'), 
            { y: 60, opacity: 0 },
            { 
              y: 0, opacity: 1, stagger: 0.1, duration: 0.8,
              scrollTrigger: {
                trigger: panel,
                containerAnimation: scrollTween,
                start: "left 80%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });
      });

      mm.add("(max-width: 767px)", () => {
        panels.forEach((panel, i) => {
          ScrollTrigger.create({
            trigger: panel,
            start: "top center",
            onEnter: () => setActiveSection(sectionNames[i]),
            onEnterBack: () => setActiveSection(sectionNames[i]),
          });
        });
      });

    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={component} className="bg-[#0a0a0a] font-mono text-white overflow-x-hidden">
      <NavShop activeSection={activeSection} />
      
      <div ref={slider} className="flex flex-col md:flex-row flex-nowrap min-h-screen md:w-max">
        {panelsData.map((panel, pIndex) => (
          <section key={pIndex} id={panel.id} className="panel w-full md:w-screen min-h-screen flex-shrink-0 flex flex-col pt-32 pb-10 px-4 md:px-8 relative border-b md:border-b-0 md:border-r border-white/5">
            <div className="absolute top-24 right-10 text-[10rem] font-black text-white/[0.03] pointer-events-none select-none italic uppercase leading-none z-0">
              {panel.unit}
            </div>

            <div className="mb-6 flex items-center gap-4 px-2 relative z-20">
              <div className="h-[1px] w-12 bg-[#00f2fe]" />
              <span className="text-[10px] font-bold text-[#00f2fe] tracking-[0.6em] uppercase">{panel.category}</span>
            </div>

            <div className={`flex-1 grid gap-4 w-full relative z-10 ${panel.layout === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-3'}`}>
              {panel.cards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.id} className="anim-card group relative border border-white/10 bg-[#111] hover:border-[#00f2fe]/40 transition-all duration-500 overflow-hidden flex flex-col cursor-pointer min-h-[250px]">
                    <div className="absolute inset-0 z-0">
                      <img src={card.image} alt="" className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity" />
                    </div>
                    <div className="p-6 relative z-10 flex flex-col h-full justify-between">
                      <div className="flex justify-between items-start">
                        <div className="p-2 bg-black/70 border border-white/20"><Icon size={20} style={{ color: card.color }} /></div>
                        <span className="text-[8px] font-bold text-white bg-black/80 px-2 py-0.5 border border-white/10 uppercase">{card.tag}</span>
                      </div>
                      <div className="bg-black/60 backdrop-blur-sm p-3 border-l-2 mt-4" style={{ borderColor: card.color }}>
                        <h3 className="text-xl font-black uppercase">{card.title}</h3>
                        <p className="text-white/80 text-[11px] mt-1">{card.desc}</p>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-[8px] text-white/40">{card.id}</span>
                        <ArrowRight size={14} className="text-[#00f2fe]" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Shop;
