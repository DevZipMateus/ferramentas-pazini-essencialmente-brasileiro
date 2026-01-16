import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-start md:items-center">
          {/* Logo */}
          <div className="text-center sm:text-left">
            <div className="inline-block bg-white rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
              <img
                src={logo}
                alt="Pazini Ferramentas"
                className="h-10 sm:h-12 w-auto"
              />
            </div>
            <p className="text-white/70 text-xs sm:text-sm">
              Simples. Forte. Essencial.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-display text-lg sm:text-xl mb-3 sm:mb-4 text-accent">Links rápidos</h4>
            <nav className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
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
          <div className="text-center sm:text-right sm:col-span-2 md:col-span-1">
            <h4 className="font-display text-lg sm:text-xl mb-3 sm:mb-4 text-accent">Contato</h4>
            <p className="text-white/70 text-xs sm:text-sm mb-1 break-words">
              bovialferramentas@gmail.com
            </p>
            <p className="text-white/70 text-xs sm:text-sm">
              Rodovia Eng. Fabiano Vivacqua, KM00
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-6 sm:mt-10 pt-6 sm:pt-8">
          <p className="text-center text-white/50 text-xs sm:text-sm">
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
