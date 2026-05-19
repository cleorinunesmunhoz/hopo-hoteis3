import { Room } from './../models/Room';
import Client from "../models/Client";
import Database from "../database/Database";
import { Reservation } from '../models/Reservation';

export default class TotalController {
    private database : Database;

constructor() {
    this.database = new Database();
}
public newPersonName(namePerson:string): void {
    const namePerson1 = new Client(namePerson, 0);
    this.database.person.push(namePerson1);
    console.log(namePerson + " cadastrada!")
}
public newClient(namePerson:string, cpf:number):void {
    const cliente1 = new Client(namePerson, cpf);
    this.database.client.push(cliente1);
    cliente1.showData();
}
    //metodo para listar clientes
    public listClients(): void {
        this.database.client.forEach(client => client.showData());
    }
    //metodo para listar quartos do array
    public listRoom():void {
        this.database.room.forEach(room => room.showData());
    }
public newReservation(client:Client,roon:Room,days:number): void {
    const reserva1 = new Reservation(client,roon,days);
    reserva1.valueDays();
    this.database.reservation.push(reserva1);
    console.log("Reservas salvas:", this.database.reservation.length);
    reserva1.showData();
}
//metodo para listar reservas
public listReservations(): void {
    this.database.reservation.forEach(reservation => reservation.showData());
}
//metodopara buscar cliente no array pelo cpf
public findClient(cpf:number): Client | undefined {
    return this.database.client.find(client =>client.getCpf === cpf);
}
//metodo para buscar quartos
public findRoom(numberRoom:number ): Room | undefined {
    return this.database.room.find(room=> room.getNumber === numberRoom);
    // fazer metodos usando for no database
}
}

