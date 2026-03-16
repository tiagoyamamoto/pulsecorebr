import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Link from "next/link";

export default function Empresas() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <section className="py-24 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block font-space">Soluções Corporativas</span>
            <h1 className="section-title text-white">Alta Performance para sua Empresa</h1>
            <p className="font-space text-gray-300 text-lg mb-10 uppercase tracking-widest leading-relaxed">
              Infraestrutura de rede estável e segurança patrimonial inteligente para garantir que seu negócio nunca pare de crescer.
            </p>
            <Link href="https://wa.me/5547988305641" className="btn-accent py-4 px-10">
              FALAR COM UM CONSULTOR
            </Link>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80" alt="Empresas" className="rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-tech-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-primary text-center mb-16">Por que escolher a Pulsecorebr?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="text-4xl">💎</div>
              <div>
                <h4 className="font-syncopate font-bold text-primary mb-2 uppercase">Internet Dedicada</h4>
                <p className="text-gray-500 font-space text-sm">Garantia de 100% da banda contratada com IP fixo e suporte prioritário.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-4xl">🔐</div>
              <div>
                <h4 className="font-syncopate font-bold text-primary mb-2 uppercase">Controle de Acesso</h4>
                <p className="text-gray-500 font-space text-sm">Gestão de fluxo de funcionários e visitantes via biometria e reconhecimento facial.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-4xl">🏗️</div>
              <div>
                <h4 className="font-syncopate font-bold text-primary mb-2 uppercase">Redes Estruturadas</h4>
                <p className="text-gray-500 font-space text-sm">Organização profissional de racks e cabeamento para evitar downtime.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-4xl">📊</div>
              <div>
                <h4 className="font-syncopate font-bold text-primary mb-2 uppercase">Monitoramento 24h</h4>
                <p className="text-gray-500 font-space text-sm">Sistemas de alarme e CFTV integrados com central de monitoramento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
