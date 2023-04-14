/* Step 1 - Builder interface - Here you declare the steps that all the products need*/
interface BuilderOfHotDog {
  withSauces(hasSauces: boolean): MexicanHotDog;
  withHam(howMany: number): MexicanHotDog;
  withCheese(howMany: number): MexicanHotDog;
  withSausage(howMany: number): MexicanHotDog;
  withEggs(howMany: number): MexicanHotDog;
  withSpicy(isSpicy: boolean): MexicanHotDog;
  reset(): void;
  build(): void;
}

/* Step 2 - Concrete builders - Here you leave the concrete builders */

class MexicanHotDog implements BuilderOfHotDog {
  private hotDog;
  constructor() {
    this.reset();
  }
  reset(): void {
    this.hotDog = new MexicanHotDog();
  }
  withSauces(hasSauces: boolean): MexicanHotDog {
    console.log('With Sauces!');
    this.hotDog.sauces = hasSauces;
    return this;
  }
  withHam(howMany: number): MexicanHotDog {
    console.log('With Ham!');
    this.hotDog.ham = howMany;
    return this;
  }
  withCheese(howMany: number): MexicanHotDog {
    console.log('With Cheese!');
    this.hotDog.cheese = howMany;
    return this;
  }
  withSausage(howMany: number): MexicanHotDog {
    console.log('With Sausage!');
    this.hotDog.sausage = howMany;
    return this;
  }
  withEggs(howMany: number): MexicanHotDog {
    console.log('With Eggs!');
    this.hotDog.eggs = howMany;
    return this;
  }
  withSpicy(isSpicy: boolean): MexicanHotDog {
    console.log('With Spicy!');
    this.hotDog.spicy = isSpicy;
    return this;
  }
  build(): MexicanHotDog {
    this.reset();
    return this;
  }
}

/* Step 3 - The object result */

class HotDog {
  public parts: String[] = [];
  public listHotDogParts(): void {
    console.log(`Product parts: ${this.parts.join(', ')}\n`);
  }
}

/* Step 4 - Define the director, this director define the order of the construction */
class Director {
  private builder: BuilderOfHotDog;
  public setBuilder(builder: BuilderOfHotDog): void {
    this.builder = builder;
  }
  public makeBasicHotDog(): void {
    this.builder.withSausage(1);
    this.builder.withSauces(true);
  }
  public makeMexicanHotDog(): void {
    this.builder.withSauces(true);
    this.builder.withHam(2);
    this.builder.withCheese(2);
    this.builder.withSausage(3);
    this.builder.withEggs(4);
    this.builder.withSpicy(true);
  }
}

const clientCode = (director: Director) => {
  const builder = new MexicanHotDog();
  director.setBuilder(builder);
  console.log('Basic hot dog');
  director.makeBasicHotDog();
  const result = builder.build();
  console.log(result);
};
