// object er poperty
var student = { id:4334, phone:01732585965, name:"kawsar"};
var student2 = { id:3445, phone:01750023599, name:"kaium"};
console.log(student);


// poperty access working by 3 way
var stdName = student.name; //first way
console.log(stdName);

var stdPhone = student["phone"]; //second way
console.log(stdPhone);

var stdPropName = "name"; 
var stdName = student2[stdPropName]; // third way
console.log(stdName);

// poperty update
student.name = "Shahanawaj";
student.phone = 01739073029;
console.log(student);

// new poperty added
student.village = "Ulat";
console.log(student);
student["village"] = "kaskorora";
console.log(student);