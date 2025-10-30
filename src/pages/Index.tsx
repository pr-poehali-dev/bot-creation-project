import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IrregularVerbs from "@/components/IrregularVerbs";
import GrammarRules from "@/components/GrammarRules";
import Tenses from "@/components/Tenses";
import Tests from "@/components/Tests";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeTab, setActiveTab] = useState("verbs");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-primary mb-4">
            Английский язык 📚
          </h1>
          <p className="text-xl text-muted-foreground">
            Полный курс грамматики с 1 по 11 класс
          </p>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 h-auto">
            <TabsTrigger value="verbs" className="flex items-center gap-2 py-3">
              <Icon name="BookOpen" size={18} />
              <span className="hidden sm:inline">Глаголы</span>
            </TabsTrigger>
            <TabsTrigger value="grammar" className="flex items-center gap-2 py-3">
              <Icon name="Library" size={18} />
              <span className="hidden sm:inline">Правила</span>
            </TabsTrigger>
            <TabsTrigger value="tenses" className="flex items-center gap-2 py-3">
              <Icon name="Clock" size={18} />
              <span className="hidden sm:inline">Времена</span>
            </TabsTrigger>
            <TabsTrigger value="tests" className="flex items-center gap-2 py-3">
              <Icon name="FileCheck" size={18} />
              <span className="hidden sm:inline">Тесты</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="verbs" className="animate-fade-in">
            <IrregularVerbs />
          </TabsContent>

          <TabsContent value="grammar" className="animate-fade-in">
            <GrammarRules />
          </TabsContent>

          <TabsContent value="tenses" className="animate-fade-in">
            <Tenses />
          </TabsContent>

          <TabsContent value="tests" className="animate-fade-in">
            <Tests />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
