import imgMembre1 from '../Assets/images/mission2.png';
import imgMembre2 from '../Assets/images/mission2.png';
import imgMembre3 from '../Assets/images/mission2.png';
// Importez vos images ici (ou utilisez vos variables d'images existantes)
import imgMission1 from '../Assets/propos/mission/mission1.webp';
import imgMission2 from '../Assets/propos/mission/mission2.webp';
import imgMission3 from '../Assets/propos/mission/mission3.webp';
import imgMission4 from '../Assets/propos/mission/mission4.webp';
import imgMission5 from '../Assets/propos/mission/mission5.webp';
import imgMission6 from '../Assets/propos/mission/mission6.webp';



// 1. Importez React (si ce n'est pas déjà fait)


// 2. Importez vos images (remplacez les chemins par l'emplacement réel de vos fichiers dans votre projet)
import iconeRelation from '../Assets/propos/relation.png';
import iconeTravail from '../Assets/propos/travail.png';
import iconeHonneur from '../Assets/propos/honneur.png';
import { useEffect, useState, useRef } from 'react';
import monImage from '../Assets/propos/bg.webp';
import engagement from '../Assets/propos/engagement.webp';
import Imagevaleur from '../Assets/propos/valeur.webp';
import monImage2 from '../Assets/propos/bg1.webp';
import histoire from '../Assets/propos/histoire.webp';

// --- Section 1 : Hero avec flèche et transition lente ---
export function HeroSection() {
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return; // Évite les erreurs si l'élément n'existe pas encore

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const ease = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  };
  // Optionnel : Une image par défaut si la souris ne survole rien

