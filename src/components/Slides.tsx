import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Slide {
  title: string;
  subtitle: string;
  content: string[];
  category: string;
}

const slidesData: Slide[] = [
  {
    title: "Tenses Overview",
    subtitle: "Обзор времён английского языка",
    category: "Grammar",
    content: [
      "Present Simple - регулярные действия и факты",
      "Present Continuous - действия прямо сейчас",
      "Present Perfect - результат в настоящем",
      "Past Simple - завершённые действия в прошлом",
      "Past Continuous - процесс в прошлом",
      "Future Simple - предсказания и решения",
    ]
  },
  {
    title: "Articles: a, an, the",
    subtitle: "Артикли в английском языке",
    category: "Grammar",
    content: [
      "A / AN - неопределённый артикль (один из многих)",
      "A - перед согласными звуками (a cat, a university)",
      "AN - перед гласными звуками (an apple, an hour)",
      "THE - определённый артикль (конкретный предмет)",
      "Zero article - без артикля (cities, life, sports)",
    ]
  },
  {
    title: "Prepositions of Time",
    subtitle: "Предлоги времени",
    category: "Vocabulary",
    content: [
      "IN - месяцы, годы, сезоны (in May, in 2023, in summer)",
      "ON - дни недели, даты (on Monday, on 5th March)",
      "AT - время, праздники (at 5 o'clock, at Christmas)",
      "FOR - продолжительность (for 3 hours, for a week)",
      "SINCE - начальная точка (since Monday, since 2020)",
    ]
  },
  {
    title: "Question Words",
    subtitle: "Вопросительные слова",
    category: "Grammar",
    content: [
      "WHAT - что? (What is your name?)",
      "WHERE - где? (Where do you live?)",
      "WHEN - когда? (When does it start?)",
      "WHO - кто? (Who is that person?)",
      "WHY - почему? (Why are you late?)",
      "HOW - как? (How do you do it?)",
      "WHICH - который? (Which color do you prefer?)",
    ]
  },
  {
    title: "Modal Verbs",
    subtitle: "Модальные глаголы",
    category: "Grammar",
    content: [
      "CAN - умею, могу (физическая возможность)",
      "COULD - мог бы (вежливая просьба, прошлое)",
      "MAY - могу (разрешение, возможность)",
      "MIGHT - возможно (меньшая вероятность)",
      "MUST - должен (обязательство)",
      "SHOULD - следует (совет, рекомендация)",
      "WOULD - бы (условное наклонение)",
    ]
  },
  {
    title: "Phrasal Verbs - Common",
    subtitle: "Популярные фразовые глаголы",
    category: "Vocabulary",
    content: [
      "GET UP - вставать (I get up at 7 am)",
      "WAKE UP - просыпаться",
      "LOOK FOR - искать что-то",
      "LOOK AFTER - присматривать, заботиться",
      "GIVE UP - сдаваться, бросать",
      "TURN ON / OFF - включать / выключать",
      "TAKE OFF - снимать одежду, взлетать",
    ]
  },
  {
    title: "Conditionals Types",
    subtitle: "Типы условных предложений",
    category: "Grammar",
    content: [
      "Type 0: If + Present, Present (факты)",
      "Type 1: If + Present, will + verb (реальное будущее)",
      "Type 2: If + Past, would + verb (нереальное настоящее)",
      "Type 3: If + Past Perfect, would have + V3 (нереальное прошлое)",
      "Mixed: If + Past Perfect, would + verb (смешанное)",
    ]
  },
  {
    title: "Word Formation",
    subtitle: "Словообразование",
    category: "Vocabulary",
    content: [
      "Prefixes: UN-, DIS-, RE-, PRE-, POST-",
      "Suffixes for nouns: -TION, -MENT, -NESS, -ER",
      "Suffixes for adjectives: -FUL, -LESS, -IVE, -ABLE",
      "Suffixes for verbs: -IZE, -IFY, -EN",
      "Suffixes for adverbs: -LY",
    ]
  },
];

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState<"grid" | "slideshow">("grid");

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setViewMode("slideshow");
  };

  if (viewMode === "slideshow") {
    const slide = slidesData[currentSlide];
    return (
      <Card className="min-h-[600px] flex flex-col">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{slide.category}</Badge>
              <span className="text-sm text-muted-foreground">
                {currentSlide + 1} / {slidesData.length}
              </span>
            </div>
            <Button onClick={() => setViewMode("grid")} variant="outline" size="sm">
              <Icon name="Grid" size={18} className="mr-2" />
              Все слайды
            </Button>
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-center p-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">{slide.title}</h2>
            <p className="text-xl text-muted-foreground">{slide.subtitle}</p>
          </div>
          <div className="space-y-4">
            {slide.content.map((item, index) => (
              <div
                key={index}
                className="bg-secondary/20 p-4 rounded-lg text-lg font-medium animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
              </div>
            ))}
          </div>
        </CardContent>
        <CardContent className="border-t py-4">
          <div className="flex justify-between items-center">
            <Button onClick={prevSlide} variant="outline" size="lg">
              <Icon name="ChevronLeft" size={20} className="mr-2" />
              Назад
            </Button>
            <div className="flex gap-2">
              {slidesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <Button onClick={nextSlide} size="lg">
              Далее
              <Icon name="ChevronRight" size={20} className="ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Presentation" size={24} />
            Учебные слайды
          </CardTitle>
          <CardDescription>
            Наглядные материалы по грамматике и лексике английского языка
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {slidesData.map((slide, index) => (
          <Card
            key={index}
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => goToSlide(index)}
          >
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge variant="secondary">{slide.category}</Badge>
                <Icon name="Eye" size={18} className="text-muted-foreground" />
              </div>
              <CardTitle className="text-xl">{slide.title}</CardTitle>
              <CardDescription>{slide.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {slide.content.length} пунктов • Нажмите для просмотра
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Slides;
