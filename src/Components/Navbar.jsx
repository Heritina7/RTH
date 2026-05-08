import { MdCall, MdAdd, MdClose, MdAssignment, MdSchool, MdShoppingCart } from "react-icons/md"; 
import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaInstagram, FaWhatsapp } from "react-icons/fa";

const NavLinks = [
  { nom: 'ACCUEIL', lien: '/' },
  { nom: 'OFFRE', lien: '/shop' },
  { nom: 'SOLUTIONS', lien: '/shop#unit_02' },
  { nom: 'PORTFOLIO', lien: '/portfolio' },
  { nom: 'CONTACT', lien: '/contact' },
];

const PremiumLinks = [
  { nom: 'DEVIS', lien: '/Devis', icon: MdAssignment },
  { nom: 'FORMATION', lien: '/Shop', icon: MdSchool },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openico, setOpenico] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
        <div className="container mx-auto px-4 flex justify-center">
          <div className={`flex items-center justify-between w-full max-w-7xl px-6 py-2 bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg rounded-[2rem]`}>
            
            {/* GAUCHE : Logo */}
            <div className="flex-1">
              <Link to="/" className="flex items-center space-x-2 w-fit">
                <div className="w-10 h-10 bg-[#2DD298] rounded-xl flex items-center justify-center text-white font-bold text-xl">S</div>
                <h1 className="text-xl font-black text-gray-800 hidden sm:block italic">SERVICES</h1>
              </Link>
            </div>

            {/* CENTRE : Liens principaux */}
            <div className="hidden lg:flex items-center space-x-1">
              {NavLinks.map(({ nom, lien }) => (
                <Link 
                  key={nom} 
                  to={lien} 
                  className={`px-4 py-2 text-[11px] font-bold tracking-widest rounded-full transition-all ${location.pathname === lien ? 'text-[#2DD298] bg-[#2DD298]/10' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  {nom}
                </Link>
              ))}
            </div>

            {/* DROITE : Devis et Formation */}
            <div className="flex-1 hidden lg:flex items-center justify-end space-x-2">
              {PremiumLinks.map((link) => (
                <Link
                  key={link.nom}
                  to={link.lien}
                  className="flex items-center gap-2 px-4 py-2 text-[11px] font-bold text-gray-700 hover:text-[#2DD298] transition-colors border-l border-gray-100 first:border-0"
                >
                  <link.icon size={18} className="text-[#2DD298]" />
                  <span className="tracking-widest">{link.nom}</span>
                </Link>
              ))}
            </div>

            {/* Burger Mobile */}
            <button className="lg:hidden p-2 text-gray-800" onClick={() => setOpen(!open)}>
              {open ? <MdClose size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white/95 z-[90] lg:hidden flex flex-col items-center justify-center space-y-6 transition-all ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {NavLinks.map(({ nom, lien }) => (
          <Link key={nom} to={lien} onClick={() => setOpen(false)} className="text-2xl font-black text-gray-800 tracking-widest">{nom}</Link>
        ))}
        <div className="h-[1px] w-20 bg-gray-200 my-4" />
        {PremiumLinks.map(({ nom, lien }) => (
          <Link key={nom} to={lien} onClick={() => setOpen(false)} className="text-xl font-bold text-[#2DD298] tracking-widest">{nom}</Link>
        ))}
      </div>

      {/* --- ZONE BOUTONS FLOTTANTS --- */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-center gap-4">
        
        {/* 1. Menu Social (S'ouvre vers le haut) */}
        <div className={`flex flex-col gap-3 transition-all duration-500 ${openico ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-0 pointer-events-none'}`}>
          <a href="https://wa.me/0347791758" target="_blank" rel="noreferrer" className="bg-green-500 w-12 h-12 rounded-2xl flex items-center justify-center text-white text-xl shadow-xl hover:scale-110 transition-transform">
            <FaWhatsapp />
          </a>
          <a href="tel:+261347791758" className="bg-yellow-500 w-12 h-12 rounded-2xl flex items-center justify-center text-white text-xl shadow-xl hover:scale-110 transition-transform">
            <MdCall />
          </a>
        </div>

        {/* 2. Bouton Trigger (+) - Reste Vert */}
        <button 
          onClick={() => setOpenico(!openico)} 
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-[#2DD298] shadow-2xl transition-all active:scale-90"
        >
          <MdAdd size={35} className={`transition-transform duration-300 ${openico ? 'rotate-45' : 'rotate-0'}`} />
        </button>

        {/* 3. Bouton COMMANDER - Même taille (w-16 h-16) et placé en dessous */}
        <Link 
          to="/Devis" 
          className="group relative w-16 h-16 flex flex-col items-center justify-center bg-gray-900 text-white rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
        >
          {/* Badge de notification discret */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD298] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#2DD298]"></span>
          </span>
          
          <MdShoppingCart size={24} className="group-hover:rotate-12 transition-transform" />
          <span className="text-[8px] font-black mt-1 tracking-tighter">ORDER</span>
        </Link>
      </div>
    </>
  );
}
