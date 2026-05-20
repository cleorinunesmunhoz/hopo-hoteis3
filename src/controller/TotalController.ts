import { Room } from './../models/Room';
import Client from "../models/Client";
import Database from "../database/Database";
import { Reservation } from '../models/Reservation';
import Service from '../service/service';
import HomeScreen from '../view/HomeScreen';


export default class TotalController {
    private database: Database = new Database();
    private service: Service = new Service(this.database);
//para inicializar o view no construtor
    constructor() {
        const home = new HomeScreen(this, this.service);
        home.initialScreen();
    }

    public newPersonName(namePerson: string): void {
        const namePerson1 = new Client(namePerson, 0);
        this.database.person.push(namePerson1);
        console.log(namePerson + " cadastrada!")
    }
    public newClient(namePerson: string, cpf: number): void {
        const cliente1 = new Client(namePerson, cpf);
        this.database.client.push(cliente1);
        cliente1.showData();
    }




    public newReservation(client: Client, roon: Room, days: number): void {
        const reserva1 = new Reservation(client, roon, days);
        reserva1.valueDays();
        this.database.reservation.push(reserva1);
        console.log("Reservas salvas:", this.database.reservation.length);
        reserva1.showData();
    }

    //metodo para listar reservas
    public listReservations(): void {
        this.database.reservation.forEach(reservation => reservation.showData());
    }



}

