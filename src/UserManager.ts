interface User {
    id: string;
    name: string;
}

interface Room {
    users: User[]
}

export class UserManager {
    private rooms: Map<string, Room>;
    constructor() {
        this.rooms = new Map<string, Room>()
    }

    addUser(roomId: string, userId: string, name: string, socket: WebSocket) {
        if(!this.rooms.get(roomId)) {
            this.rooms.set(roomId, {
                users: [{
                    id: userId,
                    name
                }]
            })
        } else {
            this.rooms.get(roomId)?.users.push({
                id: userId,
                name
            })
        }
    }

    removeUser() {

    }
}