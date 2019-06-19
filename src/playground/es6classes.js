class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return 'Hi, I am ' + this.name + '!';
    }
    getDiscription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let desctiption = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }  
}

class Traveler extends Person {
    constructor(name, age, major, location) {
        super(name, age);
        this.location = location;
    }
    homeLocation(){
        return !!this.location;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.hasLocation()) {
            greeting += ` I am visitng from ${this.location}.`
        }
        return greeting;
    }
}

const me = new Student ('Ben Meyer', 24, 'Film', 'Minneapolis')

console.log(me.);
