/// <reference path="./product.ts" />

class productFactory {
    static getProduct() : Product {
        let random = Math.floor(Math.random() * 4);
        switch(random){
            case 0: return new CocaCola();
            case 1: return new Hershey();
            case 2: return new Gummies();
        }
    }
}