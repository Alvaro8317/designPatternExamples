/**
 * How to implement SingletonTypeScript?
 *
 * 1. Make the constructor private
 * 2. Create a static method who calls the private
 *  constructor and save the instance in a static variable
 */

interface ProductProps {
  id: number;
  name: string;
  cost: number;
}

class Product {
  /* Properties */

  private id: number;
  private name: string;
  private cost: number;

  /* Constructor */

  constructor({ id, name, cost }: ProductProps) {
    this.id = id;
    this.name = name;
    this.cost = cost;
  }

  /* Methods */

  /* Getters and setters */

  public get getId(): number {
    return this.id;
  }
  public set setId(id) {
    this.id = id;
  }

  public get getName(): string {
    return this.name;
  }
  public set setName(name) {
    this.name = name;
  }

  public get getCost(): number {
    return this.cost;
  }
  public set setCost(cost) {
    this.cost = cost;
  }
}

class ShoppingCar {
  private products: Array<Product> = [];
  private static instance: ShoppingCar;

  private constructor() {}

  public add(product: Product): void {
    this.products.push(product);
  }

  public deleteById(id: number): Product[] {
    // throw new Error('Not implemented, please create a HU');
    return this.products
    // this.products
  }

  public static getInstance(): ShoppingCar {
    if (!ShoppingCar.instance) ShoppingCar.instance = new ShoppingCar();
    return ShoppingCar.instance;
  }
}

const main = () => {
  /* Creation of ShoppingCart */
  const shoppingCar = ShoppingCar.getInstance();
  /* Creation of products */
  const productA = new Product({ id: 1, name: 'Termo', cost: 40000 });
  const productB = new Product({ id: 2, name: 'Termo2', cost: 50000 });
  const productC = new Product({ id: 3, name: 'Termo3', cost: 60000 });
  /* Asign the products to the shopping car */
  shoppingCar.add(productA);
  shoppingCar.add(productB);
  shoppingCar.add(productC);
  console.log(shoppingCar.deleteById);
  /* Checks if I'm applying the Singleton Dessign Pattern */
  const shoppingCar2 = ShoppingCar.getInstance();
  console.log(`Is the same shopping car? 1 and 2: ${shoppingCar === shoppingCar2}`);
};

main();

export {};
