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





// arguments is a array like object

function getFullName(firstName, lastName){
    // console.log(arguments);
    // const result = [...arguments].join(' '); // make a array
    let fullName = '';
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        fullName = fullName + ' ' + element;
    }
    return fullName;
}


const name = getFullName('amar', 'sonar', 'bangla', 'ami', 'tomay', 'valobashi');
console.log (name);