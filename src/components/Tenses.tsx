import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Tenses = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="Clock" size={24} />
          Времена английского языка
        </CardTitle>
        <CardDescription>
          Настоящее и будущее время: правила и примеры
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="present" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="present">Настоящее время</TabsTrigger>
            <TabsTrigger value="future">Будущее время</TabsTrigger>
          </TabsList>

          <TabsContent value="present" className="space-y-6 mt-6">
            <div className="border rounded-lg p-4 bg-gradient-to-r from-blue-50 to-purple-50">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Icon name="Circle" size={16} className="text-primary" />
                Present Simple
              </h3>
              <p className="text-muted-foreground mb-3">
                <strong>Когда используется:</strong> регулярные действия, факты, расписание
              </p>
              <div className="bg-white p-3 rounded-md mb-3">
                <p className="font-medium mb-2">Формула:</p>
                <p className="text-sm">+ I/You/We/They + глагол</p>
                <p className="text-sm">+ He/She/It + глагол + s/es</p>
              </div>
              <div className="bg-white p-3 rounded-md">
                <p className="font-medium mb-2">Примеры:</p>
                <ul className="space-y-1 text-sm">
                  <li>✓ I <strong>play</strong> tennis every day. (Я играю в теннис каждый день)</li>
                  <li>✓ She <strong>studies</strong> English. (Она изучает английский)</li>
                  <li>✓ The sun <strong>rises</strong> in the east. (Солнце встаёт на востоке)</li>
                </ul>
              </div>
            </div>

            <div className="border rounded-lg p-4 bg-gradient-to-r from-green-50 to-teal-50">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Icon name="Circle" size={16} className="text-green-600" />
                Present Continuous
              </h3>
              <p className="text-muted-foreground mb-3">
                <strong>Когда используется:</strong> действие происходит прямо сейчас, в данный момент
              </p>
              <div className="bg-white p-3 rounded-md mb-3">
                <p className="font-medium mb-2">Формула:</p>
                <p className="text-sm">am/is/are + глагол + ing</p>
              </div>
              <div className="bg-white p-3 rounded-md">
                <p className="font-medium mb-2">Примеры:</p>
                <ul className="space-y-1 text-sm">
                  <li>✓ I <strong>am reading</strong> now. (Я читаю сейчас)</li>
                  <li>✓ She <strong>is playing</strong> piano. (Она играет на пианино)</li>
                  <li>✓ They <strong>are studying</strong>. (Они учатся)</li>
                </ul>
              </div>
            </div>

            <div className="border rounded-lg p-4 bg-gradient-to-r from-purple-50 to-pink-50">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Icon name="Circle" size={16} className="text-purple-600" />
                Present Perfect
              </h3>
              <p className="text-muted-foreground mb-3">
                <strong>Когда используется:</strong> действие завершено, но результат важен сейчас
              </p>
              <div className="bg-white p-3 rounded-md mb-3">
                <p className="font-medium mb-2">Формула:</p>
                <p className="text-sm">have/has + глагол (3 форма)</p>
              </div>
              <div className="bg-white p-3 rounded-md">
                <p className="font-medium mb-2">Примеры:</p>
                <ul className="space-y-1 text-sm">
                  <li>✓ I <strong>have finished</strong> my homework. (Я закончил домашнюю работу)</li>
                  <li>✓ She <strong>has visited</strong> Paris. (Она посетила Париж)</li>
                  <li>✓ We <strong>have seen</strong> this film. (Мы видели этот фильм)</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="future" className="space-y-6 mt-6">
            <div className="border rounded-lg p-4 bg-gradient-to-r from-orange-50 to-yellow-50">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Icon name="Circle" size={16} className="text-orange-600" />
                Future Simple (will)
              </h3>
              <p className="text-muted-foreground mb-3">
                <strong>Когда используется:</strong> спонтанные решения, предсказания, обещания
              </p>
              <div className="bg-white p-3 rounded-md mb-3">
                <p className="font-medium mb-2">Формула:</p>
                <p className="text-sm">will + глагол</p>
              </div>
              <div className="bg-white p-3 rounded-md">
                <p className="font-medium mb-2">Примеры:</p>
                <ul className="space-y-1 text-sm">
                  <li>✓ I <strong>will go</strong> tomorrow. (Я пойду завтра)</li>
                  <li>✓ She <strong>will help</strong> you. (Она поможет тебе)</li>
                  <li>✓ It <strong>will rain</strong> soon. (Скоро пойдёт дождь)</li>
                </ul>
              </div>
            </div>

            <div className="border rounded-lg p-4 bg-gradient-to-r from-blue-50 to-indigo-50">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Icon name="Circle" size={16} className="text-blue-600" />
                Future Simple (going to)
              </h3>
              <p className="text-muted-foreground mb-3">
                <strong>Когда используется:</strong> запланированные действия, намерения, очевидные предсказания
              </p>
              <div className="bg-white p-3 rounded-md mb-3">
                <p className="font-medium mb-2">Формула:</p>
                <p className="text-sm">am/is/are + going to + глагол</p>
              </div>
              <div className="bg-white p-3 rounded-md">
                <p className="font-medium mb-2">Примеры:</p>
                <ul className="space-y-1 text-sm">
                  <li>✓ I <strong>am going to study</strong> tonight. (Я собираюсь учиться сегодня вечером)</li>
                  <li>✓ She <strong>is going to travel</strong>. (Она собирается путешествовать)</li>
                  <li>✓ It <strong>is going to rain</strong>. (Собирается дождь - тучи)</li>
                </ul>
              </div>
            </div>

            <div className="border rounded-lg p-4 bg-gradient-to-r from-teal-50 to-cyan-50">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Icon name="Circle" size={16} className="text-teal-600" />
                Future Continuous
              </h3>
              <p className="text-muted-foreground mb-3">
                <strong>Когда используется:</strong> длительное действие в определённый момент в будущем
              </p>
              <div className="bg-white p-3 rounded-md mb-3">
                <p className="font-medium mb-2">Формула:</p>
                <p className="text-sm">will be + глагол + ing</p>
              </div>
              <div className="bg-white p-3 rounded-md">
                <p className="font-medium mb-2">Примеры:</p>
                <ul className="space-y-1 text-sm">
                  <li>✓ I <strong>will be sleeping</strong> at 11 pm. (Я буду спать в 11 вечера)</li>
                  <li>✓ She <strong>will be studying</strong> tomorrow. (Она будет учиться завтра)</li>
                  <li>✓ They <strong>will be working</strong>. (Они будут работать)</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Tenses;
