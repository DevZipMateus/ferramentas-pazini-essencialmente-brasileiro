import { Target, Eye, Heart, History } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const values = [
  { icon: "💎", title: "Honestidade", description: "Transparência nas vendas, nos preços e nas relações" },
  { icon: "🤝", title: "Compromisso", description: "Atender bem, ouvir e buscar sempre a melhor solução" },
  { icon: "⭐", title: "Qualidade", description: "Trabalhar com produtos confiáveis e duráveis" },
  { icon: "🙏", title: "Respeito", description: "Com clientes, parceiros, colaboradores e a comunidade" },
  { icon: "🔧", title: "Trabalho", description: "Valorizar o esforço diário e soluções práticas" },
  { icon: "✅", title: "Responsabilidade", description: "Cuidar do negócio, das pessoas e da reputação" },
];

const About = () => {
  return (
    <section id="sobre" className="relative section-padding overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${aboutBg})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="accent-line mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-foreground mb-3 sm:mb-4 px-2">
            Sobre a Pazini Ferramentas
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Conheça nossa história, missão e os valores que nos guiam
          </p>
        </div>

        {/* Mission, Vision, History Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-16">
          {/* Mission */}
          <div className="industrial-card">
            <div className="w-12 sm:w-14 h-12 sm:h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <Target className="w-6 sm:w-7 h-6 sm:h-7 text-accent" />
            </div>
            <h3 className="text-xl sm:text-2xl font-display text-foreground mb-2 sm:mb-3">Missão</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Oferecer ferramentas e materiais de ferragens de qualidade, com atendimento
              honesto e próximo, ajudando clientes, profissionais e moradores da região a
              realizarem seus trabalhos com segurança, eficiência e confiança.
            </p>
          </div>

          {/* Vision */}
          <div className="industrial-card">
            <div className="w-12 sm:w-14 h-12 sm:h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <Eye className="w-6 sm:w-7 h-6 sm:h-7 text-accent" />
            </div>
            <h3 className="text-xl sm:text-2xl font-display text-foreground mb-2 sm:mb-3">Visão</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Ser reconhecida como a principal loja de ferragens e ferramentas da região,
              referência em atendimento, variedade de produtos e confiança, crescendo de
              forma sólida e responsável junto à comunidade local.
            </p>
          </div>

          {/* History */}
          <div className="industrial-card md:col-span-2 lg:col-span-1">
            <div className="w-12 sm:w-14 h-12 sm:h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <History className="w-6 sm:w-7 h-6 sm:h-7 text-accent" />
            </div>
            <h3 className="text-xl sm:text-2xl font-display text-foreground mb-2 sm:mb-3">Nossa história</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              A Pazini Ferramentas surgiu a partir da iniciativa de Daniel em empreender
              no setor de ferragens. Com a adesão de Ruan ao projeto, a empresa foi
              estruturada com foco em trabalho, organização e atendimento às necessidades
              do mercado local de Cachoeiro de Itapemirim e região.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-primary rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <Heart className="w-6 sm:w-8 h-6 sm:h-8 text-accent" />
            <h3 className="text-2xl sm:text-3xl font-display text-white">Nossos valores</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-white/10 hover:border-accent/50 transition-colors"
              >
                <span className="text-2xl sm:text-3xl mb-2 sm:mb-3 block">{value.icon}</span>
                <h4 className="text-lg sm:text-xl font-display text-white mb-1 sm:mb-2">{value.title}</h4>
                <p className="text-white/70 text-xs sm:text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
