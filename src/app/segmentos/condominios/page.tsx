import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Link from "next/link";

export default function Condominios() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <section className="py-24 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block font-space">Gestão & Segurança</span>
            <h1 className="section-title text-white">Soluções para Condomínios</h1>
            <p className="font-space text-gray-300 text-lg mb-10 uppercase tracking-widest leading-relaxed">
              Tecnologia integrada para valorizar seu patrimônio e garantir a tranquilidade de todos os moradores.
            </p>
            <Link href="https://wa.me/5547988305641" className="btn-accent py-4 px-10">
              SOLICITAR APRESENTAÇÃO
            </Link>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80" alt="Condomínios" className="rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-tech-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card text-center border-t-4 border-primary">
              <div className="text-4xl mb-6">🚪</div>
              <h4 className="font-syncopate font-bold text-white mb-4 uppercase">Portaria Remota</h4>
              <p className="text-gray-400 font-space text-xs">Redução de custos e aumento da segurança com controle de acesso centralizado e monitorado 24h.</p>
            </div>
            <div className="glass-card text-center border-t-4 border-accent">
              <div className="text-4xl mb-6">🤳</div>
              <h3 className="font-syncopate font-bold text-white mb-4 uppercase">Acesso Facial</h3>
              <p className="text-gray-400 font-space text-xs">A tecnologia mais moderna de reconhecimento facial para entrada de moradores e prestadores.</p>
            </div>
            <div className="glass-card text-center border-t-4 border-primary">
              <div className="text-4xl mb-6">📞</div>
              <h3 className="font-syncopate font-bold text-white mb-4 uppercase">Interfonia IP</h3>
              <p className="text-gray-400 font-space text-xs">Comunicação clara e estável entre apartamentos e portaria, com integração direta no smartphone.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
