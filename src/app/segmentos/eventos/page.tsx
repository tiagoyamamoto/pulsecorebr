import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Link from "next/link";

export default function Eventos() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <section className="py-24 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block font-space">Conectividade Temporária</span>
            <h1 className="section-title text-white">Estrutura para Grandes Eventos</h1>
            <p className="font-space text-white/90 text-lg mb-10 uppercase tracking-widest leading-relaxed">
              Wi-Fi de altíssima densidade e monitoramento móvel para feiras, congressos e festivais. Sua estrutura pronta em tempo recorde.
            </p>
            <Link href="https://wa.me/5547988305641" className="bg-secondary hover:bg-secondary-light text-white font-syncopate py-4 px-10 rounded-lg transition-all">
              ORÇAMENTO PARA EVENTO
            </Link>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80" alt="Eventos" className="rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-tech-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card text-center border-b-4 border-accent">
              <h4 className="font-syncopate font-bold text-white mb-4 uppercase">Alta Densidade</h4>
              <p className="text-gray-400 font-space text-xs">Suporte a milhares de conexões simultâneas sem perda de performance ou latência.</p>
            </div>
            <div className="glass-card text-center border-b-4 border-primary">
              <h4 className="font-syncopate font-bold text-white mb-4 uppercase">Redes Expositores</h4>
              <p className="text-gray-400 font-space text-xs">VLANs dedicadas para cada estande, garantindo segurança e isolamento de tráfego.</p>
            </div>
            <div className="glass-card text-center border-b-4 border-accent">
              <h4 className="font-syncopate font-bold text-white mb-4 uppercase">Monitoramento</h4>
              <p className="text-gray-400 font-space text-xs">Torres de CFTV temporárias com IA para controle de público e segurança perimetral.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
