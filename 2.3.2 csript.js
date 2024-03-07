/*Опишите кнопку отправки сообщений в чат с помощью конструктора класса, кнопка должна иметь определенный размер 
- ширина и высота числовое значение, тип кнопки (type = button), цвет кнопки (green), создайте метод кнопки 
onClick, выводящий в консоль информацию о нашей кнопке в формате*/

class Button {
  constructor(width, height, type, color) {
    // создан класс
    this.props = {
      width: width,
      height: height,
      type: type,
      color: color,
    };
  }

  onClick() {
    console.log(this.props); // метод кнопки onClick, который выведет все свойства
  }
}

function testButton() {
  const chatButton = new Button(100, 50, "button", "green");
  chatButton.onClick(); // вызываем метод onClick для проверки вывода информации о кнопке в консоль
}

testButton(); // функция, которая проверет, что свойства экземпляра класса соответствуют заданным
