import React, { useRef } from 'react';
import im1 from '../Assets/Service/portrecent/im1.png';
import im2 from '../Assets/Service/portrecent/im2.png';
import graph from '../Assets/Service/graph.png';
import Ass from '../Assets/Service/Ass.png';
import web from '../Assets/Service/web.png';
import plan from '../Assets/Service/plan.png';
import mainte from '../Assets/Service/mainte.png';
import Navbar from "../Components/Navbar";

/* ── Icônes ──────────────────────────────────────────────────── */
const Check = () => (
  <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
  </svg>
);

// Fusion des cartes Réseaux et VDI en une seule section d'infrastructure globale
const combinedNetworkCards = [
  {
    title: "Audit & Conseil",
    desc: "Analyse de vos besoins et planification d'infrastructures fiables.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4" />
      </svg>
    )
  },
  {
    title: "Câblage Structuré VDI",
    desc: "Installation soignée de chemins de câbles, prises RJ45 (Cat6a/Cat7) et agencement des baies.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Déploiement Réseau",
    desc: "Mise en service de switches, routeurs, brassage et optimisation des flux.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  {
    title: "Certification & Recette",
    desc: "Tests de réflectométrie, validation des liaisons et édition de rapports certifiés.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Sécurité Réseau",
    desc: "Pare-feu, VPN et protocoles sécurisés contre toutes les menaces.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    title: "Cloud & Architecture",
    desc: "Interconnexion multi-sites hybrides et gestion de serveurs distants.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    title: "Infogérance & Supervision",
    desc: "Monitoring temps réel de votre parc informatique, repérage et support continu.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    )
  },
  {
    title: "Formation & Documentation",
    desc: "Transfert de compétences, schémas d'architecture annotés et guides d'exploitation.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  }
];

const argumentsVente = [
  "Hébergement gratuit pendant 1 an",
  "Optimisé performance & SEO",
  "Abonnement annuel à moitié prix",
  "Mises à jour gratuites tous les 6 mois",
  "Design responsive (PC, tablette, mobile)",
  "Livraison en moins d'une semaine",
];

const services = [
  { title: "Graphiste & Designer", img: graph, desc: "Identité visuelle & UI/UX" },
  { title: "Assistant Virtuel",    img: Ass,   desc: "Support administratif" },
  { title: "Création Web",         img: web,   desc: "Sites modernes & performants" },
  { title: "Community Manager",    img: plan,  desc: "Stratégie & visibilité sociale" },
  { title: "Maintenance",          img: mainte,desc: "Sécurité & mises à jour" },
];

