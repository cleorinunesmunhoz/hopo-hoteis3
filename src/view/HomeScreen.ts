import Client from "../models/Client";
import { RoomType } from "../enum/RoomType";
import { Room } from "../models/Room";
import TotalController from "../controller/TotalController";

export default class HomeScreen {
    private controller: TotalController;

    constructor(controller: TotalController) {
        this.controller = controller;
    }
}