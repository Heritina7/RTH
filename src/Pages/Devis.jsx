import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import pour la navigation
import { 
  FaBuilding, FaUserTie, FaLightbulb, FaBriefcase, 
  FaChartLine, FaShieldAlt, FaArrowRight, FaCheck,
  FaFileAlt, FaDownload, FaChevronLeft // Ajout de FaChevronLeft
} from 'react-icons/fa';

export default function BusinessQuote() {
  const [type, setType] = useState('entreprise');
  const navigate = useNavigate(); // Hook pour le bouton retour

  const cardStyle = (current) => `
    flex-1 p-6 rounded-3xl border-2 transition-all duration-300 cursor-pointer
    ${type === current 
      ? 'border-[#2DD298] bg-[#2DD298]/5 shadow-lg shadow-[#2DD298]/10' 
      : 'border-gray-100 bg-white hover:border-gray-300'}
  `;

  return (
    <div className="min-h-screen bg-[#F4F7F6] pt-24 pb-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* --- BOUTON RETOUR --- */}
        <button 
          onClick={() => navigate(-1)} 
          className="mb-8 flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-bold text-sm group"
        >
          <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center group-hover:bg-[#2DD298] group-hover:text-white transition-all">
            <FaChevronLeft size={12} />
          </div>
          RETOUR
        </button>

        {/* Header Professionnel */}
        <div className="text-center mb-12">
          <span className="bg-[#2DD298]/10 text-[#2DD298] px-4 py-2 rounded-full text-sm font-bold tracking-wide">
            ESPACE PROFESSIONNEL
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-4">
            Lancez votre projet <span className="text-[#2DD298]">Business</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Que vous soyez une startup en croissance ou une entreprise établie, 
            nous structurons votre cahier des charges avec précision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- COLONNE GAUCHE : SÉLECTION DU PROFIL --- */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-200/50">
              <h2 className="text-xl font-bold mb-6 text-gray-800">Votre Profil</h2>
              <div className="flex flex-col gap-4">
                <div onClick={() => setType('entrepreneur')} className={cardStyle('entrepreneur')}>
                  <FaUserTie className={`text-2xl mb-3 ${type === 'entrepreneur' ? 'text-[#2DD298]' : 'text-gray-400'}`} />
                  <p className="font-bold text-gray-900">Entrepreneur</p>
                  <p className="text-xs text-gray-500 mt-1">Indépendant, Freelance, Consultant</p>
                </div>
                <div onClick={() => setType('entreprise')} className={cardStyle('entreprise')}>
                  <FaBuilding className={`text-2xl mb-3 ${type === 'entreprise' ? 'text-[#2DD298]' : 'text-gray-400'}`} />
                  <p className="font-bold text-gray-900">Entreprise / PME</p>
                  <p className="text-xs text-gray-500 mt-1">Société constituée, Équipe, Institution</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-[2.5rem] text-white">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <FaShieldAlt className="text-[#2DD298]" /> Engagement
              </h3>
              <ul className="space-y-3 text-sm opacity-80">
                <li className="flex items-start gap-2"><FaCheck className="text-[#2DD298] mt-1" /> Confidentialité stricte (NDA)</li>
                <li className="flex items-start gap-2"><FaCheck className="text-[#2DD298] mt-1" /> Réponse sous 24h ouvrées</li>
                <li className="flex items-start gap-2"><FaCheck className="text-[#2DD298] mt-1" /> Accompagnement stratégique</li>
              </ul>
            </div>
          </div>

          {/* --- COLONNE DROITE : FORMULAIRE DÉTAILLÉ --- */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-white">
              
              <div className="space-y-8">
                {/* Section A : Identification Business */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#2DD298]/10 rounded-xl flex items-center justify-center text-[#2DD298]">
                      <FaBriefcase />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Informations Légales</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Raison Sociale" className="input-business" />
                    <input type="text" placeholder="Numéro SIRET" className="input-business" />
                    <input type="text" placeholder="Secteur d'activité" className="input-business" />
                    <input type="url" placeholder="Site actuel (optionnel)" className="input-business" />
                  </div>
                </div>

                {/* Section B : Actions Cahier des Charges */}
                <div className="p-6 bg-[#F8FAFB] rounded-3xl border border-dashed border-gray-300">
                  <h3 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wider">Cadrage de projet</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-3 p-4 bg-white border border-gray-200 rounded-2xl hover:border-[#2DD298] hover:shadow-md transition-all group">
                      <FaFileAlt className="text-gray-400 group-hover:text-[#2DD298]" />
                      <span className="text-sm font-bold">Remplir en ligne</span>
                    </button>
                    <button className="flex items-center justify-center gap-3 p-4 bg-white border border-gray-200 rounded-2xl hover:border-[#2DD298] hover:shadow-md transition-all group">
                      <FaDownload className="text-gray-400 group-hover:text-[#2DD298]" />
                      <span className="text-sm font-bold">Modèle Docx</span>
                    </button>
                  </div>
                </div>

                {/* Section C : Budget & Calendrier */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-6 rounded-3xl">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Budget Envisagé</label>
                    <select className="w-full bg-white border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#2DD298]">
                      <option>2 500€ — 5 000€</option>
                      <option>5 000€ — 15 000€</option>
                      <option>15 000€ — 50 000€</option>
                      <option>Corporate (+50k€)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Deadline</label>
                    <select className="w-full bg-white border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#2DD298]">
                      <option>ASAP</option>
                      <option>Sous 3 mois</option>
                      <option>6 mois et +</option>
                    </select>
                  </div>
                </div>

                {/* Bouton Final */}
                <button className="w-full py-5 bg-[#2DD298] hover:bg-[#25b683] text-white rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#2DD298]/30">
                  ENVOYER MA DEMANDE <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .input-business {
          background-color: #f9fafb;
          border: 1px solid #e5e7eb;
          padding: 1rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          outline: none;
          transition: all 0.2s;
        }
        .input-business:focus {
          border-color: #2DD298;
          background-color: #fff;
          box-shadow: 0 0 0 4px rgba(45, 210, 152, 0.1);
        }
      `}</style>
    </div>
  );
}
