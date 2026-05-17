import Person from "./models/Person";
import Client from "./models/Client";
import TotalController from "./controller/TotalController";
import { Room } from "./models/Room";
import { RoomType } from "./enum/RoomType";
import { Reservation } from "./models/Reservation";
// const Pessoa1 = new Person("zuleica");
// console.log(Pessoa1.getName);

// const cliente1 = new Client("0987654321", "analice");
// cliente1.showData();

 //const controller = new TotalController();
// controller.newPersonName("cleo");
//controller.newClient("analice",+ " 047122");

// const client = new Client("Analice", 12345);

// const room = new Room(1, RoomType.CASAL);

// const reservation = new Reservation(client, room, 2);

// reservation.valueDays();

// reservation.showData();

const client = new Client("Analice", 12345);

const room = new Room(1, RoomType.CASAL);

const reservation = new Reservation(
    client,
    room,
    2
);

reservation.valueDays();

reservation.showData();