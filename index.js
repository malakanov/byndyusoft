/* Напиши функцию, на вход которой приходит массив чисел. Функция возвращает сумму двух минимальных элементов массива.
Например, если дан массив [4, 0, 3, 19, 492, -10, 1], то результатом будет -10, потому что два минимальных числа -10 и 0, а их сумма -10.
Напиши минимум 3 модульных теста на эту функцию.
HINT: учти, что массив может быть пустым, или без цифр или состоять из 100 млн. элементов, поэтому надо учесть разные граничные условия. */

// const arr = [NaN, 19, 492, -10, 1, "HELLO", -34];

// Number.isFinite(arr[len])

function arrayMin(arr) {

  switch (true) {
    case !Array.isArray(arr):
      console.log("Argument is not array");
      break;
    case arr.length == 0:
      console.log("Array is empty");
      break;
    case arr.length == 1:
      console.log("In array only one element");
      break;
    default:
      findMin(arr);
  }

  function findMin(arr) {
    let min1 = arr[0];
    let min2 = arr[0];

    for (let i = 0; i < arr.length; ++i) {
      
      if (arr[i] < min1 && (arr[i]!== undefined && typeof(arr[i]) === 'number' && !isNaN(arr[i]))) {
        min1 = arr[i];
        
      }
    }
    for (let i = 0; i < arr.length; ++i) {
      if (arr[i] < min2 && arr[i] !== min1 && arr[i]!== undefined && typeof(arr[i]) === 'number' && !isNaN(arr[i])) {
        min2 = arr[i];
      }
    }

    console.log(min1);
    console.log(min2);
    console.log(min1 + min2);
    return(min1 + min2)
  }


}

arrayMin([4, 0, 3, 19, 492, -10, 1]);

module.exports = arrayMin;
