/// <reference path="productCategory.ts" />

interface Product { 
    name: string;
    price: number;
    category?: ProductCategory;
}

class Initial implements Product {
    name: string = "Please select a product.";
    price: number = 0;
    category = null;
}

class CocaCola implements Product {
    name = "Coca-Cola";
    price = 2.30;
    category = new SodaCategory();
}

class Gummies implements Product {
    name = "Gummies";
    price = 1.90;
    category = new CandyCategory();
}

class Hershey implements Product {
    name = "Hershey's";
    price = 1.30;
    category = new CandyCategory();
}

