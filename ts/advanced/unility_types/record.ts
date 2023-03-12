/*
* Record - позволяет более лаконично создавать простые типы.
* Record - призначений для динамічного констроювання обʼєктів на льоту.
*
* Record приймає 2 параметри:
*   1. Описує тип ключів обʼєкта
*   2. Описує тип значень обʼєкта
* А на виході отримуємо мат тип із ключів, що ми описали 1-м аргументом, та значень, що описані 2-м аргументом.
* */

// ========= Solution 1.1 =========
type ChatsData = { [key: number]: Message[] };

// ========= Solution 1.2 =========
type ChatsDataRecord = Record<number, Message[]>;


// ========= Solution 1.3 =========
type type1 = Record<'key' | 'key1', string>;


type Message = Readonly<{
  readonly id: number;
  readonly chatId: number;
  readonly text: string;
}>;


const message: Message = {
  id: 1,
  chatId: 1,
  text: 'Hello'
};


function prepareChats(messagesArr: Message[]): ChatsData {
  const result: ChatsData = {};


  messagesArr.forEach(messageItem => {
    if(!result[messageItem.chatId]) {
      result[messageItem.chatId] = [messageItem];
    } else {
      result[messageItem.chatId].push(messageItem);
    }
  });

  return result;
}


function prepareChatsRecord(messagesArr: Message[]): ChatsDataRecord {
  const result: ChatsData = {};


  messagesArr.forEach(messageItem => {
    if(!result[messageItem.chatId]) {
      result[messageItem.chatId] = [messageItem];
    } else {
      result[messageItem.chatId].push(messageItem);
    }
  });

  return result;
}


// ========= Example 2.1 =========
type Obj = Record<string, string>
type Obj2 = Record<'A' | 'B' | 'C', string> // таким чином буде отриманий обʼєкт із полями 'A', 'B', 'C' типу string.


type ThemeParams = {
  fontSize: number;
  color: string;
}

type Theme = 'light' | 'dark'

type AppTheme = Record<Theme, ThemeParams>

const t: AppTheme = {
  light: {
    fontSize: 20,
    color: 'white'
  },
  dark: {
    fontSize: 24,
    color: 'black'
  }
}


