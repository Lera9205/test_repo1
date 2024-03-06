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
