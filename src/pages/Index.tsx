import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import IrregularVerbs from "@/components/IrregularVerbs";
import GrammarRules from "@/components/GrammarRules";
import Tenses from "@/components/Tenses";
import Tests from "@/components/Tests";
import Notes from "@/components/Notes";
import Slides from "@/components/Slides";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeTab, setActiveTab] = useState("grammar");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fade-in">
          <div className="flex justify-end mb-4">
            <Link to="/qr">
              <Button variant="outline" size="sm" className="gap-2">
                <Icon name="QrCode" size={18} />
                QR-код сайта
              </Button>
            </Link>
          </div>
          <h1 className="text-5xl font-bold text-primary mb-4">
            Английский язык 📚
          </h1>
          <p className="text-xl text-muted-foreground">
            Полный курс грамматики для 5-11 классов
          </p>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8 h-auto">
            <TabsTrigger value="grammar" className="flex items-center gap-2 py-3">
              <Icon name="Library" size={18} />
              <span className="hidden sm:inline">Правила</span>
            </TabsTrigger>
            <TabsTrigger value="tenses" className="flex items-center gap-2 py-3">
              <Icon name="Clock" size={18} />
              <span className="hidden sm:inline">Времена</span>
            </TabsTrigger>
            <TabsTrigger value="verbs" className="flex items-center gap-2 py-3">
              <Icon name="BookOpen" size={18} />
              <span className="hidden sm:inline">Глаголы</span>
            </TabsTrigger>
            <TabsTrigger value="tests" className="flex items-center gap-2 py-3">
              <Icon name="FileCheck" size={18} />
              <span className="hidden sm:inline">Тесты</span>
            </TabsTrigger>
            <TabsTrigger value="slides" className="flex items-center gap-2 py-3">
              <Icon name="Presentation" size={18} />
              <span className="hidden sm:inline">Слайды</span>
            </TabsTrigger>
            <TabsTrigger value="notes" className="flex items-center gap-2 py-3">
              <Icon name="StickyNote" size={18} />
              <span className="hidden sm:inline">Заметки</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="grammar" className="animate-fade-in">
            <GrammarRules />
          </TabsContent>

          <TabsContent value="tenses" className="animate-fade-in">
            <Tenses />
          </TabsContent>

          <TabsContent value="verbs" className="animate-fade-in">
            <IrregularVerbs />
          </TabsContent>

          <TabsContent value="tests" className="animate-fade-in">
            <Tests />
          </TabsContent>

          <TabsContent value="slides" className="animate-fade-in">
            <Slides />
          </TabsContent>

          <TabsContent value="notes" className="animate-fade-in">
            <Notes />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;