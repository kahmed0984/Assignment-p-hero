// array plus
const ages = [12, 14, 16 , 17, 20];
const ages2 = [ 15, 16, 12];
const ages3 = [ 25, 27, 28];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);//method 01
const allAges2 = [ages, ages2, 5, ages3];
const allAges3 = [...ages, ...ages2, 5, ...ages3]; // sprade operator es6 method 02
console.log(allAges);
console.log(allAges2);
console.log(allAges3);



//big number out of 3 number
const business = 550;
const minister = 350;
const sochib = 250;
const maximum = Math.max(business, minister, sochib); //method 01
console.log(maximum);

const takaPoisa  = [520, 360, 880, 460];
const maximum2 = Math.max(...takaPoisa); // method 02 , sprade operator
console.log(maximum2);
