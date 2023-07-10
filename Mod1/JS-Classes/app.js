
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