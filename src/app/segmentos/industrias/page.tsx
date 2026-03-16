import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Link from "next/link";

export default function Industrias() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <section className="py-24 bg-tech- gradient bg-secondary text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block font-space">Robustez & Disponibilidade</span>
            <h1 className="section-title text-white">Tecnologia Industrial</h1>
            <p className="font-space text-gray-300 text-lg mb-10 uppercase tracking-widest leading-relaxed">
              Infraestrutura de alta resistência para ambientes críticos. Redes industriais, automação de processos e segurança patrimonial avançada.
            </p>
            <Link href="https://wa.me/5547988305641" className="btn-primary py-4 px-10">
              AGENDAR VISITA TÉCNICA
            </Link>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" alt="Indústrias" className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-tech-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 border border-primary/20 rounded-2xl bg-primary/5">
              <h4 className="font-syncopate font-bold text-primary mb-4 uppercase">Redes Industriais</h4>
              <p className="text-gray-500 font-space text-sm">Implementação de fibra óptica e switches industriais preparados para altas temperaturas e interferência eletromagnética.</p>
            </div>
            <div className="p-10 border border-accent/20 rounded-2xl bg-accent/5">
              <h4 className="font-syncopate font-bold text-accent mb-4 uppercase">Monitoramento de Ativos</h4>
              <p className="text-gray-500 font-space text-sm">CFTV térmico e sensores IoT para monitoramento de máquinas, prevenindo superaquecimento e paradas de linha.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
