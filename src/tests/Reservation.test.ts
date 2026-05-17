import { Reservation } from "../models/Reservation";
import Client from "../models/Client";
import { Room } from "../models/Room";
import { RoomType } from "../enum/RoomType";

test("Reserva", () => {

    const c = new Client("Ana", 123);

    const r = new Room(1, RoomType.CASAL);

    const reserva = new Reservation(c, r, 2);

    reserva.valueDays();

    expect(reserva.getTotalValue).toBe(300);

});