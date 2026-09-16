import { useState, useEffect } from "react";
import portfolioIcon from "../Assets/icone/portfolio.png";
import Navbarform from "../Components/Navbarform";

// ==================== IMPORTS IMAGES ====================
import im1 from "../Assets/portfolio/portheritina/im1.png";
import im2 from "../Assets/portfolio/portheritina/im2.png";
import im3 from "../Assets/portfolio/portheritina/im3.png";
import im4 from "../Assets/portfolio/portheritina/im4.png";
import im6 from "../Assets/portfolio/portheritina/im6.png";

import immo from "../Assets/portfolio/immo.png";
import hoverimmo from "../Assets/portfolio/hoverimmo.png";
import login from "../Assets/portfolio/login.png";
import dashboard from "../Assets/portfolio/dashboard.png";
import comb1 from "../Assets/portfolio/KOMB/image.png";
import comb2 from "../Assets/portfolio/KOMB/image2.png";

import esp1 from "../Assets/portfolio/espace/esp1.png";
import esp2 from "../Assets/portfolio/espace/esp2.png";
import esp3 from "../Assets/portfolio/espace/esp3.png";
import esp4 from "../Assets/portfolio/espace/esp4.png";
import esp5 from "../Assets/portfolio/espace/esp5.png";

import ap1 from "../Assets/portfolio/apiculture/ap1.png";
import ap2 from "../Assets/portfolio/apiculture/ap2.png";
import ap3 from "../Assets/portfolio/apiculture/ap3.png";
import ap4 from "../Assets/portfolio/apiculture/ap4.png";
import ap5 from "../Assets/portfolio/apiculture/ap5.png";

// ==================== COMPOSANT CARTE ====================
function ProductCard({ service, onOpen }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isHovered && service.images && service.images.length > 0) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % service.images.length);
      }, 800);
    } else {
      setCurrentImageIndex(0);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, service.images]);

  return (
    <div
      onClick={() => onOpen(service)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group block relative h-[210px] sm:h-[230px] md:h-[250px] rounded-2xl overflow-hidden bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 cursor-pointer"
    >
      {service.nouveau && (
        <div className="absolute top-3 right-3 z-30 bg-[#2DD298] text-slate-950 font-black text-[10px] tracking-wider px-2.5 py-1 rounded-full uppercase shadow-md">
          Nouveau
        </div>
      )}

      <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
        <img
          src={service.images[currentImageIndex] || service.images[0]}
          alt={service.title}
          className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

      <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-end">
        <span className="text-[#2DD298] text-[10px] font-black tracking-[0.2em] mb-1 uppercase">
          {service.categorie}
        </span>
        <h3 className="text-white text-base md:text-lg font-bold mb-1">
          {service.title}
        </h3>
        <p className="text-slate-200 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          {service.description}
        </p>
      </div>
    </div>
  );
}

