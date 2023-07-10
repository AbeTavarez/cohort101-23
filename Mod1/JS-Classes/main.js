class Cat {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.sound = 'Meow!';
        this.legs = 4;
    }

    makeSound() {
        console.log(`This cat makes the sound: ${this.sound}`);
    }

    catInfo(){
        // console.log(`The cat ${this.name} is ${this.age}`);
        return `The cat ${this.name} is ${this.age}`;
    }
}

const myCat = new Cat('Luna', 'black', 3);

// console.log(myCat.name);
// console.log(myCat.age);
// console.log(myCat.sound);

// myCat.makeSound();
// myCat.catInfo();
console.log(myCat.catInfo());

const details = myCat.catInfo();
console.log(details);


class Pirate {
    constructor(name, age, weakness) {
        this.name = name;
        this.age = age;
        this.weakness = weakness;
    }

    pirateDetails() {
        return `PIRATE INFO: Name: ${this.name} Age: ${this.age}`;
    }
}

const jack = new Pirate('Jack', 38, 'water');
const john = new Pirate('John', 28, 'Mosquitos');
const jane = new Pirate('Jane', 30, 'Salt Water');

// const blackPearl = [jack, john, jane];

const blackPearl = [];

blackPearl.push(jack, john, jane);

console.log(blackPearl);

for (const pirate of blackPearl) {
    console.log(pirate);
    
    for ( const [key, value] of Object.entries(pirate) ){
        console.log(key, value);
    }

    // console.log(pirate.name);
    // console.log(pirate.age);
    // console.log(pirate.weakness);
}
