import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
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
          Все времена английского языка: настоящее, прошедшее и будущее
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="present" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="present">Настоящее</TabsTrigger>
            <TabsTrigger value="past">Прошедшее</TabsTrigger>
            <TabsTrigger value="future">Будущее</TabsTrigger>
          </TabsList>

          <TabsContent value="present" className="space-y-6 mt-6">
            <div className="border rounded-lg p-5 bg-gradient-to-br from-blue-50 to-cyan-50">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Icon name="Circle" size={16} className="text-blue-600" />
                  Present Simple
                </h3>
                <Badge variant="outline">Простое</Badge>
              </div>
              <p className="text-muted-foreground mb-3">
                <strong>Когда используется:</strong> регулярные действия, факты, расписание, общие истины
              </p>
              <div className="bg-white p-4 rounded-md mb-3">
                <p className="font-medium mb-2">✏️ Формула:</p>
                <p className="text-sm mb-1">➕ I/You/We/They + глагол</p>
                <p className="text-sm mb-1">➕ He/She/It + глагол + <strong>s/es</strong></p>
                <p className="text-sm mb-1">➖ don't/doesn't + глагол</p>
                <p className="text-sm">❓ Do/Does + подлежащее + глагол?</p>
              </div>
              <div className="bg-white p-4 rounded-md">
                <p className="font-medium mb-2">💡 Примеры:</p>
                <ul className="space-y-1 text-sm">
                  <li>✓ I <strong>play</strong> tennis every day. (Я играю в теннис каждый день)</li>
                  <li>✓ She <strong>studies</strong> English. (Она изучает английский)</li>
                  <li>✓ The sun <strong>rises</strong> in the east. (Солнце встаёт на востоке)</li>
                  <li>✓ We <strong>don't like</strong> coffee. (Мы не любим кофе)</li>
                </ul>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="secondary">always</Badge>
                <Badge variant="secondary">usually</Badge>
                <Badge variant="secondary">often</Badge>
                <Badge variant="secondary">every day</Badge>
              </div>
            </div>

            <div className="border rounded-lg p-5 bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Icon name="Circle" size={16} className="text-green-600" />
                  Present Continuous
                </h3>
                <Badge variant="outline">Длительное</Badge>
              </div>
              <p className="text-muted-foreground mb-3">
                <strong>Когда используется:</strong> действие происходит прямо сейчас, в данный момент, запланированное будущее
              </p>
              <div className="bg-white p-4 rounded-md mb-3">
                <p className="font-medium mb-2">✏️ Формула:</p>
                <p className="text-sm mb-1">➕ am/is/are + глагол + <strong>-ing</strong></p>
                <p className="text-sm mb-1">➖ am not/isn't/aren't + глагол + ing</p>
                <p className="text-sm">❓ Am/Is/Are + подлежащее + глагол + ing?</p>
              </div>
              <div className="bg-white p-4 rounded-md">
                <p className="font-medium mb-2">💡 Примеры:</p>
                <ul className="space-y-1 text-sm">
                  <li>✓ I <strong>am reading</strong> now. (Я читаю сейчас)</li>
                  <li>✓ She <strong>is playing</strong> piano. (Она играет на пианино)</li>
                  <li>✓ They <strong>are studying</strong>. (Они учатся)</li>
                  <li>✓ We <strong>are meeting</strong> tomorrow. (Мы встречаемся завтра - план)</li>
                </ul>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="secondary">now</Badge>
                <Badge variant="secondary">at the moment</Badge>
                <Badge variant="secondary">right now</Badge>
                <Badge variant="secondary">currently</Badge>
              </div>
            </div>

            <div className="border rounded-lg p-5 bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Icon name="Circle" size={16} className="text-purple-600" />
                  Present Perfect
                </h3>
                <Badge variant="outline">Завершённое</Badge>
              </div>
              <p className="text-muted-foreground mb-3">
                <strong>Когда используется:</strong> действие завершено, но результат важен сейчас; опыт; недавние события
              </p>
              <div className="bg-white p-4 rounded-md mb-3">
                <p className="font-medium mb-2">✏️ Формула:</p>
                <p className="text-sm mb-1">➕ have/has + глагол в <strong>3 форме (V3)</strong></p>
                <p className="text-sm mb-1">➖ haven't/hasn't + V3</p>
                <p className="text-sm">❓ Have/Has + подлежащее + V3?</p>
              </div>
              <div className="bg-white p-4 rounded-md">
                <p className="font-medium mb-2">💡 Примеры:</p>
                <ul className="space-y-1 text-sm">
                  <li>✓ I <strong>have finished</strong> my homework. (Я закончил - готово!)</li>
                  <li>✓ She <strong>has visited</strong> Paris. (У неё есть опыт)</li>
                  <li>✓ We <strong>have seen</strong> this film. (Мы видели)</li>
                  <li>✓ He <strong>has just arrived</strong>. (Только что приехал)</li>
                </ul>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="secondary">already</Badge>
                <Badge variant="secondary">just</Badge>
                <Badge variant="secondary">yet</Badge>
                <Badge variant="secondary">ever</Badge>
                <Badge variant="secondary">never</Badge>
              </div>
            </div>

            <div className="border rounded-lg p-5 bg-gradient-to-br from-indigo-50 to-blue-50">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Icon name="Circle" size={16} className="text-indigo-600" />
                  Present Perfect Continuous
                </h3>
                <Badge variant="outline">Длительное завершённое</Badge>
              </div>
              <p className="text-muted-foreground mb-3">
                <strong>Когда используется:</strong> действие началось в прошлом, продолжалось и всё ещё продолжается или только что закончилось
              </p>
              <div className="bg-white p-4 rounded-md mb-3">
                <p className="font-medium mb-2">✏️ Формула:</p>
                <p className="text-sm">➕ have/has been + глагол + <strong>-ing</strong></p>
              </div>
              <div className="bg-white p-4 rounded-md">
                <p className="font-medium mb-2">💡 Примеры:</p>
                <ul className="space-y-1 text-sm">
                  <li>✓ I <strong>have been learning</strong> English for 5 years.</li>
                  <li>✓ She <strong>has been working</strong> here since 2020.</li>
                  <li>✓ They <strong>have been waiting</strong> for an hour.</li>
                </ul>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="secondary">for</Badge>
                <Badge variant="secondary">since</Badge>
                <Badge variant="secondary">how long</Badge>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="past" className="space-y-6 mt-6">
            <div className="border rounded-lg p-5 bg-gradient-to-br from-amber-50 to-orange-50">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Icon name="Circle" size={16} className="text-amber-600" />
                  Past Simple
                </h3>
                <Badge variant="outline">Простое</Badge>
              </div>
              <p className="text-muted-foreground mb-3">
                <strong>Когда используется:</strong> завершённое действие в прошлом, последовательность событий
              </p>
              <div className="bg-white p-4 rounded-md mb-3">
                <p className="font-medium mb-2">✏️ Формула:</p>
                <p className="text-sm mb-1">➕ глагол + <strong>ed</strong> (правильные) или <strong>V2</strong> (неправильные)</p>
                <p className="text-sm mb-1">➖ didn't + глагол</p>
                <p className="text-sm">❓ Did + подлежащее + глагол?</p>
              </div>
              <div className="bg-white p-4 rounded-md">
                <p className="font-medium mb-2">💡 Примеры:</p>
                <ul className="space-y-1 text-sm">
                  <li>✓ I <strong>played</strong> football yesterday.</li>
                  <li>✓ She <strong>went</strong> to London last year.</li>
                  <li>✓ We <strong>watched</strong> a film.</li>
                  <li>✓ He <strong>didn't come</strong> to the party.</li>
                </ul>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="secondary">yesterday</Badge>
                <Badge variant="secondary">last week</Badge>
                <Badge variant="secondary">ago</Badge>
                <Badge variant="secondary">in 2020</Badge>
              </div>
            </div>

            <div className="border rounded-lg p-5 bg-gradient-to-br from-red-50 to-pink-50">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Icon name="Circle" size={16} className="text-red-600" />
                  Past Continuous
                </h3>
                <Badge variant="outline">Длительное</Badge>
              </div>
              <p className="text-muted-foreground mb-3">
                <strong>Когда используется:</strong> длительное действие в прошлом, часто прерванное другим действием
              </p>
              <div className="bg-white p-4 rounded-md mb-3">
                <p className="font-medium mb-2">✏️ Формула:</p>
                <p className="text-sm">➕ was/were + глагол + <strong>-ing</strong></p>
              </div>
              <div className="bg-white p-4 rounded-md">
                <p className="font-medium mb-2">💡 Примеры:</p>
                <ul className="space-y-1 text-sm">
                  <li>✓ I <strong>was reading</strong> at 5 pm yesterday.</li>
                  <li>✓ They <strong>were playing</strong> when it started raining.</li>
                  <li>✓ She <strong>was cooking</strong> dinner.</li>
                </ul>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="secondary">while</Badge>
                <Badge variant="secondary">when</Badge>
                <Badge variant="secondary">at that moment</Badge>
              </div>
            </div>

            <div className="border rounded-lg p-5 bg-gradient-to-br from-violet-50 to-purple-50">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Icon name="Circle" size={16} className="text-violet-600" />
                  Past Perfect
                </h3>
                <Badge variant="outline">Завершённое</Badge>
              </div>
              <p className="text-muted-foreground mb-3">
                <strong>Когда используется:</strong> действие завершилось до другого действия в прошлом
              </p>
              <div className="bg-white p-4 rounded-md mb-3">
                <p className="font-medium mb-2">✏️ Формула:</p>
                <p className="text-sm">➕ had + глагол в <strong>3 форме (V3)</strong></p>
              </div>
              <div className="bg-white p-4 rounded-md">
                <p className="font-medium mb-2">💡 Примеры:</p>
                <ul className="space-y-1 text-sm">
                  <li>✓ I <strong>had finished</strong> before she called.</li>
                  <li>✓ He <strong>had already left</strong> when I arrived.</li>
                  <li>✓ They <strong>had never seen</strong> snow before.</li>
                </ul>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="secondary">before</Badge>
                <Badge variant="secondary">after</Badge>
                <Badge variant="secondary">by the time</Badge>
              </div>
            </div>

            <div className="border rounded-lg p-5 bg-gradient-to-br from-rose-50 to-red-50">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Icon name="Circle" size={16} className="text-rose-600" />
                  Past Perfect Continuous
                </h3>
                <Badge variant="outline">Длительное завершённое</Badge>
              </div>
              <p className="text-muted-foreground mb-3">
                <strong>Когда используется:</strong> длительное действие, которое происходило до другого действия в прошлом
              </p>
              <div className="bg-white p-4 rounded-md mb-3">
                <p className="font-medium mb-2">✏️ Формула:</p>
                <p className="text-sm">➕ had been + глагол + <strong>-ing</strong></p>
              </div>
              <div className="bg-white p-4 rounded-md">
                <p className="font-medium mb-2">💡 Примеры:</p>
                <ul className="space-y-1 text-sm">
                  <li>✓ I <strong>had been waiting</strong> for an hour before he came.</li>
                  <li>✓ She <strong>had been studying</strong> all day.</li>
                  <li>✓ They <strong>had been living</strong> there for 10 years.</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="future" className="space-y-6 mt-6">
            <div className="border rounded-lg p-5 bg-gradient-to-br from-sky-50 to-blue-50">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Icon name="Circle" size={16} className="text-sky-600" />
                  Future Simple (will)
                </h3>
                <Badge variant="outline">Простое</Badge>
              </div>
              <p className="text-muted-foreground mb-3">
                <strong>Когда используется:</strong> спонтанные решения, предсказания, обещания, угрозы
              </p>
              <div className="bg-white p-4 rounded-md mb-3">
                <p className="font-medium mb-2">✏️ Формула:</p>
                <p className="text-sm mb-1">➕ will + глагол</p>
                <p className="text-sm mb-1">➖ won't + глагол</p>
                <p className="text-sm">❓ Will + подлежащее + глагол?</p>
              </div>
              <div className="bg-white p-4 rounded-md">
                <p className="font-medium mb-2">💡 Примеры:</p>
                <ul className="space-y-1 text-sm">
                  <li>✓ I <strong>will go</strong> tomorrow.</li>
                  <li>✓ She <strong>will help</strong> you. (обещание)</li>
                  <li>✓ It <strong>will rain</strong> soon. (предсказание)</li>
                  <li>✓ I think he <strong>will win</strong>. (мнение)</li>
                </ul>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="secondary">tomorrow</Badge>
                <Badge variant="secondary">next week</Badge>
                <Badge variant="secondary">I think</Badge>
                <Badge variant="secondary">probably</Badge>
              </div>
            </div>

            <div className="border rounded-lg p-5 bg-gradient-to-br from-teal-50 to-cyan-50">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Icon name="Circle" size={16} className="text-teal-600" />
                  Future (going to)
                </h3>
                <Badge variant="outline">Намерение</Badge>
              </div>
              <p className="text-muted-foreground mb-3">
                <strong>Когда используется:</strong> запланированные действия, намерения, очевидные предсказания
              </p>
              <div className="bg-white p-4 rounded-md mb-3">
                <p className="font-medium mb-2">✏️ Формула:</p>
                <p className="text-sm">➕ am/is/are going to + глагол</p>
              </div>
              <div className="bg-white p-4 rounded-md">
                <p className="font-medium mb-2">💡 Примеры:</p>
                <ul className="space-y-1 text-sm">
                  <li>✓ I <strong>am going to study</strong> tonight. (план)</li>
                  <li>✓ She <strong>is going to travel</strong>. (намерение)</li>
                  <li>✓ Look at the clouds! It <strong>is going to rain</strong>. (очевидно)</li>
                </ul>
              </div>
            </div>

            <div className="border rounded-lg p-5 bg-gradient-to-br from-lime-50 to-green-50">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Icon name="Circle" size={16} className="text-lime-600" />
                  Future Continuous
                </h3>
                <Badge variant="outline">Длительное</Badge>
              </div>
              <p className="text-muted-foreground mb-3">
                <strong>Когда используется:</strong> длительное действие в определённый момент в будущем
              </p>
              <div className="bg-white p-4 rounded-md mb-3">
                <p className="font-medium mb-2">✏️ Формула:</p>
                <p className="text-sm">➕ will be + глагол + <strong>-ing</strong></p>
              </div>
              <div className="bg-white p-4 rounded-md">
                <p className="font-medium mb-2">💡 Примеры:</p>
                <ul className="space-y-1 text-sm">
                  <li>✓ I <strong>will be sleeping</strong> at 11 pm.</li>
                  <li>✓ She <strong>will be studying</strong> tomorrow at 3.</li>
                  <li>✓ They <strong>will be working</strong> all day.</li>
                </ul>
              </div>
            </div>

            <div className="border rounded-lg p-5 bg-gradient-to-br from-emerald-50 to-teal-50">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Icon name="Circle" size={16} className="text-emerald-600" />
                  Future Perfect
                </h3>
                <Badge variant="outline">Завершённое</Badge>
              </div>
              <p className="text-muted-foreground mb-3">
                <strong>Когда используется:</strong> действие будет завершено к определённому моменту в будущем
              </p>
              <div className="bg-white p-4 rounded-md mb-3">
                <p className="font-medium mb-2">✏️ Формула:</p>
                <p className="text-sm">➕ will have + глагол в <strong>3 форме (V3)</strong></p>
              </div>
              <div className="bg-white p-4 rounded-md">
                <p className="font-medium mb-2">💡 Примеры:</p>
                <ul className="space-y-1 text-sm">
                  <li>✓ I <strong>will have finished</strong> by 5 pm.</li>
                  <li>✓ She <strong>will have graduated</strong> by next year.</li>
                  <li>✓ They <strong>will have left</strong> before you arrive.</li>
                </ul>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="secondary">by</Badge>
                <Badge variant="secondary">by the time</Badge>
                <Badge variant="secondary">until</Badge>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Tenses;
