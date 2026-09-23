import React from 'react';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950 transition-opacity duration-500">
      {/* Conteneur du texte RTH avec effet de dégradé de bleu et animation */}
      <div className="relative flex items-center justify-center">
        {/* Effet de lueur (glow) en arrière-plan */}
        <div className="absolute -inset-1 blur-xl bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 opacity-40 animate-pulse"></div>
        
        {/* Texte RTH avec dégradé de bleu de gauche à droite */}
        <span className="relative text-7xl sm:text-8xl font-black tracking-wider bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent animate-pulse select-none">
          RTH
        </span>
      </div>

      {/* Petit texte de chargement optionnel */}
      <p className="mt-6 text-sm font-medium text-gray-400 tracking-widest uppercase animate-pulse">
        Chargement en cours...
      </p>
    </div>
  );
}