import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const tests: { [key: string]: Question[] } = {
  "Present Simple": [
    {
      question: "She ___ to school every day.",
      options: ["go", "goes", "going", "went"],
      correct: 1,
      explanation: "Используем 'goes' с he/she/it в Present Simple"
    },
    {
      question: "They ___ English.",
      options: ["speaks", "speaking", "speak", "spoke"],
      correct: 2,
      explanation: "С they/we/you/I используем базовую форму глагола"
    },
    {
      question: "I ___ football every weekend.",
      options: ["play", "plays", "playing", "played"],
      correct: 0,
      explanation: "С I используем базовую форму глагола в Present Simple"
    }
  ],
  "Present Continuous": [
    {
      question: "I ___ a book right now.",
      options: ["read", "reads", "am reading", "was reading"],
      correct: 2,
      explanation: "Present Continuous: am/is/are + глагол+ing"
    },
    {
      question: "They ___ football at the moment.",
      options: ["play", "plays", "playing", "are playing"],
      correct: 3,
      explanation: "С they используем are + глагол+ing"
    }
  ],
  "Past Simple": [
    {
      question: "I ___ to the cinema yesterday.",
      options: ["go", "goes", "went", "going"],
      correct: 2,
      explanation: "Go - неправильный глагол, прошедшее время: went"
    },
    {
      question: "She ___ her homework last night.",
      options: ["finish", "finished", "finishes", "finishing"],
      correct: 1,
      explanation: "Правильный глагол: добавляем -ed"
    }
  ],
  "Future Simple": [
    {
      question: "I ___ help you tomorrow.",
      options: ["will", "shall", "am", "going"],
      correct: 0,
      explanation: "Future Simple: will + глагол"
    },
    {
      question: "She ___ visit us next week.",
      options: ["will", "is", "was", "be"],
      correct: 0,
      explanation: "Используем will для будущего времени"
    }
  ],
  "Неправильные глаголы": [
    {
      question: "Выберите правильную форму: go - ___ - gone",
      options: ["goed", "went", "goes", "going"],
      correct: 1,
      explanation: "Go - went - gone"
    },
    {
      question: "Выберите правильную форму: see - saw - ___",
      options: ["seed", "sawn", "seen", "seeing"],
      correct: 2,
      explanation: "See - saw - seen"
    }
  ]
};

const Tests = () => {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [answerLocked, setAnswerLocked] = useState(false);
  const { toast } = useToast();

  const startTest = (testName: string) => {
    setSelectedTest(testName);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnsweredQuestions(new Array(tests[testName].length).fill(false));
    setAnswerLocked(false);
  };

  const handleAnswerSelect = (value: string) => {
    if (answerLocked) return;
    
    const answerIndex = parseInt(value, 10);
    setSelectedAnswer(answerIndex);
    setAnswerLocked(true);

    const currentTest = tests[selectedTest!];
    const isCorrect = answerIndex === currentTest[currentQuestion].correct;

    if (isCorrect) {
      setScore(score + 1);
      toast({
        title: "Правильно! ✓",
        description: currentTest[currentQuestion].explanation,
      });
    } else {
      toast({
        title: "Неправильно ✗",
        description: currentTest[currentQuestion].explanation,
        variant: "destructive",
      });
    }

    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);

    setTimeout(() => {
      if (currentQuestion < currentTest.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setAnswerLocked(false);
      } else {
        setShowResult(true);
      }
    }, 2000);
  };

  const resetTest = () => {
    setSelectedTest(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnsweredQuestions([]);
    setAnswerLocked(false);
  };

  if (!selectedTest) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="FileCheck" size={24} />
            Тесты по грамматике
          </CardTitle>
          <CardDescription>
            Выберите тему для проверки знаний
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(tests).map((testName) => (
              <Button
                key={testName}
                onClick={() => startTest(testName)}
                variant="outline"
                className="h-auto py-6 flex flex-col items-start gap-2 hover:bg-primary/5 hover:border-primary"
              >
                <span className="font-semibold text-lg">{testName}</span>
                <span className="text-sm text-muted-foreground">
                  {tests[testName].length} вопросов
                </span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (showResult) {
    const percentage = Math.round((score / tests[selectedTest].length) * 100);
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Trophy" size={24} />
            Результаты теста
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="text-6xl font-bold text-primary">{percentage}%</div>
          <p className="text-xl">
            Ваш результат: {score} из {tests[selectedTest].length}
          </p>
          <Progress value={percentage} className="h-3" />
          <div className="space-y-2">
            {percentage === 100 && (
              <p className="text-lg text-green-600 font-semibold">
                Идеально! Все ответы правильные! 🎉
              </p>
            )}
            {percentage >= 80 && percentage < 100 && (
              <p className="text-lg text-green-600 font-semibold">
                Отлично! Вы хорошо знаете эту тему! 🎉
              </p>
            )}
            {percentage >= 60 && percentage < 80 && (
              <p className="text-lg text-yellow-600 font-semibold">
                Хорошо! Но есть куда расти 📚
              </p>
            )}
            {percentage < 60 && (
              <p className="text-lg text-red-600 font-semibold">
                Нужно повторить материал 💪
              </p>
            )}
          </div>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => startTest(selectedTest)} variant="outline">
              Пройти ещё раз
            </Button>
            <Button onClick={resetTest}>
              Выбрать другой тест
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const currentTest = tests[selectedTest];
  const progress = ((currentQuestion + 1) / currentTest.length) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Icon name="FileCheck" size={24} />
            {selectedTest}
          </span>
          <Button variant="ghost" size="sm" onClick={resetTest}>
            <Icon name="X" size={18} />
          </Button>
        </CardTitle>
        <CardDescription>
          Вопрос {currentQuestion + 1} из {currentTest.length}
        </CardDescription>
        <Progress value={progress} className="h-2" />
      </CardHeader>
      <CardContent className="space-y-6">
        <h3 className="text-2xl font-semibold">{currentTest[currentQuestion].question}</h3>
        
        <RadioGroup value={selectedAnswer !== null ? selectedAnswer.toString() : undefined} onValueChange={handleAnswerSelect}>
          <div className="space-y-3">
            {currentTest[currentQuestion].options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentTest[currentQuestion].correct;
              const showFeedback = answerLocked && isSelected;
              
              return (
                <div 
                  key={index} 
                  className={`flex items-center space-x-2 border rounded-lg p-4 transition-colors ${
                    answerLocked ? 'cursor-not-allowed opacity-70' : 'hover:bg-accent/50 cursor-pointer'
                  } ${
                    showFeedback && isCorrect ? 'bg-green-100 border-green-500' : ''
                  } ${
                    showFeedback && !isCorrect ? 'bg-red-100 border-red-500' : ''
                  }`}
                >
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} disabled={answerLocked} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer text-lg">
                    {option}
                  </Label>
                </div>
              );
            })}
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default Tests;