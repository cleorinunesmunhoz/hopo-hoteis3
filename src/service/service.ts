import Database from "../database/Database";
import { Room } from "../models/Room";
import Client from "../models/Client";
import { Reservation } from "../models/Reservation";
import Listable from "../interface/Listable";

export default class Service {

    private database: Database;
    constructor(database: Database) {
        database: Database;
    }
    //metodo para buscar quartos
    public findRoom(numberRoom: number): Room | undefined {
        return this.database.room.find(room => room.getNumber === numberRoom);
    }
    //metodopara buscar cliente no array pelo cpf
    public findClient(cpf: number): Client | undefined {
        return this.database.client.find(client => client.getCpf === cpf);
    }


   // esse metodo nessa classe funciona assim, quando um item é colocado e implementado seja clinte,
   //quarto ou reserva ele identifica e mostra o item da listagem correta, quarto, cliente ou reserva
    public showStatus(item: Listable): void {
        item.showData();
    }

    //metodo para listar quartos do array
    public listRoom(): Room[] {
        return this.database.room;
    }
    //listar reservas
    listReservations(): Reservation[] {
        return this.database.reservation;
    }
    //metodo para listar clientes
    public listClients(): Client[] {
        return this.database.client;
    }

}