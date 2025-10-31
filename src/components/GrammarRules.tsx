import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const grammarRules = [
  {
    grade: "5 класс",
    topics: [
      {
        title: "Present Simple vs Present Continuous",
        content: "Present Simple для регулярных действий и фактов. Present Continuous для действий прямо сейчас.",
        examples: ["I go to school every day. (Present Simple)", "I am going to school now. (Present Continuous)", "She likes tea. (факт)", "She is drinking tea. (сейчас)"]
      },
      {
        title: "Past Simple - Правильные и неправильные глаголы",
        content: "Правильные глаголы: глагол + ed. Неправильные глаголы нужно учить наизусть (go-went, see-saw).",
        examples: ["I played football yesterday. (правильный)", "We went to the cinema. (неправильный)", "She visited London last year."]
      },
      {
        title: "Степени сравнения прилагательных",
        content: "Короткие: -er/-est (tall-taller-tallest). Длинные: more/most (beautiful-more beautiful-most beautiful).",
        examples: ["tall → taller → tallest", "beautiful → more beautiful → most beautiful", "good → better → best (исключение)"]
      },
      {
        title: "Исчисляемые и неисчисляемые существительные",
        content: "Исчисляемые можно посчитать (apple, book). Неисчисляемые нельзя (water, milk, sugar).",
        examples: ["three apples (исчисляемое)", "some water (неисчисляемое)", "much money (неисчисляемое)", "many books (исчисляемое)"]
      }
    ]
  },
  {
    grade: "6 класс",
    topics: [
      {
        title: "Present Perfect",
        content: "Действие завершено, но результат важен сейчас. have/has + V3 (причастие прошедшего времени).",
        examples: ["I have finished my homework. (Я закончил домашку - она готова)", "She has been to Paris. (Она была в Париже - у неё есть опыт)", "We have seen this film. (Мы видели этот фильм)"]
      },
      {
        title: "Future Simple (will)",
        content: "Будущее время: will + глагол. Используется для предсказаний, спонтанных решений, обещаний.",
        examples: ["I will help you. (Я помогу тебе)", "It will rain tomorrow. (Завтра будет дождь)", "She will be happy. (Она будет счастлива)"]
      },
      {
        title: "Модальные глаголы: must, should, have to",
        content: "Must - должен (строгое обязательство). Should - следует (совет). Have to - приходится (внешнее обязательство).",
        examples: ["You must do your homework. (строгое требование)", "You should read more. (совет)", "I have to wake up early. (вынужден)"]
      },
      {
        title: "Вопросительные слова",
        content: "Who (кто), What (что), Where (где), When (когда), Why (почему), How (как), Which (который).",
        examples: ["What is your name?", "Where do you live?", "When does it start?", "How are you?"]
      }
    ]
  },
  {
    grade: "7 класс",
    topics: [
      {
        title: "Past Continuous",
        content: "Длительное действие в прошлом: was/were + глагол+ing.",
        examples: ["I was reading at 5 pm yesterday.", "They were playing football when it started raining.", "She was cooking dinner."]
      },
      {
        title: "Present Perfect Continuous",
        content: "Действие началось в прошлом и продолжается до сих пор: have/has been + глагол+ing.",
        examples: ["I have been learning English for 5 years.", "She has been working here since 2020.", "They have been waiting for an hour."]
      },
      {
        title: "Условные предложения 1 типа (First Conditional)",
        content: "Реальное условие в будущем: If + Present Simple, will + глагол.",
        examples: ["If it rains, I will stay home.", "If you study hard, you will pass the exam.", "We will go to the park if the weather is nice."]
      },
      {
        title: "Страдательный залог (Passive Voice) - Present/Past",
        content: "Когда действие совершается над объектом: be + V3.",
        examples: ["English is spoken here. (Present)", "The book was written in 1990. (Past)", "The house is being built. (Present Continuous Passive)"]
      }
    ]
  },
  {
    grade: "8 класс",
    topics: [
      {
        title: "Past Perfect",
        content: "Действие завершилось до другого действия в прошлом: had + V3.",
        examples: ["I had finished my homework before she called.", "He had already left when I arrived.", "They had never seen snow before they moved to Russia."]
      },
      {
        title: "Reported Speech (Косвенная речь)",
        content: "Передача чужих слов: меняем время глагола на одно назад, местоимения, указатели времени.",
        examples: ["She said: 'I am tired.' → She said (that) she was tired.", "He said: 'I will come.' → He said he would come.", "They said: 'We have seen it.' → They said they had seen it."]
      },
      {
        title: "Условные предложения 2 типа (Second Conditional)",
        content: "Нереальное условие в настоящем: If + Past Simple, would + глагол.",
        examples: ["If I had a car, I would drive to work.", "If she knew English, she would get a better job.", "We would travel more if we had time."]
      },
      {
        title: "Модальные глаголы прошедшего времени",
        content: "Could have, should have, must have + V3 для выражения прошлых ситуаций.",
        examples: ["You should have studied harder. (тебе следовало учиться усерднее)", "He must have forgotten. (он, должно быть, забыл)", "She could have helped us. (она могла бы помочь)"]
      }
    ]
  },
  {
    grade: "9 класс",
    topics: [
      {
        title: "Future Perfect",
        content: "Действие будет завершено к определённому моменту в будущем: will have + V3.",
        examples: ["I will have finished by 5 pm.", "She will have graduated by next year.", "They will have left before you arrive."]
      },
      {
        title: "Условные предложения 3 типа (Third Conditional)",
        content: "Нереальное условие в прошлом: If + Past Perfect, would have + V3.",
        examples: ["If I had studied, I would have passed the exam.", "If she had known, she would have told us.", "We would have come if we had had time."]
      },
      {
        title: "Смешанные условные предложения (Mixed Conditionals)",
        content: "Комбинация разных типов условных предложений.",
        examples: ["If I had studied harder (прошлое), I would be a doctor now (настоящее).", "If I were rich (настоящее), I would have bought that house (прошлое)."]
      },
      {
        title: "Косвенные вопросы (Indirect Questions)",
        content: "Вежливые вопросы: порядок слов как в утверждении, без do/does/did.",
        examples: ["Where is he? → Could you tell me where he is?", "What did she say? → Do you know what she said?", "Is it expensive? → I wonder if it is expensive."]
      }
    ]
  },
  {
    grade: "10 класс",
    topics: [
      {
        title: "Инверсия (Inversion)",
        content: "Изменение порядка слов для эмфазы. Используется в формальном стиле.",
        examples: ["Never have I seen such a beautiful sunset.", "Hardly had we arrived when it started raining.", "Not only did he apologize, but he also offered compensation."]
      },
      {
        title: "Wish / If only",
        content: "Выражение сожаления. Wish + Past для настоящего, Wish + Past Perfect для прошлого.",
        examples: ["I wish I were taller. (сожаление о настоящем)", "I wish I had studied harder. (сожаление о прошлом)", "If only I could speak French! (мечта)"]
      },
      {
        title: "Emphatic structures (Эмфатические конструкции)",
        content: "It is/was ... that/who для выделения элементов предложения.",
        examples: ["It was John who broke the window. (именно Джон)", "It is in Paris that I want to live. (именно в Париже)", "It was yesterday that I saw her. (именно вчера)"]
      },
      {
        title: "Subjunctive Mood (Сослагательное наклонение)",
        content: "Формальные конструкции с suggest, recommend, insist, demand.",
        examples: ["I suggest that he be present. (а не 'is')", "She insisted that we stay. (а не 'stayed')", "The doctor recommended that she take medicine."]
      }
    ]
  },
  {
    grade: "11 класс",
    topics: [
      {
        title: "Артикли: сложные случаи",
        content: "Нулевой артикль, определённый артикль с географическими названиями, абстрактными понятиями.",
        examples: ["the USA, the UK, the Netherlands (страны с артиклем)", "Life is beautiful. (абстрактное понятие)", "Prison, hospital, school - без артикля если по назначению"]
      },
      {
        title: "Причастные обороты (Participle Clauses)",
        content: "Замена придаточных предложений причастными оборотами.",
        examples: ["Walking down the street, I saw my friend. (= While I was walking...)", "Having finished the work, she went home. (= After she had finished...)", "Written in 1850, this book is still popular."]
      },
      {
        title: "Герундий vs Инфинитив",
        content: "Некоторые глаголы требуют герундия, другие - инфинитива, третьи - меняют смысл.",
        examples: ["I enjoy reading. (герундий)", "I want to read. (инфинитив)", "I stopped smoking. (бросил курить) vs I stopped to smoke. (остановился покурить)"]
      },
      {
        title: "Фразовые глаголы: продвинутый уровень",
        content: "Сложные фразовые глаголы с несколькими значениями.",
        examples: ["Put up with - терпеть, мириться", "Come up with - придумать", "Look forward to - с нетерпением ждать", "Run out of - закончиться (о запасах)"]
      }
    ]
  }
];

