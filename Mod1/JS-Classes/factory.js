class Car {
  constructor(maker, serialNumber) {
    this.serialNumber = serialNumber;
    this.maker = maker;
  }
  drive() {
    console.log("Vroom Vroom");
  }
}

const newCar = new Car("Honda", 123456);

console.log(newCar);

newCar.drive();

//* Factory Class

class Factory {
  static colors = ["red", "yellow", "blue"]; // static
  #ss = 48458758; /// private

  constructor(company, ...colors) {
    this.company = company;
    this.cars = [];
    this._SS = 1;
  }
  generateCar() {
    const newCar = new Car(this.company, this.cars.length);
    this.cars.push(newCar);
  }
  findCar(index) {
    return this.cars[index];
  }

  static addColor(newColor) {
    this.colors.push(newColor);
    console.log(this.colors);
  }
  getSS() {
    console.log(this.#ss);
  }
  setSS() {

  }
}

console.log(Factory.colors);
Factory.addColor('Hot Pink');

const teslaFactory = new Factory("Tesla", "red", "green", "yellow");
teslaFactory._SS = 33;
console.log(teslaFactory);

teslaFactory.generateCar();
teslaFactory.generateCar();
teslaFactory.generateCar();
teslaFactory.generateCar();
teslaFactory.generateCar();

console.log(teslaFactory);
const firstCar = teslaFactory.findCar(0);
console.log(firstCar);
