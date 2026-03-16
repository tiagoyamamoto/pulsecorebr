import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacidade() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title text-primary">Política de Privacidade</h1>
        <div className="prose dark:prose-invert prose-slate max-w-none font-space text-gray-500 dark:text-gray-400">
          <p className="mb-6 uppercase tracking-widest font-bold text-accent">Última atualização: 16 de Março de 2026</p>
          
          <h2 className="text-white font-syncopate text-xl mb-4 uppercase">1. Coleta de Dados</h2>
          <p className="mb-6">A Pulsecorebr coleta informações fornecidas voluntariamente por você através de nossos formulários de contato, como nome, e-mail, telefone e informações sobre o projeto solicitado.</p>
          
          <h2 className="text-white font-syncopate text-xl mb-4 uppercase">2. Uso das Informações</h2>
          <p className="mb-6">Os dados coletados são utilizados exclusivamente para responder suas solicitações, enviar orçamentos personalizados e fornecer suporte técnico referente aos nossos serviços de segurança e infraestrutura.</p>
          
          <h2 className="text-white font-syncopate text-xl mb-4 uppercase">3. Proteção de Dados (LGPD)</h2>
          <p className="mb-6">Adotamos medidas técnicas e administrativas para proteger seus dados pessoais contra acessos não autorizados e situações acidentais ou ilícitas de destruição, perda ou alteração, em total conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD).</p>
          
          <h2 className="text-white font-syncopate text-xl mb-4 uppercase">4. Contato</h2>
          <p className="mb-6">Para dúvidas sobre privacidade, entre em contato via e-mail: contato@pulsecorebr.com.br.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
