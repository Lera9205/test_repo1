// Расчет среднего балла за домашние задания студента по модулям:
-введение - git - js;

let module_1 = 10;
let module_2 = 8;
let module_3 = 10;
let nameStudent = "Vadim";
let surnameStudent = "Ibragimov";
let fulnameStudent = nameStudent + " " + surnameStudent;
let average = module_1 + module_2 + module_3;
console.log(
  nameStudent.slice(0, 1) + "." + surnameStudent + "-" + " " + average / 3
);
console.log(`${fulnameStudent}` + "-" + average / 3);

// Сократить имя студента до первой буквы, применив метод slice() к переменной с  именем в команде вывода текста в консоль.

let module_1_1 = 10;
let module_2_2 = 8;
let module_3_3 = 10;
let nameStudent1 = "Vadim";
let surnameStudent1 = "Ibragimov";
let fulnameStudent1 = nameStudent1 + " " + surnameStudent1;
let average1 = module_1_1 + module_2_2 + module_3_3;
console.log(
  nameStudent1.slice(0, 1) + "." + surnameStudent1 + "-" + " " + average1 / 3
);
