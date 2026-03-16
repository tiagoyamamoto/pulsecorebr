import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Link from "next/link";

export default function EnergiaSolar() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <section className="py-24 bg-secondary text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block font-space">Sustentabilidade & Economia</span>
            <h1 className="section-title text-white">Energia Solar</h1>
            <p className="font-space text-gray-300 text-lg mb-10 uppercase tracking-widest leading-relaxed">
              Reduza sua conta de luz em até 95% com tecnologia fotovoltaica de última geração e retorno rápido do investimento.
            </p>
            <Link href="https://wa.me/5547988305641" className="btn-accent py-4 px-10">
              SIMULAR ECONOMIA
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full" />
            <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80" alt="Energia Solar" className="relative z-10 rounded-3xl shadow-2xl border border-white/10" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-tech-900 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-primary">Vantagens Pulsecore</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="glass-card p-8">
              <div className="text-3xl mb-4">📉</div>
              <h4 className="font-syncopate font-bold text-white mb-2 text-sm uppercase">95% Menos Custo</h4>
              <p className="text-xs text-gray-400 font-space">Redução drástica imediata no valor da sua fatura mensal.</p>
            </div>
            <div className="glass-card p-8">
              <div className="text-3xl mb-4">🛡️</div>
              <h4 className="font-syncopate font-bold text-white mb-2 text-sm uppercase">25 Anos Garantia</h4>
              <p className="text-xs text-gray-400 font-space">Performance garantida por décadas pelos melhores fabricantes.</p>
            </div>
            <div className="glass-card p-8">
              <div className="text-3xl mb-4">💰</div>
              <h4 className="font-syncopate font-bold text-white mb-2 text-sm uppercase">ROI em 3-5 Anos</h4>
              <p className="text-xs text-gray-400 font-space">O sistema se paga rapidamente com a economia gerada.</p>
            </div>
            <div className="glass-card p-8">
              <div className="text-3xl mb-4">📈</div>
              <h4 className="font-syncopate font-bold text-white mb-2 text-sm uppercase">Valorização</h4>
              <p className="text-xs text-gray-400 font-space">Seu imóvel valoriza instantaneamente com energia própria.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
