import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Contato() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <section className="py-24 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="section-title text-accent">Fale Conosco</h1>
              <p className="font-space text-gray-300 mb-12 uppercase tracking-widest">
                Estamos prontos para atender seu projeto em qualquer lugar de Santa Catarina.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-primary p-4 rounded-xl text-2xl">📍</div>
                  <div>
                    <h3 className="font-syncopate font-bold text-white mb-1 uppercase text-sm">Localização</h3>
                    <p className="text-gray-400 font-space">Blumenau - Santa Catarina, Brasil</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-accent p-4 rounded-xl text-2xl">📞</div>
                  <div>
                    <h3 className="font-syncopate font-bold text-white mb-1 uppercase text-sm">Canais de Atendimento</h3>
                    <p className="text-gray-400 font-space">WhatsApp: (47) 98830-5641</p>
                    <p className="text-gray-400 font-space">E-mail: contato@pulsecorebr.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-primary p-4 rounded-xl text-2xl">⏰</div>
                  <div>
                    <h3 className="font-syncopate font-bold text-white mb-1 uppercase text-sm">Horário Comercial</h3>
                    <p className="text-gray-400 font-space">Segunda a Sexta: 08h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card">
              <h2 className="font-syncopate text-2xl font-bold mb-8 text-white uppercase tracking-tighter">Enviar Mensagem</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-space">Nome Completo</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-accent outline-none transition-colors" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-space">E-mail Corporativo</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-accent outline-none transition-colors" placeholder="email@empresa.com.br" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-space">Assunto</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-accent outline-none transition-colors appearance-none">
                    <option className="bg-secondary">Selecione uma opção</option>
                    <option className="bg-secondary">Orçamento de CFTV</option>
                    <option className="bg-secondary">Infraestrutura de Rede</option>
                    <option className="bg-secondary">Energia Solar</option>
                    <option className="bg-secondary">Outros</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-space">Mensagem</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-accent outline-none transition-colors" placeholder="Como podemos ajudar?"></textarea>
                </div>
                <button type="submit" className="btn-accent w-full py-4 shadow-xl">
                  ENVIAR SOLICITAÇÃO
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
