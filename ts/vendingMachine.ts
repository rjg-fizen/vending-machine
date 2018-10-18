/// <reference path="./coin.ts" />
/// <reference path="./product.ts" />
/// <reference path="./productFactory.ts" />

enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}

class Cell {
    constructor(public product: Product){

    }
    public stock  = ko.observable(3);
    sold = ko.observable(false);
}

class VendingMachine {
    private paid = ko.observable(0);
    acceptedCoins : Coin[] =[new Dime(), new Quarter(), new Half(), new Dollar()];
    cells = ko.observableArray([])
    selectedCell = ko.observable(new Cell(new Initial()));
    canPay = ko.pureComputed(() => this.paid() - this.selectedCell().product.price >= 0);


    set Size(givenSize : VendingMachineSize){
        this.cells([]);

        for(let i = 0; i < givenSize; i++){
            let product = productFactory.getProduct();
            this.cells.push(new Cell(product));
        }
    }

    acceptCoin = (coin: Quarter) : void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.Value);
    }

    select = (cell : Cell) : void => {
        cell.sold(false);
        this.selectedCell(cell)
    }

    pay = (): void => { 
        if (this.selectedCell().stock() < 1){
            alert("out of stock");
            return;
        }

        let currentPaid = this.paid();
        this.paid(Math.round(((currentPaid - this.selectedCell().product.price) * 100))/100);
        let currentStock = this.selectedCell().stock();
        this.selectedCell().stock(currentStock - 1);
        this.selectedCell().sold(true);
    }
}