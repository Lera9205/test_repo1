const calculateBonus = (a, b) => {
  let bonus; // на этой точке приняты значения a и b = 20 и 10, let bonus еще не объявлен
  const sum = a + b; // объявление переменной sum, которая равна значению a+b
  debugger;
  sum > 50 ? (bonus = 50) : (bonus = sum); // тернарный оператор. На этом шаге уже определилась сумма (sum = 30)
  //Условия - если sum > 50? То бонус = 50, в противном случае, бонус = sum

  debugger;
  return bonus;
};

console.log(calculateBonus(20, 10));