const SectionMission = () => {
  // État pour stocker l'image active (par défaut l'image principale)
  const [activeImage, setActiveImage] = useState(iconeHonneur);

};


  return (
    <section className="relative w-full h-screen bg-cover bg-center flex items-center justify-center" 
             style={{ backgroundImage: `url(${monImage})` }}>
      
      {/* Superposition sombre (Overlay) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenu textuel de la 1ère section */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm md:text-base">
          Votre allié du quotidien
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mt-2 mb-6 leading-tight">
          L'innovation à portée de main
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Développement sur mesure, solutions web & mobile et services technologiques adaptés à vos ambitions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#contact" 
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Discutons de votre projet</span>
            <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
          
          <a 
            href="#solutions" 
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg"
          >
            Découvrir nos offres
          </a>
        </div>
      </div>

      {/* Bouton flèche haut et flèche bas */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
        <div className="group flex flex-col items-center text-gray-300 transition-colors">
          
          <a 
            href="https://shoprth.netlify.app"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white hover:bg-cyan-500 hover:border-cyan-500 hover:text-white transition-all duration-300 shadow-lg mb-1.5 cursor-pointer"
            title="Aller vers la boutique RTH"
          >
            <svg className="w-4 h-4 transition-transform hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"></path>
            </svg>
          </a>

          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 my-1 transition-all"></div>
          
          <button 
            onClick={(e) => scrollToSection(e, 'solutions')}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white hover:bg-cyan-500 hover:border-cyan-500 hover:text-white transition-all duration-300 animate-bounce shadow-lg mt-1 cursor-pointer"
            title="Aller à la section Solutions"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>

        </div>
      </div>

    </section>
  );
}

// --- Sous-composant WhyRthSection ---
function WhyRthSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="bg-gray-800/30 border border-gray-800 rounded-2xl p-8 mb-16">
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold text-white">Pourquoi travailler avec RTH ?</h3>
        <p className="text-gray-400 text-sm mt-1">Les avantages concrets d'un partenariat direct et transparent.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          className={`text-center md:text-left transform transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-xl flex items-center justify-center mx-auto md:mx-0 mb-4 font-bold text-lg shadow-lg shadow-cyan-500/10">
            01
          </div>
          <h5 className="font-semibold text-white mb-2">Un interlocuteur unique</h5>
          <p className="text-sm text-gray-300 leading-relaxed">De la conception graphique (UI/UX) jusqu’au déploiement et à la maintenance, tout est géré de A à Z.</p>
        </div>

        <div 
          className={`text-center md:text-left transform transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-xl flex items-center justify-center mx-auto md:mx-0 mb-4 font-bold text-lg shadow-lg shadow-cyan-500/10">
            02
          </div>
          <h5 className="font-semibold text-white mb-2">Réactivité & flexibilité</h5>
          <p className="text-sm text-gray-300 leading-relaxed">Une communication fluide et directe, sans la lourdeur et les intermédiaires des agences traditionnelles.</p>
        </div>

        <div 
          className={`text-center md:text-left transform transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-xl flex items-center justify-center mx-auto md:mx-0 mb-4 font-bold text-lg shadow-lg shadow-cyan-500/10">
            03
          </div>
          <h5 className="font-semibold text-white mb-2">Adaptabilité</h5>
          <p className="text-sm text-gray-300 leading-relaxed">Des solutions sur mesure qui s’adaptent réellement aux besoins et au budget des petites entreprises et startups.</p>
        </div>
      </div>
      <br />
      {/* --- BANDE D'IMAGE (Immersion & Performance) --- */}
      <div 
        className="relative w-full h-[350px] bg-cover bg-center bg-fixed flex items-center justify-center border-y border-gray-800"
        style={{ backgroundImage: `url(${engagement})` }}
      >
        <div className="absolute inset-0 bg-gray-950/75 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">
             Où allons-nous ?
          </span>
          <h3 className="text-2xl md:text-4xl font-bold text-white mt-2 mb-3">
           Notre Engagement
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify">
            Chez RTH, nous sommes convaincus que le succès de nos clients est aussi le nôtre. C'est pourquoi nous mettons notre savoir-faire, notre créativité et notre sens du service au cœur de chaque projet afin de construire des solutions durables, innovantes et à forte valeur ajoutée.
          </p>
        </div>
      </div>
      <div className="relative w-full bg-[#101828] py-28 border-b border-gray-800">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">
            Que faisons-nous ? → Mission
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4 leading-tight relative inline-block">
            <span className="text-cyan-400 text-4xl md:text-6xl absolute -top-4 -left-6 md:-left-8 select-none opacity-80">“</span>
            Plus qu’une prestation, un engagement fondé sur la relation, le travail et l'honneur.
            <span className="text-cyan-400 text-4xl md:text-6xl absolute -bottom-6 -right-4 md:-right-6 select-none opacity-80">”</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

// --- Nouvelle Section : Texte à gauche, Image à droite ---
export function SolutionsHighlightSection() {
  return (
    <section id="solutions" className="bg-gray-900 py-20 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Texte à gauche */}
          <div className="space-y-6">
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20 inline-block">
             Qui sommes-nous ? 
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Notre Histoire
            </h2>
           <p className="text-gray-300 text-base leading-relaxed text-justify">
  RTH — pour Relation, Travail, Honneur — est né d'une ambition commune : réunir des professionnels passionnés au sein d'un pôle multiservice moderne, agile et capable de répondre aux défis du monde numérique et opérationnel d'aujourd'hui.
  Plus qu'une simple entreprise, RTH est avant tout une équipe soudée, dynamique et complémentaire qui met son expertise collective au service de la réussite de ses clients. Depuis notre création, nous accompagnons les entreprises, les entrepreneurs et les particuliers en proposant des solutions innovantes, fiables et sur mesure. De la création digitale à l'accompagnement stratégique, notre objectif est de transformer chaque défi en une véritable opportunité de croissance durable grâce à la technologie, à la créativité et à une relation de proximité.
</p>
          </div>

          {/* Image à droite */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-2xl h-[380px]">
              <img 
                src={histoire} 
                alt="Illustration des solutions RTH" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent flex items-end p-6">
                <p className="text-sm font-medium text-cyan-300">
                  ✦ Excellence technique et design centré utilisateur
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

const missionImages = [imgMission1, imgMission2, imgMission3, imgMission4, imgMission5, imgMission6];
// --- Section 2 : À propos & Valeurs ---
export function AboutSection() {
// État pour l'image actuellement visible
  const [activeImage, setActiveImage] = useState(missionImages[0]);
  // État pour l'image "suivante" pendant la transition
  const [nextImage, setNextImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  // État pour gérer la classe de transition CSS
  const [isFading, setIsFading] = useState(false);

  // Logique de changement d'image avec transition
  const changeImage = (newImg) => {
    if (newImg === activeImage) return;

    setNextImage(newImg); // Prépare la nouvelle image en dessous
    setIsFading(true);    // Déclenche la transition (opacité 1 sur l'image du dessus)

    // Après la durée de la transition CSS (ici 700ms), on finalise le changement
    setTimeout(() => {
      setActiveImage(newImg); // Devient l'image principale
      setNextImage(null);     // Retire l'image temporaire
      setIsFading(false);     // Réinitialise l'état de transition
    }, 700); // Correspond à duration-700
  };

  // Effet pour le changement automatique (identique au précédent, appelant la nouvelle fonction)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * missionImages.length);
      } while (missionImages[randomIndex] === activeImage); // Évite de retomber sur la même

      changeImage(missionImages[randomIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered, activeImage]);
  return (
    <section id="about" className="bg-gray-900 text-white scroll-mt-0">
      
      {/* --- BANDE D'IMAGE (Immersion & Performance) : Vision RTH --- */}
      <div 
        className="relative w-full h-[350px] bg-cover bg-center bg-fixed flex items-center justify-center border-y border-gray-800"
        style={{ backgroundImage: `url(${monImage2})` }}
      >
        <div className="absolute inset-0 bg-gray-950/75 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">
             Où allons-nous ?
          </span>
          <h3 className="text-2xl md:text-4xl font-bold text-white mt-2 mb-3">
            Vision RTH
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify">
            Être une référence en matière de services numériques et de solutions professionnelles à Madagascar et à l'international, en bâtissant des relations durables fondées sur la confiance, l'innovation et l'excellence.
            Nous aspirons à devenir un partenaire incontournable pour tous ceux qui souhaitent accélérer leur transformation numérique et développer leurs activités avec sérénité.
          </p>
        </div>
      </div>

    <div className="relative w-full bg-[#101828] py-28 border-b border-gray-800 overflow-hidden">
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">
          Que faisons-nous ?
        </span>
        <h3 className="text-2xl md:text-4xl font-bold text-white mt-2 mb-3">
          MISSION
        </h3>
        <p className="text-gray-300 text-sm md:text-base">
          Pour transformer chaque défi en une opportunité de croissance, nous nous engageons au quotidien à :
        </p>
      </div>
      <div className="my-6"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* PARTIE 1 : Conteneur de l'Image avec Transition */}
          <div className="md:col-span-6 min-h-[350px] md:min-h-[450px] rounded-2xl border border-gray-800/60 shadow-xl relative overflow-hidden group bg-gray-900">
            
            {/* Image inférieure (devient active après le fondu) */}
            <img 
              src={activeImage} 
              alt="Mission RTH fond" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Image supérieure (celle qui fait le fondu) */}
            <img 
              src={nextImage} 
              alt="Mission RTH transition" 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isFading ? 'opacity-100' : 'opacity-0'}`}
            />
            
            {/* Effet de survol global sur le conteneur image */}
            <div className="absolute inset-0 bg-gray-950/30 group-hover:bg-gray-950/10 transition-colors duration-500 z-10"></div>
          </div>

          {/* PARTIE 2 : La Liste des puces interactive */}
          <div 
            className="md:col-span-6 flex flex-col justify-center space-y-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            
            {/* Points de la liste (on appelle changeImage au lieu de setActiveImage directement) */}
            
            <div 
              onMouseEnter={() => changeImage(imgMission1)}
              className="flex items-start gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-gray-800/40 cursor-pointer group"
            >
               <span className="flex shrink-0 w-5 h-5 mt-1 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-400 text-xs font-bold group-hover:bg-cyan-500 group-hover:text-gray-950 transition-colors">✓</span>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    <strong className="text-white font-semibold">Simplifier et optimiser</strong> le quotidien de nos clients grâce à des services d'assistance virtuelle, de community management et de sous-traitance adaptés.
                </p>
            </div>

            {/* Point 2 */}
            <div 
              onMouseEnter={() => changeImage(imgMission2)}
              className="flex items-start gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-gray-800/40 cursor-pointer group"
            >
              <span className="flex shrink-0 w-5 h-5 mt-1 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-400 text-xs font-bold group-hover:bg-cyan-500 group-hover:text-gray-950 transition-colors">✓</span>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                <strong className="text-white font-semibold">Innover et concevoir</strong> des sites web, des applications sur mesure et des solutions numériques performantes répondant aux exigences actuelles.
              </p>
            </div>

            {/* Point 3 */}
            <div 
              onMouseEnter={() => changeImage(imgMission3)}
              className="flex items-start gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-gray-800/40 cursor-pointer group"
            >
              <span className="flex shrink-0 w-5 h-5 mt-1 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-400 text-xs font-bold group-hover:bg-cyan-500 group-hover:text-gray-950 transition-colors">✓</span>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                <strong className="text-white font-semibold">Valoriser l'image</strong> de nos partenaires en créant des identités visuelles percutantes et des supports graphiques professionnels.
              </p>
            </div>

             {/* Point 4 */}
             <div 
              onMouseEnter={() => changeImage(imgMission4)}
              className="flex items-start gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-gray-800/40 cursor-pointer group"
            >
              <span className="flex shrink-0 w-5 h-5 mt-1 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-400 text-xs font-bold group-hover:bg-cyan-500 group-hover:text-gray-950 transition-colors">✓</span>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                <strong className="text-white font-semibold">Transmettre notre savoir-faire</strong> en formant les professionnels, les étudiants et les passionnés aux outils bureautiques et au développement informatique.
              </p>
            </div>

             {/* Point 5 */}
             <div 
              onMouseEnter={() => changeImage(imgMission5)}
              className="flex items-start gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-gray-800/40 cursor-pointer group"
            >
              <span className="flex shrink-0 w-5 h-5 mt-1 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-400 text-xs font-bold group-hover:bg-cyan-500 group-hover:text-gray-950 transition-colors">✓</span>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                <strong className="text-white font-semibold">Équiper et fournir</strong> du matériel informatique fiable et parfaitement adapté aux besoins techniques de chaque projet.
              </p>
            </div>

             {/* Point 6 */}
             <div 
              onMouseEnter={() => changeImage(imgMission6)}
              className="flex items-start gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-gray-800/40 cursor-pointer group"
            >
              <span className="flex shrink-0 w-5 h-5 mt-1 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-400 text-xs font-bold group-hover:bg-cyan-500 group-hover:text-gray-950 transition-colors">✓</span>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                <strong className="text-white font-semibold">Offrir un accompagnement stratégique</strong> de proximité favorisant durablement la productivité, l'efficacité et la réussite de nos clients.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    

     {/* --- 3. SECTION HORIZONTALE : LES 3 PILIERS --- */}
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
  <div className="text-center mb-12">
    <div className="inline-block px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-3 backdrop-blur-sm">
      Code de conduite
    </div>
    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
      Les Piliers de RTH
    </h3>
    <br />
    <p className="text-gray-300 max-w-none mx-auto text-sm md:text-base">
      RTH : ce triptyque n’est pas qu’un acronyme, c’est notre code de conduite au quotidien avec chaque client.
          </p>
  </div>

  {/* Grille horizontale des 3 piliers */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-gradient-to-br from-gray-900/90 via-gray-900/50 to-gray-950 border border-gray-800/80 p-6 rounded-2xl shadow-xl hover:border-cyan-500/40 hover:shadow-cyan-500/5 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-xl mb-4 group-hover:bg-cyan-500/20 group-hover:scale-105 transition-all">🤝</div>
      <h4 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-300 transition-colors">La Relation</h4>
      <p className="text-sm text-gray-400 leading-relaxed">Une écoute attentive et un accompagnement sur mesure pour bâtir un partenariat de confiance.</p>
    </div>

    <div className="bg-gradient-to-br from-gray-900/90 via-gray-900/50 to-gray-950 border border-gray-800/80 p-6 rounded-2xl shadow-xl hover:border-cyan-500/40 hover:shadow-cyan-500/5 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-xl mb-4 group-hover:bg-cyan-500/20 group-hover:scale-105 transition-all">🛠️</div>
      <h4 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-300 transition-colors">Le Travail</h4>
      <p className="text-sm text-gray-400 leading-relaxed">Rigueur, respect des délais, code propre et choix technologiques performants.</p>
    </div>

    <div className="bg-gradient-to-br from-gray-900/90 via-gray-900/50 to-gray-950 border border-gray-800/80 p-6 rounded-2xl shadow-xl hover:border-cyan-500/40 hover:shadow-cyan-500/5 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-xl mb-4 group-hover:bg-cyan-500/20 group-hover:scale-105 transition-all">🛡️</div>
      <h4 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-300 transition-colors">L’Honneur</h4>
      <p className="text-sm text-gray-400 leading-relaxed">Transparence totale des prix, intégrité dans les conseils et respect des engagements pris.</p>
    </div>
  </div>
</div>

      {/* --- SECTION VALEURS (Les 3 Piliers Détaillés) --- */}
      <div className="relative w-full mb-20 overflow-hidden shadow-2xl border-y border-cyan-500/20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${Imagevaleur})` }}
        ></div>
        <div className="absolute inset-0 bg-gray-950/85 backdrop-blur-md"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <span className="text-cyan-300 font-semibold tracking-wider uppercase text-sm bg-cyan-500/20 px-4 py-1.5 rounded-full border border-cyan-400/30 shadow-sm">
              Comment travaillons-nous ?
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-white mt-4">
              VALEURS
            </h3>
            <p className="text-cyan-100/80 text-sm md:text-base mt-2 max-w-none mx-auto"> 
              Les valeurs de RTH sont incarnées par les trois piliers fondamentaux qui composent notre identité et guident chacune de nos actions :
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Pilier 1 : Relation */}
<div className="relative flex flex-col md:flex-row items-stretch group bg-gray-900/50 rounded-2xl border border-gray-800/60 backdrop-blur-sm hover:border-cyan-500/40 transition-all shadow-lg overflow-hidden">
  {/* Conteneur Image (maintenant relatif pour le positionnement du texte) */}
  <div className="w-full md:w-2/5 min-h-[250px] md:min-h-full overflow-hidden relative">
    <img
      src={iconeRelation}
      alt="Relation"
      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
    />
    {/* Superposition du dégradé et du texte */}
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent p-6 flex flex-col justify-end">
      <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider bg-gray-900/60 px-2 py-1 rounded inline-block w-fit">
        🤝 Relation
      </span>
      <h4 className="text-lg md:text-xl font-bold text-white mt-2 mb-1">
        L'humain au cœur de notre engagement
      </h4>
    </div>
  </div>

  {/* Conteneur Description (partie droite) */}
  <div className="w-full md:w-3/5 p-6 flex flex-col justify-center">
    <div className="text-sm md:text-base text-gray-300 leading-relaxed space-y-2">
      <p>Une collaboration réussie repose avant tout sur la confiance et la proximité.</p>
      <ul className="list-disc list-inside space-y-1 text-gray-300">
        <li>Écoute active et proximité avec nos clients.</li>
        <li>Communication transparente et accompagnement personnalisé.</li>
        <li>Esprit d'équipe et collaboration unie pour atteindre des objectifs communs.</li>
        <li>Construction de relations durables et de confiance avec nos partenaires.</li>
      </ul>
    </div>
  </div>
</div>

{/* Pilier 2 : Travail */}
<div className="relative flex flex-col md:flex-row items-stretch group bg-gray-900/50 rounded-2xl border border-gray-800/60 backdrop-blur-sm hover:border-cyan-500/40 transition-all shadow-lg overflow-hidden">
  <div className="w-full md:w-2/5 min-h-[250px] md:min-h-full overflow-hidden relative">
    <img
      src={iconeTravail}
      alt="Travail"
      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent p-6 flex flex-col justify-end">
      <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider bg-gray-900/60 px-2 py-1 rounded inline-block w-fit">
        ⚙️ Travail
      </span>
      <h4 className="text-lg md:text-xl font-bold text-white mt-2 mb-1">
        L'excellence comme exigence
      </h4>
    </div>
  </div>
  <div className="w-full md:w-3/5 p-6 flex flex-col justify-center">
    <div className="text-sm md:text-base text-gray-300 leading-relaxed space-y-2">
      <p>Chaque mission est réalisée avec rigueur, engagement et professionnalisme.</p>
      <ul className="list-disc list-inside space-y-1 text-gray-300">
        <li>Qualité irréprochable de nos prestations et de nos services.</li>
        <li>Respect strict des délais et des engagements pris.</li>
        <li>Recherche permanente d'innovation pour répondre aux évolutions du marché.</li>
        <li>Polyvalence de notre équipe permettant d'apporter des solutions complètes et adaptées.</li>
      </ul>
    </div>
  </div>
</div>

{/* Pilier 3 : Honneur */}
<div className="relative flex flex-col md:flex-row items-stretch group bg-gray-900/50 rounded-2xl border border-gray-800/60 backdrop-blur-sm hover:border-cyan-500/40 transition-all shadow-lg overflow-hidden">
  <div className="w-full md:w-2/5 min-h-[250px] md:min-h-full overflow-hidden relative">
    <img
      src={iconeHonneur}
      alt="Honneur"
      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent p-6 flex flex-col justify-end">
      <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider bg-gray-900/60 px-2 py-1 rounded inline-block w-fit">
        🛡️ Honneur
      </span>
      <h4 className="text-lg md:text-xl font-bold text-white mt-2 mb-1">
        L'intégrité avant tout
      </h4>
    </div>
  </div>
  <div className="w-full md:w-3/5 p-6 flex flex-col justify-center">
    <div className="text-sm md:text-base text-gray-300 leading-relaxed space-y-2">
      <p>Notre réputation et notre force reposent sur des principes éthiques intransigeants.</p>
      <ul className="list-disc list-inside space-y-1 text-gray-300">
        <li>Transparence totale dans toutes nos relations professionnelles.</li>
        <li>Honnêteté et respect rigoureux de nos engagements.</li>
        <li>Confidentialité absolue des informations et des projets confiés.</li>
        <li>Responsabilité et implication constante envers la pleine satisfaction de nos clients.</li>
      </ul>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <WhyRthSection />
      </div>
    </section>
  );
}

