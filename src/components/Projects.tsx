import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Elegante",
      category: "Desenvolvimento Web",
      description: "Plataforma completa de vendas online com design moderno e experiência de compra otimizada. Resultado: +150% em conversões.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80",
      tags: ["React", "E-commerce", "UI/UX"],
      results: "+150% Conversões"
    },
    {
      title: "Identidade Visual Premium",
      category: "Design & Branding",
      description: "Criação completa de identidade visual para startup tech. Logotipo, paleta de cores e aplicações em diversos materiais.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&q=80",
      tags: ["Branding", "Logo", "Visual Identity"],
      results: "Brand Recognition +200%"
    },
    {
      title: "Dashboard Analítico",
      category: "Análise de Dados",
      description: "Sistema completo de análise de dados com visualizações interativas e insights em tempo real para tomada de decisões estratégicas.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
      tags: ["Analytics", "Dashboard", "BI"],
      results: "+85% Eficiência Operacional"
    },
    {
      title: "App Mobile Inovador",
      category: "Desenvolvimento Mobile",
      description: "Aplicativo mobile com design intuitivo e funcionalidades avançadas. Interface moderna com foco na experiência do usuário.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&q=80",
      tags: ["Mobile", "UI/UX", "Innovation"],
      results: "4.8★ App Store"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-dark relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Projetos & <span className="text-gradient">Cases</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos projetos que transformaram negócios e 
            geraram resultados excepcionais para nossos clientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card/30 backdrop-blur-sm border border-border/20 rounded-2xl overflow-hidden hover:border-primary/20 hover:shadow-gold transition-smooth reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="px-3 py-1 bg-card/90 backdrop-blur-sm text-primary text-xs font-semibold rounded-full border border-primary/20">
                    {project.results}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-md border border-border/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project CTA */}
                <div className="flex gap-3">
                  <Button variant="ghost-gold" size="sm" className="flex-1 group">
                    Ver Detalhes
                    <ExternalLink className="w-3 h-3 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                  <Button variant="outline" size="sm">
                    Case Study
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="text-center mt-16 reveal" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-smoky border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Quer Ver Mais <span className="text-gradient">Projetos</span>?
            </h3>
            <p className="text-muted-foreground mb-6">
              Temos um portfólio completo com dezenas de cases de sucesso. 
              Entre em contato e conheça todos os nossos trabalhos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Portfólio Completo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="ghost-gold" size="lg">
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;