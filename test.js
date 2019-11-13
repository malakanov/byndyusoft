describe("arrayMin", function() {

  it("Функция возвращает сумму двух минимальных элементов массива.", function() {
    // assert.equal(pow(2, 3), 8);
    assert.equal( 
      function arrayMin() {
        let arr = [4, 0, 3, 19, 492, -10, 1]
      // Проверяем передан ли массив и не пустой ли он
      if (Array.isArray(arr) && arr.length > 0) {
        
          let len = arr.length,
            min1 = Infinity,
            min2 = Infinity;
          while (len--) {
            if (Number(arr[len]) < min1) {
              min1 = Number(arr[len]);
            }
            if (Number(arr[len]) < min2 && Number(arr[len]) != min1) {
              min2 = Number(arr[len]);
            }
          }
          return console.log(min1 + min2);
        
      } else console.log("В функцию передан не массив или пустой массив");
      
      }, -10)

  });

});