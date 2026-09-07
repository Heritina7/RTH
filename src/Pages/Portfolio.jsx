import { useState, useEffect } from "react";
import portfolioIcon from "../Assets/icone/portfolio.png";
import Navbarform from "../Components/Navbarform";

// 1. IMPORTEZ VOS 5 IMAGES POUR CHAQUE PROJET ICI
// Exemple pour le Portfolio Heritina :
import im1 from "../Assets/portfolio/portheritina/im1.png";
import im2 from "../Assets/portfolio/portheritina/im2.png";
import im3 from "../Assets/portfolio/portheritina/im3.png";
import im4 from "../Assets/portfolio/portheritina/im4.png";
import im6 from "../Assets/portfolio/portheritina/im6.png";

// Importez aussi pour les autres projets selon vos besoins...
import immo from "../Assets/portfolio/immo.png";
import hoverimmo from "../Assets/portfolio/hoverimmo.png";
import login from "../Assets/portfolio/login.png";
import dashboard from "../Assets/portfolio/dashboard.png";
import comb1 from "../Assets/portfolio/KOMB/image.png";
import comb2 from "../Assets/portfolio/KOMB/image2.png";
//image espace 
import esp1 from "../Assets/portfolio/espace/esp1.png";
import esp2 from "../Assets/portfolio/espace/esp2.png";
import esp3 from "../Assets/portfolio/espace/esp3.png";
import esp4 from "../Assets/portfolio/espace/esp4.png";
import esp5 from "../Assets/portfolio/espace/esp5.png";
//image apiculture
import ap1 from "../Assets/portfolio/apiculture/ap1.png";
import ap2 from "../Assets/portfolio/apiculture/ap2.png";
import ap3 from "../Assets/portfolio/apiculture/ap3.png";
import ap4 from "../Assets/portfolio/apiculture/ap4.png";
import ap5 from "../Assets/portfolio/apiculture/ap5.png";

// Sous-composant pour gérer l'animation séquentielle des 5 images au survol
function ProductCard({ service }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isHovered && service.images && service.images.length > 0) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % service.images.length);
      }, 800); // Change d'image toutes les 800ms (vous pouvez ajuster la vitesse ici)
    } else {
      setCurrentImageIndex(0);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isHovered, service.images]);

  return (
    <a
      href={service.lien}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group block relative h-[300px] md:h-[340px] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 cursor-pointer"
    >
      {/* Étiquette NOUVEAU */}
      {service.nouveau && (
        <div className="absolute top-3 right-3 z-30 bg-[#2DD298] text-slate-950 font-black text-[10px] tracking-wider px-2.5 py-1 rounded-full uppercase shadow-md">
          Nouveau
        </div>
      )}

      {/* Affichage de l'image active du diaporama */}
      <div className="absolute inset-0">
        <img
          src={service.images[currentImageIndex] || service.images[0]}
          alt={service.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

      {/* Infos */}
      <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
        <span className="text-[#2DD298] text-[10px] font-black tracking-[0.2em] mb-1 uppercase">
          {service.categorie}
        </span>

        <h3 className="text-white text-lg md:text-xl font-bold mb-2">
          {service.title}
        </h3>

        <p className="text-slate-200 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          {service.description}
        </p>
      </div>
    </a>
  );
}

export default function Produit() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("TOUT");

  const NavLinks = [
    { nom: "TOUT" },
    { nom: "VITRINE" },
    { nom: "CATALOGUE" },
    { nom: "APPLICATION WEB" },
    { nom: "APP MOBILE" },
    { nom: "GALERIE" },
  ];

  // 2. AJOUTEZ VOS 5 IMAGES DANS LE TABLEAU `images` DE CHAQUE SERVICE
  const services = [
    {
      title: "PORTFOLIO Heritina",
      description: "Site Vitrine ",
      images: [im1, im2, im3, im4, im6], // Mettez vos 5 variables d'images ici
      categorie: "VITRINE",
      lien: "https://rheritina.netlify.app",
      nouveau: true,
    },
    {
      title: "APICULTURE",
      description: "Site Vitrine ",
      images: [ap1, ap2, ap3, ap4, ap5], // Mettez vos 5 variables d'images ici
      categorie: "VITRINE",
      lien: "https://rthapiculture.netlify.app",
      nouveau: true,
    },
    {
      title: "Espace AURORA",
      description: "Site Vitrine d'un espace ",
      images: [esp1, esp2, esp3, esp4, esp5], // Mettez vos 5 variables d'images ici
      categorie: "VITRINE",
      lien: "https://rthcombo.netlify.app",
      nouveau: true,
    },
    {
      title: "Eleveur Kombo",
      description: "Site Vitrine d'un éléveur de Kombo",
      images: [comb1, comb2, comb1, comb2, comb1], // Mettez vos 5 variables d'images ici
      categorie: "APPLICATION WEB",
      lien: "https://rthcombo.netlify.app",
      nouveau: false,
    },
    {
      title: "Application ecole",
      description: "Application Web de gestion pour une établissement scolaire.(id:admin, mdp:admin123)",
      images: [login, dashboard, login, dashboard, login], // Mettez vos 5 variables d'images ici
      categorie: "APPLICATION WEB",
      lien: "https://edurth.netlify.app",
      nouveau: false,
    },
    {
      title: "Immobilier",
      description: "Site presentation et catalogue d'une site immobilier.",
      images: [immo, hoverimmo, immo, hoverimmo, immo], // Mettez vos 5 variables d'images ici
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
        {/* BARRE DE FILTRES STICKY */}
        <div className="sticky top-[70px] md:top-[80px] z-40 w-full flex flex-col items-center mb-12 py-4 bg-white/90 backdrop-blur-md">
          {/* Navigation Desktop */}
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

          {/* Navigation Mobile */}
          <div className="lg:hidden w-full max-w-xs relative">
            <button
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
              className="w-full px-6 py-4 rounded-2xl bg-white shadow-md border border-gray-100 flex items-center justify-between"
            >
              <span className="font-bold text-slate-800">{activeTab}</span>
              <img 
                src={portfolioIcon} 
                alt="icon" 
                className={`w-5 h-5 opacity-60 transition-transform ${openMobileMenu ? 'rotate-180' : ''}`} 
              />
            </button>

            {openMobileMenu && (
              <div className="mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50 absolute w-full left-0 animate-in fade-in slide-in-from-top-2">
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

        {/* GRILLE DE PRODUITS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {filteredServices.map((service, index) => (
            <ProductCard key={index} service={service} />
          ))}
        </div>

        {/* Message si aucun résultat */}
        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 font-medium">Aucun service disponible dans cette catégorie.</p>
          </div>
        )}
      </main>
    </div>
  );
}