import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Link from "next/link";

export default function Redes() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-tech-gradient" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block font-space">Conectividade Robusta</span>
            <h1 className="section-title text-white">Infraestrutura de Rede</h1>
            <p className="font-space text-gray-300 text-lg mb-10 uppercase tracking-widest leading-relaxed">
              Projetos de cabeamento estruturado e redes sem fio de alta densidade para ambientes que não podem parar.
            </p>
            <Link href="https://wa.me/5547988305641" className="btn-primary py-4 px-10">
              SOLICITAR ANÁLISE TÉCNICA
            </Link>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80" alt="Redes" className="rounded-3xl shadow-2xl border border-white/10" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-tech-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="glass-card !bg-primary/5 border-primary/20">
              <h3 className="font-syncopate font-bold text-primary mb-6 uppercase">Cabeamento Estruturado</h3>
              <ul className="space-y-4 font-space text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="text-primary">✔</span> Instalação de Cat6 e Cat6a
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✔</span> Organização e Identificação de Racks
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✔</span> Certificação de Pontos de Rede
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✔</span> Fusão e Lançamento de Fibra Óptica
                </li>
              </ul>
            </div>
            <div className="glass-card !bg-accent/5 border-accent/20">
              <h3 className="font-syncopate font-bold text-accent mb-6 uppercase">Wi-Fi de Alta Performance</h3>
              <ul className="space-y-4 font-space text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="text-accent">✔</span> Soluções Wi-Fi 6 e 6E
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent">✔</span> Site Survey e Mapas de Calor
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent">✔</span> Redes Mesh para Grandes Áreas
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent">✔</span> Gerenciamento Centralizado em Nuvem
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
