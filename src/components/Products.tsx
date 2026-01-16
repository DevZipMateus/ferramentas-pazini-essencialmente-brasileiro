import { Disc, Paintbrush, Wrench, Cog, Package, Hammer } from "lucide-react";

const products = [
  {
    icon: Disc,
    title: "Discos de corte",
    description: "Discos para corte de metal, concreto e materiais diversos. Qualidade e durabilidade garantidas.",
  },
  {
    icon: Paintbrush,
    title: "Tintas spray e silicones",
    description: "Tintas spray em diversas cores, silicones e colas para suas necessidades de acabamento.",
  },
  {
    icon: Cog,
    title: "Parafusos industriais",
    description: "Ampla variedade de parafusos, porcas e arruelas para aplicações industriais e construção.",
  },
  {
    icon: Wrench,
    title: "Ferramentas manuais",
    description: "Chaves, alicates, martelos e toda linha de ferramentas manuais profissionais.",
  },
  {
    icon: Package,
    title: "Fitas e adesivos",
    description: "Fitas isolantes, adesivas, silver tape e materiais para fixação e vedação.",
  },
  {
    icon: Hammer,
    title: "Materiais de construção",
    description: "Produtos essenciais para construção civil, reformas e manutenções em geral.",
  },
];

const Products = () => {
  return (
    <section id="produtos" className="section-padding bg-secondary">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
            Nossos produtos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atuamos no mercado de ferragens e ferramentas, trazendo solução e praticidade
            para quem quer construir um sonho
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-background rounded-xl p-6 md:p-8 border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <product.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-2xl font-display text-foreground mb-3">
                {product.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Não encontrou o que procura? Entre em contato conosco!
          </p>
          <a
            href="https://wa.me/5528999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-md font-semibold hover:bg-accent/90 transition-all hover:scale-105"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
