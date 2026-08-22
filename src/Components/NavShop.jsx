import { MdCall, MdAdd, MdShoppingCart } from "react-icons/md";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"; // Importation de Link pour la navigation réelle
import { FaBars, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { LucideSettings } from "lucide-react";

const NavLinks = [
  { nom: 'ACCUEIL', href: '/', isPage: true }, // Nouveau : pointe vers la racine
  { nom: 'DEVELOPPEMENT', index: 0 },
  { nom: 'RESEAUTIQUE', index: 1 },
  { nom: 'OFFRE', index: 2 },
];

const RightLinks = [
  { nom: 'SERVICES', href: '/Services', icon: LucideSettings },
  { nom: 'SHOP', href: '/Portfolio', icon: MdShoppingCart },
];

export default function NavShop({ activeSection }) {
  const [open, setOpen] = useState(false);
  const [openico, setOpenico] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, link) => {
    // Si c'est une navigation de page (Accueil), on laisse le composant Link gérer ou on ferme juste le menu
    if (link.isPage) {
      setOpen(false);
      return;
    }

    // Sinon, on gère le scroll interne
    e.preventDefault();
    if (window.scrollToSection) {
      window.scrollToSection(link.index);
    }
    setOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-2' : 'py-6'}`}>
        <div className="container mx-auto px-4">
          <div className={`relative flex items-center justify-between w-full max-w-7xl mx-auto px-6 py-2 bg-white/80 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl transition-all duration-300 ${scrolled ? 'rounded-full' : ''}`}>
            
            <div className="flex-1 flex items-center">
              {/* Le logo pointe maintenant vers Home */}
              <Link to="/" className="text-xl font-black tracking-tighter text-[#2DD298]">
                MODERN<span className="text-gray-800">SHOP</span>
              </Link>
            </div>

            {/* Menu Desktop */}
            <div className="hidden lg:flex items-center justify-center space-x-1">
              {NavLinks.map((link) => (
                link.isPage ? (
                  <Link
                    key={link.nom}
                    to={link.href}
                    className="px-4 py-2 text-[12px] font-bold tracking-widest text-gray-600 hover:text-[#2DD298] transition-all"
                  >
                    {link.nom}
                  </Link>
                ) : (
                  <button
                    key={link.nom}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`px-4 py-2 text-[12px] font-bold tracking-widest transition-all duration-300 rounded-xl ${
                      activeSection === link.nom ? 'text-[#2DD298] bg-[#2DD298]/10' : 'text-gray-600 hover:text-[#2DD298]'
                    }`}
                  >
                    {link.nom}
                  </button>
                )
              ))}
            </div>

            <div className="flex-1 hidden lg:flex items-center justify-end space-x-4">
              {RightLinks.map((link) => (
                <Link
                  key={link.nom}
                  to={link.href}
                  className="flex items-center gap-2 px-3 py-2 text-[12px] font-bold text-gray-700 hover:text-[#2DD298] transition-colors border-l border-gray-100 first:border-0"
                >
                  <link.icon size={18} />
                  <span className="tracking-widest">{link.nom}</span>
                </Link>
              ))}
            </div>

            <button className="lg:hidden p-2 text-gray-700" onClick={() => setOpen(!open)}>
              {open ? <HiX size={28} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`absolute top-full left-4 right-4 mt-2 p-6 bg-white rounded-3xl shadow-2xl lg:hidden transition-all duration-300 origin-top ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col space-y-4">
            <p className="text-[10px] font-bold text-gray-400 tracking-widest">NAVIGATION</p>
            {NavLinks.map((link) => (
              link.isPage ? (
                <Link 
                  key={link.nom} 
                  to={link.href} 
                  onClick={() => setOpen(false)}
                  className="text-left text-lg font-semibold text-gray-800 border-b border-gray-50 pb-2"
                >
                  {link.nom}
                </Link>
              ) : (
                <button 
                  key={link.nom} 
                  onClick={(e) => handleNavClick(e, link)} 
                  className="text-left text-lg font-semibold text-gray-800 border-b border-gray-50 pb-2"
                >
                  {link.nom}
                </button>
              )
            ))}
          </div>
        </div>
      </nav>

      {/* --- Boutons flottants inchangés --- */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-center gap-4">
        {/* ... code des icônes whatsapp/insta/call ... */}
        <div className={`flex flex-col gap-3 transition-all duration-500 ${openico ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
          <a href="https://wa.me/..." target="_blank" rel="noreferrer" className="bg-[#25D366] w-12 h-12 flex items-center justify-center rounded-2xl text-white shadow-xl hover:scale-110 transition-transform"><FaWhatsapp size={20}/></a>
          <a href="#" className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 w-12 h-12 flex items-center justify-center rounded-2xl text-white shadow-xl hover:scale-110 transition-transform"><FaInstagram size={20}/></a>
          <a href="tel:..." className="bg-[#FFB800] w-12 h-12 flex items-center justify-center rounded-2xl text-white shadow-xl hover:scale-110 transition-transform"><MdCall size={20}/></a>
        </div>

        <button onClick={() => setOpenico(!openico)} className="w-16 h-16 flex items-center justify-center rounded-2xl shadow-2xl bg-[#2DD298] text-white transition-all duration-300 active:scale-90">
          {openico ? <HiX className="text-3xl" /> : <MdAdd className="text-4xl" />}
        </button>

        <Link to="/Devis" className="group relative w-16 h-16 flex flex-col items-center justify-center bg-[#2DD298] text-white rounded-2xl shadow-2xl hover:bg-gray-800 transition-all duration-300 active:scale-90">
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <MdShoppingCart size={24} className="group-hover:scale-110 transition-transform" />
          <span className="text-[9px] font-black mt-1 uppercase">Order</span>
        </Link>
      </div>
    </>
  );
}
