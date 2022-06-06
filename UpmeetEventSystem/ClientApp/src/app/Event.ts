export class Event {
    eventId: number;
    eventName: string;
    eventDate: Date;
    eventLocation: string;
    isFavorite: boolean;

    constructor(eventId: number, eventName: string, eventDate: Date, eventLocation: string, isFavorite: boolean){
    this.eventId = eventId;
    this.eventName = eventName;
    this.eventDate = eventDate;
    this.eventLocation = eventLocation;
    this.isFavorite = isFavorite;
    }

}