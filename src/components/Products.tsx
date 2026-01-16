import productsBg from "@/assets/products-bg.jpg";
import cuttingDiscs from "@/assets/products/cutting-discs.jpg";
import sprayPaints from "@/assets/products/spray-paints.jpg";
import screws from "@/assets/products/screws.jpg";
import handTools from "@/assets/products/hand-tools.jpg";
import tapes from "@/assets/products/tapes.jpg";
import construction from "@/assets/products/construction.jpg";

const products = [
  {
    image: cuttingDiscs,
    title: "Discos de corte",
    description: "Discos para corte de metal, concreto e materiais diversos. Qualidade e durabilidade garantidas.",
  },
  {
    image: sprayPaints,
    title: "Tintas spray e silicones",
    description: "Tintas spray em diversas cores, silicones e colas para suas necessidades de acabamento.",
  },
  {
    image: screws,
    title: "Parafusos industriais",
    description: "Ampla variedade de parafusos, porcas e arruelas para aplicações industriais e construção.",
  },
  {
    image: handTools,
    title: "Ferramentas manuais",
    description: "Chaves, alicates, martelos e toda linha de ferramentas manuais profissionais.",
  },
  {
    image: tapes,
    title: "Fitas e adesivos",
    description: "Fitas isolantes, adesivas, silver tape e materiais para fixação e vedação.",
  },
  {
    image: construction,
    title: "Materiais de construção",
    description: "Produtos essenciais para construção civil, reformas e manutenções em geral.",
  },
];

const Products = () => {
  return (
    <section id="produtos" className="relative section-padding overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${productsBg})` }}
      />
      <div className="absolute inset-0 bg-secondary/80" />
      <div className="container mx-auto relative z-10">
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
              className="group bg-background rounded-xl overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
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
