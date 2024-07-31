function explain_callback(name, age, task){
    console.log('Hello ', name);
    console.log('your age  ', age);
    task();
}

function washHand(){
    console.log('wash hand with soap')
}
function takeShower(){
    console.log('Take shower')
}



explain_callback('kawsar', 24, washHand);
explain_callback('kaium', 19, takeShower);








function wellComeGuest(name, greetHandler){
    greetHandler(name);
}
const actorName = 'Kawsar Ahmed';

function greetMorning(name){
    console.log('good morning', name)
}   
function greetEvening(name){
    console.log('good Evening', name)
}   
function greetAfternoon(name){
    console.log('good Afternoon', name)
}   

wellComeGuest(actorName, greetAfternoon);
wellComeGuest('Kate Winslet', greetEvening);
wellComeGuest('Tom  Hanks', function(name){
    console.log('Spacial Welcome',  name)
});





