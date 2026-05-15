import Person from "../models/Person";
import Client from "../models/Client";
import HomeScreen from "../view/HomeScreen"
import { Room } from "../models/Room";
import Database from "../database/Database";
import { RoomType } from "../enum/RoomType";

export default class TotalController {
    private database : Database;

constructor() {
    this.database = new Database();
}
public newPersonName(personName:string): void {
    const namePerson1 = new Person(personName);
    this.database.person.push(namePerson1);
    console.log(personName + " cadastrada!")
}
public newClient(personName:string, cpf:number):void {
    const cliente1 = new Client(personName, cpf);
    this.database.client.push(cliente1);
    console.log("nome "+ personName + " CPF: " + cpf + " cliente cadastrado");
}

}

