"use client";

import { useState, useEffect } from "react";

export default function LGPDBanner() {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const isAccepted = localStorage.getItem("lgpd-accepted");
    if (!isAccepted) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("lgpd-accepted", "true");
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6 bg-secondary/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-300 text-sm md:text-base leading-relaxed text-center md:text-left">
          <p>
            Nós utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
            <a href="/politica-de-privacidade" className="text-accent hover:underline font-bold">
              Política de Privacidade
            </a>.
          </p>
        </div>
        <button
          onClick={handleAccept}
          className="btn-accent whitespace-nowrap"
        >
          ACEITAR E CONTINUAR
        </button>
      </div>
    </div>
  );
}
