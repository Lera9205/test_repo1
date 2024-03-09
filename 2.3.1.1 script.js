//Задание - вывести игрока с максимальным значением

const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

const allScorePoints = []; //создан пустой массив для хранения очков

for (elementKey in players) {
  allScorePoints[elementKey] = players[elementKey].scorePoints; // заполняется созданный пустой массив данными из массива players
}

console.log(allScorePoints); // массив заполнен корректно

const maxScorePoints = Math.max(...allScorePoints); // рассчитать максимальное число из массива очков

console.log(maxScorePoints);

for (elementKey in players) {
  if (players[elementKey].scorePoints == maxScorePoints) {
    console.log(players[elementKey]); //выведен игрок с максимальным кол-вом очков.
  }
}

// создан абор тестовых данных  при помощи ChatGPT
//Вывести в консоль выпускника с самым поздним годом выпуска

const schoolGraduate = [
  {
    id: 1,
    name: "Иванов Иван",
    year: 2015,
  },
  {
    id: 2,
    name: "Петрова Мария",
    year: 2016,
  },
  {
    id: 3,
    name: "Сидоров Алексей",
    year: 2017,
  },
  {
    id: 4,
    name: "Павлова Екатерина",
    year: 2018,
  },
  {
    id: 5,
    name: "Смирнов Дмитрий",
    year: 2019,
  },
];

const allYears = []; //создан пустой массив для хранения годов выпуска
for (elementKey in schoolGraduate) {
  allYears[elementKey] = schoolGraduate[elementKey].year; // заполняется созданный пустой массив данными выпускных годов
  console.log(allYears);
  const maxYears = Math.max(...allYears); // рассчитать максимальное значение выпускного года

  console.log(maxYears);

  for (elementKey in schoolGraduate) {
    if (schoolGraduate[elementKey].year == maxYears) {
      console.log(schoolGraduate[elementKey]); //выведен выпускник с самым поздним годом выпуска
    }
  }
}
