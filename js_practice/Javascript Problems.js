// 01 swap problems by a and b
var a = 5;
var b = 8;
console.log("before swap: a=" ,a , "b=" , b);
var temp = a;
a = b ;
b = temp;
console.log("after swap: a=" ,a , "b=" , b);

// 02 swap problem by x and y
var x = 4;
var y = 6;
console.log("Before swap: x=" ,x , "y=" , y);
x = x + y;
y = x - y;
x = x - y;
console.log("after swap: x=" ,x , "y=" , y);

// 03 swap problel by  program language
var p = 5;
var q = 7;
console.log("before swap: p=" ,p , "q=" , q);
[p, q] = [q, p];
console.log("after swap: p=" ,p , "q=" , q);








// random songkha genarate
var randomNum = Math.random() * 100;
// var output = Math.round(randomNum);
console.log(randomNum);

for(var i = 0; i < 5 ; i++ ){
    var randomNum = Math.random() * 10;
    var output = Math.round(randomNum);
    console.log(output);
}







// 01 bigger number of three number
var business = 444;
var minister = 333;
var sochib = 666;
if(business > minister){
    if(business > sochib){
        console.log('Business is bigger');
    }
    else{
        console.log('Sochib is bigger');
    }
}
else{
    if(minister > sochib ){
        console.log('Minister is bigger');
    }
    else{
        console.log('sochib is bigger')
    }
}
// 02 bigger number of three number
var a = 4;
var b = 6;
var c = 8;
if( a>b && a>c){
    console.log('A is beggiest ');
}
else if ( b>a && b>c ){
    console.log('B is beggiest ');
}
else{
    console.log('C is beggiest ');
}
// 03 bigger number of three number by Javascript
var business = 444;
var minister = 333;
var sochib = 666;
var max = Math.max(business, minister, sochib);
console.log(max);
// 3 sonkhar vitor sob teke soto sonkha
var min = Math.min(business, minister, sochib);
console.log(min);







// array max problem solve
var marks = [34, 56, 25, 27, 37, 36, 64, 35];
var max = marks[0];
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log('Highest value is: ', max);







// array sum problem solve
var numbers = [34, 36, 67, 34, 37, 36, 64, 35];
var sum = 0;
for( var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;
}
console.log('your result is : ', sum);
// by function 
function getArraySum(numbers){
    var sum = 0;
    for( var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [34, 36, 67, 34, 37, 36, 64, 35];
var result = getArraySum(numbers);
console.log('Your result is : ', result);
var total = getArraySum([10, 20, 30, 40]);
console.log('Your result is : ', total);








// deuplicate array check
var name = ['kawsar', 'kaium', 'enamul', 'rifat', 'mim', 'rifat', 'enamul'];
var uniqueName = [];
for(var i = 0; i<name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);







// wordCount array check
var speech = "I am a good person. I don't snore at night.";
var count = 0;
for(var i =0; i<speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i-1] != " "){
        count++;
    }
}
count++;
console.log(count);






// reverse array check
function reverseString(str){
    var reverse = "";
    for(var i = 0; i<str.length; i++){
        var char = str[i];
        reverse = char +  reverse;
    }
    return reverse;
}
var statement = " Hello World , I am Kawsar Ahmed";
var forAlien = reverseString(statement);
console.log(forAlien);




