// 2.3.3.-- Функциональная задача: Получение посылки в почтамате

class Postamat {
  // создан класс, в котором есть массив со значениями и баланс
  constructor() {
    this.packages = [null, null, null, "1432HGF", null];
    this.cardAccount = 500;
  }

  receivePackage(code) {
    // метод, коотрый описывает как получить посылку (если посылка найдена, списываются деньги со счета)
    const packageIndex = this.packages.indexOf(code);
    if (packageIndex !== -1) {
      // если код совпал, то списывать 100 ед. и вывести уведомление
      this.packages[packageIndex] = null;
      this.cardAccount -= 100;
      console.log(
        `Заберите посылку ${code} из ячейки №${
          packageIndex + 1
        }. Ваш счет составляет: ${this.cardAccount}ед.`
      );
    } else {
      console.log("Посылка с таким кодом не найдена."); // условие, когда посылка не найдена, вывести это уведомление
    }
  }
}

const postamat = new Postamat();
const smsCode = "1432HGF";
postamat.receivePackage(smsCode);

/* При const smsCode = "A001DFX0" -- вернулось сообщение: "Посылка с таким кодом не найдена."
   При const smsCode = "1432HGF" --  вернулось сообщение: "Заберите посылку 1432HGF из ячейки №4. Ваш счет составляет: 400ед."*/
