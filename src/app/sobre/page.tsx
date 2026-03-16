import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Sobre() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <section className="py-24 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="section-title text-accent">Nossa História</h1>
              <p className="font-space text-gray-300 leading-relaxed mb-6">
                Fundada em 2020 em Blumenau/SC, a Pulsecorebr nasceu com o propósito de redefinir o padrão de integração tecnológica no Sul do Brasil. 
                Iniciamos nossa jornada focados em telecomunicações e rapidamente expandimos para um ecossistema completo de infraestrutura, segurança inteligente e energia renovável.
              </p>
              <p className="font-space text-gray-300 leading-relaxed">
                Hoje, somos referência em unir conectividade de alta performance com segurança de elite e eficiência energética, servindo desde residências de alto padrão até grandes complexos industriais e órgãos governamentais.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card text-center py-10">
                <p className="text-accent text-4xl font-bold font-syncopate mb-2">500+</p>
                <p className="text-white text-xs uppercase tracking-widest font-bold">Projetos Executados</p>
              </div>
              <div className="glass-card text-center py-10">
                <p className="text-accent text-4xl font-bold font-syncopate mb-2">30+</p>
                <p className="text-white text-xs uppercase tracking-widest font-bold">Cidades Atendidas</p>
              </div>
              <div className="glass-card text-center py-10">
                <p className="text-accent text-4xl font-bold font-syncopate mb-2">20+</p>
                <p className="text-white text-xs uppercase tracking-widest font-bold">Especialistas</p>
              </div>
              <div className="glass-card text-center py-10">
                <p className="text-accent text-4xl font-bold font-syncopate mb-2">2020</p>
                <p className="text-white text-xs uppercase tracking-widest font-bold">Ano de Fundação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-tech-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-primary">Nossos Valores</h2>
            <div className="w-24 h-2 bg-accent mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 border-b-4 border-primary bg-tech-50 dark:bg-secondary rounded-t-2xl shadow-xl">
              <div className="text-4xl mb-6">🛡️</div>
              <h3 className="font-syncopate text-xl font-bold mb-4 text-primary uppercase">Segurança</h3>
              <p className="text-gray-500 font-space text-sm">Compromisso inabalável com a proteção do patrimônio e da vida através da tecnologia.</p>
            </div>
            <div className="text-center p-8 border-b-4 border-accent bg-tech-50 dark:bg-secondary rounded-t-2xl shadow-xl">
              <div className="text-4xl mb-6">🚀</div>
              <h3 className="font-syncopate text-xl font-bold mb-4 text-accent uppercase">Inovação</h3>
              <p className="text-gray-500 font-space text-sm">Busca constante pelas soluções mais avançadas do mercado global.</p>
            </div>
            <div className="text-center p-8 border-b-4 border-primary bg-tech-50 dark:bg-secondary rounded-t-2xl shadow-xl">
              <div className="text-4xl mb-6">⚡</div>
              <h3 className="font-syncopate text-xl font-bold mb-4 text-primary uppercase">Agilidade</h3>
              <p className="text-gray-500 font-space text-sm">Atendimento técnico rápido e suporte resolutivo para que você nunca pare.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
