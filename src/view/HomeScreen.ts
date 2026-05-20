
const prompt = require("prompt-sync")();
import TotalController from "../controller/TotalController";
import Service from "../service/service";

export default class HomeScreen {
    private controller: TotalController;
    private service:Service;

    //aqui no homesCreen tambem podemos dizer que é uma injecao de dependencia, pois recebe 
    //o controller tudo pronto para exibir!

    constructor(controller: TotalController, service:Service) {
        this.controller = controller;
        this.service = service;
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
            
            const client = this.service.findClient(cpfReservation);
            const room = this.service.findRoom(roomNumber);

            if(client && room) {
                this.controller.newReservation(client,room,days)
            }
            else {
                console.log("Cliente ou quarto nao encontrado");
            }
            break;

            case 3:
                this.service.listClients();
                this.service.listReservations();
                break;
            case 4:
                this.service.listRoom();

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