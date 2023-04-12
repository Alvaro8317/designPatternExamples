"use strict";
/**
 * How to implement SingletonTypeScript?
 *
 * 1. Make the constructor private
 * 2. Create a static method who calls the private
 *  constructor and save the instance in a static variable
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    /* Constructor */
    function Product(_a) {
        var id = _a.id, name = _a.name, cost = _a.cost;
        this.id = id;
        this.name = name;
        this.cost = cost;
    }
    Object.defineProperty(Product.prototype, "getId", {
        /* Methods */
        /* Getters and setters */
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "setId", {
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getCost", {
        get: function () {
            return this.cost;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "setCost", {
        set: function (cost) {
            this.cost = cost;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var ShoppingCar = /** @class */ (function () {
    function ShoppingCar() {
        this.products = [];
    }
    ShoppingCar.prototype.add = function (product) {
        this.products.push(product);
    };
    ShoppingCar.prototype.deleteById = function (id) {
        // throw new Error('Not implemented, please create a HU');
        return this.products;
        // this.products
    };
    ShoppingCar.getInstance = function () {
        if (!ShoppingCar.instance)
            ShoppingCar.instance = new ShoppingCar();
        return ShoppingCar.instance;
    };
    return ShoppingCar;
}());
var main = function () {
    /* Creation of ShoppingCart */
    var shoppingCar = ShoppingCar.getInstance();
    /* Creation of products */
    var productA = new Product({ id: 1, name: 'Termo', cost: 40000 });
    var productB = new Product({ id: 2, name: 'Termo2', cost: 50000 });
    var productC = new Product({ id: 3, name: 'Termo3', cost: 60000 });
    /* Asign the products to the shopping car */
    shoppingCar.add(productA);
    shoppingCar.add(productB);
    shoppingCar.add(productC);
    console.log(shoppingCar.deleteById);
    /* Checks if I'm applying the Singleton Dessign Pattern */
    var shoppingCar2 = ShoppingCar.getInstance();
    console.log("Is the same shopping car? 1 and 2: ".concat(shoppingCar === shoppingCar2));
};
main();
