"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image 
                src="/assets/logo-logoname.png" 
                alt="Pulsecore Logo" 
                width={180} 
                height={40} 
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Home</Link>
              <Link href="/sobre" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Sobre</Link>
              <Link href="/servicos" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Serviços</Link>
              <Link href="/segmentos" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Segmentos</Link>
              <Link href="/cidades" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Cidades</Link>
              <Link href="/contato" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Contato</Link>
              <Link href="/navega-ao-vivo" className="btn-accent text-xs">
                NAVEGAAOVIVO
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-secondary border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/sobre" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sobre</Link>
            <Link href="/servicos" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Serviços</Link>
            <Link href="/segmentos" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Segmentos</Link>
            <Link href="/cidades" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Cidades</Link>
            <Link href="/contato" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contato</Link>
            <Link href="/navega-ao-vivo" className="bg-accent text-white block px-3 py-2 rounded-md text-base font-medium">NAVEGAAOVIVO</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
