import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import LGPDBanner from "@/components/LGPDBanner";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-tech-900/60 z-10" />
          {/* Background image or video placeholder */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-syncopate text-4xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tighter">
            IMPULSIONANDO O SEU <span className="text-accent underline decoration-primary decoration-8 underline-offset-8">FUTURO</span> TECNOLÓGICO
          </h1>
          <p className="font-space text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto uppercase tracking-widest">
            Segurança de elite, Conectividade robusta e Energia Solar de alta performance em Blumenau e região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/servicos" className="btn-primary py-4 px-10 text-lg">
              CONHECER SOLUÇÕES
            </Link>
            <Link href="/contato" className="btn-accent py-4 px-10 text-lg">
              SOLICITAR ORÇAMENTO
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white opacity-50">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-white dark:bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Nossa Especialidade</h2>
            <div className="w-24 h-2 bg-accent mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-card flex flex-col h-full hover:scale-105 transition-transform duration-500">
                <div className="text-accent text-4xl mb-6">{service.icon}</div>
                <h3 className="font-syncopate text-xl font-bold mb-4 text-white uppercase">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <Link href={service.link} className="text-primary-light font-bold hover:text-accent transition-colors flex items-center gap-2 text-sm uppercase tracking-widest">
                  Saiba mais <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments Section */}
      <section className="py-24 bg-tech-100 dark:bg-tech-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title text-primary font-bold">SOLUÇÕES POR SEGMENTO</h2>
            <p className="text-gray-500 font-space tracking-widest">PROJETOS CUSTOMIZADOS PARA CADA NECESSIDADE</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {segments.map((segment, index) => (
              <Link href={segment.link} key={index} className="group relative h-64 overflow-hidden rounded-2xl">
                <div className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110`} style={{ backgroundImage: `url(${segment.image})` }} />
                <div className="absolute inset-0 bg-primary/60 group-hover:bg-accent/60 transition-colors duration-500" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="font-syncopate text-2xl font-bold text-white tracking-tighter">{segment.name}</h3>
                  <p className="text-white/80 text-xs mt-2 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">VER SOLUÇÕES →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-tech-gradient text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-syncopate text-3xl md:text-5xl font-bold mb-8 tracking-tighter">
            PRONTO PARA O PRÓXIMO NÍVEL?
          </h2>
          <p className="font-space text-lg mb-10 text-white/80">
            Fale agora com um especialista da Pulsecorebr e receba um diagnóstico tecnológico completo para seu projeto.
          </p>
          <div className="flex justify-center">
            <Link href="https://wa.me/5547988305641" target="_blank" className="btn-accent py-5 px-12 text-xl shadow-orange-500/50 shadow-2xl">
              FALAR COM UM ESPECIALISTA
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
      <LGPDBanner />
    </main>
  );
}

const services = [
  {
    title: "CFTV & MONITORAMENTO",
    description: "Sistemas de câmeras de alta definição com IA para reconhecimento facial e gravação segura em nuvem. Monitore de qualquer lugar do mundo.",
    icon: "👁️",
    link: "/servicos/cftv"
  },
  {
    title: "INFRAESTRUTURA DE REDE",
    description: "Projetos de cabeamento estruturado e certificação de rede. Wi-Fi 6 de alta densidade para cobertura total e estável.",
    icon: "🌐",
    link: "/servicos/redes"
  },
  {
    title: "INTERNET EMPRESARIAL",
    description: "Link dedicado de alto desempenho com redundância para que seu negócio nunca pare. Suporte técnico premium 24/7.",
    icon: "⚡",
    link: "/servicos/internet"
  },
  {
    title: "AUTOMAÇÃO",
    description: "Controle total de iluminação, clima e segurança por voz ou aplicativo. Conforto e economia de até 30% no consumo de energia.",
    icon: "🏠",
    link: "/servicos/automacao"
  },
  {
    title: "ENERGIA SOLAR",
    description: "Reduza sua conta de luz em até 95%. Projetos fotovoltaicos inteligentes com garantia de 25 anos nos painéis.",
    icon: "☀️",
    link: "/servicos/energia-solar"
  },
  {
    title: "SUPORTE TÉCNICO",
    description: "Diagnóstico especializado e manutenção preventiva para garantir que sua tecnologia funcione em sua máxima performance.",
    icon: "🛠️",
    link: "/servicos/suporte"
  }
];

const segments = [
  { name: "EMPRESAS", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80", link: "/segmentos/empresas" },
  { name: "CONDOMÍNIOS", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80", link: "/segmentos/condominios" },
  { name: "RESIDÊNCIAS", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80", link: "/segmentos/residencias" },
  { name: "GOVERNO", image: "https://images.unsplash.com/photo-1577086664693-894d8405334a?auto=format&fit=crop&q=80", link: "/segmentos/governo" },
  { name: "EVENTOS", image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80", link: "/segmentos/eventos" },
  { name: "INDÚSTRIAS", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80", link: "/segmentos/industrias" }
];
