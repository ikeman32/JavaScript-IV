/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

function Game(gameAtrib) {
    this.createdAt = gameAtrib.createdAt;
    this.name = gameAtrib.name;
    this.dimensions = gameAtrib.dimensions
}

Game.prototype.destroy = function() {
    console.log(`${this.name} was removed from the game.`);
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(statsAtrib) {
    Game.call(this, statsAtrib); //inherits from Game()
    this.healthPoints = statsAtrib.healthPoints;
}
CharacterStats.prototype = Object.create(Game.prototype);

CharacterStats.prototype.takeDamage = function() {
    const dmg = this.healthPoints - 2;
    const msg = `${this.name} took 2 points of damage and now has ${dmg} health points.`;
    console.log(msg);
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(humanoidAtrib) {
    CharacterStats.call(this, humanoidAtrib); //inherits from CharacterStats()
    this.team = humanoidAtrib.team;
    this.weapons = humanoidAtrib.weapons;
    this.language = humanoidAtrib.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
    console.log(`Greeting by ${this.name}:`, `Vedui' amin essa naa ${this.name}`);
}

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