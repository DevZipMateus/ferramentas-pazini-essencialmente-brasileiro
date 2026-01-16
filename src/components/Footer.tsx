import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="text-center md:text-left">
            <div className="inline-block bg-white rounded-lg p-3 mb-4">
              <img
                src={logo}
                alt="Pazini Ferramentas"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/70 text-sm">
              Simples. Forte. Essencial.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-display text-xl mb-4 text-accent">Links rápidos</h4>
            <nav className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#inicio" className="text-white/70 hover:text-accent transition-colors">
                Início
              </a>
              <a href="#sobre" className="text-white/70 hover:text-accent transition-colors">
                Sobre
              </a>
              <a href="#produtos" className="text-white/70 hover:text-accent transition-colors">
                Produtos
              </a>
              <a href="#contato" className="text-white/70 hover:text-accent transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-display text-xl mb-4 text-accent">Contato</h4>
            <p className="text-white/70 text-sm mb-1">
              bovialferramentas@gmail.com
            </p>
            <p className="text-white/70 text-sm">
              Rodovia Eng. Fabiano Vivacqua, KM00
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <p className="text-center text-white/50 text-sm">
            © {currentYear} Pazini Ferramentas. Todos os direitos reservados.
            <br />
            CNPJ: 64.134.432/0001-78
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
