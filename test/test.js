// For run test use :  node test.js


const arrayMin = require("../index");

function testArrayMin() {
  const arr = [4, 0, 3, 19, 492, -10, 1],
    valueExpected = -10;

  if (arrayMin(arr) === valueExpected) {
    console.log("Тест testArrayMin пройден");
  } else {
    console.log("Тест testArrayMin не пройден");
  }
}

function testArrayNotArray() {
  const arr = {},
    valueExpected = "В функцию передан не массив";

  if (arrayMin(arr) === valueExpected) {
    console.log("Тест testArrayNotArray пройден");
  } else {
    console.log("Тест testArrayNotArray не пройден");
  }
}

function testArrayEmpty() {
  const arr = [],
    valueExpected = "Переданный массив пуст";

  if (arrayMin(arr) === valueExpected) {
    console.log("Тест testArrayEmpty пройден");
  } else {
    console.log("Тест testArrayEmpty не пройден");
  }
}
function testArrayOneElem() {
  const arr = [1],
    valueExpected = "Массив содержит только один элемент";

  if (arrayMin(arr) === valueExpected) {
    console.log("Тест testArrayOneElem пройден");
  } else {
    console.log("Тест testArrayOneElem не пройден");
  }
}



testArrayMin();
testArrayNotArray()
testArrayEmpty()
testArrayOneElem()

