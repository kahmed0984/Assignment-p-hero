//  upor theke nis  ⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊
//  condition make
var money = 100 ;
if(money <= 99 ){
    console.log("I have not enough money.");
}
else{
    console.log("I will buy a clock");
};

// disisan joto issa diya jabe
var student = 5 ;
if(student == 12){
    console.log("I will rejap a car");
}
else if(student == 13){
    console.log("chikna 2ta 1 sit a bose ja");
}
else if(student == 11){
    console.log("1 ta sit faka taka besi de");
}
else if(student >= 14){
    console.log("er akta gari dek");
}
else{
    console.log("jar jar moto se se ja");
};

//    100 na hole nibona sob 100taka
var money = 101 ;
if(money != 100 ){
    console.log("kusra taka nibona");
}
else{
    console.log("sob 100 ja niba nau");
};

//  2 ta sorto akshate puron
var jobPaiso = true;
var savingAmount = 100000;
if(jobPaiso == true && savingAmount >= 200000){
    console.log("biyar jonno prostut");
}
else{
    console.log(" nay abar biya korbe!!");
};

//  je kono 1 ta sorto puron korte hobe
var jobPaiso = true;
var savingAmount = 100000;
if(jobPaiso == true || savingAmount >= 500000){
    console.log("kala mayar biya korbi?");
}
else{
    console.log(" nay abar biya korbe!!");
};




//  sadaron date berkorar niyom
var date = new Date;
console.log(date);
var date = new Date('2000-2-18 16:00 GMT+3');
console.log(date );



//  this is leep year
function checkLeapYear(year){
    if( ( year % 400 == 0) || ( year % 100 != 0 && year % 4 == 0)){
        console.log(year +' '+ 'is a leap year');
    }
    else{
        console.log(year +' '+ 'is not leap year');
    };
}
//for take input
// const year = prompt('Enter a year:');
// checkLeapYear(2024);
const result = checkLeapYear(2024);
console.log(result);


