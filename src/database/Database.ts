
import Person from "../models/Person";
import Client from "../models/Client";
import { Room } from "../models/Room";
import { RoomType } from "../enum/RoomType";

export default class Database {

    public client: Client[] = [];
    public person: Person[] = [];
    public room: Room[] = [];

}