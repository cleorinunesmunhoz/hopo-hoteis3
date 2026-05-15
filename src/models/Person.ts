export default class Person {

    private namePerson : string;

    constructor(name:string) {
        this.namePerson = name;
    }
    public get getNamePerson(): string {
        return this.namePerson;
    }
    public set setNamePerson(newName:string) {
        this.namePerson = newName;
    }
}
