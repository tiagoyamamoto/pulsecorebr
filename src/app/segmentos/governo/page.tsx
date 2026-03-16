import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Link from "next/link";

export default function Governo() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block font-space">Modernização Pública</span>
            <h1 className="section-title text-white">Cidades Inteligentes</h1>
            <p className="font-space text-gray-100 text-lg mb-10 uppercase tracking-widest leading-relaxed">
              Infraestrutura tecnológica de ponta para prefeituras e órgãos públicos. Segurança e conectividade a serviço do cidadão.
            </p>
            <Link href="https://wa.me/5547988305641" className="btn-accent py-4 px-10">
              CONSULTAR LICITAÇÕES
            </Link>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1577086664693-894d8405334a?auto=format&fit=crop&q=80" alt="Governo" className="rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-tech-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 bg-tech-50 dark:bg-secondary rounded-2xl border-l-8 border-primary">
              <h4 className="font-syncopate font-bold text-primary mb-4 uppercase">Segurança Urbana</h4>
              <p className="text-gray-500 font-space text-sm">Cinturão de monitoramento inteligente com leitura de placas (LPR) e integração com forças policiais.</p>
            </div>
            <div className="p-10 bg-tech-50 dark:bg-secondary rounded-2xl border-l-8 border-accent">
              <h4 className="font-syncopate font-bold text-accent mb-4 uppercase">Redes Públicas</h4>
              <p className="text-gray-500 font-space text-sm">Implantação de Wi-Fi gratuito em praças e parques com gerenciamento de tráfego e conformidade legal.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
