
// arguments is a    array like object
// push pop is not work
function addNumber(num1, num2){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const number = arguments[i];
        sum = sum + number;
    }
    return sum;
}


var result = addNumber(3, 4, 6, 7, 13);
console.log(result);



