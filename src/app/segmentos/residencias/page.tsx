import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Link from "next/link";

export default function Residencias() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <section className="py-24 bg-tech- gradient bg-secondary text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block font-space">Conforto & Bem-Estar</span>
            <h1 className="section-title text-white">Sua Casa Inteligente</h1>
            <p className="font-space text-gray-300 text-lg mb-10 uppercase tracking-widest leading-relaxed">
              O futuro chegou à sua residência. Automação total e segurança de elite para você e sua família.
            </p>
            <Link href="https://wa.me/5547988305641" className="btn-accent py-4 px-10">
              SOLICITAR ORÇAMENTO
            </Link>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80" alt="Residências" className="rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-tech-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title text-primary font-bold">O Estilo de Vida Pulsecore</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 border border-gray-100 dark:border-white/10 rounded-2xl">
              <div className="text-3xl mb-4">🎭</div>
              <h4 className="font-syncopate font-bold text-primary dark:text-white mb-2 text-xs uppercase">Cenas de Luz</h4>
            </div>
            <div className="p-8 border border-gray-100 dark:border-white/10 rounded-2xl">
              <div className="text-3xl mb-4">🌡️</div>
              <h4 className="font-syncopate font-bold text-primary dark:text-white mb-2 text-xs uppercase">Clima Ideal</h4>
            </div>
            <div className="p-8 border border-gray-100 dark:border-white/10 rounded-2xl">
              <div className="text-3xl mb-4">🔐</div>
              <h4 className="font-syncopate font-bold text-primary dark:text-white mb-2 text-xs uppercase">Trancas Bio</h4>
            </div>
            <div className="p-8 border border-gray-100 dark:border-white/10 rounded-2xl">
              <div className="text-3xl mb-4">📱</div>
              <h4 className="font-syncopate font-bold text-primary dark:text-white mb-2 text-xs uppercase">App Controle</h4>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