const GrammarRules = () => {
  const [selectedGrade, setSelectedGrade] = useState("all");

  const filteredRules = selectedGrade === "all" 
    ? grammarRules 
    : grammarRules.filter(section => section.grade === selectedGrade);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="Library" size={24} />
          Грамматические правила
        </CardTitle>
        <CardDescription>
          Полный курс грамматики английского языка для 5-11 классов
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={selectedGrade} onValueChange={setSelectedGrade} className="w-full mb-6">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
            <TabsTrigger value="all">Все</TabsTrigger>
            <TabsTrigger value="5 класс">5 кл</TabsTrigger>
            <TabsTrigger value="6 класс">6 кл</TabsTrigger>
            <TabsTrigger value="7 класс">7 кл</TabsTrigger>
            <TabsTrigger value="8 класс">8 кл</TabsTrigger>
            <TabsTrigger value="9 класс">9 кл</TabsTrigger>
            <TabsTrigger value="10 класс">10 кл</TabsTrigger>
            <TabsTrigger value="11 класс">11 кл</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="space-y-6">
          {filteredRules.map((gradeSection, gradeIndex) => (
            <div key={gradeIndex} className="border rounded-lg p-4 bg-gradient-to-r from-purple-50/50 to-blue-50/50">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Badge variant="secondary" className="text-base">{gradeSection.grade}</Badge>
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {gradeSection.topics.map((topic, topicIndex) => (
                  <AccordionItem key={topicIndex} value={`${gradeIndex}-${topicIndex}`}>
                    <AccordionTrigger className="text-left hover:text-primary">
                      {topic.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p className="text-muted-foreground leading-relaxed">{topic.content}</p>
                        <div className="bg-white p-4 rounded-md border border-primary/10">
                          <p className="font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Lightbulb" size={16} className="text-yellow-500" />
                            Примеры:
                          </p>
                          <ul className="space-y-2">
                            {topic.examples.map((example, exIndex) => (
                              <li key={exIndex} className="text-sm flex items-start gap-2">
                                <Icon name="Check" size={14} className="text-green-600 mt-1 flex-shrink-0" />
                                <span>{example}</span>
                              </li>
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
