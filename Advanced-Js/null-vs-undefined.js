let pakhi;
console.log("Number 01:",pakhi);


function add(num1 , num2){
    total = num1 + num2 ;
    // return total;     //retutn na korle,  undefined
}console.log(add(25, 55));


function add(num1 , num2){
    total = num2 ;   // 2 ta number er valu na thakay
    return total;     
}console.log(add(5,25)); 


// object a value na thakay
const premik = {name:"smart dude", phone:554545, roll:05}
console.log(premik.phone);
console.log(premik.gf);


let fun = undefined;
console.log(fun);


let ages = [2,5,8];
console.log(ages[4]);



  




function add(num1 , num2){
    total = num1 + num2 ;
    return total;    
}
result = add(25); // 1 ta value deyar jonno NaN hoyse
console.log(result);