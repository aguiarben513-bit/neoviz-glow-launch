import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Mail, Phone } from "lucide-react";
import neoVizLogo from "@/assets/neoviz-logo.png";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre as soluções digitais da NEOVIZ.", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:contato@neoviz.com.br?subject=Interesse em Soluções Digitais";
  };

  return (
    <section id="contact" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto Para <span className="text-gradient">Transformar</span> Seu Negócio?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos impulsionar 
            seu negócio com soluções digitais inovadoras e design excepcional.
          </p>
        </div>

        {/* Main CTA Section */}
        <div className="bg-gradient-smoky border border-primary/20 rounded-3xl p-8 md:p-12 mb-16 text-center reveal shadow-gold">
          <div className="mb-8">
            <img 
              src={neoVizLogo} 
              alt="NEOVIZ Logo" 
              className="h-12 w-auto mx-auto mb-4 animate-glow-pulse"
            />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Vamos Criar Algo <span className="text-gradient">Extraordinário</span> Juntos
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para transformar sua visão em realidade digital. 
              Agende uma conversa gratuita e sem compromisso.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <Button
              onClick={handleWhatsAppClick}
              variant="hero"
              size="xl"
              className="group h-auto py-6 flex-col gap-2"
            >
              <MessageCircle className="w-6 h-6 mb-1 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">WhatsApp</span>
              <span className="text-xs opacity-90">Resposta em minutos</span>
            </Button>

            <Button
              onClick={handleEmailClick}
              variant="ghost-gold"
              size="xl"
              className="group h-auto py-6 flex-col gap-2"
            >
              <Mail className="w-6 h-6 mb-1 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">E-mail</span>
              <span className="text-xs opacity-70">contato@neoviz.com.br</span>
            </Button>

            <Button
              variant="outline"
              size="xl"
              className="group h-auto py-6 flex-col gap-2 border-primary/20 hover:border-primary/40"
            >
              <Phone className="w-6 h-6 mb-1 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Telefone</span>
              <span className="text-xs opacity-70">+55 (11) 99999-9999</span>
            </Button>
          </div>

          {/* Primary CTA */}
          <div className="space-y-4">
            <Button
              onClick={handleWhatsAppClick}
              variant="hero"
              size="xl"
              className="group text-lg px-12"
            >
              Começar Meu Projeto Agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-xs text-muted-foreground">
              Consultoria inicial gratuita • Sem compromisso • Resposta garantida em 24h
            </p>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="grid md:grid-cols-3 gap-8 reveal" style={{ animationDelay: '0.3s' }}>
          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            </div>
            <h4 className="font-semibold mb-2 group-hover:text-primary transition-smooth">
              Consultoria Gratuita
            </h4>
            <p className="text-sm text-muted-foreground">
              Análise completa do seu projeto sem custo
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg transform rotate-45"></div>
            </div>
            <h4 className="font-semibold mb-2 group-hover:text-primary transition-smooth">
              Entrega Garantida
            </h4>
            <p className="text-sm text-muted-foreground">
              Prazos respeitados e qualidade assegurada
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg transform rotate-12"></div>
            </div>
            <h4 className="font-semibold mb-2 group-hover:text-primary transition-smooth">
              Suporte Contínuo
            </h4>
            <p className="text-sm text-muted-foreground">
              Acompanhamento e suporte pós-entrega
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;