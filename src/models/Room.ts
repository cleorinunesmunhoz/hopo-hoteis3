import { RoomType } from "../enum/RoomType";

export class Room {
    private numberRoom: number;
    private type: RoomType;
    private value: number=0;
//aqui no construtor ja estou deixando definido os valores com if(decisao simples),
//  se escolher quarto de casal
//é 150 o valor da diaria, solteiro 100 e luxo 200.
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
    public get getValue(): number {
        return this.value;
    }
    public showData(): void {
        console.log(this.numberRoom);
        console.log(this.type);
        console.log(this.value);
    }
}