/* ── Composant principal ─────────────────────────────────────── */
export default function Services() {
  return (
    <div
      className="text-white min-h-screen w-full font-sans overflow-x-hidden"
      style={{ background: '#080c14' }}
    >
      {/* ── FOND AMBIANT ── */}
      <div
        aria-hidden
        style={{
          position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
          background:
            'radial-gradient(ellipse 80% 60% at 10% -10%, rgba(6,182,212,.12) 0%, transparent 60%),' +
            'radial-gradient(ellipse 60% 50% at 90% 100%, rgba(139,92,246,.1) 0%, transparent 55%)',
        }}
      />

      {/* ── GRILLE DE FOND SUBTILE ── */}
      <div
        aria-hidden
        style={{
          position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="relative z-10 px-5 sm:px-10 md:px-16 lg:px-24 max-w-[1440px] mx-auto pb-32">

        <Navbar />

        {/* ════════════════════════════════════════
            HERO
        ════════════════════════════════════════ */}
        <header className="pt-28 md:pt-36 pb-20 text-center">
          {/* Eyebrow pill */}
          <span
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[.35em] uppercase mb-6"
            style={{
              background: 'rgba(6,182,212,.1)',
              border: '1px solid rgba(6,182,212,.25)',
              color: '#67e8f9',
              padding: '6px 18px',
              borderRadius: '999px',
            }}
          >
            <span
              style={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#22d3ee',
                display: 'inline-block',
                boxShadow: '0 0 8px #22d3ee',
              }}
            />
            Expertise Digitale & Infrastructure
          </span>

          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[1.0] mb-8"
            style={{
              background: 'linear-gradient(160deg, #fff 30%, rgba(255,255,255,.35) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Propulsez<br />votre Vision.
          </h1>

          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-loose">
            De la conception graphique au développement web, jusqu'à l'architecture de vos infrastructures réseau — des solutions numériques performantes et sécurisées.
          </p>

          {/* ── Services digitaux ── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-16">
            {services.map((s, i) => (
              <div
                key={i}
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl cursor-default"
                style={{
                  background: 'rgba(255,255,255,.04)',
                  border: '1px solid rgba(255,255,255,.07)',
                  transition: 'transform .35s, border-color .35s, background .35s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'rgba(6,182,212,.35)';
                  e.currentTarget.style.background = 'rgba(6,182,212,.06)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,.07)';
                  e.currentTarget.style.background = 'rgba(255,255,255,.04)';
                }}
              >
                <img src={s.img} alt="" className="h-10 w-10 object-contain" />
                <div>
                  <div className="text-xs font-bold text-white">{s.title}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </header>

        {/* ════════════════════════════════════════
            INFRASTRUCTURES, RÉSEAUX & VDI (FUSIONNÉ)
        ════════════════════════════════════════ */}
        <section className="mt-12 mb-32">
          <SectionLabel color="#22d3ee" label="Infrastructures, Réseaux & Câblage VDI" />

          {/* Passage sur un grid adaptatif pour 8 éléments */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {combinedNetworkCards.map((card, i) => (
              <NetworkCard key={i} card={card} accent="#22d3ee" accentBg="rgba(6,182,212,.07)" accentHover="rgba(6,182,212,.18)" />
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            FORFAITS WEB
        ════════════════════════════════════════ */}
        <section className="mb-32">
          <div className="text-center mb-14">
            <span className="text-[11px] font-bold tracking-[.35em] uppercase text-gray-500 mb-3 block">Tarification</span>
            <h2
              className="text-4xl md:text-5xl font-black"
              style={{
                background: 'linear-gradient(160deg,#fff 40%,rgba(255,255,255,.35))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}
            >
              Forfaits de Developpement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Site Vitrine */}
            <PricingCard
              title="Site Vitrine"
              price="100€ / 500 000 MGA"
              note="min"
              badge={null}
              highlighted={false}
              items={[
                "Présentation Business / Entreprise",
                "CV ou Portfolio en ligne",
                "4 à 5 pages sur mesure",
                "Mail Pro personnalisé",
              ]}
              addon="+ 20€ (100 000 MGA) – Retouche photos"
              footnote="Ex: Intranet, Site Corporate..."
            />

            {/* Site Catalogue — featured */}
            <PricingCard
              title="Site Catalogue"
              price="160€ / 800 000 MGA"
              note="tout inclus"
              badge="Recommandé"
              highlighted
              items={[
                "Tout le pack Vitrine",
                "Présentation de vos produits",
                "Espace Admin de gestion",
                "Panier virtuel de commande",
                "10 à 15 pages",
              ]}
              addon="+ 40€ (200 000 MGA) – Retouche photos"
              footnote="Ex: Catalogue de Vente, Showroom..."
            />

            {/* Web App */}
            <PricingCard
              title="Web App & Mobile"
              price="Sur Devis"
              note=""
              badge={null}
              highlighted={false}
              priceColor="#c084fc"
              items={[
                "Fonctionnalités métier avancées",
                "Connexion sécurisée & Sessions",
                "Multi-plateforme (PC / Mobile)",
                "Interface Admin intelligente",
                "Maintenance & Updates inclus",
              ]}
              addon=""
              footnote="Ex: Gestion Stock, Personnel, ERP..."
            />
          </div>
        </section>

        {/* ════════════════════════════════════════
            FORFAITS VDI
        ════════════════════════════════════════ */}
        <section className="mb-32">
          <div className="text-center mb-14">
            <span className="text-[11px] font-bold tracking-[.35em] uppercase text-gray-500 mb-3 block">Câblage Structuré</span>
            <h2
              className="text-4xl md:text-5xl font-black"
              style={{
                background: 'linear-gradient(160deg,#fff 40%,rgba(255,255,255,.35))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}
            >
              Forfaits Installation VDI
            </h2>
            <p className="text-sm text-gray-500 mt-4 max-w-xl mx-auto">
              Du petit bureau au site industriel — pose propre, certification incluse, baies livrées clé en main.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Pack Starter */}
            <PricingCard
              title="Pack Starter"
              price="Sur Devis"
              note="Jusqu'à 12 prises RJ45"
              badge={null}
              highlighted={false}
              accentColor="#a78bfa"
              items={[
                "Étude & relevé de plan préalable",
                "Pose des chemins de câbles",
                "Tirage & raccordement Cat6 / Cat6a",
                "Installation d'un bandeau de brassage 1U",
                "Test de continuité de chaque liaison",
                "Repérage & étiquetage complet",
              ]}
              addon=""
              footnote="Ex: Bureau, Commerce, Agence..."
            />

            {/* Pack Pro — featured */}
            <PricingCard
              title="Pack Professionnel"
              price="Sur Devis"
              note="De 12 à 48 prises RJ45"
              badge="Recommandé"
              highlighted
              highlightColor="purple"
              accentColor="#a78bfa"
              items={[
                "Tout le Pack Starter",
                "Câblage Cat6a ou Cat7 haute performance",
                "Baie de brassage 6U à 12U complète",
                "Certification réflectomètre (rapport inclus)",
                "Schéma d'architecture annoté livré",
                "Intégration switch & patch cords",
                "Garantie 1 an sur les liaisons",
              ]}
              addon="+ Formation responsable technique"
              footnote="Ex: PME, Hôtel, Clinique, École..."
            />

            {/* Pack Industriel */}
            <PricingCard
              title="Pack Industriel"
              price="Sur Devis"
              note="48+ prises / multi-locaux"
              badge={null}
              highlighted={false}
              accentColor="#a78bfa"
              items={[
                "Audit complet & plan d'exécution",
                "Câblage fibres optiques (OM3/OM4)",
                "Armoires 19″ multi-baies",
                "Certification Cat7 / Classe FA",
                "Reprise & clean-up de l'existant",
                "Documentation technique complète",
                "Maintenance & SAV inclus 1 an",
              ]}
              addon=""
              footnote="Ex: Site industriel, Dataroom, Campus..."
            />
          </div>
        </section>

        {/* ════════════════════════════════════════
            POURQUOI NOUS
        ════════════════════════════════════════ */}
        <section className="mb-32">
          <div
            className="rounded-[2.5rem] p-8 md:p-14"
            style={{
              background:
                'linear-gradient(135deg, rgba(6,182,212,.06) 0%, rgba(255,255,255,.03) 60%, rgba(139,92,246,.06) 100%)',
              border: '1px solid rgba(255,255,255,.08)',
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-1 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-4">
                  Pourquoi nous<br />faire confiance?
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Qualité technique irréprochable et accompagnement continu à chaque étape de votre projet.
                </p>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {argumentsVente.map((arg, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl"
                    style={{
                      background: 'rgba(0,0,0,.25)',
                      border: '1px solid rgba(255,255,255,.06)',
                    }}
                  >
                    <Check />
                    <span className="text-xs font-semibold text-gray-200 uppercase tracking-wider">{arg}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            PORTFOLIO
        ════════════════════════════════════════ */}
        <section>
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-[11px] font-bold tracking-[.35em] uppercase text-cyan-500 mb-2 block">Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-black text-white">Projets récents</h2>
            </div>
            <button
              className="hidden md:block text-xs font-bold uppercase tracking-widest pb-1 text-gray-400 hover:text-cyan-400 transition-colors"
              style={{ borderBottom: '1px solid rgba(6,182,212,.4)' }}
            >
              Voir tout →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div
              className="group md:col-span-8 h-64 md:h-96 overflow-hidden rounded-2xl relative"
              style={{ border: '1px solid rgba(255,255,255,.07)' }}
            >
              <img src={im1} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div
                className="absolute inset-0 flex flex-col items-start justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(0deg,rgba(0,0,0,.7) 0%,transparent 60%)' }}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-1">Branding & Web</span>
                <p className="font-bold text-lg text-white">Découvrir le projet →</p>
              </div>
            </div>

            <div
              className="md:col-span-4 h-64 md:h-96 overflow-hidden rounded-2xl relative group"
              style={{ border: '1px solid rgba(255,255,255,.07)' }}
            >
              <img src={im2} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div
                className="absolute inset-0 flex flex-col items-start justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(0deg,rgba(0,0,0,.7) 0%,transparent 60%)' }}
              >
                <p className="font-bold text-sm text-white">Voir le projet →</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

/* ── Sub-components ──────────────────────────────────────────── */

function SectionLabel({ color, label }) {
  return (
    <div className="flex items-center gap-5">
      <span
        className="text-xs font-black uppercase tracking-[.25em] flex-shrink-0"
        style={{ color }}
      >
        {label}
      </span>
      <div
        className="h-px flex-1"
        style={{ background: `linear-gradient(90deg, ${color}44 0%, transparent 100%)` }}
      />
    </div>
  );
}

function NetworkCard({ card, index, showIndex = false, accent, accentBg, accentHover }) {
  const ref = useRef(null);

  function enter() {
    ref.current.style.borderColor = `${accent}40`;
    ref.current.style.background = accentHover;
    ref.current.querySelector('.icon-wrap').style.background = accent;
    ref.current.querySelector('.icon-wrap').style.color = '#000';
    ref.current.querySelector('.card-title').style.color = accent;
  }
  function leave() {
    ref.current.style.borderColor = 'rgba(255,255,255,.07)';
    ref.current.style.background = accentBg;
    ref.current.querySelector('.icon-wrap').style.background = `${accent}18`;
    ref.current.querySelector('.icon-wrap').style.color = accent;
    ref.current.querySelector('.card-title').style.color = '#fff';
  }

  return (
    <div
      ref={ref}
      onMouseEnter={enter}
      onMouseLeave={leave}
      className="p-6 rounded-2xl flex flex-col gap-4 cursor-default"
      style={{
        background: accentBg,
        border: '1px solid rgba(255,255,255,.07)',
        transition: 'background .3s, border-color .3s',
        minHeight: 160,
      }}
    >
      <div className="flex items-center justify-between">
        <div
          className="icon-wrap p-2.5 rounded-xl"
          style={{
            background: `${accent}18`,
            color: accent,
            transition: 'background .3s, color .3s',
          }}
        >
          {card.icon}
        </div>
        {showIndex && (
          <span
            className="text-3xl font-black tabular-nums"
            style={{ color: 'rgba(255,255,255,.06)' }}
          >
            0{index + 1}
          </span>
        )}
      </div>
      <div>
        <h4
          className="card-title text-sm font-bold mb-1.5 transition-colors"
          style={{ color: '#fff' }}
        >
          {card.title}
        </h4>
        <p className="text-xs text-gray-500 leading-relaxed font-light">{card.desc}</p>
      </div>
    </div>
  );
}

function PricingCard({ title, price, note, badge, highlighted, highlightColor, priceColor, accentColor, items, addon, footnote }) {
  const isPurple = highlighted && highlightColor === 'purple';
  const isCyan   = highlighted && !isPurple;
  const highlightBg     = isCyan   ? 'linear-gradient(160deg, rgba(6,182,212,.15) 0%, rgba(6,182,212,.04) 100%)'
                        : isPurple ? 'linear-gradient(160deg, rgba(139,92,246,.18) 0%, rgba(139,92,246,.05) 100%)'
                        : 'rgba(255,255,255,.03)';
  const highlightBorder = isCyan   ? '1.5px solid rgba(6,182,212,.45)'
                        : isPurple ? '1.5px solid rgba(167,139,250,.5)'
                        : '1px solid rgba(255,255,255,.08)';
  const highlightShadow = isCyan ? '0 20px 60px rgba(6,182,212,.12)' : isPurple ? '0 20px 60px rgba(139,92,246,.18)' : 'none';
  const badgeBg   = isPurple ? '#a78bfa' : '#22d3ee';
  const addonClr  = accentColor || (isPurple ? '#a78bfa' : '#22d3ee');
  const checkClr  = accentColor || '#22d3ee';
  const base = {
    borderRadius: '2rem',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    transition: 'transform .3s',
    position: highlighted ? 'relative' : undefined,
    background: highlightBg,
    border: highlightBorder,
    boxShadow: highlighted ? highlightShadow : 'none',
  };

  return (
    <div
      style={base}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
    >
      {badge && (
        <div
          style={{
            position: 'absolute',
            top: -14,
            left: '50%',
            transform: 'translateX(-50%)',
            background: badgeBg,
            color: '#000',
            fontSize: 10,
            fontWeight: 900,
            letterSpacing: '.15em',
            textTransform: 'uppercase',
            padding: '4px 16px',
            borderRadius: 999,
            whiteSpace: 'nowrap',
          }}
        >
          {badge}
        </div>
      )}

      <div>
        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{title}</div>
        <div
          className="text-2xl font-black leading-tight"
          style={{ color: priceColor || '#fff' }}
        >
          {price}
        </div>
        {note && <div className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">{note}</div>}
      </div>

      <ul className="flex flex-col gap-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
            <svg style={{ width:16, height:16, color: checkClr, flexShrink:0, marginTop:2 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {addon && (
        <div
          className="text-[10px] font-bold uppercase tracking-wider pt-3"
          style={{
            color: addonClr,
            borderTop: '1px solid rgba(255,255,255,.06)',
          }}
        >
          {addon}
        </div>
      )}

      {footnote && (
        <div className="text-[10px] text-gray-600 italic uppercase">{footnote}</div>
      )}
    </div>
  );
}
