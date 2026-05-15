import { Room } from "../models/Room";
import { RoomType } from "../enum/RoomType";

test("Quarto casal deve valer 150", () => {

    const room = new Room(1, RoomType.CASAL);

    expect(room.getValue).toBe(150);

});