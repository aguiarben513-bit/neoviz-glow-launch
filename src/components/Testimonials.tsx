import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marina Silva",
      company: "Boutique Elegant",
      role: "Proprietária",
      content: "A NEOVIZ transformou completamente minha loja online. O design elegante e a funcionalidade impecável triplicaram minhas vendas em apenas 3 meses.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&q=80"
    },
    {
      name: "Carlos Eduardo",
      company: "TechStart Solutions",
      role: "CEO",
      content: "Profissionalismo excepcional! A identidade visual criada pela NEOVIZ elevou nossa marca a outro nível. Recomendo sem hesitação.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
    },
    {
      name: "Ana Rodrigues",
      company: "Consultoria Digital",
      role: "Diretora",
      content: "O dashboard de analytics desenvolvido pela NEOVIZ revolucionou nossa tomada de decisões. Dados claros, insights valiosos e interface intuitiva.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
    }
  ];

  const partners = [
    { name: "TechCorp", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&q=80" },
    { name: "Digital Plus", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&q=80" },
    { name: "Innovation Hub", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&q=80" },
    { name: "StartUp Valley", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&q=80" },
    { name: "Future Brands", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&q=80" }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-40 h-40 bg-primary/8 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 left-1/3 w-56 h-56 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              O Que Dizem Nossos <span className="text-gradient">Clientes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A confiança dos nossos clientes é nossa maior conquista. 
              Veja o que empresários falam sobre nossos serviços.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-smoky border border-border/20 rounded-2xl p-6 hover:border-primary/20 hover:shadow-gold transition-smooth reveal group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/60 group-hover:text-primary transition-smooth" />
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className="w-4 h-4 fill-primary text-primary" 
                    />
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners & Clients */}
        <div className="reveal" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold text-center mb-12">
            Empresas que <span className="text-gradient">Confiam</span> em Nós
          </h3>
          
          <div className="bg-card/20 backdrop-blur-sm border border-border/20 rounded-2xl p-8">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="grayscale hover:grayscale-0 transition-smooth opacity-60 hover:opacity-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-24 h-12 bg-muted/20 rounded-lg flex items-center justify-center border border-border/10 hover:border-primary/20 transition-smooth">
                    <span className="text-xs font-medium text-muted-foreground">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Metrics */}
            <div className="mt-8 pt-8 border-t border-border/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="group">
                  <div className="text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-smooth">
                    98%
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Taxa de Satisfação
                  </div>
                </div>
                <div className="group">
                  <div className="text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-smooth">
                    4.9★
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Avaliação Média
                  </div>
                </div>
                <div className="group">
                  <div className="text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-smooth">
                    85%
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Clientes Recorrentes
                  </div>
                </div>
                <div className="group">
                  <div className="text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-smooth">
                    72h
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Tempo de Resposta
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;