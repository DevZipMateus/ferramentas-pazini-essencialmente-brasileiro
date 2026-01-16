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
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutBg})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
            Sobre a Pazini Ferramentas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa história, missão e os valores que nos guiam
          </p>
        </div>

        {/* Mission, Vision, History Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <div className="industrial-card">
            <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-display text-foreground mb-3">Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Oferecer ferramentas e materiais de ferragens de qualidade, com atendimento
              honesto e próximo, ajudando clientes, profissionais e moradores da região a
              realizarem seus trabalhos com segurança, eficiência e confiança.
            </p>
          </div>

          {/* Vision */}
          <div className="industrial-card">
            <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <Eye className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-display text-foreground mb-3">Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser reconhecida como a principal loja de ferragens e ferramentas da região,
              referência em atendimento, variedade de produtos e confiança, crescendo de
              forma sólida e responsável junto à comunidade local.
            </p>
          </div>

          {/* History */}
          <div className="industrial-card md:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <History className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-display text-foreground mb-3">Nossa história</h3>
            <p className="text-muted-foreground leading-relaxed">
              A Pazini Ferramentas surgiu a partir da iniciativa de Daniel em empreender
              no setor de ferragens. Com a adesão de Ruan ao projeto, a empresa foi
              estruturada com foco em trabalho, organização e atendimento às necessidades
              do mercado local de Cachoeiro de Itapemirim e região.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-primary rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-8 h-8 text-accent" />
            <h3 className="text-3xl font-display text-white">Nossos valores</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-white/10 hover:border-accent/50 transition-colors"
              >
                <span className="text-3xl mb-3 block">{value.icon}</span>
                <h4 className="text-xl font-display text-white mb-2">{value.title}</h4>
                <p className="text-white/70 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
