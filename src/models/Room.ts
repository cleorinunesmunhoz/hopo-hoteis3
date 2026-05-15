import { RoomType } from "../enum/RoomType";

export class Room {
    private numberRoom: number;
    private type: RoomType;
    private value: number=0;

    constructor(numberRoom:number,type:RoomType) {
        this.numberRoom=numberRoom;
        this.type = type;

        if(type ===RoomType.CASAL) {
            this.value = 150;
        }
        if(type ===RoomType.SOLTEIRO) {
            this.value = 100;
        }
        if(type === RoomType.LUXO) {
            this.value = 200;
        }
    }
    public get getNumber(): number {
        return this.numberRoom;
    }

    public get getType():RoomType {
        return this.type;
        
    }
    public set setType(newType:  RoomType) {
        this.type = newType;
    }
    public showData(): void {
        console.log(this.numberRoom);
        console.log(this.type);
        console.log(this.value);
    }
}