// CODE here for your Lambda Classes

class School {
    constructor(school) {
        this.schoolName = school.schoolName;
    }
    gradeStudent() {

    }
    intialGrade(grade) {
        return grade;
    }
}

class Person extends School {
    constructor(pAtrib) {
            super(pAtrib);
            this.name = pAtrib.name;
            this.age = pAtrib.age;
            this.location = pAtrib.location;
        } //constructor

    speak() {
            return `Hello my name is ${this.name} I am from ${this.location}!`;
        } //speak


} //Person class



const lambda = new School({
    schoolName: 'Lambda'
});


class Instructor extends Person {
    constructor(insAtrib) {
            super(insAtrib); //for inheritance
            this.specialty = insAtrib.specialty;
            this.favLanguage = insAtrib.favLanguage;
            this.catchPhrase = insAtrib.catchPhrase;
        } //constructor

    demo(subject) {
            return `Today we are learning about ${subject}`;
        } //demo

    grade(student, subject) {
            return `${student} recieves a perfect score on ${subject}!`;
        } //grade
} //Instructor calss

class Student extends Person {
    constructor(sAtrib) {
            super(sAtrib); //for inheritance
            this.previousBackground = sAtrib.previousBackground;
            this.className = sAtrib.className;
            this.classGrade = sAtrib.classGrade;
            this.favSubjects = sAtrib.favSubjects;
        } //constructor

    listSubjects() {
            return `${this.name}'s favorite subjects: ${this.favSubjects}`;
        } //listSubjects

    PRAssignment(subject) {
            return `${this.name} has submitted a PR for ${subject}.`;
        } //PRAssignment

    sprintChallenge(subject) {
            return `${this.name} has begun sprint challenge for ${subject}.`
        } //sprintChallenge
} //Student class


class ProjectManager extends Person {
    constructor(pmAtrib) {
            super(pmAtrib); //for inheritance
            this.gradClassName = pmAtrib.gradClassName;
            this.favInstructor = pmAtrib.favInstructor;
        } //constructor

    standUp(slackChannel) {
            return `${this.name} announces to ${slackChannel}, @channel standy times!`
        } //standUP

    debugsCode(student, subject) {
            return `${this.name} debugs ${student}'s code on ${subject}`;
        } //debugsCode
} //ProjectManager

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    schoolName: lambda.schoolName,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

let myGrade = lambda.intialGrade(75);

const david = new Student({

    name: 'David',
    location: 'Moses Lake, WA',
    age: 48,
    schoolName: lambda.schoolName,
    previousBackground: 'US Army Veteran',
    className: 'WEB24',
    classGrade: myGrade,
    favSubjects: ['Web-Dev', 'Programming', 'Computers']
});

const gab = new ProjectManager({
    name: 'Gabriel',
    location: 'USA',
    age: 47,
    schoolName: lambda.schoolName,
    gradClassName: 'WEB1',
    favInstructor: fred.name
});

console.log("\n", "Lambda School Rocks!\n\n")
console.log("Fred the instructor:", fred.speak());
console.log(david.listSubjects());
console.log(david.PRAssignment('Javascript-IV'));
console.log("Fred the instructor:", fred.demo("Javascript"));
console.log('Fred the instructor:', fred.grade(david.name, 'Javascript'));
console.log(david.sprintChallenge('Javascript'));
console.log(david.speak());
console.log(gab.speak());
console.log(gab.standUp('#web24'));
console.log(gab.debugsCode(david.name, 'Javascript'));
console.log(`${david.name}'s grade:`, david.classGrade);