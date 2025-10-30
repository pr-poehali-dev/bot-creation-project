import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Веб-разработка",
      description: "Создание современных и функциональных веб-сайтов с адаптивным дизайном",
      icon: "Code2",
      color: "bg-primary"
    },
    {
      title: "Дизайн интерфейсов",
      description: "Разработка уникального UX/UI дизайна для вашего проекта",
      icon: "Palette",
      color: "bg-secondary"
    },
    {
      title: "Мобильные приложения",
      description: "Разработка нативных и кроссплатформенных мобильных приложений",
      icon: "Smartphone",
      color: "bg-accent"
    },
    {
      title: "SEO оптимизация",
      description: "Продвижение сайта в поисковых системах и увеличение трафика",
      icon: "TrendingUp",
      color: "bg-primary"
    },
    {
      title: "Брендинг",
      description: "Создание уникального фирменного стиля и айдентики",
      icon: "Sparkles",
      color: "bg-secondary"
    },
    {
      title: "Поддержка",
      description: "Техническая поддержка и обслуживание ваших проектов 24/7",
      icon: "HeadphonesIcon",
      color: "bg-accent"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            WebStudio
          </h1>
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
          </nav>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Связаться
          </Button>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Создаём
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"> цифровые решения </span>
                для вашего бизнеса
              </h2>
              <p className="text-xl text-muted-foreground">
                Разрабатываем современные веб-сайты, приложения и дизайн с использованием новейших технологий
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Начать проект
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть работы
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/2d18bf5c-47ad-42f5-8cf3-682c0d205f53/files/202bec22-7e68-47c4-9b0b-0f020b25cad1.jpg" 
                alt="Hero" 
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Наши <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">услуги</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр digital-услуг для развития вашего бизнеса в интернете
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon name={service.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button variant="ghost" className="group">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Готовы начать проект?
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in">
            Свяжитесь с нами и мы обсудим ваши идеи
          </p>
          <Button size="lg" variant="secondary" className="animate-scale-in">
            <Icon name="Mail" size={20} className="mr-2" />
            Написать нам
          </Button>
        </div>
      </section>

      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                WebStudio
              </h3>
              <p className="text-muted-foreground">
                Создаём цифровые решения для вашего успеха
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#home" className="hover:text-primary transition-colors">Главная</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Услуги</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@webstudio.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white">
                  <Icon name="Github" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-secondary hover:text-white">
                  <Icon name="Linkedin" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-accent hover:text-white">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; 2024 WebStudio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
