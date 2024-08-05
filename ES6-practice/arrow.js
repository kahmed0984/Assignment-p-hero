// function doubleIt(num){  //method 01
//     return num * 2;
// }


// const doubleIt = function(num){ //method 02
//     return num * 2;
// }


//es6 function start , method 03 es6 function
const doubleIt = num => num*2 ; 
const result = doubleIt(5);
console.log( 'Result =', result);

const give5 = () => 5 ;  // without any perameter
console.log(give5());

const doMath = (x, y) => {  // multiplul perametar applay
    const sum = x + y;
    const diff = x - y;
    const result =sum * diff ;
    return result;
} 
const final = doMath(7, 5);
console.log(final);


