
//  js feet to mile code 
function feetToMile(feet){
    if(feet > 0){
        var mile = feet/5280;
        return mile;
    }
    else{
        console.log('Worning! Feet would not be negative.')
        return 0;
    }
}
var feet = 42244;
var result = feetToMile(feet);
var finalResult = result.toFixed(3);
console.log( feet, "Feet =" ,finalResult , "Miles");





// wood calclulator
function woodCalculator(chair, table, bed){
    if(chair > 0 && table > 0 && bed > 0){
        var result = chair*1 + table*3 + bed*5;
        return result;
    }
    else{
        console.log('Worning! Check your entered number.')
        return false;
    }
}
var result = woodCalculator(5, 1, 2);
console.log("Needs =", result , "ft³ Wood");






// 01-system brick calculator 
function brickCalculator2(floor){
    if(floor > 0 && floor <= 10 ){
        floor = floor*15;
        console.log(floor * 1000 ,"Brick needs.");
    }
    else if(floor > 10 && floor <= 20 ){
        floor = floor*12  +30;
        console.log(floor * 1000 ,"Brick needs.");
    }
    else if(floor >= 21){
        floor = floor*10  +50 +20; //valo kore hisab kor kana
        console.log(floor * 1000 ,"Brick needs.");
    }
    else if(floor == 0){
        console.log("Floor would not be 0. Write a valid number.");
    }
    else{
        console.log('Worning! Floor would not be negative.');
    }
};
brickCalculator2(25);

// 02-system brick calculator 
function brickCalculator(floor){
    if(floor > 0 && floor <= 10 ){
        floor = floor*15;
        return floor;
    }
    else if(floor > 10 && floor <= 20 ){
        floor = floor*12  +30;
        return floor;
    }
    else if(floor >= 21){
        floor = floor*10  +50 +20; //valo kore hisab kor kana
        return floor;
    }
    else if(floor == 0){
        console.log("Floor would not be 0. Write a valid number.");
        return 0;
    }
    else{
        console.log('Worning! Floor would not be negative.')
    }
}
var floor = 50;
var result = brickCalculator(floor)*1000;
console.log(floor, "Floor =", result,  "Bricks needs.");





// onek koster sadhona
// array min problem solve  
var names = ['kawsar', 'kaium',  'enamul', 'c', 'shahanaouj', " ", 'tumi', 'ami'];
var min = names[0];
var max = names[0];
// console.log(min)     // min.length proyoon , word noy
for(var i = 0; i < names.length; i++){
    var element = names[i];
    // console.log(element, element.length);
    if( element.length < min.length && element != " "){
        min = element;
    }
    if( element.length > max.length){
        max = element;
    }
}
console.log('sob teke soto:', min, 'er-length', min.length);
console.log('sob teke boto:', max, 'er-length', max.length);









