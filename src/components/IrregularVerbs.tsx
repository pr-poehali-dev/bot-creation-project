import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Icon from "@/components/ui/icon";

const irregularVerbs = [
  { infinitive: "be", past: "was/were", participle: "been", translation: "быть" },
  { infinitive: "begin", past: "began", participle: "begun", translation: "начинать" },
  { infinitive: "break", past: "broke", participle: "broken", translation: "ломать" },
  { infinitive: "bring", past: "brought", participle: "brought", translation: "приносить" },
  { infinitive: "build", past: "built", participle: "built", translation: "строить" },
  { infinitive: "buy", past: "bought", participle: "bought", translation: "покупать" },
  { infinitive: "catch", past: "caught", participle: "caught", translation: "ловить" },
  { infinitive: "choose", past: "chose", participle: "chosen", translation: "выбирать" },
  { infinitive: "come", past: "came", participle: "come", translation: "приходить" },
  { infinitive: "do", past: "did", participle: "done", translation: "делать" },
  { infinitive: "drink", past: "drank", participle: "drunk", translation: "пить" },
  { infinitive: "drive", past: "drove", participle: "driven", translation: "водить" },
  { infinitive: "eat", past: "ate", participle: "eaten", translation: "есть" },
  { infinitive: "fall", past: "fell", participle: "fallen", translation: "падать" },
  { infinitive: "feel", past: "felt", participle: "felt", translation: "чувствовать" },
  { infinitive: "find", past: "found", participle: "found", translation: "находить" },
  { infinitive: "fly", past: "flew", participle: "flown", translation: "летать" },
  { infinitive: "forget", past: "forgot", participle: "forgotten", translation: "забывать" },
  { infinitive: "get", past: "got", participle: "got/gotten", translation: "получать" },
  { infinitive: "give", past: "gave", participle: "given", translation: "давать" },
  { infinitive: "go", past: "went", participle: "gone", translation: "идти" },
  { infinitive: "have", past: "had", participle: "had", translation: "иметь" },
  { infinitive: "hear", past: "heard", participle: "heard", translation: "слышать" },
  { infinitive: "know", past: "knew", participle: "known", translation: "знать" },
  { infinitive: "leave", past: "left", participle: "left", translation: "покидать" },
  { infinitive: "make", past: "made", participle: "made", translation: "делать" },
  { infinitive: "meet", past: "met", participle: "met", translation: "встречать" },
  { infinitive: "pay", past: "paid", participle: "paid", translation: "платить" },
  { infinitive: "put", past: "put", participle: "put", translation: "класть" },
  { infinitive: "read", past: "read", participle: "read", translation: "читать" },
  { infinitive: "run", past: "ran", participle: "run", translation: "бегать" },
  { infinitive: "say", past: "said", participle: "said", translation: "говорить" },
  { infinitive: "see", past: "saw", participle: "seen", translation: "видеть" },
  { infinitive: "sell", past: "sold", participle: "sold", translation: "продавать" },
  { infinitive: "send", past: "sent", participle: "sent", translation: "посылать" },
  { infinitive: "sit", past: "sat", participle: "sat", translation: "сидеть" },
  { infinitive: "speak", past: "spoke", participle: "spoken", translation: "говорить" },
  { infinitive: "spend", past: "spent", participle: "spent", translation: "тратить" },
  { infinitive: "stand", past: "stood", participle: "stood", translation: "стоять" },
  { infinitive: "swim", past: "swam", participle: "swum", translation: "плавать" },
  { infinitive: "take", past: "took", participle: "taken", translation: "брать" },
  { infinitive: "teach", past: "taught", participle: "taught", translation: "учить" },
  { infinitive: "tell", past: "told", participle: "told", translation: "рассказывать" },
  { infinitive: "think", past: "thought", participle: "thought", translation: "думать" },
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
          Неправильные глаголы
        </CardTitle>
        <CardDescription>
          Все важные неправильные глаголы английского языка с переводом
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Input
            placeholder="Поиск по глаголу или переводу..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Инфинитив</TableHead>
                <TableHead>Прошедшее время</TableHead>
                <TableHead>Причастие</TableHead>
                <TableHead>Перевод</TableHead>
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
