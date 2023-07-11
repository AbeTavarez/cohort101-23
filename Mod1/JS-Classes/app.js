
// class declaration
class Character {

    constructor (name, age, eyes, hair, loveCats = false, loveDogs) {
        this.legs = 2;
        this.arms = 2;
        this.eyes = eyes;
        this.hair = hair;
        this.name = name;
        this.age = age;
        this.loveCats = loveCats;
        this.loveDogs = loveDogs || false;
      }

    great(otherCharacter) {
        console.log('Hi ' + otherCharacter + '!');
    }

    smite () {
        console.log('I smite thee you vile person');
      }

      // setter function
      setHair(hairColor) {
        this.hair = hairColor;
      }

      classyGreeting (otherClassyCharacter) {
        console.log('Greetings ' + otherClassyCharacter.name + '!');
      }

}

// instances
const me = new Character('Abe', 30, 'brown', 'black');
const you = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true);

console.log(me);
console.log(you);

console.log(typeof me);
console.log(typeof you);

me.great('John');
you.great('Jane');

// Setter: setHair 
me.setHair('pink');
console.log(me.hair);

me.classyGreeting(you);
you.classyGreeting(me);


class Hobbit extends Character {

  constructor(name, age, eyes, hair, loveCats , loveDogs, pet, ...skills) {
    super(name, age, eyes, hair, loveCats , loveDogs); //! always call the super first!
    this.skills = skills;
    this.superAttack = 'Fireball';
    this.health = 3000;
    this.damage = 500;
    this.pet = pet;
  }

  steal() {
    console.log('lets get away!');
  }

  great(otherCharacter) {
    console.log('HELLO ' + otherCharacter + '!');
  }
  
  smite() {
    super.smite(); // calling the smite method from the parent class or super class
    this.steal(); // calling the steal method from the Hobbit class
  }
}

const frodo = new Hobbit('Frodo', 30, 'brown', 'black', true, true, 'Fox', "thievery", "speed", "willpower");
console.log(frodo.great('Anna'));


console.log(frodo.great('Alex'));
console.log(frodo instanceof Character);
frodo.smite();
console.log(frodo);