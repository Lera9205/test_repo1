// Расчет среднего балла за домашние задания студента по модулям:
-введение - git - js;

let module_1 = 10;
let module_2 = 8;
let module_3 = 10;
let nameStudent = "Vadim";
let surnameStudent = "Ibragimov";
let fulnameStudent = nameStudent + " " + surnameStudent;
let average = module_1 + module_2 + module_3;
console.log(`${fulnameStudent}` + "-" + average / 3);
