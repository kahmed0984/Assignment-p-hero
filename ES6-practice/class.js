//es6 dinamic object
class Student{
    constructor(stdId, stdName, stdPhone, stdVill){
        this.id = stdId;
        this.name = stdName;
        this.phone = stdPhone;
        this.village = stdVill
        this.school = 'Kindergrdane School';
    }
}
const student1 = new Student(14, 'Shovo', +8801732586259, 'Mirpur-10');
const student2 = new Student(18, 'Mahiya', +8801725486475, 'Framgate');
const student3 = new Student(28, 'Bappi', +8801642586426, 'Uttora Diyabari');
console.log(student1, student2, student3);//Full objace show
console.log(student1.name, student2.name); //single value declear


