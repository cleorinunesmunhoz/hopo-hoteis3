import Person from "./models/Person";
import Client from "./models/Client";
import TotalController from "./controller/TotalController";
import { Room } from "./models/Room";
import { RoomType } from "./enum/RoomType";
import { Reservation } from "./models/Reservation";
import HomeScreen from "./view/HomeScreen";
// const Pessoa1 = new Person("zuleica");
// console.log(Pessoa1.getName);

// const cliente1 = new Client("mariaantonia",9887654321);
// cliente1.showData();

 //const controller = new TotalController();
//controller.newPersonName("cleo");
//controller.newClient("analice",+ " 947122");

// const client = new Client("Analice", 12345);

// const room = new Room(1, RoomType.CASAL);

// const reservation = new Reservation(client, room, 2);

// reservation.valueDays();

// reservation.showData();

// const client = new Client("Analice", 12345);

// const room = new Room(1, RoomType.CASAL);

// const reservation = new Reservation(
//     client,
//     room,
//     2
// );

// reservation.valueDays();

// reservation.showData();


const controller = new TotalController();





// controller.newClient("Analice", 12345);

// const client = controller.findClient(12345);
// const room = controller.findRoom(3);

// if (client && room) {
//     controller.newReservation(client, room, 4);
// }

// controller.listReservations();