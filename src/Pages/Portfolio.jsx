import { useState } from "react";
import portfolioIcon from "../Assets/icone/portfolio.png";
import vitrineImage from "../Assets/bg.png";
import hoverImage from "../Assets/bghover.png";
import Navbarform from "../Components/Navbarform";

export default function Produit() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("TOUT");

  const NavLinks = [
    { nom: "TOUT" },
    { nom: "VITRINE" },
    { nom: "CATALOGUE" },
    { nom: "APPLICATION" },
    { nom: "APP MOBILE" },
    { nom: "GALERIE" },
  ];

  const services = [
    {
      title: "Site Vitrine",
      description: "L'art de la première impression digitale, épurée et impactante.",
      image: vitrineImage,
      imagehover: hoverImage,
      categorie: "VITRINE",
    },
    {
      title: "Site Catalogue",
      description: "Une gestion fluide pour une expérience d'achat immersive.",
      image: vitrineImage,
      imagehover: hoverImage,
      categorie: "CATALOGUE",
    },
    {
      title: "Application Web",
      description: "Puissance métier et design intuitif unifiés.",
      image: vitrineImage,
      imagehover: hoverImage,
      categorie: "APPLICATION",
    },
    {
      title: "App Mobile",
      description: "L'innovation intuitive au creux de la main.",
      image: vitrineImage,
      imagehover: hoverImage,
      categorie: "APP MOBILE",
    },
    {
      title: "App Mobile",
      description: "L'innovation intuitive au creux de la main.",
      image: vitrineImage,
      imagehover: hoverImage,
      categorie: "APP MOBILE",
    },
    {
      title: "App Mobile",
      description: "L'innovation intuitive au creux de la main.",
      image: vitrineImage,
      imagehover: hoverImage,
      categorie: "APP MOBILE",
    },
    {
      title: "App Mobile",
      description: "L'innovation intuitive au creux de la main.",
      image: vitrineImage,
      imagehover: hoverImage,
      categorie: "APP MOBILE",
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
        {/* On utilise sticky et top-[taille de ta navbar] */}
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
            <div
              key={index}
              className="group relative h-[300px] md:h-[340px] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100"
            >
              {/* Images */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <img
                  src={service.imagehover}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
            </div>
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
