
class Vehicle {
    constructor(vin, make, color, model, type, weight) {
        this.vin = vin;
        this.make = make;
        this.color = color;
        this.model = model;
        this.type = type;
        this.weight = weight;
        this.running = false;
    }

    start() {
        this.running = true;
        console.log('Running...');
    }

    stop() {
        this.running = false;
        console.log('Stopped...');
    }
    // overriding the toString method from the Object class
    toString() {
        console.log(`The vehicle ${this.make}  has the vin# ${this.vin}`);
    }
}

// creating an instance of the class Vehicle
const ford = new Vehicle('7er3gr7', 'Ford','mustang', 'red', 'gasoline', 3000);

const toyota = new Vehicle('uu74gr', 'Toyota', 'Prius', 'black', 'gasoline', 2000);

const tesla = new Vehicle('7u34r', 'Tesla', 'Y', 'white', 'electric', 3500);

console.log(ford);
console.log(toyota);
console.log(tesla);

ford.start(); // this.running = true

console.log(ford);

ford.stop(); // this.running = false

console.log(ford);

ford.toString();
tesla.toString();
toyota.toString();









// const nums = [1, 2, 3];
// instance methods
// nums.forEach(num => console.log(num));

// static methods
// console.log( Math.random() );
