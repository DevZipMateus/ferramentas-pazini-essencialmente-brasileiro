import { MapPin, Phone, Mail, Clock } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: "Rodovia Engenheiro Fabiano Vivacqua, KM00",
    subtitle: "Cachoeiro de Itapemirim - ES",
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "Pazini Ferramentas",
    subtitle: "WhatsApp disponível",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "bovialferramentas@gmail.com",
    subtitle: "Responderemos em breve",
  },
  {
    icon: Clock,
    title: "Horário de funcionamento",
    content: "Segunda a sexta: 7:30 às 17:30",
    subtitle: "Sábado: 7:30 às 11:30",
  },
];

const Contact = () => {
  return (
    <section id="contato" className="relative section-padding overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactBg})` }}
      />
      <div className="absolute inset-0 bg-background/95" />
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
            Entre em contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você com a melhor solução em ferramentas e ferragens
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="industrial-card text-center"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-display text-foreground mb-2">
                {info.title}
              </h3>
              <p className="text-foreground font-medium">{info.content}</p>
              <p className="text-muted-foreground text-sm mt-1">{info.subtitle}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-display text-white mb-4">
            Pronto para começar seu projeto?
          </h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Entre em contato conosco pelo WhatsApp e receba atendimento personalizado
            com os melhores preços da região.
          </p>
          <a
            href="https://wa.me/5528999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-5 rounded-md font-semibold text-lg hover:bg-accent/90 transition-all hover:scale-105 yellow-glow"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
