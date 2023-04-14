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
 *   - TechFactory
 *
 * 4. Create concrete factories that implements/inherits from the
 *  abstract factory behaviour and implements all the products creation
 *  methods. The number of concrete factories will depend of the number
 *  of product families.
 *
 * Concrete Factories:
 *  - SedanCarFactory
 *  - HatchbackCarFactory
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
  setSeries(serie: string): void {}
}
class LaptopMemory implements IMemory {
  setCapacityInGb(memory: number): void {}
}
class LaptopDisplay implements IDisplay {
  setResolution(): void {}
}

class PhoneCPU implements ICPU {
  setSeries(serie: string): void {}
}
class PhoneMemory implements IMemory {
  setCapacityInGb(memory: number): void {}
}
class PhoneDisplay implements IDisplay {
  setResolution(): void {}
}

class TabletCPU implements ICPU {
  setSeries(serie: string): void {}
}
class TabletMemory implements IMemory {
  setCapacityInGb(memory: number): void {}
}
class TabletDisplay implements IDisplay {
  setResolution(): void {}
}

/* Step 3 */
interface techFactory {
  createCPU: ICPU;
  createMemory: IMemory;
  createDisplay: IDisplay;
}

/* Step 4 */

class Phone implements techFactory {
  createCPU(): ICPU {}
}
