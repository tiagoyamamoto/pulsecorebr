import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <span className="font-syncopate text-2xl font-bold tracking-tighter block mb-6">
              PULSE<span className="text-accent">CORE</span>
            </span>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Integradora de tecnologia em Blumenau/SC. Especialistas em infraestrutura, segurança eletrônica e energia sustentável.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons Placeholder */}
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-xs">IG</div>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-xs">FB</div>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-xs">LI</div>
            </div>
          </div>

          <div>
            <h3 className="font-syncopate text-lg font-bold mb-6 text-accent">Serviços</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/servicos/cftv" className="hover:text-white transition-colors underline-offset-4 hover:underline">CFTV e Monitoramento</Link></li>
              <li><Link href="/servicos/redes" className="hover:text-white transition-colors underline-offset-4 hover:underline">Infraestrutura de Rede</Link></li>
              <li><Link href="/servicos/internet" className="hover:text-white transition-colors underline-offset-4 hover:underline">Internet Empresarial</Link></li>
              <li><Link href="/servicos/automacao" className="hover:text-white transition-colors underline-offset-4 hover:underline">Automação</Link></li>
              <li><Link href="/servicos/energia-solar" className="hover:text-white transition-colors underline-offset-4 hover:underline">Energia Solar</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-syncopate text-lg font-bold mb-6 text-accent">Segmentos</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/segmentos/empresas" className="hover:text-white transition-colors underline-offset-4 hover:underline">Empresas e Indústrias</Link></li>
              <li><Link href="/segmentos/condominios" className="hover:text-white transition-colors underline-offset-4 hover:underline">Condomínios</Link></li>
              <li><Link href="/segmentos/residencias" className="hover:text-white transition-colors underline-offset-4 hover:underline">Residências</Link></li>
              <li><Link href="/segmentos/governo" className="hover:text-white transition-colors underline-offset-4 hover:underline">Prefeituras e Governo</Link></li>
              <li><Link href="/segmentos/eventos" className="hover:text-white transition-colors underline-offset-4 hover:underline">Eventos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-syncopate text-lg font-bold mb-6 text-accent">Atuação SC</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white font-bold mb-1">Vale do Itajaí</p>
                <p className="text-gray-400">Blumenau, Brusque, Gaspar, Indaial, Timbó, Pomerode.</p>
              </div>
              <div>
                <p className="text-white font-bold mb-1">Litoral Norte</p>
                <p className="text-gray-400">Itajaí, Balneário Camboriú, Navegantes, Itapema.</p>
              </div>
              <div>
                <p className="text-white font-bold mb-1">Alto Vale</p>
                <p className="text-gray-400">Rio do Sul, Ibirama.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Pulsecorebr. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacidade" className="hover:text-white">Privacidade</Link>
            <Link href="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
