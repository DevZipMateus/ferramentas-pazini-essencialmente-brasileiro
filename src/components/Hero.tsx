import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleContactClick = () => {
    const element = document.querySelector("#contato");
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary/85" />

      {/* Yellow Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-accent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-accent z-10" />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img
              src={logo}
              alt="Pazini Ferramentas"
              className="h-24 md:h-32 w-auto mx-auto brightness-0 invert"
            />
          </div>

          {/* H1 - Company Name (visually hidden for SEO but logo is displayed) */}
          <h1 className="sr-only">Pazini Ferramentas</h1>

          {/* Slogan */}
          <p className="text-accent font-display text-2xl md:text-3xl tracking-widest mb-6 animate-fade-in animate-delay-100">
            Simples. Forte. Essencial.
          </p>

          {/* H2 - Description */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-white leading-tight mb-8 animate-fade-in animate-delay-200">
            Ferramentas e ferragens de qualidade para construir seus sonhos
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in animate-delay-300">
            Atendimento honesto e próximo, ajudando profissionais e moradores da região
            a realizarem seus trabalhos com segurança e confiança.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-400">
            <a
              href="https://wa.me/5528999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-md font-semibold text-lg hover:bg-accent/90 transition-all hover:scale-105 yellow-glow"
            >
              Fale conosco pelo WhatsApp
              <ArrowRight size={20} />
            </a>
            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/30 px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-primary transition-all"
            >
              Conheça nossos produtos
            </button>
          </div>

          {/* Hours Badge */}
          <div className="mt-16 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 animate-fade-in animate-delay-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm">
              Segunda a sexta: 7:30 às 17:30 | Sábado: 7:30 às 11:30
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
