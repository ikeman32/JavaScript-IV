// CODE here for your Lambda Classes

class School {
    constructor(school) {
        this.schoolName = school.schoolName;
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
    gradeStudent(student, modifier) {
        let newGrade = 0;
        switch (student.name) {
            case student.name:
                if (modifier === '+') {
                    newGrade = Math.round(Math.random() * (6 - 1) + 1);
                    student.classGrade += newGrade;

                } else if (modifier === '-') {
                    newGrade =
                        student.classGrade += Math.round((Math.random() * (6 - 1) + 1) * -1);
                } else {
                    return 'invalid entry';
                }

                break;
            default:
                return 'Student not found.'
        }
        return `${this.name} has adjusted ${student.name}'s grade by ${newGrade} points.`
    }
    graduated(student) {
        while (student.classGrade < 70) {
            student.classGrade += Math.round(Math.random() * (6 - 1) + 1);
            console.log(`${student.name}'s has been adjusted and the new grade is ${student.classGrade}`);
            if (student.classGrade < 70) {
                console.log(`${student.name}'s still too low adjusting grade`);
            } else {
                return student.graduate();
            }
        }
    }
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

    graduate() {
        if (this.classGrade >= 70) {
            return `${this.name} has graduated with a grade of ${this.classGrade}!`
        } else {
            return `We're sory ${this.name} you are unable to graduate with a score of ${this.classGrade} have your instructor increase your grade.`
        }
    }
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

    gradeStudent(student, modifier) {
        let newGrade = 0;
        switch (student.name) {
            case student.name:
                if (modifier === '+') {
                    newGrade = Math.round(Math.random() * (6 - 1) + 1);
                    student.classGrade += newGrade;

                } else if (modifier === '-') {
                    newGrade =
                        student.classGrade += Math.round((Math.random() * (6 - 1) + 1) * -1);
                } else {
                    return 'invalid entry';
                }

                break;
            default:
                return 'Student not found.'
        }
        return `${this.name} has adjusted ${student.name}'s grade by ${newGrade} points.`
    }
    graduated(student) {
        while (student.classGrade < 70) {
            student.classGrade += Math.round(Math.random() * (6 - 1) + 1);
            console.log(`${student.name}'s has been adjusted and the new grade is ${student.classGrade}`);
            if (student.classGrade < 70) {
                console.log(`${student.name}'s still too low adjusting grade`);
            } else {
                return student.graduate();
            }
        }
    }
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


const david = new Student({

    name: 'David',
    location: 'Moses Lake, WA',
    age: 48,
    schoolName: lambda.schoolName,
    previousBackground: 'US Army Veteran',
    className: 'WEB24',
    classGrade: Math.round(Math.random() * (100 - 1) + 1),
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
console.log(fred.gradeStudent(david, '+'));
console.log(`David's new grade is`, david.classGrade);
console.log(david.graduate());
console.log(fred.graduated(david));