interface Chat {
    userId: string;
    name: string;
    message: string;
    upvotes: string[];
}

// abstract classes can not be instantiated and are used as a blueprint for the classes who implement them
// if a method is made abstract, it needs to be defined in all the classes who implement/extends them
export abstract class Store {
    constructor() {

    }

    initRoom(roomId: string) {

    }

    getChats(roomId: string, limit: number, offset: number) {

    }

    addChat(roomId: string, userId: string, name: string, message: string) {

    }

    upvote(roomId: string, chatId: string, userId: string) {

    }
}