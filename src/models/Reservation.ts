import { Room } from "./Room";
import Client from "./Client";

export class Reservation {
    private client: Client;
    private room : Room;
    private days : number;
    private totalValue:number = 0;
//aqui esta a injecao de dependencia, onde estamos usandoduas classes
//prontas e utilizando juntas, onde as informaçoes se encontram.
    constructor(client:Client, room:Room, days:number) {
        this.client = client;
        this.room = room;
        this.days= days;
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
    public set setDays(newdays:number) {
        this.days =newdays;
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
    public setPayer(payer:Client | number) {

    //logica caso client ou number sobrecarga

    }

} 