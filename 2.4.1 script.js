/*Создать функцию, содержащую расчет суммы затрат, которые даны в массиве - в расчет берутся суммы только выше 1000. 
Расчет производится только для одного массива yearlyExpences.*/

function calculateExpenses(expenses) {
  // создана функция для расчета суммы затрат
  let total = 0;
  expenses.forEach((monthlyExpenses) => {
    monthlyExpenses.yearlyExpences.forEach((expense) => {
      if (expense > 1000) {
        total += expense;
      }
    });
  });
  return total;
}

function testCalculateExpenses() {
  let example1 = {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  }; // Тестовая функция для проверки расчета

  let totalExpenses = calculateExpenses([example1]);
  console.log("Total expenses above 1000: ", totalExpenses); //ожидаю получить сумму затрат(с учетом, что используются >1000) = 40590
}

testCalculateExpenses(); // Вызываем тестовую функцию
