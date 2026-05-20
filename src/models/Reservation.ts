import { Room } from "./Room";
import Client from "./Client";
import Database from "../database/Database";
import Listable from "../interface/Listable";

export class Reservation implements Listable {
    private client: Client;
    private room: Room;
    private days: number;
    private totalValue: number = 0;
    private database: Database;
    //aqui esta a injecao de dependencia, onde estamos usandoduas classes
    //prontas e utilizando juntas, onde as informaçoes se encontram.
    constructor(client: Client, room: Room, days: number) {
        this.client = client;
        this.room = room;
        this.days = days;
        this.database = new Database();
    }
    public get getClient(): Client {
        return this.client;
    }
    public get getRoom(): Room {
        return this.room;
    }
    public get getDays(): number {
        return this.days;
    }
    public set setDays(newdays: number) {
        this.days = newdays;
    }
    public get getTotalValue(): number {
        return this.totalValue;
    }
    //metodo que faz a multiplicacao de dias vezes valor
    public valueDays(): void {
        this.totalValue = this.room.getValue * this.days;
    }

    public showData(): void {
        console.log("Cliente:");
        console.log(this.client);

        console.log("Quarto:");
        console.log(this.room.getNumber);

        console.log("Tipo:");
        console.log(this.room.getType);

        console.log("Dias:");
        console.log(this.days);

        console.log("Valor total:");
        console.log(this.totalValue);
    }

    public setPayer(payer: Client): void;
    public setPayer(payer: number): void;
    public setPayer(payer: Client | number) {

        //logica caso client ou number sobrecarga
        let client: Client;
        if (typeof payer === "number") {

            //buscando client por cpf
            client = this.database.client.find((c) => {
                if (c.cpf === payer) {
                    return c;
                }
            })

            if (!client) {
                return ("cliente nao encontrado");
            }
        }
        else {
            client = payer

        }

        return (`o pagador é ${client.getNamePerson}`)




    }
} 