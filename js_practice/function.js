// Basic function code
function doubleIt(num){
    var result = num*2;
    console.log(result);
};
doubleIt(5);
doubleIt(50);




// Callback function importent
function doubleIt(num){
    var result = num*2;
    return result;
}
var first = doubleIt(5);
var second = doubleIt(50);
var total = first + second;
console.log(total);




function add(num1, num2){
    var result = num1 + num2;
    return result;
}
var sum = add(60, 2);
console.log(sum);