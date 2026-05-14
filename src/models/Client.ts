import Person from "./Person";

export default class Client extends Person {

    private cpf: string;

    constructor(cpf:string, name:string) {
        super(name);
        this.cpf = cpf;
    }
    public get getCpf(): string {
        return this.cpf;
    }
    public set setCpf(NewCpf: string) {
        this.cpf = NewCpf;
    }
    public showData(): void {
        console.log("nome "+ this.getName);
        console.log("CPF " + this.getCpf);
    }
}