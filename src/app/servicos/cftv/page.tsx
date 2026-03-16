import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Link from "next/link";

export default function CFTV() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      
      {/* Hero Service */}
      <section className="py-24 bg-secondary text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block font-space">Monitoramento Inteligente</span>
            <h1 className="section-title text-white">CFTV de Elite</h1>
            <p className="font-space text-gray-300 text-lg mb-10 uppercase tracking-widest leading-relaxed">
              Vigilância proativa com inteligência artificial, gravação em nuvem e acesso instantâneo via mobile.
            </p>
            <Link href="https://wa.me/5547988305641" className="btn-accent py-4 px-10">
              SOLICITAR PROJETO
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
            <img src="https://images.unsplash.com/photo-1557597774-9d2739f85a76?auto=format&fit=crop&q=80" alt="CFTV" className="relative z-10 rounded-3xl shadow-2xl border border-white/10" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white dark:bg-tech-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 bg-tech-50 dark:bg-secondary rounded-3xl border-b-4 border-primary">
              <div className="text-4xl mb-6">👤</div>
              <h3 className="font-syncopate font-bold text-primary mb-4 uppercase">IA & Facial</h3>
              <p className="font-space text-gray-500 text-sm">Identificação automática de pessoas e veículos, com alertas em tempo real para comportamentos suspeitos.</p>
            </div>
            <div className="p-10 bg-tech-50 dark:bg-secondary rounded-3xl border-b-4 border-accent">
              <div className="text-4xl mb-6">☁️</div>
              <h3 className="font-syncopate font-bold text-accent mb-4 uppercase">Nuvem Segura</h3>
              <p className="font-space text-gray-500 text-sm">Suas gravações protegidas contra roubo ou danos ao equipamento físico. Acesso histórico 24/7.</p>
            </div>
            <div className="p-10 bg-tech-50 dark:bg-secondary rounded-3xl border-b-4 border-primary">
              <div className="text-4xl mb-6">📱</div>
              <h3 className="font-syncopate font-bold text-primary mb-4 uppercase">Full Mobile</h3>
              <p className="font-space text-gray-500 text-sm">Visualize todas as câmeras em 4K diretamente do seu smartphone com baixa latência.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
