const hubby = "Elias Kanchon";
console.log(hubby);

const numbers = [12, 45];
numbers[1] = 88;
numbers.push(12);
//numbers = ['sakib', 'sieam', 'suvo']; // value change korte na cayle const applay korte hoy
//const mayok = {name:'arfin suvo', phone:22357}// pura array/object change hobe na
console.log(numbers);


let patientName = 'Rahim Chacha';//let er value change hoy
patientName = 'Fatema Khala';
console.log(patientName);

// Let er boto akta use case holo   scope variable
let sum = 0;
for(var i=0; i<10 ; i++){
    sum = sum + i;
}
console.log(i);
// let changable and like profe
let summ = 0;
for(let a=0; a<8 ; a++){
    summ = summ + a;
}
// console.log(a);


