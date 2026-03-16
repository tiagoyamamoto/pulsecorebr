import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Cidades() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <section className="py-24 bg-tech-100 dark:bg-tech-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="section-title text-primary">Cobertura em Santa Catarina</h1>
            <p className="font-space text-gray-500 max-w-2xl mx-auto uppercase tracking-widest">
              Equipe técnica estrategicamente posicionada para garantir agilidade no atendimento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <div key={index} className="bg-white dark:bg-secondary p-10 rounded-3xl shadow-xl border-t-4 border-accent hover:border-primary transition-colors">
                <h3 className="font-syncopate text-xl font-bold mb-6 text-primary dark:text-white uppercase tracking-tighter">{region.name}</h3>
                <ul className="space-y-3">
                  {region.cities.map((city, cityIndex) => (
                    <li key={cityIndex} className="font-space text-gray-500 dark:text-gray-400 flex items-center gap-2">
                      <span className="text-accent text-lg">•</span> {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-tech-gradient text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div>
            <h2 className="font-syncopate text-3xl font-bold mb-4 uppercase tracking-tighter">Sua cidade não está na lista?</h2>
            <p className="font-space text-white/70 uppercase tracking-widest">Atendemos projetos especiais em todo o estado sob consulta.</p>
          </div>
          <a href="https://wa.me/5547988305641" target="_blank" className="btn-accent px-10 py-4 whitespace-nowrap">
            CONSULTAR DISPONIBILIDADE
          </a>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}

const regions = [
  {
    name: "Vale do Itajaí",
    cities: ["Blumenau (Sede)", "Brusque", "Gaspar", "Indaial", "Timbó", "Pomerode", "Guabiruba", "Apiúna", "Benedito Novo"]
  },
  {
    name: "Litoral Norte",
    cities: ["Itajaí", "Balneário Camboriú", "Navegantes", "Itapema", "Porto Belo", "Bombinhas", "Camboriú", "Penha"]
  },
  {
    name: "Alto Vale",
    cities: ["Rio do Sul", "Ibirama", "Presidente Getúlio", "Lontras", "Taió", "Pouso Redondo"]
  }
];
