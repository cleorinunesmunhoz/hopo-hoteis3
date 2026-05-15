
import Person from "../models/Person";
import Client from "../models/Client";
import { Room } from "../models/Room";
import { RoomType } from "../enum/RoomType";


export default class Database {

    public client: Client[] = [];
    public person: Person[] = [];
    public room: Room[] = [];

    constructor() {
        for(let i =1; i <=20; i++) {
            this.room.push(
                new Room(i, RoomType.CASAL)
            );
        }
        for(let i =21; i <= 40; i++) {
            this.room.push(
                new Room(i, RoomType.SOLTEIRO)
            );
        }
        for (let i = 41; i<= 50;i++) {
            this.room.push(
                new Room(i, RoomType.LUXO)
            );
        }
        }
    }
    