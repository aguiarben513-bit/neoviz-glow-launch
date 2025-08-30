import { Button } from "@/components/ui/button";
import { Award, Users, Lightbulb, Target } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Award className="w-6 h-6" />, number: "50+", label: "Projetos Entregues" },
    { icon: <Users className="w-6 h-6" />, number: "30+", label: "Clientes Satisfeitos" },
    { icon: <Lightbulb className="w-6 h-6" />, number: "5+", label: "Anos de Experiência" },
    { icon: <Target className="w-6 h-6" />, number: "100%", label: "Foco em Resultados" }
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="reveal">
            <div className="mb-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Quem Somos <span className="text-gradient">NEOVIZ</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                Somos uma empresa de <span className="text-foreground font-semibold">soluções digitais inovadoras</span> especializada 
                em transformar pequenos negócios através da tecnologia e design excepcional.
              </p>
              
              <p className="text-muted-foreground">
                Nossa missão é <span className="text-primary font-semibold">democratizar o acesso à inovação digital</span>, 
                oferecendo serviços de alta qualidade que antes eram exclusivos de grandes empresas.
              </p>

              <p className="text-muted-foreground">
                Combinamos <span className="text-foreground font-semibold">experiência técnica, visão estratégica</span> e 
                <span className="text-primary font-semibold"> paixão por resultados</span> para criar soluções que 
                realmente impactam o crescimento dos nossos clientes.
              </p>
            </div>

            <div className="mt-10">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conhecer Nossa História
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="reveal" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-smoky border border-border/20 rounded-2xl p-6 text-center group hover:border-primary/20 hover:shadow-gold transition-smooth"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2 group-hover:scale-110 transition-smooth">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="mt-8 bg-card/30 backdrop-blur-sm border border-primary/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Nossa Visão
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ser referência em inovação digital para pequenos negócios, 
                criando soluções que transformam ideias em sucessos digitais sustentáveis.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24 reveal" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold text-center mb-12">
            Nossos <span className="text-gradient">Valores</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Inovação Constante",
                description: "Sempre à frente das tendências tecnológicas e de design."
              },
              {
                title: "Excelência em Entrega",
                description: "Qualidade superior em cada projeto, sem exceções."
              },
              {
                title: "Parceria Genuína",
                description: "Seu sucesso é nosso sucesso. Crescemos juntos."
              }
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-2 h-2 bg-primary rounded-full mx-auto mb-4 group-hover:scale-150 transition-smooth"></div>
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;