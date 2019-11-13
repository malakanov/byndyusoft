const arrayMin = require("../index");

function testArrayMin() {
  const arr = [4, 0, 3, 19, 492, -10, 1],
    valueExpected = -10;

  if (arrayMin(arr) === valueExpected) {
    console.log("Тест пройден");
  } else {
    console.log("Тест не пройден");
  }
}

function testArrayText() {
  const arr = ["4", "0", "3", "19", "492", "-10", "1"],
    valueExpected = 'Массив не содержит чисел';

  if (arrayMin(arr) === valueExpected) {
    console.log("Тест пройден");
  } else {
    console.log("Тест не пройден");
  }
}

function testArrayEmpty() {
  const arr = [],
    valueExpected = "В функцию передан не массив или пустой массив";

  if (arrayMin(arr) === valueExpected) {
    console.log("Тест пройден");
  } else {
    console.log("Тест не пройден");
  }
}

testArrayMin();
testArrayText();
testArrayEmpty();
