## Примеры базовых нейронок

#### dir no_training:

lesson1.js и lesson2.js - десяток функций-констант, 
позволяющих ознакомиться с самыми простыми примерами нейронных сетей без обучения. 
Сами скрипты не структурированы, не разбиты на модули и классы, что немного усложняет чтение, 
а также использование этих примеров в реальных практических кейсах.

lesson3.js и lesson4.js - Это переработаная нейронка из lesson1. 
Разбил на классы, разделил логику и данные.
Эти нейронки одинаковые, с незначительными отличиями в иерархии классов. 

#### dir lead_off:

start.js - main скрипт. Содержит простую обучающуюся нейронку. (In progress)

## Как подёргать?

Самые базовые нейронки можно подёргать ручками. <br>
Это lesson1.js и lesson2.js

Для остальных же потребуется установить node.js или запускать как `type: module` из index.html

Для тех у кого node.js уже установлен всё просто. <br>
Для запуска основной нейронки используйте `npm start`.

### Для тестовых нейронок:

Запускаем нужную нам нейронку командой типа `npm run lesson{{number}}` - 
где вместо {{number}} номер нейронки, которую мы хотим запустить.

Например `npm run lesson1` запустит первую тестовую нейронку.