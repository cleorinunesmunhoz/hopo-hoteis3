import Person from "./models/Person";
import Client from "./models/Client";

const Pessoa1 = new Person("zuleica");
console.log(Pessoa1.getName);

const cliente1 = new Client("0987654321", "analice");
cliente1.showData();
