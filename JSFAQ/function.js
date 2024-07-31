// friendsAge = [12, 17, 19, 20, 18];
// for (let i = 0; i < friendsAge.length; i++) {
//     const age = friendsAge[i];
//     if(age % 2 == 0){
//         console.log(age, ': is even number')
//     }
//     else{
//         console.log(age*2, ': is odd number')
//     }
// }



// how to return call
function evenify(num){
    var result ;
    if(num % 2 == 0){
        result = num;
    }
    else{
        result = num*2 ;
    }
    return result;
}
var output = evenify(13);
var square = output*output;
console.log('Square = ', square);



// akta array te bijor thakle double kore diya
function evenify_all(nums){
    var even_array = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result = evenify(num);
        even_array.push(result);
    }
    return even_array;   
}
// nums = [5, 23,55, 6, 8, 9, 44];
// evenify_all(nums);

var friendsAge = [12, 17, 19, 20, 13];
var result = evenify_all(friendsAge);
console.log(result);



