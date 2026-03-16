import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function NavegaAoVivo() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <section className="py-24 bg-secondary text-white min-h-[80vh] flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12 inline-block bg-primary/20 p-6 rounded-full animate-pulse">
            <span className="text-6xl">📽️</span>
          </div>
          <h1 className="section-title text-accent">Acesso Remoto</h1>
          <p className="font-space text-gray-300 text-lg mb-12 uppercase tracking-widest leading-relaxed">
            Área restrita para clientes Pulsecorebr. Acesse as imagens do seu sistema de segurança em tempo real, de qualquer lugar do mundo.
          </p>
          
          <div className="glass-card max-w-md mx-auto p-10 border-t-4 border-accent">
            <h2 className="font-syncopate text-xl font-bold mb-8 uppercase text-white">Login de Monitoramento</h2>
            <form className="space-y-6">
              <div>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg py-4 px-4 text-white focus:border-accent outline-none font-space text-sm" placeholder="ID DO DISPOSITIVO / USUÁRIO" />
              </div>
              <div>
                <input type="password" className="w-full bg-white/5 border border-white/10 rounded-lg py-4 px-4 text-white focus:border-accent outline-none font-space text-sm" placeholder="SENHA DE ACESSO" />
              </div>
              <button type="submit" className="btn-accent w-full py-4 font-bold shadow-2xl">
                ACESSAR CÂMERAS
              </button>
            </form>
            <p className="mt-8 text-xs text-gray-500 font-space uppercase tracking-tighter">
              Esqueceu sua senha ou precisa de suporte? <br />
              <a href="https://wa.me/5547988305641" className="text-primary-light hover:text-white transition-colors">Clique aqui para falar com o suporte.</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
