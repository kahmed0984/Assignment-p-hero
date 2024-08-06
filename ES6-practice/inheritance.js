class Parent {
    constructor(){
        this.fatherName = "Schwerznegger";
        this.motherName = "Shukila Bagam"
    }
}
class Child extends Parent{ //es6 inheritance
    constructor(name, gender, roll){
        super();// extends korle super likte hoy
        this.name = name;
        this.gender = gender;
        this.roll = roll;
    }
    getFullName(){
        return this.name + ' ' + this.fatherName; // Just declear the function name
    }
}
const baby = new Child('Arnload', 'Male', 22);
const baby2 = new Child('Elizabeth', 'Female', 26);
console.log(baby);
console.log(baby2)
console.log(baby2.getFullName()); //function