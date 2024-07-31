/*  array er first eleminter position holo 0 
    tar porer joner ek ek kore barbe   */
var friendsAge = [22, 20, 24, 25 ];
// niddisto ak jon ke show korar jonno
console.log("tar boyos " , friendsAge[3] ,"bosor");
friendsAge[3] = 30;
console.log(friendsAge);
var rifatAge = friendsAge[0];
console.log(rifatAge);
//  koto position a ase
var position = friendsAge.indexOf(24);
console.log(position);
// 25 5number line a ase 30 hoyse tay
var position = friendsAge.indexOf(25);
console.log(position);
console.log(friendsAge.length);
friendsAge.push(46);  // add the last element
friendsAge.push(51);
console.log(friendsAge);
console.log(friendsAge.length);

friendsAge.pop();  // last er array ber kore deoar jonno
console.log(friendsAge);
friendsAge.shift();  // removes the first element
console.log(friendsAge);
friendsAge.unshift(5);  // add the first element
console.log(friendsAge);
 


//slice array teke  kisu ongso kete nay and pura array okkhoto teke jay
var friendsName = ['kawsar', 'kaium', 'enamul', 'rifat', 'enay', 'sagor']; //what is this i dont understand
var friends = friendsName.slice(2, -1);//kisu kete nay and pura thik thake
console.log(friendsName);
console.log(friends);
var friends = friendsName.splice(-4, 2, 'hamim', 'ramim', 200);//permanent vabe kete nay
console.log(friendsName);
console.log(friends);
