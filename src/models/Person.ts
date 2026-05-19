export default abstract class Person {
    //essa classe é abstrata porque ninguem cria pessoa, mas pessoa existe
    //cria-se cliente que é uma pessoa, ela é uma estrutura base!

    abstract cpf: number;
    abstract metodoParaClasseFilha(): string;

    protected namePerson : string;

    constructor(namePerson:string) {
        this.namePerson = namePerson;
    }
    public get getNamePerson(): string {
        return this.namePerson;
    }
    public set setNamePerson(newName:string) {
        this.namePerson = newName;
    }
    //aqui sera herdade para a classe client gerando a sobrescrita
    public showData(): void {
        console.log("nome "+ this.getNamePerson);
    }

}
