import { Store } from "./store/Store";

let globalChatId = 0;
interface Chat {
    id: string;
    userId: string;
    name: string;
    message: string;
    upvotes: string[];
}

interface Room {
    roomId: string;
    chats: Chat[];
}

export class InMemoryStore implements Store {
    private store: Map<string, Room>; // private variables can not be accessed directly outside the class
    constructor() {
        this.store = new Map<string, Room>();
    }

    initRoom(roomId: string) {
        this.store.set(roomId, {
            roomId,
            chats: []
        })
    }

    getChats(roomId: string, limit: number, offset: number) {
        const room = this.store.get(roomId);
        if(!room) return [];
        return room.chats;
    }

    addChat(roomId: string, userId: string, name: string, message: string) {
        const room = this.store.get(roomId);
        if(!room) return;
        room.chats.push({
            id: (globalChatId++).toString(),
            userId,
            name,
            message,
            upvotes: []
        })
        
    }

    upvote(roomId: string, chatId: string, userId: string) {
        const room = this.store.get(roomId);
        // find chat
        const chat = room?.chats.find(el => el.id === chatId);
        if(chat) {
            chat.upvotes.push(userId);
        }
    }
}