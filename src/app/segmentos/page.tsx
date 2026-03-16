import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Link from "next/link";

export default function Segmentos() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <section className="py-24 bg-tech-100 dark:bg-tech-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="section-title text-primary">Setores que Transformamos</h1>
            <p className="font-space text-gray-500 max-w-2xl mx-auto uppercase tracking-widest">
              Entregamos valor real através de projetos desenhados para a realidade de cada segmento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {segments.map((segment, index) => (
              <div key={index} className="group bg-white dark:bg-secondary rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-accent/20 transition-colors z-10" />
                  <img src={segment.image} alt={segment.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <h3 className="font-syncopate text-2xl font-bold mb-4 text-primary dark:text-white uppercase tracking-tighter">{segment.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 font-space">
                    {segment.description}
                  </p>
                  <Link href={segment.link} className="flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all uppercase tracking-widest text-xs">
                    EXPLORAR SOLUÇÕES <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}

const segments = [
  { 
    name: "EMPRESAS", 
    description: "Conectividade redundante e segurança patrimonial inteligente para maximizar a continuidade do seu negócio.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80", 
    link: "/segmentos/empresas" 
  },
  { 
    name: "CONDOMÍNIOS", 
    description: "Portaria remota, controle de acesso facial e infraestrutura de rede para garantir o bem-estar dos moradores.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80", 
    link: "/segmentos/condominios" 
  },
  { 
    name: "RESIDÊNCIAS", 
    description: "O máximo em conforto com automação total e segurança eletrônica de última geração para sua família.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80", 
    link: "/segmentos/residencias" 
  },
  { 
    name: "GOVERNO", 
    description: "Parcerias estratégicas para modernização de infraestrutura urbana, redes públicas e segurança municipal.",
    image: "https://images.unsplash.com/photo-1577086664693-894d8405334a?auto=format&fit=crop&q=80", 
    link: "/segmentos/governo" 
  },
  { 
    name: "EVENTOS", 
    description: "Estruturas temporárias de Wi-Fi de alta densidade e monitoramento móvel para feiras, shows e congressos.",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80", 
    link: "/segmentos/eventos" 
  },
  { 
    name: "INDÚSTRIAS", 
    description: "Soluções robustas para ambientes agressivos, redes industriais e controle de processos via IoT.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80", 
    link: "/segmentos/industrias" 
  }
];
