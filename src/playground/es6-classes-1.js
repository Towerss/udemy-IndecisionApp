
class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi. I am ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person{
    constructor(name, homeLocation){
        super(name);
        this.location = homeLocation;
    }

    isLocation(){
        return !!this.location;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if(this.isLocation()){
            greeting += ` I'm visiting from ${this.location}.`
        }
        return greeting;
    }
}

/*
const me = new Person('Diego Torres', 36);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());
*/
/*
const me = new Student('Diego Torres', 36, 'Information Technology');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());
*/
const me = new Traveler('Diego Torres', 'Colombia');
console.log(me.getGreeting());

const other = new Traveler(undefined, 'Nowhere');
console.log(other.getGreeting());
