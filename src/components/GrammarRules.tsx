import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const grammarRules = [
  {
    grade: "1-2 класс",
    topics: [
      {
        title: "Алфавит и произношение",
        content: "26 букв английского алфавита: A-Z. Гласные: A, E, I, O, U. Согласные: все остальные. Учим произношение каждой буквы.",
        examples: ["A - эй", "B - би", "C - си"]
      },
      {
        title: "Простые предложения",
        content: "Структура: Подлежащее + Глагол. Используем глагол to be в настоящем времени: am, is, are.",
        examples: ["I am a student.", "She is happy.", "They are friends."]
      },
      {
        title: "Артикли a/an",
        content: "A - перед согласными звуками. An - перед гласными звуками.",
        examples: ["a cat", "an apple", "a book", "an egg"]
      }
    ]
  },
  {
    grade: "3-4 класс",
    topics: [
      {
        title: "Present Simple",
        content: "Для регулярных действий. Формула: I/You/We/They + глагол, He/She/It + глагол + s/es",
        examples: ["I play football.", "She plays tennis.", "They study English."]
      },
      {
        title: "Множественное число",
        content: "Обычно добавляем -s. После s, x, ch, sh добавляем -es. Y меняем на -ies.",
        examples: ["cat → cats", "box → boxes", "baby → babies"]
      },
      {
        title: "There is / There are",
        content: "There is - для единственного числа. There are - для множественного.",
        examples: ["There is a book on the table.", "There are three apples."]
      }
    ]
  },
  {
    grade: "5-6 класс",
    topics: [
      {
        title: "Past Simple",
        content: "Для действий в прошлом. Правильные глаголы: +ed. Неправильные - учим формы.",
        examples: ["I played yesterday.", "She went to school.", "We studied English."]
      },
      {
        title: "Future Simple (will)",
        content: "Для будущих действий. Формула: will + глагол.",
        examples: ["I will go tomorrow.", "She will study.", "They will play."]
      },
      {
        title: "Степени сравнения",
        content: "Положительная, сравнительная (-er/more), превосходная (-est/most).",
        examples: ["big → bigger → biggest", "beautiful → more beautiful → most beautiful"]
      }
    ]
  },
  {
    grade: "7-8 класс",
    topics: [
      {
        title: "Present Continuous",
        content: "Для действий прямо сейчас. Формула: am/is/are + глагол + ing",
        examples: ["I am reading now.", "She is playing.", "They are studying."]
      },
      {
        title: "Present Perfect",
        content: "Для действий с результатом в настоящем. Формула: have/has + глагол (3 форма)",
        examples: ["I have done my homework.", "She has visited London.", "We have seen this film."]
      },
      {
        title: "Модальные глаголы",
        content: "Can, must, should, may - выражают возможность, обязанность, совет.",
        examples: ["I can swim.", "You must study.", "She should help."]
      }
    ]
  },
  {
    grade: "9-11 класс",
    topics: [
      {
        title: "Past Continuous",
        content: "Для длительного действия в прошлом. Формула: was/were + глагол + ing",
        examples: ["I was reading at 5 pm.", "They were playing football."]
      },
      {
        title: "Условные предложения",
        content: "Type 0 (факты), Type 1 (реальное будущее), Type 2 (нереальное настоящее), Type 3 (нереальное прошлое).",
        examples: ["If I study, I will pass. (Type 1)", "If I were rich, I would travel. (Type 2)"]
      },
      {
        title: "Пассивный залог",
        content: "Когда действие совершается над подлежащим. Формула: be + глагол (3 форма)",
        examples: ["The book is written.", "The house was built.", "The letter will be sent."]
      }
    ]
  }
];

const GrammarRules = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="Library" size={24} />
          Грамматические правила
        </CardTitle>
        <CardDescription>
          Полный курс грамматики английского языка с 1 по 11 класс
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {grammarRules.map((gradeSection, gradeIndex) => (
            <div key={gradeIndex} className="border rounded-lg p-4 bg-muted/30">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Badge variant="secondary">{gradeSection.grade}</Badge>
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {gradeSection.topics.map((topic, topicIndex) => (
                  <AccordionItem key={topicIndex} value={`${gradeIndex}-${topicIndex}`}>
                    <AccordionTrigger className="text-left">
                      {topic.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p className="text-muted-foreground">{topic.content}</p>
                        <div className="bg-secondary/10 p-3 rounded-md">
                          <p className="font-medium mb-2">Примеры:</p>
                          <ul className="list-disc list-inside space-y-1">
                            {topic.examples.map((example, exIndex) => (
                              <li key={exIndex} className="text-sm">{example}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GrammarRules;
