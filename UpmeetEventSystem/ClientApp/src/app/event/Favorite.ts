export class Favorite {
    UserId: number;
    EventId: number;

    constructor(UserId: number, EventId: number){
        this.UserId = UserId;
        this.EventId = EventId;
    }
}