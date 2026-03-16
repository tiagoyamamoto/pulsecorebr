import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Link from "next/link";

export default function Automacao() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <section className="py-24 bg-secondary text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block font-space">Conforto & Tecnologia</span>
            <h1 className="section-title text-white">Automação Inteligente</h1>
            <p className="font-space text-gray-300 text-lg mb-10 uppercase tracking-widest leading-relaxed">
              Transforme seu ambiente em um ecossistema inteligente. Controle iluminação, som, clima e segurança com apenas um toque ou comando de voz.
            </p>
            <Link href="https://wa.me/5547988305641" className="btn-accent py-4 px-10">
              SOLICITAR ORÇAMENTO
            </Link>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80" alt="Automação" className="rounded-3xl shadow-2xl border border-white/10" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-tech-100 dark:bg-tech-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-secondary p-10 rounded-2xl shadow-xl border-b-4 border-primary">
              <div className="text-4xl mb-6">💡</div>
              <h3 className="font-syncopate font-bold text-primary mb-4 uppercase">Iluminação</h3>
              <p className="font-space text-gray-500 text-sm">Criação de cenas personalizadas e controle de intensidade para economia e produtividade.</p>
            </div>
            <div className="bg-white dark:bg-secondary p-10 rounded-2xl shadow-xl border-b-4 border-accent">
              <div className="text-4xl mb-6">❄️</div>
              <h3 className="font-syncopate font-bold text-accent mb-4 uppercase">Climatização</h3>
              <p className="font-space text-gray-500 text-sm">Controle remoto do ar-condicionado e cortinas automatizadas para o conforto térmico ideal.</p>
            </div>
            <div className="bg-white dark:bg-secondary p-10 rounded-2xl shadow-xl border-b-4 border-primary">
              <div className="text-4xl mb-6">🔊</div>
              <h3 className="font-syncopate font-bold text-primary mb-4 uppercase">Áudio & Vídeo</h3>
              <p className="font-space text-gray-500 text-sm">Sistemas multiroom e home cinema integrados para uma experiência imersiva de entretenimento.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
