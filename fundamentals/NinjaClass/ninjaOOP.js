class Ninja {
  constructor(name, health){
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }

  sayName(){
    console.log(this.name)
  }

  showStats(){
    console.log(`These are your stats ${this.name}, ${this.health}, ${this.speed}, ${this.strength}`)
  }

  drinkSake(){
    this.health += 10;
  }
}

const ninja1 = new Ninja("Hyabusa", 30);
ninja1.sayName();
ninja1.drinkSake()
ninja1.showStats();


class Sensei extends Ninja{
  constructor(name, health){
    super(name, health);
    this.wisdom = 10;
  }

  speakWisdom(){
    console.log(`What one programmer can do in one month, two programmers can do in two months`)
  }
}

const superSensei = new Sensei("Master Felix", 100);

superSensei.speakWisdom();
superSensei.drinkSake()
superSensei.showStats()