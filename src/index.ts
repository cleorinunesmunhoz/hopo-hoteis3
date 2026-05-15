import Person from "./models/Person";
import Client from "./models/Client";
import TotalController from "./controller/TotalController";

// const Pessoa1 = new Person("zuleica");
// console.log(Pessoa1.getName);

// const cliente1 = new Client("0987654321", "analice");
// cliente1.showData();

 const controller = new TotalController();
// controller.newPersonName("cleo");
controller.newClient("analice",+ " 047122");