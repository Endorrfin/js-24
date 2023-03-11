

/*
* Record - позволяет более лаконично создавать простые типы.
* */

// ========= Solution 1.1 =========
type ChatsData = {[key: number]: Message[]};

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
        if (!result[messageItem.chatId]) {
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
        if (!result[messageItem.chatId]) {
            result[messageItem.chatId] = [messageItem];
        } else {
            result[messageItem.chatId].push(messageItem);
        }
    });

    return result;
}




