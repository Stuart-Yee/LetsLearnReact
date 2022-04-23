class Ninja {
    constructor(name, health, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(`My name is ${this.name}`);
    }

    showStats() {
        console.log(
            `Name: ${this.name}\nHealth: ${this.health}\nSpeed:${this.speed}\nStrength: ${this.strength}`
            );
    }

    drinkSake(){
        this.health += 10;
    }
    
}

marty = new Ninja("Marty", 5, 9000, 9000);

marty.sayName();
marty.showStats();
marty.drinkSake();
marty.showStats();

class Sensei extends Ninja {
    constructor(name){
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }

    showStats(){
        super.showStats();
        console.log(`Wisdom: ${this.wisdom}`);
    }

    speakWisdom(){
        super.drinkSake();
        console.log("Nurture the mind, but do not neglect to nurture the body");
    }
}

senseiSplinter = new Sensei("Splinter");
senseiSplinter.showStats();
senseiSplinter.speakWisdom();
senseiSplinter.sayName();
senseiSplinter.showStats();

const myString = "Abbracadabra"
const result = myString.split("").map((val, idx)=> idx%2==0 ? val.toLowerCase() : val.toUpperCase()).join("");

console.log(result);

function ninjaBelt(ninja){
    return function belt(beltColor){ //note the closure here!
      console.log("Ninja "+ ninja + " has earned a " + beltColor +" belt.");
    }
  }
//   ninjaBelt('Eileen')('black'); //note the double invocation here.
ninjaBelt('Eileen'); //note the double invocation here.
  
  