// --- Footer complet ---
export function Footer() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 4000);
  };

  return (
    <footer id="contact" className="w-full bg-gray-950 text-gray-300 pt-20 pb-10 border-t border-gray-800/80 scroll-mt-0">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-900">
          
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                Contactez-nous
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-4 mb-3">
                Parlons de votre prochain projet
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Une question, une idée de refonte ou un besoin de développement sur mesure ? 
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Envoyez-nous un message, nous vous répondrons rapidement.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800/80 flex items-center justify-center text-cyan-400 shrink-0">
                  📍
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Localisation</p>
                  <p className="text-white font-medium">Antananarivo, Madagascar</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-sm">
                <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800/80 flex items-center justify-center text-cyan-400 shrink-0">
                  ✉️
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Email direct</p>
                  <p className="text-white font-medium">rthheritina@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-sm">
                <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800/80 flex items-center justify-center text-cyan-400 shrink-0">
                  ⚡
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Disponibilité</p>
                  <p className="text-white font-medium">Du Lundi au Vendredi</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h4 className="text-lg font-bold text-white mb-4">Envoyez un message</h4>
            
            {submitted ? (
              <div className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 p-4 rounded-xl text-center text-sm font-medium animate-pulse">
                ✨ Merci ! Votre message a bien été pris en compte. Nous vous répondrons dans les plus brefs délais.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">Votre Nom</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Jean Dupont"
                      className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">Votre Email</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="jean@example.com"
                      className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Sujet du projet</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Développement d'application web / Refonte UI-UX"
                    className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Message</label>
                  <textarea 
                    rows="4" 
                    required 
                    placeholder="Décrivez brièvement vos besoins..."
                    className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 cursor-pointer"
                >
                  Envoyer le message
                </button>
              </form>
            )}
          </div>

        </div>

        <div className="pt-8 flex items-center justify-center text-xs text-gray-500">
          <div>
            <span className="text-white font-semibold">RTH (Relation Travail Honneur)</span> — © {new Date().getFullYear()} Tous droits réservés.
          </div>
        </div>

      </div>
    </footer>
  );
}

// --- Composant principal App ---
export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      if (window.scrollY > heroHeight * 0.8) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="w-full min-h-screen bg-gray-950 text-white relative">
      <HeroSection />
      <SolutionsHighlightSection />
      <AboutSection />
      <Footer />

      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 group flex items-center space-x-2 bg-gray-900/90 hover:bg-cyan-500 text-gray-300 hover:text-white px-4 py-3 rounded-2xl border border-gray-800 hover:border-cyan-500 backdrop-blur-md transition-all duration-300 shadow-2xl cursor-pointer"
          title="Remonter en haut"
        >
          <span className="text-xs font-semibold">Haut</span>
          <svg className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"></path>
          </svg>
        </button>
      )}
    </main>
  );
}