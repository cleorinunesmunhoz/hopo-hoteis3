import Person from "./Person";

export default class Client extends Person {

    private cpf: number;

    constructor(namePerson:string,cpf:number) {
        super(namePerson);
        this.cpf = cpf;
    }
    public get getCpf(): number {
        return this.cpf;
    }
    public set setCpf(NewCpf: number) {
        this.cpf = NewCpf;
    }
    public showData(): void {
        console.log("nome "+ this.getNamePerson);
        console.log("CPF " + this.getCpf);
    }
}