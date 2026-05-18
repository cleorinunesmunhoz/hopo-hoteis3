import TotalController from "../controller/TotalController";
import Client from "../models/Client";
import { Room } from "../models/Room";
import { RoomType } from "../enum/RoomType";

// test("Criar reserva", () => {

//     const controller = new TotalController();

//     const client = new Client("Cleo", 123);

//     const room = new Room(1, RoomType.CASAL);

//     controller.newReservation(client, room, 2);

// });

test("Deve encontrar quarto pelo numero", () => {
    const controller = new TotalController();

    const room = controller.findRoom(4);

    expect(room?.getNumber).toBe(4);
});