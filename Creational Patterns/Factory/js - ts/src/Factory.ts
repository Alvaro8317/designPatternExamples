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

/* STEP 1 - Declare a base interface */

interface HttpAdapterBase {
  get(): void;
  post(): void;
  put(): void;
  delete(): void;
}

/* Step 2 - Implement concrete products sub classes that implements the base product class/interface */

class HttpAdapterExample implements HttpAdapterBase {
  public constructor() {
    console.log(
      'HttpAdapterExample implemented and created successfully (First test)'
    );
  }
  public get(): void {}
  public post(): void {}
  public put(): void {}
  public delete(): void {}
}

class HttpAdapterExample2 implements HttpAdapterBase {
  public constructor() {
    console.log(
      'HttpAdapterExample2 implemented and created successfully (Second test)'
    );
  }
  public get(): void {}
  public post(): void {}
  public put(): void {}
  public delete(): void {}
}

/* Step 3 - Declare base factory interface that returns objects that match the base product, not the concrete ones.*/
type adapters = 'example' | 'example2';

interface HttpAdapterFactory {
  makeAdapter(): HttpAdapterBase;
}

/* 4. Implement concrete factories sub classes that implements the base factory interface. These classes will return concrete products in their factory method. */

class HttpAdapterExampleFactory implements HttpAdapterFactory {
  public makeAdapter(): HttpAdapterBase {
    return new HttpAdapterExample();
  }
}

class HttpAdapterExampleFactory2 implements HttpAdapterFactory {
  public makeAdapter(): HttpAdapterBase {
    return new HttpAdapterExample2();
  }
}

/* Extra */

const validateAdapter = (adapter: adapters): HttpAdapterFactory => {
  switch (adapter) {
    case 'example':
      return new HttpAdapterExampleFactory();
    case 'example2':
      return new HttpAdapterExampleFactory2();
    default:
      throw new Error('Nos implemented yet');
  }
};

const callAdapter = (httpAdapter: adapters) => {
  const httpAdapterToCall = validateAdapter(httpAdapter);
  httpAdapterToCall.makeAdapter();
  console.log(httpAdapterToCall)
};

const main = () => {
  callAdapter('example');
  callAdapter('example2');
};

main();

export {};
