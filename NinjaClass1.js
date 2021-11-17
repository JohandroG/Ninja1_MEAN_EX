class Ninja{

    constructor(name){
        this.name = name;
        this.health = 100;
        var speed = 3;
		var strength = 3;

        this.showStats = function() {
            console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
            return this;
        }
    
    }

        sayName() {
			console.log("My name is " + this.name);
			return this;
		}

		drinkSake(){
			this.health += 10;
			return this;
		}

}

const ninja = new Ninja("Juanito");
const ninja2 = new Ninja("Pedro");
		ninja.sayName();
		ninja2.showStats();