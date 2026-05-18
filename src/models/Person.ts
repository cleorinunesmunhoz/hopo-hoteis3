export default class Person {

    private namePerson : string;

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
