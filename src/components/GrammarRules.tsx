import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const grammarRules = [
  {
    grade: "1 класс",
    topics: [
      {
        title: "Английский алфавит",
        content: "26 букв английского алфавита: A-Z. Заглавные и строчные буквы. Учимся их писать и произносить.",
        examples: ["A a - эй", "B b - би", "C c - си", "D d - ди"]
      },
      {
        title: "Приветствия",
        content: "Как здороваться и прощаться по-английски.",
        examples: ["Hello! - Привет!", "Good morning! - Доброе утро!", "Goodbye! - До свидания!"]
      },
      {
        title: "Цвета",
        content: "Основные цвета на английском языке.",
        examples: ["red - красный", "blue - синий", "green - зелёный", "yellow - жёлтый"]
      },
      {
        title: "Числа 1-10",
        content: "Учимся считать от 1 до 10 на английском.",
        examples: ["one - 1", "two - 2", "three - 3", "four - 4", "five - 5"]
      }
    ]
  },
  {
    grade: "2 класс",
    topics: [
      {
        title: "Глагол to be (am, is, are)",
        content: "Глагол быть в настоящем времени. I am, You are, He/She/It is, We/They are.",
        examples: ["I am a pupil. - Я ученик.", "She is happy. - Она счастлива.", "They are friends. - Они друзья."]
      },
      {
        title: "Артикли a/an",
        content: "A - перед согласными звуками. An - перед гласными звуками.",
        examples: ["a cat - кот", "an apple - яблоко", "a dog - собака", "an orange - апельсин"]
      },
      {
        title: "Местоимения",
        content: "Личные местоимения: I, you, he, she, it, we, they.",
        examples: ["I - я", "you - ты/вы", "he - он", "she - она", "it - оно", "we - мы", "they - они"]
      },
      {
        title: "Семья",
        content: "Слова про членов семьи.",
        examples: ["mother - мама", "father - папа", "sister - сестра", "brother - брат"]
      }
    ]
  },
  {
    grade: "3 класс",
    topics: [
      {
        title: "Present Simple (настоящее время)",
        content: "Для регулярных действий и фактов. I/You/We/They + глагол, He/She/It + глагол+s.",
        examples: ["I play football. - Я играю в футбол.", "She reads books. - Она читает книги.", "They live in Moscow. - Они живут в Москве."]
      },
      {
        title: "Множественное число",
        content: "Обычно добавляем -s. После s, x, ch, sh добавляем -es. Y меняется на -ies.",
        examples: ["cat → cats", "box → boxes", "baby → babies", "toy → toys"]
      },
      {
        title: "Have got / Has got",
        content: "Чтобы сказать, что у нас что-то есть. I/You/We/They have got. He/She/It has got.",
        examples: ["I have got a bike. - У меня есть велосипед.", "She has got a cat. - У неё есть кот."]
      },
      {
        title: "There is / There are",
        content: "There is - для единственного числа. There are - для множественного числа.",
        examples: ["There is a book on the table. - На столе есть книга.", "There are five apples. - Есть пять яблок."]
      }
    ]
  },
  {
    grade: "4 класс",
    topics: [
      {
        title: "Past Simple (прошедшее время)",
        content: "Для действий в прошлом. Правильные глаголы: глагол+ed. Неправильные глаголы учим отдельно.",
        examples: ["I played yesterday. - Я играл вчера.", "She went to school. - Она ходила в школу.", "We watched a film. - Мы смотрели фильм."]
      },
      {
        title: "Вопросы с Do/Does",
        content: "Do - для I/you/we/they. Does - для he/she/it. Ставим перед подлежащим.",
        examples: ["Do you like ice cream? - Ты любишь мороженое?", "Does she play tennis? - Она играет в теннис?"]
      },
      {
        title: "Модальный глагол Can",
        content: "Can - мочь, уметь. Can + глагол без частицы to.",
        examples: ["I can swim. - Я умею плавать.", "She can dance. - Она умеет танцевать.", "Can you help me? - Ты можешь помочь мне?"]
      },
      {
        title: "Предлоги места",
        content: "Где что находится: in (в), on (на), under (под), near (рядом).",
        examples: ["in the box - в коробке", "on the table - на столе", "under the bed - под кроватью", "near the window - у окна"]
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
          Основы грамматики английского языка для начальной школы (1-4 класс)
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