import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Icon from "@/components/ui/icon";

const irregularVerbs = [
  { infinitive: "be", past: "was/were", participle: "been", translation: "быть" },
  { infinitive: "beat", past: "beat", participle: "beaten", translation: "бить" },
  { infinitive: "become", past: "became", participle: "become", translation: "становиться" },
  { infinitive: "begin", past: "began", participle: "begun", translation: "начинать" },
  { infinitive: "break", past: "broke", participle: "broken", translation: "ломать" },
  { infinitive: "bring", past: "brought", participle: "brought", translation: "приносить" },
  { infinitive: "build", past: "built", participle: "built", translation: "строить" },
  { infinitive: "buy", past: "bought", participle: "bought", translation: "покупать" },
  { infinitive: "catch", past: "caught", participle: "caught", translation: "ловить" },
  { infinitive: "choose", past: "chose", participle: "chosen", translation: "выбирать" },
  { infinitive: "come", past: "came", participle: "come", translation: "приходить" },
  { infinitive: "cost", past: "cost", participle: "cost", translation: "стоить" },
  { infinitive: "cut", past: "cut", participle: "cut", translation: "резать" },
  { infinitive: "do", past: "did", participle: "done", translation: "делать" },
  { infinitive: "draw", past: "drew", participle: "drawn", translation: "рисовать" },
  { infinitive: "dream", past: "dreamt/dreamed", participle: "dreamt/dreamed", translation: "мечтать" },
  { infinitive: "drink", past: "drank", participle: "drunk", translation: "пить" },
  { infinitive: "drive", past: "drove", participle: "driven", translation: "водить" },
  { infinitive: "eat", past: "ate", participle: "eaten", translation: "есть" },
  { infinitive: "fall", past: "fell", participle: "fallen", translation: "падать" },
  { infinitive: "feed", past: "fed", participle: "fed", translation: "кормить" },
  { infinitive: "feel", past: "felt", participle: "felt", translation: "чувствовать" },
  { infinitive: "fight", past: "fought", participle: "fought", translation: "сражаться" },
  { infinitive: "find", past: "found", participle: "found", translation: "находить" },
  { infinitive: "fly", past: "flew", participle: "flown", translation: "летать" },
  { infinitive: "forget", past: "forgot", participle: "forgotten", translation: "забывать" },
  { infinitive: "forgive", past: "forgave", participle: "forgiven", translation: "прощать" },
  { infinitive: "freeze", past: "froze", participle: "frozen", translation: "замерзать" },
  { infinitive: "get", past: "got", participle: "got/gotten", translation: "получать" },
  { infinitive: "give", past: "gave", participle: "given", translation: "давать" },
  { infinitive: "go", past: "went", participle: "gone", translation: "идти" },
  { infinitive: "grow", past: "grew", participle: "grown", translation: "расти" },
  { infinitive: "have", past: "had", participle: "had", translation: "иметь" },
  { infinitive: "hear", past: "heard", participle: "heard", translation: "слышать" },
  { infinitive: "hide", past: "hid", participle: "hidden", translation: "прятать" },
  { infinitive: "hit", past: "hit", participle: "hit", translation: "ударять" },
  { infinitive: "hold", past: "held", participle: "held", translation: "держать" },
  { infinitive: "hurt", past: "hurt", participle: "hurt", translation: "причинять боль" },
  { infinitive: "keep", past: "kept", participle: "kept", translation: "хранить" },
  { infinitive: "know", past: "knew", participle: "known", translation: "знать" },
  { infinitive: "lay", past: "laid", participle: "laid", translation: "класть" },
  { infinitive: "lead", past: "led", participle: "led", translation: "вести" },
  { infinitive: "learn", past: "learnt/learned", participle: "learnt/learned", translation: "учить" },
  { infinitive: "leave", past: "left", participle: "left", translation: "покидать" },
  { infinitive: "lend", past: "lent", participle: "lent", translation: "одалживать" },
  { infinitive: "let", past: "let", participle: "let", translation: "позволять" },
  { infinitive: "lie", past: "lay", participle: "lain", translation: "лежать" },
  { infinitive: "light", past: "lit", participle: "lit", translation: "зажигать" },
  { infinitive: "lose", past: "lost", participle: "lost", translation: "терять" },
  { infinitive: "make", past: "made", participle: "made", translation: "делать" },
  { infinitive: "mean", past: "meant", participle: "meant", translation: "означать" },
  { infinitive: "meet", past: "met", participle: "met", translation: "встречать" },
  { infinitive: "pay", past: "paid", participle: "paid", translation: "платить" },
  { infinitive: "put", past: "put", participle: "put", translation: "класть" },
  { infinitive: "read", past: "read", participle: "read", translation: "читать" },
  { infinitive: "ride", past: "rode", participle: "ridden", translation: "ехать верхом" },
  { infinitive: "ring", past: "rang", participle: "rung", translation: "звонить" },
  { infinitive: "rise", past: "rose", participle: "risen", translation: "подниматься" },
  { infinitive: "run", past: "ran", participle: "run", translation: "бегать" },
  { infinitive: "say", past: "said", participle: "said", translation: "говорить" },
  { infinitive: "see", past: "saw", participle: "seen", translation: "видеть" },
  { infinitive: "seek", past: "sought", participle: "sought", translation: "искать" },
  { infinitive: "sell", past: "sold", participle: "sold", translation: "продавать" },
  { infinitive: "send", past: "sent", participle: "sent", translation: "посылать" },
  { infinitive: "set", past: "set", participle: "set", translation: "устанавливать" },
  { infinitive: "shake", past: "shook", participle: "shaken", translation: "трясти" },
  { infinitive: "shine", past: "shone", participle: "shone", translation: "светить" },
  { infinitive: "shoot", past: "shot", participle: "shot", translation: "стрелять" },
  { infinitive: "show", past: "showed", participle: "shown", translation: "показывать" },
  { infinitive: "shut", past: "shut", participle: "shut", translation: "закрывать" },
  { infinitive: "sing", past: "sang", participle: "sung", translation: "петь" },
  { infinitive: "sink", past: "sank", participle: "sunk", translation: "тонуть" },
  { infinitive: "sit", past: "sat", participle: "sat", translation: "сидеть" },
  { infinitive: "sleep", past: "slept", participle: "slept", translation: "спать" },
  { infinitive: "smell", past: "smelt/smelled", participle: "smelt/smelled", translation: "нюхать" },
  { infinitive: "speak", past: "spoke", participle: "spoken", translation: "говорить" },
  { infinitive: "spell", past: "spelt/spelled", participle: "spelt/spelled", translation: "писать по буквам" },
  { infinitive: "spend", past: "spent", participle: "spent", translation: "тратить" },
  { infinitive: "stand", past: "stood", participle: "stood", translation: "стоять" },
  { infinitive: "steal", past: "stole", participle: "stolen", translation: "красть" },
  { infinitive: "stick", past: "stuck", participle: "stuck", translation: "приклеивать" },
  { infinitive: "strike", past: "struck", participle: "struck", translation: "ударять" },
  { infinitive: "swear", past: "swore", participle: "sworn", translation: "клясться" },
  { infinitive: "sweep", past: "swept", participle: "swept", translation: "подметать" },
  { infinitive: "swim", past: "swam", participle: "swum", translation: "плавать" },
  { infinitive: "take", past: "took", participle: "taken", translation: "брать" },
  { infinitive: "teach", past: "taught", participle: "taught", translation: "учить" },
  { infinitive: "tear", past: "tore", participle: "torn", translation: "рвать" },
  { infinitive: "tell", past: "told", participle: "told", translation: "рассказывать" },
  { infinitive: "think", past: "thought", participle: "thought", translation: "думать" },
  { infinitive: "throw", past: "threw", participle: "thrown", translation: "бросать" },
  { infinitive: "understand", past: "understood", participle: "understood", translation: "понимать" },
  { infinitive: "wake", past: "woke", participle: "woken", translation: "будить" },
  { infinitive: "wear", past: "wore", participle: "worn", translation: "носить" },
  { infinitive: "win", past: "won", participle: "won", translation: "выигрывать" },
  { infinitive: "write", past: "wrote", participle: "written", translation: "писать" },
];

const IrregularVerbs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVerbs = irregularVerbs.filter(
    (verb) =>
      verb.infinitive.toLowerCase().includes(searchTerm.toLowerCase()) ||
      verb.translation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="BookOpen" size={24} />
          Irregular Verbs / Неправильные глаголы
        </CardTitle>
        <CardDescription>
          Все неправильные глаголы английского языка с переводом ({irregularVerbs.length} глаголов)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Input
            placeholder="Search by verb or translation / Поиск по глаголу или переводу..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Infinitive / Инфинитив</TableHead>
                <TableHead>Past Simple / Прошедшее</TableHead>
                <TableHead>Past Participle / Причастие</TableHead>
                <TableHead>Translation / Перевод</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredVerbs.map((verb, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{verb.infinitive}</TableCell>
                  <TableCell>{verb.past}</TableCell>
                  <TableCell>{verb.participle}</TableCell>
                  <TableCell>{verb.translation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {filteredVerbs.length === 0 && (
          <p className="text-center text-muted-foreground py-8">
            Глаголы не найдены
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default IrregularVerbs;