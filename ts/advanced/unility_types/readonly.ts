

/*
* Readonly - делает поля в типе доступными только для чтения.
* */

type Message = {
    readonly id: number;
    readonly chatId: number;
    readonly text: string;
};


type MessageOptimize = Readonly<{
    readonly id: number;
    readonly chatId: number;
    readonly text: string;
}>;


const message: Message = {
    id: 1,
    chatId: 1,
    text: 'Hello'
};

const messageOptimize: MessageOptimize = {
    id: 1,
    chatId: 1,
    text: 'Hello'
};


// message.text = Bye;

// messageOptimize.chatId = 2


