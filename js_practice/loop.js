//   while and for loop discation
var num = 5;
while (num <=15 ){
    console.log(num);
    num = num + 1; //  num++
};

for(var i = 0; i <= 10; i++){
    console.log(i);
};



var number = [33, 55,33, 45, 09, 45, 54, 63];
for(var i=0; i<number.length; i++){
    var element = number[i];
    console.log(element)
};



//  factorial by for-loop
function factorial(n){
    var i,fact=1;
    for( i=1;i<=n;i++){
        fact = fact*i;
    }
    return fact;
}
var result = factorial(5);
var name ='your factrial:';
console.log(name,result);



//  factorial by while-loop
function factorial(n){
    var i=1,fact=1;
    while(i<=n){
        fact = fact*i;
        i++;
    }
    return fact;
}
var result= factorial(6);
console.log(result);




// recursive practice for and while loop
function ourFactorial(n){
    factorial = 1;
    for(var i = n; i >= 1; i--){
        factorial = factorial *i;
    };
    return factorial;
}
console.log(ourFactorial(6));

var i=10;
while(i>=1){
    i--
    console.log(i);
}




// recursiv facrorial practice
function fact(n){
    //  0! = 1 
    if( n == 0){
        return 1;
    }
    else{
        /*5! = 1*2*3*4*5
          5! = 4!*5
          5! = (5-1) ! *5
          n! = (n-1) ! *n
        */
        return fact(n-1)*n;
    }
}
var result= fact(5);
console.log(result);




// practice fibonacci number
function fibonacci(n){
    var fibo = [0,1];
    for(var i=2; i<=n; i++){
    /*  fibo[3] = fibo[3-1] + fibo[3-2]
        fibo[4] = fibo[4-1] + fibo[4-2]
        fibo[n] = fibo[n-1] + fibo[n-2]
        fibo[i] = fibo[i-1] + fibo[i-2]  */

        fibo[i] = fibo[i-1] + fibo[i-2]
    }
    return fibo;
}
var result = fibonacci(12);
console.log(result);




// fibonacci by recursive way like 63 line
// sudhu sonkha nice dhara dekhanon holo
function fibonacci(n){
    if (n==0){
        return 0;
    }
    if (n==1){
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
var result = fibonacci(10); //shudu 10 tomo pod
console.log(result);







// fibonacci series recursive way 
// 0 1 1 2 3 5 8 13
function fibonacci(n){
     if(n == 0 ){
        return [0]
     }
     else if(n==1){
        return [0,1];
     }
     else{
        var fibo = fibonacci(n-1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo;
     }
} 
var result = fibonacci(15);
console.log(result);






// prime number 
function isPrime(n){
    for(i = 2; i < n; i++){
        if(n%i == 0){
            return "not a prime number"
        }
    }
    return ' prime number'
}
var result = isPrime(139);
console.log(result);




