``` js
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() // obj.inner.value = 2
obj2.hello() // obj.inner.value = 2
hello() // undefined
```
輸出的結果會是：
```
2
2
undefined
```
* `obj.inner.hello()` 這個 function 會呼叫到的是 `obj` 裡面的 `inner` 的 hello function，對這個 hello function 來說，`obj.inner` 會變成 hello function 裡面的 `this`，所以最後輸出的是 `obj.inner` 裡面的 `value` 2。
  
* `obj2.hello()`，因為前面就宣告 `const obj2 = obj.inner`，因此會得到跟上面一樣的答案，hello function 裡面的 `this` 被代換成 `obj2` 也就是 `obj.inner`，因此輸出的是 `obj.inner` 裡面的 `value` 2。
  
* 最後直接呼叫 `hello()`，裡面的 this 會被代換成 window 或 global，但因為這兩個都沒有賦值 `value`，所以得到的結果是 undefined。
(補：有趣的是，如果開頭加上 `'use strict'`，則會得到 `Uncaught TypeError: Cannot read property 'value' of undefined at hello`，因為 `this` 已經是 undefined 了，所以它才會出現這種錯誤訊息。)