// function add(num1, num2 ){
//     return num1 + num2;
// }
// const total = add(15, 25);
// console.log(total);



function add(num1, num2 = 20 ){ // es6 method 03
    // if(num2 == undefined){ //method 01
    //     num2 = 0;
    // }
    // num2= num2 || 0 ;  // method 02
    return num1 + num2;
}
const total = add(15);//ekta input kom dile
console.log(total);