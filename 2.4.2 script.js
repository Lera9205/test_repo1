//Вывести название месяцев, в которых затраты меньше либо равны 1000 - использовать для этого объект Date.

let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]; // создана переменная с месяцами

expencesExamples.forEach((expenses, index) => {
  // forEach, который перебирает массив "expencesExamples"
  let monthlyExpences = expenses.yearlyExpences; //создана переменная "месячные затраты"

  console.log(`Expenses less or equal to 1000 in ${months[index]}`); //вывести значение месяцев, в которых которых затраты меньше либо равны 1000
  monthlyExpences.forEach((expense, monthIndex) => {
    if (expense <= 1000) {
      console.log(`Month ${months[monthIndex]} - Expense ${expense}`);
    }
  });
});
