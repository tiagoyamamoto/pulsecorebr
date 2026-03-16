import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Link from "next/link";

export default function Suporte() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <section className="py-24 bg-tech-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block font-space">Sempre à Disposição</span>
            <h1 className="section-title text-white">Suporte Técnico Especializado</h1>
            <p className="font-space text-gray-300 text-lg mb-10 uppercase tracking-widest leading-relaxed">
              Equipe técnica altamente qualificada para diagnósticos precisos e manutenções ágeis. Garantimos que sua tecnologia nunca falhe.
            </p>
            <Link href="https://wa.me/5547988305641" className="btn-primary py-4 px-10">
              ABRIR CHAMADO AGORA
            </Link>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80" alt="Suporte Técnico" className="rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-secondary text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-primary font-bold">Nossas Modalidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-10 border-l-8 border-primary text-left">
              <h4 className="font-syncopate font-bold text-white mb-4 uppercase">Manutenção Preventiva</h4>
              <p className="text-gray-400 font-space text-sm">Visitas periódicas para ajustes, limpeza e atualizações, evitando paradas inesperadas e prolongando a vida útil dos equipamentos.</p>
            </div>
            <div className="glass-card p-10 border-l-8 border-accent text-left">
              <h4 className="font-syncopate font-bold text-white mb-4 uppercase">Manutenção Corretiva</h4>
              <p className="text-gray-400 font-space text-sm">Atendimento emergencial para resolução de falhas técnicas com SLA de resposta garantido em contrato.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
