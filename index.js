/* Напиши функцию, на вход которой приходит массив чисел. Функция возвращает сумму двух минимальных элементов массива.
Например, если дан массив [4, 0, 3, 19, 492, -10, 1], то результатом будет -10, потому что два минимальных числа -10 и 0, а их сумма -10.
Напиши минимум 3 модульных теста на эту функцию.
HINT: учти, что массив может быть пустым, или без цифр или состоять из 100 млн. элементов, поэтому надо учесть разные граничные условия. */

// const arr = [NaN, 19, 492, -10, 1, "HELLO", -34];




function arrayMin (arr) {

  console.log(Number.isFinite(arr[1]))
  
  
switch (true) { 
  case !Array.isArray(arr):
      console.log('Argument is not array');
      break;
  case arr.length == 0:
      console.log('Array is empty');
      break;
  // case !Number.isFinite(forecarr):
  //     console.log('Array without numbers');
  //     break;
  default:
      findMin(arr);
}

function findMin (arr) {
  
  let len = arr.length,
  min1 = Infinity,
  min2 = Infinity;
while (len--) {
  if (Number(arr[len]) < min1 && arr[len], Number.isFinite(arr[len]) ) {
    min1 = Number(arr[len]);
  }
  if (Number(arr[len]) < min2 && Number(arr[len]) !== min1) {
    min2 = Number(arr[len]);
  }
}
console.log(min1 + min2)
return (min1 + min2);
}

}
// }

//   switch (arr) {
//     case !Array.isArray(arr):
//       console.log('В функцию передан не массив');
//       break;
//     case Array.isArray(arr) && arr.length == 0:
//       alert( 'В функцию передан пустой массив' );
//       break;
//   }



arrayMin([4, 0, 3, 19, 492, -10, 1])


module.exports = arrayMin