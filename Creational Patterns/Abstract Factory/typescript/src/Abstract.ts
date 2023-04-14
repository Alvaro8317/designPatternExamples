/**
 * How to implement Abstract Factory?
 *
 * 1. Declare base products classes/interfaces for each product
 *  in the catalog.
 *
 * Base products:
 *  - CPU
 *  - Memory
 *  - Display
 *
 * 2. Implement concrete products classes that inherits/implements
 *  base products classes/interfaces, the number of concrete prodcuts
 *  will depend on the number of families.
 *
 * Concrete products:
 *  - PhoneCPU
 *  - PhoneMemory
 *  - PhoneDisplay
 *  - ...
 * 3. Declare abstract factory class/interface that declare creation
 *  methods for each base product. The return value could be the base
 *  products types or concrete products types.
 *
 * Abstract Factory:
 *   - ITechFactory
 *
 * 4. Create concrete factories that implements/inherits from the
 *  abstract factory behaviour and implements all the products creation
 *  methods. The number of concrete factories will depend of the number
 *  of product families.
 *
 * Concrete Factories:
 *  - Tablet
 *  - Phone
 *  - Laptop
 *
 */

/* 
Products:
- CPU
- Memory
- Display

Families:
- Phone
- Laptop
- Tablet
*/
/* Step 1 */
interface ICPU {
  setSeries(serie: string): void;
}

interface IMemory {
  setCapacityInGb(memory: number): void;
}

interface IDisplay {
  setResolution(): void;
}

/* Step 2 */

class LaptopCPU implements ICPU {
  setSeries(serie: string): void {
    console.log('Setting the serie in the laptop, serie: ', serie);
  }
}
class LaptopMemory implements IMemory {
  setCapacityInGb(memory: number): void {
    console.log('Setting the capacity in the laptop: ', memory);
  }
}
class LaptopDisplay implements IDisplay {
  setResolution(): void {
    console.log('Setting the resolution in the laptop');
  }
}

class PhoneCPU implements ICPU {
  setSeries(serie: string): void {
    console.log('Setting the Series in the Phone, serie: ', serie);
  }
}
class PhoneMemory implements IMemory {
  setCapacityInGb(memory: number): void {
    console.log('Setting the CapacityInGb in the Phone: ', memory);
  }
}
class PhoneDisplay implements IDisplay {
  setResolution(): void {
    console.log('Setting the Resolution in the Phone');
  }
}

class TabletCPU implements ICPU {
  setSeries(serie: string): void {
    console.log('Setting the Series in the Tablet, serie: ', serie);
  }
}
class TabletMemory implements IMemory {
  setCapacityInGb(memory: number): void {
    console.log('Setting the CapacityInGb in the Tablet: ', memory);
  }
}
class TabletDisplay implements IDisplay {
  setResolution(): void {
    console.log('Setting the Resolution in the Tablet');
  }
}

/* Step 3 */
interface ITechFactory {
  createCPU(): ICPU;
  createMemory(): IMemory;
  createDisplay(): IDisplay;
}

/* Step 4 */

class PhoneFactory implements ITechFactory {
  public createCPU(): ICPU {
    return new PhoneCPU();
  }
  public createMemory() {
    return new PhoneMemory();
  }
  public createDisplay(): IDisplay {
    return new PhoneDisplay();
  }
}

class TabletFactory implements ITechFactory {
  createCPU(): ICPU {
    return new TabletCPU();
  }
  createMemory(): IMemory {
    return new TabletMemory();
  }
  createDisplay(): IDisplay {
    return new TabletDisplay();
  }
}

class LaptopFactory implements ITechFactory {
  createCPU(): ICPU {
    return new LaptopCPU();
  }
  createMemory(): IMemory {
    return new LaptopMemory();
  }
  createDisplay(): IDisplay {
    return new LaptopDisplay();
  }
}

type techElements = 'laptop' | 'tablet' | 'phone';
const createFactory = (
  element: techElements,
  series: string,
  memoryInGb: number
): void => {
  const factories = {
    laptop: LaptopFactory,
    phone: PhoneFactory,
    tablet: TabletFactory,
  };
  const Factory = factories[element];
  const elementTechToCall = new Factory();
  elementTechToCall.createCPU().setSeries(series);
  elementTechToCall.createDisplay().setResolution();
  elementTechToCall.createMemory().setCapacityInGb(memoryInGb);
};

const runFabricTech = () => {
  createFactory('laptop', 'i9 10900K', 256);
  createFactory('phone', 'Snapdragon 10', 128);
  createFactory('tablet', 'SnapTablet', 32);
};

runFabricTech();
