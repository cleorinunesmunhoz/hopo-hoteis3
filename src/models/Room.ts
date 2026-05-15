import { RoomType } from "../enum/RoomType";

export class Room {
    private type: RoomType;
    private value: number;

    constructor(type:RoomType, value:number) {
        this.type = type;
        this.value = value;
    }
    public get getType():RoomType {
        return this.type;
    }
    public set setType(newType:  RoomType) {
        this.type = newType;
    }
    public get getValue():number {
        return this.value;
    }
    public set setDays(newValue: number){
        this.value = newValue;
    }
    public showData(): void {
        console.log(this.type);
        console.log(this.value);
    }
}