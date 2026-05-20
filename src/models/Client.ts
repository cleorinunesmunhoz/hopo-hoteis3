import Person from "./Person";
import Listable from "../interface/Listable";


export default class Client extends Person implements Listable {
    metodoParaClasseFilha(): string {
       return ""
    }

    public cpf: number = 0;
    



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
   
    //aqui implementei a SOBRESCRITA que  é implementar o mesmo método da classe pai na classe filha usando override
    //A sobrescrita permite:
    //manter o mesmo nome do método
    //mas adaptar o comportamento para a classe filha.
    //quando chamada essa classe ela vai mostar tanto nome quando cpf,
    //lembrando que o nome e herdado de person
    public override showData(): void {
        console.log("nome "+ this.getNamePerson);
        console.log("CPF " + this.getCpf);
    }

   
} 