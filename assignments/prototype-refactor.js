/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

//old code
// function Game(gameAtrib) {
//     this.createdAt = gameAtrib.createdAt;
//     this.name = gameAtrib.name;
//     this.dimensions = gameAtrib.dimensions
// }

// Game.prototype.destroy = function() {
//     console.log(`${this.name} was removed from the game.`);
// }

class Game {
    constructor(gameAtrib) {
            this.createdAt = gameAtrib.createdAt;
            this.name = gameAtrib.name;
            this.dimensions = gameAtrib.dimensions
        } //constructor

    destroy() {
            return `${this.name} was removed from the game.`;
        } //destroy method
} //Game class

//cold code
// function CharacterStats(statsAtrib) {
//     Game.call(this, statsAtrib); //inherits from Game()
//     this.healthPoints = statsAtrib.healthPoints;
// }
// CharacterStats.prototype = Object.create(Game.prototype);

// CharacterStats.prototype.takeDamage = function() {
//     const dmg = this.healthPoints - 2;
//     const msg = `${this.name} took 2 points of damage and now has ${dmg} health points.`;
//     console.log(msg);
// }

class CharacterStats extends Game {
    constructor(statsAtrib) {
            super(statsAtrib); //for inheritance
            this.healthPoints = statsAtrib.healthPoints;
        } //constructor

    takeDamage() {
            const dmg = this.healthPoints - 2;
            const msg = `${this.name} took 2 points of damage and now has ${dmg} health points.`;
            return msg;
        } //takeDamage
} //CharacterStats class

//old code
// function Humanoid(humanoidAtrib) {
//     CharacterStats.call(this, humanoidAtrib); //inherits from CharacterStats()
//     this.team = humanoidAtrib.team;
//     this.weapons = humanoidAtrib.weapons;
//     this.language = humanoidAtrib.language;
// }
// Humanoid.prototype = Object.create(CharacterStats.prototype);

// Humanoid.prototype.greet = function() {
//     console.log(`Greeting by ${this.name}:`, `Vedui' amin essa naa ${this.name}`);
// }


//new code
class Humanoid extends CharacterStats {
    constructor(humanoidAtrib) {
            super(humanoidAtrib); //for inheritance
            this.team = humanoidAtrib.team;
            this.weapons = humanoidAtrib.weapons;
            this.language = humanoidAtrib.language;
        } //constructor

    greet() {
            return `Greeting by ${this.name}:`, `Vedui' amin essa naa ${this.name}`;
        } //greet
} //Humanoid class

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

console.log("This is the exact same out put as yesterday but only using classes");
console.log(`${mage.name} was create on:`, mage.createdAt); // Today's date
console.log(`${archer.name}'s dimensions are:`, archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(`${swordsman.name} health points`, swordsman.healthPoints); // 15
console.log(`The name of the mage is`, mage.name); // Bruce
console.log("The team for the wordsman is", swordsman.team); // The Round Table
console.log("The mage's weapons are", mage.weapons); // Staff of Shamalama
console.log("The archer speaks", archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.