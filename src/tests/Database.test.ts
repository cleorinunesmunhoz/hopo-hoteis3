import Database from "../database/Database";
import { RoomType } from "../enum/RoomType";

test("Hotel deve ter 50 quartos", () => {

    const database = new Database();

    expect(database.room.length).toBe(50);

});

test("Deve ter 20 quartos casal", () => {

    const database = new Database();

    const casal = database.room.filter(
        room => room.getType === RoomType.CASAL
    );

    expect(casal.length).toBe(20);

});

test("Deve ter 20 quartos solteiro", () => {

    const database = new Database();

    const solteiro = database.room.filter(
        room => room.getType === RoomType.SOLTEIRO
    );

    expect(solteiro.length).toBe(20);

});

test("Deve ter 10 quartos luxo", () => {

    const database = new Database();

    const luxo = database.room.filter(
        room => room.getType === RoomType.LUXO
    );

    expect(luxo.length).toBe(10);

});