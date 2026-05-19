
const prompt = require("prompt-sync")();
import TotalController from "../controller/TotalController";

export default class HomeScreen {
    private controller: TotalController;

    //aqui no homesCreen tambem podemos dizer que é uma injecao de dependencia, pois recebe 
    //o controller tudo pronto para exibir!

    constructor(controller: TotalController) {
        this.controller = controller;
    }
    public initialScreen() {
        let option: number=0;
        while (option !==5) {
            console.log("          Hotel da Cleo       ");
            console.log("1.cadastrar cliente");
            console.log("2.cadastrar reserva");
            console.log("3.listar clientes e reservas");
            console.log("4.listar quartos disponiveis");
            console.log("5.sair");
            option = Number(prompt("Escolha uma opcao: "));
    switch(option) {
        case 1:

            const name = prompt("Digite o nome: ");
            const cpf = Number(prompt("Digite o cpf: "));
            this.controller.newClient(name,cpf);
            break;

        case 2:

            const cpfReservation = Number(prompt("Digite o cpf:"));
            const roomNumber = Number (prompt("Digite o numero do quarto:"));
            const days =Number (prompt("Digite quantos dias:"));
            
            const client = this.controller.findClient(cpfReservation);
            const room = this.controller.findRoom(roomNumber);

            if(client && room) {
                this.controller.newReservation(client,room,days)
            }
            else {
                console.log("Cliente ou quarto nao encontrado");
            }
            break;

            case 3:
                this.controller.listClients();
                this.controller.listReservations();
                break;
            case 4:
                this.controller.listRoom();

            case 5:
                    console.log("Sistema encerrado");
                 break;
                 
                 default:
                console.log("Opcao invalida");
                break;
            }
        }
    }
}