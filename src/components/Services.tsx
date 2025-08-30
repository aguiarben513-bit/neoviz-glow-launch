import { Button } from "@/components/ui/button";
import { Code, Palette, BarChart3, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Desenvolvimento Web",
      description: "Sites modernos, responsivos e otimizados para conversão. Desenvolvemos com as mais avançadas tecnologias para garantir performance e experiência única.",
      features: ["Sites Responsivos", "E-commerce", "Aplicações Web", "SEO Avançado"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Identidade Visual",
      description: "Criamos designs únicos que representam a essência da sua marca. Desde logotipos até interfaces completas, cada detalhe é pensado estrategicamente.",
      features: ["UI/UX Design", "Logotipos", "Identidade Visual", "Branding Completo"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Análise de Dados",
      description: "Transformamos dados em insights estratégicos para impulsionar seu negócio. Analytics, métricas e relatórios que geram resultados reais.",
      features: ["Google Analytics", "Relatórios Custom", "Business Intelligence", "ROI Tracking"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-smoky relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas e integradas para transformar sua presença digital 
            e gerar resultados excepcionais para seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-8 hover:bg-card/70 hover:border-primary/20 transition-smooth hover:shadow-gold reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Service Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-smooth shadow-gold">
                  {service.icon}
                </div>
              </div>

              {/* Service Content */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-smooth">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Service Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service CTA */}
              <Button 
                variant="ghost-gold" 
                className="w-full group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Saber Mais
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 reveal" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-4 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-1">Projeto Personalizado?</h3>
              <p className="text-sm text-muted-foreground">
                Conte-nos sua ideia e criaremos a solução perfeita
              </p>
            </div>
            <Button variant="hero" size="lg">
              Conversar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;