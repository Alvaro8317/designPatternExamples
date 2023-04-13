"use strict";
/**
 * How to implement Factory Method?
 *
 * 1. Declare base product class/interface, this will be returned by
 *  factory class and their sub classes.
 *
 * 2. Implement concrete products sub classes that inherits/implements
 *  the base product class/interface.
 *
 * Concrete products:
 *  - MastodonCar
 *  - RhinoCar
 *
 * 3. Declare base factory class/interface that returns objects that match
 *  the base product, not the concrete ones.
 *
 * Base factory:
 *  - CarFactory
 *
 * 4. Implement concrete factories sub classes that inherits/implements
 *  the base factory class/interface. These classes will return concrete
 *  products in their factory method.
 *
 * Concrete factories:
 *  - MastodonCarFactory
 *  - RhinoCarFactory
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* Step 2 - Implement concrete products sub classes that implements the base product class/interface */
var HttpAdapterExample = /** @class */ (function () {
    function HttpAdapterExample() {
        console.log('HttpAdapterExample implemented and created successfully (First test)');
    }
    HttpAdapterExample.prototype.get = function () { };
    HttpAdapterExample.prototype.post = function () { };
    HttpAdapterExample.prototype.put = function () { };
    HttpAdapterExample.prototype.delete = function () { };
    return HttpAdapterExample;
}());
var HttpAdapterExample2 = /** @class */ (function () {
    function HttpAdapterExample2() {
        console.log('HttpAdapterExample2 implemented and created successfully (Second test)');
    }
    HttpAdapterExample2.prototype.get = function () { };
    HttpAdapterExample2.prototype.post = function () { };
    HttpAdapterExample2.prototype.put = function () { };
    HttpAdapterExample2.prototype.delete = function () { };
    return HttpAdapterExample2;
}());
/* 4. Implement concrete factories sub classes that implements the base factory interface. These classes will return concrete products in their factory method. */
var HttpAdapterExampleFactory = /** @class */ (function () {
    function HttpAdapterExampleFactory() {
    }
    HttpAdapterExampleFactory.prototype.makeAdapter = function () {
        return new HttpAdapterExample;
    };
    return HttpAdapterExampleFactory;
}());
var HttpAdapterExampleFactory2 = /** @class */ (function () {
    function HttpAdapterExampleFactory2() {
    }
    HttpAdapterExampleFactory2.prototype.makeAdapter = function () {
        return new HttpAdapterExample2();
    };
    return HttpAdapterExampleFactory2;
}());
/* Extra */
var htppAdapterFactory = function (adapter) {
    switch (adapter) {
        case 'example':
            console.log('Example!!');
            return new HttpAdapterExampleFactory();
        case 'example2':
            return new HttpAdapterExampleFactory2();
        default:
            throw new Error('Nos implemented yet');
    }
};
var main = function () {
    var test = htppAdapterFactory('example');
    test.makeAdapter();
    console.log(test);
    var test2 = htppAdapterFactory('example2');
    test2.makeAdapter();
    console.log(test2);
};
main();
