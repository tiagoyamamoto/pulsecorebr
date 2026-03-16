import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Link from "next/link";

export default function Internet() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <section className="py-24 bg-tech-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block font-space">Conexão Premium</span>
            <h1 className="section-title text-white">Internet Dedicada</h1>
            <p className="font-space text-gray-300 text-lg mb-10 uppercase tracking-widest leading-relaxed">
              Link 1:1 com garantia de banda, baixa latência e SLA de atendimento ultra rápido. Sua empresa sempre online.
            </p>
            <Link href="https://wa.me/5547988305641" className="btn-accent py-4 px-10 text-lg shadow-orange-500/20 shadow-2xl">
              SOLICITAR COTAÇÃO
            </Link>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-xl group-hover:bg-primary/50 transition-all" />
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" alt="Internet" className="relative z-10 rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-primary font-bold">Por que Pulsecore Fiber?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-tech-50 dark:bg-tech-900 rounded-2xl border-t-4 border-primary">
              <h4 className="font-syncopate font-bold text-primary mb-4 uppercase">Banda Simétrica</h4>
              <p className="text-gray-500 font-space text-sm">Velocidade de download e upload idênticas, ideal para VPNs e serviços em nuvem.</p>
            </div>
            <div className="p-8 bg-tech-50 dark:bg-tech-900 rounded-2xl border-t-4 border-accent">
              <h4 className="font-syncopate font-bold text-accent mb-4 uppercase">IP Fixo Grátis</h4>
              <p className="text-gray-500 font-space text-sm">Facilite o acesso remoto e a hospedagem de servidores internos com IP público fixo.</p>
            </div>
            <div className="p-8 bg-tech-50 dark:bg-tech-900 rounded-2xl border-t-4 border-primary">
              <h4 className="font-syncopate font-bold text-primary mb-4 uppercase">Suporte 24/7</h4>
              <p className="text-gray-500 font-space text-sm">Equipe técnica própria pronta para agir em qualquer sinal de instabilidade.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
