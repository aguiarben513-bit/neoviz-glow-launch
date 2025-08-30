import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import neoVizLogo from "@/assets/neoviz-logo.png";

const Hero = () => {
  const handleCTAClick = () => {
    // Configure this CTA (WhatsApp, email, or form)
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre as soluções digitais da NEOVIZ.", "_blank");
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8 animate-slide-up">
            <img 
              src={neoVizLogo} 
              alt="NEOVIZ - Soluções Digitais Inovadoras" 
              className="h-16 md:h-20 w-auto mx-auto mb-6 animate-glow-pulse"
            />
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Soluções Digitais Inovadoras
              </span>
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block mb-2">Inovação Digital</span>
              <span className="block text-gradient">
                Para Pequenos Negócios
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Transformamos ideias em experiências digitais extraordinárias. 
              <span className="text-foreground font-medium"> Design elegante, tecnologia avançada</span> e 
              <span className="text-primary font-medium"> resultados que impactam seu negócio</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <Button
              onClick={handleCTAClick}
              variant="hero"
              size="xl"
              className="group"
            >
              Transformar Meu Negócio
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="ghost-gold"
              size="xl"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Nossos Serviços
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
              Confiança e Resultados
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>+50 Projetos Entregues</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span>100% Satisfação</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span>Design Award Winner</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
          <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;