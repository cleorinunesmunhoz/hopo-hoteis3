import TotalController from "../controller/TotalController";

describe("Teste cliente", () => {

    test("Deve criar cliente", () => {

        const controller = new TotalController();

        controller.newClient("Analice", 12345);

        expect(controller["database"].client.length).toBe(1);

    });

});
