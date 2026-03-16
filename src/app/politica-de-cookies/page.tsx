import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Cookies() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title text-accent">Política de Cookies</h1>
        <div className="prose dark:prose-invert prose-slate max-w-none font-space text-gray-500 dark:text-gray-400">
          <p className="mb-6">Este site utiliza cookies para garantir que você tenha a melhor experiência de navegação.</p>
          
          <h2 className="text-white font-syncopate text-xl mb-4 uppercase">1. O que são Cookies?</h2>
          <p className="mb-6">Cookies são pequenos arquivos de texto enviados pelo site ao seu computador ou dispositivo móvel para reconhecer preferências e melhorar sua navegação.</p>
          
          <h2 className="text-white font-syncopate text-xl mb-4 uppercase">2. Tipos de Cookies que Utilizamos</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Essenciais:</strong> Necessários para o funcionamento básico do site.</li>
            <li><strong>Analíticos:</strong> Utilizados para entender como os visitantes interagem com o site, coletando dados anônimos de tráfego.</li>
            <li><strong>Funcionais:</strong> Lembram suas escolhas para oferecer uma experiência personalizada.</li>
          </ul>
          
          <h2 className="text-white font-syncopate text-xl mb-4 uppercase">3. Gerenciamento de Cookies</h2>
          <p className="mb-6">Você pode gerenciar ou desativar os cookies através das configurações do seu navegador a qualquer momento. Note que a desativação pode afetar a funcionalidade de algumas partes deste site.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
