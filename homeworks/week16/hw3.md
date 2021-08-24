``` js
var a = 1
function fn(){
  console.log(a)  // 1
  var a = 5
  console.log(a)  // 2
  a++
  var a
  fn2()
  console.log(a)  // 4
  function fn2(){
    console.log(a)  // 3
    a = 20
    b = 100
  }
}
fn()
console.log(a)  // 5
a = 10
console.log(a)  // 6
console.log(b)  // 7
```
輸出結果：
```
undefined
5
6
20
1
10
100
```
首先，在 global 宣告變數 a 為 1，在定義完 `fn()` 這個 function 之後，就執行它。

1. 接著到了第一個 `console.log(a)`，由於 hoisting 的緣故，下一行 `var a = 5` 中的 `var a` 會被 hoist 到 `console.log(a)` 之前，所以輸出 `undefined`。

2. 第二個 `console.log(a)`，因為前一行 `var a = 5` 賦值，所以輸出 5，接著 a++，a 變為 6，下一行的 `var a`，不會改變任何東西。

3. 進到 `fn2()`，第三個 `console.log(a)`，由於在 `fn2()` 裡面沒有宣告 a，因此它會往上一層的 `fn()` 找，輸出 a 為 6，接著這個上一層的 a 會被 `fn2()` 裡面的程式賦值為 20。

另外，下一行的 `b = 100`，因為 `fn2()`、`fn()` 以及 global 都沒有宣告，所以會被設定為全域變數 `b = 100`。

4. 回到 `fn()`，第四個 `console.log(a)` 因為 `fn2()` 賦值的緣故，會輸出 20。

5. 再來，`fn()` 跑完以後，到了第五個 `console.log(a)`，因為變數的 scope，前面提到的 a 都被 pop 掉了，只剩下整個程式第一行宣告的 `var a = 1`，因此輸出 1。

6. 下一行 `a = 10`，a 被賦值為 10 ，因此第六個 `console.log(a)` 會輸出 10。

7. 最後的 `console.log(b)`，由於 `fn2()` 裡面 `b = 100` 的緣故，設定了全域變數 b 為 100，因此輸出 100。