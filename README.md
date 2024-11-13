# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




///////////////////////////////////////////////////////////////////////////////////

## Разработка чата

____

### Summary

----

Задача данного челленджа – разработка веб-чата с возможностью поулчения/добавления сообщений и списка контактов.

Челлендж рассчитан на командную разработку (3-4 человека).

Каждый участник команды должен записывать задачи, которые он выполнял – это понадобится при составлении резюме.

Также нужно записывать все проблемы, с которыми вы столкнулись во время разработки и то, как эта проблема была решена. В конце этот список нужно скинуть наставнику.

При разбивке задач между командой нужно предусмотреть, чтобы каждый участник успел поработать с разными видами задач: проектирование, верстка, работа с компонентами и с редьюсерами.

### Releases

----

Прежде чем начать разработку определите тимлида своей команды.

Тимлид должен склонировать данный репозиторий и выгрузить его копию на свой профиль гитхаб. После этого остальные участники команды делают форк его репозитория и клонируют его к себе.

После этого внимательно изучите все заготовленные редьюсеры и компоненты (или папки для компонентов).

Подумайте зачем нужен каждый файл и какой код будет в нём содержаться.

Обговорите это внутри своей команды. Каждый из вас должен одинаково видеть и понимать конечную цель разработки.

Обсудите сложности, которые могут возникнуть во время разработки и способы их решения.

### Release 0. Макет

----

В этом релизе поработайте над внешним видом приложения. В первую очередь тимлид должен сверстать общий макет с тремя блоками, чтобы другие участники затем могли приступить к верстке своих блоков внутри макета.

Примерный внешний вид чата должен быть таким:

![Главная страница](home-chat.png)
![Открытый чат](open-chat.png)

⚠️ Помни, что в данном релизе готовится только внешний вид чата, а не функционал.

Постарайтесь разбить компоненты на небольшие кусочки, чтобы в дальнейшем их легче было дорабатывать.


### Release 1. Связь с сервером

----

Когда внешний вид чата будет готов можно 
переходить к созданию базы данных и настройке сервера.

Начнем с базы данных.

Во-первых, у вас в вашей базе данных должно быть 2 массива.

- 1 массив - `users`
- 2 массив - `messages`


массив `users` будет отвечать за контакты.
массив `messages`, будет отвечать за сообщения.


Немного опишем эти оба массива.

В массиве `users` должна быть информация о контакте, то есть:
- `username` - имя (или никнейм) контакта
- `id` - id контакта 


В массиве `messages`, должна быть такая информация о сообщениях, то есть:
- `message_id` - id сообщения
- `user_id` - id пользователя к которому относится это сообщение
- `timestamp` - время отправки сообщения
- `message` - текст сообщения <br> <br>

Вся эта логика строится с использованием JSON-server и файла для базы данных
db.json.

#### Ключевые моменты

➡️ Пользуйся программой Postman,
чтобы проверить какие ключи с какими значениями приходят с сервера.

➡️ При добавлении сообщения через POST /messages отправляй
на сервер в теле запроса все необходимые ключи для нового сообщения.

➡️ Отображать имена над сообщениями не обязательно, но если вы хотите
то можете попробовать сделать такую штуку, мы оценим.

### Release 2. Добавление роутинга

При клике на контакт должна происходить смена
роутинга – в конец адреса будет добавляться id открытого контакта.

Часть приложения, которая отвечает за вывод сообщений,
в свою очередь, должна отзываться на это изменение,
запрашивать нужные данные у сервера и выводить полученный список сообщений.


### Release 3. Отправка сообщений

Доработайте чат таким образом, чтобы:

- после открытия чата внизу страницы должна быть форма ввода сообщения;
- справа от формы должна быть иконка микрофона;
- если в поле ввода что-то ввели иконка должна поменяться на иконку отправки;
- если поле очистили должен вернуться микрофон;
- при нажатии на иконку отправки сообщение должно отправиться на сервер;
- после добавления сообщение должно появиться в конце списка сообщений;

### Умная отправка сообщений*

Данное с высоким уровнем сложности. 
Его нужно выполнить только в том случае, если с
другими заданиями не было больших трудностей.

Задача заключается в том, что пользователь после 
отправки сообщений должен видеть статус отправки:

- сразу после отправки сообщения оно должно появиться в конце 
списка сообщений с иконком таймера;
- как только сообщение дойдет на сервер и будет получен ответ 
об успешном добавлении нужно иконку заменить на галочку.


<b>Реализуется данная задача по следующему алгоритму:</b>

<b>1. В санке перед отправкой сообщения на сервер 
генерируется временный id.</b>

<b>Временный id нужен из-за того, что реальный id сообщения
становится доступны только после добавления сообщения на сервере.</b>


Сгенерировать временный id можно разными способами. 
Подойдет к примеру функция `Math.random()`,
которая генерирует случайное число.

<b>2. Сообщение добавляется в редьюсер,
но в объекте сообщения должны дополнительно 
присутствовать ключи `sending` равный `true` и `tempId` 
равный временному `id`.</b>

<b>3. Доработать компонент с выводом сообщения.</b>

Если свойство `sending` равно `true`, 
то вместо галочки нужно вывести иконку таймера.

<b>4. После получения ответа с сервера нужно
заменить ключ `sending` на `false`.</b>

Для того чтобы узнать у какого именно 
сообщения должна произойти замена следует 
обращаться по временному id.

В редьюсере при помощи `.map()` перебирается весь
массив сообщений и как только произойдет совпадение
`action.payload.tempId` с айди текущего элемента 
возвращается новый объект сообщений с измененными ключами.


<b>Псевдокод для санка:</b>

```javascript
dispatch => {
  tempId = случайный ид

  dispatch({ ... payload: { tempId: tempId, ...остальные ключи сообщения} })

  fetch(...)
    ...
    .then((data) => {
      dispatch({ ... payload: { tempId: tempId, data: data }})
    })
}
```


**Псевдокод для редьюсера:**

```javascript

return {
  ...state,
  messages: state.messages.map(item => {
    если item.id совпал с action.payload.tempId то
      вернуть объект сообщения из payload.data
    иначе вернуть item как есть
  }
}
```

### Release 4. Прочие удобства

- при открытии сообщений должен происходить скроллинг по последнего сообщения;
- должна быть форма фильтрации контактов;
- должна быть форма фильтрации сообщений;


### Release 5. Анимации и прелоадеры
Добавьте в чат анимации, которые сделают пользование
чатом не только удобным, но и красивым.

Также необходимо добавить прелоадеры для всех запросов на сервер.


### Release 6. Code refactoring
Сделайте код-ревью приложения:

- проверьте все ли функции работают как надо;
- уберите все ненужные запросы на сервер;
- консоль должен быть чистым;
- не должно быть повторяющихся участков кода;
- не должно быть неиспользуемого кода;
- соответствует ли код принятому стайл гайду?


## Заключение

---
Готовый проект должен быть выгружен на Render.com
























