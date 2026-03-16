import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Link from "next/link";

export default function Servicos() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="section-title text-accent">Nossas Soluções</h1>
          <p className="font-space text-gray-300 max-w-2xl mb-16 uppercase tracking-widest">
            Tecnologia de ponta integrada para elevar a segurança e a produtividade do seu ambiente.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-card flex flex-col h-full border-l-4 border-accent">
                <div className="text-accent text-4xl mb-6">{service.icon}</div>
                <h3 className="font-syncopate text-xl font-bold mb-4 text-white uppercase">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="space-y-4">
                  <Link href={service.link} className="btn-primary w-full text-xs py-3">
                    DETALHES DO SERVIÇO
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-tech-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-syncopate text-3xl font-bold mb-8 text-primary">PRECISA DE UM PROJETO PERSONALIZADO?</h2>
          <p className="font-space text-gray-500 mb-10">Nossa equipe de engenharia está pronta para desenhar a solução exata para sua necessidade técnica.</p>
          <Link href="/contato" className="btn-accent inline-flex px-12 py-4">
            CONSULTORIA TÉCNICA GRATUITA
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}

const services = [
  {
    title: "CFTV & MONITORAMENTO",
    description: "Câmeras IP de alta resolução, gravação em nuvem e análise de vídeo inteligente com reconhecimento facial.",
    icon: "👁️",
    link: "/servicos/cftv"
  },
  {
    title: "INFRAESTRUTURA DE REDE",
    description: "Cabeamento estruturado cat6/cat6a, organização de racks e certificação de rede para alta performance.",
    icon: "🌐",
    link: "/servicos/redes"
  },
  {
    title: "INTERNET EMPRESARIAL",
    description: "Links dedicados com garantia de banda e SLA de atendimento ultra rápido para empresas.",
    icon: "⚡",
    link: "/servicos/internet"
  },
  {
    title: "AUTOMAÇÃO",
    description: "Integração completa de ambientes: iluminação, climatização e controle de acesso inteligente.",
    icon: "🏠",
    link: "/servicos/automacao"
  },
  {
    title: "ENERGIA SOLAR",
    description: "Sistemas fotovoltaicos de alto rendimento para máxima economia e sustentabilidade.",
    icon: "☀️",
    link: "/servicos/energia-solar"
  },
  {
    title: "SUPORTE TÉCNICO",
    description: "Manutenção preventiva e corretiva com equipe técnica residente ou chamados avulsos.",
    icon: "🛠️",
    link: "/servicos/suporte"
  }
];