// ==================== COMPOSANT MODAL ====================
function ProjectModal({ service, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!service || !service.images || service.images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % service.images.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [service]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-slate-50">
          <div className="flex items-center gap-3">
            <span className="text-[#2DD298] text-xs font-black tracking-[0.15em] uppercase">
              {service.categorie}
            </span>
            {service.nouveau && (
              <span className="bg-[#2DD298] text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-full uppercase">
                Nouveau
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors text-lg"
          >
            ✕
          </button>
        </div>

        {/* Corps */}
        <div className="flex flex-col md:flex-row overflow-y-auto">
          {/* Colonne Image */}
          <div className="w-full md:w-[45%] relative bg-slate-900 min-h-[280px] md:min-h-[500px] flex items-center justify-center">
            <img
              src={service.images[currentImageIndex]}
              alt={service.title}
              className="max-w-full max-h-full object-contain"
            />

            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-10">
              {service.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === currentImageIndex
                      ? "bg-[#2DD298] scale-125"
                      : "bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Colonne Contenu */}
          <div className="w-full md:w-[55%] p-6 md:p-8 overflow-y-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
              {service.title}
            </h2>

            {service.annee && (
              <p className="text-slate-400 text-sm mb-5">{service.annee}</p>
            )}

            <div className="mb-6">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
                Description du projet
              </h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                {service.fullDescription}
              </p>
            </div>

            {service.stack && service.stack.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                  Technologies utilisées
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {service.features && service.features.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                  Fonctionnalités & Plan
                </h3>
                <ul className="space-y-2">
                  {service.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-slate-600 text-[14.5px]"
                    >
                      <span className="text-[#2DD298] mt-0.5 font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <a
              href={service.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all hover:scale-[1.02] active:scale-95"
            >
              Visiter le projet
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== COMPOSANT PRINCIPAL ====================
export default function Produit() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("TOUT");
  const [selectedService, setSelectedService] = useState(null);

  const NavLinks = [
    { nom: "TOUT" },
    { nom: "VITRINE" },
    { nom: "CATALOGUE" },
    { nom: "APPLICATION WEB" },
    { nom: "APP MOBILE" },
    { nom: "DEV SPECIFIQUE" },
    { nom: "GALERIE" },
  ];

  const services = [
    {
      title: "PORTFOLIO Heritina",
      description: "Site Vitrine personnel",
      fullDescription:
        "Portfolio personnel moderne conçu pour présenter mon parcours, mes compétences et mes réalisations de manière claire et élégante. L’interface est responsive, fluide et optimisée pour offrir une excellente expérience utilisateur sur tous les appareils.",
      stack: ["React", "Tailwind CSS", "Framer Motion", "Netlify"],
      features: [
        "Design moderne et minimaliste",
        "Navigation fluide et animations douces",
        "Section projets avec filtres",
        "Formulaire de contact fonctionnel",
        "Optimisation SEO et performance",
        "100% responsive (mobile, tablette, desktop)",
      ],
      annee: "2025",
      images: [im1, im2, im3, im4, im6],
      categorie: "VITRINE",
      lien: "https://rheritina.netlify.app",
      nouveau: true,
    },
    {
      title: "APICULTURE",
      description: "Site Vitrine Apicole",
      fullDescription:
        "Site vitrine dédié à une activité apicole. Il met en valeur les produits de la ruche, le savoir-faire de l’apiculteur et l’univers des abeilles à travers un design naturel, chaleureux et immersif.",
      stack: ["React", "Tailwind CSS", "Netlify"],
      features: [
        "Présentation des produits de la ruche",
        "Galerie photos immersive",
        "Section « Notre histoire »",
        "Informations sur l’apiculture et l’environnement",
        "Design organique et couleurs naturelles",
        "Optimisé pour le mobile",
      ],
      annee: "2025",
      images: [ap1, ap2, ap3, ap4, ap5],
      categorie: "VITRINE",
      lien: "https://rthapiculture.netlify.app",
      nouveau: true,
    },
    {
      title: "Espace AURORA",
      description: "Site Vitrine d’un espace",
      fullDescription:
        "Site de présentation pour un espace moderne (coworking / événementiel). Le design est épuré, lumineux et professionnel afin de mettre en avant les lieux, les services et l’ambiance unique de l’espace.",
      stack: ["React", "Tailwind CSS", "Netlify"],
      features: [
        "Présentation des espaces disponibles",
        "Galerie photos haute qualité",
        "Section services et tarifs",
        "Formulaire de réservation / contact",
        "Design minimaliste et élégant",
        "Navigation claire et intuitive",
      ],
      annee: "2025",
      images: [esp1, esp2, esp3, esp4, esp5],
      categorie: "VITRINE",
      lien: "https://rthcombo.netlify.app",
      nouveau: true,
    },
    {
      title: "Eleveur Kombo",
      description: "Site Vitrine d’un éleveur",
      fullDescription:
        "Site dédié à un éleveur de Kombo. Il permet de présenter l’élevage, les animaux, les conditions d’élevage et les services proposés de manière professionnelle et rassurante.",
      stack: ["React", "Tailwind CSS", "Netlify"],
      features: [
        "Présentation de l’élevage et des animaux",
        "Galerie photos",
        "Informations sur les pratiques d’élevage",
        "Contact et demande de renseignements",
        "Design simple et professionnel",
      ],
      annee: "2024",
      images: [comb1, comb2, comb1, comb2, comb1],
      categorie: "APPLICATION WEB",
      lien: "https://rthcombo.netlify.app",
      nouveau: false,
    },
    {
      title: "Application École",
      description: "Gestion scolaire complète",
      fullDescription:
        "Application web complète de gestion pour un établissement scolaire. Elle permet la gestion des élèves, des notes, des classes et offre un tableau de bord administrateur. Identifiants de test : admin / admin123",
      stack: ["React", "Tailwind CSS", "LocalStorage / Mock API"],
      features: [
        "Authentification sécurisée (admin)",
        "Tableau de bord avec statistiques",
        "Gestion des élèves et des classes",
        "Saisie et consultation des notes",
        "Interface claire et professionnelle",
        "Responsive design",
      ],
      annee: "2024",
      images: [login, dashboard, login, dashboard, login],
      categorie: "APPLICATION WEB",
      lien: "https://edurth.netlify.app",
      nouveau: false,
    },
    {
      title: "Immobilier",
      description: "Site catalogue immobilier",
      fullDescription:
        "Site de présentation et catalogue pour une agence immobilière. Il permet de consulter les biens disponibles, de filtrer les annonces et de contacter facilement l’agence.",
      stack: ["React", "Tailwind CSS", "Netlify"],
      features: [
        "Catalogue de biens immobiliers",
        "Filtres de recherche (prix, type, localisation)",
        "Fiches détaillées des biens",
        "Galerie photos par bien",
        "Formulaire de contact",
        "Design moderne et professionnel",
      ],
      annee: "2024",
      images: [immo, hoverimmo, immo, hoverimmo, immo],
      categorie: "VITRINE",
      lien: "https://rthimmo.netlify.app",
      nouveau: false,
    },
  ];

  const filteredServices =
    activeTab === "TOUT"
      ? services
      : services.filter((service) => service.categorie === activeTab);

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-950">
      <Navbarform />

      {/* HERO */}
      <section className="w-full bg-[#f8fafc] py-20 px-4 md:px-[1cm] border-b border-gray-100">
        <div className="text-center mt-32 md:mt-44">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Propulsez votre vision avec nos{" "}
            <span className="bg-gradient-to-r from-[#6F54D4] to-[#2DD298] bg-clip-text text-transparent">
              Solutions Digitales
            </span>
          </h1>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <main className="w-full py-12 px-4 md:px-[1cm] relative">
        {/* BARRE DE FILTRES */}
        <div className="sticky top-[70px] md:top-[80px] z-40 w-full flex flex-col items-center mb-12 py-4 bg-white/90 backdrop-blur-md">
          <nav className="hidden lg:flex p-1.5 bg-white shadow-sm rounded-full border border-gray-200">
            {NavLinks.map(({ nom }) => (
              <button
                key={nom}
                onClick={() => setActiveTab(nom)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 relative ${
                  activeTab === nom
                    ? "text-white"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {activeTab === nom && (
                  <span className="absolute inset-0 rounded-full bg-slate-900 transition-all duration-300"></span>
                )}
                <span className="relative z-10">{nom}</span>
              </button>
            ))}
          </nav>

          {/* Mobile */}
          <div className="lg:hidden w-full max-w-xs relative">
            <button
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
              className="w-full px-6 py-4 rounded-2xl bg-white shadow-md border border-gray-100 flex items-center justify-between"
            >
              <span className="font-bold text-slate-800">{activeTab}</span>
              <img
                src={portfolioIcon}
                alt="icon"
                className={`w-5 h-5 opacity-60 transition-transform ${
                  openMobileMenu ? "rotate-180" : ""
                }`}
              />
            </button>

            {openMobileMenu && (
              <div className="mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50 absolute w-full left-0">
                {NavLinks.map(({ nom }) => (
                  <button
                    key={nom}
                    onClick={() => {
                      setActiveTab(nom);
                      setOpenMobileMenu(false);
                    }}
                    className={`w-full px-5 py-3 rounded-xl text-left font-semibold transition-colors ${
                      activeTab === nom
                        ? "bg-slate-100 text-[#6F54D4]"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {nom}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* GRILLE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <ProductCard
              key={index}
              service={service}
              onOpen={setSelectedService}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 font-medium">
              Aucun service disponible dans cette catégorie.
            </p>
          </div>
        )}
      </main>

      {/* MODAL */}
      {selectedService && (
        <ProjectModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}