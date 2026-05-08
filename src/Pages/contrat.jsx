import React, { useRef } from 'react';
import { FaPrint, FaFileDownload, FaPenNib, FaCheckCircle } from 'react-icons/fa';

export default function ContractPage() {
  const contractRef = useRef();

  // Fonction pour imprimer le contrat
  const handlePrint = () => {
    window.print();
  };

  // Date du jour
  const today = new Date().toLocaleDateString('fr-FR', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* --- BARRE D'ACTIONS --- */}
        <div className="mb-6 flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm no-print">
          <h2 className="font-bold text-gray-700">Aperçu du Contrat</h2>
          <div className="flex gap-3">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 bg-gray-800 text-white px-5 py-2 rounded-xl hover:bg-black transition-all"
            >
              <FaPrint /> Imprimer / PDF
            </button>
            <button className="flex items-center gap-2 bg-[#2DD298] text-white px-5 py-2 rounded-xl hover:bg-[#25b683] shadow-lg shadow-[#2DD298]/30 transition-all">
              <FaPenNib /> Signer numériquement
            </button>
          </div>
        </div>

        {/* --- DOCUMENT DE CONTRAT --- */}
        <div 
          ref={contractRef}
          className="bg-white p-12 md:p-16 shadow-2xl rounded-sm border-t-[12px] border-[#2DD298] text-gray-800 leading-relaxed printable-area"
        >
          {/* En-tête du contrat */}
          <div className="flex justify-between items-start mb-12">
            <div>
              <h1 className="text-3xl font-black tracking-tighter text-[#2DD298]">MODERN<span className="text-gray-800">SHOP</span></h1>
              <p className="text-sm text-gray-500">Contrat de Prestation de Service</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-bold uppercase">Réf : CT-2024-001</p>
              <p>Date : {today}</p>
            </div>
          </div>

          <div className="space-y-8 text-sm md:text-base">
            
            {/* Parties */}
            <section>
              <h3 className="font-bold border-b border-gray-200 pb-2 mb-4 text-gray-900 uppercase tracking-wider">1. Les Parties</h3>
              <p>Entre les soussignés :</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-bold text-[#2DD298]">LE PRESTATAIRE</p>
                  <p className="font-bold uppercase">ModernShop Digital</p>
                  <p>SIRET : 123 456 789 00012</p>
                  <p>Siège Social : [Votre Adresse, Ville]</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                  <p className="font-bold text-[#2DD298]">LE CLIENT</p>
                  <p className="font-bold italic text-gray-400">[Nom du Client / Entreprise]</p>
                  <p>[Adresse du Client]</p>
                  <p>[Numéro SIRET Client]</p>
                </div>
              </div>
            </section>

            {/* Objet */}
            <section>
              <h3 className="font-bold border-b border-gray-200 pb-2 mb-2 text-gray-900 uppercase">2. Objet du Contrat</h3>
              <p>Le présent contrat a pour objet la réalisation de la prestation suivante : <strong>[Description courte du projet, ex: Création d'une plateforme E-commerce]</strong> conformément au cahier des charges validé le {today}.</p>
            </section>

            {/* Honoraires */}
            <section>
              <h3 className="font-bold border-b border-gray-200 pb-2 mb-2 text-gray-900 uppercase tracking-wider">3. Conditions Financières</h3>
              <p>En contrepartie de la réalisation des travaux, le Client s’engage à verser au Prestataire la somme totale de :</p>
              <div className="my-4 text-2xl font-bold text-[#2DD298] bg-[#2DD298]/5 p-4 rounded-xl text-center border border-[#2DD298]/20">
                [Montant en €] HT
              </div>
              <ul className="list-disc ml-5 space-y-1">
                <li>Acompte de 30% à la signature du présent contrat.</li>
                <li>Le solde de 70% à la livraison finale du projet.</li>
              </ul>
            </section>

            {/* Délais */}
            <section>
              <h3 className="font-bold border-b border-gray-200 pb-2 mb-2 text-gray-900 uppercase">4. Délais de réalisation</h3>
              <p>Le Prestataire s'engage à livrer le projet dans un délai de <strong>[Nombre] semaines</strong> à compter de la réception des éléments graphiques et textuels nécessaires.</p>
            </section>

            {/* Signatures */}
            <section className="pt-12">
              <div className="grid grid-cols-2 gap-12">
                <div className="h-40 border border-gray-200 rounded-xl p-4 relative">
                  <p className="text-xs font-bold uppercase text-gray-400 mb-2">Bon pour accord (Prestataire)</p>
                  <div className="absolute bottom-4 right-4 text-[#2DD298] opacity-20">
                    <FaCheckCircle size={60} />
                  </div>
                </div>
                <div className="h-40 border border-gray-200 rounded-xl p-4 relative">
                  <p className="text-xs font-bold uppercase text-gray-400 mb-2">Bon pour accord (Client)</p>
                  <p className="text-[10px] italic text-gray-300 absolute bottom-2">Signature précédée de la mention "Lu et approuvé"</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Pied de page informatif */}
        <p className="mt-8 text-center text-xs text-gray-400 italic">
          Ce document est un modèle contractuel généré par la plateforme ModernShop. 
          En cas de litige, le tribunal compétent sera celui du siège social du prestataire.
        </p>
      </div>

      {/* Style CSS pour l'impression */}
      <style jsx>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          .printable-area { 
            box-shadow: none !important; 
            border: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
